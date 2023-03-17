
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.11.0
 * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
 */
Prisma.prismaVersion = {
  client: "4.11.0",
  engine: "8fde8fef4033376662cad983758335009d522acb"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "../../src/generated/dashboard",
    "../src/generated/dashboard",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AnnouncementScalarFieldEnum = makeEnum({
  announcementId: 'announcementId',
  author: 'author',
  content: 'content',
  createdAt: 'createdAt',
  projectId: 'projectId'
});

exports.Prisma.CelebrationReactedUserScalarFieldEnum = makeEnum({
  userId: 'userId',
  celebrationId: 'celebrationId',
  reactionId: 'reactionId'
});

exports.Prisma.CelebrationScalarFieldEnum = makeEnum({
  author: 'author',
  content: 'content',
  createdAt: 'createdAt',
  type: 'type',
  celebrationId: 'celebrationId',
  isAnonymous: 'isAnonymous',
  projectId: 'projectId'
});

exports.Prisma.PONoteScalarFieldEnum = makeEnum({
  noteId: 'noteId',
  type: 'type',
  status: 'status',
  note: 'note',
  createdAt: 'createdAt',
  dueDate: 'dueDate',
  issueLink: 'issueLink',
  isDeleted: 'isDeleted',
  projectId: 'projectId',
  memberId: 'memberId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RequestScalarFieldEnum = makeEnum({
  author: 'author',
  content: 'content',
  status: 'status',
  type: 'type',
  createdAt: 'createdAt',
  requestId: 'requestId',
  projectId: 'projectId'
});

exports.Prisma.RequestTaggedUserScalarFieldEnum = makeEnum({
  userId: 'userId',
  requestId: 'requestId',
  tagId: 'tagId'
});

exports.Prisma.SentimentMeterScalarFieldEnum = makeEnum({
  author: 'author',
  sentiment: 'sentiment',
  createdAt: 'createdAt',
  sentimentId: 'sentimentId',
  projectId: 'projectId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.CelebrationType = makeEnum({
  CELEBRATION: 'CELEBRATION',
  IMPEDIMENT: 'IMPEDIMENT'
});

exports.RequestStatus = makeEnum({
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  DENIED: 'DENIED'
});

exports.RequestType = makeEnum({
  RESOURCE: 'RESOURCE',
  MEETING: 'MEETING'
});

exports.Sentiment = makeEnum({
  HAPPY: 'HAPPY',
  GOOD: 'GOOD',
  OK: 'OK',
  BAD: 'BAD'
});

exports.Status = makeEnum({
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  NONE: 'NONE',
  DRAFT: 'DRAFT'
});

exports.Type = makeEnum({
  ACTION_ITEM: 'ACTION_ITEM',
  KEY_DECISION: 'KEY_DECISION',
  AGENDA_ITEM: 'AGENDA_ITEM'
});

exports.Prisma.ModelName = makeEnum({
  PONote: 'PONote',
  SentimentMeter: 'SentimentMeter',
  CelebrationReactedUser: 'CelebrationReactedUser',
  Celebration: 'Celebration',
  RequestTaggedUser: 'RequestTaggedUser',
  Request: 'Request',
  Announcement: 'Announcement'
});

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"Status\",\"values\":[{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"NONE\",\"dbName\":null},{\"name\":\"DRAFT\",\"dbName\":null}],\"dbName\":null},{\"name\":\"Type\",\"values\":[{\"name\":\"ACTION_ITEM\",\"dbName\":null},{\"name\":\"KEY_DECISION\",\"dbName\":null},{\"name\":\"AGENDA_ITEM\",\"dbName\":null}],\"dbName\":null},{\"name\":\"Sentiment\",\"values\":[{\"name\":\"HAPPY\",\"dbName\":null},{\"name\":\"GOOD\",\"dbName\":null},{\"name\":\"OK\",\"dbName\":null},{\"name\":\"BAD\",\"dbName\":null}],\"dbName\":null},{\"name\":\"RequestStatus\",\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"APPROVED\",\"dbName\":null},{\"name\":\"DENIED\",\"dbName\":null}],\"dbName\":null},{\"name\":\"RequestType\",\"values\":[{\"name\":\"RESOURCE\",\"dbName\":null},{\"name\":\"MEETING\",\"dbName\":null}],\"dbName\":null},{\"name\":\"CelebrationType\",\"values\":[{\"name\":\"CELEBRATION\",\"dbName\":null},{\"name\":\"IMPEDIMENT\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"PONote\",\"dbName\":null,\"fields\":[{\"name\":\"noteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Type\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Status\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issueLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDeleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"SentimentMeter\",\"dbName\":null,\"fields\":[{\"name\":\"author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentiment\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sentiment\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentimentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"CelebrationReactedUser\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"celebrationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reactionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Celebration\",\"relationName\":\"CelebrationToCelebrationReactedUser\",\"relationFromFields\":[\"celebrationId\"],\"relationToFields\":[\"celebrationId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"celebrationId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"celebrationId\"]}],\"isGenerated\":false},{\"name\":\"Celebration\",\"dbName\":null,\"fields\":[{\"name\":\"author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CelebrationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"celebrationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isAnonymous\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reaction\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CelebrationReactedUser\",\"relationName\":\"CelebrationToCelebrationReactedUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RequestTaggedUser\",\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tagId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Request\",\"relationName\":\"RequestToRequestTaggedUser\",\"relationFromFields\":[\"requestId\"],\"relationToFields\":[\"requestId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Request\",\"dbName\":null,\"fields\":[{\"name\":\"author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RequestStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RequestType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taggedIndividuals\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RequestTaggedUser\",\"relationName\":\"RequestToRequestTaggedUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Announcement\",\"dbName\":null,\"fields\":[{\"name\":\"announcementId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"PONote\",\"plural\":\"pONotes\",\"findUnique\":\"findUniquePONote\",\"findUniqueOrThrow\":\"findUniquePONoteOrThrow\",\"findFirst\":\"findFirstPONote\",\"findFirstOrThrow\":\"findFirstPONoteOrThrow\",\"findMany\":\"findManyPONote\",\"create\":\"createOnePONote\",\"createMany\":\"createManyPONote\",\"delete\":\"deleteOnePONote\",\"update\":\"updateOnePONote\",\"deleteMany\":\"deleteManyPONote\",\"updateMany\":\"updateManyPONote\",\"upsert\":\"upsertOnePONote\",\"aggregate\":\"aggregatePONote\",\"groupBy\":\"groupByPONote\"},{\"model\":\"SentimentMeter\",\"plural\":\"sentimentMeters\",\"findUnique\":\"findUniqueSentimentMeter\",\"findUniqueOrThrow\":\"findUniqueSentimentMeterOrThrow\",\"findFirst\":\"findFirstSentimentMeter\",\"findFirstOrThrow\":\"findFirstSentimentMeterOrThrow\",\"findMany\":\"findManySentimentMeter\",\"create\":\"createOneSentimentMeter\",\"createMany\":\"createManySentimentMeter\",\"delete\":\"deleteOneSentimentMeter\",\"update\":\"updateOneSentimentMeter\",\"deleteMany\":\"deleteManySentimentMeter\",\"updateMany\":\"updateManySentimentMeter\",\"upsert\":\"upsertOneSentimentMeter\",\"aggregate\":\"aggregateSentimentMeter\",\"groupBy\":\"groupBySentimentMeter\"},{\"model\":\"CelebrationReactedUser\",\"plural\":\"celebrationReactedUsers\",\"findUnique\":\"findUniqueCelebrationReactedUser\",\"findUniqueOrThrow\":\"findUniqueCelebrationReactedUserOrThrow\",\"findFirst\":\"findFirstCelebrationReactedUser\",\"findFirstOrThrow\":\"findFirstCelebrationReactedUserOrThrow\",\"findMany\":\"findManyCelebrationReactedUser\",\"create\":\"createOneCelebrationReactedUser\",\"createMany\":\"createManyCelebrationReactedUser\",\"delete\":\"deleteOneCelebrationReactedUser\",\"update\":\"updateOneCelebrationReactedUser\",\"deleteMany\":\"deleteManyCelebrationReactedUser\",\"updateMany\":\"updateManyCelebrationReactedUser\",\"upsert\":\"upsertOneCelebrationReactedUser\",\"aggregate\":\"aggregateCelebrationReactedUser\",\"groupBy\":\"groupByCelebrationReactedUser\"},{\"model\":\"Celebration\",\"plural\":\"celebrations\",\"findUnique\":\"findUniqueCelebration\",\"findUniqueOrThrow\":\"findUniqueCelebrationOrThrow\",\"findFirst\":\"findFirstCelebration\",\"findFirstOrThrow\":\"findFirstCelebrationOrThrow\",\"findMany\":\"findManyCelebration\",\"create\":\"createOneCelebration\",\"createMany\":\"createManyCelebration\",\"delete\":\"deleteOneCelebration\",\"update\":\"updateOneCelebration\",\"deleteMany\":\"deleteManyCelebration\",\"updateMany\":\"updateManyCelebration\",\"upsert\":\"upsertOneCelebration\",\"aggregate\":\"aggregateCelebration\",\"groupBy\":\"groupByCelebration\"},{\"model\":\"RequestTaggedUser\",\"plural\":\"requestTaggedUsers\",\"findUnique\":\"findUniqueRequestTaggedUser\",\"findUniqueOrThrow\":\"findUniqueRequestTaggedUserOrThrow\",\"findFirst\":\"findFirstRequestTaggedUser\",\"findFirstOrThrow\":\"findFirstRequestTaggedUserOrThrow\",\"findMany\":\"findManyRequestTaggedUser\",\"create\":\"createOneRequestTaggedUser\",\"createMany\":\"createManyRequestTaggedUser\",\"delete\":\"deleteOneRequestTaggedUser\",\"update\":\"updateOneRequestTaggedUser\",\"deleteMany\":\"deleteManyRequestTaggedUser\",\"updateMany\":\"updateManyRequestTaggedUser\",\"upsert\":\"upsertOneRequestTaggedUser\",\"aggregate\":\"aggregateRequestTaggedUser\",\"groupBy\":\"groupByRequestTaggedUser\"},{\"model\":\"Request\",\"plural\":\"requests\",\"findUnique\":\"findUniqueRequest\",\"findUniqueOrThrow\":\"findUniqueRequestOrThrow\",\"findFirst\":\"findFirstRequest\",\"findFirstOrThrow\":\"findFirstRequestOrThrow\",\"findMany\":\"findManyRequest\",\"create\":\"createOneRequest\",\"createMany\":\"createManyRequest\",\"delete\":\"deleteOneRequest\",\"update\":\"updateOneRequest\",\"deleteMany\":\"deleteManyRequest\",\"updateMany\":\"updateManyRequest\",\"upsert\":\"upsertOneRequest\",\"aggregate\":\"aggregateRequest\",\"groupBy\":\"groupByRequest\"},{\"model\":\"Announcement\",\"plural\":\"announcements\",\"findUnique\":\"findUniqueAnnouncement\",\"findUniqueOrThrow\":\"findUniqueAnnouncementOrThrow\",\"findFirst\":\"findFirstAnnouncement\",\"findFirstOrThrow\":\"findFirstAnnouncementOrThrow\",\"findMany\":\"findManyAnnouncement\",\"create\":\"createOneAnnouncement\",\"createMany\":\"createManyAnnouncement\",\"delete\":\"deleteOneAnnouncement\",\"update\":\"updateOneAnnouncement\",\"deleteMany\":\"deleteManyAnnouncement\",\"updateMany\":\"updateManyAnnouncement\",\"upsert\":\"upsertOneAnnouncement\",\"aggregate\":\"aggregateAnnouncement\",\"groupBy\":\"groupByAnnouncement\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/Aryan_Goel/abd-backend/src/generated/dashboard",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma/dashboard-db",
  "clientVersion": "4.11.0",
  "engineVersion": "8fde8fef4033376662cad983758335009d522acb",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.dirname = dirname
config.document = dmmf




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "../../src/generated/dashboard/libquery_engine-darwin.dylib.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "../../src/generated/dashboard/schema.prisma")
