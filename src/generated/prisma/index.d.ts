
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sop
 * 
 */
export type Sop = $Result.DefaultSelection<Prisma.$SopPayload>
/**
 * Model Approval
 * 
 */
export type Approval = $Result.DefaultSelection<Prisma.$ApprovalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CHIEF: 'CHIEF',
  MANAGER: 'MANAGER',
  SUPERVISOR: 'SUPERVISOR',
  OFFICER: 'OFFICER',
  TRAINEE: 'TRAINEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Department: {
  EXECUTIVE_OFFICE: 'EXECUTIVE_OFFICE',
  HR: 'HR',
  FINANCE_AND_ACCOUNTING: 'FINANCE_AND_ACCOUNTING',
  HEALTH_CLAIMS: 'HEALTH_CLAIMS',
  NON_HEALTH_CLAIMS: 'NON_HEALTH_CLAIMS',
  LEGAL_AND_COMPLIANCE: 'LEGAL_AND_COMPLIANCE',
  SALES_AND_MARKETING: 'SALES_AND_MARKETING',
  UNDERWRITING: 'UNDERWRITING'
};

export type Department = (typeof Department)[keyof typeof Department]


export const SopStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  ARCHIVED: 'ARCHIVED'
};

export type SopStatus = (typeof SopStatus)[keyof typeof SopStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Department = $Enums.Department

export const Department: typeof $Enums.Department

export type SopStatus = $Enums.SopStatus

export const SopStatus: typeof $Enums.SopStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sop`: Exposes CRUD operations for the **Sop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sops
    * const sops = await prisma.sop.findMany()
    * ```
    */
  get sop(): Prisma.SopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approval`: Exposes CRUD operations for the **Approval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Approvals
    * const approvals = await prisma.approval.findMany()
    * ```
    */
  get approval(): Prisma.ApprovalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Sop: 'Sop',
    Approval: 'Approval'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "sop" | "approval"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sop: {
        payload: Prisma.$SopPayload<ExtArgs>
        fields: Prisma.SopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload>
          }
          findFirst: {
            args: Prisma.SopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload>
          }
          findMany: {
            args: Prisma.SopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload>[]
          }
          create: {
            args: Prisma.SopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload>
          }
          createMany: {
            args: Prisma.SopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload>[]
          }
          delete: {
            args: Prisma.SopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload>
          }
          update: {
            args: Prisma.SopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload>
          }
          deleteMany: {
            args: Prisma.SopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload>[]
          }
          upsert: {
            args: Prisma.SopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SopPayload>
          }
          aggregate: {
            args: Prisma.SopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSop>
          }
          groupBy: {
            args: Prisma.SopGroupByArgs<ExtArgs>
            result: $Utils.Optional<SopGroupByOutputType>[]
          }
          count: {
            args: Prisma.SopCountArgs<ExtArgs>
            result: $Utils.Optional<SopCountAggregateOutputType> | number
          }
        }
      }
      Approval: {
        payload: Prisma.$ApprovalPayload<ExtArgs>
        fields: Prisma.ApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findFirst: {
            args: Prisma.ApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findMany: {
            args: Prisma.ApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          create: {
            args: Prisma.ApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          createMany: {
            args: Prisma.ApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          delete: {
            args: Prisma.ApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          update: {
            args: Prisma.ApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          upsert: {
            args: Prisma.ApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          aggregate: {
            args: Prisma.ApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApproval>
          }
          groupBy: {
            args: Prisma.ApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sop?: SopOmit
    approval?: ApprovalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdSops: number
    approvals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdSops?: boolean | UserCountOutputTypeCountCreatedSopsArgs
    approvals?: boolean | UserCountOutputTypeCountApprovalsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedSopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SopWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
  }


  /**
   * Count Type SopCountOutputType
   */

  export type SopCountOutputType = {
    approvals: number
  }

  export type SopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvals?: boolean | SopCountOutputTypeCountApprovalsArgs
  }

  // Custom InputTypes
  /**
   * SopCountOutputType without action
   */
  export type SopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SopCountOutputType
     */
    select?: SopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SopCountOutputType without action
   */
  export type SopCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    department: $Enums.Department | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    department: $Enums.Department | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    department: $Enums.Department
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdSops?: boolean | User$createdSopsArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdSops?: boolean | User$createdSopsArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdSops: Prisma.$SopPayload<ExtArgs>[]
      approvals: Prisma.$ApprovalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      role: $Enums.Role
      department: $Enums.Department
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdSops<T extends User$createdSopsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdSopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvals<T extends User$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly department: FieldRef<"User", 'Department'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdSops
   */
  export type User$createdSopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
    where?: SopWhereInput
    orderBy?: SopOrderByWithRelationInput | SopOrderByWithRelationInput[]
    cursor?: SopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SopScalarFieldEnum | SopScalarFieldEnum[]
  }

  /**
   * User.approvals
   */
  export type User$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    cursor?: ApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Sop
   */

  export type AggregateSop = {
    _count: SopCountAggregateOutputType | null
    _avg: SopAvgAggregateOutputType | null
    _sum: SopSumAggregateOutputType | null
    _min: SopMinAggregateOutputType | null
    _max: SopMaxAggregateOutputType | null
  }

  export type SopAvgAggregateOutputType = {
    id: number | null
    requesterId: number | null
  }

  export type SopSumAggregateOutputType = {
    id: number | null
    requesterId: number | null
  }

  export type SopMinAggregateOutputType = {
    id: number | null
    title: string | null
    department: $Enums.Department | null
    version: string | null
    status: $Enums.SopStatus | null
    steps: string | null
    attachments: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requesterId: number | null
  }

  export type SopMaxAggregateOutputType = {
    id: number | null
    title: string | null
    department: $Enums.Department | null
    version: string | null
    status: $Enums.SopStatus | null
    steps: string | null
    attachments: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requesterId: number | null
  }

  export type SopCountAggregateOutputType = {
    id: number
    title: number
    department: number
    version: number
    status: number
    steps: number
    attachments: number
    notes: number
    createdAt: number
    updatedAt: number
    requesterId: number
    _all: number
  }


  export type SopAvgAggregateInputType = {
    id?: true
    requesterId?: true
  }

  export type SopSumAggregateInputType = {
    id?: true
    requesterId?: true
  }

  export type SopMinAggregateInputType = {
    id?: true
    title?: true
    department?: true
    version?: true
    status?: true
    steps?: true
    attachments?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
  }

  export type SopMaxAggregateInputType = {
    id?: true
    title?: true
    department?: true
    version?: true
    status?: true
    steps?: true
    attachments?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
  }

  export type SopCountAggregateInputType = {
    id?: true
    title?: true
    department?: true
    version?: true
    status?: true
    steps?: true
    attachments?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
    _all?: true
  }

  export type SopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sop to aggregate.
     */
    where?: SopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sops to fetch.
     */
    orderBy?: SopOrderByWithRelationInput | SopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sops
    **/
    _count?: true | SopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SopMaxAggregateInputType
  }

  export type GetSopAggregateType<T extends SopAggregateArgs> = {
        [P in keyof T & keyof AggregateSop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSop[P]>
      : GetScalarType<T[P], AggregateSop[P]>
  }




  export type SopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SopWhereInput
    orderBy?: SopOrderByWithAggregationInput | SopOrderByWithAggregationInput[]
    by: SopScalarFieldEnum[] | SopScalarFieldEnum
    having?: SopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SopCountAggregateInputType | true
    _avg?: SopAvgAggregateInputType
    _sum?: SopSumAggregateInputType
    _min?: SopMinAggregateInputType
    _max?: SopMaxAggregateInputType
  }

  export type SopGroupByOutputType = {
    id: number
    title: string
    department: $Enums.Department
    version: string
    status: $Enums.SopStatus
    steps: string | null
    attachments: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    requesterId: number
    _count: SopCountAggregateOutputType | null
    _avg: SopAvgAggregateOutputType | null
    _sum: SopSumAggregateOutputType | null
    _min: SopMinAggregateOutputType | null
    _max: SopMaxAggregateOutputType | null
  }

  type GetSopGroupByPayload<T extends SopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SopGroupByOutputType[P]>
            : GetScalarType<T[P], SopGroupByOutputType[P]>
        }
      >
    >


  export type SopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    version?: boolean
    status?: boolean
    steps?: boolean
    attachments?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    approvals?: boolean | Sop$approvalsArgs<ExtArgs>
    _count?: boolean | SopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sop"]>

  export type SopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    version?: boolean
    status?: boolean
    steps?: boolean
    attachments?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sop"]>

  export type SopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    version?: boolean
    status?: boolean
    steps?: boolean
    attachments?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sop"]>

  export type SopSelectScalar = {
    id?: boolean
    title?: boolean
    department?: boolean
    version?: boolean
    status?: boolean
    steps?: boolean
    attachments?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
  }

  export type SopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "department" | "version" | "status" | "steps" | "attachments" | "notes" | "createdAt" | "updatedAt" | "requesterId", ExtArgs["result"]["sop"]>
  export type SopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    approvals?: boolean | Sop$approvalsArgs<ExtArgs>
    _count?: boolean | SopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sop"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      approvals: Prisma.$ApprovalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      department: $Enums.Department
      version: string
      status: $Enums.SopStatus
      steps: string | null
      attachments: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      requesterId: number
    }, ExtArgs["result"]["sop"]>
    composites: {}
  }

  type SopGetPayload<S extends boolean | null | undefined | SopDefaultArgs> = $Result.GetResult<Prisma.$SopPayload, S>

  type SopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SopCountAggregateInputType | true
    }

  export interface SopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sop'], meta: { name: 'Sop' } }
    /**
     * Find zero or one Sop that matches the filter.
     * @param {SopFindUniqueArgs} args - Arguments to find a Sop
     * @example
     * // Get one Sop
     * const sop = await prisma.sop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SopFindUniqueArgs>(args: SelectSubset<T, SopFindUniqueArgs<ExtArgs>>): Prisma__SopClient<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SopFindUniqueOrThrowArgs} args - Arguments to find a Sop
     * @example
     * // Get one Sop
     * const sop = await prisma.sop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SopFindUniqueOrThrowArgs>(args: SelectSubset<T, SopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SopClient<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopFindFirstArgs} args - Arguments to find a Sop
     * @example
     * // Get one Sop
     * const sop = await prisma.sop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SopFindFirstArgs>(args?: SelectSubset<T, SopFindFirstArgs<ExtArgs>>): Prisma__SopClient<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopFindFirstOrThrowArgs} args - Arguments to find a Sop
     * @example
     * // Get one Sop
     * const sop = await prisma.sop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SopFindFirstOrThrowArgs>(args?: SelectSubset<T, SopFindFirstOrThrowArgs<ExtArgs>>): Prisma__SopClient<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sops
     * const sops = await prisma.sop.findMany()
     * 
     * // Get first 10 Sops
     * const sops = await prisma.sop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sopWithIdOnly = await prisma.sop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SopFindManyArgs>(args?: SelectSubset<T, SopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sop.
     * @param {SopCreateArgs} args - Arguments to create a Sop.
     * @example
     * // Create one Sop
     * const Sop = await prisma.sop.create({
     *   data: {
     *     // ... data to create a Sop
     *   }
     * })
     * 
     */
    create<T extends SopCreateArgs>(args: SelectSubset<T, SopCreateArgs<ExtArgs>>): Prisma__SopClient<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sops.
     * @param {SopCreateManyArgs} args - Arguments to create many Sops.
     * @example
     * // Create many Sops
     * const sop = await prisma.sop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SopCreateManyArgs>(args?: SelectSubset<T, SopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sops and returns the data saved in the database.
     * @param {SopCreateManyAndReturnArgs} args - Arguments to create many Sops.
     * @example
     * // Create many Sops
     * const sop = await prisma.sop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sops and only return the `id`
     * const sopWithIdOnly = await prisma.sop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SopCreateManyAndReturnArgs>(args?: SelectSubset<T, SopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sop.
     * @param {SopDeleteArgs} args - Arguments to delete one Sop.
     * @example
     * // Delete one Sop
     * const Sop = await prisma.sop.delete({
     *   where: {
     *     // ... filter to delete one Sop
     *   }
     * })
     * 
     */
    delete<T extends SopDeleteArgs>(args: SelectSubset<T, SopDeleteArgs<ExtArgs>>): Prisma__SopClient<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sop.
     * @param {SopUpdateArgs} args - Arguments to update one Sop.
     * @example
     * // Update one Sop
     * const sop = await prisma.sop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SopUpdateArgs>(args: SelectSubset<T, SopUpdateArgs<ExtArgs>>): Prisma__SopClient<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sops.
     * @param {SopDeleteManyArgs} args - Arguments to filter Sops to delete.
     * @example
     * // Delete a few Sops
     * const { count } = await prisma.sop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SopDeleteManyArgs>(args?: SelectSubset<T, SopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sops
     * const sop = await prisma.sop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SopUpdateManyArgs>(args: SelectSubset<T, SopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sops and returns the data updated in the database.
     * @param {SopUpdateManyAndReturnArgs} args - Arguments to update many Sops.
     * @example
     * // Update many Sops
     * const sop = await prisma.sop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sops and only return the `id`
     * const sopWithIdOnly = await prisma.sop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SopUpdateManyAndReturnArgs>(args: SelectSubset<T, SopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sop.
     * @param {SopUpsertArgs} args - Arguments to update or create a Sop.
     * @example
     * // Update or create a Sop
     * const sop = await prisma.sop.upsert({
     *   create: {
     *     // ... data to create a Sop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sop we want to update
     *   }
     * })
     */
    upsert<T extends SopUpsertArgs>(args: SelectSubset<T, SopUpsertArgs<ExtArgs>>): Prisma__SopClient<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopCountArgs} args - Arguments to filter Sops to count.
     * @example
     * // Count the number of Sops
     * const count = await prisma.sop.count({
     *   where: {
     *     // ... the filter for the Sops we want to count
     *   }
     * })
    **/
    count<T extends SopCountArgs>(
      args?: Subset<T, SopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SopAggregateArgs>(args: Subset<T, SopAggregateArgs>): Prisma.PrismaPromise<GetSopAggregateType<T>>

    /**
     * Group by Sop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SopGroupByArgs} args - Group by arguments.
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
      T extends SopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SopGroupByArgs['orderBy'] }
        : { orderBy?: SopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sop model
   */
  readonly fields: SopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvals<T extends Sop$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, Sop$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sop model
   */
  interface SopFieldRefs {
    readonly id: FieldRef<"Sop", 'Int'>
    readonly title: FieldRef<"Sop", 'String'>
    readonly department: FieldRef<"Sop", 'Department'>
    readonly version: FieldRef<"Sop", 'String'>
    readonly status: FieldRef<"Sop", 'SopStatus'>
    readonly steps: FieldRef<"Sop", 'String'>
    readonly attachments: FieldRef<"Sop", 'String'>
    readonly notes: FieldRef<"Sop", 'String'>
    readonly createdAt: FieldRef<"Sop", 'DateTime'>
    readonly updatedAt: FieldRef<"Sop", 'DateTime'>
    readonly requesterId: FieldRef<"Sop", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sop findUnique
   */
  export type SopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
    /**
     * Filter, which Sop to fetch.
     */
    where: SopWhereUniqueInput
  }

  /**
   * Sop findUniqueOrThrow
   */
  export type SopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
    /**
     * Filter, which Sop to fetch.
     */
    where: SopWhereUniqueInput
  }

  /**
   * Sop findFirst
   */
  export type SopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
    /**
     * Filter, which Sop to fetch.
     */
    where?: SopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sops to fetch.
     */
    orderBy?: SopOrderByWithRelationInput | SopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sops.
     */
    cursor?: SopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sops.
     */
    distinct?: SopScalarFieldEnum | SopScalarFieldEnum[]
  }

  /**
   * Sop findFirstOrThrow
   */
  export type SopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
    /**
     * Filter, which Sop to fetch.
     */
    where?: SopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sops to fetch.
     */
    orderBy?: SopOrderByWithRelationInput | SopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sops.
     */
    cursor?: SopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sops.
     */
    distinct?: SopScalarFieldEnum | SopScalarFieldEnum[]
  }

  /**
   * Sop findMany
   */
  export type SopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
    /**
     * Filter, which Sops to fetch.
     */
    where?: SopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sops to fetch.
     */
    orderBy?: SopOrderByWithRelationInput | SopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sops.
     */
    cursor?: SopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sops.
     */
    skip?: number
    distinct?: SopScalarFieldEnum | SopScalarFieldEnum[]
  }

  /**
   * Sop create
   */
  export type SopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
    /**
     * The data needed to create a Sop.
     */
    data: XOR<SopCreateInput, SopUncheckedCreateInput>
  }

  /**
   * Sop createMany
   */
  export type SopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sops.
     */
    data: SopCreateManyInput | SopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sop createManyAndReturn
   */
  export type SopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * The data used to create many Sops.
     */
    data: SopCreateManyInput | SopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sop update
   */
  export type SopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
    /**
     * The data needed to update a Sop.
     */
    data: XOR<SopUpdateInput, SopUncheckedUpdateInput>
    /**
     * Choose, which Sop to update.
     */
    where: SopWhereUniqueInput
  }

  /**
   * Sop updateMany
   */
  export type SopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sops.
     */
    data: XOR<SopUpdateManyMutationInput, SopUncheckedUpdateManyInput>
    /**
     * Filter which Sops to update
     */
    where?: SopWhereInput
    /**
     * Limit how many Sops to update.
     */
    limit?: number
  }

  /**
   * Sop updateManyAndReturn
   */
  export type SopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * The data used to update Sops.
     */
    data: XOR<SopUpdateManyMutationInput, SopUncheckedUpdateManyInput>
    /**
     * Filter which Sops to update
     */
    where?: SopWhereInput
    /**
     * Limit how many Sops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sop upsert
   */
  export type SopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
    /**
     * The filter to search for the Sop to update in case it exists.
     */
    where: SopWhereUniqueInput
    /**
     * In case the Sop found by the `where` argument doesn't exist, create a new Sop with this data.
     */
    create: XOR<SopCreateInput, SopUncheckedCreateInput>
    /**
     * In case the Sop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SopUpdateInput, SopUncheckedUpdateInput>
  }

  /**
   * Sop delete
   */
  export type SopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
    /**
     * Filter which Sop to delete.
     */
    where: SopWhereUniqueInput
  }

  /**
   * Sop deleteMany
   */
  export type SopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sops to delete
     */
    where?: SopWhereInput
    /**
     * Limit how many Sops to delete.
     */
    limit?: number
  }

  /**
   * Sop.approvals
   */
  export type Sop$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    cursor?: ApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Sop without action
   */
  export type SopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sop
     */
    select?: SopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sop
     */
    omit?: SopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SopInclude<ExtArgs> | null
  }


  /**
   * Model Approval
   */

  export type AggregateApproval = {
    _count: ApprovalCountAggregateOutputType | null
    _avg: ApprovalAvgAggregateOutputType | null
    _sum: ApprovalSumAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  export type ApprovalAvgAggregateOutputType = {
    id: number | null
    sopId: number | null
    approverId: number | null
  }

  export type ApprovalSumAggregateOutputType = {
    id: number | null
    sopId: number | null
    approverId: number | null
  }

  export type ApprovalMinAggregateOutputType = {
    id: number | null
    sopId: number | null
    approverId: number | null
    role: $Enums.Role | null
    status: string | null
    signature: string | null
    comments: string | null
    timestamp: Date | null
  }

  export type ApprovalMaxAggregateOutputType = {
    id: number | null
    sopId: number | null
    approverId: number | null
    role: $Enums.Role | null
    status: string | null
    signature: string | null
    comments: string | null
    timestamp: Date | null
  }

  export type ApprovalCountAggregateOutputType = {
    id: number
    sopId: number
    approverId: number
    role: number
    status: number
    signature: number
    comments: number
    timestamp: number
    _all: number
  }


  export type ApprovalAvgAggregateInputType = {
    id?: true
    sopId?: true
    approverId?: true
  }

  export type ApprovalSumAggregateInputType = {
    id?: true
    sopId?: true
    approverId?: true
  }

  export type ApprovalMinAggregateInputType = {
    id?: true
    sopId?: true
    approverId?: true
    role?: true
    status?: true
    signature?: true
    comments?: true
    timestamp?: true
  }

  export type ApprovalMaxAggregateInputType = {
    id?: true
    sopId?: true
    approverId?: true
    role?: true
    status?: true
    signature?: true
    comments?: true
    timestamp?: true
  }

  export type ApprovalCountAggregateInputType = {
    id?: true
    sopId?: true
    approverId?: true
    role?: true
    status?: true
    signature?: true
    comments?: true
    timestamp?: true
    _all?: true
  }

  export type ApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approval to aggregate.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Approvals
    **/
    _count?: true | ApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalMaxAggregateInputType
  }

  export type GetApprovalAggregateType<T extends ApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApproval[P]>
      : GetScalarType<T[P], AggregateApproval[P]>
  }




  export type ApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithAggregationInput | ApprovalOrderByWithAggregationInput[]
    by: ApprovalScalarFieldEnum[] | ApprovalScalarFieldEnum
    having?: ApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalCountAggregateInputType | true
    _avg?: ApprovalAvgAggregateInputType
    _sum?: ApprovalSumAggregateInputType
    _min?: ApprovalMinAggregateInputType
    _max?: ApprovalMaxAggregateInputType
  }

  export type ApprovalGroupByOutputType = {
    id: number
    sopId: number
    approverId: number
    role: $Enums.Role
    status: string
    signature: string | null
    comments: string | null
    timestamp: Date
    _count: ApprovalCountAggregateOutputType | null
    _avg: ApprovalAvgAggregateOutputType | null
    _sum: ApprovalSumAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  type GetApprovalGroupByPayload<T extends ApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sopId?: boolean
    approverId?: boolean
    role?: boolean
    status?: boolean
    signature?: boolean
    comments?: boolean
    timestamp?: boolean
    sop?: boolean | SopDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sopId?: boolean
    approverId?: boolean
    role?: boolean
    status?: boolean
    signature?: boolean
    comments?: boolean
    timestamp?: boolean
    sop?: boolean | SopDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sopId?: boolean
    approverId?: boolean
    role?: boolean
    status?: boolean
    signature?: boolean
    comments?: boolean
    timestamp?: boolean
    sop?: boolean | SopDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectScalar = {
    id?: boolean
    sopId?: boolean
    approverId?: boolean
    role?: boolean
    status?: boolean
    signature?: boolean
    comments?: boolean
    timestamp?: boolean
  }

  export type ApprovalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sopId" | "approverId" | "role" | "status" | "signature" | "comments" | "timestamp", ExtArgs["result"]["approval"]>
  export type ApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sop?: boolean | SopDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sop?: boolean | SopDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sop?: boolean | SopDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Approval"
    objects: {
      sop: Prisma.$SopPayload<ExtArgs>
      approver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sopId: number
      approverId: number
      role: $Enums.Role
      status: string
      signature: string | null
      comments: string | null
      timestamp: Date
    }, ExtArgs["result"]["approval"]>
    composites: {}
  }

  type ApprovalGetPayload<S extends boolean | null | undefined | ApprovalDefaultArgs> = $Result.GetResult<Prisma.$ApprovalPayload, S>

  type ApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalCountAggregateInputType | true
    }

  export interface ApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Approval'], meta: { name: 'Approval' } }
    /**
     * Find zero or one Approval that matches the filter.
     * @param {ApprovalFindUniqueArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalFindUniqueArgs>(args: SelectSubset<T, ApprovalFindUniqueArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Approval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalFindUniqueOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Approval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalFindFirstArgs>(args?: SelectSubset<T, ApprovalFindFirstArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Approval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Approvals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Approvals
     * const approvals = await prisma.approval.findMany()
     * 
     * // Get first 10 Approvals
     * const approvals = await prisma.approval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalWithIdOnly = await prisma.approval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalFindManyArgs>(args?: SelectSubset<T, ApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Approval.
     * @param {ApprovalCreateArgs} args - Arguments to create a Approval.
     * @example
     * // Create one Approval
     * const Approval = await prisma.approval.create({
     *   data: {
     *     // ... data to create a Approval
     *   }
     * })
     * 
     */
    create<T extends ApprovalCreateArgs>(args: SelectSubset<T, ApprovalCreateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Approvals.
     * @param {ApprovalCreateManyArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalCreateManyArgs>(args?: SelectSubset<T, ApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Approvals and returns the data saved in the database.
     * @param {ApprovalCreateManyAndReturnArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Approvals and only return the `id`
     * const approvalWithIdOnly = await prisma.approval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Approval.
     * @param {ApprovalDeleteArgs} args - Arguments to delete one Approval.
     * @example
     * // Delete one Approval
     * const Approval = await prisma.approval.delete({
     *   where: {
     *     // ... filter to delete one Approval
     *   }
     * })
     * 
     */
    delete<T extends ApprovalDeleteArgs>(args: SelectSubset<T, ApprovalDeleteArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Approval.
     * @param {ApprovalUpdateArgs} args - Arguments to update one Approval.
     * @example
     * // Update one Approval
     * const approval = await prisma.approval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalUpdateArgs>(args: SelectSubset<T, ApprovalUpdateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Approvals.
     * @param {ApprovalDeleteManyArgs} args - Arguments to filter Approvals to delete.
     * @example
     * // Delete a few Approvals
     * const { count } = await prisma.approval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalDeleteManyArgs>(args?: SelectSubset<T, ApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Approvals
     * const approval = await prisma.approval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalUpdateManyArgs>(args: SelectSubset<T, ApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approvals and returns the data updated in the database.
     * @param {ApprovalUpdateManyAndReturnArgs} args - Arguments to update many Approvals.
     * @example
     * // Update many Approvals
     * const approval = await prisma.approval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Approvals and only return the `id`
     * const approvalWithIdOnly = await prisma.approval.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApprovalUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Approval.
     * @param {ApprovalUpsertArgs} args - Arguments to update or create a Approval.
     * @example
     * // Update or create a Approval
     * const approval = await prisma.approval.upsert({
     *   create: {
     *     // ... data to create a Approval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Approval we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalUpsertArgs>(args: SelectSubset<T, ApprovalUpsertArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalCountArgs} args - Arguments to filter Approvals to count.
     * @example
     * // Count the number of Approvals
     * const count = await prisma.approval.count({
     *   where: {
     *     // ... the filter for the Approvals we want to count
     *   }
     * })
    **/
    count<T extends ApprovalCountArgs>(
      args?: Subset<T, ApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApprovalAggregateArgs>(args: Subset<T, ApprovalAggregateArgs>): Prisma.PrismaPromise<GetApprovalAggregateType<T>>

    /**
     * Group by Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalGroupByArgs} args - Group by arguments.
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
      T extends ApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Approval model
   */
  readonly fields: ApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Approval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sop<T extends SopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SopDefaultArgs<ExtArgs>>): Prisma__SopClient<$Result.GetResult<Prisma.$SopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Approval model
   */
  interface ApprovalFieldRefs {
    readonly id: FieldRef<"Approval", 'Int'>
    readonly sopId: FieldRef<"Approval", 'Int'>
    readonly approverId: FieldRef<"Approval", 'Int'>
    readonly role: FieldRef<"Approval", 'Role'>
    readonly status: FieldRef<"Approval", 'String'>
    readonly signature: FieldRef<"Approval", 'String'>
    readonly comments: FieldRef<"Approval", 'String'>
    readonly timestamp: FieldRef<"Approval", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Approval findUnique
   */
  export type ApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findUniqueOrThrow
   */
  export type ApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findFirst
   */
  export type ApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findFirstOrThrow
   */
  export type ApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findMany
   */
  export type ApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approvals to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval create
   */
  export type ApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a Approval.
     */
    data: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
  }

  /**
   * Approval createMany
   */
  export type ApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Approval createManyAndReturn
   */
  export type ApprovalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Approval update
   */
  export type ApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a Approval.
     */
    data: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
    /**
     * Choose, which Approval to update.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval updateMany
   */
  export type ApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Approvals.
     */
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyInput>
    /**
     * Filter which Approvals to update
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to update.
     */
    limit?: number
  }

  /**
   * Approval updateManyAndReturn
   */
  export type ApprovalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * The data used to update Approvals.
     */
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyInput>
    /**
     * Filter which Approvals to update
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Approval upsert
   */
  export type ApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the Approval to update in case it exists.
     */
    where: ApprovalWhereUniqueInput
    /**
     * In case the Approval found by the `where` argument doesn't exist, create a new Approval with this data.
     */
    create: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
    /**
     * In case the Approval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
  }

  /**
   * Approval delete
   */
  export type ApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter which Approval to delete.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval deleteMany
   */
  export type ApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approvals to delete
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to delete.
     */
    limit?: number
  }

  /**
   * Approval without action
   */
  export type ApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SopScalarFieldEnum: {
    id: 'id',
    title: 'title',
    department: 'department',
    version: 'version',
    status: 'status',
    steps: 'steps',
    attachments: 'attachments',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    requesterId: 'requesterId'
  };

  export type SopScalarFieldEnum = (typeof SopScalarFieldEnum)[keyof typeof SopScalarFieldEnum]


  export const ApprovalScalarFieldEnum: {
    id: 'id',
    sopId: 'sopId',
    approverId: 'approverId',
    role: 'role',
    status: 'status',
    signature: 'signature',
    comments: 'comments',
    timestamp: 'timestamp'
  };

  export type ApprovalScalarFieldEnum = (typeof ApprovalScalarFieldEnum)[keyof typeof ApprovalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Department'
   */
  export type EnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department'>
    


  /**
   * Reference to a field of type 'Department[]'
   */
  export type ListEnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SopStatus'
   */
  export type EnumSopStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SopStatus'>
    


  /**
   * Reference to a field of type 'SopStatus[]'
   */
  export type ListEnumSopStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SopStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    department?: EnumDepartmentFilter<"User"> | $Enums.Department
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdSops?: SopListRelationFilter
    approvals?: ApprovalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdSops?: SopOrderByRelationAggregateInput
    approvals?: ApprovalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    department?: EnumDepartmentFilter<"User"> | $Enums.Department
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdSops?: SopListRelationFilter
    approvals?: ApprovalListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    department?: EnumDepartmentWithAggregatesFilter<"User"> | $Enums.Department
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SopWhereInput = {
    AND?: SopWhereInput | SopWhereInput[]
    OR?: SopWhereInput[]
    NOT?: SopWhereInput | SopWhereInput[]
    id?: IntFilter<"Sop"> | number
    title?: StringFilter<"Sop"> | string
    department?: EnumDepartmentFilter<"Sop"> | $Enums.Department
    version?: StringFilter<"Sop"> | string
    status?: EnumSopStatusFilter<"Sop"> | $Enums.SopStatus
    steps?: StringNullableFilter<"Sop"> | string | null
    attachments?: StringNullableFilter<"Sop"> | string | null
    notes?: StringNullableFilter<"Sop"> | string | null
    createdAt?: DateTimeFilter<"Sop"> | Date | string
    updatedAt?: DateTimeFilter<"Sop"> | Date | string
    requesterId?: IntFilter<"Sop"> | number
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvals?: ApprovalListRelationFilter
  }

  export type SopOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    version?: SortOrder
    status?: SortOrder
    steps?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    requester?: UserOrderByWithRelationInput
    approvals?: ApprovalOrderByRelationAggregateInput
  }

  export type SopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SopWhereInput | SopWhereInput[]
    OR?: SopWhereInput[]
    NOT?: SopWhereInput | SopWhereInput[]
    title?: StringFilter<"Sop"> | string
    department?: EnumDepartmentFilter<"Sop"> | $Enums.Department
    version?: StringFilter<"Sop"> | string
    status?: EnumSopStatusFilter<"Sop"> | $Enums.SopStatus
    steps?: StringNullableFilter<"Sop"> | string | null
    attachments?: StringNullableFilter<"Sop"> | string | null
    notes?: StringNullableFilter<"Sop"> | string | null
    createdAt?: DateTimeFilter<"Sop"> | Date | string
    updatedAt?: DateTimeFilter<"Sop"> | Date | string
    requesterId?: IntFilter<"Sop"> | number
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvals?: ApprovalListRelationFilter
  }, "id">

  export type SopOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    version?: SortOrder
    status?: SortOrder
    steps?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    _count?: SopCountOrderByAggregateInput
    _avg?: SopAvgOrderByAggregateInput
    _max?: SopMaxOrderByAggregateInput
    _min?: SopMinOrderByAggregateInput
    _sum?: SopSumOrderByAggregateInput
  }

  export type SopScalarWhereWithAggregatesInput = {
    AND?: SopScalarWhereWithAggregatesInput | SopScalarWhereWithAggregatesInput[]
    OR?: SopScalarWhereWithAggregatesInput[]
    NOT?: SopScalarWhereWithAggregatesInput | SopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sop"> | number
    title?: StringWithAggregatesFilter<"Sop"> | string
    department?: EnumDepartmentWithAggregatesFilter<"Sop"> | $Enums.Department
    version?: StringWithAggregatesFilter<"Sop"> | string
    status?: EnumSopStatusWithAggregatesFilter<"Sop"> | $Enums.SopStatus
    steps?: StringNullableWithAggregatesFilter<"Sop"> | string | null
    attachments?: StringNullableWithAggregatesFilter<"Sop"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Sop"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sop"> | Date | string
    requesterId?: IntWithAggregatesFilter<"Sop"> | number
  }

  export type ApprovalWhereInput = {
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    id?: IntFilter<"Approval"> | number
    sopId?: IntFilter<"Approval"> | number
    approverId?: IntFilter<"Approval"> | number
    role?: EnumRoleFilter<"Approval"> | $Enums.Role
    status?: StringFilter<"Approval"> | string
    signature?: StringNullableFilter<"Approval"> | string | null
    comments?: StringNullableFilter<"Approval"> | string | null
    timestamp?: DateTimeFilter<"Approval"> | Date | string
    sop?: XOR<SopScalarRelationFilter, SopWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApprovalOrderByWithRelationInput = {
    id?: SortOrder
    sopId?: SortOrder
    approverId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    signature?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    sop?: SopOrderByWithRelationInput
    approver?: UserOrderByWithRelationInput
  }

  export type ApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    sopId?: IntFilter<"Approval"> | number
    approverId?: IntFilter<"Approval"> | number
    role?: EnumRoleFilter<"Approval"> | $Enums.Role
    status?: StringFilter<"Approval"> | string
    signature?: StringNullableFilter<"Approval"> | string | null
    comments?: StringNullableFilter<"Approval"> | string | null
    timestamp?: DateTimeFilter<"Approval"> | Date | string
    sop?: XOR<SopScalarRelationFilter, SopWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    sopId?: SortOrder
    approverId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    signature?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: ApprovalCountOrderByAggregateInput
    _avg?: ApprovalAvgOrderByAggregateInput
    _max?: ApprovalMaxOrderByAggregateInput
    _min?: ApprovalMinOrderByAggregateInput
    _sum?: ApprovalSumOrderByAggregateInput
  }

  export type ApprovalScalarWhereWithAggregatesInput = {
    AND?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    OR?: ApprovalScalarWhereWithAggregatesInput[]
    NOT?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Approval"> | number
    sopId?: IntWithAggregatesFilter<"Approval"> | number
    approverId?: IntWithAggregatesFilter<"Approval"> | number
    role?: EnumRoleWithAggregatesFilter<"Approval"> | $Enums.Role
    status?: StringWithAggregatesFilter<"Approval"> | string
    signature?: StringNullableWithAggregatesFilter<"Approval"> | string | null
    comments?: StringNullableWithAggregatesFilter<"Approval"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Approval"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    department: $Enums.Department
    createdAt?: Date | string
    updatedAt?: Date | string
    createdSops?: SopCreateNestedManyWithoutRequesterInput
    approvals?: ApprovalCreateNestedManyWithoutApproverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    department: $Enums.Department
    createdAt?: Date | string
    updatedAt?: Date | string
    createdSops?: SopUncheckedCreateNestedManyWithoutRequesterInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdSops?: SopUpdateManyWithoutRequesterNestedInput
    approvals?: ApprovalUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdSops?: SopUncheckedUpdateManyWithoutRequesterNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    department: $Enums.Department
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SopCreateInput = {
    title: string
    department: $Enums.Department
    version?: string
    status?: $Enums.SopStatus
    steps?: string | null
    attachments?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutCreatedSopsInput
    approvals?: ApprovalCreateNestedManyWithoutSopInput
  }

  export type SopUncheckedCreateInput = {
    id?: number
    title: string
    department: $Enums.Department
    version?: string
    status?: $Enums.SopStatus
    steps?: string | null
    attachments?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: number
    approvals?: ApprovalUncheckedCreateNestedManyWithoutSopInput
  }

  export type SopUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    version?: StringFieldUpdateOperationsInput | string
    status?: EnumSopStatusFieldUpdateOperationsInput | $Enums.SopStatus
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutCreatedSopsNestedInput
    approvals?: ApprovalUpdateManyWithoutSopNestedInput
  }

  export type SopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    version?: StringFieldUpdateOperationsInput | string
    status?: EnumSopStatusFieldUpdateOperationsInput | $Enums.SopStatus
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: IntFieldUpdateOperationsInput | number
    approvals?: ApprovalUncheckedUpdateManyWithoutSopNestedInput
  }

  export type SopCreateManyInput = {
    id?: number
    title: string
    department: $Enums.Department
    version?: string
    status?: $Enums.SopStatus
    steps?: string | null
    attachments?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: number
  }

  export type SopUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    version?: StringFieldUpdateOperationsInput | string
    status?: EnumSopStatusFieldUpdateOperationsInput | $Enums.SopStatus
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    version?: StringFieldUpdateOperationsInput | string
    status?: EnumSopStatusFieldUpdateOperationsInput | $Enums.SopStatus
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: IntFieldUpdateOperationsInput | number
  }

  export type ApprovalCreateInput = {
    role: $Enums.Role
    status: string
    signature?: string | null
    comments?: string | null
    timestamp?: Date | string
    sop: SopCreateNestedOneWithoutApprovalsInput
    approver: UserCreateNestedOneWithoutApprovalsInput
  }

  export type ApprovalUncheckedCreateInput = {
    id?: number
    sopId: number
    approverId: number
    role: $Enums.Role
    status: string
    signature?: string | null
    comments?: string | null
    timestamp?: Date | string
  }

  export type ApprovalUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    sop?: SopUpdateOneRequiredWithoutApprovalsNestedInput
    approver?: UserUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ApprovalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sopId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalCreateManyInput = {
    id?: number
    sopId: number
    approverId: number
    role: $Enums.Role
    status: string
    signature?: string | null
    comments?: string | null
    timestamp?: Date | string
  }

  export type ApprovalUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sopId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SopListRelationFilter = {
    every?: SopWhereInput
    some?: SopWhereInput
    none?: SopWhereInput
  }

  export type ApprovalListRelationFilter = {
    every?: ApprovalWhereInput
    some?: ApprovalWhereInput
    none?: ApprovalWhereInput
  }

  export type SopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSopStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SopStatus | EnumSopStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SopStatus[] | ListEnumSopStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SopStatus[] | ListEnumSopStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSopStatusFilter<$PrismaModel> | $Enums.SopStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SopCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    version?: SortOrder
    status?: SortOrder
    steps?: SortOrder
    attachments?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
  }

  export type SopAvgOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
  }

  export type SopMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    version?: SortOrder
    status?: SortOrder
    steps?: SortOrder
    attachments?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
  }

  export type SopMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    version?: SortOrder
    status?: SortOrder
    steps?: SortOrder
    attachments?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
  }

  export type SopSumOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
  }

  export type EnumSopStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SopStatus | EnumSopStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SopStatus[] | ListEnumSopStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SopStatus[] | ListEnumSopStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSopStatusWithAggregatesFilter<$PrismaModel> | $Enums.SopStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSopStatusFilter<$PrismaModel>
    _max?: NestedEnumSopStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SopScalarRelationFilter = {
    is?: SopWhereInput
    isNot?: SopWhereInput
  }

  export type ApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    sopId?: SortOrder
    approverId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    signature?: SortOrder
    comments?: SortOrder
    timestamp?: SortOrder
  }

  export type ApprovalAvgOrderByAggregateInput = {
    id?: SortOrder
    sopId?: SortOrder
    approverId?: SortOrder
  }

  export type ApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    sopId?: SortOrder
    approverId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    signature?: SortOrder
    comments?: SortOrder
    timestamp?: SortOrder
  }

  export type ApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    sopId?: SortOrder
    approverId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    signature?: SortOrder
    comments?: SortOrder
    timestamp?: SortOrder
  }

  export type ApprovalSumOrderByAggregateInput = {
    id?: SortOrder
    sopId?: SortOrder
    approverId?: SortOrder
  }

  export type SopCreateNestedManyWithoutRequesterInput = {
    create?: XOR<SopCreateWithoutRequesterInput, SopUncheckedCreateWithoutRequesterInput> | SopCreateWithoutRequesterInput[] | SopUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SopCreateOrConnectWithoutRequesterInput | SopCreateOrConnectWithoutRequesterInput[]
    createMany?: SopCreateManyRequesterInputEnvelope
    connect?: SopWhereUniqueInput | SopWhereUniqueInput[]
  }

  export type ApprovalCreateNestedManyWithoutApproverInput = {
    create?: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput> | ApprovalCreateWithoutApproverInput[] | ApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApproverInput | ApprovalCreateOrConnectWithoutApproverInput[]
    createMany?: ApprovalCreateManyApproverInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type SopUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<SopCreateWithoutRequesterInput, SopUncheckedCreateWithoutRequesterInput> | SopCreateWithoutRequesterInput[] | SopUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SopCreateOrConnectWithoutRequesterInput | SopCreateOrConnectWithoutRequesterInput[]
    createMany?: SopCreateManyRequesterInputEnvelope
    connect?: SopWhereUniqueInput | SopWhereUniqueInput[]
  }

  export type ApprovalUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput> | ApprovalCreateWithoutApproverInput[] | ApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApproverInput | ApprovalCreateOrConnectWithoutApproverInput[]
    createMany?: ApprovalCreateManyApproverInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumDepartmentFieldUpdateOperationsInput = {
    set?: $Enums.Department
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SopUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<SopCreateWithoutRequesterInput, SopUncheckedCreateWithoutRequesterInput> | SopCreateWithoutRequesterInput[] | SopUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SopCreateOrConnectWithoutRequesterInput | SopCreateOrConnectWithoutRequesterInput[]
    upsert?: SopUpsertWithWhereUniqueWithoutRequesterInput | SopUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: SopCreateManyRequesterInputEnvelope
    set?: SopWhereUniqueInput | SopWhereUniqueInput[]
    disconnect?: SopWhereUniqueInput | SopWhereUniqueInput[]
    delete?: SopWhereUniqueInput | SopWhereUniqueInput[]
    connect?: SopWhereUniqueInput | SopWhereUniqueInput[]
    update?: SopUpdateWithWhereUniqueWithoutRequesterInput | SopUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: SopUpdateManyWithWhereWithoutRequesterInput | SopUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: SopScalarWhereInput | SopScalarWhereInput[]
  }

  export type ApprovalUpdateManyWithoutApproverNestedInput = {
    create?: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput> | ApprovalCreateWithoutApproverInput[] | ApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApproverInput | ApprovalCreateOrConnectWithoutApproverInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutApproverInput | ApprovalUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: ApprovalCreateManyApproverInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutApproverInput | ApprovalUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutApproverInput | ApprovalUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SopUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<SopCreateWithoutRequesterInput, SopUncheckedCreateWithoutRequesterInput> | SopCreateWithoutRequesterInput[] | SopUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SopCreateOrConnectWithoutRequesterInput | SopCreateOrConnectWithoutRequesterInput[]
    upsert?: SopUpsertWithWhereUniqueWithoutRequesterInput | SopUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: SopCreateManyRequesterInputEnvelope
    set?: SopWhereUniqueInput | SopWhereUniqueInput[]
    disconnect?: SopWhereUniqueInput | SopWhereUniqueInput[]
    delete?: SopWhereUniqueInput | SopWhereUniqueInput[]
    connect?: SopWhereUniqueInput | SopWhereUniqueInput[]
    update?: SopUpdateWithWhereUniqueWithoutRequesterInput | SopUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: SopUpdateManyWithWhereWithoutRequesterInput | SopUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: SopScalarWhereInput | SopScalarWhereInput[]
  }

  export type ApprovalUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput> | ApprovalCreateWithoutApproverInput[] | ApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutApproverInput | ApprovalCreateOrConnectWithoutApproverInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutApproverInput | ApprovalUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: ApprovalCreateManyApproverInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutApproverInput | ApprovalUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutApproverInput | ApprovalUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedSopsInput = {
    create?: XOR<UserCreateWithoutCreatedSopsInput, UserUncheckedCreateWithoutCreatedSopsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSopsInput
    connect?: UserWhereUniqueInput
  }

  export type ApprovalCreateNestedManyWithoutSopInput = {
    create?: XOR<ApprovalCreateWithoutSopInput, ApprovalUncheckedCreateWithoutSopInput> | ApprovalCreateWithoutSopInput[] | ApprovalUncheckedCreateWithoutSopInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutSopInput | ApprovalCreateOrConnectWithoutSopInput[]
    createMany?: ApprovalCreateManySopInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type ApprovalUncheckedCreateNestedManyWithoutSopInput = {
    create?: XOR<ApprovalCreateWithoutSopInput, ApprovalUncheckedCreateWithoutSopInput> | ApprovalCreateWithoutSopInput[] | ApprovalUncheckedCreateWithoutSopInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutSopInput | ApprovalCreateOrConnectWithoutSopInput[]
    createMany?: ApprovalCreateManySopInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type EnumSopStatusFieldUpdateOperationsInput = {
    set?: $Enums.SopStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutCreatedSopsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedSopsInput, UserUncheckedCreateWithoutCreatedSopsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSopsInput
    upsert?: UserUpsertWithoutCreatedSopsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedSopsInput, UserUpdateWithoutCreatedSopsInput>, UserUncheckedUpdateWithoutCreatedSopsInput>
  }

  export type ApprovalUpdateManyWithoutSopNestedInput = {
    create?: XOR<ApprovalCreateWithoutSopInput, ApprovalUncheckedCreateWithoutSopInput> | ApprovalCreateWithoutSopInput[] | ApprovalUncheckedCreateWithoutSopInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutSopInput | ApprovalCreateOrConnectWithoutSopInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutSopInput | ApprovalUpsertWithWhereUniqueWithoutSopInput[]
    createMany?: ApprovalCreateManySopInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutSopInput | ApprovalUpdateWithWhereUniqueWithoutSopInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutSopInput | ApprovalUpdateManyWithWhereWithoutSopInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type ApprovalUncheckedUpdateManyWithoutSopNestedInput = {
    create?: XOR<ApprovalCreateWithoutSopInput, ApprovalUncheckedCreateWithoutSopInput> | ApprovalCreateWithoutSopInput[] | ApprovalUncheckedCreateWithoutSopInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutSopInput | ApprovalCreateOrConnectWithoutSopInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutSopInput | ApprovalUpsertWithWhereUniqueWithoutSopInput[]
    createMany?: ApprovalCreateManySopInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutSopInput | ApprovalUpdateWithWhereUniqueWithoutSopInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutSopInput | ApprovalUpdateManyWithWhereWithoutSopInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type SopCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<SopCreateWithoutApprovalsInput, SopUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: SopCreateOrConnectWithoutApprovalsInput
    connect?: SopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    connect?: UserWhereUniqueInput
  }

  export type SopUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<SopCreateWithoutApprovalsInput, SopUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: SopCreateOrConnectWithoutApprovalsInput
    upsert?: SopUpsertWithoutApprovalsInput
    connect?: SopWhereUniqueInput
    update?: XOR<XOR<SopUpdateToOneWithWhereWithoutApprovalsInput, SopUpdateWithoutApprovalsInput>, SopUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    upsert?: UserUpsertWithoutApprovalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovalsInput, UserUpdateWithoutApprovalsInput>, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSopStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SopStatus | EnumSopStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SopStatus[] | ListEnumSopStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SopStatus[] | ListEnumSopStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSopStatusFilter<$PrismaModel> | $Enums.SopStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSopStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SopStatus | EnumSopStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SopStatus[] | ListEnumSopStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SopStatus[] | ListEnumSopStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSopStatusWithAggregatesFilter<$PrismaModel> | $Enums.SopStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSopStatusFilter<$PrismaModel>
    _max?: NestedEnumSopStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SopCreateWithoutRequesterInput = {
    title: string
    department: $Enums.Department
    version?: string
    status?: $Enums.SopStatus
    steps?: string | null
    attachments?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: ApprovalCreateNestedManyWithoutSopInput
  }

  export type SopUncheckedCreateWithoutRequesterInput = {
    id?: number
    title: string
    department: $Enums.Department
    version?: string
    status?: $Enums.SopStatus
    steps?: string | null
    attachments?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: ApprovalUncheckedCreateNestedManyWithoutSopInput
  }

  export type SopCreateOrConnectWithoutRequesterInput = {
    where: SopWhereUniqueInput
    create: XOR<SopCreateWithoutRequesterInput, SopUncheckedCreateWithoutRequesterInput>
  }

  export type SopCreateManyRequesterInputEnvelope = {
    data: SopCreateManyRequesterInput | SopCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalCreateWithoutApproverInput = {
    role: $Enums.Role
    status: string
    signature?: string | null
    comments?: string | null
    timestamp?: Date | string
    sop: SopCreateNestedOneWithoutApprovalsInput
  }

  export type ApprovalUncheckedCreateWithoutApproverInput = {
    id?: number
    sopId: number
    role: $Enums.Role
    status: string
    signature?: string | null
    comments?: string | null
    timestamp?: Date | string
  }

  export type ApprovalCreateOrConnectWithoutApproverInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput>
  }

  export type ApprovalCreateManyApproverInputEnvelope = {
    data: ApprovalCreateManyApproverInput | ApprovalCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type SopUpsertWithWhereUniqueWithoutRequesterInput = {
    where: SopWhereUniqueInput
    update: XOR<SopUpdateWithoutRequesterInput, SopUncheckedUpdateWithoutRequesterInput>
    create: XOR<SopCreateWithoutRequesterInput, SopUncheckedCreateWithoutRequesterInput>
  }

  export type SopUpdateWithWhereUniqueWithoutRequesterInput = {
    where: SopWhereUniqueInput
    data: XOR<SopUpdateWithoutRequesterInput, SopUncheckedUpdateWithoutRequesterInput>
  }

  export type SopUpdateManyWithWhereWithoutRequesterInput = {
    where: SopScalarWhereInput
    data: XOR<SopUpdateManyMutationInput, SopUncheckedUpdateManyWithoutRequesterInput>
  }

  export type SopScalarWhereInput = {
    AND?: SopScalarWhereInput | SopScalarWhereInput[]
    OR?: SopScalarWhereInput[]
    NOT?: SopScalarWhereInput | SopScalarWhereInput[]
    id?: IntFilter<"Sop"> | number
    title?: StringFilter<"Sop"> | string
    department?: EnumDepartmentFilter<"Sop"> | $Enums.Department
    version?: StringFilter<"Sop"> | string
    status?: EnumSopStatusFilter<"Sop"> | $Enums.SopStatus
    steps?: StringNullableFilter<"Sop"> | string | null
    attachments?: StringNullableFilter<"Sop"> | string | null
    notes?: StringNullableFilter<"Sop"> | string | null
    createdAt?: DateTimeFilter<"Sop"> | Date | string
    updatedAt?: DateTimeFilter<"Sop"> | Date | string
    requesterId?: IntFilter<"Sop"> | number
  }

  export type ApprovalUpsertWithWhereUniqueWithoutApproverInput = {
    where: ApprovalWhereUniqueInput
    update: XOR<ApprovalUpdateWithoutApproverInput, ApprovalUncheckedUpdateWithoutApproverInput>
    create: XOR<ApprovalCreateWithoutApproverInput, ApprovalUncheckedCreateWithoutApproverInput>
  }

  export type ApprovalUpdateWithWhereUniqueWithoutApproverInput = {
    where: ApprovalWhereUniqueInput
    data: XOR<ApprovalUpdateWithoutApproverInput, ApprovalUncheckedUpdateWithoutApproverInput>
  }

  export type ApprovalUpdateManyWithWhereWithoutApproverInput = {
    where: ApprovalScalarWhereInput
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyWithoutApproverInput>
  }

  export type ApprovalScalarWhereInput = {
    AND?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    OR?: ApprovalScalarWhereInput[]
    NOT?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    id?: IntFilter<"Approval"> | number
    sopId?: IntFilter<"Approval"> | number
    approverId?: IntFilter<"Approval"> | number
    role?: EnumRoleFilter<"Approval"> | $Enums.Role
    status?: StringFilter<"Approval"> | string
    signature?: StringNullableFilter<"Approval"> | string | null
    comments?: StringNullableFilter<"Approval"> | string | null
    timestamp?: DateTimeFilter<"Approval"> | Date | string
  }

  export type UserCreateWithoutCreatedSopsInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    department: $Enums.Department
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: ApprovalCreateNestedManyWithoutApproverInput
  }

  export type UserUncheckedCreateWithoutCreatedSopsInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    department: $Enums.Department
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: ApprovalUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutCreatedSopsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedSopsInput, UserUncheckedCreateWithoutCreatedSopsInput>
  }

  export type ApprovalCreateWithoutSopInput = {
    role: $Enums.Role
    status: string
    signature?: string | null
    comments?: string | null
    timestamp?: Date | string
    approver: UserCreateNestedOneWithoutApprovalsInput
  }

  export type ApprovalUncheckedCreateWithoutSopInput = {
    id?: number
    approverId: number
    role: $Enums.Role
    status: string
    signature?: string | null
    comments?: string | null
    timestamp?: Date | string
  }

  export type ApprovalCreateOrConnectWithoutSopInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutSopInput, ApprovalUncheckedCreateWithoutSopInput>
  }

  export type ApprovalCreateManySopInputEnvelope = {
    data: ApprovalCreateManySopInput | ApprovalCreateManySopInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedSopsInput = {
    update: XOR<UserUpdateWithoutCreatedSopsInput, UserUncheckedUpdateWithoutCreatedSopsInput>
    create: XOR<UserCreateWithoutCreatedSopsInput, UserUncheckedCreateWithoutCreatedSopsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedSopsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedSopsInput, UserUncheckedUpdateWithoutCreatedSopsInput>
  }

  export type UserUpdateWithoutCreatedSopsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ApprovalUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedSopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ApprovalUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type ApprovalUpsertWithWhereUniqueWithoutSopInput = {
    where: ApprovalWhereUniqueInput
    update: XOR<ApprovalUpdateWithoutSopInput, ApprovalUncheckedUpdateWithoutSopInput>
    create: XOR<ApprovalCreateWithoutSopInput, ApprovalUncheckedCreateWithoutSopInput>
  }

  export type ApprovalUpdateWithWhereUniqueWithoutSopInput = {
    where: ApprovalWhereUniqueInput
    data: XOR<ApprovalUpdateWithoutSopInput, ApprovalUncheckedUpdateWithoutSopInput>
  }

  export type ApprovalUpdateManyWithWhereWithoutSopInput = {
    where: ApprovalScalarWhereInput
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyWithoutSopInput>
  }

  export type SopCreateWithoutApprovalsInput = {
    title: string
    department: $Enums.Department
    version?: string
    status?: $Enums.SopStatus
    steps?: string | null
    attachments?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutCreatedSopsInput
  }

  export type SopUncheckedCreateWithoutApprovalsInput = {
    id?: number
    title: string
    department: $Enums.Department
    version?: string
    status?: $Enums.SopStatus
    steps?: string | null
    attachments?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: number
  }

  export type SopCreateOrConnectWithoutApprovalsInput = {
    where: SopWhereUniqueInput
    create: XOR<SopCreateWithoutApprovalsInput, SopUncheckedCreateWithoutApprovalsInput>
  }

  export type UserCreateWithoutApprovalsInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    department: $Enums.Department
    createdAt?: Date | string
    updatedAt?: Date | string
    createdSops?: SopCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutApprovalsInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    department: $Enums.Department
    createdAt?: Date | string
    updatedAt?: Date | string
    createdSops?: SopUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutApprovalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
  }

  export type SopUpsertWithoutApprovalsInput = {
    update: XOR<SopUpdateWithoutApprovalsInput, SopUncheckedUpdateWithoutApprovalsInput>
    create: XOR<SopCreateWithoutApprovalsInput, SopUncheckedCreateWithoutApprovalsInput>
    where?: SopWhereInput
  }

  export type SopUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: SopWhereInput
    data: XOR<SopUpdateWithoutApprovalsInput, SopUncheckedUpdateWithoutApprovalsInput>
  }

  export type SopUpdateWithoutApprovalsInput = {
    title?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    version?: StringFieldUpdateOperationsInput | string
    status?: EnumSopStatusFieldUpdateOperationsInput | $Enums.SopStatus
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutCreatedSopsNestedInput
  }

  export type SopUncheckedUpdateWithoutApprovalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    version?: StringFieldUpdateOperationsInput | string
    status?: EnumSopStatusFieldUpdateOperationsInput | $Enums.SopStatus
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutApprovalsInput = {
    update: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateWithoutApprovalsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdSops?: SopUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdSops?: SopUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type SopCreateManyRequesterInput = {
    id?: number
    title: string
    department: $Enums.Department
    version?: string
    status?: $Enums.SopStatus
    steps?: string | null
    attachments?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApprovalCreateManyApproverInput = {
    id?: number
    sopId: number
    role: $Enums.Role
    status: string
    signature?: string | null
    comments?: string | null
    timestamp?: Date | string
  }

  export type SopUpdateWithoutRequesterInput = {
    title?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    version?: StringFieldUpdateOperationsInput | string
    status?: EnumSopStatusFieldUpdateOperationsInput | $Enums.SopStatus
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ApprovalUpdateManyWithoutSopNestedInput
  }

  export type SopUncheckedUpdateWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    version?: StringFieldUpdateOperationsInput | string
    status?: EnumSopStatusFieldUpdateOperationsInput | $Enums.SopStatus
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ApprovalUncheckedUpdateManyWithoutSopNestedInput
  }

  export type SopUncheckedUpdateManyWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    version?: StringFieldUpdateOperationsInput | string
    status?: EnumSopStatusFieldUpdateOperationsInput | $Enums.SopStatus
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUpdateWithoutApproverInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    sop?: SopUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ApprovalUncheckedUpdateWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    sopId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    sopId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalCreateManySopInput = {
    id?: number
    approverId: number
    role: $Enums.Role
    status: string
    signature?: string | null
    comments?: string | null
    timestamp?: Date | string
  }

  export type ApprovalUpdateWithoutSopInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    approver?: UserUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ApprovalUncheckedUpdateWithoutSopInput = {
    id?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyWithoutSopInput = {
    id?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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