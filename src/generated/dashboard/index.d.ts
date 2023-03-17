
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model PONote
 * 
 */
export type PONote = {
  noteId: number
  type: Type
  status: Status
  note: string
  createdAt: Date
  dueDate: Date | null
  issueLink: string | null
  isDeleted: boolean
  projectId: number
  memberId: number
}

/**
 * Model SentimentMeter
 * 
 */
export type SentimentMeter = {
  author: string
  sentiment: Sentiment
  createdAt: Date
  sentimentId: number
  projectId: number
}

/**
 * Model CelebrationReactedUser
 * 
 */
export type CelebrationReactedUser = {
  userId: string
  celebrationId: number
  reactionId: number
}

/**
 * Model Celebration
 * 
 */
export type Celebration = {
  author: string
  content: string
  createdAt: Date
  type: CelebrationType
  celebrationId: number
  isAnonymous: boolean
  projectId: number
}

/**
 * Model RequestTaggedUser
 * 
 */
export type RequestTaggedUser = {
  userId: string
  requestId: number
  tagId: number
}

/**
 * Model Request
 * 
 */
export type Request = {
  author: string
  content: string
  status: RequestStatus
  type: RequestType
  createdAt: Date
  requestId: number
  projectId: number
}

/**
 * Model Announcement
 * 
 */
export type Announcement = {
  announcementId: number
  author: string
  content: string
  createdAt: Date
  projectId: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const CelebrationType: {
  CELEBRATION: 'CELEBRATION',
  IMPEDIMENT: 'IMPEDIMENT'
};

export type CelebrationType = (typeof CelebrationType)[keyof typeof CelebrationType]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  DENIED: 'DENIED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const RequestType: {
  RESOURCE: 'RESOURCE',
  MEETING: 'MEETING'
};

export type RequestType = (typeof RequestType)[keyof typeof RequestType]


export const Sentiment: {
  HAPPY: 'HAPPY',
  GOOD: 'GOOD',
  OK: 'OK',
  BAD: 'BAD'
};

export type Sentiment = (typeof Sentiment)[keyof typeof Sentiment]


