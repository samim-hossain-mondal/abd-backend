const OktaJwtVerifier = require('@okta/jwt-verifier');
const { OIDC } = require('../config');
const { HttpError } = require('../errors');
const { managementPrisma } = require('../prismaClient');

const oktaJwtVerifier = new OktaJwtVerifier(OIDC);


// open api schema for bearer auth
/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: Bearer JWT
 *       description: JWT token for authentication prefixed with `Bearer`
 *       in: header
 *       name: Authorization
 */
async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const match = authHeader.match(/^Bearer (.+)$/);

    if (!match) {
      return res.status(401).send('Unauthorized');
    }

    const accessToken = match[1];
    const audience = OIDC.assertClaims.aud;

    return oktaJwtVerifier.verifyAccessToken(accessToken, audience)
      .then(async (jwt) => {
        const email = jwt.claims.sub;
        const fullName = jwt.claims.firstName.concat(' ', jwt.claims.lastName);
        let memberId = null;
        const member = await managementPrisma.member.upsert({
          where: {
            email,
          },
          update: {
          },
          create: {
            email,
            name: fullName
          },
        });

        if (member) {
          memberId = member.memberId;
        }

        const user = {
          uid: jwt.claims.uid,
          email: jwt.claims.sub,
          groups: jwt.claims.groups,
          name: fullName,
          memberId: memberId
        };
        req.user = user;
        next();
      })
      .catch((err) => {
        next(new HttpError(401, err.message));
      });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  authMiddleware
};