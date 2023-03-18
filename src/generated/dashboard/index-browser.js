
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
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
  projectId: 'projectId',
  memberId: 'memberId'
});

exports.Prisma.CelebrationReactedUserScalarFieldEnum = makeEnum({
  memberId: 'memberId',
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
  projectId: 'projectId',
  memberId: 'memberId'
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
  memberId: 'memberId',
  author: 'author',
  content: 'content',
  status: 'status',
  type: 'type',
  createdAt: 'createdAt',
  requestId: 'requestId',
  projectId: 'projectId'
});

exports.Prisma.RequestTaggedUserScalarFieldEnum = makeEnum({
  memberId: 'memberId',
  requestId: 'requestId',
  tagId: 'tagId'
});

exports.Prisma.SentimentMeterScalarFieldEnum = makeEnum({
  author: 'author',
  sentiment: 'sentiment',
  createdAt: 'createdAt',
  sentimentId: 'sentimentId',
  projectId: 'projectId',
  memberId: 'memberId'
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
