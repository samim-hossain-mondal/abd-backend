
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Project
 * 
 */
export type Project = {
  projectId: number
  projectName: string
  projectDescription: string | null
}

/**
 * Model Member
 * 
 */
export type Member = {
  email: string
  name: string | null
  role: Role | null
  memberId: number
}

/**
 * Model ProjectMember
 * 
 */
export type ProjectMember = {
  projectId: number
  email: string
  role: Role
  memberId: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  ADMIN: 'ADMIN',
  LEADER: 'LEADER',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
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
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
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
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<GlobalReject>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<GlobalReject>;

  /**
   * `prisma.projectMember`: Exposes CRUD operations for the **ProjectMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMembers
    * const projectMembers = await prisma.projectMember.findMany()
    * ```
    */
  get projectMember(): Prisma.ProjectMemberDelegate<GlobalReject>;
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
    Project: 'Project',
    Member: 'Member',
    ProjectMember: 'ProjectMember'
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
   * Count Type ProjectCountOutputType
   */


  export type ProjectCountOutputType = {
    projectMembers: number
  }

  export type ProjectCountOutputTypeSelect = {
    projectMembers?: boolean
  }

  export type ProjectCountOutputTypeGetPayload<S extends boolean | null | undefined | ProjectCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProjectCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProjectCountOutputTypeArgs)
    ? ProjectCountOutputType 
    : S extends { select: any } & (ProjectCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProjectCountOutputType ? ProjectCountOutputType[P] : never
  } 
      : ProjectCountOutputType




  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect | null
  }



  /**
   * Count Type MemberCountOutputType
   */


  export type MemberCountOutputType = {
    projectMembers: number
  }

  export type MemberCountOutputTypeSelect = {
    projectMembers?: boolean
  }

  export type MemberCountOutputTypeGetPayload<S extends boolean | null | undefined | MemberCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MemberCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MemberCountOutputTypeArgs)
    ? MemberCountOutputType 
    : S extends { select: any } & (MemberCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MemberCountOutputType ? MemberCountOutputType[P] : never
  } 
      : MemberCountOutputType




  // Custom InputTypes

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Project
   */


  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    projectId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    projectId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    projectId: number | null
    projectName: string | null
    projectDescription: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    projectId: number | null
    projectName: string | null
    projectDescription: string | null
  }

  export type ProjectCountAggregateOutputType = {
    projectId: number
    projectName: number
    projectDescription: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    projectId?: true
  }

  export type ProjectSumAggregateInputType = {
    projectId?: true
  }

  export type ProjectMinAggregateInputType = {
    projectId?: true
    projectName?: true
    projectDescription?: true
  }

  export type ProjectMaxAggregateInputType = {
    projectId?: true
    projectName?: true
    projectDescription?: true
  }

  export type ProjectCountAggregateInputType = {
    projectId?: true
    projectName?: true
    projectDescription?: true
    _all?: true
  }

  export type ProjectAggregateArgs = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs = {
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithAggregationInput>
    by: ProjectScalarFieldEnum[]
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }


  export type ProjectGroupByOutputType = {
    projectId: number
    projectName: string
    projectDescription: string | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect = {
    projectId?: boolean
    projectName?: boolean
    projectDescription?: boolean
    projectMembers?: boolean | Project$projectMembersArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }


  export type ProjectInclude = {
    projectMembers?: boolean | Project$projectMembersArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectGetPayload<S extends boolean | null | undefined | ProjectArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Project :
    S extends undefined ? never :
    S extends { include: any } & (ProjectArgs | ProjectFindManyArgs)
    ? Project  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'projectMembers' ? Array < ProjectMemberGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProjectArgs | ProjectFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'projectMembers' ? Array < ProjectMemberGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Project ? Project[P] : never
  } 
      : Project


  type ProjectCountArgs = 
    Omit<ProjectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Project'> extends True ? Prisma__ProjectClient<ProjectGetPayload<T>> : Prisma__ProjectClient<ProjectGetPayload<T> | null, null>

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Project'> extends True ? Prisma__ProjectClient<ProjectGetPayload<T>> : Prisma__ProjectClient<ProjectGetPayload<T> | null, null>

    /**
     * Find the first Project that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectWithProjectIdOnly = await prisma.project.findMany({ select: { projectId: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProjectGetPayload<T>>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    projectMembers<T extends Project$projectMembersArgs= {}>(args?: Subset<T, Project$projectMembersArgs>): Prisma.PrismaPromise<Array<ProjectMemberGetPayload<T>>| Null>;

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
   * Project base type for findUnique actions
   */
  export type ProjectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUnique
   */
  export interface ProjectFindUniqueArgs extends ProjectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project base type for findFirst actions
   */
  export type ProjectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }

  /**
   * Project findFirst
   */
  export interface ProjectFindFirstArgs extends ProjectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs = {
    /**
     * The data used to create many Projects.
     */
    data: Enumerable<ProjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }


  /**
   * Project.projectMembers
   */
  export type Project$projectMembersArgs = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    where?: ProjectMemberWhereInput
    orderBy?: Enumerable<ProjectMemberOrderByWithRelationInput>
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProjectMemberScalarFieldEnum>
  }


  /**
   * Project without action
   */
  export type ProjectArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
  }



  /**
   * Model Member
   */


  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    memberId: number | null
  }

  export type MemberSumAggregateOutputType = {
    memberId: number | null
  }

  export type MemberMinAggregateOutputType = {
    email: string | null
    name: string | null
    role: Role | null
    memberId: number | null
  }

  export type MemberMaxAggregateOutputType = {
    email: string | null
    name: string | null
    role: Role | null
    memberId: number | null
  }

  export type MemberCountAggregateOutputType = {
    email: number
    name: number
    role: number
    memberId: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    memberId?: true
  }

  export type MemberSumAggregateInputType = {
    memberId?: true
  }

  export type MemberMinAggregateInputType = {
    email?: true
    name?: true
    role?: true
    memberId?: true
  }

  export type MemberMaxAggregateInputType = {
    email?: true
    name?: true
    role?: true
    memberId?: true
  }

  export type MemberCountAggregateInputType = {
    email?: true
    name?: true
    role?: true
    memberId?: true
    _all?: true
  }

  export type MemberAggregateArgs = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs = {
    where?: MemberWhereInput
    orderBy?: Enumerable<MemberOrderByWithAggregationInput>
    by: MemberScalarFieldEnum[]
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }


  export type MemberGroupByOutputType = {
    email: string
    name: string | null
    role: Role | null
    memberId: number
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect = {
    email?: boolean
    name?: boolean
    role?: boolean
    memberId?: boolean
    projectMembers?: boolean | Member$projectMembersArgs
    _count?: boolean | MemberCountOutputTypeArgs
  }


  export type MemberInclude = {
    projectMembers?: boolean | Member$projectMembersArgs
    _count?: boolean | MemberCountOutputTypeArgs
  }

  export type MemberGetPayload<S extends boolean | null | undefined | MemberArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Member :
    S extends undefined ? never :
    S extends { include: any } & (MemberArgs | MemberFindManyArgs)
    ? Member  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'projectMembers' ? Array < ProjectMemberGetPayload<S['include'][P]>>  :
        P extends '_count' ? MemberCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MemberArgs | MemberFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'projectMembers' ? Array < ProjectMemberGetPayload<S['select'][P]>>  :
        P extends '_count' ? MemberCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Member ? Member[P] : never
  } 
      : Member


  type MemberCountArgs = 
    Omit<MemberFindManyArgs, 'select' | 'include'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MemberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Member'> extends True ? Prisma__MemberClient<MemberGetPayload<T>> : Prisma__MemberClient<MemberGetPayload<T> | null, null>

    /**
     * Find one Member that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MemberFindUniqueOrThrowArgs>
    ): Prisma__MemberClient<MemberGetPayload<T>>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MemberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Member'> extends True ? Prisma__MemberClient<MemberGetPayload<T>> : Prisma__MemberClient<MemberGetPayload<T> | null, null>

    /**
     * Find the first Member that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MemberFindFirstOrThrowArgs>
    ): Prisma__MemberClient<MemberGetPayload<T>>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const memberWithEmailOnly = await prisma.member.findMany({ select: { email: true } })
     * 
    **/
    findMany<T extends MemberFindManyArgs>(
      args?: SelectSubset<T, MemberFindManyArgs>
    ): Prisma.PrismaPromise<Array<MemberGetPayload<T>>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
    **/
    create<T extends MemberCreateArgs>(
      args: SelectSubset<T, MemberCreateArgs>
    ): Prisma__MemberClient<MemberGetPayload<T>>

    /**
     * Create many Members.
     *     @param {MemberCreateManyArgs} args - Arguments to create many Members.
     *     @example
     *     // Create many Members
     *     const member = await prisma.member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MemberCreateManyArgs>(
      args?: SelectSubset<T, MemberCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
    **/
    delete<T extends MemberDeleteArgs>(
      args: SelectSubset<T, MemberDeleteArgs>
    ): Prisma__MemberClient<MemberGetPayload<T>>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemberUpdateArgs>(
      args: SelectSubset<T, MemberUpdateArgs>
    ): Prisma__MemberClient<MemberGetPayload<T>>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemberDeleteManyArgs>(
      args?: SelectSubset<T, MemberDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemberUpdateManyArgs>(
      args: SelectSubset<T, MemberUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
    **/
    upsert<T extends MemberUpsertArgs>(
      args: SelectSubset<T, MemberUpsertArgs>
    ): Prisma__MemberClient<MemberGetPayload<T>>

    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MemberClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    projectMembers<T extends Member$projectMembersArgs= {}>(args?: Subset<T, Member$projectMembersArgs>): Prisma.PrismaPromise<Array<ProjectMemberGetPayload<T>>| Null>;

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
   * Member base type for findUnique actions
   */
  export type MemberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUnique
   */
  export interface MemberFindUniqueArgs extends MemberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member base type for findFirst actions
   */
  export type MemberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: Enumerable<MemberScalarFieldEnum>
  }

  /**
   * Member findFirst
   */
  export interface MemberFindFirstArgs extends MemberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: Enumerable<MemberScalarFieldEnum>
  }


  /**
   * Member findMany
   */
  export type MemberFindManyArgs = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: Enumerable<MemberScalarFieldEnum>
  }


  /**
   * Member create
   */
  export type MemberCreateArgs = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }


  /**
   * Member createMany
   */
  export type MemberCreateManyArgs = {
    /**
     * The data used to create many Members.
     */
    data: Enumerable<MemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Member update
   */
  export type MemberUpdateArgs = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
  }


  /**
   * Member upsert
   */
  export type MemberUpsertArgs = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }


  /**
   * Member delete
   */
  export type MemberDeleteArgs = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
  }


  /**
   * Member.projectMembers
   */
  export type Member$projectMembersArgs = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    where?: ProjectMemberWhereInput
    orderBy?: Enumerable<ProjectMemberOrderByWithRelationInput>
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProjectMemberScalarFieldEnum>
  }


  /**
   * Member without action
   */
  export type MemberArgs = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude | null
  }



  /**
   * Model ProjectMember
   */


  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null
    _avg: ProjectMemberAvgAggregateOutputType | null
    _sum: ProjectMemberSumAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  export type ProjectMemberAvgAggregateOutputType = {
    projectId: number | null
    memberId: number | null
  }

  export type ProjectMemberSumAggregateOutputType = {
    projectId: number | null
    memberId: number | null
  }

  export type ProjectMemberMinAggregateOutputType = {
    projectId: number | null
    email: string | null
    role: Role | null
    memberId: number | null
  }

  export type ProjectMemberMaxAggregateOutputType = {
    projectId: number | null
    email: string | null
    role: Role | null
    memberId: number | null
  }

  export type ProjectMemberCountAggregateOutputType = {
    projectId: number
    email: number
    role: number
    memberId: number
    _all: number
  }


  export type ProjectMemberAvgAggregateInputType = {
    projectId?: true
    memberId?: true
  }

  export type ProjectMemberSumAggregateInputType = {
    projectId?: true
    memberId?: true
  }

  export type ProjectMemberMinAggregateInputType = {
    projectId?: true
    email?: true
    role?: true
    memberId?: true
  }

  export type ProjectMemberMaxAggregateInputType = {
    projectId?: true
    email?: true
    role?: true
    memberId?: true
  }

  export type ProjectMemberCountAggregateInputType = {
    projectId?: true
    email?: true
    role?: true
    memberId?: true
    _all?: true
  }

  export type ProjectMemberAggregateArgs = {
    /**
     * Filter which ProjectMember to aggregate.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: Enumerable<ProjectMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMembers
    **/
    _count?: true | ProjectMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type GetProjectMemberAggregateType<T extends ProjectMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMember[P]>
      : GetScalarType<T[P], AggregateProjectMember[P]>
  }




  export type ProjectMemberGroupByArgs = {
    where?: ProjectMemberWhereInput
    orderBy?: Enumerable<ProjectMemberOrderByWithAggregationInput>
    by: ProjectMemberScalarFieldEnum[]
    having?: ProjectMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMemberCountAggregateInputType | true
    _avg?: ProjectMemberAvgAggregateInputType
    _sum?: ProjectMemberSumAggregateInputType
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }


  export type ProjectMemberGroupByOutputType = {
    projectId: number
    email: string
    role: Role
    memberId: number
    _count: ProjectMemberCountAggregateOutputType | null
    _avg: ProjectMemberAvgAggregateOutputType | null
    _sum: ProjectMemberSumAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  type GetProjectMemberGroupByPayload<T extends ProjectMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProjectMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMemberSelect = {
    projectId?: boolean
    email?: boolean
    role?: boolean
    memberId?: boolean
    project?: boolean | ProjectArgs
    member?: boolean | MemberArgs
  }


  export type ProjectMemberInclude = {
    project?: boolean | ProjectArgs
    member?: boolean | MemberArgs
  }

  export type ProjectMemberGetPayload<S extends boolean | null | undefined | ProjectMemberArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProjectMember :
    S extends undefined ? never :
    S extends { include: any } & (ProjectMemberArgs | ProjectMemberFindManyArgs)
    ? ProjectMember  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<S['include'][P]> :
        P extends 'member' ? MemberGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProjectMemberArgs | ProjectMemberFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<S['select'][P]> :
        P extends 'member' ? MemberGetPayload<S['select'][P]> :  P extends keyof ProjectMember ? ProjectMember[P] : never
  } 
      : ProjectMember


  type ProjectMemberCountArgs = 
    Omit<ProjectMemberFindManyArgs, 'select' | 'include'> & {
      select?: ProjectMemberCountAggregateInputType | true
    }

  export interface ProjectMemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ProjectMember that matches the filter.
     * @param {ProjectMemberFindUniqueArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectMemberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectMemberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProjectMember'> extends True ? Prisma__ProjectMemberClient<ProjectMemberGetPayload<T>> : Prisma__ProjectMemberClient<ProjectMemberGetPayload<T> | null, null>

    /**
     * Find one ProjectMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectMemberFindUniqueOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectMemberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProjectMemberFindUniqueOrThrowArgs>
    ): Prisma__ProjectMemberClient<ProjectMemberGetPayload<T>>

    /**
     * Find the first ProjectMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectMemberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectMemberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProjectMember'> extends True ? Prisma__ProjectMemberClient<ProjectMemberGetPayload<T>> : Prisma__ProjectMemberClient<ProjectMemberGetPayload<T> | null, null>

    /**
     * Find the first ProjectMember that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectMemberFindFirstOrThrowArgs>
    ): Prisma__ProjectMemberClient<ProjectMemberGetPayload<T>>

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany()
     * 
     * // Get first 10 ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectMemberWithProjectIdOnly = await prisma.projectMember.findMany({ select: { projectId: true } })
     * 
    **/
    findMany<T extends ProjectMemberFindManyArgs>(
      args?: SelectSubset<T, ProjectMemberFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProjectMemberGetPayload<T>>>

    /**
     * Create a ProjectMember.
     * @param {ProjectMemberCreateArgs} args - Arguments to create a ProjectMember.
     * @example
     * // Create one ProjectMember
     * const ProjectMember = await prisma.projectMember.create({
     *   data: {
     *     // ... data to create a ProjectMember
     *   }
     * })
     * 
    **/
    create<T extends ProjectMemberCreateArgs>(
      args: SelectSubset<T, ProjectMemberCreateArgs>
    ): Prisma__ProjectMemberClient<ProjectMemberGetPayload<T>>

    /**
     * Create many ProjectMembers.
     *     @param {ProjectMemberCreateManyArgs} args - Arguments to create many ProjectMembers.
     *     @example
     *     // Create many ProjectMembers
     *     const projectMember = await prisma.projectMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectMemberCreateManyArgs>(
      args?: SelectSubset<T, ProjectMemberCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectMember.
     * @param {ProjectMemberDeleteArgs} args - Arguments to delete one ProjectMember.
     * @example
     * // Delete one ProjectMember
     * const ProjectMember = await prisma.projectMember.delete({
     *   where: {
     *     // ... filter to delete one ProjectMember
     *   }
     * })
     * 
    **/
    delete<T extends ProjectMemberDeleteArgs>(
      args: SelectSubset<T, ProjectMemberDeleteArgs>
    ): Prisma__ProjectMemberClient<ProjectMemberGetPayload<T>>

    /**
     * Update one ProjectMember.
     * @param {ProjectMemberUpdateArgs} args - Arguments to update one ProjectMember.
     * @example
     * // Update one ProjectMember
     * const projectMember = await prisma.projectMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectMemberUpdateArgs>(
      args: SelectSubset<T, ProjectMemberUpdateArgs>
    ): Prisma__ProjectMemberClient<ProjectMemberGetPayload<T>>

    /**
     * Delete zero or more ProjectMembers.
     * @param {ProjectMemberDeleteManyArgs} args - Arguments to filter ProjectMembers to delete.
     * @example
     * // Delete a few ProjectMembers
     * const { count } = await prisma.projectMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectMemberDeleteManyArgs>(
      args?: SelectSubset<T, ProjectMemberDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectMemberUpdateManyArgs>(
      args: SelectSubset<T, ProjectMemberUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectMember.
     * @param {ProjectMemberUpsertArgs} args - Arguments to update or create a ProjectMember.
     * @example
     * // Update or create a ProjectMember
     * const projectMember = await prisma.projectMember.upsert({
     *   create: {
     *     // ... data to create a ProjectMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMember we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectMemberUpsertArgs>(
      args: SelectSubset<T, ProjectMemberUpsertArgs>
    ): Prisma__ProjectMemberClient<ProjectMemberGetPayload<T>>

    /**
     * Count the number of ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberCountArgs} args - Arguments to filter ProjectMembers to count.
     * @example
     * // Count the number of ProjectMembers
     * const count = await prisma.projectMember.count({
     *   where: {
     *     // ... the filter for the ProjectMembers we want to count
     *   }
     * })
    **/
    count<T extends ProjectMemberCountArgs>(
      args?: Subset<T, ProjectMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectMemberAggregateArgs>(args: Subset<T, ProjectMemberAggregateArgs>): Prisma.PrismaPromise<GetProjectMemberAggregateType<T>>

    /**
     * Group by ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberGroupByArgs} args - Group by arguments.
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
      T extends ProjectMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMemberGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectMemberClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    project<T extends ProjectArgs= {}>(args?: Subset<T, ProjectArgs>): Prisma__ProjectClient<ProjectGetPayload<T> | Null>;

    member<T extends MemberArgs= {}>(args?: Subset<T, MemberArgs>): Prisma__MemberClient<MemberGetPayload<T> | Null>;

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
   * ProjectMember base type for findUnique actions
   */
  export type ProjectMemberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findUnique
   */
  export interface ProjectMemberFindUniqueArgs extends ProjectMemberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProjectMember findUniqueOrThrow
   */
  export type ProjectMemberFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }


  /**
   * ProjectMember base type for findFirst actions
   */
  export type ProjectMemberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: Enumerable<ProjectMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: Enumerable<ProjectMemberScalarFieldEnum>
  }

  /**
   * ProjectMember findFirst
   */
  export interface ProjectMemberFindFirstArgs extends ProjectMemberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProjectMember findFirstOrThrow
   */
  export type ProjectMemberFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: Enumerable<ProjectMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: Enumerable<ProjectMemberScalarFieldEnum>
  }


  /**
   * ProjectMember findMany
   */
  export type ProjectMemberFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: Enumerable<ProjectMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    distinct?: Enumerable<ProjectMemberScalarFieldEnum>
  }


  /**
   * ProjectMember create
   */
  export type ProjectMemberCreateArgs = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    /**
     * The data needed to create a ProjectMember.
     */
    data: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
  }


  /**
   * ProjectMember createMany
   */
  export type ProjectMemberCreateManyArgs = {
    /**
     * The data used to create many ProjectMembers.
     */
    data: Enumerable<ProjectMemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProjectMember update
   */
  export type ProjectMemberUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    /**
     * The data needed to update a ProjectMember.
     */
    data: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
    /**
     * Choose, which ProjectMember to update.
     */
    where: ProjectMemberWhereUniqueInput
  }


  /**
   * ProjectMember updateMany
   */
  export type ProjectMemberUpdateManyArgs = {
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
  }


  /**
   * ProjectMember upsert
   */
  export type ProjectMemberUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    /**
     * The filter to search for the ProjectMember to update in case it exists.
     */
    where: ProjectMemberWhereUniqueInput
    /**
     * In case the ProjectMember found by the `where` argument doesn't exist, create a new ProjectMember with this data.
     */
    create: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
    /**
     * In case the ProjectMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
  }


  /**
   * ProjectMember delete
   */
  export type ProjectMemberDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
    /**
     * Filter which ProjectMember to delete.
     */
    where: ProjectMemberWhereUniqueInput
  }


  /**
   * ProjectMember deleteMany
   */
  export type ProjectMemberDeleteManyArgs = {
    /**
     * Filter which ProjectMembers to delete
     */
    where?: ProjectMemberWhereInput
  }


  /**
   * ProjectMember without action
   */
  export type ProjectMemberArgs = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectMemberInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const MemberScalarFieldEnum: {
    email: 'email',
    name: 'name',
    role: 'role',
    memberId: 'memberId'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const ProjectMemberScalarFieldEnum: {
    projectId: 'projectId',
    email: 'email',
    role: 'role',
    memberId: 'memberId'
  };

  export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    projectId: 'projectId',
    projectName: 'projectName',
    projectDescription: 'projectDescription'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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


  export type ProjectWhereInput = {
    AND?: Enumerable<ProjectWhereInput>
    OR?: Enumerable<ProjectWhereInput>
    NOT?: Enumerable<ProjectWhereInput>
    projectId?: IntFilter | number
    projectName?: StringFilter | string
    projectDescription?: StringNullableFilter | string | null
    projectMembers?: ProjectMemberListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    projectId?: SortOrder
    projectName?: SortOrder
    projectDescription?: SortOrder
    projectMembers?: ProjectMemberOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = {
    projectId?: number
  }

  export type ProjectOrderByWithAggregationInput = {
    projectId?: SortOrder
    projectName?: SortOrder
    projectDescription?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    projectId?: IntWithAggregatesFilter | number
    projectName?: StringWithAggregatesFilter | string
    projectDescription?: StringNullableWithAggregatesFilter | string | null
  }

  export type MemberWhereInput = {
    AND?: Enumerable<MemberWhereInput>
    OR?: Enumerable<MemberWhereInput>
    NOT?: Enumerable<MemberWhereInput>
    email?: StringFilter | string
    name?: StringNullableFilter | string | null
    role?: EnumRoleNullableFilter | Role | null
    memberId?: IntFilter | number
    projectMembers?: ProjectMemberListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    memberId?: SortOrder
    projectMembers?: ProjectMemberOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = {
    email?: string
    memberId?: number
  }

  export type MemberOrderByWithAggregationInput = {
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    memberId?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<MemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MemberScalarWhereWithAggregatesInput>
    email?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    role?: EnumRoleNullableWithAggregatesFilter | Role | null
    memberId?: IntWithAggregatesFilter | number
  }

  export type ProjectMemberWhereInput = {
    AND?: Enumerable<ProjectMemberWhereInput>
    OR?: Enumerable<ProjectMemberWhereInput>
    NOT?: Enumerable<ProjectMemberWhereInput>
    projectId?: IntFilter | number
    email?: StringFilter | string
    role?: EnumRoleFilter | Role
    memberId?: IntFilter | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    member?: XOR<MemberRelationFilter, MemberWhereInput>
  }

  export type ProjectMemberOrderByWithRelationInput = {
    projectId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    memberId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
  }

  export type ProjectMemberWhereUniqueInput = {
    projectId_email?: ProjectMemberProjectIdEmailCompoundUniqueInput
  }

  export type ProjectMemberOrderByWithAggregationInput = {
    projectId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    memberId?: SortOrder
    _count?: ProjectMemberCountOrderByAggregateInput
    _avg?: ProjectMemberAvgOrderByAggregateInput
    _max?: ProjectMemberMaxOrderByAggregateInput
    _min?: ProjectMemberMinOrderByAggregateInput
    _sum?: ProjectMemberSumOrderByAggregateInput
  }

  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectMemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectMemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectMemberScalarWhereWithAggregatesInput>
    projectId?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    memberId?: IntWithAggregatesFilter | number
  }

  export type ProjectCreateInput = {
    projectId: number
    projectName: string
    projectDescription?: string | null
    projectMembers?: ProjectMemberCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    projectId: number
    projectName: string
    projectDescription?: string | null
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    projectMembers?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    projectId: number
    projectName: string
    projectDescription?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberCreateInput = {
    email: string
    name?: string | null
    role?: Role | null
    projectMembers?: ProjectMemberCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    email: string
    name?: string | null
    role?: Role | null
    memberId?: number
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    projectMembers?: ProjectMemberUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    memberId?: IntFieldUpdateOperationsInput | number
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    email: string
    name?: string | null
    role?: Role | null
    memberId?: number
  }

  export type MemberUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
  }

  export type MemberUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectMemberCreateInput = {
    email: string
    role: Role
    project: ProjectCreateNestedOneWithoutProjectMembersInput
    member: MemberCreateNestedOneWithoutProjectMembersInput
  }

  export type ProjectMemberUncheckedCreateInput = {
    projectId: number
    email: string
    role: Role
    memberId: number
  }

  export type ProjectMemberUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    project?: ProjectUpdateOneRequiredWithoutProjectMembersNestedInput
    member?: MemberUpdateOneRequiredWithoutProjectMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectMemberCreateManyInput = {
    projectId: number
    email: string
    role: Role
    memberId: number
  }

  export type ProjectMemberUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type ProjectMemberUncheckedUpdateManyInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    memberId?: IntFieldUpdateOperationsInput | number
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

  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput
    some?: ProjectMemberWhereInput
    none?: ProjectMemberWhereInput
  }

  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    projectId?: SortOrder
    projectName?: SortOrder
    projectDescription?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    projectId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    projectId?: SortOrder
    projectName?: SortOrder
    projectDescription?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    projectId?: SortOrder
    projectName?: SortOrder
    projectDescription?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    projectId?: SortOrder
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

  export type EnumRoleNullableFilter = {
    equals?: Role | null
    in?: Enumerable<Role> | null
    notIn?: Enumerable<Role> | null
    not?: NestedEnumRoleNullableFilter | Role | null
  }

  export type MemberCountOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    memberId?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    memberId?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    memberId?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    memberId?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    memberId?: SortOrder
  }

  export type EnumRoleNullableWithAggregatesFilter = {
    equals?: Role | null
    in?: Enumerable<Role> | null
    notIn?: Enumerable<Role> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter | Role | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumRoleNullableFilter
    _max?: NestedEnumRoleNullableFilter
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type MemberRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type ProjectMemberProjectIdEmailCompoundUniqueInput = {
    projectId: number
    email: string
  }

  export type ProjectMemberCountOrderByAggregateInput = {
    projectId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    memberId?: SortOrder
  }

  export type ProjectMemberAvgOrderByAggregateInput = {
    projectId?: SortOrder
    memberId?: SortOrder
  }

  export type ProjectMemberMaxOrderByAggregateInput = {
    projectId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    memberId?: SortOrder
  }

  export type ProjectMemberMinOrderByAggregateInput = {
    projectId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    memberId?: SortOrder
  }

  export type ProjectMemberSumOrderByAggregateInput = {
    projectId?: SortOrder
    memberId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ProjectMemberCreateWithoutProjectInput>, Enumerable<ProjectMemberUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ProjectMemberCreateOrConnectWithoutProjectInput>
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: Enumerable<ProjectMemberWhereUniqueInput>
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ProjectMemberCreateWithoutProjectInput>, Enumerable<ProjectMemberUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ProjectMemberCreateOrConnectWithoutProjectInput>
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: Enumerable<ProjectMemberWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectMemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<ProjectMemberCreateWithoutProjectInput>, Enumerable<ProjectMemberUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ProjectMemberCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ProjectMemberUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: Enumerable<ProjectMemberWhereUniqueInput>
    disconnect?: Enumerable<ProjectMemberWhereUniqueInput>
    delete?: Enumerable<ProjectMemberWhereUniqueInput>
    connect?: Enumerable<ProjectMemberWhereUniqueInput>
    update?: Enumerable<ProjectMemberUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ProjectMemberUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ProjectMemberScalarWhereInput>
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<ProjectMemberCreateWithoutProjectInput>, Enumerable<ProjectMemberUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ProjectMemberCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ProjectMemberUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: Enumerable<ProjectMemberWhereUniqueInput>
    disconnect?: Enumerable<ProjectMemberWhereUniqueInput>
    delete?: Enumerable<ProjectMemberWhereUniqueInput>
    connect?: Enumerable<ProjectMemberWhereUniqueInput>
    update?: Enumerable<ProjectMemberUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ProjectMemberUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ProjectMemberScalarWhereInput>
  }

  export type ProjectMemberCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<ProjectMemberCreateWithoutMemberInput>, Enumerable<ProjectMemberUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<ProjectMemberCreateOrConnectWithoutMemberInput>
    createMany?: ProjectMemberCreateManyMemberInputEnvelope
    connect?: Enumerable<ProjectMemberWhereUniqueInput>
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<ProjectMemberCreateWithoutMemberInput>, Enumerable<ProjectMemberUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<ProjectMemberCreateOrConnectWithoutMemberInput>
    createMany?: ProjectMemberCreateManyMemberInputEnvelope
    connect?: Enumerable<ProjectMemberWhereUniqueInput>
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: Role | null
  }

  export type ProjectMemberUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<ProjectMemberCreateWithoutMemberInput>, Enumerable<ProjectMemberUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<ProjectMemberCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<ProjectMemberUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: ProjectMemberCreateManyMemberInputEnvelope
    set?: Enumerable<ProjectMemberWhereUniqueInput>
    disconnect?: Enumerable<ProjectMemberWhereUniqueInput>
    delete?: Enumerable<ProjectMemberWhereUniqueInput>
    connect?: Enumerable<ProjectMemberWhereUniqueInput>
    update?: Enumerable<ProjectMemberUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<ProjectMemberUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<ProjectMemberScalarWhereInput>
  }

  export type ProjectMemberUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<ProjectMemberCreateWithoutMemberInput>, Enumerable<ProjectMemberUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<ProjectMemberCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<ProjectMemberUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: ProjectMemberCreateManyMemberInputEnvelope
    set?: Enumerable<ProjectMemberWhereUniqueInput>
    disconnect?: Enumerable<ProjectMemberWhereUniqueInput>
    delete?: Enumerable<ProjectMemberWhereUniqueInput>
    connect?: Enumerable<ProjectMemberWhereUniqueInput>
    update?: Enumerable<ProjectMemberUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<ProjectMemberUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<ProjectMemberScalarWhereInput>
  }

  export type ProjectCreateNestedOneWithoutProjectMembersInput = {
    create?: XOR<ProjectCreateWithoutProjectMembersInput, ProjectUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectMembersInput
    connect?: ProjectWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutProjectMembersInput = {
    create?: XOR<MemberCreateWithoutProjectMembersInput, MemberUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: MemberCreateOrConnectWithoutProjectMembersInput
    connect?: MemberWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type ProjectUpdateOneRequiredWithoutProjectMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectMembersInput, ProjectUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectMembersInput
    upsert?: ProjectUpsertWithoutProjectMembersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutProjectMembersInput, ProjectUncheckedUpdateWithoutProjectMembersInput>
  }

  export type MemberUpdateOneRequiredWithoutProjectMembersNestedInput = {
    create?: XOR<MemberCreateWithoutProjectMembersInput, MemberUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: MemberCreateOrConnectWithoutProjectMembersInput
    upsert?: MemberUpsertWithoutProjectMembersInput
    connect?: MemberWhereUniqueInput
    update?: XOR<MemberUpdateWithoutProjectMembersInput, MemberUncheckedUpdateWithoutProjectMembersInput>
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

  export type NestedEnumRoleNullableFilter = {
    equals?: Role | null
    in?: Enumerable<Role> | null
    notIn?: Enumerable<Role> | null
    not?: NestedEnumRoleNullableFilter | Role | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter = {
    equals?: Role | null
    in?: Enumerable<Role> | null
    notIn?: Enumerable<Role> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter | Role | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumRoleNullableFilter
    _max?: NestedEnumRoleNullableFilter
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type ProjectMemberCreateWithoutProjectInput = {
    email: string
    role: Role
    member: MemberCreateNestedOneWithoutProjectMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    email: string
    role: Role
    memberId: number
  }

  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data: Enumerable<ProjectMemberCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutProjectMembersInput>
  }

  export type ProjectMemberScalarWhereInput = {
    AND?: Enumerable<ProjectMemberScalarWhereInput>
    OR?: Enumerable<ProjectMemberScalarWhereInput>
    NOT?: Enumerable<ProjectMemberScalarWhereInput>
    projectId?: IntFilter | number
    email?: StringFilter | string
    role?: EnumRoleFilter | Role
    memberId?: IntFilter | number
  }

  export type ProjectMemberCreateWithoutMemberInput = {
    email: string
    role: Role
    project: ProjectCreateNestedOneWithoutProjectMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutMemberInput = {
    projectId: number
    email: string
    role: Role
  }

  export type ProjectMemberCreateOrConnectWithoutMemberInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutMemberInput, ProjectMemberUncheckedCreateWithoutMemberInput>
  }

  export type ProjectMemberCreateManyMemberInputEnvelope = {
    data: Enumerable<ProjectMemberCreateManyMemberInput>
    skipDuplicates?: boolean
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutMemberInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutMemberInput, ProjectMemberUncheckedUpdateWithoutMemberInput>
    create: XOR<ProjectMemberCreateWithoutMemberInput, ProjectMemberUncheckedCreateWithoutMemberInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutMemberInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutMemberInput, ProjectMemberUncheckedUpdateWithoutMemberInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutMemberInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutProjectMembersInput>
  }

  export type ProjectCreateWithoutProjectMembersInput = {
    projectId: number
    projectName: string
    projectDescription?: string | null
  }

  export type ProjectUncheckedCreateWithoutProjectMembersInput = {
    projectId: number
    projectName: string
    projectDescription?: string | null
  }

  export type ProjectCreateOrConnectWithoutProjectMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectMembersInput, ProjectUncheckedCreateWithoutProjectMembersInput>
  }

  export type MemberCreateWithoutProjectMembersInput = {
    email: string
    name?: string | null
    role?: Role | null
  }

  export type MemberUncheckedCreateWithoutProjectMembersInput = {
    email: string
    name?: string | null
    role?: Role | null
    memberId?: number
  }

  export type MemberCreateOrConnectWithoutProjectMembersInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutProjectMembersInput, MemberUncheckedCreateWithoutProjectMembersInput>
  }

  export type ProjectUpsertWithoutProjectMembersInput = {
    update: XOR<ProjectUpdateWithoutProjectMembersInput, ProjectUncheckedUpdateWithoutProjectMembersInput>
    create: XOR<ProjectCreateWithoutProjectMembersInput, ProjectUncheckedCreateWithoutProjectMembersInput>
  }

  export type ProjectUpdateWithoutProjectMembersInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateWithoutProjectMembersInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberUpsertWithoutProjectMembersInput = {
    update: XOR<MemberUpdateWithoutProjectMembersInput, MemberUncheckedUpdateWithoutProjectMembersInput>
    create: XOR<MemberCreateWithoutProjectMembersInput, MemberUncheckedCreateWithoutProjectMembersInput>
  }

  export type MemberUpdateWithoutProjectMembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
  }

  export type MemberUncheckedUpdateWithoutProjectMembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectMemberCreateManyProjectInput = {
    email: string
    role: Role
    memberId: number
  }

  export type ProjectMemberUpdateWithoutProjectInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    member?: MemberUpdateOneRequiredWithoutProjectMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectMembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectMemberCreateManyMemberInput = {
    projectId: number
    email: string
    role: Role
  }

  export type ProjectMemberUpdateWithoutMemberInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    project?: ProjectUpdateOneRequiredWithoutProjectMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutMemberInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
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