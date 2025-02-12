
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
 * Model Donor
 * 
 */
export type Donor = $Result.DefaultSelection<Prisma.$DonorPayload>
/**
 * Model DonorMedia
 * 
 */
export type DonorMedia = $Result.DefaultSelection<Prisma.$DonorMediaPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model MemberStatus
 * 
 */
export type MemberStatus = $Result.DefaultSelection<Prisma.$MemberStatusPayload>
/**
 * Model YearlyPayment
 * 
 */
export type YearlyPayment = $Result.DefaultSelection<Prisma.$YearlyPaymentPayload>
/**
 * Model YearlyDonation
 * 
 */
export type YearlyDonation = $Result.DefaultSelection<Prisma.$YearlyDonationPayload>
/**
 * Model MemberPayments
 * 
 */
export type MemberPayments = $Result.DefaultSelection<Prisma.$MemberPaymentsPayload>
/**
 * Model MemberMedia
 * 
 */
export type MemberMedia = $Result.DefaultSelection<Prisma.$MemberMediaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  DONOR: 'DONOR',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

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
   * `prisma.donor`: Exposes CRUD operations for the **Donor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donors
    * const donors = await prisma.donor.findMany()
    * ```
    */
  get donor(): Prisma.DonorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donorMedia`: Exposes CRUD operations for the **DonorMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonorMedias
    * const donorMedias = await prisma.donorMedia.findMany()
    * ```
    */
  get donorMedia(): Prisma.DonorMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberStatus`: Exposes CRUD operations for the **MemberStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberStatuses
    * const memberStatuses = await prisma.memberStatus.findMany()
    * ```
    */
  get memberStatus(): Prisma.MemberStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.yearlyPayment`: Exposes CRUD operations for the **YearlyPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YearlyPayments
    * const yearlyPayments = await prisma.yearlyPayment.findMany()
    * ```
    */
  get yearlyPayment(): Prisma.YearlyPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.yearlyDonation`: Exposes CRUD operations for the **YearlyDonation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YearlyDonations
    * const yearlyDonations = await prisma.yearlyDonation.findMany()
    * ```
    */
  get yearlyDonation(): Prisma.YearlyDonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberPayments`: Exposes CRUD operations for the **MemberPayments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberPayments
    * const memberPayments = await prisma.memberPayments.findMany()
    * ```
    */
  get memberPayments(): Prisma.MemberPaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberMedia`: Exposes CRUD operations for the **MemberMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberMedias
    * const memberMedias = await prisma.memberMedia.findMany()
    * ```
    */
  get memberMedia(): Prisma.MemberMediaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
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
    Donor: 'Donor',
    DonorMedia: 'DonorMedia',
    Donation: 'Donation',
    Member: 'Member',
    MemberStatus: 'MemberStatus',
    YearlyPayment: 'YearlyPayment',
    YearlyDonation: 'YearlyDonation',
    MemberPayments: 'MemberPayments',
    MemberMedia: 'MemberMedia'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "donor" | "donorMedia" | "donation" | "member" | "memberStatus" | "yearlyPayment" | "yearlyDonation" | "memberPayments" | "memberMedia"
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
      Donor: {
        payload: Prisma.$DonorPayload<ExtArgs>
        fields: Prisma.DonorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          findFirst: {
            args: Prisma.DonorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          findMany: {
            args: Prisma.DonorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          create: {
            args: Prisma.DonorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          createMany: {
            args: Prisma.DonorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          delete: {
            args: Prisma.DonorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          update: {
            args: Prisma.DonorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          deleteMany: {
            args: Prisma.DonorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          upsert: {
            args: Prisma.DonorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          aggregate: {
            args: Prisma.DonorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonor>
          }
          groupBy: {
            args: Prisma.DonorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonorCountArgs<ExtArgs>
            result: $Utils.Optional<DonorCountAggregateOutputType> | number
          }
        }
      }
      DonorMedia: {
        payload: Prisma.$DonorMediaPayload<ExtArgs>
        fields: Prisma.DonorMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonorMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonorMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload>
          }
          findFirst: {
            args: Prisma.DonorMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonorMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload>
          }
          findMany: {
            args: Prisma.DonorMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload>[]
          }
          create: {
            args: Prisma.DonorMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload>
          }
          createMany: {
            args: Prisma.DonorMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonorMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload>[]
          }
          delete: {
            args: Prisma.DonorMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload>
          }
          update: {
            args: Prisma.DonorMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload>
          }
          deleteMany: {
            args: Prisma.DonorMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonorMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonorMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload>[]
          }
          upsert: {
            args: Prisma.DonorMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorMediaPayload>
          }
          aggregate: {
            args: Prisma.DonorMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonorMedia>
          }
          groupBy: {
            args: Prisma.DonorMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonorMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonorMediaCountArgs<ExtArgs>
            result: $Utils.Optional<DonorMediaCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      MemberStatus: {
        payload: Prisma.$MemberStatusPayload<ExtArgs>
        fields: Prisma.MemberStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload>
          }
          findFirst: {
            args: Prisma.MemberStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload>
          }
          findMany: {
            args: Prisma.MemberStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload>[]
          }
          create: {
            args: Prisma.MemberStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload>
          }
          createMany: {
            args: Prisma.MemberStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload>[]
          }
          delete: {
            args: Prisma.MemberStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload>
          }
          update: {
            args: Prisma.MemberStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload>
          }
          deleteMany: {
            args: Prisma.MemberStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload>[]
          }
          upsert: {
            args: Prisma.MemberStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatusPayload>
          }
          aggregate: {
            args: Prisma.MemberStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberStatus>
          }
          groupBy: {
            args: Prisma.MemberStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberStatusCountArgs<ExtArgs>
            result: $Utils.Optional<MemberStatusCountAggregateOutputType> | number
          }
        }
      }
      YearlyPayment: {
        payload: Prisma.$YearlyPaymentPayload<ExtArgs>
        fields: Prisma.YearlyPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YearlyPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YearlyPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload>
          }
          findFirst: {
            args: Prisma.YearlyPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YearlyPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload>
          }
          findMany: {
            args: Prisma.YearlyPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload>[]
          }
          create: {
            args: Prisma.YearlyPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload>
          }
          createMany: {
            args: Prisma.YearlyPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YearlyPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload>[]
          }
          delete: {
            args: Prisma.YearlyPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload>
          }
          update: {
            args: Prisma.YearlyPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload>
          }
          deleteMany: {
            args: Prisma.YearlyPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YearlyPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YearlyPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload>[]
          }
          upsert: {
            args: Prisma.YearlyPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyPaymentPayload>
          }
          aggregate: {
            args: Prisma.YearlyPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYearlyPayment>
          }
          groupBy: {
            args: Prisma.YearlyPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<YearlyPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.YearlyPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<YearlyPaymentCountAggregateOutputType> | number
          }
        }
      }
      YearlyDonation: {
        payload: Prisma.$YearlyDonationPayload<ExtArgs>
        fields: Prisma.YearlyDonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YearlyDonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YearlyDonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload>
          }
          findFirst: {
            args: Prisma.YearlyDonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YearlyDonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload>
          }
          findMany: {
            args: Prisma.YearlyDonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload>[]
          }
          create: {
            args: Prisma.YearlyDonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload>
          }
          createMany: {
            args: Prisma.YearlyDonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YearlyDonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload>[]
          }
          delete: {
            args: Prisma.YearlyDonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload>
          }
          update: {
            args: Prisma.YearlyDonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload>
          }
          deleteMany: {
            args: Prisma.YearlyDonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YearlyDonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YearlyDonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload>[]
          }
          upsert: {
            args: Prisma.YearlyDonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearlyDonationPayload>
          }
          aggregate: {
            args: Prisma.YearlyDonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYearlyDonation>
          }
          groupBy: {
            args: Prisma.YearlyDonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<YearlyDonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.YearlyDonationCountArgs<ExtArgs>
            result: $Utils.Optional<YearlyDonationCountAggregateOutputType> | number
          }
        }
      }
      MemberPayments: {
        payload: Prisma.$MemberPaymentsPayload<ExtArgs>
        fields: Prisma.MemberPaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberPaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberPaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload>
          }
          findFirst: {
            args: Prisma.MemberPaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberPaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload>
          }
          findMany: {
            args: Prisma.MemberPaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload>[]
          }
          create: {
            args: Prisma.MemberPaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload>
          }
          createMany: {
            args: Prisma.MemberPaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberPaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload>[]
          }
          delete: {
            args: Prisma.MemberPaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload>
          }
          update: {
            args: Prisma.MemberPaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload>
          }
          deleteMany: {
            args: Prisma.MemberPaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberPaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberPaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload>[]
          }
          upsert: {
            args: Prisma.MemberPaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentsPayload>
          }
          aggregate: {
            args: Prisma.MemberPaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberPayments>
          }
          groupBy: {
            args: Prisma.MemberPaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberPaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberPaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<MemberPaymentsCountAggregateOutputType> | number
          }
        }
      }
      MemberMedia: {
        payload: Prisma.$MemberMediaPayload<ExtArgs>
        fields: Prisma.MemberMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload>
          }
          findFirst: {
            args: Prisma.MemberMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload>
          }
          findMany: {
            args: Prisma.MemberMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload>[]
          }
          create: {
            args: Prisma.MemberMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload>
          }
          createMany: {
            args: Prisma.MemberMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload>[]
          }
          delete: {
            args: Prisma.MemberMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload>
          }
          update: {
            args: Prisma.MemberMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload>
          }
          deleteMany: {
            args: Prisma.MemberMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload>[]
          }
          upsert: {
            args: Prisma.MemberMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberMediaPayload>
          }
          aggregate: {
            args: Prisma.MemberMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberMedia>
          }
          groupBy: {
            args: Prisma.MemberMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberMediaCountArgs<ExtArgs>
            result: $Utils.Optional<MemberMediaCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    donor?: DonorOmit
    donorMedia?: DonorMediaOmit
    donation?: DonationOmit
    member?: MemberOmit
    memberStatus?: MemberStatusOmit
    yearlyPayment?: YearlyPaymentOmit
    yearlyDonation?: YearlyDonationOmit
    memberPayments?: MemberPaymentsOmit
    memberMedia?: MemberMediaOmit
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
   * Count Type DonorCountOutputType
   */

  export type DonorCountOutputType = {
    donations: number
    media: number
  }

  export type DonorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donations?: boolean | DonorCountOutputTypeCountDonationsArgs
    media?: boolean | DonorCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * DonorCountOutputType without action
   */
  export type DonorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorCountOutputType
     */
    select?: DonorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DonorCountOutputType without action
   */
  export type DonorCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * DonorCountOutputType without action
   */
  export type DonorCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorMediaWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    media: number
    payments: number
    memberStatus: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MemberCountOutputTypeCountMediaArgs
    payments?: boolean | MemberCountOutputTypeCountPaymentsArgs
    memberStatus?: boolean | MemberCountOutputTypeCountMemberStatusArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberMediaWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberPaymentsWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountMemberStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberStatusWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
  }


  /**
   * Model Donor
   */

  export type AggregateDonor = {
    _count: DonorCountAggregateOutputType | null
    _min: DonorMinAggregateOutputType | null
    _max: DonorMaxAggregateOutputType | null
  }

  export type DonorMinAggregateOutputType = {
    id: string | null
    cnic: string | null
    name: string | null
    password: string | null
    fatherName: string | null
    phone: string | null
    address: string | null
    city: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type DonorMaxAggregateOutputType = {
    id: string | null
    cnic: string | null
    name: string | null
    password: string | null
    fatherName: string | null
    phone: string | null
    address: string | null
    city: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type DonorCountAggregateOutputType = {
    id: number
    cnic: number
    name: number
    password: number
    fatherName: number
    phone: number
    address: number
    city: number
    email: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type DonorMinAggregateInputType = {
    id?: true
    cnic?: true
    name?: true
    password?: true
    fatherName?: true
    phone?: true
    address?: true
    city?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type DonorMaxAggregateInputType = {
    id?: true
    cnic?: true
    name?: true
    password?: true
    fatherName?: true
    phone?: true
    address?: true
    city?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type DonorCountAggregateInputType = {
    id?: true
    cnic?: true
    name?: true
    password?: true
    fatherName?: true
    phone?: true
    address?: true
    city?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type DonorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donor to aggregate.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donors
    **/
    _count?: true | DonorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonorMaxAggregateInputType
  }

  export type GetDonorAggregateType<T extends DonorAggregateArgs> = {
        [P in keyof T & keyof AggregateDonor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonor[P]>
      : GetScalarType<T[P], AggregateDonor[P]>
  }




  export type DonorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorWhereInput
    orderBy?: DonorOrderByWithAggregationInput | DonorOrderByWithAggregationInput[]
    by: DonorScalarFieldEnum[] | DonorScalarFieldEnum
    having?: DonorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonorCountAggregateInputType | true
    _min?: DonorMinAggregateInputType
    _max?: DonorMaxAggregateInputType
  }

  export type DonorGroupByOutputType = {
    id: string
    cnic: string | null
    name: string
    password: string | null
    fatherName: string | null
    phone: string | null
    address: string | null
    city: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date | null
    role: $Enums.Role
    _count: DonorCountAggregateOutputType | null
    _min: DonorMinAggregateOutputType | null
    _max: DonorMaxAggregateOutputType | null
  }

  type GetDonorGroupByPayload<T extends DonorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonorGroupByOutputType[P]>
            : GetScalarType<T[P], DonorGroupByOutputType[P]>
        }
      >
    >


  export type DonorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnic?: boolean
    name?: boolean
    password?: boolean
    fatherName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    donations?: boolean | Donor$donationsArgs<ExtArgs>
    media?: boolean | Donor$mediaArgs<ExtArgs>
    _count?: boolean | DonorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnic?: boolean
    name?: boolean
    password?: boolean
    fatherName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnic?: boolean
    name?: boolean
    password?: boolean
    fatherName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectScalar = {
    id?: boolean
    cnic?: boolean
    name?: boolean
    password?: boolean
    fatherName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type DonorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cnic" | "name" | "password" | "fatherName" | "phone" | "address" | "city" | "email" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["donor"]>
  export type DonorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donations?: boolean | Donor$donationsArgs<ExtArgs>
    media?: boolean | Donor$mediaArgs<ExtArgs>
    _count?: boolean | DonorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DonorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DonorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DonorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donor"
    objects: {
      donations: Prisma.$DonationPayload<ExtArgs>[]
      media: Prisma.$DonorMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cnic: string | null
      name: string
      password: string | null
      fatherName: string | null
      phone: string | null
      address: string | null
      city: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date | null
      role: $Enums.Role
    }, ExtArgs["result"]["donor"]>
    composites: {}
  }

  type DonorGetPayload<S extends boolean | null | undefined | DonorDefaultArgs> = $Result.GetResult<Prisma.$DonorPayload, S>

  type DonorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonorCountAggregateInputType | true
    }

  export interface DonorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donor'], meta: { name: 'Donor' } }
    /**
     * Find zero or one Donor that matches the filter.
     * @param {DonorFindUniqueArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonorFindUniqueArgs>(args: SelectSubset<T, DonorFindUniqueArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Donor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonorFindUniqueOrThrowArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonorFindUniqueOrThrowArgs>(args: SelectSubset<T, DonorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Donor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindFirstArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonorFindFirstArgs>(args?: SelectSubset<T, DonorFindFirstArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Donor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindFirstOrThrowArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonorFindFirstOrThrowArgs>(args?: SelectSubset<T, DonorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Donors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donors
     * const donors = await prisma.donor.findMany()
     * 
     * // Get first 10 Donors
     * const donors = await prisma.donor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donorWithIdOnly = await prisma.donor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonorFindManyArgs>(args?: SelectSubset<T, DonorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Donor.
     * @param {DonorCreateArgs} args - Arguments to create a Donor.
     * @example
     * // Create one Donor
     * const Donor = await prisma.donor.create({
     *   data: {
     *     // ... data to create a Donor
     *   }
     * })
     * 
     */
    create<T extends DonorCreateArgs>(args: SelectSubset<T, DonorCreateArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Donors.
     * @param {DonorCreateManyArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donor = await prisma.donor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonorCreateManyArgs>(args?: SelectSubset<T, DonorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donors and returns the data saved in the database.
     * @param {DonorCreateManyAndReturnArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donor = await prisma.donor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donors and only return the `id`
     * const donorWithIdOnly = await prisma.donor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonorCreateManyAndReturnArgs>(args?: SelectSubset<T, DonorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Donor.
     * @param {DonorDeleteArgs} args - Arguments to delete one Donor.
     * @example
     * // Delete one Donor
     * const Donor = await prisma.donor.delete({
     *   where: {
     *     // ... filter to delete one Donor
     *   }
     * })
     * 
     */
    delete<T extends DonorDeleteArgs>(args: SelectSubset<T, DonorDeleteArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Donor.
     * @param {DonorUpdateArgs} args - Arguments to update one Donor.
     * @example
     * // Update one Donor
     * const donor = await prisma.donor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonorUpdateArgs>(args: SelectSubset<T, DonorUpdateArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Donors.
     * @param {DonorDeleteManyArgs} args - Arguments to filter Donors to delete.
     * @example
     * // Delete a few Donors
     * const { count } = await prisma.donor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonorDeleteManyArgs>(args?: SelectSubset<T, DonorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donors
     * const donor = await prisma.donor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonorUpdateManyArgs>(args: SelectSubset<T, DonorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors and returns the data updated in the database.
     * @param {DonorUpdateManyAndReturnArgs} args - Arguments to update many Donors.
     * @example
     * // Update many Donors
     * const donor = await prisma.donor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donors and only return the `id`
     * const donorWithIdOnly = await prisma.donor.updateManyAndReturn({
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
    updateManyAndReturn<T extends DonorUpdateManyAndReturnArgs>(args: SelectSubset<T, DonorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Donor.
     * @param {DonorUpsertArgs} args - Arguments to update or create a Donor.
     * @example
     * // Update or create a Donor
     * const donor = await prisma.donor.upsert({
     *   create: {
     *     // ... data to create a Donor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donor we want to update
     *   }
     * })
     */
    upsert<T extends DonorUpsertArgs>(args: SelectSubset<T, DonorUpsertArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCountArgs} args - Arguments to filter Donors to count.
     * @example
     * // Count the number of Donors
     * const count = await prisma.donor.count({
     *   where: {
     *     // ... the filter for the Donors we want to count
     *   }
     * })
    **/
    count<T extends DonorCountArgs>(
      args?: Subset<T, DonorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonorAggregateArgs>(args: Subset<T, DonorAggregateArgs>): Prisma.PrismaPromise<GetDonorAggregateType<T>>

    /**
     * Group by Donor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorGroupByArgs} args - Group by arguments.
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
      T extends DonorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonorGroupByArgs['orderBy'] }
        : { orderBy?: DonorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donor model
   */
  readonly fields: DonorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donations<T extends Donor$donationsArgs<ExtArgs> = {}>(args?: Subset<T, Donor$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    media<T extends Donor$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Donor$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Donor model
   */ 
  interface DonorFieldRefs {
    readonly id: FieldRef<"Donor", 'String'>
    readonly cnic: FieldRef<"Donor", 'String'>
    readonly name: FieldRef<"Donor", 'String'>
    readonly password: FieldRef<"Donor", 'String'>
    readonly fatherName: FieldRef<"Donor", 'String'>
    readonly phone: FieldRef<"Donor", 'String'>
    readonly address: FieldRef<"Donor", 'String'>
    readonly city: FieldRef<"Donor", 'String'>
    readonly email: FieldRef<"Donor", 'String'>
    readonly createdAt: FieldRef<"Donor", 'DateTime'>
    readonly updatedAt: FieldRef<"Donor", 'DateTime'>
    readonly role: FieldRef<"Donor", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Donor findUnique
   */
  export type DonorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor findUniqueOrThrow
   */
  export type DonorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor findFirst
   */
  export type DonorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor findFirstOrThrow
   */
  export type DonorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor findMany
   */
  export type DonorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donors to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor create
   */
  export type DonorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The data needed to create a Donor.
     */
    data: XOR<DonorCreateInput, DonorUncheckedCreateInput>
  }

  /**
   * Donor createMany
   */
  export type DonorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donors.
     */
    data: DonorCreateManyInput | DonorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donor createManyAndReturn
   */
  export type DonorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data used to create many Donors.
     */
    data: DonorCreateManyInput | DonorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donor update
   */
  export type DonorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The data needed to update a Donor.
     */
    data: XOR<DonorUpdateInput, DonorUncheckedUpdateInput>
    /**
     * Choose, which Donor to update.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor updateMany
   */
  export type DonorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donors.
     */
    data: XOR<DonorUpdateManyMutationInput, DonorUncheckedUpdateManyInput>
    /**
     * Filter which Donors to update
     */
    where?: DonorWhereInput
  }

  /**
   * Donor updateManyAndReturn
   */
  export type DonorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data used to update Donors.
     */
    data: XOR<DonorUpdateManyMutationInput, DonorUncheckedUpdateManyInput>
    /**
     * Filter which Donors to update
     */
    where?: DonorWhereInput
  }

  /**
   * Donor upsert
   */
  export type DonorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The filter to search for the Donor to update in case it exists.
     */
    where: DonorWhereUniqueInput
    /**
     * In case the Donor found by the `where` argument doesn't exist, create a new Donor with this data.
     */
    create: XOR<DonorCreateInput, DonorUncheckedCreateInput>
    /**
     * In case the Donor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonorUpdateInput, DonorUncheckedUpdateInput>
  }

  /**
   * Donor delete
   */
  export type DonorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter which Donor to delete.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor deleteMany
   */
  export type DonorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donors to delete
     */
    where?: DonorWhereInput
  }

  /**
   * Donor.donations
   */
  export type Donor$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donor.media
   */
  export type Donor$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
    where?: DonorMediaWhereInput
    orderBy?: DonorMediaOrderByWithRelationInput | DonorMediaOrderByWithRelationInput[]
    cursor?: DonorMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonorMediaScalarFieldEnum | DonorMediaScalarFieldEnum[]
  }

  /**
   * Donor without action
   */
  export type DonorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
  }


  /**
   * Model DonorMedia
   */

  export type AggregateDonorMedia = {
    _count: DonorMediaCountAggregateOutputType | null
    _min: DonorMediaMinAggregateOutputType | null
    _max: DonorMediaMaxAggregateOutputType | null
  }

  export type DonorMediaMinAggregateOutputType = {
    id: string | null
    profilePic: string | null
    cnicFront: string | null
    cnicBack: string | null
    donorId: string | null
  }

  export type DonorMediaMaxAggregateOutputType = {
    id: string | null
    profilePic: string | null
    cnicFront: string | null
    cnicBack: string | null
    donorId: string | null
  }

  export type DonorMediaCountAggregateOutputType = {
    id: number
    profilePic: number
    cnicFront: number
    cnicBack: number
    donorId: number
    _all: number
  }


  export type DonorMediaMinAggregateInputType = {
    id?: true
    profilePic?: true
    cnicFront?: true
    cnicBack?: true
    donorId?: true
  }

  export type DonorMediaMaxAggregateInputType = {
    id?: true
    profilePic?: true
    cnicFront?: true
    cnicBack?: true
    donorId?: true
  }

  export type DonorMediaCountAggregateInputType = {
    id?: true
    profilePic?: true
    cnicFront?: true
    cnicBack?: true
    donorId?: true
    _all?: true
  }

  export type DonorMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonorMedia to aggregate.
     */
    where?: DonorMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorMedias to fetch.
     */
    orderBy?: DonorMediaOrderByWithRelationInput | DonorMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonorMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonorMedias
    **/
    _count?: true | DonorMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonorMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonorMediaMaxAggregateInputType
  }

  export type GetDonorMediaAggregateType<T extends DonorMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateDonorMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonorMedia[P]>
      : GetScalarType<T[P], AggregateDonorMedia[P]>
  }




  export type DonorMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorMediaWhereInput
    orderBy?: DonorMediaOrderByWithAggregationInput | DonorMediaOrderByWithAggregationInput[]
    by: DonorMediaScalarFieldEnum[] | DonorMediaScalarFieldEnum
    having?: DonorMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonorMediaCountAggregateInputType | true
    _min?: DonorMediaMinAggregateInputType
    _max?: DonorMediaMaxAggregateInputType
  }

  export type DonorMediaGroupByOutputType = {
    id: string
    profilePic: string | null
    cnicFront: string | null
    cnicBack: string | null
    donorId: string
    _count: DonorMediaCountAggregateOutputType | null
    _min: DonorMediaMinAggregateOutputType | null
    _max: DonorMediaMaxAggregateOutputType | null
  }

  type GetDonorMediaGroupByPayload<T extends DonorMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonorMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonorMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonorMediaGroupByOutputType[P]>
            : GetScalarType<T[P], DonorMediaGroupByOutputType[P]>
        }
      >
    >


  export type DonorMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profilePic?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    donorId?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donorMedia"]>

  export type DonorMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profilePic?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    donorId?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donorMedia"]>

  export type DonorMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profilePic?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    donorId?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donorMedia"]>

  export type DonorMediaSelectScalar = {
    id?: boolean
    profilePic?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    donorId?: boolean
  }

  export type DonorMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profilePic" | "cnicFront" | "cnicBack" | "donorId", ExtArgs["result"]["donorMedia"]>
  export type DonorMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }
  export type DonorMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }
  export type DonorMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }

  export type $DonorMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonorMedia"
    objects: {
      donor: Prisma.$DonorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profilePic: string | null
      cnicFront: string | null
      cnicBack: string | null
      donorId: string
    }, ExtArgs["result"]["donorMedia"]>
    composites: {}
  }

  type DonorMediaGetPayload<S extends boolean | null | undefined | DonorMediaDefaultArgs> = $Result.GetResult<Prisma.$DonorMediaPayload, S>

  type DonorMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonorMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonorMediaCountAggregateInputType | true
    }

  export interface DonorMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonorMedia'], meta: { name: 'DonorMedia' } }
    /**
     * Find zero or one DonorMedia that matches the filter.
     * @param {DonorMediaFindUniqueArgs} args - Arguments to find a DonorMedia
     * @example
     * // Get one DonorMedia
     * const donorMedia = await prisma.donorMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonorMediaFindUniqueArgs>(args: SelectSubset<T, DonorMediaFindUniqueArgs<ExtArgs>>): Prisma__DonorMediaClient<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one DonorMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonorMediaFindUniqueOrThrowArgs} args - Arguments to find a DonorMedia
     * @example
     * // Get one DonorMedia
     * const donorMedia = await prisma.donorMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonorMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, DonorMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonorMediaClient<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first DonorMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorMediaFindFirstArgs} args - Arguments to find a DonorMedia
     * @example
     * // Get one DonorMedia
     * const donorMedia = await prisma.donorMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonorMediaFindFirstArgs>(args?: SelectSubset<T, DonorMediaFindFirstArgs<ExtArgs>>): Prisma__DonorMediaClient<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first DonorMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorMediaFindFirstOrThrowArgs} args - Arguments to find a DonorMedia
     * @example
     * // Get one DonorMedia
     * const donorMedia = await prisma.donorMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonorMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, DonorMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonorMediaClient<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more DonorMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonorMedias
     * const donorMedias = await prisma.donorMedia.findMany()
     * 
     * // Get first 10 DonorMedias
     * const donorMedias = await prisma.donorMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donorMediaWithIdOnly = await prisma.donorMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonorMediaFindManyArgs>(args?: SelectSubset<T, DonorMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a DonorMedia.
     * @param {DonorMediaCreateArgs} args - Arguments to create a DonorMedia.
     * @example
     * // Create one DonorMedia
     * const DonorMedia = await prisma.donorMedia.create({
     *   data: {
     *     // ... data to create a DonorMedia
     *   }
     * })
     * 
     */
    create<T extends DonorMediaCreateArgs>(args: SelectSubset<T, DonorMediaCreateArgs<ExtArgs>>): Prisma__DonorMediaClient<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many DonorMedias.
     * @param {DonorMediaCreateManyArgs} args - Arguments to create many DonorMedias.
     * @example
     * // Create many DonorMedias
     * const donorMedia = await prisma.donorMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonorMediaCreateManyArgs>(args?: SelectSubset<T, DonorMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonorMedias and returns the data saved in the database.
     * @param {DonorMediaCreateManyAndReturnArgs} args - Arguments to create many DonorMedias.
     * @example
     * // Create many DonorMedias
     * const donorMedia = await prisma.donorMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonorMedias and only return the `id`
     * const donorMediaWithIdOnly = await prisma.donorMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonorMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, DonorMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a DonorMedia.
     * @param {DonorMediaDeleteArgs} args - Arguments to delete one DonorMedia.
     * @example
     * // Delete one DonorMedia
     * const DonorMedia = await prisma.donorMedia.delete({
     *   where: {
     *     // ... filter to delete one DonorMedia
     *   }
     * })
     * 
     */
    delete<T extends DonorMediaDeleteArgs>(args: SelectSubset<T, DonorMediaDeleteArgs<ExtArgs>>): Prisma__DonorMediaClient<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one DonorMedia.
     * @param {DonorMediaUpdateArgs} args - Arguments to update one DonorMedia.
     * @example
     * // Update one DonorMedia
     * const donorMedia = await prisma.donorMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonorMediaUpdateArgs>(args: SelectSubset<T, DonorMediaUpdateArgs<ExtArgs>>): Prisma__DonorMediaClient<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more DonorMedias.
     * @param {DonorMediaDeleteManyArgs} args - Arguments to filter DonorMedias to delete.
     * @example
     * // Delete a few DonorMedias
     * const { count } = await prisma.donorMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonorMediaDeleteManyArgs>(args?: SelectSubset<T, DonorMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonorMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonorMedias
     * const donorMedia = await prisma.donorMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonorMediaUpdateManyArgs>(args: SelectSubset<T, DonorMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonorMedias and returns the data updated in the database.
     * @param {DonorMediaUpdateManyAndReturnArgs} args - Arguments to update many DonorMedias.
     * @example
     * // Update many DonorMedias
     * const donorMedia = await prisma.donorMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonorMedias and only return the `id`
     * const donorMediaWithIdOnly = await prisma.donorMedia.updateManyAndReturn({
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
    updateManyAndReturn<T extends DonorMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, DonorMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one DonorMedia.
     * @param {DonorMediaUpsertArgs} args - Arguments to update or create a DonorMedia.
     * @example
     * // Update or create a DonorMedia
     * const donorMedia = await prisma.donorMedia.upsert({
     *   create: {
     *     // ... data to create a DonorMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonorMedia we want to update
     *   }
     * })
     */
    upsert<T extends DonorMediaUpsertArgs>(args: SelectSubset<T, DonorMediaUpsertArgs<ExtArgs>>): Prisma__DonorMediaClient<$Result.GetResult<Prisma.$DonorMediaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of DonorMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorMediaCountArgs} args - Arguments to filter DonorMedias to count.
     * @example
     * // Count the number of DonorMedias
     * const count = await prisma.donorMedia.count({
     *   where: {
     *     // ... the filter for the DonorMedias we want to count
     *   }
     * })
    **/
    count<T extends DonorMediaCountArgs>(
      args?: Subset<T, DonorMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonorMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonorMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonorMediaAggregateArgs>(args: Subset<T, DonorMediaAggregateArgs>): Prisma.PrismaPromise<GetDonorMediaAggregateType<T>>

    /**
     * Group by DonorMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorMediaGroupByArgs} args - Group by arguments.
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
      T extends DonorMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonorMediaGroupByArgs['orderBy'] }
        : { orderBy?: DonorMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonorMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonorMedia model
   */
  readonly fields: DonorMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonorMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonorMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends DonorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonorDefaultArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the DonorMedia model
   */ 
  interface DonorMediaFieldRefs {
    readonly id: FieldRef<"DonorMedia", 'String'>
    readonly profilePic: FieldRef<"DonorMedia", 'String'>
    readonly cnicFront: FieldRef<"DonorMedia", 'String'>
    readonly cnicBack: FieldRef<"DonorMedia", 'String'>
    readonly donorId: FieldRef<"DonorMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DonorMedia findUnique
   */
  export type DonorMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
    /**
     * Filter, which DonorMedia to fetch.
     */
    where: DonorMediaWhereUniqueInput
  }

  /**
   * DonorMedia findUniqueOrThrow
   */
  export type DonorMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
    /**
     * Filter, which DonorMedia to fetch.
     */
    where: DonorMediaWhereUniqueInput
  }

  /**
   * DonorMedia findFirst
   */
  export type DonorMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
    /**
     * Filter, which DonorMedia to fetch.
     */
    where?: DonorMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorMedias to fetch.
     */
    orderBy?: DonorMediaOrderByWithRelationInput | DonorMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonorMedias.
     */
    cursor?: DonorMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonorMedias.
     */
    distinct?: DonorMediaScalarFieldEnum | DonorMediaScalarFieldEnum[]
  }

  /**
   * DonorMedia findFirstOrThrow
   */
  export type DonorMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
    /**
     * Filter, which DonorMedia to fetch.
     */
    where?: DonorMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorMedias to fetch.
     */
    orderBy?: DonorMediaOrderByWithRelationInput | DonorMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonorMedias.
     */
    cursor?: DonorMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonorMedias.
     */
    distinct?: DonorMediaScalarFieldEnum | DonorMediaScalarFieldEnum[]
  }

  /**
   * DonorMedia findMany
   */
  export type DonorMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
    /**
     * Filter, which DonorMedias to fetch.
     */
    where?: DonorMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorMedias to fetch.
     */
    orderBy?: DonorMediaOrderByWithRelationInput | DonorMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonorMedias.
     */
    cursor?: DonorMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorMedias.
     */
    skip?: number
    distinct?: DonorMediaScalarFieldEnum | DonorMediaScalarFieldEnum[]
  }

  /**
   * DonorMedia create
   */
  export type DonorMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a DonorMedia.
     */
    data: XOR<DonorMediaCreateInput, DonorMediaUncheckedCreateInput>
  }

  /**
   * DonorMedia createMany
   */
  export type DonorMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonorMedias.
     */
    data: DonorMediaCreateManyInput | DonorMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonorMedia createManyAndReturn
   */
  export type DonorMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * The data used to create many DonorMedias.
     */
    data: DonorMediaCreateManyInput | DonorMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonorMedia update
   */
  export type DonorMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a DonorMedia.
     */
    data: XOR<DonorMediaUpdateInput, DonorMediaUncheckedUpdateInput>
    /**
     * Choose, which DonorMedia to update.
     */
    where: DonorMediaWhereUniqueInput
  }

  /**
   * DonorMedia updateMany
   */
  export type DonorMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonorMedias.
     */
    data: XOR<DonorMediaUpdateManyMutationInput, DonorMediaUncheckedUpdateManyInput>
    /**
     * Filter which DonorMedias to update
     */
    where?: DonorMediaWhereInput
  }

  /**
   * DonorMedia updateManyAndReturn
   */
  export type DonorMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * The data used to update DonorMedias.
     */
    data: XOR<DonorMediaUpdateManyMutationInput, DonorMediaUncheckedUpdateManyInput>
    /**
     * Filter which DonorMedias to update
     */
    where?: DonorMediaWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonorMedia upsert
   */
  export type DonorMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the DonorMedia to update in case it exists.
     */
    where: DonorMediaWhereUniqueInput
    /**
     * In case the DonorMedia found by the `where` argument doesn't exist, create a new DonorMedia with this data.
     */
    create: XOR<DonorMediaCreateInput, DonorMediaUncheckedCreateInput>
    /**
     * In case the DonorMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonorMediaUpdateInput, DonorMediaUncheckedUpdateInput>
  }

  /**
   * DonorMedia delete
   */
  export type DonorMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
    /**
     * Filter which DonorMedia to delete.
     */
    where: DonorMediaWhereUniqueInput
  }

  /**
   * DonorMedia deleteMany
   */
  export type DonorMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonorMedias to delete
     */
    where?: DonorMediaWhereInput
  }

  /**
   * DonorMedia without action
   */
  export type DonorMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorMedia
     */
    select?: DonorMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorMedia
     */
    omit?: DonorMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorMediaInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    amount: number | null
  }

  export type DonationSumAggregateOutputType = {
    amount: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: string | null
    donorId: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationMaxAggregateOutputType = {
    id: string | null
    donorId: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    donorId: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    amount?: true
  }

  export type DonationSumAggregateInputType = {
    amount?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    donorId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    donorId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    donorId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: string
    donorId: string
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    donorId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donorId" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }
  export type DonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }
  export type DonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | DonorDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      donor: Prisma.$DonorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      donorId: string
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
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
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
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
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends DonorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonorDefaultArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Donation model
   */ 
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'String'>
    readonly donorId: FieldRef<"Donation", 'String'>
    readonly amount: FieldRef<"Donation", 'Float'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
    readonly updatedAt: FieldRef<"Donation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    cnic: string | null
    name: string | null
    fatherName: string | null
    husbandName: string | null
    phone: string | null
    address: string | null
    city: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    cnic: string | null
    name: string | null
    fatherName: string | null
    husbandName: string | null
    phone: string | null
    address: string | null
    city: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    cnic: number
    name: number
    fatherName: number
    husbandName: number
    phone: number
    address: number
    city: number
    deleted: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    cnic?: true
    name?: true
    fatherName?: true
    husbandName?: true
    phone?: true
    address?: true
    city?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    cnic?: true
    name?: true
    fatherName?: true
    husbandName?: true
    phone?: true
    address?: true
    city?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    cnic?: true
    name?: true
    fatherName?: true
    husbandName?: true
    phone?: true
    address?: true
    city?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
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




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    cnic: string
    name: string
    fatherName: string | null
    husbandName: string | null
    phone: string | null
    address: string | null
    city: string | null
    deleted: boolean
    createdAt: Date
    updatedAt: Date | null
    role: $Enums.Role
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnic?: boolean
    name?: boolean
    fatherName?: boolean
    husbandName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    media?: boolean | Member$mediaArgs<ExtArgs>
    payments?: boolean | Member$paymentsArgs<ExtArgs>
    memberStatus?: boolean | Member$memberStatusArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnic?: boolean
    name?: boolean
    fatherName?: boolean
    husbandName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnic?: boolean
    name?: boolean
    fatherName?: boolean
    husbandName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    cnic?: boolean
    name?: boolean
    fatherName?: boolean
    husbandName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cnic" | "name" | "fatherName" | "husbandName" | "phone" | "address" | "city" | "deleted" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | Member$mediaArgs<ExtArgs>
    payments?: boolean | Member$paymentsArgs<ExtArgs>
    memberStatus?: boolean | Member$memberStatusArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      media: Prisma.$MemberMediaPayload<ExtArgs>[]
      payments: Prisma.$MemberPaymentsPayload<ExtArgs>[]
      memberStatus: Prisma.$MemberStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cnic: string
      name: string
      fatherName: string | null
      husbandName: string | null
      phone: string | null
      address: string | null
      city: string | null
      deleted: boolean
      createdAt: Date
      updatedAt: Date | null
      role: $Enums.Role
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
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
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

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
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
      T extends $Utils.Record<'select', any>
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends Member$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Member$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    payments<T extends Member$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Member$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    memberStatus<T extends Member$memberStatusArgs<ExtArgs> = {}>(args?: Subset<T, Member$memberStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Member model
   */ 
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly cnic: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly fatherName: FieldRef<"Member", 'String'>
    readonly husbandName: FieldRef<"Member", 'String'>
    readonly phone: FieldRef<"Member", 'String'>
    readonly address: FieldRef<"Member", 'String'>
    readonly city: FieldRef<"Member", 'String'>
    readonly deleted: FieldRef<"Member", 'Boolean'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
    readonly role: FieldRef<"Member", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
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
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
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
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
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
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
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
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
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
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
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
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
  }

  /**
   * Member.media
   */
  export type Member$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
    where?: MemberMediaWhereInput
    orderBy?: MemberMediaOrderByWithRelationInput | MemberMediaOrderByWithRelationInput[]
    cursor?: MemberMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberMediaScalarFieldEnum | MemberMediaScalarFieldEnum[]
  }

  /**
   * Member.payments
   */
  export type Member$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
    where?: MemberPaymentsWhereInput
    orderBy?: MemberPaymentsOrderByWithRelationInput | MemberPaymentsOrderByWithRelationInput[]
    cursor?: MemberPaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberPaymentsScalarFieldEnum | MemberPaymentsScalarFieldEnum[]
  }

  /**
   * Member.memberStatus
   */
  export type Member$memberStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
    where?: MemberStatusWhereInput
    orderBy?: MemberStatusOrderByWithRelationInput | MemberStatusOrderByWithRelationInput[]
    cursor?: MemberStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberStatusScalarFieldEnum | MemberStatusScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model MemberStatus
   */

  export type AggregateMemberStatus = {
    _count: MemberStatusCountAggregateOutputType | null
    _min: MemberStatusMinAggregateOutputType | null
    _max: MemberStatusMaxAggregateOutputType | null
  }

  export type MemberStatusMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberStatusMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberStatusCountAggregateOutputType = {
    id: number
    memberId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberStatusMinAggregateInputType = {
    id?: true
    memberId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberStatusMaxAggregateInputType = {
    id?: true
    memberId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberStatusCountAggregateInputType = {
    id?: true
    memberId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberStatus to aggregate.
     */
    where?: MemberStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberStatuses to fetch.
     */
    orderBy?: MemberStatusOrderByWithRelationInput | MemberStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberStatuses
    **/
    _count?: true | MemberStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberStatusMaxAggregateInputType
  }

  export type GetMemberStatusAggregateType<T extends MemberStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberStatus[P]>
      : GetScalarType<T[P], AggregateMemberStatus[P]>
  }




  export type MemberStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberStatusWhereInput
    orderBy?: MemberStatusOrderByWithAggregationInput | MemberStatusOrderByWithAggregationInput[]
    by: MemberStatusScalarFieldEnum[] | MemberStatusScalarFieldEnum
    having?: MemberStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberStatusCountAggregateInputType | true
    _min?: MemberStatusMinAggregateInputType
    _max?: MemberStatusMaxAggregateInputType
  }

  export type MemberStatusGroupByOutputType = {
    id: string
    memberId: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: MemberStatusCountAggregateOutputType | null
    _min: MemberStatusMinAggregateOutputType | null
    _max: MemberStatusMaxAggregateOutputType | null
  }

  type GetMemberStatusGroupByPayload<T extends MemberStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberStatusGroupByOutputType[P]>
            : GetScalarType<T[P], MemberStatusGroupByOutputType[P]>
        }
      >
    >


  export type MemberStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberStatus"]>

  export type MemberStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberStatus"]>

  export type MemberStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberStatus"]>

  export type MemberStatusSelectScalar = {
    id?: boolean
    memberId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["memberStatus"]>
  export type MemberStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type MemberStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type MemberStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $MemberStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberStatus"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["memberStatus"]>
    composites: {}
  }

  type MemberStatusGetPayload<S extends boolean | null | undefined | MemberStatusDefaultArgs> = $Result.GetResult<Prisma.$MemberStatusPayload, S>

  type MemberStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberStatusCountAggregateInputType | true
    }

  export interface MemberStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberStatus'], meta: { name: 'MemberStatus' } }
    /**
     * Find zero or one MemberStatus that matches the filter.
     * @param {MemberStatusFindUniqueArgs} args - Arguments to find a MemberStatus
     * @example
     * // Get one MemberStatus
     * const memberStatus = await prisma.memberStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberStatusFindUniqueArgs>(args: SelectSubset<T, MemberStatusFindUniqueArgs<ExtArgs>>): Prisma__MemberStatusClient<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MemberStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberStatusFindUniqueOrThrowArgs} args - Arguments to find a MemberStatus
     * @example
     * // Get one MemberStatus
     * const memberStatus = await prisma.memberStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberStatusClient<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MemberStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatusFindFirstArgs} args - Arguments to find a MemberStatus
     * @example
     * // Get one MemberStatus
     * const memberStatus = await prisma.memberStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberStatusFindFirstArgs>(args?: SelectSubset<T, MemberStatusFindFirstArgs<ExtArgs>>): Prisma__MemberStatusClient<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MemberStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatusFindFirstOrThrowArgs} args - Arguments to find a MemberStatus
     * @example
     * // Get one MemberStatus
     * const memberStatus = await prisma.memberStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberStatusClient<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MemberStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberStatuses
     * const memberStatuses = await prisma.memberStatus.findMany()
     * 
     * // Get first 10 MemberStatuses
     * const memberStatuses = await prisma.memberStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberStatusWithIdOnly = await prisma.memberStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberStatusFindManyArgs>(args?: SelectSubset<T, MemberStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MemberStatus.
     * @param {MemberStatusCreateArgs} args - Arguments to create a MemberStatus.
     * @example
     * // Create one MemberStatus
     * const MemberStatus = await prisma.memberStatus.create({
     *   data: {
     *     // ... data to create a MemberStatus
     *   }
     * })
     * 
     */
    create<T extends MemberStatusCreateArgs>(args: SelectSubset<T, MemberStatusCreateArgs<ExtArgs>>): Prisma__MemberStatusClient<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MemberStatuses.
     * @param {MemberStatusCreateManyArgs} args - Arguments to create many MemberStatuses.
     * @example
     * // Create many MemberStatuses
     * const memberStatus = await prisma.memberStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberStatusCreateManyArgs>(args?: SelectSubset<T, MemberStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberStatuses and returns the data saved in the database.
     * @param {MemberStatusCreateManyAndReturnArgs} args - Arguments to create many MemberStatuses.
     * @example
     * // Create many MemberStatuses
     * const memberStatus = await prisma.memberStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberStatuses and only return the `id`
     * const memberStatusWithIdOnly = await prisma.memberStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MemberStatus.
     * @param {MemberStatusDeleteArgs} args - Arguments to delete one MemberStatus.
     * @example
     * // Delete one MemberStatus
     * const MemberStatus = await prisma.memberStatus.delete({
     *   where: {
     *     // ... filter to delete one MemberStatus
     *   }
     * })
     * 
     */
    delete<T extends MemberStatusDeleteArgs>(args: SelectSubset<T, MemberStatusDeleteArgs<ExtArgs>>): Prisma__MemberStatusClient<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MemberStatus.
     * @param {MemberStatusUpdateArgs} args - Arguments to update one MemberStatus.
     * @example
     * // Update one MemberStatus
     * const memberStatus = await prisma.memberStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberStatusUpdateArgs>(args: SelectSubset<T, MemberStatusUpdateArgs<ExtArgs>>): Prisma__MemberStatusClient<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MemberStatuses.
     * @param {MemberStatusDeleteManyArgs} args - Arguments to filter MemberStatuses to delete.
     * @example
     * // Delete a few MemberStatuses
     * const { count } = await prisma.memberStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberStatusDeleteManyArgs>(args?: SelectSubset<T, MemberStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberStatuses
     * const memberStatus = await prisma.memberStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberStatusUpdateManyArgs>(args: SelectSubset<T, MemberStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberStatuses and returns the data updated in the database.
     * @param {MemberStatusUpdateManyAndReturnArgs} args - Arguments to update many MemberStatuses.
     * @example
     * // Update many MemberStatuses
     * const memberStatus = await prisma.memberStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberStatuses and only return the `id`
     * const memberStatusWithIdOnly = await prisma.memberStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MemberStatus.
     * @param {MemberStatusUpsertArgs} args - Arguments to update or create a MemberStatus.
     * @example
     * // Update or create a MemberStatus
     * const memberStatus = await prisma.memberStatus.upsert({
     *   create: {
     *     // ... data to create a MemberStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberStatus we want to update
     *   }
     * })
     */
    upsert<T extends MemberStatusUpsertArgs>(args: SelectSubset<T, MemberStatusUpsertArgs<ExtArgs>>): Prisma__MemberStatusClient<$Result.GetResult<Prisma.$MemberStatusPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MemberStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatusCountArgs} args - Arguments to filter MemberStatuses to count.
     * @example
     * // Count the number of MemberStatuses
     * const count = await prisma.memberStatus.count({
     *   where: {
     *     // ... the filter for the MemberStatuses we want to count
     *   }
     * })
    **/
    count<T extends MemberStatusCountArgs>(
      args?: Subset<T, MemberStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberStatusAggregateArgs>(args: Subset<T, MemberStatusAggregateArgs>): Prisma.PrismaPromise<GetMemberStatusAggregateType<T>>

    /**
     * Group by MemberStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatusGroupByArgs} args - Group by arguments.
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
      T extends MemberStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberStatusGroupByArgs['orderBy'] }
        : { orderBy?: MemberStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberStatus model
   */
  readonly fields: MemberStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the MemberStatus model
   */ 
  interface MemberStatusFieldRefs {
    readonly id: FieldRef<"MemberStatus", 'String'>
    readonly memberId: FieldRef<"MemberStatus", 'String'>
    readonly status: FieldRef<"MemberStatus", 'Status'>
    readonly createdAt: FieldRef<"MemberStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"MemberStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberStatus findUnique
   */
  export type MemberStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
    /**
     * Filter, which MemberStatus to fetch.
     */
    where: MemberStatusWhereUniqueInput
  }

  /**
   * MemberStatus findUniqueOrThrow
   */
  export type MemberStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
    /**
     * Filter, which MemberStatus to fetch.
     */
    where: MemberStatusWhereUniqueInput
  }

  /**
   * MemberStatus findFirst
   */
  export type MemberStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
    /**
     * Filter, which MemberStatus to fetch.
     */
    where?: MemberStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberStatuses to fetch.
     */
    orderBy?: MemberStatusOrderByWithRelationInput | MemberStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberStatuses.
     */
    cursor?: MemberStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberStatuses.
     */
    distinct?: MemberStatusScalarFieldEnum | MemberStatusScalarFieldEnum[]
  }

  /**
   * MemberStatus findFirstOrThrow
   */
  export type MemberStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
    /**
     * Filter, which MemberStatus to fetch.
     */
    where?: MemberStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberStatuses to fetch.
     */
    orderBy?: MemberStatusOrderByWithRelationInput | MemberStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberStatuses.
     */
    cursor?: MemberStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberStatuses.
     */
    distinct?: MemberStatusScalarFieldEnum | MemberStatusScalarFieldEnum[]
  }

  /**
   * MemberStatus findMany
   */
  export type MemberStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
    /**
     * Filter, which MemberStatuses to fetch.
     */
    where?: MemberStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberStatuses to fetch.
     */
    orderBy?: MemberStatusOrderByWithRelationInput | MemberStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberStatuses.
     */
    cursor?: MemberStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberStatuses.
     */
    skip?: number
    distinct?: MemberStatusScalarFieldEnum | MemberStatusScalarFieldEnum[]
  }

  /**
   * MemberStatus create
   */
  export type MemberStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberStatus.
     */
    data: XOR<MemberStatusCreateInput, MemberStatusUncheckedCreateInput>
  }

  /**
   * MemberStatus createMany
   */
  export type MemberStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberStatuses.
     */
    data: MemberStatusCreateManyInput | MemberStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberStatus createManyAndReturn
   */
  export type MemberStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * The data used to create many MemberStatuses.
     */
    data: MemberStatusCreateManyInput | MemberStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberStatus update
   */
  export type MemberStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberStatus.
     */
    data: XOR<MemberStatusUpdateInput, MemberStatusUncheckedUpdateInput>
    /**
     * Choose, which MemberStatus to update.
     */
    where: MemberStatusWhereUniqueInput
  }

  /**
   * MemberStatus updateMany
   */
  export type MemberStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberStatuses.
     */
    data: XOR<MemberStatusUpdateManyMutationInput, MemberStatusUncheckedUpdateManyInput>
    /**
     * Filter which MemberStatuses to update
     */
    where?: MemberStatusWhereInput
  }

  /**
   * MemberStatus updateManyAndReturn
   */
  export type MemberStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * The data used to update MemberStatuses.
     */
    data: XOR<MemberStatusUpdateManyMutationInput, MemberStatusUncheckedUpdateManyInput>
    /**
     * Filter which MemberStatuses to update
     */
    where?: MemberStatusWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberStatus upsert
   */
  export type MemberStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberStatus to update in case it exists.
     */
    where: MemberStatusWhereUniqueInput
    /**
     * In case the MemberStatus found by the `where` argument doesn't exist, create a new MemberStatus with this data.
     */
    create: XOR<MemberStatusCreateInput, MemberStatusUncheckedCreateInput>
    /**
     * In case the MemberStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberStatusUpdateInput, MemberStatusUncheckedUpdateInput>
  }

  /**
   * MemberStatus delete
   */
  export type MemberStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
    /**
     * Filter which MemberStatus to delete.
     */
    where: MemberStatusWhereUniqueInput
  }

  /**
   * MemberStatus deleteMany
   */
  export type MemberStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberStatuses to delete
     */
    where?: MemberStatusWhereInput
  }

  /**
   * MemberStatus without action
   */
  export type MemberStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStatus
     */
    select?: MemberStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStatus
     */
    omit?: MemberStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberStatusInclude<ExtArgs> | null
  }


  /**
   * Model YearlyPayment
   */

  export type AggregateYearlyPayment = {
    _count: YearlyPaymentCountAggregateOutputType | null
    _avg: YearlyPaymentAvgAggregateOutputType | null
    _sum: YearlyPaymentSumAggregateOutputType | null
    _min: YearlyPaymentMinAggregateOutputType | null
    _max: YearlyPaymentMaxAggregateOutputType | null
  }

  export type YearlyPaymentAvgAggregateOutputType = {
    year: number | null
    amount: number | null
  }

  export type YearlyPaymentSumAggregateOutputType = {
    year: number | null
    amount: number | null
  }

  export type YearlyPaymentMinAggregateOutputType = {
    id: string | null
    year: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YearlyPaymentMaxAggregateOutputType = {
    id: string | null
    year: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YearlyPaymentCountAggregateOutputType = {
    id: number
    year: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type YearlyPaymentAvgAggregateInputType = {
    year?: true
    amount?: true
  }

  export type YearlyPaymentSumAggregateInputType = {
    year?: true
    amount?: true
  }

  export type YearlyPaymentMinAggregateInputType = {
    id?: true
    year?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YearlyPaymentMaxAggregateInputType = {
    id?: true
    year?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YearlyPaymentCountAggregateInputType = {
    id?: true
    year?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type YearlyPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YearlyPayment to aggregate.
     */
    where?: YearlyPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YearlyPayments to fetch.
     */
    orderBy?: YearlyPaymentOrderByWithRelationInput | YearlyPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YearlyPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YearlyPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YearlyPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YearlyPayments
    **/
    _count?: true | YearlyPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YearlyPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YearlyPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YearlyPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YearlyPaymentMaxAggregateInputType
  }

  export type GetYearlyPaymentAggregateType<T extends YearlyPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateYearlyPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYearlyPayment[P]>
      : GetScalarType<T[P], AggregateYearlyPayment[P]>
  }




  export type YearlyPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YearlyPaymentWhereInput
    orderBy?: YearlyPaymentOrderByWithAggregationInput | YearlyPaymentOrderByWithAggregationInput[]
    by: YearlyPaymentScalarFieldEnum[] | YearlyPaymentScalarFieldEnum
    having?: YearlyPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YearlyPaymentCountAggregateInputType | true
    _avg?: YearlyPaymentAvgAggregateInputType
    _sum?: YearlyPaymentSumAggregateInputType
    _min?: YearlyPaymentMinAggregateInputType
    _max?: YearlyPaymentMaxAggregateInputType
  }

  export type YearlyPaymentGroupByOutputType = {
    id: string
    year: number
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: YearlyPaymentCountAggregateOutputType | null
    _avg: YearlyPaymentAvgAggregateOutputType | null
    _sum: YearlyPaymentSumAggregateOutputType | null
    _min: YearlyPaymentMinAggregateOutputType | null
    _max: YearlyPaymentMaxAggregateOutputType | null
  }

  type GetYearlyPaymentGroupByPayload<T extends YearlyPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YearlyPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YearlyPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YearlyPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], YearlyPaymentGroupByOutputType[P]>
        }
      >
    >


  export type YearlyPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["yearlyPayment"]>

  export type YearlyPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["yearlyPayment"]>

  export type YearlyPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["yearlyPayment"]>

  export type YearlyPaymentSelectScalar = {
    id?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type YearlyPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["yearlyPayment"]>

  export type $YearlyPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YearlyPayment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["yearlyPayment"]>
    composites: {}
  }

  type YearlyPaymentGetPayload<S extends boolean | null | undefined | YearlyPaymentDefaultArgs> = $Result.GetResult<Prisma.$YearlyPaymentPayload, S>

  type YearlyPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YearlyPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YearlyPaymentCountAggregateInputType | true
    }

  export interface YearlyPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YearlyPayment'], meta: { name: 'YearlyPayment' } }
    /**
     * Find zero or one YearlyPayment that matches the filter.
     * @param {YearlyPaymentFindUniqueArgs} args - Arguments to find a YearlyPayment
     * @example
     * // Get one YearlyPayment
     * const yearlyPayment = await prisma.yearlyPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YearlyPaymentFindUniqueArgs>(args: SelectSubset<T, YearlyPaymentFindUniqueArgs<ExtArgs>>): Prisma__YearlyPaymentClient<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one YearlyPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YearlyPaymentFindUniqueOrThrowArgs} args - Arguments to find a YearlyPayment
     * @example
     * // Get one YearlyPayment
     * const yearlyPayment = await prisma.yearlyPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YearlyPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, YearlyPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YearlyPaymentClient<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first YearlyPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyPaymentFindFirstArgs} args - Arguments to find a YearlyPayment
     * @example
     * // Get one YearlyPayment
     * const yearlyPayment = await prisma.yearlyPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YearlyPaymentFindFirstArgs>(args?: SelectSubset<T, YearlyPaymentFindFirstArgs<ExtArgs>>): Prisma__YearlyPaymentClient<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first YearlyPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyPaymentFindFirstOrThrowArgs} args - Arguments to find a YearlyPayment
     * @example
     * // Get one YearlyPayment
     * const yearlyPayment = await prisma.yearlyPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YearlyPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, YearlyPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__YearlyPaymentClient<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more YearlyPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YearlyPayments
     * const yearlyPayments = await prisma.yearlyPayment.findMany()
     * 
     * // Get first 10 YearlyPayments
     * const yearlyPayments = await prisma.yearlyPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yearlyPaymentWithIdOnly = await prisma.yearlyPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YearlyPaymentFindManyArgs>(args?: SelectSubset<T, YearlyPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a YearlyPayment.
     * @param {YearlyPaymentCreateArgs} args - Arguments to create a YearlyPayment.
     * @example
     * // Create one YearlyPayment
     * const YearlyPayment = await prisma.yearlyPayment.create({
     *   data: {
     *     // ... data to create a YearlyPayment
     *   }
     * })
     * 
     */
    create<T extends YearlyPaymentCreateArgs>(args: SelectSubset<T, YearlyPaymentCreateArgs<ExtArgs>>): Prisma__YearlyPaymentClient<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many YearlyPayments.
     * @param {YearlyPaymentCreateManyArgs} args - Arguments to create many YearlyPayments.
     * @example
     * // Create many YearlyPayments
     * const yearlyPayment = await prisma.yearlyPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YearlyPaymentCreateManyArgs>(args?: SelectSubset<T, YearlyPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YearlyPayments and returns the data saved in the database.
     * @param {YearlyPaymentCreateManyAndReturnArgs} args - Arguments to create many YearlyPayments.
     * @example
     * // Create many YearlyPayments
     * const yearlyPayment = await prisma.yearlyPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YearlyPayments and only return the `id`
     * const yearlyPaymentWithIdOnly = await prisma.yearlyPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YearlyPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, YearlyPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a YearlyPayment.
     * @param {YearlyPaymentDeleteArgs} args - Arguments to delete one YearlyPayment.
     * @example
     * // Delete one YearlyPayment
     * const YearlyPayment = await prisma.yearlyPayment.delete({
     *   where: {
     *     // ... filter to delete one YearlyPayment
     *   }
     * })
     * 
     */
    delete<T extends YearlyPaymentDeleteArgs>(args: SelectSubset<T, YearlyPaymentDeleteArgs<ExtArgs>>): Prisma__YearlyPaymentClient<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one YearlyPayment.
     * @param {YearlyPaymentUpdateArgs} args - Arguments to update one YearlyPayment.
     * @example
     * // Update one YearlyPayment
     * const yearlyPayment = await prisma.yearlyPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YearlyPaymentUpdateArgs>(args: SelectSubset<T, YearlyPaymentUpdateArgs<ExtArgs>>): Prisma__YearlyPaymentClient<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more YearlyPayments.
     * @param {YearlyPaymentDeleteManyArgs} args - Arguments to filter YearlyPayments to delete.
     * @example
     * // Delete a few YearlyPayments
     * const { count } = await prisma.yearlyPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YearlyPaymentDeleteManyArgs>(args?: SelectSubset<T, YearlyPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YearlyPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YearlyPayments
     * const yearlyPayment = await prisma.yearlyPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YearlyPaymentUpdateManyArgs>(args: SelectSubset<T, YearlyPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YearlyPayments and returns the data updated in the database.
     * @param {YearlyPaymentUpdateManyAndReturnArgs} args - Arguments to update many YearlyPayments.
     * @example
     * // Update many YearlyPayments
     * const yearlyPayment = await prisma.yearlyPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more YearlyPayments and only return the `id`
     * const yearlyPaymentWithIdOnly = await prisma.yearlyPayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends YearlyPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, YearlyPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one YearlyPayment.
     * @param {YearlyPaymentUpsertArgs} args - Arguments to update or create a YearlyPayment.
     * @example
     * // Update or create a YearlyPayment
     * const yearlyPayment = await prisma.yearlyPayment.upsert({
     *   create: {
     *     // ... data to create a YearlyPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YearlyPayment we want to update
     *   }
     * })
     */
    upsert<T extends YearlyPaymentUpsertArgs>(args: SelectSubset<T, YearlyPaymentUpsertArgs<ExtArgs>>): Prisma__YearlyPaymentClient<$Result.GetResult<Prisma.$YearlyPaymentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of YearlyPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyPaymentCountArgs} args - Arguments to filter YearlyPayments to count.
     * @example
     * // Count the number of YearlyPayments
     * const count = await prisma.yearlyPayment.count({
     *   where: {
     *     // ... the filter for the YearlyPayments we want to count
     *   }
     * })
    **/
    count<T extends YearlyPaymentCountArgs>(
      args?: Subset<T, YearlyPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YearlyPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YearlyPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YearlyPaymentAggregateArgs>(args: Subset<T, YearlyPaymentAggregateArgs>): Prisma.PrismaPromise<GetYearlyPaymentAggregateType<T>>

    /**
     * Group by YearlyPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyPaymentGroupByArgs} args - Group by arguments.
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
      T extends YearlyPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YearlyPaymentGroupByArgs['orderBy'] }
        : { orderBy?: YearlyPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YearlyPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYearlyPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YearlyPayment model
   */
  readonly fields: YearlyPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YearlyPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YearlyPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the YearlyPayment model
   */ 
  interface YearlyPaymentFieldRefs {
    readonly id: FieldRef<"YearlyPayment", 'String'>
    readonly year: FieldRef<"YearlyPayment", 'Int'>
    readonly amount: FieldRef<"YearlyPayment", 'Float'>
    readonly createdAt: FieldRef<"YearlyPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"YearlyPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * YearlyPayment findUnique
   */
  export type YearlyPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * Filter, which YearlyPayment to fetch.
     */
    where: YearlyPaymentWhereUniqueInput
  }

  /**
   * YearlyPayment findUniqueOrThrow
   */
  export type YearlyPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * Filter, which YearlyPayment to fetch.
     */
    where: YearlyPaymentWhereUniqueInput
  }

  /**
   * YearlyPayment findFirst
   */
  export type YearlyPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * Filter, which YearlyPayment to fetch.
     */
    where?: YearlyPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YearlyPayments to fetch.
     */
    orderBy?: YearlyPaymentOrderByWithRelationInput | YearlyPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YearlyPayments.
     */
    cursor?: YearlyPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YearlyPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YearlyPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YearlyPayments.
     */
    distinct?: YearlyPaymentScalarFieldEnum | YearlyPaymentScalarFieldEnum[]
  }

  /**
   * YearlyPayment findFirstOrThrow
   */
  export type YearlyPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * Filter, which YearlyPayment to fetch.
     */
    where?: YearlyPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YearlyPayments to fetch.
     */
    orderBy?: YearlyPaymentOrderByWithRelationInput | YearlyPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YearlyPayments.
     */
    cursor?: YearlyPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YearlyPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YearlyPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YearlyPayments.
     */
    distinct?: YearlyPaymentScalarFieldEnum | YearlyPaymentScalarFieldEnum[]
  }

  /**
   * YearlyPayment findMany
   */
  export type YearlyPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * Filter, which YearlyPayments to fetch.
     */
    where?: YearlyPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YearlyPayments to fetch.
     */
    orderBy?: YearlyPaymentOrderByWithRelationInput | YearlyPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YearlyPayments.
     */
    cursor?: YearlyPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YearlyPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YearlyPayments.
     */
    skip?: number
    distinct?: YearlyPaymentScalarFieldEnum | YearlyPaymentScalarFieldEnum[]
  }

  /**
   * YearlyPayment create
   */
  export type YearlyPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * The data needed to create a YearlyPayment.
     */
    data: XOR<YearlyPaymentCreateInput, YearlyPaymentUncheckedCreateInput>
  }

  /**
   * YearlyPayment createMany
   */
  export type YearlyPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YearlyPayments.
     */
    data: YearlyPaymentCreateManyInput | YearlyPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YearlyPayment createManyAndReturn
   */
  export type YearlyPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many YearlyPayments.
     */
    data: YearlyPaymentCreateManyInput | YearlyPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YearlyPayment update
   */
  export type YearlyPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * The data needed to update a YearlyPayment.
     */
    data: XOR<YearlyPaymentUpdateInput, YearlyPaymentUncheckedUpdateInput>
    /**
     * Choose, which YearlyPayment to update.
     */
    where: YearlyPaymentWhereUniqueInput
  }

  /**
   * YearlyPayment updateMany
   */
  export type YearlyPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YearlyPayments.
     */
    data: XOR<YearlyPaymentUpdateManyMutationInput, YearlyPaymentUncheckedUpdateManyInput>
    /**
     * Filter which YearlyPayments to update
     */
    where?: YearlyPaymentWhereInput
  }

  /**
   * YearlyPayment updateManyAndReturn
   */
  export type YearlyPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * The data used to update YearlyPayments.
     */
    data: XOR<YearlyPaymentUpdateManyMutationInput, YearlyPaymentUncheckedUpdateManyInput>
    /**
     * Filter which YearlyPayments to update
     */
    where?: YearlyPaymentWhereInput
  }

  /**
   * YearlyPayment upsert
   */
  export type YearlyPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * The filter to search for the YearlyPayment to update in case it exists.
     */
    where: YearlyPaymentWhereUniqueInput
    /**
     * In case the YearlyPayment found by the `where` argument doesn't exist, create a new YearlyPayment with this data.
     */
    create: XOR<YearlyPaymentCreateInput, YearlyPaymentUncheckedCreateInput>
    /**
     * In case the YearlyPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YearlyPaymentUpdateInput, YearlyPaymentUncheckedUpdateInput>
  }

  /**
   * YearlyPayment delete
   */
  export type YearlyPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
    /**
     * Filter which YearlyPayment to delete.
     */
    where: YearlyPaymentWhereUniqueInput
  }

  /**
   * YearlyPayment deleteMany
   */
  export type YearlyPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YearlyPayments to delete
     */
    where?: YearlyPaymentWhereInput
  }

  /**
   * YearlyPayment without action
   */
  export type YearlyPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyPayment
     */
    select?: YearlyPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyPayment
     */
    omit?: YearlyPaymentOmit<ExtArgs> | null
  }


  /**
   * Model YearlyDonation
   */

  export type AggregateYearlyDonation = {
    _count: YearlyDonationCountAggregateOutputType | null
    _avg: YearlyDonationAvgAggregateOutputType | null
    _sum: YearlyDonationSumAggregateOutputType | null
    _min: YearlyDonationMinAggregateOutputType | null
    _max: YearlyDonationMaxAggregateOutputType | null
  }

  export type YearlyDonationAvgAggregateOutputType = {
    year: number | null
    amount: number | null
  }

  export type YearlyDonationSumAggregateOutputType = {
    year: number | null
    amount: number | null
  }

  export type YearlyDonationMinAggregateOutputType = {
    id: string | null
    year: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YearlyDonationMaxAggregateOutputType = {
    id: string | null
    year: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YearlyDonationCountAggregateOutputType = {
    id: number
    year: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type YearlyDonationAvgAggregateInputType = {
    year?: true
    amount?: true
  }

  export type YearlyDonationSumAggregateInputType = {
    year?: true
    amount?: true
  }

  export type YearlyDonationMinAggregateInputType = {
    id?: true
    year?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YearlyDonationMaxAggregateInputType = {
    id?: true
    year?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YearlyDonationCountAggregateInputType = {
    id?: true
    year?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type YearlyDonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YearlyDonation to aggregate.
     */
    where?: YearlyDonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YearlyDonations to fetch.
     */
    orderBy?: YearlyDonationOrderByWithRelationInput | YearlyDonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YearlyDonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YearlyDonations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YearlyDonations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YearlyDonations
    **/
    _count?: true | YearlyDonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YearlyDonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YearlyDonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YearlyDonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YearlyDonationMaxAggregateInputType
  }

  export type GetYearlyDonationAggregateType<T extends YearlyDonationAggregateArgs> = {
        [P in keyof T & keyof AggregateYearlyDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYearlyDonation[P]>
      : GetScalarType<T[P], AggregateYearlyDonation[P]>
  }




  export type YearlyDonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YearlyDonationWhereInput
    orderBy?: YearlyDonationOrderByWithAggregationInput | YearlyDonationOrderByWithAggregationInput[]
    by: YearlyDonationScalarFieldEnum[] | YearlyDonationScalarFieldEnum
    having?: YearlyDonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YearlyDonationCountAggregateInputType | true
    _avg?: YearlyDonationAvgAggregateInputType
    _sum?: YearlyDonationSumAggregateInputType
    _min?: YearlyDonationMinAggregateInputType
    _max?: YearlyDonationMaxAggregateInputType
  }

  export type YearlyDonationGroupByOutputType = {
    id: string
    year: number
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: YearlyDonationCountAggregateOutputType | null
    _avg: YearlyDonationAvgAggregateOutputType | null
    _sum: YearlyDonationSumAggregateOutputType | null
    _min: YearlyDonationMinAggregateOutputType | null
    _max: YearlyDonationMaxAggregateOutputType | null
  }

  type GetYearlyDonationGroupByPayload<T extends YearlyDonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YearlyDonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YearlyDonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YearlyDonationGroupByOutputType[P]>
            : GetScalarType<T[P], YearlyDonationGroupByOutputType[P]>
        }
      >
    >


  export type YearlyDonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["yearlyDonation"]>

  export type YearlyDonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["yearlyDonation"]>

  export type YearlyDonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["yearlyDonation"]>

  export type YearlyDonationSelectScalar = {
    id?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type YearlyDonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["yearlyDonation"]>

  export type $YearlyDonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YearlyDonation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["yearlyDonation"]>
    composites: {}
  }

  type YearlyDonationGetPayload<S extends boolean | null | undefined | YearlyDonationDefaultArgs> = $Result.GetResult<Prisma.$YearlyDonationPayload, S>

  type YearlyDonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YearlyDonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YearlyDonationCountAggregateInputType | true
    }

  export interface YearlyDonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YearlyDonation'], meta: { name: 'YearlyDonation' } }
    /**
     * Find zero or one YearlyDonation that matches the filter.
     * @param {YearlyDonationFindUniqueArgs} args - Arguments to find a YearlyDonation
     * @example
     * // Get one YearlyDonation
     * const yearlyDonation = await prisma.yearlyDonation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YearlyDonationFindUniqueArgs>(args: SelectSubset<T, YearlyDonationFindUniqueArgs<ExtArgs>>): Prisma__YearlyDonationClient<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one YearlyDonation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YearlyDonationFindUniqueOrThrowArgs} args - Arguments to find a YearlyDonation
     * @example
     * // Get one YearlyDonation
     * const yearlyDonation = await prisma.yearlyDonation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YearlyDonationFindUniqueOrThrowArgs>(args: SelectSubset<T, YearlyDonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YearlyDonationClient<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first YearlyDonation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyDonationFindFirstArgs} args - Arguments to find a YearlyDonation
     * @example
     * // Get one YearlyDonation
     * const yearlyDonation = await prisma.yearlyDonation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YearlyDonationFindFirstArgs>(args?: SelectSubset<T, YearlyDonationFindFirstArgs<ExtArgs>>): Prisma__YearlyDonationClient<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first YearlyDonation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyDonationFindFirstOrThrowArgs} args - Arguments to find a YearlyDonation
     * @example
     * // Get one YearlyDonation
     * const yearlyDonation = await prisma.yearlyDonation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YearlyDonationFindFirstOrThrowArgs>(args?: SelectSubset<T, YearlyDonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__YearlyDonationClient<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more YearlyDonations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyDonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YearlyDonations
     * const yearlyDonations = await prisma.yearlyDonation.findMany()
     * 
     * // Get first 10 YearlyDonations
     * const yearlyDonations = await prisma.yearlyDonation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yearlyDonationWithIdOnly = await prisma.yearlyDonation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YearlyDonationFindManyArgs>(args?: SelectSubset<T, YearlyDonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a YearlyDonation.
     * @param {YearlyDonationCreateArgs} args - Arguments to create a YearlyDonation.
     * @example
     * // Create one YearlyDonation
     * const YearlyDonation = await prisma.yearlyDonation.create({
     *   data: {
     *     // ... data to create a YearlyDonation
     *   }
     * })
     * 
     */
    create<T extends YearlyDonationCreateArgs>(args: SelectSubset<T, YearlyDonationCreateArgs<ExtArgs>>): Prisma__YearlyDonationClient<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many YearlyDonations.
     * @param {YearlyDonationCreateManyArgs} args - Arguments to create many YearlyDonations.
     * @example
     * // Create many YearlyDonations
     * const yearlyDonation = await prisma.yearlyDonation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YearlyDonationCreateManyArgs>(args?: SelectSubset<T, YearlyDonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YearlyDonations and returns the data saved in the database.
     * @param {YearlyDonationCreateManyAndReturnArgs} args - Arguments to create many YearlyDonations.
     * @example
     * // Create many YearlyDonations
     * const yearlyDonation = await prisma.yearlyDonation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YearlyDonations and only return the `id`
     * const yearlyDonationWithIdOnly = await prisma.yearlyDonation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YearlyDonationCreateManyAndReturnArgs>(args?: SelectSubset<T, YearlyDonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a YearlyDonation.
     * @param {YearlyDonationDeleteArgs} args - Arguments to delete one YearlyDonation.
     * @example
     * // Delete one YearlyDonation
     * const YearlyDonation = await prisma.yearlyDonation.delete({
     *   where: {
     *     // ... filter to delete one YearlyDonation
     *   }
     * })
     * 
     */
    delete<T extends YearlyDonationDeleteArgs>(args: SelectSubset<T, YearlyDonationDeleteArgs<ExtArgs>>): Prisma__YearlyDonationClient<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one YearlyDonation.
     * @param {YearlyDonationUpdateArgs} args - Arguments to update one YearlyDonation.
     * @example
     * // Update one YearlyDonation
     * const yearlyDonation = await prisma.yearlyDonation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YearlyDonationUpdateArgs>(args: SelectSubset<T, YearlyDonationUpdateArgs<ExtArgs>>): Prisma__YearlyDonationClient<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more YearlyDonations.
     * @param {YearlyDonationDeleteManyArgs} args - Arguments to filter YearlyDonations to delete.
     * @example
     * // Delete a few YearlyDonations
     * const { count } = await prisma.yearlyDonation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YearlyDonationDeleteManyArgs>(args?: SelectSubset<T, YearlyDonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YearlyDonations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyDonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YearlyDonations
     * const yearlyDonation = await prisma.yearlyDonation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YearlyDonationUpdateManyArgs>(args: SelectSubset<T, YearlyDonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YearlyDonations and returns the data updated in the database.
     * @param {YearlyDonationUpdateManyAndReturnArgs} args - Arguments to update many YearlyDonations.
     * @example
     * // Update many YearlyDonations
     * const yearlyDonation = await prisma.yearlyDonation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more YearlyDonations and only return the `id`
     * const yearlyDonationWithIdOnly = await prisma.yearlyDonation.updateManyAndReturn({
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
    updateManyAndReturn<T extends YearlyDonationUpdateManyAndReturnArgs>(args: SelectSubset<T, YearlyDonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one YearlyDonation.
     * @param {YearlyDonationUpsertArgs} args - Arguments to update or create a YearlyDonation.
     * @example
     * // Update or create a YearlyDonation
     * const yearlyDonation = await prisma.yearlyDonation.upsert({
     *   create: {
     *     // ... data to create a YearlyDonation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YearlyDonation we want to update
     *   }
     * })
     */
    upsert<T extends YearlyDonationUpsertArgs>(args: SelectSubset<T, YearlyDonationUpsertArgs<ExtArgs>>): Prisma__YearlyDonationClient<$Result.GetResult<Prisma.$YearlyDonationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of YearlyDonations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyDonationCountArgs} args - Arguments to filter YearlyDonations to count.
     * @example
     * // Count the number of YearlyDonations
     * const count = await prisma.yearlyDonation.count({
     *   where: {
     *     // ... the filter for the YearlyDonations we want to count
     *   }
     * })
    **/
    count<T extends YearlyDonationCountArgs>(
      args?: Subset<T, YearlyDonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YearlyDonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YearlyDonation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyDonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YearlyDonationAggregateArgs>(args: Subset<T, YearlyDonationAggregateArgs>): Prisma.PrismaPromise<GetYearlyDonationAggregateType<T>>

    /**
     * Group by YearlyDonation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyDonationGroupByArgs} args - Group by arguments.
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
      T extends YearlyDonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YearlyDonationGroupByArgs['orderBy'] }
        : { orderBy?: YearlyDonationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YearlyDonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYearlyDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YearlyDonation model
   */
  readonly fields: YearlyDonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YearlyDonation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YearlyDonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the YearlyDonation model
   */ 
  interface YearlyDonationFieldRefs {
    readonly id: FieldRef<"YearlyDonation", 'String'>
    readonly year: FieldRef<"YearlyDonation", 'Int'>
    readonly amount: FieldRef<"YearlyDonation", 'Float'>
    readonly createdAt: FieldRef<"YearlyDonation", 'DateTime'>
    readonly updatedAt: FieldRef<"YearlyDonation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * YearlyDonation findUnique
   */
  export type YearlyDonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * Filter, which YearlyDonation to fetch.
     */
    where: YearlyDonationWhereUniqueInput
  }

  /**
   * YearlyDonation findUniqueOrThrow
   */
  export type YearlyDonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * Filter, which YearlyDonation to fetch.
     */
    where: YearlyDonationWhereUniqueInput
  }

  /**
   * YearlyDonation findFirst
   */
  export type YearlyDonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * Filter, which YearlyDonation to fetch.
     */
    where?: YearlyDonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YearlyDonations to fetch.
     */
    orderBy?: YearlyDonationOrderByWithRelationInput | YearlyDonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YearlyDonations.
     */
    cursor?: YearlyDonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YearlyDonations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YearlyDonations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YearlyDonations.
     */
    distinct?: YearlyDonationScalarFieldEnum | YearlyDonationScalarFieldEnum[]
  }

  /**
   * YearlyDonation findFirstOrThrow
   */
  export type YearlyDonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * Filter, which YearlyDonation to fetch.
     */
    where?: YearlyDonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YearlyDonations to fetch.
     */
    orderBy?: YearlyDonationOrderByWithRelationInput | YearlyDonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YearlyDonations.
     */
    cursor?: YearlyDonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YearlyDonations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YearlyDonations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YearlyDonations.
     */
    distinct?: YearlyDonationScalarFieldEnum | YearlyDonationScalarFieldEnum[]
  }

  /**
   * YearlyDonation findMany
   */
  export type YearlyDonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * Filter, which YearlyDonations to fetch.
     */
    where?: YearlyDonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YearlyDonations to fetch.
     */
    orderBy?: YearlyDonationOrderByWithRelationInput | YearlyDonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YearlyDonations.
     */
    cursor?: YearlyDonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YearlyDonations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YearlyDonations.
     */
    skip?: number
    distinct?: YearlyDonationScalarFieldEnum | YearlyDonationScalarFieldEnum[]
  }

  /**
   * YearlyDonation create
   */
  export type YearlyDonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * The data needed to create a YearlyDonation.
     */
    data: XOR<YearlyDonationCreateInput, YearlyDonationUncheckedCreateInput>
  }

  /**
   * YearlyDonation createMany
   */
  export type YearlyDonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YearlyDonations.
     */
    data: YearlyDonationCreateManyInput | YearlyDonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YearlyDonation createManyAndReturn
   */
  export type YearlyDonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * The data used to create many YearlyDonations.
     */
    data: YearlyDonationCreateManyInput | YearlyDonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YearlyDonation update
   */
  export type YearlyDonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * The data needed to update a YearlyDonation.
     */
    data: XOR<YearlyDonationUpdateInput, YearlyDonationUncheckedUpdateInput>
    /**
     * Choose, which YearlyDonation to update.
     */
    where: YearlyDonationWhereUniqueInput
  }

  /**
   * YearlyDonation updateMany
   */
  export type YearlyDonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YearlyDonations.
     */
    data: XOR<YearlyDonationUpdateManyMutationInput, YearlyDonationUncheckedUpdateManyInput>
    /**
     * Filter which YearlyDonations to update
     */
    where?: YearlyDonationWhereInput
  }

  /**
   * YearlyDonation updateManyAndReturn
   */
  export type YearlyDonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * The data used to update YearlyDonations.
     */
    data: XOR<YearlyDonationUpdateManyMutationInput, YearlyDonationUncheckedUpdateManyInput>
    /**
     * Filter which YearlyDonations to update
     */
    where?: YearlyDonationWhereInput
  }

  /**
   * YearlyDonation upsert
   */
  export type YearlyDonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * The filter to search for the YearlyDonation to update in case it exists.
     */
    where: YearlyDonationWhereUniqueInput
    /**
     * In case the YearlyDonation found by the `where` argument doesn't exist, create a new YearlyDonation with this data.
     */
    create: XOR<YearlyDonationCreateInput, YearlyDonationUncheckedCreateInput>
    /**
     * In case the YearlyDonation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YearlyDonationUpdateInput, YearlyDonationUncheckedUpdateInput>
  }

  /**
   * YearlyDonation delete
   */
  export type YearlyDonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
    /**
     * Filter which YearlyDonation to delete.
     */
    where: YearlyDonationWhereUniqueInput
  }

  /**
   * YearlyDonation deleteMany
   */
  export type YearlyDonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YearlyDonations to delete
     */
    where?: YearlyDonationWhereInput
  }

  /**
   * YearlyDonation without action
   */
  export type YearlyDonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyDonation
     */
    select?: YearlyDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YearlyDonation
     */
    omit?: YearlyDonationOmit<ExtArgs> | null
  }


  /**
   * Model MemberPayments
   */

  export type AggregateMemberPayments = {
    _count: MemberPaymentsCountAggregateOutputType | null
    _avg: MemberPaymentsAvgAggregateOutputType | null
    _sum: MemberPaymentsSumAggregateOutputType | null
    _min: MemberPaymentsMinAggregateOutputType | null
    _max: MemberPaymentsMaxAggregateOutputType | null
  }

  export type MemberPaymentsAvgAggregateOutputType = {
    amount: number | null
  }

  export type MemberPaymentsSumAggregateOutputType = {
    amount: number | null
  }

  export type MemberPaymentsMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberPaymentsMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberPaymentsCountAggregateOutputType = {
    id: number
    memberId: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberPaymentsAvgAggregateInputType = {
    amount?: true
  }

  export type MemberPaymentsSumAggregateInputType = {
    amount?: true
  }

  export type MemberPaymentsMinAggregateInputType = {
    id?: true
    memberId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberPaymentsMaxAggregateInputType = {
    id?: true
    memberId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberPaymentsCountAggregateInputType = {
    id?: true
    memberId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberPaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberPayments to aggregate.
     */
    where?: MemberPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberPayments to fetch.
     */
    orderBy?: MemberPaymentsOrderByWithRelationInput | MemberPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberPayments
    **/
    _count?: true | MemberPaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberPaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberPaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberPaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberPaymentsMaxAggregateInputType
  }

  export type GetMemberPaymentsAggregateType<T extends MemberPaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberPayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberPayments[P]>
      : GetScalarType<T[P], AggregateMemberPayments[P]>
  }




  export type MemberPaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberPaymentsWhereInput
    orderBy?: MemberPaymentsOrderByWithAggregationInput | MemberPaymentsOrderByWithAggregationInput[]
    by: MemberPaymentsScalarFieldEnum[] | MemberPaymentsScalarFieldEnum
    having?: MemberPaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberPaymentsCountAggregateInputType | true
    _avg?: MemberPaymentsAvgAggregateInputType
    _sum?: MemberPaymentsSumAggregateInputType
    _min?: MemberPaymentsMinAggregateInputType
    _max?: MemberPaymentsMaxAggregateInputType
  }

  export type MemberPaymentsGroupByOutputType = {
    id: string
    memberId: string
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: MemberPaymentsCountAggregateOutputType | null
    _avg: MemberPaymentsAvgAggregateOutputType | null
    _sum: MemberPaymentsSumAggregateOutputType | null
    _min: MemberPaymentsMinAggregateOutputType | null
    _max: MemberPaymentsMaxAggregateOutputType | null
  }

  type GetMemberPaymentsGroupByPayload<T extends MemberPaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberPaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberPaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberPaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], MemberPaymentsGroupByOutputType[P]>
        }
      >
    >


  export type MemberPaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberPayments"]>

  export type MemberPaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberPayments"]>

  export type MemberPaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberPayments"]>

  export type MemberPaymentsSelectScalar = {
    id?: boolean
    memberId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberPaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["memberPayments"]>
  export type MemberPaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type MemberPaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type MemberPaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $MemberPaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberPayments"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["memberPayments"]>
    composites: {}
  }

  type MemberPaymentsGetPayload<S extends boolean | null | undefined | MemberPaymentsDefaultArgs> = $Result.GetResult<Prisma.$MemberPaymentsPayload, S>

  type MemberPaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberPaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberPaymentsCountAggregateInputType | true
    }

  export interface MemberPaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberPayments'], meta: { name: 'MemberPayments' } }
    /**
     * Find zero or one MemberPayments that matches the filter.
     * @param {MemberPaymentsFindUniqueArgs} args - Arguments to find a MemberPayments
     * @example
     * // Get one MemberPayments
     * const memberPayments = await prisma.memberPayments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberPaymentsFindUniqueArgs>(args: SelectSubset<T, MemberPaymentsFindUniqueArgs<ExtArgs>>): Prisma__MemberPaymentsClient<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MemberPayments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberPaymentsFindUniqueOrThrowArgs} args - Arguments to find a MemberPayments
     * @example
     * // Get one MemberPayments
     * const memberPayments = await prisma.memberPayments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberPaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberPaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberPaymentsClient<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MemberPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentsFindFirstArgs} args - Arguments to find a MemberPayments
     * @example
     * // Get one MemberPayments
     * const memberPayments = await prisma.memberPayments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberPaymentsFindFirstArgs>(args?: SelectSubset<T, MemberPaymentsFindFirstArgs<ExtArgs>>): Prisma__MemberPaymentsClient<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MemberPayments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentsFindFirstOrThrowArgs} args - Arguments to find a MemberPayments
     * @example
     * // Get one MemberPayments
     * const memberPayments = await prisma.memberPayments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberPaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberPaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberPaymentsClient<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MemberPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberPayments
     * const memberPayments = await prisma.memberPayments.findMany()
     * 
     * // Get first 10 MemberPayments
     * const memberPayments = await prisma.memberPayments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberPaymentsWithIdOnly = await prisma.memberPayments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberPaymentsFindManyArgs>(args?: SelectSubset<T, MemberPaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MemberPayments.
     * @param {MemberPaymentsCreateArgs} args - Arguments to create a MemberPayments.
     * @example
     * // Create one MemberPayments
     * const MemberPayments = await prisma.memberPayments.create({
     *   data: {
     *     // ... data to create a MemberPayments
     *   }
     * })
     * 
     */
    create<T extends MemberPaymentsCreateArgs>(args: SelectSubset<T, MemberPaymentsCreateArgs<ExtArgs>>): Prisma__MemberPaymentsClient<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MemberPayments.
     * @param {MemberPaymentsCreateManyArgs} args - Arguments to create many MemberPayments.
     * @example
     * // Create many MemberPayments
     * const memberPayments = await prisma.memberPayments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberPaymentsCreateManyArgs>(args?: SelectSubset<T, MemberPaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberPayments and returns the data saved in the database.
     * @param {MemberPaymentsCreateManyAndReturnArgs} args - Arguments to create many MemberPayments.
     * @example
     * // Create many MemberPayments
     * const memberPayments = await prisma.memberPayments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberPayments and only return the `id`
     * const memberPaymentsWithIdOnly = await prisma.memberPayments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberPaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberPaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MemberPayments.
     * @param {MemberPaymentsDeleteArgs} args - Arguments to delete one MemberPayments.
     * @example
     * // Delete one MemberPayments
     * const MemberPayments = await prisma.memberPayments.delete({
     *   where: {
     *     // ... filter to delete one MemberPayments
     *   }
     * })
     * 
     */
    delete<T extends MemberPaymentsDeleteArgs>(args: SelectSubset<T, MemberPaymentsDeleteArgs<ExtArgs>>): Prisma__MemberPaymentsClient<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MemberPayments.
     * @param {MemberPaymentsUpdateArgs} args - Arguments to update one MemberPayments.
     * @example
     * // Update one MemberPayments
     * const memberPayments = await prisma.memberPayments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberPaymentsUpdateArgs>(args: SelectSubset<T, MemberPaymentsUpdateArgs<ExtArgs>>): Prisma__MemberPaymentsClient<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MemberPayments.
     * @param {MemberPaymentsDeleteManyArgs} args - Arguments to filter MemberPayments to delete.
     * @example
     * // Delete a few MemberPayments
     * const { count } = await prisma.memberPayments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberPaymentsDeleteManyArgs>(args?: SelectSubset<T, MemberPaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberPayments
     * const memberPayments = await prisma.memberPayments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberPaymentsUpdateManyArgs>(args: SelectSubset<T, MemberPaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberPayments and returns the data updated in the database.
     * @param {MemberPaymentsUpdateManyAndReturnArgs} args - Arguments to update many MemberPayments.
     * @example
     * // Update many MemberPayments
     * const memberPayments = await prisma.memberPayments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberPayments and only return the `id`
     * const memberPaymentsWithIdOnly = await prisma.memberPayments.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberPaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberPaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MemberPayments.
     * @param {MemberPaymentsUpsertArgs} args - Arguments to update or create a MemberPayments.
     * @example
     * // Update or create a MemberPayments
     * const memberPayments = await prisma.memberPayments.upsert({
     *   create: {
     *     // ... data to create a MemberPayments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberPayments we want to update
     *   }
     * })
     */
    upsert<T extends MemberPaymentsUpsertArgs>(args: SelectSubset<T, MemberPaymentsUpsertArgs<ExtArgs>>): Prisma__MemberPaymentsClient<$Result.GetResult<Prisma.$MemberPaymentsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MemberPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentsCountArgs} args - Arguments to filter MemberPayments to count.
     * @example
     * // Count the number of MemberPayments
     * const count = await prisma.memberPayments.count({
     *   where: {
     *     // ... the filter for the MemberPayments we want to count
     *   }
     * })
    **/
    count<T extends MemberPaymentsCountArgs>(
      args?: Subset<T, MemberPaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberPaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberPaymentsAggregateArgs>(args: Subset<T, MemberPaymentsAggregateArgs>): Prisma.PrismaPromise<GetMemberPaymentsAggregateType<T>>

    /**
     * Group by MemberPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentsGroupByArgs} args - Group by arguments.
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
      T extends MemberPaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberPaymentsGroupByArgs['orderBy'] }
        : { orderBy?: MemberPaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberPaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberPayments model
   */
  readonly fields: MemberPaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberPayments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberPaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the MemberPayments model
   */ 
  interface MemberPaymentsFieldRefs {
    readonly id: FieldRef<"MemberPayments", 'String'>
    readonly memberId: FieldRef<"MemberPayments", 'String'>
    readonly amount: FieldRef<"MemberPayments", 'Float'>
    readonly createdAt: FieldRef<"MemberPayments", 'DateTime'>
    readonly updatedAt: FieldRef<"MemberPayments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberPayments findUnique
   */
  export type MemberPaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which MemberPayments to fetch.
     */
    where: MemberPaymentsWhereUniqueInput
  }

  /**
   * MemberPayments findUniqueOrThrow
   */
  export type MemberPaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which MemberPayments to fetch.
     */
    where: MemberPaymentsWhereUniqueInput
  }

  /**
   * MemberPayments findFirst
   */
  export type MemberPaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which MemberPayments to fetch.
     */
    where?: MemberPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberPayments to fetch.
     */
    orderBy?: MemberPaymentsOrderByWithRelationInput | MemberPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberPayments.
     */
    cursor?: MemberPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberPayments.
     */
    distinct?: MemberPaymentsScalarFieldEnum | MemberPaymentsScalarFieldEnum[]
  }

  /**
   * MemberPayments findFirstOrThrow
   */
  export type MemberPaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which MemberPayments to fetch.
     */
    where?: MemberPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberPayments to fetch.
     */
    orderBy?: MemberPaymentsOrderByWithRelationInput | MemberPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberPayments.
     */
    cursor?: MemberPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberPayments.
     */
    distinct?: MemberPaymentsScalarFieldEnum | MemberPaymentsScalarFieldEnum[]
  }

  /**
   * MemberPayments findMany
   */
  export type MemberPaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which MemberPayments to fetch.
     */
    where?: MemberPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberPayments to fetch.
     */
    orderBy?: MemberPaymentsOrderByWithRelationInput | MemberPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberPayments.
     */
    cursor?: MemberPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberPayments.
     */
    skip?: number
    distinct?: MemberPaymentsScalarFieldEnum | MemberPaymentsScalarFieldEnum[]
  }

  /**
   * MemberPayments create
   */
  export type MemberPaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberPayments.
     */
    data: XOR<MemberPaymentsCreateInput, MemberPaymentsUncheckedCreateInput>
  }

  /**
   * MemberPayments createMany
   */
  export type MemberPaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberPayments.
     */
    data: MemberPaymentsCreateManyInput | MemberPaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberPayments createManyAndReturn
   */
  export type MemberPaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many MemberPayments.
     */
    data: MemberPaymentsCreateManyInput | MemberPaymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberPayments update
   */
  export type MemberPaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberPayments.
     */
    data: XOR<MemberPaymentsUpdateInput, MemberPaymentsUncheckedUpdateInput>
    /**
     * Choose, which MemberPayments to update.
     */
    where: MemberPaymentsWhereUniqueInput
  }

  /**
   * MemberPayments updateMany
   */
  export type MemberPaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberPayments.
     */
    data: XOR<MemberPaymentsUpdateManyMutationInput, MemberPaymentsUncheckedUpdateManyInput>
    /**
     * Filter which MemberPayments to update
     */
    where?: MemberPaymentsWhereInput
  }

  /**
   * MemberPayments updateManyAndReturn
   */
  export type MemberPaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * The data used to update MemberPayments.
     */
    data: XOR<MemberPaymentsUpdateManyMutationInput, MemberPaymentsUncheckedUpdateManyInput>
    /**
     * Filter which MemberPayments to update
     */
    where?: MemberPaymentsWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberPayments upsert
   */
  export type MemberPaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberPayments to update in case it exists.
     */
    where: MemberPaymentsWhereUniqueInput
    /**
     * In case the MemberPayments found by the `where` argument doesn't exist, create a new MemberPayments with this data.
     */
    create: XOR<MemberPaymentsCreateInput, MemberPaymentsUncheckedCreateInput>
    /**
     * In case the MemberPayments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberPaymentsUpdateInput, MemberPaymentsUncheckedUpdateInput>
  }

  /**
   * MemberPayments delete
   */
  export type MemberPaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
    /**
     * Filter which MemberPayments to delete.
     */
    where: MemberPaymentsWhereUniqueInput
  }

  /**
   * MemberPayments deleteMany
   */
  export type MemberPaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberPayments to delete
     */
    where?: MemberPaymentsWhereInput
  }

  /**
   * MemberPayments without action
   */
  export type MemberPaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayments
     */
    select?: MemberPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayments
     */
    omit?: MemberPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentsInclude<ExtArgs> | null
  }


  /**
   * Model MemberMedia
   */

  export type AggregateMemberMedia = {
    _count: MemberMediaCountAggregateOutputType | null
    _min: MemberMediaMinAggregateOutputType | null
    _max: MemberMediaMaxAggregateOutputType | null
  }

  export type MemberMediaMinAggregateOutputType = {
    id: string | null
    profilePic: string | null
    cnicFront: string | null
    cnicBack: string | null
    memberId: string | null
  }

  export type MemberMediaMaxAggregateOutputType = {
    id: string | null
    profilePic: string | null
    cnicFront: string | null
    cnicBack: string | null
    memberId: string | null
  }

  export type MemberMediaCountAggregateOutputType = {
    id: number
    profilePic: number
    cnicFront: number
    cnicBack: number
    memberId: number
    _all: number
  }


  export type MemberMediaMinAggregateInputType = {
    id?: true
    profilePic?: true
    cnicFront?: true
    cnicBack?: true
    memberId?: true
  }

  export type MemberMediaMaxAggregateInputType = {
    id?: true
    profilePic?: true
    cnicFront?: true
    cnicBack?: true
    memberId?: true
  }

  export type MemberMediaCountAggregateInputType = {
    id?: true
    profilePic?: true
    cnicFront?: true
    cnicBack?: true
    memberId?: true
    _all?: true
  }

  export type MemberMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberMedia to aggregate.
     */
    where?: MemberMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberMedias to fetch.
     */
    orderBy?: MemberMediaOrderByWithRelationInput | MemberMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberMedias
    **/
    _count?: true | MemberMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMediaMaxAggregateInputType
  }

  export type GetMemberMediaAggregateType<T extends MemberMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberMedia[P]>
      : GetScalarType<T[P], AggregateMemberMedia[P]>
  }




  export type MemberMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberMediaWhereInput
    orderBy?: MemberMediaOrderByWithAggregationInput | MemberMediaOrderByWithAggregationInput[]
    by: MemberMediaScalarFieldEnum[] | MemberMediaScalarFieldEnum
    having?: MemberMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberMediaCountAggregateInputType | true
    _min?: MemberMediaMinAggregateInputType
    _max?: MemberMediaMaxAggregateInputType
  }

  export type MemberMediaGroupByOutputType = {
    id: string
    profilePic: string | null
    cnicFront: string | null
    cnicBack: string | null
    memberId: string
    _count: MemberMediaCountAggregateOutputType | null
    _min: MemberMediaMinAggregateOutputType | null
    _max: MemberMediaMaxAggregateOutputType | null
  }

  type GetMemberMediaGroupByPayload<T extends MemberMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberMediaGroupByOutputType[P]>
            : GetScalarType<T[P], MemberMediaGroupByOutputType[P]>
        }
      >
    >


  export type MemberMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profilePic?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    memberId?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberMedia"]>

  export type MemberMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profilePic?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    memberId?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberMedia"]>

  export type MemberMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profilePic?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    memberId?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberMedia"]>

  export type MemberMediaSelectScalar = {
    id?: boolean
    profilePic?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    memberId?: boolean
  }

  export type MemberMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profilePic" | "cnicFront" | "cnicBack" | "memberId", ExtArgs["result"]["memberMedia"]>
  export type MemberMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type MemberMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type MemberMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $MemberMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberMedia"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profilePic: string | null
      cnicFront: string | null
      cnicBack: string | null
      memberId: string
    }, ExtArgs["result"]["memberMedia"]>
    composites: {}
  }

  type MemberMediaGetPayload<S extends boolean | null | undefined | MemberMediaDefaultArgs> = $Result.GetResult<Prisma.$MemberMediaPayload, S>

  type MemberMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberMediaCountAggregateInputType | true
    }

  export interface MemberMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberMedia'], meta: { name: 'MemberMedia' } }
    /**
     * Find zero or one MemberMedia that matches the filter.
     * @param {MemberMediaFindUniqueArgs} args - Arguments to find a MemberMedia
     * @example
     * // Get one MemberMedia
     * const memberMedia = await prisma.memberMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberMediaFindUniqueArgs>(args: SelectSubset<T, MemberMediaFindUniqueArgs<ExtArgs>>): Prisma__MemberMediaClient<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MemberMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberMediaFindUniqueOrThrowArgs} args - Arguments to find a MemberMedia
     * @example
     * // Get one MemberMedia
     * const memberMedia = await prisma.memberMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberMediaClient<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MemberMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberMediaFindFirstArgs} args - Arguments to find a MemberMedia
     * @example
     * // Get one MemberMedia
     * const memberMedia = await prisma.memberMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberMediaFindFirstArgs>(args?: SelectSubset<T, MemberMediaFindFirstArgs<ExtArgs>>): Prisma__MemberMediaClient<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MemberMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberMediaFindFirstOrThrowArgs} args - Arguments to find a MemberMedia
     * @example
     * // Get one MemberMedia
     * const memberMedia = await prisma.memberMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberMediaClient<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MemberMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberMedias
     * const memberMedias = await prisma.memberMedia.findMany()
     * 
     * // Get first 10 MemberMedias
     * const memberMedias = await prisma.memberMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberMediaWithIdOnly = await prisma.memberMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberMediaFindManyArgs>(args?: SelectSubset<T, MemberMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MemberMedia.
     * @param {MemberMediaCreateArgs} args - Arguments to create a MemberMedia.
     * @example
     * // Create one MemberMedia
     * const MemberMedia = await prisma.memberMedia.create({
     *   data: {
     *     // ... data to create a MemberMedia
     *   }
     * })
     * 
     */
    create<T extends MemberMediaCreateArgs>(args: SelectSubset<T, MemberMediaCreateArgs<ExtArgs>>): Prisma__MemberMediaClient<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MemberMedias.
     * @param {MemberMediaCreateManyArgs} args - Arguments to create many MemberMedias.
     * @example
     * // Create many MemberMedias
     * const memberMedia = await prisma.memberMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberMediaCreateManyArgs>(args?: SelectSubset<T, MemberMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberMedias and returns the data saved in the database.
     * @param {MemberMediaCreateManyAndReturnArgs} args - Arguments to create many MemberMedias.
     * @example
     * // Create many MemberMedias
     * const memberMedia = await prisma.memberMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberMedias and only return the `id`
     * const memberMediaWithIdOnly = await prisma.memberMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MemberMedia.
     * @param {MemberMediaDeleteArgs} args - Arguments to delete one MemberMedia.
     * @example
     * // Delete one MemberMedia
     * const MemberMedia = await prisma.memberMedia.delete({
     *   where: {
     *     // ... filter to delete one MemberMedia
     *   }
     * })
     * 
     */
    delete<T extends MemberMediaDeleteArgs>(args: SelectSubset<T, MemberMediaDeleteArgs<ExtArgs>>): Prisma__MemberMediaClient<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MemberMedia.
     * @param {MemberMediaUpdateArgs} args - Arguments to update one MemberMedia.
     * @example
     * // Update one MemberMedia
     * const memberMedia = await prisma.memberMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberMediaUpdateArgs>(args: SelectSubset<T, MemberMediaUpdateArgs<ExtArgs>>): Prisma__MemberMediaClient<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MemberMedias.
     * @param {MemberMediaDeleteManyArgs} args - Arguments to filter MemberMedias to delete.
     * @example
     * // Delete a few MemberMedias
     * const { count } = await prisma.memberMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberMediaDeleteManyArgs>(args?: SelectSubset<T, MemberMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberMedias
     * const memberMedia = await prisma.memberMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberMediaUpdateManyArgs>(args: SelectSubset<T, MemberMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberMedias and returns the data updated in the database.
     * @param {MemberMediaUpdateManyAndReturnArgs} args - Arguments to update many MemberMedias.
     * @example
     * // Update many MemberMedias
     * const memberMedia = await prisma.memberMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberMedias and only return the `id`
     * const memberMediaWithIdOnly = await prisma.memberMedia.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MemberMedia.
     * @param {MemberMediaUpsertArgs} args - Arguments to update or create a MemberMedia.
     * @example
     * // Update or create a MemberMedia
     * const memberMedia = await prisma.memberMedia.upsert({
     *   create: {
     *     // ... data to create a MemberMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberMedia we want to update
     *   }
     * })
     */
    upsert<T extends MemberMediaUpsertArgs>(args: SelectSubset<T, MemberMediaUpsertArgs<ExtArgs>>): Prisma__MemberMediaClient<$Result.GetResult<Prisma.$MemberMediaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MemberMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberMediaCountArgs} args - Arguments to filter MemberMedias to count.
     * @example
     * // Count the number of MemberMedias
     * const count = await prisma.memberMedia.count({
     *   where: {
     *     // ... the filter for the MemberMedias we want to count
     *   }
     * })
    **/
    count<T extends MemberMediaCountArgs>(
      args?: Subset<T, MemberMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberMediaAggregateArgs>(args: Subset<T, MemberMediaAggregateArgs>): Prisma.PrismaPromise<GetMemberMediaAggregateType<T>>

    /**
     * Group by MemberMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberMediaGroupByArgs} args - Group by arguments.
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
      T extends MemberMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberMediaGroupByArgs['orderBy'] }
        : { orderBy?: MemberMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberMedia model
   */
  readonly fields: MemberMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the MemberMedia model
   */ 
  interface MemberMediaFieldRefs {
    readonly id: FieldRef<"MemberMedia", 'String'>
    readonly profilePic: FieldRef<"MemberMedia", 'String'>
    readonly cnicFront: FieldRef<"MemberMedia", 'String'>
    readonly cnicBack: FieldRef<"MemberMedia", 'String'>
    readonly memberId: FieldRef<"MemberMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MemberMedia findUnique
   */
  export type MemberMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
    /**
     * Filter, which MemberMedia to fetch.
     */
    where: MemberMediaWhereUniqueInput
  }

  /**
   * MemberMedia findUniqueOrThrow
   */
  export type MemberMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
    /**
     * Filter, which MemberMedia to fetch.
     */
    where: MemberMediaWhereUniqueInput
  }

  /**
   * MemberMedia findFirst
   */
  export type MemberMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
    /**
     * Filter, which MemberMedia to fetch.
     */
    where?: MemberMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberMedias to fetch.
     */
    orderBy?: MemberMediaOrderByWithRelationInput | MemberMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberMedias.
     */
    cursor?: MemberMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberMedias.
     */
    distinct?: MemberMediaScalarFieldEnum | MemberMediaScalarFieldEnum[]
  }

  /**
   * MemberMedia findFirstOrThrow
   */
  export type MemberMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
    /**
     * Filter, which MemberMedia to fetch.
     */
    where?: MemberMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberMedias to fetch.
     */
    orderBy?: MemberMediaOrderByWithRelationInput | MemberMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberMedias.
     */
    cursor?: MemberMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberMedias.
     */
    distinct?: MemberMediaScalarFieldEnum | MemberMediaScalarFieldEnum[]
  }

  /**
   * MemberMedia findMany
   */
  export type MemberMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
    /**
     * Filter, which MemberMedias to fetch.
     */
    where?: MemberMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberMedias to fetch.
     */
    orderBy?: MemberMediaOrderByWithRelationInput | MemberMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberMedias.
     */
    cursor?: MemberMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberMedias.
     */
    skip?: number
    distinct?: MemberMediaScalarFieldEnum | MemberMediaScalarFieldEnum[]
  }

  /**
   * MemberMedia create
   */
  export type MemberMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberMedia.
     */
    data: XOR<MemberMediaCreateInput, MemberMediaUncheckedCreateInput>
  }

  /**
   * MemberMedia createMany
   */
  export type MemberMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberMedias.
     */
    data: MemberMediaCreateManyInput | MemberMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberMedia createManyAndReturn
   */
  export type MemberMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * The data used to create many MemberMedias.
     */
    data: MemberMediaCreateManyInput | MemberMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberMedia update
   */
  export type MemberMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberMedia.
     */
    data: XOR<MemberMediaUpdateInput, MemberMediaUncheckedUpdateInput>
    /**
     * Choose, which MemberMedia to update.
     */
    where: MemberMediaWhereUniqueInput
  }

  /**
   * MemberMedia updateMany
   */
  export type MemberMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberMedias.
     */
    data: XOR<MemberMediaUpdateManyMutationInput, MemberMediaUncheckedUpdateManyInput>
    /**
     * Filter which MemberMedias to update
     */
    where?: MemberMediaWhereInput
  }

  /**
   * MemberMedia updateManyAndReturn
   */
  export type MemberMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * The data used to update MemberMedias.
     */
    data: XOR<MemberMediaUpdateManyMutationInput, MemberMediaUncheckedUpdateManyInput>
    /**
     * Filter which MemberMedias to update
     */
    where?: MemberMediaWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberMedia upsert
   */
  export type MemberMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberMedia to update in case it exists.
     */
    where: MemberMediaWhereUniqueInput
    /**
     * In case the MemberMedia found by the `where` argument doesn't exist, create a new MemberMedia with this data.
     */
    create: XOR<MemberMediaCreateInput, MemberMediaUncheckedCreateInput>
    /**
     * In case the MemberMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberMediaUpdateInput, MemberMediaUncheckedUpdateInput>
  }

  /**
   * MemberMedia delete
   */
  export type MemberMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
    /**
     * Filter which MemberMedia to delete.
     */
    where: MemberMediaWhereUniqueInput
  }

  /**
   * MemberMedia deleteMany
   */
  export type MemberMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberMedias to delete
     */
    where?: MemberMediaWhereInput
  }

  /**
   * MemberMedia without action
   */
  export type MemberMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberMedia
     */
    select?: MemberMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberMedia
     */
    omit?: MemberMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberMediaInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DonorScalarFieldEnum: {
    id: 'id',
    cnic: 'cnic',
    name: 'name',
    password: 'password',
    fatherName: 'fatherName',
    phone: 'phone',
    address: 'address',
    city: 'city',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type DonorScalarFieldEnum = (typeof DonorScalarFieldEnum)[keyof typeof DonorScalarFieldEnum]


  export const DonorMediaScalarFieldEnum: {
    id: 'id',
    profilePic: 'profilePic',
    cnicFront: 'cnicFront',
    cnicBack: 'cnicBack',
    donorId: 'donorId'
  };

  export type DonorMediaScalarFieldEnum = (typeof DonorMediaScalarFieldEnum)[keyof typeof DonorMediaScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    donorId: 'donorId',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    cnic: 'cnic',
    name: 'name',
    fatherName: 'fatherName',
    husbandName: 'husbandName',
    phone: 'phone',
    address: 'address',
    city: 'city',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const MemberStatusScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberStatusScalarFieldEnum = (typeof MemberStatusScalarFieldEnum)[keyof typeof MemberStatusScalarFieldEnum]


  export const YearlyPaymentScalarFieldEnum: {
    id: 'id',
    year: 'year',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type YearlyPaymentScalarFieldEnum = (typeof YearlyPaymentScalarFieldEnum)[keyof typeof YearlyPaymentScalarFieldEnum]


  export const YearlyDonationScalarFieldEnum: {
    id: 'id',
    year: 'year',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type YearlyDonationScalarFieldEnum = (typeof YearlyDonationScalarFieldEnum)[keyof typeof YearlyDonationScalarFieldEnum]


  export const MemberPaymentsScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberPaymentsScalarFieldEnum = (typeof MemberPaymentsScalarFieldEnum)[keyof typeof MemberPaymentsScalarFieldEnum]


  export const MemberMediaScalarFieldEnum: {
    id: 'id',
    profilePic: 'profilePic',
    cnicFront: 'cnicFront',
    cnicBack: 'cnicBack',
    memberId: 'memberId'
  };

  export type MemberMediaScalarFieldEnum = (typeof MemberMediaScalarFieldEnum)[keyof typeof MemberMediaScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type DonorWhereInput = {
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    id?: StringFilter<"Donor"> | string
    cnic?: StringNullableFilter<"Donor"> | string | null
    name?: StringFilter<"Donor"> | string
    password?: StringNullableFilter<"Donor"> | string | null
    fatherName?: StringNullableFilter<"Donor"> | string | null
    phone?: StringNullableFilter<"Donor"> | string | null
    address?: StringNullableFilter<"Donor"> | string | null
    city?: StringNullableFilter<"Donor"> | string | null
    email?: StringNullableFilter<"Donor"> | string | null
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Donor"> | Date | string | null
    role?: EnumRoleFilter<"Donor"> | $Enums.Role
    donations?: DonationListRelationFilter
    media?: DonorMediaListRelationFilter
  }

  export type DonorOrderByWithRelationInput = {
    id?: SortOrder
    cnic?: SortOrderInput | SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    donations?: DonationOrderByRelationAggregateInput
    media?: DonorMediaOrderByRelationAggregateInput
  }

  export type DonorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnic?: string
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    name?: StringFilter<"Donor"> | string
    password?: StringNullableFilter<"Donor"> | string | null
    fatherName?: StringNullableFilter<"Donor"> | string | null
    phone?: StringNullableFilter<"Donor"> | string | null
    address?: StringNullableFilter<"Donor"> | string | null
    city?: StringNullableFilter<"Donor"> | string | null
    email?: StringNullableFilter<"Donor"> | string | null
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Donor"> | Date | string | null
    role?: EnumRoleFilter<"Donor"> | $Enums.Role
    donations?: DonationListRelationFilter
    media?: DonorMediaListRelationFilter
  }, "id" | "cnic">

  export type DonorOrderByWithAggregationInput = {
    id?: SortOrder
    cnic?: SortOrderInput | SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: DonorCountOrderByAggregateInput
    _max?: DonorMaxOrderByAggregateInput
    _min?: DonorMinOrderByAggregateInput
  }

  export type DonorScalarWhereWithAggregatesInput = {
    AND?: DonorScalarWhereWithAggregatesInput | DonorScalarWhereWithAggregatesInput[]
    OR?: DonorScalarWhereWithAggregatesInput[]
    NOT?: DonorScalarWhereWithAggregatesInput | DonorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donor"> | string
    cnic?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    name?: StringWithAggregatesFilter<"Donor"> | string
    password?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    fatherName?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    address?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    city?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    email?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Donor"> | Date | string | null
    role?: EnumRoleWithAggregatesFilter<"Donor"> | $Enums.Role
  }

  export type DonorMediaWhereInput = {
    AND?: DonorMediaWhereInput | DonorMediaWhereInput[]
    OR?: DonorMediaWhereInput[]
    NOT?: DonorMediaWhereInput | DonorMediaWhereInput[]
    id?: StringFilter<"DonorMedia"> | string
    profilePic?: StringNullableFilter<"DonorMedia"> | string | null
    cnicFront?: StringNullableFilter<"DonorMedia"> | string | null
    cnicBack?: StringNullableFilter<"DonorMedia"> | string | null
    donorId?: StringFilter<"DonorMedia"> | string
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
  }

  export type DonorMediaOrderByWithRelationInput = {
    id?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    cnicFront?: SortOrderInput | SortOrder
    cnicBack?: SortOrderInput | SortOrder
    donorId?: SortOrder
    donor?: DonorOrderByWithRelationInput
  }

  export type DonorMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonorMediaWhereInput | DonorMediaWhereInput[]
    OR?: DonorMediaWhereInput[]
    NOT?: DonorMediaWhereInput | DonorMediaWhereInput[]
    profilePic?: StringNullableFilter<"DonorMedia"> | string | null
    cnicFront?: StringNullableFilter<"DonorMedia"> | string | null
    cnicBack?: StringNullableFilter<"DonorMedia"> | string | null
    donorId?: StringFilter<"DonorMedia"> | string
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
  }, "id">

  export type DonorMediaOrderByWithAggregationInput = {
    id?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    cnicFront?: SortOrderInput | SortOrder
    cnicBack?: SortOrderInput | SortOrder
    donorId?: SortOrder
    _count?: DonorMediaCountOrderByAggregateInput
    _max?: DonorMediaMaxOrderByAggregateInput
    _min?: DonorMediaMinOrderByAggregateInput
  }

  export type DonorMediaScalarWhereWithAggregatesInput = {
    AND?: DonorMediaScalarWhereWithAggregatesInput | DonorMediaScalarWhereWithAggregatesInput[]
    OR?: DonorMediaScalarWhereWithAggregatesInput[]
    NOT?: DonorMediaScalarWhereWithAggregatesInput | DonorMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonorMedia"> | string
    profilePic?: StringNullableWithAggregatesFilter<"DonorMedia"> | string | null
    cnicFront?: StringNullableWithAggregatesFilter<"DonorMedia"> | string | null
    cnicBack?: StringNullableWithAggregatesFilter<"DonorMedia"> | string | null
    donorId?: StringWithAggregatesFilter<"DonorMedia"> | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    amount?: FloatFilter<"Donation"> | number
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donor?: DonorOrderByWithRelationInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    donorId?: StringFilter<"Donation"> | string
    amount?: FloatFilter<"Donation"> | number
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    donor?: XOR<DonorScalarRelationFilter, DonorWhereInput>
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donation"> | string
    donorId?: StringWithAggregatesFilter<"Donation"> | string
    amount?: FloatWithAggregatesFilter<"Donation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    cnic?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    fatherName?: StringNullableFilter<"Member"> | string | null
    husbandName?: StringNullableFilter<"Member"> | string | null
    phone?: StringNullableFilter<"Member"> | string | null
    address?: StringNullableFilter<"Member"> | string | null
    city?: StringNullableFilter<"Member"> | string | null
    deleted?: BoolFilter<"Member"> | boolean
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    role?: EnumRoleFilter<"Member"> | $Enums.Role
    media?: MemberMediaListRelationFilter
    payments?: MemberPaymentsListRelationFilter
    memberStatus?: MemberStatusListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    cnic?: SortOrder
    name?: SortOrder
    fatherName?: SortOrderInput | SortOrder
    husbandName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    media?: MemberMediaOrderByRelationAggregateInput
    payments?: MemberPaymentsOrderByRelationAggregateInput
    memberStatus?: MemberStatusOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnic?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    name?: StringFilter<"Member"> | string
    fatherName?: StringNullableFilter<"Member"> | string | null
    husbandName?: StringNullableFilter<"Member"> | string | null
    phone?: StringNullableFilter<"Member"> | string | null
    address?: StringNullableFilter<"Member"> | string | null
    city?: StringNullableFilter<"Member"> | string | null
    deleted?: BoolFilter<"Member"> | boolean
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    role?: EnumRoleFilter<"Member"> | $Enums.Role
    media?: MemberMediaListRelationFilter
    payments?: MemberPaymentsListRelationFilter
    memberStatus?: MemberStatusListRelationFilter
  }, "id" | "cnic">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    cnic?: SortOrder
    name?: SortOrder
    fatherName?: SortOrderInput | SortOrder
    husbandName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    cnic?: StringWithAggregatesFilter<"Member"> | string
    name?: StringWithAggregatesFilter<"Member"> | string
    fatherName?: StringNullableWithAggregatesFilter<"Member"> | string | null
    husbandName?: StringNullableWithAggregatesFilter<"Member"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Member"> | string | null
    address?: StringNullableWithAggregatesFilter<"Member"> | string | null
    city?: StringNullableWithAggregatesFilter<"Member"> | string | null
    deleted?: BoolWithAggregatesFilter<"Member"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    role?: EnumRoleWithAggregatesFilter<"Member"> | $Enums.Role
  }

  export type MemberStatusWhereInput = {
    AND?: MemberStatusWhereInput | MemberStatusWhereInput[]
    OR?: MemberStatusWhereInput[]
    NOT?: MemberStatusWhereInput | MemberStatusWhereInput[]
    id?: StringFilter<"MemberStatus"> | string
    memberId?: StringFilter<"MemberStatus"> | string
    status?: EnumStatusFilter<"MemberStatus"> | $Enums.Status
    createdAt?: DateTimeFilter<"MemberStatus"> | Date | string
    updatedAt?: DateTimeFilter<"MemberStatus"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type MemberStatusOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: MemberOrderByWithRelationInput
  }

  export type MemberStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberStatusWhereInput | MemberStatusWhereInput[]
    OR?: MemberStatusWhereInput[]
    NOT?: MemberStatusWhereInput | MemberStatusWhereInput[]
    memberId?: StringFilter<"MemberStatus"> | string
    status?: EnumStatusFilter<"MemberStatus"> | $Enums.Status
    createdAt?: DateTimeFilter<"MemberStatus"> | Date | string
    updatedAt?: DateTimeFilter<"MemberStatus"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type MemberStatusOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberStatusCountOrderByAggregateInput
    _max?: MemberStatusMaxOrderByAggregateInput
    _min?: MemberStatusMinOrderByAggregateInput
  }

  export type MemberStatusScalarWhereWithAggregatesInput = {
    AND?: MemberStatusScalarWhereWithAggregatesInput | MemberStatusScalarWhereWithAggregatesInput[]
    OR?: MemberStatusScalarWhereWithAggregatesInput[]
    NOT?: MemberStatusScalarWhereWithAggregatesInput | MemberStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemberStatus"> | string
    memberId?: StringWithAggregatesFilter<"MemberStatus"> | string
    status?: EnumStatusWithAggregatesFilter<"MemberStatus"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"MemberStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MemberStatus"> | Date | string
  }

  export type YearlyPaymentWhereInput = {
    AND?: YearlyPaymentWhereInput | YearlyPaymentWhereInput[]
    OR?: YearlyPaymentWhereInput[]
    NOT?: YearlyPaymentWhereInput | YearlyPaymentWhereInput[]
    id?: StringFilter<"YearlyPayment"> | string
    year?: IntFilter<"YearlyPayment"> | number
    amount?: FloatFilter<"YearlyPayment"> | number
    createdAt?: DateTimeFilter<"YearlyPayment"> | Date | string
    updatedAt?: DateTimeFilter<"YearlyPayment"> | Date | string
  }

  export type YearlyPaymentOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearlyPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: YearlyPaymentWhereInput | YearlyPaymentWhereInput[]
    OR?: YearlyPaymentWhereInput[]
    NOT?: YearlyPaymentWhereInput | YearlyPaymentWhereInput[]
    year?: IntFilter<"YearlyPayment"> | number
    amount?: FloatFilter<"YearlyPayment"> | number
    createdAt?: DateTimeFilter<"YearlyPayment"> | Date | string
    updatedAt?: DateTimeFilter<"YearlyPayment"> | Date | string
  }, "id">

  export type YearlyPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: YearlyPaymentCountOrderByAggregateInput
    _avg?: YearlyPaymentAvgOrderByAggregateInput
    _max?: YearlyPaymentMaxOrderByAggregateInput
    _min?: YearlyPaymentMinOrderByAggregateInput
    _sum?: YearlyPaymentSumOrderByAggregateInput
  }

  export type YearlyPaymentScalarWhereWithAggregatesInput = {
    AND?: YearlyPaymentScalarWhereWithAggregatesInput | YearlyPaymentScalarWhereWithAggregatesInput[]
    OR?: YearlyPaymentScalarWhereWithAggregatesInput[]
    NOT?: YearlyPaymentScalarWhereWithAggregatesInput | YearlyPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"YearlyPayment"> | string
    year?: IntWithAggregatesFilter<"YearlyPayment"> | number
    amount?: FloatWithAggregatesFilter<"YearlyPayment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"YearlyPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"YearlyPayment"> | Date | string
  }

  export type YearlyDonationWhereInput = {
    AND?: YearlyDonationWhereInput | YearlyDonationWhereInput[]
    OR?: YearlyDonationWhereInput[]
    NOT?: YearlyDonationWhereInput | YearlyDonationWhereInput[]
    id?: StringFilter<"YearlyDonation"> | string
    year?: IntFilter<"YearlyDonation"> | number
    amount?: FloatFilter<"YearlyDonation"> | number
    createdAt?: DateTimeFilter<"YearlyDonation"> | Date | string
    updatedAt?: DateTimeFilter<"YearlyDonation"> | Date | string
  }

  export type YearlyDonationOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearlyDonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: YearlyDonationWhereInput | YearlyDonationWhereInput[]
    OR?: YearlyDonationWhereInput[]
    NOT?: YearlyDonationWhereInput | YearlyDonationWhereInput[]
    year?: IntFilter<"YearlyDonation"> | number
    amount?: FloatFilter<"YearlyDonation"> | number
    createdAt?: DateTimeFilter<"YearlyDonation"> | Date | string
    updatedAt?: DateTimeFilter<"YearlyDonation"> | Date | string
  }, "id">

  export type YearlyDonationOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: YearlyDonationCountOrderByAggregateInput
    _avg?: YearlyDonationAvgOrderByAggregateInput
    _max?: YearlyDonationMaxOrderByAggregateInput
    _min?: YearlyDonationMinOrderByAggregateInput
    _sum?: YearlyDonationSumOrderByAggregateInput
  }

  export type YearlyDonationScalarWhereWithAggregatesInput = {
    AND?: YearlyDonationScalarWhereWithAggregatesInput | YearlyDonationScalarWhereWithAggregatesInput[]
    OR?: YearlyDonationScalarWhereWithAggregatesInput[]
    NOT?: YearlyDonationScalarWhereWithAggregatesInput | YearlyDonationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"YearlyDonation"> | string
    year?: IntWithAggregatesFilter<"YearlyDonation"> | number
    amount?: FloatWithAggregatesFilter<"YearlyDonation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"YearlyDonation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"YearlyDonation"> | Date | string
  }

  export type MemberPaymentsWhereInput = {
    AND?: MemberPaymentsWhereInput | MemberPaymentsWhereInput[]
    OR?: MemberPaymentsWhereInput[]
    NOT?: MemberPaymentsWhereInput | MemberPaymentsWhereInput[]
    id?: StringFilter<"MemberPayments"> | string
    memberId?: StringFilter<"MemberPayments"> | string
    amount?: FloatFilter<"MemberPayments"> | number
    createdAt?: DateTimeFilter<"MemberPayments"> | Date | string
    updatedAt?: DateTimeFilter<"MemberPayments"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type MemberPaymentsOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: MemberOrderByWithRelationInput
  }

  export type MemberPaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberPaymentsWhereInput | MemberPaymentsWhereInput[]
    OR?: MemberPaymentsWhereInput[]
    NOT?: MemberPaymentsWhereInput | MemberPaymentsWhereInput[]
    memberId?: StringFilter<"MemberPayments"> | string
    amount?: FloatFilter<"MemberPayments"> | number
    createdAt?: DateTimeFilter<"MemberPayments"> | Date | string
    updatedAt?: DateTimeFilter<"MemberPayments"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type MemberPaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberPaymentsCountOrderByAggregateInput
    _avg?: MemberPaymentsAvgOrderByAggregateInput
    _max?: MemberPaymentsMaxOrderByAggregateInput
    _min?: MemberPaymentsMinOrderByAggregateInput
    _sum?: MemberPaymentsSumOrderByAggregateInput
  }

  export type MemberPaymentsScalarWhereWithAggregatesInput = {
    AND?: MemberPaymentsScalarWhereWithAggregatesInput | MemberPaymentsScalarWhereWithAggregatesInput[]
    OR?: MemberPaymentsScalarWhereWithAggregatesInput[]
    NOT?: MemberPaymentsScalarWhereWithAggregatesInput | MemberPaymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemberPayments"> | string
    memberId?: StringWithAggregatesFilter<"MemberPayments"> | string
    amount?: FloatWithAggregatesFilter<"MemberPayments"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MemberPayments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MemberPayments"> | Date | string
  }

  export type MemberMediaWhereInput = {
    AND?: MemberMediaWhereInput | MemberMediaWhereInput[]
    OR?: MemberMediaWhereInput[]
    NOT?: MemberMediaWhereInput | MemberMediaWhereInput[]
    id?: StringFilter<"MemberMedia"> | string
    profilePic?: StringNullableFilter<"MemberMedia"> | string | null
    cnicFront?: StringNullableFilter<"MemberMedia"> | string | null
    cnicBack?: StringNullableFilter<"MemberMedia"> | string | null
    memberId?: StringFilter<"MemberMedia"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type MemberMediaOrderByWithRelationInput = {
    id?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    cnicFront?: SortOrderInput | SortOrder
    cnicBack?: SortOrderInput | SortOrder
    memberId?: SortOrder
    member?: MemberOrderByWithRelationInput
  }

  export type MemberMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberMediaWhereInput | MemberMediaWhereInput[]
    OR?: MemberMediaWhereInput[]
    NOT?: MemberMediaWhereInput | MemberMediaWhereInput[]
    profilePic?: StringNullableFilter<"MemberMedia"> | string | null
    cnicFront?: StringNullableFilter<"MemberMedia"> | string | null
    cnicBack?: StringNullableFilter<"MemberMedia"> | string | null
    memberId?: StringFilter<"MemberMedia"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type MemberMediaOrderByWithAggregationInput = {
    id?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    cnicFront?: SortOrderInput | SortOrder
    cnicBack?: SortOrderInput | SortOrder
    memberId?: SortOrder
    _count?: MemberMediaCountOrderByAggregateInput
    _max?: MemberMediaMaxOrderByAggregateInput
    _min?: MemberMediaMinOrderByAggregateInput
  }

  export type MemberMediaScalarWhereWithAggregatesInput = {
    AND?: MemberMediaScalarWhereWithAggregatesInput | MemberMediaScalarWhereWithAggregatesInput[]
    OR?: MemberMediaScalarWhereWithAggregatesInput[]
    NOT?: MemberMediaScalarWhereWithAggregatesInput | MemberMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemberMedia"> | string
    profilePic?: StringNullableWithAggregatesFilter<"MemberMedia"> | string | null
    cnicFront?: StringNullableWithAggregatesFilter<"MemberMedia"> | string | null
    cnicBack?: StringNullableWithAggregatesFilter<"MemberMedia"> | string | null
    memberId?: StringWithAggregatesFilter<"MemberMedia"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type DonorCreateInput = {
    id?: string
    cnic?: string | null
    name: string
    password?: string | null
    fatherName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    donations?: DonationCreateNestedManyWithoutDonorInput
    media?: DonorMediaCreateNestedManyWithoutDonorInput
  }

  export type DonorUncheckedCreateInput = {
    id?: string
    cnic?: string | null
    name: string
    password?: string | null
    fatherName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    media?: DonorMediaUncheckedCreateNestedManyWithoutDonorInput
  }

  export type DonorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    donations?: DonationUpdateManyWithoutDonorNestedInput
    media?: DonorMediaUpdateManyWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    media?: DonorMediaUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type DonorCreateManyInput = {
    id?: string
    cnic?: string | null
    name: string
    password?: string | null
    fatherName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
  }

  export type DonorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type DonorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type DonorMediaCreateInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
    donor: DonorCreateNestedOneWithoutMediaInput
  }

  export type DonorMediaUncheckedCreateInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
    donorId: string
  }

  export type DonorMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
    donor?: DonorUpdateOneRequiredWithoutMediaNestedInput
  }

  export type DonorMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
    donorId?: StringFieldUpdateOperationsInput | string
  }

  export type DonorMediaCreateManyInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
    donorId: string
  }

  export type DonorMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
    donorId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: DonorCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateInput = {
    id?: string
    donorId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateManyInput = {
    id?: string
    donorId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    cnic: string
    name: string
    fatherName?: string | null
    husbandName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    media?: MemberMediaCreateNestedManyWithoutMemberInput
    payments?: MemberPaymentsCreateNestedManyWithoutMemberInput
    memberStatus?: MemberStatusCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    cnic: string
    name: string
    fatherName?: string | null
    husbandName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    media?: MemberMediaUncheckedCreateNestedManyWithoutMemberInput
    payments?: MemberPaymentsUncheckedCreateNestedManyWithoutMemberInput
    memberStatus?: MemberStatusUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    husbandName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    media?: MemberMediaUpdateManyWithoutMemberNestedInput
    payments?: MemberPaymentsUpdateManyWithoutMemberNestedInput
    memberStatus?: MemberStatusUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    husbandName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    media?: MemberMediaUncheckedUpdateManyWithoutMemberNestedInput
    payments?: MemberPaymentsUncheckedUpdateManyWithoutMemberNestedInput
    memberStatus?: MemberStatusUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    cnic: string
    name: string
    fatherName?: string | null
    husbandName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    husbandName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    husbandName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MemberStatusCreateInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutMemberStatusInput
  }

  export type MemberStatusUncheckedCreateInput = {
    id?: string
    memberId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutMemberStatusNestedInput
  }

  export type MemberStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberStatusCreateManyInput = {
    id?: string
    memberId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearlyPaymentCreateInput = {
    id?: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YearlyPaymentUncheckedCreateInput = {
    id?: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YearlyPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearlyPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearlyPaymentCreateManyInput = {
    id?: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YearlyPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearlyPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearlyDonationCreateInput = {
    id?: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YearlyDonationUncheckedCreateInput = {
    id?: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YearlyDonationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearlyDonationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearlyDonationCreateManyInput = {
    id?: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YearlyDonationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearlyDonationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentsCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutPaymentsInput
  }

  export type MemberPaymentsUncheckedCreateInput = {
    id?: string
    memberId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type MemberPaymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentsCreateManyInput = {
    id?: string
    memberId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberMediaCreateInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
    member: MemberCreateNestedOneWithoutMediaInput
  }

  export type MemberMediaUncheckedCreateInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
    memberId: string
  }

  export type MemberMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
    member?: MemberUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MemberMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type MemberMediaCreateManyInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
    memberId: string
  }

  export type MemberMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type DonorMediaListRelationFilter = {
    every?: DonorMediaWhereInput
    some?: DonorMediaWhereInput
    none?: DonorMediaWhereInput
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonorMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonorCountOrderByAggregateInput = {
    id?: SortOrder
    cnic?: SortOrder
    name?: SortOrder
    password?: SortOrder
    fatherName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type DonorMaxOrderByAggregateInput = {
    id?: SortOrder
    cnic?: SortOrder
    name?: SortOrder
    password?: SortOrder
    fatherName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type DonorMinOrderByAggregateInput = {
    id?: SortOrder
    cnic?: SortOrder
    name?: SortOrder
    password?: SortOrder
    fatherName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DonorScalarRelationFilter = {
    is?: DonorWhereInput
    isNot?: DonorWhereInput
  }

  export type DonorMediaCountOrderByAggregateInput = {
    id?: SortOrder
    profilePic?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    donorId?: SortOrder
  }

  export type DonorMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    profilePic?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    donorId?: SortOrder
  }

  export type DonorMediaMinOrderByAggregateInput = {
    id?: SortOrder
    profilePic?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    donorId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MemberMediaListRelationFilter = {
    every?: MemberMediaWhereInput
    some?: MemberMediaWhereInput
    none?: MemberMediaWhereInput
  }

  export type MemberPaymentsListRelationFilter = {
    every?: MemberPaymentsWhereInput
    some?: MemberPaymentsWhereInput
    none?: MemberPaymentsWhereInput
  }

  export type MemberStatusListRelationFilter = {
    every?: MemberStatusWhereInput
    some?: MemberStatusWhereInput
    none?: MemberStatusWhereInput
  }

  export type MemberMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberPaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    cnic?: SortOrder
    name?: SortOrder
    fatherName?: SortOrder
    husbandName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    cnic?: SortOrder
    name?: SortOrder
    fatherName?: SortOrder
    husbandName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    cnic?: SortOrder
    name?: SortOrder
    fatherName?: SortOrder
    husbandName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type MemberStatusCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberStatusMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type YearlyPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearlyPaymentAvgOrderByAggregateInput = {
    year?: SortOrder
    amount?: SortOrder
  }

  export type YearlyPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearlyPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearlyPaymentSumOrderByAggregateInput = {
    year?: SortOrder
    amount?: SortOrder
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

  export type YearlyDonationCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearlyDonationAvgOrderByAggregateInput = {
    year?: SortOrder
    amount?: SortOrder
  }

  export type YearlyDonationMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearlyDonationMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearlyDonationSumOrderByAggregateInput = {
    year?: SortOrder
    amount?: SortOrder
  }

  export type MemberPaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberPaymentsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type MemberPaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberPaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberPaymentsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type MemberMediaCountOrderByAggregateInput = {
    id?: SortOrder
    profilePic?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    memberId?: SortOrder
  }

  export type MemberMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    profilePic?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    memberId?: SortOrder
  }

  export type MemberMediaMinOrderByAggregateInput = {
    id?: SortOrder
    profilePic?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    memberId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DonationCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type DonorMediaCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonorMediaCreateWithoutDonorInput, DonorMediaUncheckedCreateWithoutDonorInput> | DonorMediaCreateWithoutDonorInput[] | DonorMediaUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonorMediaCreateOrConnectWithoutDonorInput | DonorMediaCreateOrConnectWithoutDonorInput[]
    createMany?: DonorMediaCreateManyDonorInputEnvelope
    connect?: DonorMediaWhereUniqueInput | DonorMediaWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type DonorMediaUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonorMediaCreateWithoutDonorInput, DonorMediaUncheckedCreateWithoutDonorInput> | DonorMediaCreateWithoutDonorInput[] | DonorMediaUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonorMediaCreateOrConnectWithoutDonorInput | DonorMediaCreateOrConnectWithoutDonorInput[]
    createMany?: DonorMediaCreateManyDonorInputEnvelope
    connect?: DonorMediaWhereUniqueInput | DonorMediaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DonationUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type DonorMediaUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonorMediaCreateWithoutDonorInput, DonorMediaUncheckedCreateWithoutDonorInput> | DonorMediaCreateWithoutDonorInput[] | DonorMediaUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonorMediaCreateOrConnectWithoutDonorInput | DonorMediaCreateOrConnectWithoutDonorInput[]
    upsert?: DonorMediaUpsertWithWhereUniqueWithoutDonorInput | DonorMediaUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonorMediaCreateManyDonorInputEnvelope
    set?: DonorMediaWhereUniqueInput | DonorMediaWhereUniqueInput[]
    disconnect?: DonorMediaWhereUniqueInput | DonorMediaWhereUniqueInput[]
    delete?: DonorMediaWhereUniqueInput | DonorMediaWhereUniqueInput[]
    connect?: DonorMediaWhereUniqueInput | DonorMediaWhereUniqueInput[]
    update?: DonorMediaUpdateWithWhereUniqueWithoutDonorInput | DonorMediaUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonorMediaUpdateManyWithWhereWithoutDonorInput | DonorMediaUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonorMediaScalarWhereInput | DonorMediaScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type DonorMediaUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonorMediaCreateWithoutDonorInput, DonorMediaUncheckedCreateWithoutDonorInput> | DonorMediaCreateWithoutDonorInput[] | DonorMediaUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonorMediaCreateOrConnectWithoutDonorInput | DonorMediaCreateOrConnectWithoutDonorInput[]
    upsert?: DonorMediaUpsertWithWhereUniqueWithoutDonorInput | DonorMediaUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonorMediaCreateManyDonorInputEnvelope
    set?: DonorMediaWhereUniqueInput | DonorMediaWhereUniqueInput[]
    disconnect?: DonorMediaWhereUniqueInput | DonorMediaWhereUniqueInput[]
    delete?: DonorMediaWhereUniqueInput | DonorMediaWhereUniqueInput[]
    connect?: DonorMediaWhereUniqueInput | DonorMediaWhereUniqueInput[]
    update?: DonorMediaUpdateWithWhereUniqueWithoutDonorInput | DonorMediaUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonorMediaUpdateManyWithWhereWithoutDonorInput | DonorMediaUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonorMediaScalarWhereInput | DonorMediaScalarWhereInput[]
  }

  export type DonorCreateNestedOneWithoutMediaInput = {
    create?: XOR<DonorCreateWithoutMediaInput, DonorUncheckedCreateWithoutMediaInput>
    connectOrCreate?: DonorCreateOrConnectWithoutMediaInput
    connect?: DonorWhereUniqueInput
  }

  export type DonorUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<DonorCreateWithoutMediaInput, DonorUncheckedCreateWithoutMediaInput>
    connectOrCreate?: DonorCreateOrConnectWithoutMediaInput
    upsert?: DonorUpsertWithoutMediaInput
    connect?: DonorWhereUniqueInput
    update?: XOR<XOR<DonorUpdateToOneWithWhereWithoutMediaInput, DonorUpdateWithoutMediaInput>, DonorUncheckedUpdateWithoutMediaInput>
  }

  export type DonorCreateNestedOneWithoutDonationsInput = {
    create?: XOR<DonorCreateWithoutDonationsInput, DonorUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: DonorCreateOrConnectWithoutDonationsInput
    connect?: DonorWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DonorUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<DonorCreateWithoutDonationsInput, DonorUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: DonorCreateOrConnectWithoutDonationsInput
    upsert?: DonorUpsertWithoutDonationsInput
    connect?: DonorWhereUniqueInput
    update?: XOR<XOR<DonorUpdateToOneWithWhereWithoutDonationsInput, DonorUpdateWithoutDonationsInput>, DonorUncheckedUpdateWithoutDonationsInput>
  }

  export type MemberMediaCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberMediaCreateWithoutMemberInput, MemberMediaUncheckedCreateWithoutMemberInput> | MemberMediaCreateWithoutMemberInput[] | MemberMediaUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberMediaCreateOrConnectWithoutMemberInput | MemberMediaCreateOrConnectWithoutMemberInput[]
    createMany?: MemberMediaCreateManyMemberInputEnvelope
    connect?: MemberMediaWhereUniqueInput | MemberMediaWhereUniqueInput[]
  }

  export type MemberPaymentsCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberPaymentsCreateWithoutMemberInput, MemberPaymentsUncheckedCreateWithoutMemberInput> | MemberPaymentsCreateWithoutMemberInput[] | MemberPaymentsUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberPaymentsCreateOrConnectWithoutMemberInput | MemberPaymentsCreateOrConnectWithoutMemberInput[]
    createMany?: MemberPaymentsCreateManyMemberInputEnvelope
    connect?: MemberPaymentsWhereUniqueInput | MemberPaymentsWhereUniqueInput[]
  }

  export type MemberStatusCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberStatusCreateWithoutMemberInput, MemberStatusUncheckedCreateWithoutMemberInput> | MemberStatusCreateWithoutMemberInput[] | MemberStatusUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberStatusCreateOrConnectWithoutMemberInput | MemberStatusCreateOrConnectWithoutMemberInput[]
    createMany?: MemberStatusCreateManyMemberInputEnvelope
    connect?: MemberStatusWhereUniqueInput | MemberStatusWhereUniqueInput[]
  }

  export type MemberMediaUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberMediaCreateWithoutMemberInput, MemberMediaUncheckedCreateWithoutMemberInput> | MemberMediaCreateWithoutMemberInput[] | MemberMediaUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberMediaCreateOrConnectWithoutMemberInput | MemberMediaCreateOrConnectWithoutMemberInput[]
    createMany?: MemberMediaCreateManyMemberInputEnvelope
    connect?: MemberMediaWhereUniqueInput | MemberMediaWhereUniqueInput[]
  }

  export type MemberPaymentsUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberPaymentsCreateWithoutMemberInput, MemberPaymentsUncheckedCreateWithoutMemberInput> | MemberPaymentsCreateWithoutMemberInput[] | MemberPaymentsUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberPaymentsCreateOrConnectWithoutMemberInput | MemberPaymentsCreateOrConnectWithoutMemberInput[]
    createMany?: MemberPaymentsCreateManyMemberInputEnvelope
    connect?: MemberPaymentsWhereUniqueInput | MemberPaymentsWhereUniqueInput[]
  }

  export type MemberStatusUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberStatusCreateWithoutMemberInput, MemberStatusUncheckedCreateWithoutMemberInput> | MemberStatusCreateWithoutMemberInput[] | MemberStatusUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberStatusCreateOrConnectWithoutMemberInput | MemberStatusCreateOrConnectWithoutMemberInput[]
    createMany?: MemberStatusCreateManyMemberInputEnvelope
    connect?: MemberStatusWhereUniqueInput | MemberStatusWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MemberMediaUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberMediaCreateWithoutMemberInput, MemberMediaUncheckedCreateWithoutMemberInput> | MemberMediaCreateWithoutMemberInput[] | MemberMediaUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberMediaCreateOrConnectWithoutMemberInput | MemberMediaCreateOrConnectWithoutMemberInput[]
    upsert?: MemberMediaUpsertWithWhereUniqueWithoutMemberInput | MemberMediaUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberMediaCreateManyMemberInputEnvelope
    set?: MemberMediaWhereUniqueInput | MemberMediaWhereUniqueInput[]
    disconnect?: MemberMediaWhereUniqueInput | MemberMediaWhereUniqueInput[]
    delete?: MemberMediaWhereUniqueInput | MemberMediaWhereUniqueInput[]
    connect?: MemberMediaWhereUniqueInput | MemberMediaWhereUniqueInput[]
    update?: MemberMediaUpdateWithWhereUniqueWithoutMemberInput | MemberMediaUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberMediaUpdateManyWithWhereWithoutMemberInput | MemberMediaUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberMediaScalarWhereInput | MemberMediaScalarWhereInput[]
  }

  export type MemberPaymentsUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberPaymentsCreateWithoutMemberInput, MemberPaymentsUncheckedCreateWithoutMemberInput> | MemberPaymentsCreateWithoutMemberInput[] | MemberPaymentsUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberPaymentsCreateOrConnectWithoutMemberInput | MemberPaymentsCreateOrConnectWithoutMemberInput[]
    upsert?: MemberPaymentsUpsertWithWhereUniqueWithoutMemberInput | MemberPaymentsUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberPaymentsCreateManyMemberInputEnvelope
    set?: MemberPaymentsWhereUniqueInput | MemberPaymentsWhereUniqueInput[]
    disconnect?: MemberPaymentsWhereUniqueInput | MemberPaymentsWhereUniqueInput[]
    delete?: MemberPaymentsWhereUniqueInput | MemberPaymentsWhereUniqueInput[]
    connect?: MemberPaymentsWhereUniqueInput | MemberPaymentsWhereUniqueInput[]
    update?: MemberPaymentsUpdateWithWhereUniqueWithoutMemberInput | MemberPaymentsUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberPaymentsUpdateManyWithWhereWithoutMemberInput | MemberPaymentsUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberPaymentsScalarWhereInput | MemberPaymentsScalarWhereInput[]
  }

  export type MemberStatusUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberStatusCreateWithoutMemberInput, MemberStatusUncheckedCreateWithoutMemberInput> | MemberStatusCreateWithoutMemberInput[] | MemberStatusUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberStatusCreateOrConnectWithoutMemberInput | MemberStatusCreateOrConnectWithoutMemberInput[]
    upsert?: MemberStatusUpsertWithWhereUniqueWithoutMemberInput | MemberStatusUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberStatusCreateManyMemberInputEnvelope
    set?: MemberStatusWhereUniqueInput | MemberStatusWhereUniqueInput[]
    disconnect?: MemberStatusWhereUniqueInput | MemberStatusWhereUniqueInput[]
    delete?: MemberStatusWhereUniqueInput | MemberStatusWhereUniqueInput[]
    connect?: MemberStatusWhereUniqueInput | MemberStatusWhereUniqueInput[]
    update?: MemberStatusUpdateWithWhereUniqueWithoutMemberInput | MemberStatusUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberStatusUpdateManyWithWhereWithoutMemberInput | MemberStatusUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberStatusScalarWhereInput | MemberStatusScalarWhereInput[]
  }

  export type MemberMediaUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberMediaCreateWithoutMemberInput, MemberMediaUncheckedCreateWithoutMemberInput> | MemberMediaCreateWithoutMemberInput[] | MemberMediaUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberMediaCreateOrConnectWithoutMemberInput | MemberMediaCreateOrConnectWithoutMemberInput[]
    upsert?: MemberMediaUpsertWithWhereUniqueWithoutMemberInput | MemberMediaUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberMediaCreateManyMemberInputEnvelope
    set?: MemberMediaWhereUniqueInput | MemberMediaWhereUniqueInput[]
    disconnect?: MemberMediaWhereUniqueInput | MemberMediaWhereUniqueInput[]
    delete?: MemberMediaWhereUniqueInput | MemberMediaWhereUniqueInput[]
    connect?: MemberMediaWhereUniqueInput | MemberMediaWhereUniqueInput[]
    update?: MemberMediaUpdateWithWhereUniqueWithoutMemberInput | MemberMediaUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberMediaUpdateManyWithWhereWithoutMemberInput | MemberMediaUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberMediaScalarWhereInput | MemberMediaScalarWhereInput[]
  }

  export type MemberPaymentsUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberPaymentsCreateWithoutMemberInput, MemberPaymentsUncheckedCreateWithoutMemberInput> | MemberPaymentsCreateWithoutMemberInput[] | MemberPaymentsUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberPaymentsCreateOrConnectWithoutMemberInput | MemberPaymentsCreateOrConnectWithoutMemberInput[]
    upsert?: MemberPaymentsUpsertWithWhereUniqueWithoutMemberInput | MemberPaymentsUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberPaymentsCreateManyMemberInputEnvelope
    set?: MemberPaymentsWhereUniqueInput | MemberPaymentsWhereUniqueInput[]
    disconnect?: MemberPaymentsWhereUniqueInput | MemberPaymentsWhereUniqueInput[]
    delete?: MemberPaymentsWhereUniqueInput | MemberPaymentsWhereUniqueInput[]
    connect?: MemberPaymentsWhereUniqueInput | MemberPaymentsWhereUniqueInput[]
    update?: MemberPaymentsUpdateWithWhereUniqueWithoutMemberInput | MemberPaymentsUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberPaymentsUpdateManyWithWhereWithoutMemberInput | MemberPaymentsUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberPaymentsScalarWhereInput | MemberPaymentsScalarWhereInput[]
  }

  export type MemberStatusUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberStatusCreateWithoutMemberInput, MemberStatusUncheckedCreateWithoutMemberInput> | MemberStatusCreateWithoutMemberInput[] | MemberStatusUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberStatusCreateOrConnectWithoutMemberInput | MemberStatusCreateOrConnectWithoutMemberInput[]
    upsert?: MemberStatusUpsertWithWhereUniqueWithoutMemberInput | MemberStatusUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberStatusCreateManyMemberInputEnvelope
    set?: MemberStatusWhereUniqueInput | MemberStatusWhereUniqueInput[]
    disconnect?: MemberStatusWhereUniqueInput | MemberStatusWhereUniqueInput[]
    delete?: MemberStatusWhereUniqueInput | MemberStatusWhereUniqueInput[]
    connect?: MemberStatusWhereUniqueInput | MemberStatusWhereUniqueInput[]
    update?: MemberStatusUpdateWithWhereUniqueWithoutMemberInput | MemberStatusUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberStatusUpdateManyWithWhereWithoutMemberInput | MemberStatusUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberStatusScalarWhereInput | MemberStatusScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutMemberStatusInput = {
    create?: XOR<MemberCreateWithoutMemberStatusInput, MemberUncheckedCreateWithoutMemberStatusInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMemberStatusInput
    connect?: MemberWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type MemberUpdateOneRequiredWithoutMemberStatusNestedInput = {
    create?: XOR<MemberCreateWithoutMemberStatusInput, MemberUncheckedCreateWithoutMemberStatusInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMemberStatusInput
    upsert?: MemberUpsertWithoutMemberStatusInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutMemberStatusInput, MemberUpdateWithoutMemberStatusInput>, MemberUncheckedUpdateWithoutMemberStatusInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MemberCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPaymentsInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPaymentsInput
    upsert?: MemberUpsertWithoutPaymentsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutPaymentsInput, MemberUpdateWithoutPaymentsInput>, MemberUncheckedUpdateWithoutPaymentsInput>
  }

  export type MemberCreateNestedOneWithoutMediaInput = {
    create?: XOR<MemberCreateWithoutMediaInput, MemberUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMediaInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<MemberCreateWithoutMediaInput, MemberUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMediaInput
    upsert?: MemberUpsertWithoutMediaInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutMediaInput, MemberUpdateWithoutMediaInput>, MemberUncheckedUpdateWithoutMediaInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type DonationCreateWithoutDonorInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUncheckedCreateWithoutDonorInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutDonorInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationCreateManyDonorInputEnvelope = {
    data: DonationCreateManyDonorInput | DonationCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type DonorMediaCreateWithoutDonorInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
  }

  export type DonorMediaUncheckedCreateWithoutDonorInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
  }

  export type DonorMediaCreateOrConnectWithoutDonorInput = {
    where: DonorMediaWhereUniqueInput
    create: XOR<DonorMediaCreateWithoutDonorInput, DonorMediaUncheckedCreateWithoutDonorInput>
  }

  export type DonorMediaCreateManyDonorInputEnvelope = {
    data: DonorMediaCreateManyDonorInput | DonorMediaCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type DonationUpsertWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
  }

  export type DonationUpdateManyWithWhereWithoutDonorInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutDonorInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    amount?: FloatFilter<"Donation"> | number
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
  }

  export type DonorMediaUpsertWithWhereUniqueWithoutDonorInput = {
    where: DonorMediaWhereUniqueInput
    update: XOR<DonorMediaUpdateWithoutDonorInput, DonorMediaUncheckedUpdateWithoutDonorInput>
    create: XOR<DonorMediaCreateWithoutDonorInput, DonorMediaUncheckedCreateWithoutDonorInput>
  }

  export type DonorMediaUpdateWithWhereUniqueWithoutDonorInput = {
    where: DonorMediaWhereUniqueInput
    data: XOR<DonorMediaUpdateWithoutDonorInput, DonorMediaUncheckedUpdateWithoutDonorInput>
  }

  export type DonorMediaUpdateManyWithWhereWithoutDonorInput = {
    where: DonorMediaScalarWhereInput
    data: XOR<DonorMediaUpdateManyMutationInput, DonorMediaUncheckedUpdateManyWithoutDonorInput>
  }

  export type DonorMediaScalarWhereInput = {
    AND?: DonorMediaScalarWhereInput | DonorMediaScalarWhereInput[]
    OR?: DonorMediaScalarWhereInput[]
    NOT?: DonorMediaScalarWhereInput | DonorMediaScalarWhereInput[]
    id?: StringFilter<"DonorMedia"> | string
    profilePic?: StringNullableFilter<"DonorMedia"> | string | null
    cnicFront?: StringNullableFilter<"DonorMedia"> | string | null
    cnicBack?: StringNullableFilter<"DonorMedia"> | string | null
    donorId?: StringFilter<"DonorMedia"> | string
  }

  export type DonorCreateWithoutMediaInput = {
    id?: string
    cnic?: string | null
    name: string
    password?: string | null
    fatherName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    donations?: DonationCreateNestedManyWithoutDonorInput
  }

  export type DonorUncheckedCreateWithoutMediaInput = {
    id?: string
    cnic?: string | null
    name: string
    password?: string | null
    fatherName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
  }

  export type DonorCreateOrConnectWithoutMediaInput = {
    where: DonorWhereUniqueInput
    create: XOR<DonorCreateWithoutMediaInput, DonorUncheckedCreateWithoutMediaInput>
  }

  export type DonorUpsertWithoutMediaInput = {
    update: XOR<DonorUpdateWithoutMediaInput, DonorUncheckedUpdateWithoutMediaInput>
    create: XOR<DonorCreateWithoutMediaInput, DonorUncheckedCreateWithoutMediaInput>
    where?: DonorWhereInput
  }

  export type DonorUpdateToOneWithWhereWithoutMediaInput = {
    where?: DonorWhereInput
    data: XOR<DonorUpdateWithoutMediaInput, DonorUncheckedUpdateWithoutMediaInput>
  }

  export type DonorUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    donations?: DonationUpdateManyWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type DonorCreateWithoutDonationsInput = {
    id?: string
    cnic?: string | null
    name: string
    password?: string | null
    fatherName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    media?: DonorMediaCreateNestedManyWithoutDonorInput
  }

  export type DonorUncheckedCreateWithoutDonationsInput = {
    id?: string
    cnic?: string | null
    name: string
    password?: string | null
    fatherName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    media?: DonorMediaUncheckedCreateNestedManyWithoutDonorInput
  }

  export type DonorCreateOrConnectWithoutDonationsInput = {
    where: DonorWhereUniqueInput
    create: XOR<DonorCreateWithoutDonationsInput, DonorUncheckedCreateWithoutDonationsInput>
  }

  export type DonorUpsertWithoutDonationsInput = {
    update: XOR<DonorUpdateWithoutDonationsInput, DonorUncheckedUpdateWithoutDonationsInput>
    create: XOR<DonorCreateWithoutDonationsInput, DonorUncheckedCreateWithoutDonationsInput>
    where?: DonorWhereInput
  }

  export type DonorUpdateToOneWithWhereWithoutDonationsInput = {
    where?: DonorWhereInput
    data: XOR<DonorUpdateWithoutDonationsInput, DonorUncheckedUpdateWithoutDonationsInput>
  }

  export type DonorUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    media?: DonorMediaUpdateManyWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    media?: DonorMediaUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type MemberMediaCreateWithoutMemberInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
  }

  export type MemberMediaUncheckedCreateWithoutMemberInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
  }

  export type MemberMediaCreateOrConnectWithoutMemberInput = {
    where: MemberMediaWhereUniqueInput
    create: XOR<MemberMediaCreateWithoutMemberInput, MemberMediaUncheckedCreateWithoutMemberInput>
  }

  export type MemberMediaCreateManyMemberInputEnvelope = {
    data: MemberMediaCreateManyMemberInput | MemberMediaCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type MemberPaymentsCreateWithoutMemberInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentsUncheckedCreateWithoutMemberInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentsCreateOrConnectWithoutMemberInput = {
    where: MemberPaymentsWhereUniqueInput
    create: XOR<MemberPaymentsCreateWithoutMemberInput, MemberPaymentsUncheckedCreateWithoutMemberInput>
  }

  export type MemberPaymentsCreateManyMemberInputEnvelope = {
    data: MemberPaymentsCreateManyMemberInput | MemberPaymentsCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type MemberStatusCreateWithoutMemberInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberStatusUncheckedCreateWithoutMemberInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberStatusCreateOrConnectWithoutMemberInput = {
    where: MemberStatusWhereUniqueInput
    create: XOR<MemberStatusCreateWithoutMemberInput, MemberStatusUncheckedCreateWithoutMemberInput>
  }

  export type MemberStatusCreateManyMemberInputEnvelope = {
    data: MemberStatusCreateManyMemberInput | MemberStatusCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type MemberMediaUpsertWithWhereUniqueWithoutMemberInput = {
    where: MemberMediaWhereUniqueInput
    update: XOR<MemberMediaUpdateWithoutMemberInput, MemberMediaUncheckedUpdateWithoutMemberInput>
    create: XOR<MemberMediaCreateWithoutMemberInput, MemberMediaUncheckedCreateWithoutMemberInput>
  }

  export type MemberMediaUpdateWithWhereUniqueWithoutMemberInput = {
    where: MemberMediaWhereUniqueInput
    data: XOR<MemberMediaUpdateWithoutMemberInput, MemberMediaUncheckedUpdateWithoutMemberInput>
  }

  export type MemberMediaUpdateManyWithWhereWithoutMemberInput = {
    where: MemberMediaScalarWhereInput
    data: XOR<MemberMediaUpdateManyMutationInput, MemberMediaUncheckedUpdateManyWithoutMemberInput>
  }

  export type MemberMediaScalarWhereInput = {
    AND?: MemberMediaScalarWhereInput | MemberMediaScalarWhereInput[]
    OR?: MemberMediaScalarWhereInput[]
    NOT?: MemberMediaScalarWhereInput | MemberMediaScalarWhereInput[]
    id?: StringFilter<"MemberMedia"> | string
    profilePic?: StringNullableFilter<"MemberMedia"> | string | null
    cnicFront?: StringNullableFilter<"MemberMedia"> | string | null
    cnicBack?: StringNullableFilter<"MemberMedia"> | string | null
    memberId?: StringFilter<"MemberMedia"> | string
  }

  export type MemberPaymentsUpsertWithWhereUniqueWithoutMemberInput = {
    where: MemberPaymentsWhereUniqueInput
    update: XOR<MemberPaymentsUpdateWithoutMemberInput, MemberPaymentsUncheckedUpdateWithoutMemberInput>
    create: XOR<MemberPaymentsCreateWithoutMemberInput, MemberPaymentsUncheckedCreateWithoutMemberInput>
  }

  export type MemberPaymentsUpdateWithWhereUniqueWithoutMemberInput = {
    where: MemberPaymentsWhereUniqueInput
    data: XOR<MemberPaymentsUpdateWithoutMemberInput, MemberPaymentsUncheckedUpdateWithoutMemberInput>
  }

  export type MemberPaymentsUpdateManyWithWhereWithoutMemberInput = {
    where: MemberPaymentsScalarWhereInput
    data: XOR<MemberPaymentsUpdateManyMutationInput, MemberPaymentsUncheckedUpdateManyWithoutMemberInput>
  }

  export type MemberPaymentsScalarWhereInput = {
    AND?: MemberPaymentsScalarWhereInput | MemberPaymentsScalarWhereInput[]
    OR?: MemberPaymentsScalarWhereInput[]
    NOT?: MemberPaymentsScalarWhereInput | MemberPaymentsScalarWhereInput[]
    id?: StringFilter<"MemberPayments"> | string
    memberId?: StringFilter<"MemberPayments"> | string
    amount?: FloatFilter<"MemberPayments"> | number
    createdAt?: DateTimeFilter<"MemberPayments"> | Date | string
    updatedAt?: DateTimeFilter<"MemberPayments"> | Date | string
  }

  export type MemberStatusUpsertWithWhereUniqueWithoutMemberInput = {
    where: MemberStatusWhereUniqueInput
    update: XOR<MemberStatusUpdateWithoutMemberInput, MemberStatusUncheckedUpdateWithoutMemberInput>
    create: XOR<MemberStatusCreateWithoutMemberInput, MemberStatusUncheckedCreateWithoutMemberInput>
  }

  export type MemberStatusUpdateWithWhereUniqueWithoutMemberInput = {
    where: MemberStatusWhereUniqueInput
    data: XOR<MemberStatusUpdateWithoutMemberInput, MemberStatusUncheckedUpdateWithoutMemberInput>
  }

  export type MemberStatusUpdateManyWithWhereWithoutMemberInput = {
    where: MemberStatusScalarWhereInput
    data: XOR<MemberStatusUpdateManyMutationInput, MemberStatusUncheckedUpdateManyWithoutMemberInput>
  }

  export type MemberStatusScalarWhereInput = {
    AND?: MemberStatusScalarWhereInput | MemberStatusScalarWhereInput[]
    OR?: MemberStatusScalarWhereInput[]
    NOT?: MemberStatusScalarWhereInput | MemberStatusScalarWhereInput[]
    id?: StringFilter<"MemberStatus"> | string
    memberId?: StringFilter<"MemberStatus"> | string
    status?: EnumStatusFilter<"MemberStatus"> | $Enums.Status
    createdAt?: DateTimeFilter<"MemberStatus"> | Date | string
    updatedAt?: DateTimeFilter<"MemberStatus"> | Date | string
  }

  export type MemberCreateWithoutMemberStatusInput = {
    id?: string
    cnic: string
    name: string
    fatherName?: string | null
    husbandName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    media?: MemberMediaCreateNestedManyWithoutMemberInput
    payments?: MemberPaymentsCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutMemberStatusInput = {
    id?: string
    cnic: string
    name: string
    fatherName?: string | null
    husbandName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    media?: MemberMediaUncheckedCreateNestedManyWithoutMemberInput
    payments?: MemberPaymentsUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutMemberStatusInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutMemberStatusInput, MemberUncheckedCreateWithoutMemberStatusInput>
  }

  export type MemberUpsertWithoutMemberStatusInput = {
    update: XOR<MemberUpdateWithoutMemberStatusInput, MemberUncheckedUpdateWithoutMemberStatusInput>
    create: XOR<MemberCreateWithoutMemberStatusInput, MemberUncheckedCreateWithoutMemberStatusInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutMemberStatusInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutMemberStatusInput, MemberUncheckedUpdateWithoutMemberStatusInput>
  }

  export type MemberUpdateWithoutMemberStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    husbandName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    media?: MemberMediaUpdateManyWithoutMemberNestedInput
    payments?: MemberPaymentsUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutMemberStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    husbandName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    media?: MemberMediaUncheckedUpdateManyWithoutMemberNestedInput
    payments?: MemberPaymentsUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateWithoutPaymentsInput = {
    id?: string
    cnic: string
    name: string
    fatherName?: string | null
    husbandName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    media?: MemberMediaCreateNestedManyWithoutMemberInput
    memberStatus?: MemberStatusCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutPaymentsInput = {
    id?: string
    cnic: string
    name: string
    fatherName?: string | null
    husbandName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    media?: MemberMediaUncheckedCreateNestedManyWithoutMemberInput
    memberStatus?: MemberStatusUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutPaymentsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
  }

  export type MemberUpsertWithoutPaymentsInput = {
    update: XOR<MemberUpdateWithoutPaymentsInput, MemberUncheckedUpdateWithoutPaymentsInput>
    create: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutPaymentsInput, MemberUncheckedUpdateWithoutPaymentsInput>
  }

  export type MemberUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    husbandName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    media?: MemberMediaUpdateManyWithoutMemberNestedInput
    memberStatus?: MemberStatusUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    husbandName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    media?: MemberMediaUncheckedUpdateManyWithoutMemberNestedInput
    memberStatus?: MemberStatusUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateWithoutMediaInput = {
    id?: string
    cnic: string
    name: string
    fatherName?: string | null
    husbandName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    payments?: MemberPaymentsCreateNestedManyWithoutMemberInput
    memberStatus?: MemberStatusCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutMediaInput = {
    id?: string
    cnic: string
    name: string
    fatherName?: string | null
    husbandName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.Role
    payments?: MemberPaymentsUncheckedCreateNestedManyWithoutMemberInput
    memberStatus?: MemberStatusUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutMediaInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutMediaInput, MemberUncheckedCreateWithoutMediaInput>
  }

  export type MemberUpsertWithoutMediaInput = {
    update: XOR<MemberUpdateWithoutMediaInput, MemberUncheckedUpdateWithoutMediaInput>
    create: XOR<MemberCreateWithoutMediaInput, MemberUncheckedCreateWithoutMediaInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutMediaInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutMediaInput, MemberUncheckedUpdateWithoutMediaInput>
  }

  export type MemberUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    husbandName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    payments?: MemberPaymentsUpdateManyWithoutMemberNestedInput
    memberStatus?: MemberStatusUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    husbandName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    payments?: MemberPaymentsUncheckedUpdateManyWithoutMemberNestedInput
    memberStatus?: MemberStatusUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type DonationCreateManyDonorInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorMediaCreateManyDonorInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
  }

  export type DonationUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorMediaUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorMediaUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorMediaUncheckedUpdateManyWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberMediaCreateManyMemberInput = {
    id: string
    profilePic?: string | null
    cnicFront?: string | null
    cnicBack?: string | null
  }

  export type MemberPaymentsCreateManyMemberInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberStatusCreateManyMemberInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberMediaUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberMediaUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberMediaUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    cnicFront?: NullableStringFieldUpdateOperationsInput | string | null
    cnicBack?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberPaymentsUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentsUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentsUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberStatusUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberStatusUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberStatusUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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