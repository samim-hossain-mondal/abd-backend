/** function to parse the parameters of the request
 * @param {Object} requiredParams - object with the parameters to parse
 * @returns {Function} - function to be used as middleware
 */

const { HttpError } = require('../errors');

const paramParser = (requiredParams) => {
  return (req, res, next) => {
    Object.keys(requiredParams).map((param) => {
      const requiredType = requiredParams[param];
      const value = req.params[param];
      if (!value) {
        return res.status(400).send(`${param} parameter is required.`);
      }
      let parsedValue;
      switch (requiredType) {
      case 'string':
        parsedValue = String(value);
        break;
      case 'number':
        parsedValue = Number(value);
        break;
      case 'boolean':
        parsedValue = Boolean(value);
        break;
      default:
        next(new HttpError(400, `Unsupported data type ${requiredType} for ${param}.`));
      }
      if (isNaN(parsedValue) || parsedValue === undefined || Number.isNaN(parsedValue)) {
        next(new HttpError(400, `Invalid ${param} parameter: ${value}, expected data type - ${requiredType}.`));
      }
      req.params[param] = parsedValue;
    });

    next();
  };
};

module.exports = {
  paramParser
};