export const Status: {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  NONE: 'NONE',
  DRAFT: 'DRAFT'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Type: {
  ACTION_ITEM: 'ACTION_ITEM',
  KEY_DECISION: 'KEY_DECISION',
  AGENDA_ITEM: 'AGENDA_ITEM'
};

export type Type = (typeof Type)[keyof typeof Type]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PONotes
 * const pONotes = await prisma.pONote.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PONotes
   * const pONotes = await prisma.pONote.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.pONote`: Exposes CRUD operations for the **PONote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PONotes
    * const pONotes = await prisma.pONote.findMany()
    * ```
    */
  get pONote(): Prisma.PONoteDelegate<GlobalReject>;

  /**
   * `prisma.sentimentMeter`: Exposes CRUD operations for the **SentimentMeter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SentimentMeters
    * const sentimentMeters = await prisma.sentimentMeter.findMany()
    * ```
    */
  get sentimentMeter(): Prisma.SentimentMeterDelegate<GlobalReject>;

  /**
   * `prisma.celebrationReactedUser`: Exposes CRUD operations for the **CelebrationReactedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CelebrationReactedUsers
    * const celebrationReactedUsers = await prisma.celebrationReactedUser.findMany()
    * ```
    */
  get celebrationReactedUser(): Prisma.CelebrationReactedUserDelegate<GlobalReject>;

  /**
   * `prisma.celebration`: Exposes CRUD operations for the **Celebration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Celebrations
    * const celebrations = await prisma.celebration.findMany()
    * ```
    */
  get celebration(): Prisma.CelebrationDelegate<GlobalReject>;

  /**
   * `prisma.requestTaggedUser`: Exposes CRUD operations for the **RequestTaggedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestTaggedUsers
    * const requestTaggedUsers = await prisma.requestTaggedUser.findMany()
    * ```
    */
  get requestTaggedUser(): Prisma.RequestTaggedUserDelegate<GlobalReject>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<GlobalReject>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PONote: 'PONote',
    SentimentMeter: 'SentimentMeter',
    CelebrationReactedUser: 'CelebrationReactedUser',
    Celebration: 'Celebration',
    RequestTaggedUser: 'RequestTaggedUser',
    Request: 'Request',
    Announcement: 'Announcement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CelebrationCountOutputType
   */


  export type CelebrationCountOutputType = {
    reaction: number
  }

  export type CelebrationCountOutputTypeSelect = {
    reaction?: boolean
  }

  export type CelebrationCountOutputTypeGetPayload<S extends boolean | null | undefined | CelebrationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CelebrationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CelebrationCountOutputTypeArgs)
    ? CelebrationCountOutputType 
    : S extends { select: any } & (CelebrationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CelebrationCountOutputType ? CelebrationCountOutputType[P] : never
  } 
      : CelebrationCountOutputType




  // Custom InputTypes

  /**
   * CelebrationCountOutputType without action
   */
  export type CelebrationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CelebrationCountOutputType
     */
    select?: CelebrationCountOutputTypeSelect | null
  }



  /**
   * Count Type RequestCountOutputType
   */


  export type RequestCountOutputType = {
    taggedIndividuals: number
  }

  export type RequestCountOutputTypeSelect = {
    taggedIndividuals?: boolean
  }

  export type RequestCountOutputTypeGetPayload<S extends boolean | null | undefined | RequestCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RequestCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RequestCountOutputTypeArgs)
    ? RequestCountOutputType 
    : S extends { select: any } & (RequestCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RequestCountOutputType ? RequestCountOutputType[P] : never
  } 
      : RequestCountOutputType




  // Custom InputTypes

  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RequestCountOutputType
     */
    select?: RequestCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model PONote
   */


  export type AggregatePONote = {
    _count: PONoteCountAggregateOutputType | null
    _avg: PONoteAvgAggregateOutputType | null
    _sum: PONoteSumAggregateOutputType | null
    _min: PONoteMinAggregateOutputType | null
    _max: PONoteMaxAggregateOutputType | null
  }

  export type PONoteAvgAggregateOutputType = {
    noteId: number | null
    projectId: number | null
    memberId: number | null
  }

  export type PONoteSumAggregateOutputType = {
    noteId: number | null
    projectId: number | null
    memberId: number | null
  }

  export type PONoteMinAggregateOutputType = {
    noteId: number | null
    type: Type | null
    status: Status | null
    note: string | null
    createdAt: Date | null
    dueDate: Date | null
    issueLink: string | null
    isDeleted: boolean | null
    projectId: number | null
    memberId: number | null
  }

  export type PONoteMaxAggregateOutputType = {
    noteId: number | null
    type: Type | null
    status: Status | null
    note: string | null
    createdAt: Date | null
    dueDate: Date | null
    issueLink: string | null
    isDeleted: boolean | null
    projectId: number | null
    memberId: number | null
  }

  export type PONoteCountAggregateOutputType = {
    noteId: number
    type: number
    status: number
    note: number
    createdAt: number
    dueDate: number
    issueLink: number
    isDeleted: number
    projectId: number
    memberId: number
    _all: number
  }


  export type PONoteAvgAggregateInputType = {
    noteId?: true
    projectId?: true
    memberId?: true
  }

  export type PONoteSumAggregateInputType = {
    noteId?: true
    projectId?: true
    memberId?: true
  }

  export type PONoteMinAggregateInputType = {
    noteId?: true
    type?: true
    status?: true
    note?: true
    createdAt?: true
    dueDate?: true
    issueLink?: true
    isDeleted?: true
    projectId?: true
    memberId?: true
  }

  export type PONoteMaxAggregateInputType = {
    noteId?: true
    type?: true
    status?: true
    note?: true
    createdAt?: true
    dueDate?: true
    issueLink?: true
    isDeleted?: true
    projectId?: true
    memberId?: true
  }

  export type PONoteCountAggregateInputType = {
    noteId?: true
    type?: true
    status?: true
    note?: true
    createdAt?: true
    dueDate?: true
    issueLink?: true
    isDeleted?: true
    projectId?: true
    memberId?: true
    _all?: true
  }

  export type PONoteAggregateArgs = {
    /**
     * Filter which PONote to aggregate.
     */
    where?: PONoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PONotes to fetch.
     */
    orderBy?: Enumerable<PONoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PONoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PONotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PONotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PONotes
    **/
    _count?: true | PONoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PONoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PONoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PONoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PONoteMaxAggregateInputType
  }

  export type GetPONoteAggregateType<T extends PONoteAggregateArgs> = {
        [P in keyof T & keyof AggregatePONote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePONote[P]>
      : GetScalarType<T[P], AggregatePONote[P]>
  }




  export type PONoteGroupByArgs = {
    where?: PONoteWhereInput
    orderBy?: Enumerable<PONoteOrderByWithAggregationInput>
    by: PONoteScalarFieldEnum[]
    having?: PONoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PONoteCountAggregateInputType | true
    _avg?: PONoteAvgAggregateInputType
    _sum?: PONoteSumAggregateInputType
    _min?: PONoteMinAggregateInputType
    _max?: PONoteMaxAggregateInputType
  }


  export type PONoteGroupByOutputType = {
    noteId: number
    type: Type
    status: Status
    note: string
    createdAt: Date
    dueDate: Date | null
    issueLink: string | null
    isDeleted: boolean
    projectId: number
    memberId: number
    _count: PONoteCountAggregateOutputType | null
    _avg: PONoteAvgAggregateOutputType | null
    _sum: PONoteSumAggregateOutputType | null
    _min: PONoteMinAggregateOutputType | null
    _max: PONoteMaxAggregateOutputType | null
  }

  type GetPONoteGroupByPayload<T extends PONoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PONoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PONoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PONoteGroupByOutputType[P]>
            : GetScalarType<T[P], PONoteGroupByOutputType[P]>
        }
      >
    >


  export type PONoteSelect = {
    noteId?: boolean
    type?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    dueDate?: boolean
    issueLink?: boolean
    isDeleted?: boolean
    projectId?: boolean
    memberId?: boolean
  }


  export type PONoteGetPayload<S extends boolean | null | undefined | PONoteArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PONote :
    S extends undefined ? never :
    S extends { include: any } & (PONoteArgs | PONoteFindManyArgs)
    ? PONote 
    : S extends { select: any } & (PONoteArgs | PONoteFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PONote ? PONote[P] : never
  } 
      : PONote


  type PONoteCountArgs = 
    Omit<PONoteFindManyArgs, 'select' | 'include'> & {
      select?: PONoteCountAggregateInputType | true
    }

  export interface PONoteDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PONote that matches the filter.
     * @param {PONoteFindUniqueArgs} args - Arguments to find a PONote
     * @example
     * // Get one PONote
     * const pONote = await prisma.pONote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PONoteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PONoteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PONote'> extends True ? Prisma__PONoteClient<PONoteGetPayload<T>> : Prisma__PONoteClient<PONoteGetPayload<T> | null, null>

    /**
     * Find one PONote that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PONoteFindUniqueOrThrowArgs} args - Arguments to find a PONote
     * @example
     * // Get one PONote
     * const pONote = await prisma.pONote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PONoteFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PONoteFindUniqueOrThrowArgs>
    ): Prisma__PONoteClient<PONoteGetPayload<T>>

    /**
     * Find the first PONote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PONoteFindFirstArgs} args - Arguments to find a PONote
     * @example
     * // Get one PONote
     * const pONote = await prisma.pONote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PONoteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PONoteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PONote'> extends True ? Prisma__PONoteClient<PONoteGetPayload<T>> : Prisma__PONoteClient<PONoteGetPayload<T> | null, null>

    /**
     * Find the first PONote that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PONoteFindFirstOrThrowArgs} args - Arguments to find a PONote
     * @example
     * // Get one PONote
     * const pONote = await prisma.pONote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PONoteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PONoteFindFirstOrThrowArgs>
    ): Prisma__PONoteClient<PONoteGetPayload<T>>

    /**
     * Find zero or more PONotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PONoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PONotes
     * const pONotes = await prisma.pONote.findMany()
     * 
     * // Get first 10 PONotes
     * const pONotes = await prisma.pONote.findMany({ take: 10 })
     * 
     * // Only select the `noteId`
     * const pONoteWithNoteIdOnly = await prisma.pONote.findMany({ select: { noteId: true } })
     * 
    **/
    findMany<T extends PONoteFindManyArgs>(
      args?: SelectSubset<T, PONoteFindManyArgs>
    ): Prisma.PrismaPromise<Array<PONoteGetPayload<T>>>

    /**
     * Create a PONote.
     * @param {PONoteCreateArgs} args - Arguments to create a PONote.
     * @example
     * // Create one PONote
     * const PONote = await prisma.pONote.create({
     *   data: {
     *     // ... data to create a PONote
     *   }
     * })
     * 
    **/
    create<T extends PONoteCreateArgs>(
      args: SelectSubset<T, PONoteCreateArgs>
    ): Prisma__PONoteClient<PONoteGetPayload<T>>

    /**
     * Create many PONotes.
     *     @param {PONoteCreateManyArgs} args - Arguments to create many PONotes.
     *     @example
     *     // Create many PONotes
     *     const pONote = await prisma.pONote.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PONoteCreateManyArgs>(
      args?: SelectSubset<T, PONoteCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PONote.
     * @param {PONoteDeleteArgs} args - Arguments to delete one PONote.
     * @example
     * // Delete one PONote
     * const PONote = await prisma.pONote.delete({
     *   where: {
     *     // ... filter to delete one PONote
     *   }
     * })
     * 
    **/
    delete<T extends PONoteDeleteArgs>(
      args: SelectSubset<T, PONoteDeleteArgs>
    ): Prisma__PONoteClient<PONoteGetPayload<T>>

    /**
     * Update one PONote.
     * @param {PONoteUpdateArgs} args - Arguments to update one PONote.
     * @example
     * // Update one PONote
     * const pONote = await prisma.pONote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PONoteUpdateArgs>(
      args: SelectSubset<T, PONoteUpdateArgs>
    ): Prisma__PONoteClient<PONoteGetPayload<T>>

    /**
     * Delete zero or more PONotes.
     * @param {PONoteDeleteManyArgs} args - Arguments to filter PONotes to delete.
     * @example
     * // Delete a few PONotes
     * const { count } = await prisma.pONote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PONoteDeleteManyArgs>(
      args?: SelectSubset<T, PONoteDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PONotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PONoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PONotes
     * const pONote = await prisma.pONote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PONoteUpdateManyArgs>(
      args: SelectSubset<T, PONoteUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PONote.
     * @param {PONoteUpsertArgs} args - Arguments to update or create a PONote.
     * @example
     * // Update or create a PONote
     * const pONote = await prisma.pONote.upsert({
     *   create: {
     *     // ... data to create a PONote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PONote we want to update
     *   }
     * })
    **/
    upsert<T extends PONoteUpsertArgs>(
      args: SelectSubset<T, PONoteUpsertArgs>
    ): Prisma__PONoteClient<PONoteGetPayload<T>>

    /**
     * Count the number of PONotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PONoteCountArgs} args - Arguments to filter PONotes to count.
     * @example
     * // Count the number of PONotes
     * const count = await prisma.pONote.count({
     *   where: {
     *     // ... the filter for the PONotes we want to count
     *   }
     * })
    **/
    count<T extends PONoteCountArgs>(
      args?: Subset<T, PONoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PONoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PONote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PONoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PONoteAggregateArgs>(args: Subset<T, PONoteAggregateArgs>): Prisma.PrismaPromise<GetPONoteAggregateType<T>>

    /**
     * Group by PONote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PONoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PONoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PONoteGroupByArgs['orderBy'] }
        : { orderBy?: PONoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PONoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPONoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PONote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PONoteClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PONote base type for findUnique actions
   */
  export type PONoteFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PONote
     */
    select?: PONoteSelect | null
    /**
     * Filter, which PONote to fetch.
     */
    where: PONoteWhereUniqueInput
  }

  /**
   * PONote findUnique
   */
  export interface PONoteFindUniqueArgs extends PONoteFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PONote findUniqueOrThrow
   */
  export type PONoteFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PONote
     */
    select?: PONoteSelect | null
    /**
     * Filter, which PONote to fetch.
     */
    where: PONoteWhereUniqueInput
  }


  /**
   * PONote base type for findFirst actions
   */
  export type PONoteFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PONote
     */
    select?: PONoteSelect | null
    /**
     * Filter, which PONote to fetch.
     */
    where?: PONoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PONotes to fetch.
     */
    orderBy?: Enumerable<PONoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PONotes.
     */
    cursor?: PONoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PONotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PONotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PONotes.
     */
    distinct?: Enumerable<PONoteScalarFieldEnum>
  }

  /**
   * PONote findFirst
   */
  export interface PONoteFindFirstArgs extends PONoteFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PONote findFirstOrThrow
   */
  export type PONoteFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PONote
     */
    select?: PONoteSelect | null
    /**
     * Filter, which PONote to fetch.
     */
    where?: PONoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PONotes to fetch.
     */
    orderBy?: Enumerable<PONoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PONotes.
     */
    cursor?: PONoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PONotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PONotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PONotes.
     */
    distinct?: Enumerable<PONoteScalarFieldEnum>
  }


  /**
   * PONote findMany
   */
  export type PONoteFindManyArgs = {
    /**
     * Select specific fields to fetch from the PONote
     */
    select?: PONoteSelect | null
    /**
     * Filter, which PONotes to fetch.
     */
    where?: PONoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PONotes to fetch.
     */
    orderBy?: Enumerable<PONoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PONotes.
     */
    cursor?: PONoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PONotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PONotes.
     */
    skip?: number
    distinct?: Enumerable<PONoteScalarFieldEnum>
  }


  /**
   * PONote create
   */
  export type PONoteCreateArgs = {
    /**
     * Select specific fields to fetch from the PONote
     */
    select?: PONoteSelect | null
    /**
     * The data needed to create a PONote.
     */
    data: XOR<PONoteCreateInput, PONoteUncheckedCreateInput>
  }


  /**
   * PONote createMany
   */
  export type PONoteCreateManyArgs = {
    /**
     * The data used to create many PONotes.
     */
    data: Enumerable<PONoteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PONote update
   */
  export type PONoteUpdateArgs = {
    /**
     * Select specific fields to fetch from the PONote
     */
    select?: PONoteSelect | null
    /**
     * The data needed to update a PONote.
     */
    data: XOR<PONoteUpdateInput, PONoteUncheckedUpdateInput>
    /**
     * Choose, which PONote to update.
     */
    where: PONoteWhereUniqueInput
  }


  /**
   * PONote updateMany
   */
  export type PONoteUpdateManyArgs = {
    /**
     * The data used to update PONotes.
     */
    data: XOR<PONoteUpdateManyMutationInput, PONoteUncheckedUpdateManyInput>
    /**
     * Filter which PONotes to update
     */
    where?: PONoteWhereInput
  }


  /**
   * PONote upsert
   */
  export type PONoteUpsertArgs = {
    /**
     * Select specific fields to fetch from the PONote
     */
    select?: PONoteSelect | null
    /**
     * The filter to search for the PONote to update in case it exists.
     */
    where: PONoteWhereUniqueInput
    /**
     * In case the PONote found by the `where` argument doesn't exist, create a new PONote with this data.
     */
    create: XOR<PONoteCreateInput, PONoteUncheckedCreateInput>
    /**
     * In case the PONote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PONoteUpdateInput, PONoteUncheckedUpdateInput>
  }


  /**
   * PONote delete
   */
  export type PONoteDeleteArgs = {
    /**
     * Select specific fields to fetch from the PONote
     */
    select?: PONoteSelect | null
    /**
     * Filter which PONote to delete.
     */
    where: PONoteWhereUniqueInput
  }


  /**
   * PONote deleteMany
   */
  export type PONoteDeleteManyArgs = {
    /**
     * Filter which PONotes to delete
     */
    where?: PONoteWhereInput
  }


  /**
   * PONote without action
   */
  export type PONoteArgs = {
    /**
     * Select specific fields to fetch from the PONote
     */
    select?: PONoteSelect | null
  }



  /**
   * Model SentimentMeter
   */


  export type AggregateSentimentMeter = {
    _count: SentimentMeterCountAggregateOutputType | null
    _avg: SentimentMeterAvgAggregateOutputType | null
    _sum: SentimentMeterSumAggregateOutputType | null
    _min: SentimentMeterMinAggregateOutputType | null
    _max: SentimentMeterMaxAggregateOutputType | null
  }

  export type SentimentMeterAvgAggregateOutputType = {
    sentimentId: number | null
    projectId: number | null
  }

  export type SentimentMeterSumAggregateOutputType = {
    sentimentId: number | null
    projectId: number | null
  }

  export type SentimentMeterMinAggregateOutputType = {
    author: string | null
    sentiment: Sentiment | null
    createdAt: Date | null
    sentimentId: number | null
    projectId: number | null
  }

  export type SentimentMeterMaxAggregateOutputType = {
    author: string | null
    sentiment: Sentiment | null
    createdAt: Date | null
    sentimentId: number | null
    projectId: number | null
  }

  export type SentimentMeterCountAggregateOutputType = {
    author: number
    sentiment: number
    createdAt: number
    sentimentId: number
    projectId: number
    _all: number
  }


  export type SentimentMeterAvgAggregateInputType = {
    sentimentId?: true
    projectId?: true
  }

  export type SentimentMeterSumAggregateInputType = {
    sentimentId?: true
    projectId?: true
  }

  export type SentimentMeterMinAggregateInputType = {
    author?: true
    sentiment?: true
    createdAt?: true
    sentimentId?: true
    projectId?: true
  }

  export type SentimentMeterMaxAggregateInputType = {
    author?: true
    sentiment?: true
    createdAt?: true
    sentimentId?: true
    projectId?: true
  }

  export type SentimentMeterCountAggregateInputType = {
    author?: true
    sentiment?: true
    createdAt?: true
    sentimentId?: true
    projectId?: true
    _all?: true
  }

  export type SentimentMeterAggregateArgs = {
    /**
     * Filter which SentimentMeter to aggregate.
     */
    where?: SentimentMeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentMeters to fetch.
     */
    orderBy?: Enumerable<SentimentMeterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentimentMeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentMeters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentMeters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SentimentMeters
    **/
    _count?: true | SentimentMeterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentimentMeterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentimentMeterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentimentMeterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentimentMeterMaxAggregateInputType
  }

  export type GetSentimentMeterAggregateType<T extends SentimentMeterAggregateArgs> = {
        [P in keyof T & keyof AggregateSentimentMeter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentimentMeter[P]>
      : GetScalarType<T[P], AggregateSentimentMeter[P]>
  }




  export type SentimentMeterGroupByArgs = {
    where?: SentimentMeterWhereInput
    orderBy?: Enumerable<SentimentMeterOrderByWithAggregationInput>
    by: SentimentMeterScalarFieldEnum[]
    having?: SentimentMeterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentimentMeterCountAggregateInputType | true
    _avg?: SentimentMeterAvgAggregateInputType
    _sum?: SentimentMeterSumAggregateInputType
    _min?: SentimentMeterMinAggregateInputType
    _max?: SentimentMeterMaxAggregateInputType
  }


  export type SentimentMeterGroupByOutputType = {
    author: string
    sentiment: Sentiment
    createdAt: Date
    sentimentId: number
    projectId: number
    _count: SentimentMeterCountAggregateOutputType | null
    _avg: SentimentMeterAvgAggregateOutputType | null
    _sum: SentimentMeterSumAggregateOutputType | null
    _min: SentimentMeterMinAggregateOutputType | null
    _max: SentimentMeterMaxAggregateOutputType | null
  }

  type GetSentimentMeterGroupByPayload<T extends SentimentMeterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SentimentMeterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentimentMeterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentimentMeterGroupByOutputType[P]>
            : GetScalarType<T[P], SentimentMeterGroupByOutputType[P]>
        }
      >
    >


  export type SentimentMeterSelect = {
    author?: boolean
    sentiment?: boolean
    createdAt?: boolean
    sentimentId?: boolean
    projectId?: boolean
  }


  export type SentimentMeterGetPayload<S extends boolean | null | undefined | SentimentMeterArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SentimentMeter :
    S extends undefined ? never :
    S extends { include: any } & (SentimentMeterArgs | SentimentMeterFindManyArgs)
    ? SentimentMeter 
    : S extends { select: any } & (SentimentMeterArgs | SentimentMeterFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SentimentMeter ? SentimentMeter[P] : never
  } 
      : SentimentMeter


  type SentimentMeterCountArgs = 
    Omit<SentimentMeterFindManyArgs, 'select' | 'include'> & {
      select?: SentimentMeterCountAggregateInputType | true
    }

  export interface SentimentMeterDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SentimentMeter that matches the filter.
     * @param {SentimentMeterFindUniqueArgs} args - Arguments to find a SentimentMeter
     * @example
     * // Get one SentimentMeter
     * const sentimentMeter = await prisma.sentimentMeter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SentimentMeterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SentimentMeterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SentimentMeter'> extends True ? Prisma__SentimentMeterClient<SentimentMeterGetPayload<T>> : Prisma__SentimentMeterClient<SentimentMeterGetPayload<T> | null, null>

    /**
     * Find one SentimentMeter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SentimentMeterFindUniqueOrThrowArgs} args - Arguments to find a SentimentMeter
     * @example
     * // Get one SentimentMeter
     * const sentimentMeter = await prisma.sentimentMeter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SentimentMeterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SentimentMeterFindUniqueOrThrowArgs>
    ): Prisma__SentimentMeterClient<SentimentMeterGetPayload<T>>

    /**
     * Find the first SentimentMeter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentMeterFindFirstArgs} args - Arguments to find a SentimentMeter
     * @example
     * // Get one SentimentMeter
     * const sentimentMeter = await prisma.sentimentMeter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SentimentMeterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SentimentMeterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SentimentMeter'> extends True ? Prisma__SentimentMeterClient<SentimentMeterGetPayload<T>> : Prisma__SentimentMeterClient<SentimentMeterGetPayload<T> | null, null>

    /**
     * Find the first SentimentMeter that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentMeterFindFirstOrThrowArgs} args - Arguments to find a SentimentMeter
     * @example
     * // Get one SentimentMeter
     * const sentimentMeter = await prisma.sentimentMeter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SentimentMeterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SentimentMeterFindFirstOrThrowArgs>
    ): Prisma__SentimentMeterClient<SentimentMeterGetPayload<T>>

    /**
     * Find zero or more SentimentMeters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentMeterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SentimentMeters
     * const sentimentMeters = await prisma.sentimentMeter.findMany()
     * 
     * // Get first 10 SentimentMeters
     * const sentimentMeters = await prisma.sentimentMeter.findMany({ take: 10 })
     * 
     * // Only select the `author`
     * const sentimentMeterWithAuthorOnly = await prisma.sentimentMeter.findMany({ select: { author: true } })
     * 
    **/
    findMany<T extends SentimentMeterFindManyArgs>(
      args?: SelectSubset<T, SentimentMeterFindManyArgs>
    ): Prisma.PrismaPromise<Array<SentimentMeterGetPayload<T>>>

    /**
     * Create a SentimentMeter.
     * @param {SentimentMeterCreateArgs} args - Arguments to create a SentimentMeter.
     * @example
     * // Create one SentimentMeter
     * const SentimentMeter = await prisma.sentimentMeter.create({
     *   data: {
     *     // ... data to create a SentimentMeter
     *   }
     * })
     * 
    **/
    create<T extends SentimentMeterCreateArgs>(
      args: SelectSubset<T, SentimentMeterCreateArgs>
    ): Prisma__SentimentMeterClient<SentimentMeterGetPayload<T>>

    /**
     * Create many SentimentMeters.
     *     @param {SentimentMeterCreateManyArgs} args - Arguments to create many SentimentMeters.
     *     @example
     *     // Create many SentimentMeters
     *     const sentimentMeter = await prisma.sentimentMeter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SentimentMeterCreateManyArgs>(
      args?: SelectSubset<T, SentimentMeterCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SentimentMeter.
     * @param {SentimentMeterDeleteArgs} args - Arguments to delete one SentimentMeter.
     * @example
     * // Delete one SentimentMeter
     * const SentimentMeter = await prisma.sentimentMeter.delete({
     *   where: {
     *     // ... filter to delete one SentimentMeter
     *   }
     * })
     * 
    **/
    delete<T extends SentimentMeterDeleteArgs>(
      args: SelectSubset<T, SentimentMeterDeleteArgs>
    ): Prisma__SentimentMeterClient<SentimentMeterGetPayload<T>>

    /**
     * Update one SentimentMeter.
     * @param {SentimentMeterUpdateArgs} args - Arguments to update one SentimentMeter.
     * @example
     * // Update one SentimentMeter
     * const sentimentMeter = await prisma.sentimentMeter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SentimentMeterUpdateArgs>(
      args: SelectSubset<T, SentimentMeterUpdateArgs>
    ): Prisma__SentimentMeterClient<SentimentMeterGetPayload<T>>

    /**
     * Delete zero or more SentimentMeters.
     * @param {SentimentMeterDeleteManyArgs} args - Arguments to filter SentimentMeters to delete.
     * @example
     * // Delete a few SentimentMeters
     * const { count } = await prisma.sentimentMeter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SentimentMeterDeleteManyArgs>(
      args?: SelectSubset<T, SentimentMeterDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentimentMeters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentMeterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SentimentMeters
     * const sentimentMeter = await prisma.sentimentMeter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SentimentMeterUpdateManyArgs>(
      args: SelectSubset<T, SentimentMeterUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SentimentMeter.
     * @param {SentimentMeterUpsertArgs} args - Arguments to update or create a SentimentMeter.
     * @example
     * // Update or create a SentimentMeter
     * const sentimentMeter = await prisma.sentimentMeter.upsert({
     *   create: {
     *     // ... data to create a SentimentMeter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SentimentMeter we want to update
     *   }
     * })
    **/
    upsert<T extends SentimentMeterUpsertArgs>(
      args: SelectSubset<T, SentimentMeterUpsertArgs>
    ): Prisma__SentimentMeterClient<SentimentMeterGetPayload<T>>

    /**
     * Count the number of SentimentMeters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentMeterCountArgs} args - Arguments to filter SentimentMeters to count.
     * @example
     * // Count the number of SentimentMeters
     * const count = await prisma.sentimentMeter.count({
     *   where: {
     *     // ... the filter for the SentimentMeters we want to count
     *   }
     * })
    **/
    count<T extends SentimentMeterCountArgs>(
      args?: Subset<T, SentimentMeterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentimentMeterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SentimentMeter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentMeterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SentimentMeterAggregateArgs>(args: Subset<T, SentimentMeterAggregateArgs>): Prisma.PrismaPromise<GetSentimentMeterAggregateType<T>>

    /**
     * Group by SentimentMeter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentMeterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SentimentMeterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentimentMeterGroupByArgs['orderBy'] }
        : { orderBy?: SentimentMeterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SentimentMeterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentimentMeterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SentimentMeter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SentimentMeterClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SentimentMeter base type for findUnique actions
   */
  export type SentimentMeterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SentimentMeter
     */
    select?: SentimentMeterSelect | null
    /**
     * Filter, which SentimentMeter to fetch.
     */
    where: SentimentMeterWhereUniqueInput
  }

  /**
   * SentimentMeter findUnique
   */
  export interface SentimentMeterFindUniqueArgs extends SentimentMeterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SentimentMeter findUniqueOrThrow
   */
  export type SentimentMeterFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SentimentMeter
     */
    select?: SentimentMeterSelect | null
    /**
     * Filter, which SentimentMeter to fetch.
     */
    where: SentimentMeterWhereUniqueInput
  }


  /**
   * SentimentMeter base type for findFirst actions
   */
  export type SentimentMeterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SentimentMeter
     */
    select?: SentimentMeterSelect | null
    /**
     * Filter, which SentimentMeter to fetch.
     */
    where?: SentimentMeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentMeters to fetch.
     */
    orderBy?: Enumerable<SentimentMeterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentimentMeters.
     */
    cursor?: SentimentMeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentMeters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentMeters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentimentMeters.
     */
    distinct?: Enumerable<SentimentMeterScalarFieldEnum>
  }

  /**
   * SentimentMeter findFirst
   */
  export interface SentimentMeterFindFirstArgs extends SentimentMeterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SentimentMeter findFirstOrThrow
   */
  export type SentimentMeterFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SentimentMeter
     */
    select?: SentimentMeterSelect | null
    /**
     * Filter, which SentimentMeter to fetch.
     */
    where?: SentimentMeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentMeters to fetch.
     */
    orderBy?: Enumerable<SentimentMeterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentimentMeters.
     */
    cursor?: SentimentMeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentMeters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentMeters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentimentMeters.
     */
    distinct?: Enumerable<SentimentMeterScalarFieldEnum>
  }


  /**
   * SentimentMeter findMany
   */
  export type SentimentMeterFindManyArgs = {
    /**
     * Select specific fields to fetch from the SentimentMeter
     */
    select?: SentimentMeterSelect | null
    /**
     * Filter, which SentimentMeters to fetch.
     */
    where?: SentimentMeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentMeters to fetch.
     */
    orderBy?: Enumerable<SentimentMeterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SentimentMeters.
     */
    cursor?: SentimentMeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentMeters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentMeters.
     */
    skip?: number
    distinct?: Enumerable<SentimentMeterScalarFieldEnum>
  }


  /**
   * SentimentMeter create
   */
  export type SentimentMeterCreateArgs = {
    /**
     * Select specific fields to fetch from the SentimentMeter
     */
    select?: SentimentMeterSelect | null
    /**
     * The data needed to create a SentimentMeter.
     */
    data: XOR<SentimentMeterCreateInput, SentimentMeterUncheckedCreateInput>
  }


  /**
   * SentimentMeter createMany
   */
  export type SentimentMeterCreateManyArgs = {
    /**
     * The data used to create many SentimentMeters.
     */
    data: Enumerable<SentimentMeterCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SentimentMeter update
   */
  export type SentimentMeterUpdateArgs = {
    /**
     * Select specific fields to fetch from the SentimentMeter
     */
    select?: SentimentMeterSelect | null
    /**
     * The data needed to update a SentimentMeter.
     */
    data: XOR<SentimentMeterUpdateInput, SentimentMeterUncheckedUpdateInput>
    /**
     * Choose, which SentimentMeter to update.
     */
    where: SentimentMeterWhereUniqueInput
  }


  /**
   * SentimentMeter updateMany
   */
  export type SentimentMeterUpdateManyArgs = {
    /**
     * The data used to update SentimentMeters.
     */
    data: XOR<SentimentMeterUpdateManyMutationInput, SentimentMeterUncheckedUpdateManyInput>
    /**
     * Filter which SentimentMeters to update
     */
    where?: SentimentMeterWhereInput
  }


  /**
   * SentimentMeter upsert
   */
  export type SentimentMeterUpsertArgs = {
    /**
     * Select specific fields to fetch from the SentimentMeter
     */
    select?: SentimentMeterSelect | null
    /**
     * The filter to search for the SentimentMeter to update in case it exists.
     */
    where: SentimentMeterWhereUniqueInput
    /**
     * In case the SentimentMeter found by the `where` argument doesn't exist, create a new SentimentMeter with this data.
     */
    create: XOR<SentimentMeterCreateInput, SentimentMeterUncheckedCreateInput>
    /**
     * In case the SentimentMeter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentimentMeterUpdateInput, SentimentMeterUncheckedUpdateInput>
  }


  /**
   * SentimentMeter delete
   */
  export type SentimentMeterDeleteArgs = {
    /**
     * Select specific fields to fetch from the SentimentMeter
     */
    select?: SentimentMeterSelect | null
    /**
     * Filter which SentimentMeter to delete.
     */
    where: SentimentMeterWhereUniqueInput
  }


  /**
   * SentimentMeter deleteMany
   */
  export type SentimentMeterDeleteManyArgs = {
    /**
     * Filter which SentimentMeters to delete
     */
    where?: SentimentMeterWhereInput
  }


  /**
   * SentimentMeter without action
   */
  export type SentimentMeterArgs = {
    /**
     * Select specific fields to fetch from the SentimentMeter
     */
    select?: SentimentMeterSelect | null
  }



  /**
   * Model CelebrationReactedUser
   */


  export type AggregateCelebrationReactedUser = {
    _count: CelebrationReactedUserCountAggregateOutputType | null
    _avg: CelebrationReactedUserAvgAggregateOutputType | null
    _sum: CelebrationReactedUserSumAggregateOutputType | null
    _min: CelebrationReactedUserMinAggregateOutputType | null
    _max: CelebrationReactedUserMaxAggregateOutputType | null
  }

  export type CelebrationReactedUserAvgAggregateOutputType = {
    celebrationId: number | null
    reactionId: number | null
  }

  export type CelebrationReactedUserSumAggregateOutputType = {
    celebrationId: number | null
    reactionId: number | null
  }

  export type CelebrationReactedUserMinAggregateOutputType = {
    userId: string | null
    celebrationId: number | null
    reactionId: number | null
  }

  export type CelebrationReactedUserMaxAggregateOutputType = {
    userId: string | null
    celebrationId: number | null
    reactionId: number | null
  }

  export type CelebrationReactedUserCountAggregateOutputType = {
    userId: number
    celebrationId: number
    reactionId: number
    _all: number
  }


  export type CelebrationReactedUserAvgAggregateInputType = {
    celebrationId?: true
    reactionId?: true
  }

  export type CelebrationReactedUserSumAggregateInputType = {
    celebrationId?: true
    reactionId?: true
  }

  export type CelebrationReactedUserMinAggregateInputType = {
    userId?: true
    celebrationId?: true
    reactionId?: true
  }

  export type CelebrationReactedUserMaxAggregateInputType = {
    userId?: true
    celebrationId?: true
    reactionId?: true
  }

  export type CelebrationReactedUserCountAggregateInputType = {
    userId?: true
    celebrationId?: true
    reactionId?: true
    _all?: true
  }

  export type CelebrationReactedUserAggregateArgs = {
    /**
     * Filter which CelebrationReactedUser to aggregate.
     */
    where?: CelebrationReactedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CelebrationReactedUsers to fetch.
     */
    orderBy?: Enumerable<CelebrationReactedUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CelebrationReactedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CelebrationReactedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CelebrationReactedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CelebrationReactedUsers
    **/
    _count?: true | CelebrationReactedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CelebrationReactedUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CelebrationReactedUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CelebrationReactedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CelebrationReactedUserMaxAggregateInputType
  }

  export type GetCelebrationReactedUserAggregateType<T extends CelebrationReactedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateCelebrationReactedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCelebrationReactedUser[P]>
      : GetScalarType<T[P], AggregateCelebrationReactedUser[P]>
  }




  export type CelebrationReactedUserGroupByArgs = {
    where?: CelebrationReactedUserWhereInput
    orderBy?: Enumerable<CelebrationReactedUserOrderByWithAggregationInput>
    by: CelebrationReactedUserScalarFieldEnum[]
    having?: CelebrationReactedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CelebrationReactedUserCountAggregateInputType | true
    _avg?: CelebrationReactedUserAvgAggregateInputType
    _sum?: CelebrationReactedUserSumAggregateInputType
    _min?: CelebrationReactedUserMinAggregateInputType
    _max?: CelebrationReactedUserMaxAggregateInputType
  }


  export type CelebrationReactedUserGroupByOutputType = {
    userId: string
    celebrationId: number
    reactionId: number
    _count: CelebrationReactedUserCountAggregateOutputType | null
    _avg: CelebrationReactedUserAvgAggregateOutputType | null
    _sum: CelebrationReactedUserSumAggregateOutputType | null
    _min: CelebrationReactedUserMinAggregateOutputType | null
    _max: CelebrationReactedUserMaxAggregateOutputType | null
  }

  type GetCelebrationReactedUserGroupByPayload<T extends CelebrationReactedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CelebrationReactedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CelebrationReactedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CelebrationReactedUserGroupByOutputType[P]>
            : GetScalarType<T[P], CelebrationReactedUserGroupByOutputType[P]>
        }
      >
    >


  export type CelebrationReactedUserSelect = {
    userId?: boolean
    celebrationId?: boolean
    reactionId?: boolean
    request?: boolean | CelebrationArgs
  }


  export type CelebrationReactedUserInclude = {
    request?: boolean | CelebrationArgs
  }

  export type CelebrationReactedUserGetPayload<S extends boolean | null | undefined | CelebrationReactedUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CelebrationReactedUser :
    S extends undefined ? never :
    S extends { include: any } & (CelebrationReactedUserArgs | CelebrationReactedUserFindManyArgs)
    ? CelebrationReactedUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'request' ? CelebrationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CelebrationReactedUserArgs | CelebrationReactedUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'request' ? CelebrationGetPayload<S['select'][P]> :  P extends keyof CelebrationReactedUser ? CelebrationReactedUser[P] : never
  } 
      : CelebrationReactedUser


  type CelebrationReactedUserCountArgs = 
    Omit<CelebrationReactedUserFindManyArgs, 'select' | 'include'> & {
      select?: CelebrationReactedUserCountAggregateInputType | true
    }

  export interface CelebrationReactedUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CelebrationReactedUser that matches the filter.
     * @param {CelebrationReactedUserFindUniqueArgs} args - Arguments to find a CelebrationReactedUser
     * @example
     * // Get one CelebrationReactedUser
     * const celebrationReactedUser = await prisma.celebrationReactedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CelebrationReactedUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CelebrationReactedUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CelebrationReactedUser'> extends True ? Prisma__CelebrationReactedUserClient<CelebrationReactedUserGetPayload<T>> : Prisma__CelebrationReactedUserClient<CelebrationReactedUserGetPayload<T> | null, null>

    /**
     * Find one CelebrationReactedUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CelebrationReactedUserFindUniqueOrThrowArgs} args - Arguments to find a CelebrationReactedUser
     * @example
     * // Get one CelebrationReactedUser
     * const celebrationReactedUser = await prisma.celebrationReactedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CelebrationReactedUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CelebrationReactedUserFindUniqueOrThrowArgs>
    ): Prisma__CelebrationReactedUserClient<CelebrationReactedUserGetPayload<T>>

    /**
     * Find the first CelebrationReactedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationReactedUserFindFirstArgs} args - Arguments to find a CelebrationReactedUser
     * @example
     * // Get one CelebrationReactedUser
     * const celebrationReactedUser = await prisma.celebrationReactedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CelebrationReactedUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CelebrationReactedUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CelebrationReactedUser'> extends True ? Prisma__CelebrationReactedUserClient<CelebrationReactedUserGetPayload<T>> : Prisma__CelebrationReactedUserClient<CelebrationReactedUserGetPayload<T> | null, null>

    /**
     * Find the first CelebrationReactedUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationReactedUserFindFirstOrThrowArgs} args - Arguments to find a CelebrationReactedUser
     * @example
     * // Get one CelebrationReactedUser
     * const celebrationReactedUser = await prisma.celebrationReactedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CelebrationReactedUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CelebrationReactedUserFindFirstOrThrowArgs>
    ): Prisma__CelebrationReactedUserClient<CelebrationReactedUserGetPayload<T>>

    /**
     * Find zero or more CelebrationReactedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationReactedUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CelebrationReactedUsers
     * const celebrationReactedUsers = await prisma.celebrationReactedUser.findMany()
     * 
     * // Get first 10 CelebrationReactedUsers
     * const celebrationReactedUsers = await prisma.celebrationReactedUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const celebrationReactedUserWithUserIdOnly = await prisma.celebrationReactedUser.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends CelebrationReactedUserFindManyArgs>(
      args?: SelectSubset<T, CelebrationReactedUserFindManyArgs>
    ): Prisma.PrismaPromise<Array<CelebrationReactedUserGetPayload<T>>>

    /**
     * Create a CelebrationReactedUser.
     * @param {CelebrationReactedUserCreateArgs} args - Arguments to create a CelebrationReactedUser.
     * @example
     * // Create one CelebrationReactedUser
     * const CelebrationReactedUser = await prisma.celebrationReactedUser.create({
     *   data: {
     *     // ... data to create a CelebrationReactedUser
     *   }
     * })
     * 
    **/
    create<T extends CelebrationReactedUserCreateArgs>(
      args: SelectSubset<T, CelebrationReactedUserCreateArgs>
    ): Prisma__CelebrationReactedUserClient<CelebrationReactedUserGetPayload<T>>

    /**
     * Create many CelebrationReactedUsers.
     *     @param {CelebrationReactedUserCreateManyArgs} args - Arguments to create many CelebrationReactedUsers.
     *     @example
     *     // Create many CelebrationReactedUsers
     *     const celebrationReactedUser = await prisma.celebrationReactedUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CelebrationReactedUserCreateManyArgs>(
      args?: SelectSubset<T, CelebrationReactedUserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CelebrationReactedUser.
     * @param {CelebrationReactedUserDeleteArgs} args - Arguments to delete one CelebrationReactedUser.
     * @example
     * // Delete one CelebrationReactedUser
     * const CelebrationReactedUser = await prisma.celebrationReactedUser.delete({
     *   where: {
     *     // ... filter to delete one CelebrationReactedUser
     *   }
     * })
     * 
    **/
    delete<T extends CelebrationReactedUserDeleteArgs>(
      args: SelectSubset<T, CelebrationReactedUserDeleteArgs>
    ): Prisma__CelebrationReactedUserClient<CelebrationReactedUserGetPayload<T>>

    /**
     * Update one CelebrationReactedUser.
     * @param {CelebrationReactedUserUpdateArgs} args - Arguments to update one CelebrationReactedUser.
     * @example
     * // Update one CelebrationReactedUser
     * const celebrationReactedUser = await prisma.celebrationReactedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CelebrationReactedUserUpdateArgs>(
      args: SelectSubset<T, CelebrationReactedUserUpdateArgs>
    ): Prisma__CelebrationReactedUserClient<CelebrationReactedUserGetPayload<T>>

    /**
     * Delete zero or more CelebrationReactedUsers.
     * @param {CelebrationReactedUserDeleteManyArgs} args - Arguments to filter CelebrationReactedUsers to delete.
     * @example
     * // Delete a few CelebrationReactedUsers
     * const { count } = await prisma.celebrationReactedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CelebrationReactedUserDeleteManyArgs>(
      args?: SelectSubset<T, CelebrationReactedUserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CelebrationReactedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationReactedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CelebrationReactedUsers
     * const celebrationReactedUser = await prisma.celebrationReactedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CelebrationReactedUserUpdateManyArgs>(
      args: SelectSubset<T, CelebrationReactedUserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CelebrationReactedUser.
     * @param {CelebrationReactedUserUpsertArgs} args - Arguments to update or create a CelebrationReactedUser.
     * @example
     * // Update or create a CelebrationReactedUser
     * const celebrationReactedUser = await prisma.celebrationReactedUser.upsert({
     *   create: {
     *     // ... data to create a CelebrationReactedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CelebrationReactedUser we want to update
     *   }
     * })
    **/
    upsert<T extends CelebrationReactedUserUpsertArgs>(
      args: SelectSubset<T, CelebrationReactedUserUpsertArgs>
    ): Prisma__CelebrationReactedUserClient<CelebrationReactedUserGetPayload<T>>

    /**
     * Count the number of CelebrationReactedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationReactedUserCountArgs} args - Arguments to filter CelebrationReactedUsers to count.
     * @example
     * // Count the number of CelebrationReactedUsers
     * const count = await prisma.celebrationReactedUser.count({
     *   where: {
     *     // ... the filter for the CelebrationReactedUsers we want to count
     *   }
     * })
    **/
    count<T extends CelebrationReactedUserCountArgs>(
      args?: Subset<T, CelebrationReactedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CelebrationReactedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CelebrationReactedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationReactedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CelebrationReactedUserAggregateArgs>(args: Subset<T, CelebrationReactedUserAggregateArgs>): Prisma.PrismaPromise<GetCelebrationReactedUserAggregateType<T>>

    /**
     * Group by CelebrationReactedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationReactedUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CelebrationReactedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CelebrationReactedUserGroupByArgs['orderBy'] }
        : { orderBy?: CelebrationReactedUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CelebrationReactedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelebrationReactedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CelebrationReactedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CelebrationReactedUserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    request<T extends CelebrationArgs= {}>(args?: Subset<T, CelebrationArgs>): Prisma__CelebrationClient<CelebrationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CelebrationReactedUser base type for findUnique actions
   */
  export type CelebrationReactedUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
    /**
     * Filter, which CelebrationReactedUser to fetch.
     */
    where: CelebrationReactedUserWhereUniqueInput
  }

  /**
   * CelebrationReactedUser findUnique
   */
  export interface CelebrationReactedUserFindUniqueArgs extends CelebrationReactedUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CelebrationReactedUser findUniqueOrThrow
   */
  export type CelebrationReactedUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
    /**
     * Filter, which CelebrationReactedUser to fetch.
     */
    where: CelebrationReactedUserWhereUniqueInput
  }


  /**
   * CelebrationReactedUser base type for findFirst actions
   */
  export type CelebrationReactedUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
    /**
     * Filter, which CelebrationReactedUser to fetch.
     */
    where?: CelebrationReactedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CelebrationReactedUsers to fetch.
     */
    orderBy?: Enumerable<CelebrationReactedUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CelebrationReactedUsers.
     */
    cursor?: CelebrationReactedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CelebrationReactedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CelebrationReactedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CelebrationReactedUsers.
     */
    distinct?: Enumerable<CelebrationReactedUserScalarFieldEnum>
  }

  /**
   * CelebrationReactedUser findFirst
   */
  export interface CelebrationReactedUserFindFirstArgs extends CelebrationReactedUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CelebrationReactedUser findFirstOrThrow
   */
  export type CelebrationReactedUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
    /**
     * Filter, which CelebrationReactedUser to fetch.
     */
    where?: CelebrationReactedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CelebrationReactedUsers to fetch.
     */
    orderBy?: Enumerable<CelebrationReactedUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CelebrationReactedUsers.
     */
    cursor?: CelebrationReactedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CelebrationReactedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CelebrationReactedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CelebrationReactedUsers.
     */
    distinct?: Enumerable<CelebrationReactedUserScalarFieldEnum>
  }


  /**
   * CelebrationReactedUser findMany
   */
  export type CelebrationReactedUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
    /**
     * Filter, which CelebrationReactedUsers to fetch.
     */
    where?: CelebrationReactedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CelebrationReactedUsers to fetch.
     */
    orderBy?: Enumerable<CelebrationReactedUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CelebrationReactedUsers.
     */
    cursor?: CelebrationReactedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CelebrationReactedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CelebrationReactedUsers.
     */
    skip?: number
    distinct?: Enumerable<CelebrationReactedUserScalarFieldEnum>
  }


  /**
   * CelebrationReactedUser create
   */
  export type CelebrationReactedUserCreateArgs = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
    /**
     * The data needed to create a CelebrationReactedUser.
     */
    data: XOR<CelebrationReactedUserCreateInput, CelebrationReactedUserUncheckedCreateInput>
  }


  /**
   * CelebrationReactedUser createMany
   */
  export type CelebrationReactedUserCreateManyArgs = {
    /**
     * The data used to create many CelebrationReactedUsers.
     */
    data: Enumerable<CelebrationReactedUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CelebrationReactedUser update
   */
  export type CelebrationReactedUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
    /**
     * The data needed to update a CelebrationReactedUser.
     */
    data: XOR<CelebrationReactedUserUpdateInput, CelebrationReactedUserUncheckedUpdateInput>
    /**
     * Choose, which CelebrationReactedUser to update.
     */
    where: CelebrationReactedUserWhereUniqueInput
  }


  /**
   * CelebrationReactedUser updateMany
   */
  export type CelebrationReactedUserUpdateManyArgs = {
    /**
     * The data used to update CelebrationReactedUsers.
     */
    data: XOR<CelebrationReactedUserUpdateManyMutationInput, CelebrationReactedUserUncheckedUpdateManyInput>
    /**
     * Filter which CelebrationReactedUsers to update
     */
    where?: CelebrationReactedUserWhereInput
  }


  /**
   * CelebrationReactedUser upsert
   */
  export type CelebrationReactedUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
    /**
     * The filter to search for the CelebrationReactedUser to update in case it exists.
     */
    where: CelebrationReactedUserWhereUniqueInput
    /**
     * In case the CelebrationReactedUser found by the `where` argument doesn't exist, create a new CelebrationReactedUser with this data.
     */
    create: XOR<CelebrationReactedUserCreateInput, CelebrationReactedUserUncheckedCreateInput>
    /**
     * In case the CelebrationReactedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CelebrationReactedUserUpdateInput, CelebrationReactedUserUncheckedUpdateInput>
  }


  /**
   * CelebrationReactedUser delete
   */
  export type CelebrationReactedUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
    /**
     * Filter which CelebrationReactedUser to delete.
     */
    where: CelebrationReactedUserWhereUniqueInput
  }


  /**
   * CelebrationReactedUser deleteMany
   */
  export type CelebrationReactedUserDeleteManyArgs = {
    /**
     * Filter which CelebrationReactedUsers to delete
     */
    where?: CelebrationReactedUserWhereInput
  }


  /**
   * CelebrationReactedUser without action
   */
  export type CelebrationReactedUserArgs = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
  }



  /**
   * Model Celebration
   */


  export type AggregateCelebration = {
    _count: CelebrationCountAggregateOutputType | null
    _avg: CelebrationAvgAggregateOutputType | null
    _sum: CelebrationSumAggregateOutputType | null
    _min: CelebrationMinAggregateOutputType | null
    _max: CelebrationMaxAggregateOutputType | null
  }

  export type CelebrationAvgAggregateOutputType = {
    celebrationId: number | null
    projectId: number | null
  }

  export type CelebrationSumAggregateOutputType = {
    celebrationId: number | null
    projectId: number | null
  }

  export type CelebrationMinAggregateOutputType = {
    author: string | null
    content: string | null
    createdAt: Date | null
    type: CelebrationType | null
    celebrationId: number | null
    isAnonymous: boolean | null
    projectId: number | null
  }

  export type CelebrationMaxAggregateOutputType = {
    author: string | null
    content: string | null
    createdAt: Date | null
    type: CelebrationType | null
    celebrationId: number | null
    isAnonymous: boolean | null
    projectId: number | null
  }

  export type CelebrationCountAggregateOutputType = {
    author: number
    content: number
    createdAt: number
    type: number
    celebrationId: number
    isAnonymous: number
    projectId: number
    _all: number
  }


  export type CelebrationAvgAggregateInputType = {
    celebrationId?: true
    projectId?: true
  }

  export type CelebrationSumAggregateInputType = {
    celebrationId?: true
    projectId?: true
  }

  export type CelebrationMinAggregateInputType = {
    author?: true
    content?: true
    createdAt?: true
    type?: true
    celebrationId?: true
    isAnonymous?: true
    projectId?: true
  }

  export type CelebrationMaxAggregateInputType = {
    author?: true
    content?: true
    createdAt?: true
    type?: true
    celebrationId?: true
    isAnonymous?: true
    projectId?: true
  }

  export type CelebrationCountAggregateInputType = {
    author?: true
    content?: true
    createdAt?: true
    type?: true
    celebrationId?: true
    isAnonymous?: true
    projectId?: true
    _all?: true
  }

  export type CelebrationAggregateArgs = {
    /**
     * Filter which Celebration to aggregate.
     */
    where?: CelebrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebrations to fetch.
     */
    orderBy?: Enumerable<CelebrationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CelebrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Celebrations
    **/
    _count?: true | CelebrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CelebrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CelebrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CelebrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CelebrationMaxAggregateInputType
  }

  export type GetCelebrationAggregateType<T extends CelebrationAggregateArgs> = {
        [P in keyof T & keyof AggregateCelebration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCelebration[P]>
      : GetScalarType<T[P], AggregateCelebration[P]>
  }




  export type CelebrationGroupByArgs = {
    where?: CelebrationWhereInput
    orderBy?: Enumerable<CelebrationOrderByWithAggregationInput>
    by: CelebrationScalarFieldEnum[]
    having?: CelebrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CelebrationCountAggregateInputType | true
    _avg?: CelebrationAvgAggregateInputType
    _sum?: CelebrationSumAggregateInputType
    _min?: CelebrationMinAggregateInputType
    _max?: CelebrationMaxAggregateInputType
  }


  export type CelebrationGroupByOutputType = {
    author: string
    content: string
    createdAt: Date
    type: CelebrationType
    celebrationId: number
    isAnonymous: boolean
    projectId: number
    _count: CelebrationCountAggregateOutputType | null
    _avg: CelebrationAvgAggregateOutputType | null
    _sum: CelebrationSumAggregateOutputType | null
    _min: CelebrationMinAggregateOutputType | null
    _max: CelebrationMaxAggregateOutputType | null
  }

  type GetCelebrationGroupByPayload<T extends CelebrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CelebrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CelebrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CelebrationGroupByOutputType[P]>
            : GetScalarType<T[P], CelebrationGroupByOutputType[P]>
        }
      >
    >


  export type CelebrationSelect = {
    author?: boolean
    content?: boolean
    createdAt?: boolean
    type?: boolean
    celebrationId?: boolean
    isAnonymous?: boolean
    projectId?: boolean
    reaction?: boolean | Celebration$reactionArgs
    _count?: boolean | CelebrationCountOutputTypeArgs
  }


  export type CelebrationInclude = {
    reaction?: boolean | Celebration$reactionArgs
    _count?: boolean | CelebrationCountOutputTypeArgs
  }

  export type CelebrationGetPayload<S extends boolean | null | undefined | CelebrationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Celebration :
    S extends undefined ? never :
    S extends { include: any } & (CelebrationArgs | CelebrationFindManyArgs)
    ? Celebration  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'reaction' ? Array < CelebrationReactedUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? CelebrationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CelebrationArgs | CelebrationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'reaction' ? Array < CelebrationReactedUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? CelebrationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Celebration ? Celebration[P] : never
  } 
      : Celebration


  type CelebrationCountArgs = 
    Omit<CelebrationFindManyArgs, 'select' | 'include'> & {
      select?: CelebrationCountAggregateInputType | true
    }

  export interface CelebrationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Celebration that matches the filter.
     * @param {CelebrationFindUniqueArgs} args - Arguments to find a Celebration
     * @example
     * // Get one Celebration
     * const celebration = await prisma.celebration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CelebrationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CelebrationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Celebration'> extends True ? Prisma__CelebrationClient<CelebrationGetPayload<T>> : Prisma__CelebrationClient<CelebrationGetPayload<T> | null, null>

    /**
     * Find one Celebration that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CelebrationFindUniqueOrThrowArgs} args - Arguments to find a Celebration
     * @example
     * // Get one Celebration
     * const celebration = await prisma.celebration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CelebrationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CelebrationFindUniqueOrThrowArgs>
    ): Prisma__CelebrationClient<CelebrationGetPayload<T>>

    /**
     * Find the first Celebration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationFindFirstArgs} args - Arguments to find a Celebration
     * @example
     * // Get one Celebration
     * const celebration = await prisma.celebration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CelebrationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CelebrationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Celebration'> extends True ? Prisma__CelebrationClient<CelebrationGetPayload<T>> : Prisma__CelebrationClient<CelebrationGetPayload<T> | null, null>

    /**
     * Find the first Celebration that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationFindFirstOrThrowArgs} args - Arguments to find a Celebration
     * @example
     * // Get one Celebration
     * const celebration = await prisma.celebration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CelebrationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CelebrationFindFirstOrThrowArgs>
    ): Prisma__CelebrationClient<CelebrationGetPayload<T>>

    /**
     * Find zero or more Celebrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Celebrations
     * const celebrations = await prisma.celebration.findMany()
     * 
     * // Get first 10 Celebrations
     * const celebrations = await prisma.celebration.findMany({ take: 10 })
     * 
     * // Only select the `author`
     * const celebrationWithAuthorOnly = await prisma.celebration.findMany({ select: { author: true } })
     * 
    **/
    findMany<T extends CelebrationFindManyArgs>(
      args?: SelectSubset<T, CelebrationFindManyArgs>
    ): Prisma.PrismaPromise<Array<CelebrationGetPayload<T>>>

    /**
     * Create a Celebration.
     * @param {CelebrationCreateArgs} args - Arguments to create a Celebration.
     * @example
     * // Create one Celebration
     * const Celebration = await prisma.celebration.create({
     *   data: {
     *     // ... data to create a Celebration
     *   }
     * })
     * 
    **/
    create<T extends CelebrationCreateArgs>(
      args: SelectSubset<T, CelebrationCreateArgs>
    ): Prisma__CelebrationClient<CelebrationGetPayload<T>>

    /**
     * Create many Celebrations.
     *     @param {CelebrationCreateManyArgs} args - Arguments to create many Celebrations.
     *     @example
     *     // Create many Celebrations
     *     const celebration = await prisma.celebration.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CelebrationCreateManyArgs>(
      args?: SelectSubset<T, CelebrationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Celebration.
     * @param {CelebrationDeleteArgs} args - Arguments to delete one Celebration.
     * @example
     * // Delete one Celebration
     * const Celebration = await prisma.celebration.delete({
     *   where: {
     *     // ... filter to delete one Celebration
     *   }
     * })
     * 
    **/
    delete<T extends CelebrationDeleteArgs>(
      args: SelectSubset<T, CelebrationDeleteArgs>
    ): Prisma__CelebrationClient<CelebrationGetPayload<T>>

    /**
     * Update one Celebration.
     * @param {CelebrationUpdateArgs} args - Arguments to update one Celebration.
     * @example
     * // Update one Celebration
     * const celebration = await prisma.celebration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CelebrationUpdateArgs>(
      args: SelectSubset<T, CelebrationUpdateArgs>
    ): Prisma__CelebrationClient<CelebrationGetPayload<T>>

    /**
     * Delete zero or more Celebrations.
     * @param {CelebrationDeleteManyArgs} args - Arguments to filter Celebrations to delete.
     * @example
     * // Delete a few Celebrations
     * const { count } = await prisma.celebration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CelebrationDeleteManyArgs>(
      args?: SelectSubset<T, CelebrationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Celebrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Celebrations
     * const celebration = await prisma.celebration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CelebrationUpdateManyArgs>(
      args: SelectSubset<T, CelebrationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Celebration.
     * @param {CelebrationUpsertArgs} args - Arguments to update or create a Celebration.
     * @example
     * // Update or create a Celebration
     * const celebration = await prisma.celebration.upsert({
     *   create: {
     *     // ... data to create a Celebration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Celebration we want to update
     *   }
     * })
    **/
    upsert<T extends CelebrationUpsertArgs>(
      args: SelectSubset<T, CelebrationUpsertArgs>
    ): Prisma__CelebrationClient<CelebrationGetPayload<T>>

    /**
     * Count the number of Celebrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationCountArgs} args - Arguments to filter Celebrations to count.
     * @example
     * // Count the number of Celebrations
     * const count = await prisma.celebration.count({
     *   where: {
     *     // ... the filter for the Celebrations we want to count
     *   }
     * })
    **/
    count<T extends CelebrationCountArgs>(
      args?: Subset<T, CelebrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CelebrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Celebration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CelebrationAggregateArgs>(args: Subset<T, CelebrationAggregateArgs>): Prisma.PrismaPromise<GetCelebrationAggregateType<T>>

    /**
     * Group by Celebration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CelebrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CelebrationGroupByArgs['orderBy'] }
        : { orderBy?: CelebrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CelebrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelebrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Celebration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CelebrationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    reaction<T extends Celebration$reactionArgs= {}>(args?: Subset<T, Celebration$reactionArgs>): Prisma.PrismaPromise<Array<CelebrationReactedUserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Celebration base type for findUnique actions
   */
  export type CelebrationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Celebration
     */
    select?: CelebrationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationInclude | null
    /**
     * Filter, which Celebration to fetch.
     */
    where: CelebrationWhereUniqueInput
  }

  /**
   * Celebration findUnique
   */
  export interface CelebrationFindUniqueArgs extends CelebrationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Celebration findUniqueOrThrow
   */
  export type CelebrationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Celebration
     */
    select?: CelebrationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationInclude | null
    /**
     * Filter, which Celebration to fetch.
     */
    where: CelebrationWhereUniqueInput
  }


  /**
   * Celebration base type for findFirst actions
   */
  export type CelebrationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Celebration
     */
    select?: CelebrationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationInclude | null
    /**
     * Filter, which Celebration to fetch.
     */
    where?: CelebrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebrations to fetch.
     */
    orderBy?: Enumerable<CelebrationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Celebrations.
     */
    cursor?: CelebrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Celebrations.
     */
    distinct?: Enumerable<CelebrationScalarFieldEnum>
  }

  /**
   * Celebration findFirst
   */
  export interface CelebrationFindFirstArgs extends CelebrationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Celebration findFirstOrThrow
   */
  export type CelebrationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Celebration
     */
    select?: CelebrationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationInclude | null
    /**
     * Filter, which Celebration to fetch.
     */
    where?: CelebrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebrations to fetch.
     */
    orderBy?: Enumerable<CelebrationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Celebrations.
     */
    cursor?: CelebrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Celebrations.
     */
    distinct?: Enumerable<CelebrationScalarFieldEnum>
  }


  /**
   * Celebration findMany
   */
  export type CelebrationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Celebration
     */
    select?: CelebrationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationInclude | null
    /**
     * Filter, which Celebrations to fetch.
     */
    where?: CelebrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebrations to fetch.
     */
    orderBy?: Enumerable<CelebrationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Celebrations.
     */
    cursor?: CelebrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebrations.
     */
    skip?: number
    distinct?: Enumerable<CelebrationScalarFieldEnum>
  }


  /**
   * Celebration create
   */
  export type CelebrationCreateArgs = {
    /**
     * Select specific fields to fetch from the Celebration
     */
    select?: CelebrationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationInclude | null
    /**
     * The data needed to create a Celebration.
     */
    data: XOR<CelebrationCreateInput, CelebrationUncheckedCreateInput>
  }


  /**
   * Celebration createMany
   */
  export type CelebrationCreateManyArgs = {
    /**
     * The data used to create many Celebrations.
     */
    data: Enumerable<CelebrationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Celebration update
   */
  export type CelebrationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Celebration
     */
    select?: CelebrationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationInclude | null
    /**
     * The data needed to update a Celebration.
     */
    data: XOR<CelebrationUpdateInput, CelebrationUncheckedUpdateInput>
    /**
     * Choose, which Celebration to update.
     */
    where: CelebrationWhereUniqueInput
  }


  /**
   * Celebration updateMany
   */
  export type CelebrationUpdateManyArgs = {
    /**
     * The data used to update Celebrations.
     */
    data: XOR<CelebrationUpdateManyMutationInput, CelebrationUncheckedUpdateManyInput>
    /**
     * Filter which Celebrations to update
     */
    where?: CelebrationWhereInput
  }


  /**
   * Celebration upsert
   */
  export type CelebrationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Celebration
     */
    select?: CelebrationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationInclude | null
    /**
     * The filter to search for the Celebration to update in case it exists.
     */
    where: CelebrationWhereUniqueInput
    /**
     * In case the Celebration found by the `where` argument doesn't exist, create a new Celebration with this data.
     */
    create: XOR<CelebrationCreateInput, CelebrationUncheckedCreateInput>
    /**
     * In case the Celebration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CelebrationUpdateInput, CelebrationUncheckedUpdateInput>
  }


  /**
   * Celebration delete
   */
  export type CelebrationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Celebration
     */
    select?: CelebrationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationInclude | null
    /**
     * Filter which Celebration to delete.
     */
    where: CelebrationWhereUniqueInput
  }


  /**
   * Celebration deleteMany
   */
  export type CelebrationDeleteManyArgs = {
    /**
     * Filter which Celebrations to delete
     */
    where?: CelebrationWhereInput
  }


  /**
   * Celebration.reaction
   */
  export type Celebration$reactionArgs = {
    /**
     * Select specific fields to fetch from the CelebrationReactedUser
     */
    select?: CelebrationReactedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationReactedUserInclude | null
    where?: CelebrationReactedUserWhereInput
    orderBy?: Enumerable<CelebrationReactedUserOrderByWithRelationInput>
    cursor?: CelebrationReactedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CelebrationReactedUserScalarFieldEnum>
  }


  /**
   * Celebration without action
   */
  export type CelebrationArgs = {
    /**
     * Select specific fields to fetch from the Celebration
     */
    select?: CelebrationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebrationInclude | null
  }



  /**
   * Model RequestTaggedUser
   */


  export type AggregateRequestTaggedUser = {
    _count: RequestTaggedUserCountAggregateOutputType | null
    _avg: RequestTaggedUserAvgAggregateOutputType | null
    _sum: RequestTaggedUserSumAggregateOutputType | null
    _min: RequestTaggedUserMinAggregateOutputType | null
    _max: RequestTaggedUserMaxAggregateOutputType | null
  }

  export type RequestTaggedUserAvgAggregateOutputType = {
    requestId: number | null
    tagId: number | null
  }

  export type RequestTaggedUserSumAggregateOutputType = {
    requestId: number | null
    tagId: number | null
  }

  export type RequestTaggedUserMinAggregateOutputType = {
    userId: string | null
    requestId: number | null
    tagId: number | null
  }

  export type RequestTaggedUserMaxAggregateOutputType = {
    userId: string | null
    requestId: number | null
    tagId: number | null
  }

  export type RequestTaggedUserCountAggregateOutputType = {
    userId: number
    requestId: number
    tagId: number
    _all: number
  }


  export type RequestTaggedUserAvgAggregateInputType = {
    requestId?: true
    tagId?: true
  }

  export type RequestTaggedUserSumAggregateInputType = {
    requestId?: true
    tagId?: true
  }

  export type RequestTaggedUserMinAggregateInputType = {
    userId?: true
    requestId?: true
    tagId?: true
  }

  export type RequestTaggedUserMaxAggregateInputType = {
    userId?: true
    requestId?: true
    tagId?: true
  }

  export type RequestTaggedUserCountAggregateInputType = {
    userId?: true
    requestId?: true
    tagId?: true
    _all?: true
  }

  export type RequestTaggedUserAggregateArgs = {
    /**
     * Filter which RequestTaggedUser to aggregate.
     */
    where?: RequestTaggedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestTaggedUsers to fetch.
     */
    orderBy?: Enumerable<RequestTaggedUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestTaggedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestTaggedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestTaggedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestTaggedUsers
    **/
    _count?: true | RequestTaggedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestTaggedUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestTaggedUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestTaggedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestTaggedUserMaxAggregateInputType
  }

  export type GetRequestTaggedUserAggregateType<T extends RequestTaggedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestTaggedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestTaggedUser[P]>
      : GetScalarType<T[P], AggregateRequestTaggedUser[P]>
  }




  export type RequestTaggedUserGroupByArgs = {
    where?: RequestTaggedUserWhereInput
    orderBy?: Enumerable<RequestTaggedUserOrderByWithAggregationInput>
    by: RequestTaggedUserScalarFieldEnum[]
    having?: RequestTaggedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestTaggedUserCountAggregateInputType | true
    _avg?: RequestTaggedUserAvgAggregateInputType
    _sum?: RequestTaggedUserSumAggregateInputType
    _min?: RequestTaggedUserMinAggregateInputType
    _max?: RequestTaggedUserMaxAggregateInputType
  }


  export type RequestTaggedUserGroupByOutputType = {
    userId: string
    requestId: number
    tagId: number
    _count: RequestTaggedUserCountAggregateOutputType | null
    _avg: RequestTaggedUserAvgAggregateOutputType | null
    _sum: RequestTaggedUserSumAggregateOutputType | null
    _min: RequestTaggedUserMinAggregateOutputType | null
    _max: RequestTaggedUserMaxAggregateOutputType | null
  }

  type GetRequestTaggedUserGroupByPayload<T extends RequestTaggedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RequestTaggedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestTaggedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestTaggedUserGroupByOutputType[P]>
            : GetScalarType<T[P], RequestTaggedUserGroupByOutputType[P]>
        }
      >
    >


  export type RequestTaggedUserSelect = {
    userId?: boolean
    requestId?: boolean
    tagId?: boolean
    request?: boolean | RequestArgs
  }


  export type RequestTaggedUserInclude = {
    request?: boolean | RequestArgs
  }

  export type RequestTaggedUserGetPayload<S extends boolean | null | undefined | RequestTaggedUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RequestTaggedUser :
    S extends undefined ? never :
    S extends { include: any } & (RequestTaggedUserArgs | RequestTaggedUserFindManyArgs)
    ? RequestTaggedUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'request' ? RequestGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RequestTaggedUserArgs | RequestTaggedUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'request' ? RequestGetPayload<S['select'][P]> :  P extends keyof RequestTaggedUser ? RequestTaggedUser[P] : never
  } 
      : RequestTaggedUser


  type RequestTaggedUserCountArgs = 
    Omit<RequestTaggedUserFindManyArgs, 'select' | 'include'> & {
      select?: RequestTaggedUserCountAggregateInputType | true
    }

  export interface RequestTaggedUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RequestTaggedUser that matches the filter.
     * @param {RequestTaggedUserFindUniqueArgs} args - Arguments to find a RequestTaggedUser
     * @example
     * // Get one RequestTaggedUser
     * const requestTaggedUser = await prisma.requestTaggedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RequestTaggedUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RequestTaggedUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RequestTaggedUser'> extends True ? Prisma__RequestTaggedUserClient<RequestTaggedUserGetPayload<T>> : Prisma__RequestTaggedUserClient<RequestTaggedUserGetPayload<T> | null, null>

    /**
     * Find one RequestTaggedUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RequestTaggedUserFindUniqueOrThrowArgs} args - Arguments to find a RequestTaggedUser
     * @example
     * // Get one RequestTaggedUser
     * const requestTaggedUser = await prisma.requestTaggedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RequestTaggedUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RequestTaggedUserFindUniqueOrThrowArgs>
    ): Prisma__RequestTaggedUserClient<RequestTaggedUserGetPayload<T>>

    /**
     * Find the first RequestTaggedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestTaggedUserFindFirstArgs} args - Arguments to find a RequestTaggedUser
     * @example
     * // Get one RequestTaggedUser
     * const requestTaggedUser = await prisma.requestTaggedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RequestTaggedUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RequestTaggedUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RequestTaggedUser'> extends True ? Prisma__RequestTaggedUserClient<RequestTaggedUserGetPayload<T>> : Prisma__RequestTaggedUserClient<RequestTaggedUserGetPayload<T> | null, null>

    /**
     * Find the first RequestTaggedUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestTaggedUserFindFirstOrThrowArgs} args - Arguments to find a RequestTaggedUser
     * @example
     * // Get one RequestTaggedUser
     * const requestTaggedUser = await prisma.requestTaggedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RequestTaggedUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RequestTaggedUserFindFirstOrThrowArgs>
    ): Prisma__RequestTaggedUserClient<RequestTaggedUserGetPayload<T>>

    /**
     * Find zero or more RequestTaggedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestTaggedUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestTaggedUsers
     * const requestTaggedUsers = await prisma.requestTaggedUser.findMany()
     * 
     * // Get first 10 RequestTaggedUsers
     * const requestTaggedUsers = await prisma.requestTaggedUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const requestTaggedUserWithUserIdOnly = await prisma.requestTaggedUser.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends RequestTaggedUserFindManyArgs>(
      args?: SelectSubset<T, RequestTaggedUserFindManyArgs>
    ): Prisma.PrismaPromise<Array<RequestTaggedUserGetPayload<T>>>

    /**
     * Create a RequestTaggedUser.
     * @param {RequestTaggedUserCreateArgs} args - Arguments to create a RequestTaggedUser.
     * @example
     * // Create one RequestTaggedUser
     * const RequestTaggedUser = await prisma.requestTaggedUser.create({
     *   data: {
     *     // ... data to create a RequestTaggedUser
     *   }
     * })
     * 
    **/
    create<T extends RequestTaggedUserCreateArgs>(
      args: SelectSubset<T, RequestTaggedUserCreateArgs>
    ): Prisma__RequestTaggedUserClient<RequestTaggedUserGetPayload<T>>

    /**
     * Create many RequestTaggedUsers.
     *     @param {RequestTaggedUserCreateManyArgs} args - Arguments to create many RequestTaggedUsers.
     *     @example
     *     // Create many RequestTaggedUsers
     *     const requestTaggedUser = await prisma.requestTaggedUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RequestTaggedUserCreateManyArgs>(
      args?: SelectSubset<T, RequestTaggedUserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RequestTaggedUser.
     * @param {RequestTaggedUserDeleteArgs} args - Arguments to delete one RequestTaggedUser.
     * @example
     * // Delete one RequestTaggedUser
     * const RequestTaggedUser = await prisma.requestTaggedUser.delete({
     *   where: {
     *     // ... filter to delete one RequestTaggedUser
     *   }
     * })
     * 
    **/
    delete<T extends RequestTaggedUserDeleteArgs>(
      args: SelectSubset<T, RequestTaggedUserDeleteArgs>
    ): Prisma__RequestTaggedUserClient<RequestTaggedUserGetPayload<T>>

    /**
     * Update one RequestTaggedUser.
     * @param {RequestTaggedUserUpdateArgs} args - Arguments to update one RequestTaggedUser.
     * @example
     * // Update one RequestTaggedUser
     * const requestTaggedUser = await prisma.requestTaggedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RequestTaggedUserUpdateArgs>(
      args: SelectSubset<T, RequestTaggedUserUpdateArgs>
    ): Prisma__RequestTaggedUserClient<RequestTaggedUserGetPayload<T>>

    /**
     * Delete zero or more RequestTaggedUsers.
     * @param {RequestTaggedUserDeleteManyArgs} args - Arguments to filter RequestTaggedUsers to delete.
     * @example
     * // Delete a few RequestTaggedUsers
     * const { count } = await prisma.requestTaggedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RequestTaggedUserDeleteManyArgs>(
      args?: SelectSubset<T, RequestTaggedUserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestTaggedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestTaggedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestTaggedUsers
     * const requestTaggedUser = await prisma.requestTaggedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RequestTaggedUserUpdateManyArgs>(
      args: SelectSubset<T, RequestTaggedUserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RequestTaggedUser.
     * @param {RequestTaggedUserUpsertArgs} args - Arguments to update or create a RequestTaggedUser.
     * @example
     * // Update or create a RequestTaggedUser
     * const requestTaggedUser = await prisma.requestTaggedUser.upsert({
     *   create: {
     *     // ... data to create a RequestTaggedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestTaggedUser we want to update
     *   }
     * })
    **/
    upsert<T extends RequestTaggedUserUpsertArgs>(
      args: SelectSubset<T, RequestTaggedUserUpsertArgs>
    ): Prisma__RequestTaggedUserClient<RequestTaggedUserGetPayload<T>>

    /**
     * Count the number of RequestTaggedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestTaggedUserCountArgs} args - Arguments to filter RequestTaggedUsers to count.
     * @example
     * // Count the number of RequestTaggedUsers
     * const count = await prisma.requestTaggedUser.count({
     *   where: {
     *     // ... the filter for the RequestTaggedUsers we want to count
     *   }
     * })
    **/
    count<T extends RequestTaggedUserCountArgs>(
      args?: Subset<T, RequestTaggedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestTaggedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestTaggedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestTaggedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestTaggedUserAggregateArgs>(args: Subset<T, RequestTaggedUserAggregateArgs>): Prisma.PrismaPromise<GetRequestTaggedUserAggregateType<T>>

    /**
     * Group by RequestTaggedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestTaggedUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestTaggedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestTaggedUserGroupByArgs['orderBy'] }
        : { orderBy?: RequestTaggedUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestTaggedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestTaggedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestTaggedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RequestTaggedUserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    request<T extends RequestArgs= {}>(args?: Subset<T, RequestArgs>): Prisma__RequestClient<RequestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RequestTaggedUser base type for findUnique actions
   */
  export type RequestTaggedUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
    /**
     * Filter, which RequestTaggedUser to fetch.
     */
    where: RequestTaggedUserWhereUniqueInput
  }

  /**
   * RequestTaggedUser findUnique
   */
  export interface RequestTaggedUserFindUniqueArgs extends RequestTaggedUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RequestTaggedUser findUniqueOrThrow
   */
  export type RequestTaggedUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
    /**
     * Filter, which RequestTaggedUser to fetch.
     */
    where: RequestTaggedUserWhereUniqueInput
  }


  /**
   * RequestTaggedUser base type for findFirst actions
   */
  export type RequestTaggedUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
    /**
     * Filter, which RequestTaggedUser to fetch.
     */
    where?: RequestTaggedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestTaggedUsers to fetch.
     */
    orderBy?: Enumerable<RequestTaggedUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestTaggedUsers.
     */
    cursor?: RequestTaggedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestTaggedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestTaggedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestTaggedUsers.
     */
    distinct?: Enumerable<RequestTaggedUserScalarFieldEnum>
  }

  /**
   * RequestTaggedUser findFirst
   */
  export interface RequestTaggedUserFindFirstArgs extends RequestTaggedUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RequestTaggedUser findFirstOrThrow
   */
  export type RequestTaggedUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
    /**
     * Filter, which RequestTaggedUser to fetch.
     */
    where?: RequestTaggedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestTaggedUsers to fetch.
     */
    orderBy?: Enumerable<RequestTaggedUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestTaggedUsers.
     */
    cursor?: RequestTaggedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestTaggedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestTaggedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestTaggedUsers.
     */
    distinct?: Enumerable<RequestTaggedUserScalarFieldEnum>
  }


  /**
   * RequestTaggedUser findMany
   */
  export type RequestTaggedUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
    /**
     * Filter, which RequestTaggedUsers to fetch.
     */
    where?: RequestTaggedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestTaggedUsers to fetch.
     */
    orderBy?: Enumerable<RequestTaggedUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestTaggedUsers.
     */
    cursor?: RequestTaggedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestTaggedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestTaggedUsers.
     */
    skip?: number
    distinct?: Enumerable<RequestTaggedUserScalarFieldEnum>
  }


  /**
   * RequestTaggedUser create
   */
  export type RequestTaggedUserCreateArgs = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
    /**
     * The data needed to create a RequestTaggedUser.
     */
    data: XOR<RequestTaggedUserCreateInput, RequestTaggedUserUncheckedCreateInput>
  }


  /**
   * RequestTaggedUser createMany
   */
  export type RequestTaggedUserCreateManyArgs = {
    /**
     * The data used to create many RequestTaggedUsers.
     */
    data: Enumerable<RequestTaggedUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RequestTaggedUser update
   */
  export type RequestTaggedUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
    /**
     * The data needed to update a RequestTaggedUser.
     */
    data: XOR<RequestTaggedUserUpdateInput, RequestTaggedUserUncheckedUpdateInput>
    /**
     * Choose, which RequestTaggedUser to update.
     */
    where: RequestTaggedUserWhereUniqueInput
  }


  /**
   * RequestTaggedUser updateMany
   */
  export type RequestTaggedUserUpdateManyArgs = {
    /**
     * The data used to update RequestTaggedUsers.
     */
    data: XOR<RequestTaggedUserUpdateManyMutationInput, RequestTaggedUserUncheckedUpdateManyInput>
    /**
     * Filter which RequestTaggedUsers to update
     */
    where?: RequestTaggedUserWhereInput
  }


  /**
   * RequestTaggedUser upsert
   */
  export type RequestTaggedUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
    /**
     * The filter to search for the RequestTaggedUser to update in case it exists.
     */
    where: RequestTaggedUserWhereUniqueInput
    /**
     * In case the RequestTaggedUser found by the `where` argument doesn't exist, create a new RequestTaggedUser with this data.
     */
    create: XOR<RequestTaggedUserCreateInput, RequestTaggedUserUncheckedCreateInput>
    /**
     * In case the RequestTaggedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestTaggedUserUpdateInput, RequestTaggedUserUncheckedUpdateInput>
  }


  /**
   * RequestTaggedUser delete
   */
  export type RequestTaggedUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
    /**
     * Filter which RequestTaggedUser to delete.
     */
    where: RequestTaggedUserWhereUniqueInput
  }


  /**
   * RequestTaggedUser deleteMany
   */
  export type RequestTaggedUserDeleteManyArgs = {
    /**
     * Filter which RequestTaggedUsers to delete
     */
    where?: RequestTaggedUserWhereInput
  }


  /**
   * RequestTaggedUser without action
   */
  export type RequestTaggedUserArgs = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
  }



  /**
   * Model Request
   */


  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    requestId: number | null
    projectId: number | null
  }

  export type RequestSumAggregateOutputType = {
    requestId: number | null
    projectId: number | null
  }

  export type RequestMinAggregateOutputType = {
    author: string | null
    content: string | null
    status: RequestStatus | null
    type: RequestType | null
    createdAt: Date | null
    requestId: number | null
    projectId: number | null
  }

  export type RequestMaxAggregateOutputType = {
    author: string | null
    content: string | null
    status: RequestStatus | null
    type: RequestType | null
    createdAt: Date | null
    requestId: number | null
    projectId: number | null
  }

  export type RequestCountAggregateOutputType = {
    author: number
    content: number
    status: number
    type: number
    createdAt: number
    requestId: number
    projectId: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    requestId?: true
    projectId?: true
  }

  export type RequestSumAggregateInputType = {
    requestId?: true
    projectId?: true
  }

  export type RequestMinAggregateInputType = {
    author?: true
    content?: true
    status?: true
    type?: true
    createdAt?: true
    requestId?: true
    projectId?: true
  }

  export type RequestMaxAggregateInputType = {
    author?: true
    content?: true
    status?: true
    type?: true
    createdAt?: true
    requestId?: true
    projectId?: true
  }

  export type RequestCountAggregateInputType = {
    author?: true
    content?: true
    status?: true
    type?: true
    createdAt?: true
    requestId?: true
    projectId?: true
    _all?: true
  }

  export type RequestAggregateArgs = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs = {
    where?: RequestWhereInput
    orderBy?: Enumerable<RequestOrderByWithAggregationInput>
    by: RequestScalarFieldEnum[]
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }


  export type RequestGroupByOutputType = {
    author: string
    content: string
    status: RequestStatus
    type: RequestType
    createdAt: Date
    requestId: number
    projectId: number
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect = {
    author?: boolean
    content?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    requestId?: boolean
    projectId?: boolean
    taggedIndividuals?: boolean | Request$taggedIndividualsArgs
    _count?: boolean | RequestCountOutputTypeArgs
  }


  export type RequestInclude = {
    taggedIndividuals?: boolean | Request$taggedIndividualsArgs
    _count?: boolean | RequestCountOutputTypeArgs
  }

  export type RequestGetPayload<S extends boolean | null | undefined | RequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Request :
    S extends undefined ? never :
    S extends { include: any } & (RequestArgs | RequestFindManyArgs)
    ? Request  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'taggedIndividuals' ? Array < RequestTaggedUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? RequestCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RequestArgs | RequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'taggedIndividuals' ? Array < RequestTaggedUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? RequestCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Request ? Request[P] : never
  } 
      : Request


  type RequestCountArgs = 
    Omit<RequestFindManyArgs, 'select' | 'include'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Request'> extends True ? Prisma__RequestClient<RequestGetPayload<T>> : Prisma__RequestClient<RequestGetPayload<T> | null, null>

    /**
     * Find one Request that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RequestFindUniqueOrThrowArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Request'> extends True ? Prisma__RequestClient<RequestGetPayload<T>> : Prisma__RequestClient<RequestGetPayload<T> | null, null>

    /**
     * Find the first Request that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RequestFindFirstOrThrowArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `author`
     * const requestWithAuthorOnly = await prisma.request.findMany({ select: { author: true } })
     * 
    **/
    findMany<T extends RequestFindManyArgs>(
      args?: SelectSubset<T, RequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<RequestGetPayload<T>>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
    **/
    create<T extends RequestCreateArgs>(
      args: SelectSubset<T, RequestCreateArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Create many Requests.
     *     @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     *     @example
     *     // Create many Requests
     *     const request = await prisma.request.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RequestCreateManyArgs>(
      args?: SelectSubset<T, RequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
    **/
    delete<T extends RequestDeleteArgs>(
      args: SelectSubset<T, RequestDeleteArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RequestUpdateArgs>(
      args: SelectSubset<T, RequestUpdateArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RequestDeleteManyArgs>(
      args?: SelectSubset<T, RequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RequestUpdateManyArgs>(
      args: SelectSubset<T, RequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
    **/
    upsert<T extends RequestUpsertArgs>(
      args: SelectSubset<T, RequestUpsertArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    taggedIndividuals<T extends Request$taggedIndividualsArgs= {}>(args?: Subset<T, Request$taggedIndividualsArgs>): Prisma.PrismaPromise<Array<RequestTaggedUserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Request base type for findUnique actions
   */
  export type RequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUnique
   */
  export interface RequestFindUniqueArgs extends RequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request base type for findFirst actions
   */
  export type RequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: Enumerable<RequestScalarFieldEnum>
  }

  /**
   * Request findFirst
   */
  export interface RequestFindFirstArgs extends RequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: Enumerable<RequestScalarFieldEnum>
  }


  /**
   * Request findMany
   */
  export type RequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: Enumerable<RequestScalarFieldEnum>
  }


  /**
   * Request create
   */
  export type RequestCreateArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }


  /**
   * Request createMany
   */
  export type RequestCreateManyArgs = {
    /**
     * The data used to create many Requests.
     */
    data: Enumerable<RequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Request update
   */
  export type RequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
  }


  /**
   * Request upsert
   */
  export type RequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }


  /**
   * Request delete
   */
  export type RequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
  }


  /**
   * Request.taggedIndividuals
   */
  export type Request$taggedIndividualsArgs = {
    /**
     * Select specific fields to fetch from the RequestTaggedUser
     */
    select?: RequestTaggedUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestTaggedUserInclude | null
    where?: RequestTaggedUserWhereInput
    orderBy?: Enumerable<RequestTaggedUserOrderByWithRelationInput>
    cursor?: RequestTaggedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RequestTaggedUserScalarFieldEnum>
  }


  /**
   * Request without action
   */
  export type RequestArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
  }



  /**
   * Model Announcement
   */


  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementAvgAggregateOutputType = {
    announcementId: number | null
    projectId: number | null
  }

  export type AnnouncementSumAggregateOutputType = {
    announcementId: number | null
    projectId: number | null
  }

  export type AnnouncementMinAggregateOutputType = {
    announcementId: number | null
    author: string | null
    content: string | null
    createdAt: Date | null
    projectId: number | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    announcementId: number | null
    author: string | null
    content: string | null
    createdAt: Date | null
    projectId: number | null
  }

  export type AnnouncementCountAggregateOutputType = {
    announcementId: number
    author: number
    content: number
    createdAt: number
    projectId: number
    _all: number
  }


  export type AnnouncementAvgAggregateInputType = {
    announcementId?: true
    projectId?: true
  }

  export type AnnouncementSumAggregateInputType = {
    announcementId?: true
    projectId?: true
  }

  export type AnnouncementMinAggregateInputType = {
    announcementId?: true
    author?: true
    content?: true
    createdAt?: true
    projectId?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    announcementId?: true
    author?: true
    content?: true
    createdAt?: true
    projectId?: true
  }

  export type AnnouncementCountAggregateInputType = {
    announcementId?: true
    author?: true
    content?: true
    createdAt?: true
    projectId?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs = {
    where?: AnnouncementWhereInput
    orderBy?: Enumerable<AnnouncementOrderByWithAggregationInput>
    by: AnnouncementScalarFieldEnum[]
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _avg?: AnnouncementAvgAggregateInputType
    _sum?: AnnouncementSumAggregateInputType
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }


  export type AnnouncementGroupByOutputType = {
    announcementId: number
    author: string
    content: string
    createdAt: Date
    projectId: number
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect = {
    announcementId?: boolean
    author?: boolean
    content?: boolean
    createdAt?: boolean
    projectId?: boolean
  }


  export type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Announcement :
    S extends undefined ? never :
    S extends { include: any } & (AnnouncementArgs | AnnouncementFindManyArgs)
    ? Announcement 
    : S extends { select: any } & (AnnouncementArgs | AnnouncementFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Announcement ? Announcement[P] : never
  } 
      : Announcement


  type AnnouncementCountArgs = 
    Omit<AnnouncementFindManyArgs, 'select' | 'include'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnnouncementFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnnouncementFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Announcement'> extends True ? Prisma__AnnouncementClient<AnnouncementGetPayload<T>> : Prisma__AnnouncementClient<AnnouncementGetPayload<T> | null, null>

    /**
     * Find one Announcement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnnouncementFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnnouncementFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Announcement'> extends True ? Prisma__AnnouncementClient<AnnouncementGetPayload<T>> : Prisma__AnnouncementClient<AnnouncementGetPayload<T> | null, null>

    /**
     * Find the first Announcement that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `announcementId`
     * const announcementWithAnnouncementIdOnly = await prisma.announcement.findMany({ select: { announcementId: true } })
     * 
    **/
    findMany<T extends AnnouncementFindManyArgs>(
      args?: SelectSubset<T, AnnouncementFindManyArgs>
    ): Prisma.PrismaPromise<Array<AnnouncementGetPayload<T>>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
    **/
    create<T extends AnnouncementCreateArgs>(
      args: SelectSubset<T, AnnouncementCreateArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Create many Announcements.
     *     @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     *     @example
     *     // Create many Announcements
     *     const announcement = await prisma.announcement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnnouncementCreateManyArgs>(
      args?: SelectSubset<T, AnnouncementCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
    **/
    delete<T extends AnnouncementDeleteArgs>(
      args: SelectSubset<T, AnnouncementDeleteArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnnouncementUpdateArgs>(
      args: SelectSubset<T, AnnouncementUpdateArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnnouncementDeleteManyArgs>(
      args?: SelectSubset<T, AnnouncementDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnnouncementUpdateManyArgs>(
      args: SelectSubset<T, AnnouncementUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
    **/
    upsert<T extends AnnouncementUpsertArgs>(
      args: SelectSubset<T, AnnouncementUpsertArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnnouncementClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Announcement base type for findUnique actions
   */
  export type AnnouncementFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUnique
   */
  export interface AnnouncementFindUniqueArgs extends AnnouncementFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }


  /**
   * Announcement base type for findFirst actions
   */
  export type AnnouncementFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: Enumerable<AnnouncementScalarFieldEnum>
  }

  /**
   * Announcement findFirst
   */
  export interface AnnouncementFindFirstArgs extends AnnouncementFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: Enumerable<AnnouncementScalarFieldEnum>
  }


  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: Enumerable<AnnouncementScalarFieldEnum>
  }


  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }


  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs = {
    /**
     * The data used to create many Announcements.
     */
    data: Enumerable<AnnouncementCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }


  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
  }


  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }


  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }


  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
  }


  /**
   * Announcement without action
   */
  export type AnnouncementArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AnnouncementScalarFieldEnum: {
    announcementId: 'announcementId',
    author: 'author',
    content: 'content',
    createdAt: 'createdAt',
    projectId: 'projectId'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const CelebrationReactedUserScalarFieldEnum: {
    userId: 'userId',
    celebrationId: 'celebrationId',
    reactionId: 'reactionId'
  };

  export type CelebrationReactedUserScalarFieldEnum = (typeof CelebrationReactedUserScalarFieldEnum)[keyof typeof CelebrationReactedUserScalarFieldEnum]


  export const CelebrationScalarFieldEnum: {
    author: 'author',
    content: 'content',
    createdAt: 'createdAt',
    type: 'type',
    celebrationId: 'celebrationId',
    isAnonymous: 'isAnonymous',
    projectId: 'projectId'
  };

  export type CelebrationScalarFieldEnum = (typeof CelebrationScalarFieldEnum)[keyof typeof CelebrationScalarFieldEnum]


  export const PONoteScalarFieldEnum: {
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
  };

  export type PONoteScalarFieldEnum = (typeof PONoteScalarFieldEnum)[keyof typeof PONoteScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RequestScalarFieldEnum: {
    author: 'author',
    content: 'content',
    status: 'status',
    type: 'type',
    createdAt: 'createdAt',
    requestId: 'requestId',
    projectId: 'projectId'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const RequestTaggedUserScalarFieldEnum: {
    userId: 'userId',
    requestId: 'requestId',
    tagId: 'tagId'
  };

  export type RequestTaggedUserScalarFieldEnum = (typeof RequestTaggedUserScalarFieldEnum)[keyof typeof RequestTaggedUserScalarFieldEnum]


  export const SentimentMeterScalarFieldEnum: {
    author: 'author',
    sentiment: 'sentiment',
    createdAt: 'createdAt',
    sentimentId: 'sentimentId',
    projectId: 'projectId'
  };

  export type SentimentMeterScalarFieldEnum = (typeof SentimentMeterScalarFieldEnum)[keyof typeof SentimentMeterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type PONoteWhereInput = {
    AND?: Enumerable<PONoteWhereInput>
    OR?: Enumerable<PONoteWhereInput>
    NOT?: Enumerable<PONoteWhereInput>
    noteId?: IntFilter | number
    type?: EnumTypeFilter | Type
    status?: EnumStatusFilter | Status
    note?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    dueDate?: DateTimeNullableFilter | Date | string | null
    issueLink?: StringNullableFilter | string | null
    isDeleted?: BoolFilter | boolean
    projectId?: IntFilter | number
    memberId?: IntFilter | number
  }

  export type PONoteOrderByWithRelationInput = {
    noteId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    dueDate?: SortOrder
    issueLink?: SortOrder
    isDeleted?: SortOrder
    projectId?: SortOrder
    memberId?: SortOrder
  }

  export type PONoteWhereUniqueInput = {
    noteId?: number
  }

  export type PONoteOrderByWithAggregationInput = {
    noteId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    dueDate?: SortOrder
    issueLink?: SortOrder
    isDeleted?: SortOrder
    projectId?: SortOrder
    memberId?: SortOrder
    _count?: PONoteCountOrderByAggregateInput
    _avg?: PONoteAvgOrderByAggregateInput
    _max?: PONoteMaxOrderByAggregateInput
    _min?: PONoteMinOrderByAggregateInput
    _sum?: PONoteSumOrderByAggregateInput
  }

  export type PONoteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PONoteScalarWhereWithAggregatesInput>
    OR?: Enumerable<PONoteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PONoteScalarWhereWithAggregatesInput>
    noteId?: IntWithAggregatesFilter | number
    type?: EnumTypeWithAggregatesFilter | Type
    status?: EnumStatusWithAggregatesFilter | Status
    note?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    dueDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    issueLink?: StringNullableWithAggregatesFilter | string | null
    isDeleted?: BoolWithAggregatesFilter | boolean
    projectId?: IntWithAggregatesFilter | number
    memberId?: IntWithAggregatesFilter | number
  }

  export type SentimentMeterWhereInput = {
    AND?: Enumerable<SentimentMeterWhereInput>
    OR?: Enumerable<SentimentMeterWhereInput>
    NOT?: Enumerable<SentimentMeterWhereInput>
    author?: StringFilter | string
    sentiment?: EnumSentimentFilter | Sentiment
    createdAt?: DateTimeFilter | Date | string
    sentimentId?: IntFilter | number
    projectId?: IntFilter | number
  }

  export type SentimentMeterOrderByWithRelationInput = {
    author?: SortOrder
    sentiment?: SortOrder
    createdAt?: SortOrder
    sentimentId?: SortOrder
    projectId?: SortOrder
  }

  export type SentimentMeterWhereUniqueInput = {
    sentimentId?: number
  }

  export type SentimentMeterOrderByWithAggregationInput = {
    author?: SortOrder
    sentiment?: SortOrder
    createdAt?: SortOrder
    sentimentId?: SortOrder
    projectId?: SortOrder
    _count?: SentimentMeterCountOrderByAggregateInput
    _avg?: SentimentMeterAvgOrderByAggregateInput
    _max?: SentimentMeterMaxOrderByAggregateInput
    _min?: SentimentMeterMinOrderByAggregateInput
    _sum?: SentimentMeterSumOrderByAggregateInput
  }

  export type SentimentMeterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SentimentMeterScalarWhereWithAggregatesInput>
    OR?: Enumerable<SentimentMeterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SentimentMeterScalarWhereWithAggregatesInput>
    author?: StringWithAggregatesFilter | string
    sentiment?: EnumSentimentWithAggregatesFilter | Sentiment
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    sentimentId?: IntWithAggregatesFilter | number
    projectId?: IntWithAggregatesFilter | number
  }

  export type CelebrationReactedUserWhereInput = {
    AND?: Enumerable<CelebrationReactedUserWhereInput>
    OR?: Enumerable<CelebrationReactedUserWhereInput>
    NOT?: Enumerable<CelebrationReactedUserWhereInput>
    userId?: StringFilter | string
    celebrationId?: IntFilter | number
    reactionId?: IntFilter | number
    request?: XOR<CelebrationRelationFilter, CelebrationWhereInput>
  }

  export type CelebrationReactedUserOrderByWithRelationInput = {
    userId?: SortOrder
    celebrationId?: SortOrder
    reactionId?: SortOrder
    request?: CelebrationOrderByWithRelationInput
  }

  export type CelebrationReactedUserWhereUniqueInput = {
    reactionId?: number
    userId_celebrationId?: CelebrationReactedUserUserIdCelebrationIdCompoundUniqueInput
  }

  export type CelebrationReactedUserOrderByWithAggregationInput = {
    userId?: SortOrder
    celebrationId?: SortOrder
    reactionId?: SortOrder
    _count?: CelebrationReactedUserCountOrderByAggregateInput
    _avg?: CelebrationReactedUserAvgOrderByAggregateInput
    _max?: CelebrationReactedUserMaxOrderByAggregateInput
    _min?: CelebrationReactedUserMinOrderByAggregateInput
    _sum?: CelebrationReactedUserSumOrderByAggregateInput
  }

  export type CelebrationReactedUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CelebrationReactedUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<CelebrationReactedUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CelebrationReactedUserScalarWhereWithAggregatesInput>
    userId?: StringWithAggregatesFilter | string
    celebrationId?: IntWithAggregatesFilter | number
    reactionId?: IntWithAggregatesFilter | number
  }

  export type CelebrationWhereInput = {
    AND?: Enumerable<CelebrationWhereInput>
    OR?: Enumerable<CelebrationWhereInput>
    NOT?: Enumerable<CelebrationWhereInput>
    author?: StringFilter | string
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    type?: EnumCelebrationTypeFilter | CelebrationType
    celebrationId?: IntFilter | number
    isAnonymous?: BoolFilter | boolean
    projectId?: IntFilter | number
    reaction?: CelebrationReactedUserListRelationFilter
  }

  export type CelebrationOrderByWithRelationInput = {
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    celebrationId?: SortOrder
    isAnonymous?: SortOrder
    projectId?: SortOrder
    reaction?: CelebrationReactedUserOrderByRelationAggregateInput
  }

  export type CelebrationWhereUniqueInput = {
    celebrationId?: number
  }

  export type CelebrationOrderByWithAggregationInput = {
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    celebrationId?: SortOrder
    isAnonymous?: SortOrder
    projectId?: SortOrder
    _count?: CelebrationCountOrderByAggregateInput
    _avg?: CelebrationAvgOrderByAggregateInput
    _max?: CelebrationMaxOrderByAggregateInput
    _min?: CelebrationMinOrderByAggregateInput
    _sum?: CelebrationSumOrderByAggregateInput
  }

  export type CelebrationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CelebrationScalarWhereWithAggregatesInput>
    OR?: Enumerable<CelebrationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CelebrationScalarWhereWithAggregatesInput>
    author?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    type?: EnumCelebrationTypeWithAggregatesFilter | CelebrationType
    celebrationId?: IntWithAggregatesFilter | number
    isAnonymous?: BoolWithAggregatesFilter | boolean
    projectId?: IntWithAggregatesFilter | number
  }

  export type RequestTaggedUserWhereInput = {
    AND?: Enumerable<RequestTaggedUserWhereInput>
    OR?: Enumerable<RequestTaggedUserWhereInput>
    NOT?: Enumerable<RequestTaggedUserWhereInput>
    userId?: StringFilter | string
    requestId?: IntFilter | number
    tagId?: IntFilter | number
    request?: XOR<RequestRelationFilter, RequestWhereInput>
  }

  export type RequestTaggedUserOrderByWithRelationInput = {
    userId?: SortOrder
    requestId?: SortOrder
    tagId?: SortOrder
    request?: RequestOrderByWithRelationInput
  }

  export type RequestTaggedUserWhereUniqueInput = {
    tagId?: number
  }

  export type RequestTaggedUserOrderByWithAggregationInput = {
    userId?: SortOrder
    requestId?: SortOrder
    tagId?: SortOrder
    _count?: RequestTaggedUserCountOrderByAggregateInput
    _avg?: RequestTaggedUserAvgOrderByAggregateInput
    _max?: RequestTaggedUserMaxOrderByAggregateInput
    _min?: RequestTaggedUserMinOrderByAggregateInput
    _sum?: RequestTaggedUserSumOrderByAggregateInput
  }

  export type RequestTaggedUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RequestTaggedUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<RequestTaggedUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RequestTaggedUserScalarWhereWithAggregatesInput>
    userId?: StringWithAggregatesFilter | string
    requestId?: IntWithAggregatesFilter | number
    tagId?: IntWithAggregatesFilter | number
  }

  export type RequestWhereInput = {
    AND?: Enumerable<RequestWhereInput>
    OR?: Enumerable<RequestWhereInput>
    NOT?: Enumerable<RequestWhereInput>
    author?: StringFilter | string
    content?: StringFilter | string
    status?: EnumRequestStatusFilter | RequestStatus
    type?: EnumRequestTypeFilter | RequestType
    createdAt?: DateTimeFilter | Date | string
    requestId?: IntFilter | number
    projectId?: IntFilter | number
    taggedIndividuals?: RequestTaggedUserListRelationFilter
  }

  export type RequestOrderByWithRelationInput = {
    author?: SortOrder
    content?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
    projectId?: SortOrder
    taggedIndividuals?: RequestTaggedUserOrderByRelationAggregateInput
  }

  export type RequestWhereUniqueInput = {
    requestId?: number
  }

  export type RequestOrderByWithAggregationInput = {
    author?: SortOrder
    content?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
    projectId?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _avg?: RequestAvgOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
    _sum?: RequestSumOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<RequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RequestScalarWhereWithAggregatesInput>
    author?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    status?: EnumRequestStatusWithAggregatesFilter | RequestStatus
    type?: EnumRequestTypeWithAggregatesFilter | RequestType
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    requestId?: IntWithAggregatesFilter | number
    projectId?: IntWithAggregatesFilter | number
  }

  export type AnnouncementWhereInput = {
    AND?: Enumerable<AnnouncementWhereInput>
    OR?: Enumerable<AnnouncementWhereInput>
    NOT?: Enumerable<AnnouncementWhereInput>
    announcementId?: IntFilter | number
    author?: StringFilter | string
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    projectId?: IntFilter | number
  }

  export type AnnouncementOrderByWithRelationInput = {
    announcementId?: SortOrder
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type AnnouncementWhereUniqueInput = {
    announcementId?: number
  }

  export type AnnouncementOrderByWithAggregationInput = {
    announcementId?: SortOrder
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _avg?: AnnouncementAvgOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
    _sum?: AnnouncementSumOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AnnouncementScalarWhereWithAggregatesInput>
    OR?: Enumerable<AnnouncementScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AnnouncementScalarWhereWithAggregatesInput>
    announcementId?: IntWithAggregatesFilter | number
    author?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    projectId?: IntWithAggregatesFilter | number
  }

  export type PONoteCreateInput = {
    type: Type
    status?: Status
    note: string
    createdAt?: Date | string
    dueDate?: Date | string | null
    issueLink?: string | null
    isDeleted?: boolean
    projectId: number
    memberId: number
  }

  export type PONoteUncheckedCreateInput = {
    noteId?: number
    type: Type
    status?: Status
    note: string
    createdAt?: Date | string
    dueDate?: Date | string | null
    issueLink?: string | null
    isDeleted?: boolean
    projectId: number
    memberId: number
  }

  export type PONoteUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | Type
    status?: EnumStatusFieldUpdateOperationsInput | Status
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueLink?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type PONoteUncheckedUpdateInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | Type
    status?: EnumStatusFieldUpdateOperationsInput | Status
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueLink?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type PONoteCreateManyInput = {
    noteId?: number
    type: Type
    status?: Status
    note: string
    createdAt?: Date | string
    dueDate?: Date | string | null
    issueLink?: string | null
    isDeleted?: boolean
    projectId: number
    memberId: number
  }

  export type PONoteUpdateManyMutationInput = {
    type?: EnumTypeFieldUpdateOperationsInput | Type
    status?: EnumStatusFieldUpdateOperationsInput | Status
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueLink?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type PONoteUncheckedUpdateManyInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | Type
    status?: EnumStatusFieldUpdateOperationsInput | Status
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueLink?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type SentimentMeterCreateInput = {
    author: string
    sentiment: Sentiment
    createdAt?: Date | string
    projectId: number
  }

  export type SentimentMeterUncheckedCreateInput = {
    author: string
    sentiment: Sentiment
    createdAt?: Date | string
    sentimentId?: number
    projectId: number
  }

  export type SentimentMeterUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | Sentiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type SentimentMeterUncheckedUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | Sentiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentimentId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type SentimentMeterCreateManyInput = {
    author: string
    sentiment: Sentiment
    createdAt?: Date | string
    sentimentId?: number
    projectId: number
  }

  export type SentimentMeterUpdateManyMutationInput = {
    author?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | Sentiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type SentimentMeterUncheckedUpdateManyInput = {
    author?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | Sentiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentimentId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type CelebrationReactedUserCreateInput = {
    userId: string
    request: CelebrationCreateNestedOneWithoutReactionInput
  }

  export type CelebrationReactedUserUncheckedCreateInput = {
    userId: string
    celebrationId: number
    reactionId?: number
  }

  export type CelebrationReactedUserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    request?: CelebrationUpdateOneRequiredWithoutReactionNestedInput
  }

  export type CelebrationReactedUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    celebrationId?: IntFieldUpdateOperationsInput | number
    reactionId?: IntFieldUpdateOperationsInput | number
  }

  export type CelebrationReactedUserCreateManyInput = {
    userId: string
    celebrationId: number
    reactionId?: number
  }

  export type CelebrationReactedUserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CelebrationReactedUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    celebrationId?: IntFieldUpdateOperationsInput | number
    reactionId?: IntFieldUpdateOperationsInput | number
  }

  export type CelebrationCreateInput = {
    author: string
    content: string
    createdAt?: Date | string
    type: CelebrationType
    isAnonymous?: boolean
    projectId: number
    reaction?: CelebrationReactedUserCreateNestedManyWithoutRequestInput
  }

  export type CelebrationUncheckedCreateInput = {
    author: string
    content: string
    createdAt?: Date | string
    type: CelebrationType
    celebrationId?: number
    isAnonymous?: boolean
    projectId: number
    reaction?: CelebrationReactedUserUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CelebrationUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCelebrationTypeFieldUpdateOperationsInput | CelebrationType
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
    reaction?: CelebrationReactedUserUpdateManyWithoutRequestNestedInput
  }

  export type CelebrationUncheckedUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCelebrationTypeFieldUpdateOperationsInput | CelebrationType
    celebrationId?: IntFieldUpdateOperationsInput | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
    reaction?: CelebrationReactedUserUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CelebrationCreateManyInput = {
    author: string
    content: string
    createdAt?: Date | string
    type: CelebrationType
    celebrationId?: number
    isAnonymous?: boolean
    projectId: number
  }

  export type CelebrationUpdateManyMutationInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCelebrationTypeFieldUpdateOperationsInput | CelebrationType
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type CelebrationUncheckedUpdateManyInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCelebrationTypeFieldUpdateOperationsInput | CelebrationType
    celebrationId?: IntFieldUpdateOperationsInput | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestTaggedUserCreateInput = {
    userId: string
    request: RequestCreateNestedOneWithoutTaggedIndividualsInput
  }

  export type RequestTaggedUserUncheckedCreateInput = {
    userId: string
    requestId: number
    tagId?: number
  }

  export type RequestTaggedUserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    request?: RequestUpdateOneRequiredWithoutTaggedIndividualsNestedInput
  }

  export type RequestTaggedUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestTaggedUserCreateManyInput = {
    userId: string
    requestId: number
    tagId?: number
  }

  export type RequestTaggedUserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestTaggedUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestCreateInput = {
    author: string
    content: string
    status?: RequestStatus
    type: RequestType
    createdAt?: Date | string
    projectId: number
    taggedIndividuals?: RequestTaggedUserCreateNestedManyWithoutRequestInput
  }

  export type RequestUncheckedCreateInput = {
    author: string
    content: string
    status?: RequestStatus
    type: RequestType
    createdAt?: Date | string
    requestId?: number
    projectId: number
    taggedIndividuals?: RequestTaggedUserUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    type?: EnumRequestTypeFieldUpdateOperationsInput | RequestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    taggedIndividuals?: RequestTaggedUserUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    type?: EnumRequestTypeFieldUpdateOperationsInput | RequestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    taggedIndividuals?: RequestTaggedUserUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestCreateManyInput = {
    author: string
    content: string
    status?: RequestStatus
    type: RequestType
    createdAt?: Date | string
    requestId?: number
    projectId: number
  }

  export type RequestUpdateManyMutationInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    type?: EnumRequestTypeFieldUpdateOperationsInput | RequestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestUncheckedUpdateManyInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    type?: EnumRequestTypeFieldUpdateOperationsInput | RequestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnouncementCreateInput = {
    author: string
    content: string
    createdAt?: Date | string
    projectId: number
  }

  export type AnnouncementUncheckedCreateInput = {
    announcementId?: number
    author: string
    content: string
    createdAt?: Date | string
    projectId: number
  }

  export type AnnouncementUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnouncementUncheckedUpdateInput = {
    announcementId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnouncementCreateManyInput = {
    announcementId?: number
    author: string
    content: string
    createdAt?: Date | string
    projectId: number
  }

  export type AnnouncementUpdateManyMutationInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    announcementId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumTypeFilter = {
    equals?: Type
    in?: Enumerable<Type>
    notIn?: Enumerable<Type>
    not?: NestedEnumTypeFilter | Type
  }

  export type EnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type PONoteCountOrderByAggregateInput = {
    noteId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    dueDate?: SortOrder
    issueLink?: SortOrder
    isDeleted?: SortOrder
    projectId?: SortOrder
    memberId?: SortOrder
  }

  export type PONoteAvgOrderByAggregateInput = {
    noteId?: SortOrder
    projectId?: SortOrder
    memberId?: SortOrder
  }

  export type PONoteMaxOrderByAggregateInput = {
    noteId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    dueDate?: SortOrder
    issueLink?: SortOrder
    isDeleted?: SortOrder
    projectId?: SortOrder
    memberId?: SortOrder
  }

  export type PONoteMinOrderByAggregateInput = {
    noteId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    dueDate?: SortOrder
    issueLink?: SortOrder
    isDeleted?: SortOrder
    projectId?: SortOrder
    memberId?: SortOrder
  }

  export type PONoteSumOrderByAggregateInput = {
    noteId?: SortOrder
    projectId?: SortOrder
    memberId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumTypeWithAggregatesFilter = {
    equals?: Type
    in?: Enumerable<Type>
    notIn?: Enumerable<Type>
    not?: NestedEnumTypeWithAggregatesFilter | Type
    _count?: NestedIntFilter
    _min?: NestedEnumTypeFilter
    _max?: NestedEnumTypeFilter
  }

  export type EnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumSentimentFilter = {
    equals?: Sentiment
    in?: Enumerable<Sentiment>
    notIn?: Enumerable<Sentiment>
    not?: NestedEnumSentimentFilter | Sentiment
  }

  export type SentimentMeterCountOrderByAggregateInput = {
    author?: SortOrder
    sentiment?: SortOrder
    createdAt?: SortOrder
    sentimentId?: SortOrder
    projectId?: SortOrder
  }

  export type SentimentMeterAvgOrderByAggregateInput = {
    sentimentId?: SortOrder
    projectId?: SortOrder
  }

  export type SentimentMeterMaxOrderByAggregateInput = {
    author?: SortOrder
    sentiment?: SortOrder
    createdAt?: SortOrder
    sentimentId?: SortOrder
    projectId?: SortOrder
  }

  export type SentimentMeterMinOrderByAggregateInput = {
    author?: SortOrder
    sentiment?: SortOrder
    createdAt?: SortOrder
    sentimentId?: SortOrder
    projectId?: SortOrder
  }

  export type SentimentMeterSumOrderByAggregateInput = {
    sentimentId?: SortOrder
    projectId?: SortOrder
  }

  export type EnumSentimentWithAggregatesFilter = {
    equals?: Sentiment
    in?: Enumerable<Sentiment>
    notIn?: Enumerable<Sentiment>
    not?: NestedEnumSentimentWithAggregatesFilter | Sentiment
    _count?: NestedIntFilter
    _min?: NestedEnumSentimentFilter
    _max?: NestedEnumSentimentFilter
  }

  export type CelebrationRelationFilter = {
    is?: CelebrationWhereInput
    isNot?: CelebrationWhereInput
  }

  export type CelebrationReactedUserUserIdCelebrationIdCompoundUniqueInput = {
    userId: string
    celebrationId: number
  }

  export type CelebrationReactedUserCountOrderByAggregateInput = {
    userId?: SortOrder
    celebrationId?: SortOrder
    reactionId?: SortOrder
  }

  export type CelebrationReactedUserAvgOrderByAggregateInput = {
    celebrationId?: SortOrder
    reactionId?: SortOrder
  }

  export type CelebrationReactedUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    celebrationId?: SortOrder
    reactionId?: SortOrder
  }

  export type CelebrationReactedUserMinOrderByAggregateInput = {
    userId?: SortOrder
    celebrationId?: SortOrder
    reactionId?: SortOrder
  }

  export type CelebrationReactedUserSumOrderByAggregateInput = {
    celebrationId?: SortOrder
    reactionId?: SortOrder
  }

  export type EnumCelebrationTypeFilter = {
    equals?: CelebrationType
    in?: Enumerable<CelebrationType>
    notIn?: Enumerable<CelebrationType>
    not?: NestedEnumCelebrationTypeFilter | CelebrationType
  }

  export type CelebrationReactedUserListRelationFilter = {
    every?: CelebrationReactedUserWhereInput
    some?: CelebrationReactedUserWhereInput
    none?: CelebrationReactedUserWhereInput
  }

  export type CelebrationReactedUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CelebrationCountOrderByAggregateInput = {
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    celebrationId?: SortOrder
    isAnonymous?: SortOrder
    projectId?: SortOrder
  }

  export type CelebrationAvgOrderByAggregateInput = {
    celebrationId?: SortOrder
    projectId?: SortOrder
  }

  export type CelebrationMaxOrderByAggregateInput = {
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    celebrationId?: SortOrder
    isAnonymous?: SortOrder
    projectId?: SortOrder
  }

  export type CelebrationMinOrderByAggregateInput = {
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    celebrationId?: SortOrder
    isAnonymous?: SortOrder
    projectId?: SortOrder
  }

  export type CelebrationSumOrderByAggregateInput = {
    celebrationId?: SortOrder
    projectId?: SortOrder
  }

  export type EnumCelebrationTypeWithAggregatesFilter = {
    equals?: CelebrationType
    in?: Enumerable<CelebrationType>
    notIn?: Enumerable<CelebrationType>
    not?: NestedEnumCelebrationTypeWithAggregatesFilter | CelebrationType
    _count?: NestedIntFilter
    _min?: NestedEnumCelebrationTypeFilter
    _max?: NestedEnumCelebrationTypeFilter
  }

  export type RequestRelationFilter = {
    is?: RequestWhereInput
    isNot?: RequestWhereInput
  }

  export type RequestTaggedUserCountOrderByAggregateInput = {
    userId?: SortOrder
    requestId?: SortOrder
    tagId?: SortOrder
  }

  export type RequestTaggedUserAvgOrderByAggregateInput = {
    requestId?: SortOrder
    tagId?: SortOrder
  }

  export type RequestTaggedUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    requestId?: SortOrder
    tagId?: SortOrder
  }

  export type RequestTaggedUserMinOrderByAggregateInput = {
    userId?: SortOrder
    requestId?: SortOrder
    tagId?: SortOrder
  }

  export type RequestTaggedUserSumOrderByAggregateInput = {
    requestId?: SortOrder
    tagId?: SortOrder
  }

  export type EnumRequestStatusFilter = {
    equals?: RequestStatus
    in?: Enumerable<RequestStatus>
    notIn?: Enumerable<RequestStatus>
    not?: NestedEnumRequestStatusFilter | RequestStatus
  }

  export type EnumRequestTypeFilter = {
    equals?: RequestType
    in?: Enumerable<RequestType>
    notIn?: Enumerable<RequestType>
    not?: NestedEnumRequestTypeFilter | RequestType
  }

  export type RequestTaggedUserListRelationFilter = {
    every?: RequestTaggedUserWhereInput
    some?: RequestTaggedUserWhereInput
    none?: RequestTaggedUserWhereInput
  }

  export type RequestTaggedUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestCountOrderByAggregateInput = {
    author?: SortOrder
    content?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
    projectId?: SortOrder
  }

  export type RequestAvgOrderByAggregateInput = {
    requestId?: SortOrder
    projectId?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    author?: SortOrder
    content?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
    projectId?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    author?: SortOrder
    content?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    requestId?: SortOrder
    projectId?: SortOrder
  }

  export type RequestSumOrderByAggregateInput = {
    requestId?: SortOrder
    projectId?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter = {
    equals?: RequestStatus
    in?: Enumerable<RequestStatus>
    notIn?: Enumerable<RequestStatus>
    not?: NestedEnumRequestStatusWithAggregatesFilter | RequestStatus
    _count?: NestedIntFilter
    _min?: NestedEnumRequestStatusFilter
    _max?: NestedEnumRequestStatusFilter
  }

  export type EnumRequestTypeWithAggregatesFilter = {
    equals?: RequestType
    in?: Enumerable<RequestType>
    notIn?: Enumerable<RequestType>
    not?: NestedEnumRequestTypeWithAggregatesFilter | RequestType
    _count?: NestedIntFilter
    _min?: NestedEnumRequestTypeFilter
    _max?: NestedEnumRequestTypeFilter
  }

  export type AnnouncementCountOrderByAggregateInput = {
    announcementId?: SortOrder
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type AnnouncementAvgOrderByAggregateInput = {
    announcementId?: SortOrder
    projectId?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    announcementId?: SortOrder
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    announcementId?: SortOrder
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type AnnouncementSumOrderByAggregateInput = {
    announcementId?: SortOrder
    projectId?: SortOrder
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: Type
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: Status
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSentimentFieldUpdateOperationsInput = {
    set?: Sentiment
  }

  export type CelebrationCreateNestedOneWithoutReactionInput = {
    create?: XOR<CelebrationCreateWithoutReactionInput, CelebrationUncheckedCreateWithoutReactionInput>
    connectOrCreate?: CelebrationCreateOrConnectWithoutReactionInput
    connect?: CelebrationWhereUniqueInput
  }

  export type CelebrationUpdateOneRequiredWithoutReactionNestedInput = {
    create?: XOR<CelebrationCreateWithoutReactionInput, CelebrationUncheckedCreateWithoutReactionInput>
    connectOrCreate?: CelebrationCreateOrConnectWithoutReactionInput
    upsert?: CelebrationUpsertWithoutReactionInput
    connect?: CelebrationWhereUniqueInput
    update?: XOR<CelebrationUpdateWithoutReactionInput, CelebrationUncheckedUpdateWithoutReactionInput>
  }

  export type CelebrationReactedUserCreateNestedManyWithoutRequestInput = {
    create?: XOR<Enumerable<CelebrationReactedUserCreateWithoutRequestInput>, Enumerable<CelebrationReactedUserUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<CelebrationReactedUserCreateOrConnectWithoutRequestInput>
    createMany?: CelebrationReactedUserCreateManyRequestInputEnvelope
    connect?: Enumerable<CelebrationReactedUserWhereUniqueInput>
  }

  export type CelebrationReactedUserUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<Enumerable<CelebrationReactedUserCreateWithoutRequestInput>, Enumerable<CelebrationReactedUserUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<CelebrationReactedUserCreateOrConnectWithoutRequestInput>
    createMany?: CelebrationReactedUserCreateManyRequestInputEnvelope
    connect?: Enumerable<CelebrationReactedUserWhereUniqueInput>
  }

  export type EnumCelebrationTypeFieldUpdateOperationsInput = {
    set?: CelebrationType
  }

  export type CelebrationReactedUserUpdateManyWithoutRequestNestedInput = {
    create?: XOR<Enumerable<CelebrationReactedUserCreateWithoutRequestInput>, Enumerable<CelebrationReactedUserUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<CelebrationReactedUserCreateOrConnectWithoutRequestInput>
    upsert?: Enumerable<CelebrationReactedUserUpsertWithWhereUniqueWithoutRequestInput>
    createMany?: CelebrationReactedUserCreateManyRequestInputEnvelope
    set?: Enumerable<CelebrationReactedUserWhereUniqueInput>
    disconnect?: Enumerable<CelebrationReactedUserWhereUniqueInput>
    delete?: Enumerable<CelebrationReactedUserWhereUniqueInput>
    connect?: Enumerable<CelebrationReactedUserWhereUniqueInput>
    update?: Enumerable<CelebrationReactedUserUpdateWithWhereUniqueWithoutRequestInput>
    updateMany?: Enumerable<CelebrationReactedUserUpdateManyWithWhereWithoutRequestInput>
    deleteMany?: Enumerable<CelebrationReactedUserScalarWhereInput>
  }

  export type CelebrationReactedUserUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<Enumerable<CelebrationReactedUserCreateWithoutRequestInput>, Enumerable<CelebrationReactedUserUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<CelebrationReactedUserCreateOrConnectWithoutRequestInput>
    upsert?: Enumerable<CelebrationReactedUserUpsertWithWhereUniqueWithoutRequestInput>
    createMany?: CelebrationReactedUserCreateManyRequestInputEnvelope
    set?: Enumerable<CelebrationReactedUserWhereUniqueInput>
    disconnect?: Enumerable<CelebrationReactedUserWhereUniqueInput>
    delete?: Enumerable<CelebrationReactedUserWhereUniqueInput>
    connect?: Enumerable<CelebrationReactedUserWhereUniqueInput>
    update?: Enumerable<CelebrationReactedUserUpdateWithWhereUniqueWithoutRequestInput>
    updateMany?: Enumerable<CelebrationReactedUserUpdateManyWithWhereWithoutRequestInput>
    deleteMany?: Enumerable<CelebrationReactedUserScalarWhereInput>
  }

  export type RequestCreateNestedOneWithoutTaggedIndividualsInput = {
    create?: XOR<RequestCreateWithoutTaggedIndividualsInput, RequestUncheckedCreateWithoutTaggedIndividualsInput>
    connectOrCreate?: RequestCreateOrConnectWithoutTaggedIndividualsInput
    connect?: RequestWhereUniqueInput
  }

  export type RequestUpdateOneRequiredWithoutTaggedIndividualsNestedInput = {
    create?: XOR<RequestCreateWithoutTaggedIndividualsInput, RequestUncheckedCreateWithoutTaggedIndividualsInput>
    connectOrCreate?: RequestCreateOrConnectWithoutTaggedIndividualsInput
    upsert?: RequestUpsertWithoutTaggedIndividualsInput
    connect?: RequestWhereUniqueInput
    update?: XOR<RequestUpdateWithoutTaggedIndividualsInput, RequestUncheckedUpdateWithoutTaggedIndividualsInput>
  }

  export type RequestTaggedUserCreateNestedManyWithoutRequestInput = {
    create?: XOR<Enumerable<RequestTaggedUserCreateWithoutRequestInput>, Enumerable<RequestTaggedUserUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<RequestTaggedUserCreateOrConnectWithoutRequestInput>
    createMany?: RequestTaggedUserCreateManyRequestInputEnvelope
    connect?: Enumerable<RequestTaggedUserWhereUniqueInput>
  }

  export type RequestTaggedUserUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<Enumerable<RequestTaggedUserCreateWithoutRequestInput>, Enumerable<RequestTaggedUserUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<RequestTaggedUserCreateOrConnectWithoutRequestInput>
    createMany?: RequestTaggedUserCreateManyRequestInputEnvelope
    connect?: Enumerable<RequestTaggedUserWhereUniqueInput>
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: RequestStatus
  }

  export type EnumRequestTypeFieldUpdateOperationsInput = {
    set?: RequestType
  }

  export type RequestTaggedUserUpdateManyWithoutRequestNestedInput = {
    create?: XOR<Enumerable<RequestTaggedUserCreateWithoutRequestInput>, Enumerable<RequestTaggedUserUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<RequestTaggedUserCreateOrConnectWithoutRequestInput>
    upsert?: Enumerable<RequestTaggedUserUpsertWithWhereUniqueWithoutRequestInput>
    createMany?: RequestTaggedUserCreateManyRequestInputEnvelope
    set?: Enumerable<RequestTaggedUserWhereUniqueInput>
    disconnect?: Enumerable<RequestTaggedUserWhereUniqueInput>
    delete?: Enumerable<RequestTaggedUserWhereUniqueInput>
    connect?: Enumerable<RequestTaggedUserWhereUniqueInput>
    update?: Enumerable<RequestTaggedUserUpdateWithWhereUniqueWithoutRequestInput>
    updateMany?: Enumerable<RequestTaggedUserUpdateManyWithWhereWithoutRequestInput>
    deleteMany?: Enumerable<RequestTaggedUserScalarWhereInput>
  }

  export type RequestTaggedUserUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<Enumerable<RequestTaggedUserCreateWithoutRequestInput>, Enumerable<RequestTaggedUserUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<RequestTaggedUserCreateOrConnectWithoutRequestInput>
    upsert?: Enumerable<RequestTaggedUserUpsertWithWhereUniqueWithoutRequestInput>
    createMany?: RequestTaggedUserCreateManyRequestInputEnvelope
    set?: Enumerable<RequestTaggedUserWhereUniqueInput>
    disconnect?: Enumerable<RequestTaggedUserWhereUniqueInput>
    delete?: Enumerable<RequestTaggedUserWhereUniqueInput>
    connect?: Enumerable<RequestTaggedUserWhereUniqueInput>
    update?: Enumerable<RequestTaggedUserUpdateWithWhereUniqueWithoutRequestInput>
    updateMany?: Enumerable<RequestTaggedUserUpdateManyWithWhereWithoutRequestInput>
    deleteMany?: Enumerable<RequestTaggedUserScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumTypeFilter = {
    equals?: Type
    in?: Enumerable<Type>
    notIn?: Enumerable<Type>
    not?: NestedEnumTypeFilter | Type
  }

  export type NestedEnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumTypeWithAggregatesFilter = {
    equals?: Type
    in?: Enumerable<Type>
    notIn?: Enumerable<Type>
    not?: NestedEnumTypeWithAggregatesFilter | Type
    _count?: NestedIntFilter
    _min?: NestedEnumTypeFilter
    _max?: NestedEnumTypeFilter
  }

  export type NestedEnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumSentimentFilter = {
    equals?: Sentiment
    in?: Enumerable<Sentiment>
    notIn?: Enumerable<Sentiment>
    not?: NestedEnumSentimentFilter | Sentiment
  }

  export type NestedEnumSentimentWithAggregatesFilter = {
    equals?: Sentiment
    in?: Enumerable<Sentiment>
    notIn?: Enumerable<Sentiment>
    not?: NestedEnumSentimentWithAggregatesFilter | Sentiment
    _count?: NestedIntFilter
    _min?: NestedEnumSentimentFilter
    _max?: NestedEnumSentimentFilter
  }

  export type NestedEnumCelebrationTypeFilter = {
    equals?: CelebrationType
    in?: Enumerable<CelebrationType>
    notIn?: Enumerable<CelebrationType>
    not?: NestedEnumCelebrationTypeFilter | CelebrationType
  }

  export type NestedEnumCelebrationTypeWithAggregatesFilter = {
    equals?: CelebrationType
    in?: Enumerable<CelebrationType>
    notIn?: Enumerable<CelebrationType>
    not?: NestedEnumCelebrationTypeWithAggregatesFilter | CelebrationType
    _count?: NestedIntFilter
    _min?: NestedEnumCelebrationTypeFilter
    _max?: NestedEnumCelebrationTypeFilter
  }

  export type NestedEnumRequestStatusFilter = {
    equals?: RequestStatus
    in?: Enumerable<RequestStatus>
    notIn?: Enumerable<RequestStatus>
    not?: NestedEnumRequestStatusFilter | RequestStatus
  }

  export type NestedEnumRequestTypeFilter = {
    equals?: RequestType
    in?: Enumerable<RequestType>
    notIn?: Enumerable<RequestType>
    not?: NestedEnumRequestTypeFilter | RequestType
  }

  export type NestedEnumRequestStatusWithAggregatesFilter = {
    equals?: RequestStatus
    in?: Enumerable<RequestStatus>
    notIn?: Enumerable<RequestStatus>
    not?: NestedEnumRequestStatusWithAggregatesFilter | RequestStatus
    _count?: NestedIntFilter
    _min?: NestedEnumRequestStatusFilter
    _max?: NestedEnumRequestStatusFilter
  }

  export type NestedEnumRequestTypeWithAggregatesFilter = {
    equals?: RequestType
    in?: Enumerable<RequestType>
    notIn?: Enumerable<RequestType>
    not?: NestedEnumRequestTypeWithAggregatesFilter | RequestType
    _count?: NestedIntFilter
    _min?: NestedEnumRequestTypeFilter
    _max?: NestedEnumRequestTypeFilter
  }

  export type CelebrationCreateWithoutReactionInput = {
    author: string
    content: string
    createdAt?: Date | string
    type: CelebrationType
    isAnonymous?: boolean
    projectId: number
  }

  export type CelebrationUncheckedCreateWithoutReactionInput = {
    author: string
    content: string
    createdAt?: Date | string
    type: CelebrationType
    celebrationId?: number
    isAnonymous?: boolean
    projectId: number
  }

  export type CelebrationCreateOrConnectWithoutReactionInput = {
    where: CelebrationWhereUniqueInput
    create: XOR<CelebrationCreateWithoutReactionInput, CelebrationUncheckedCreateWithoutReactionInput>
  }

  export type CelebrationUpsertWithoutReactionInput = {
    update: XOR<CelebrationUpdateWithoutReactionInput, CelebrationUncheckedUpdateWithoutReactionInput>
    create: XOR<CelebrationCreateWithoutReactionInput, CelebrationUncheckedCreateWithoutReactionInput>
  }

  export type CelebrationUpdateWithoutReactionInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCelebrationTypeFieldUpdateOperationsInput | CelebrationType
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type CelebrationUncheckedUpdateWithoutReactionInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCelebrationTypeFieldUpdateOperationsInput | CelebrationType
    celebrationId?: IntFieldUpdateOperationsInput | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type CelebrationReactedUserCreateWithoutRequestInput = {
    userId: string
  }

  export type CelebrationReactedUserUncheckedCreateWithoutRequestInput = {
    userId: string
    reactionId?: number
  }

  export type CelebrationReactedUserCreateOrConnectWithoutRequestInput = {
    where: CelebrationReactedUserWhereUniqueInput
    create: XOR<CelebrationReactedUserCreateWithoutRequestInput, CelebrationReactedUserUncheckedCreateWithoutRequestInput>
  }

  export type CelebrationReactedUserCreateManyRequestInputEnvelope = {
    data: Enumerable<CelebrationReactedUserCreateManyRequestInput>
    skipDuplicates?: boolean
  }

  export type CelebrationReactedUserUpsertWithWhereUniqueWithoutRequestInput = {
    where: CelebrationReactedUserWhereUniqueInput
    update: XOR<CelebrationReactedUserUpdateWithoutRequestInput, CelebrationReactedUserUncheckedUpdateWithoutRequestInput>
    create: XOR<CelebrationReactedUserCreateWithoutRequestInput, CelebrationReactedUserUncheckedCreateWithoutRequestInput>
  }

  export type CelebrationReactedUserUpdateWithWhereUniqueWithoutRequestInput = {
    where: CelebrationReactedUserWhereUniqueInput
    data: XOR<CelebrationReactedUserUpdateWithoutRequestInput, CelebrationReactedUserUncheckedUpdateWithoutRequestInput>
  }

  export type CelebrationReactedUserUpdateManyWithWhereWithoutRequestInput = {
    where: CelebrationReactedUserScalarWhereInput
    data: XOR<CelebrationReactedUserUpdateManyMutationInput, CelebrationReactedUserUncheckedUpdateManyWithoutReactionInput>
  }

  export type CelebrationReactedUserScalarWhereInput = {
    AND?: Enumerable<CelebrationReactedUserScalarWhereInput>
    OR?: Enumerable<CelebrationReactedUserScalarWhereInput>
    NOT?: Enumerable<CelebrationReactedUserScalarWhereInput>
    userId?: StringFilter | string
    celebrationId?: IntFilter | number
    reactionId?: IntFilter | number
  }

  export type RequestCreateWithoutTaggedIndividualsInput = {
    author: string
    content: string
    status?: RequestStatus
    type: RequestType
    createdAt?: Date | string
    projectId: number
  }

  export type RequestUncheckedCreateWithoutTaggedIndividualsInput = {
    author: string
    content: string
    status?: RequestStatus
    type: RequestType
    createdAt?: Date | string
    requestId?: number
    projectId: number
  }

  export type RequestCreateOrConnectWithoutTaggedIndividualsInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutTaggedIndividualsInput, RequestUncheckedCreateWithoutTaggedIndividualsInput>
  }

  export type RequestUpsertWithoutTaggedIndividualsInput = {
    update: XOR<RequestUpdateWithoutTaggedIndividualsInput, RequestUncheckedUpdateWithoutTaggedIndividualsInput>
    create: XOR<RequestCreateWithoutTaggedIndividualsInput, RequestUncheckedCreateWithoutTaggedIndividualsInput>
  }

  export type RequestUpdateWithoutTaggedIndividualsInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    type?: EnumRequestTypeFieldUpdateOperationsInput | RequestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestUncheckedUpdateWithoutTaggedIndividualsInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    type?: EnumRequestTypeFieldUpdateOperationsInput | RequestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestTaggedUserCreateWithoutRequestInput = {
    userId: string
  }

  export type RequestTaggedUserUncheckedCreateWithoutRequestInput = {
    userId: string
    tagId?: number
  }

  export type RequestTaggedUserCreateOrConnectWithoutRequestInput = {
    where: RequestTaggedUserWhereUniqueInput
    create: XOR<RequestTaggedUserCreateWithoutRequestInput, RequestTaggedUserUncheckedCreateWithoutRequestInput>
  }

  export type RequestTaggedUserCreateManyRequestInputEnvelope = {
    data: Enumerable<RequestTaggedUserCreateManyRequestInput>
    skipDuplicates?: boolean
  }

  export type RequestTaggedUserUpsertWithWhereUniqueWithoutRequestInput = {
    where: RequestTaggedUserWhereUniqueInput
    update: XOR<RequestTaggedUserUpdateWithoutRequestInput, RequestTaggedUserUncheckedUpdateWithoutRequestInput>
    create: XOR<RequestTaggedUserCreateWithoutRequestInput, RequestTaggedUserUncheckedCreateWithoutRequestInput>
  }

  export type RequestTaggedUserUpdateWithWhereUniqueWithoutRequestInput = {
    where: RequestTaggedUserWhereUniqueInput
    data: XOR<RequestTaggedUserUpdateWithoutRequestInput, RequestTaggedUserUncheckedUpdateWithoutRequestInput>
  }

  export type RequestTaggedUserUpdateManyWithWhereWithoutRequestInput = {
    where: RequestTaggedUserScalarWhereInput
    data: XOR<RequestTaggedUserUpdateManyMutationInput, RequestTaggedUserUncheckedUpdateManyWithoutTaggedIndividualsInput>
  }

  export type RequestTaggedUserScalarWhereInput = {
    AND?: Enumerable<RequestTaggedUserScalarWhereInput>
    OR?: Enumerable<RequestTaggedUserScalarWhereInput>
    NOT?: Enumerable<RequestTaggedUserScalarWhereInput>
    userId?: StringFilter | string
    requestId?: IntFilter | number
    tagId?: IntFilter | number
  }

  export type CelebrationReactedUserCreateManyRequestInput = {
    userId: string
    reactionId?: number
  }

  export type CelebrationReactedUserUpdateWithoutRequestInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CelebrationReactedUserUncheckedUpdateWithoutRequestInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reactionId?: IntFieldUpdateOperationsInput | number
  }

  export type CelebrationReactedUserUncheckedUpdateManyWithoutReactionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reactionId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestTaggedUserCreateManyRequestInput = {
    userId: string
    tagId?: number
  }

  export type RequestTaggedUserUpdateWithoutRequestInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestTaggedUserUncheckedUpdateWithoutRequestInput = {
    userId?: StringFieldUpdateOperationsInput | string
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestTaggedUserUncheckedUpdateManyWithoutTaggedIndividualsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    tagId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}