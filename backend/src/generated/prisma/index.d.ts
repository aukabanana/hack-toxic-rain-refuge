
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model CommunityMember
 * 
 */
export type CommunityMember = $Result.DefaultSelection<Prisma.$CommunityMemberPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model MapZone
 * 
 */
export type MapZone = $Result.DefaultSelection<Prisma.$MapZonePayload>
/**
 * Model MapMarker
 * 
 */
export type MapMarker = $Result.DefaultSelection<Prisma.$MapMarkerPayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model MissionAssignment
 * 
 */
export type MissionAssignment = $Result.DefaultSelection<Prisma.$MissionAssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  RESOURCE_TRACKER: 'RESOURCE_TRACKER',
  RESOURCE_FINDER: 'RESOURCE_FINDER',
  SCOUT: 'SCOUT',
  SURVIVOR: 'SURVIVOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ResourceType: {
  FOOD: 'FOOD',
  WATER: 'WATER',
  MEDICINE: 'MEDICINE',
  TOOL: 'TOOL',
  FUEL: 'FUEL',
  EQUIPMENT: 'EQUIPMENT',
  OTHER: 'OTHER'
};

export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType]


export const RiskLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL',
  UNKNOWN: 'UNKNOWN'
};

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel]


export const MissionUrgency: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type MissionUrgency = (typeof MissionUrgency)[keyof typeof MissionUrgency]


export const ZoneType: {
  SAFE: 'SAFE',
  TOXIC: 'TOXIC'
};

export type ZoneType = (typeof ZoneType)[keyof typeof ZoneType]


export const MarkerType: {
  COMMUNITY_BASE: 'COMMUNITY_BASE',
  RESOURCE_LOCATION: 'RESOURCE_LOCATION',
  MISSION_DESTINATION: 'MISSION_DESTINATION',
  SAFE_AREA: 'SAFE_AREA',
  TOXIC_AREA: 'TOXIC_AREA',
  DANGER_AREA: 'DANGER_AREA'
};

export type MarkerType = (typeof MarkerType)[keyof typeof MarkerType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ResourceType = $Enums.ResourceType

export const ResourceType: typeof $Enums.ResourceType

export type RiskLevel = $Enums.RiskLevel

export const RiskLevel: typeof $Enums.RiskLevel

export type MissionUrgency = $Enums.MissionUrgency

export const MissionUrgency: typeof $Enums.MissionUrgency

export type ZoneType = $Enums.ZoneType

export const ZoneType: typeof $Enums.ZoneType

export type MarkerType = $Enums.MarkerType

export const MarkerType: typeof $Enums.MarkerType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityMember`: Exposes CRUD operations for the **CommunityMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityMembers
    * const communityMembers = await prisma.communityMember.findMany()
    * ```
    */
  get communityMember(): Prisma.CommunityMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapZone`: Exposes CRUD operations for the **MapZone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapZones
    * const mapZones = await prisma.mapZone.findMany()
    * ```
    */
  get mapZone(): Prisma.MapZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapMarker`: Exposes CRUD operations for the **MapMarker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapMarkers
    * const mapMarkers = await prisma.mapMarker.findMany()
    * ```
    */
  get mapMarker(): Prisma.MapMarkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionAssignment`: Exposes CRUD operations for the **MissionAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionAssignments
    * const missionAssignments = await prisma.missionAssignment.findMany()
    * ```
    */
  get missionAssignment(): Prisma.MissionAssignmentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Community: 'Community',
    CommunityMember: 'CommunityMember',
    Resource: 'Resource',
    MapZone: 'MapZone',
    MapMarker: 'MapMarker',
    Mission: 'Mission',
    MissionAssignment: 'MissionAssignment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "community" | "communityMember" | "resource" | "mapZone" | "mapMarker" | "mission" | "missionAssignment"
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
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      CommunityMember: {
        payload: Prisma.$CommunityMemberPayload<ExtArgs>
        fields: Prisma.CommunityMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          findFirst: {
            args: Prisma.CommunityMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          findMany: {
            args: Prisma.CommunityMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>[]
          }
          create: {
            args: Prisma.CommunityMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          createMany: {
            args: Prisma.CommunityMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>[]
          }
          delete: {
            args: Prisma.CommunityMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          update: {
            args: Prisma.CommunityMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          deleteMany: {
            args: Prisma.CommunityMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>[]
          }
          upsert: {
            args: Prisma.CommunityMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          aggregate: {
            args: Prisma.CommunityMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityMember>
          }
          groupBy: {
            args: Prisma.CommunityMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityMemberCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityMemberCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      MapZone: {
        payload: Prisma.$MapZonePayload<ExtArgs>
        fields: Prisma.MapZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload>
          }
          findFirst: {
            args: Prisma.MapZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload>
          }
          findMany: {
            args: Prisma.MapZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload>[]
          }
          create: {
            args: Prisma.MapZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload>
          }
          createMany: {
            args: Prisma.MapZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapZoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload>[]
          }
          delete: {
            args: Prisma.MapZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload>
          }
          update: {
            args: Prisma.MapZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload>
          }
          deleteMany: {
            args: Prisma.MapZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapZoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload>[]
          }
          upsert: {
            args: Prisma.MapZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapZonePayload>
          }
          aggregate: {
            args: Prisma.MapZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapZone>
          }
          groupBy: {
            args: Prisma.MapZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapZoneCountArgs<ExtArgs>
            result: $Utils.Optional<MapZoneCountAggregateOutputType> | number
          }
        }
      }
      MapMarker: {
        payload: Prisma.$MapMarkerPayload<ExtArgs>
        fields: Prisma.MapMarkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapMarkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapMarkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          findFirst: {
            args: Prisma.MapMarkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapMarkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          findMany: {
            args: Prisma.MapMarkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>[]
          }
          create: {
            args: Prisma.MapMarkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          createMany: {
            args: Prisma.MapMarkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapMarkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>[]
          }
          delete: {
            args: Prisma.MapMarkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          update: {
            args: Prisma.MapMarkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          deleteMany: {
            args: Prisma.MapMarkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapMarkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapMarkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>[]
          }
          upsert: {
            args: Prisma.MapMarkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          aggregate: {
            args: Prisma.MapMarkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapMarker>
          }
          groupBy: {
            args: Prisma.MapMarkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapMarkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapMarkerCountArgs<ExtArgs>
            result: $Utils.Optional<MapMarkerCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      MissionAssignment: {
        payload: Prisma.$MissionAssignmentPayload<ExtArgs>
        fields: Prisma.MissionAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload>
          }
          findFirst: {
            args: Prisma.MissionAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload>
          }
          findMany: {
            args: Prisma.MissionAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload>[]
          }
          create: {
            args: Prisma.MissionAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload>
          }
          createMany: {
            args: Prisma.MissionAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload>[]
          }
          delete: {
            args: Prisma.MissionAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload>
          }
          update: {
            args: Prisma.MissionAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.MissionAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.MissionAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionAssignmentPayload>
          }
          aggregate: {
            args: Prisma.MissionAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionAssignment>
          }
          groupBy: {
            args: Prisma.MissionAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<MissionAssignmentCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    community?: CommunityOmit
    communityMember?: CommunityMemberOmit
    resource?: ResourceOmit
    mapZone?: MapZoneOmit
    mapMarker?: MapMarkerOmit
    mission?: MissionOmit
    missionAssignment?: MissionAssignmentOmit
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
    memberships: number
    assignments: number
    createdMarkers: number
    createdMissions: number
    createdCommunities: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
    createdMarkers?: boolean | UserCountOutputTypeCountCreatedMarkersArgs
    createdMissions?: boolean | UserCountOutputTypeCountCreatedMissionsArgs
    createdCommunities?: boolean | UserCountOutputTypeCountCreatedCommunitiesArgs
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
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedMarkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapMarkerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    members: number
    resources: number
    markers: number
    zones: number
    missions: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CommunityCountOutputTypeCountMembersArgs
    resources?: boolean | CommunityCountOutputTypeCountResourcesArgs
    markers?: boolean | CommunityCountOutputTypeCountMarkersArgs
    zones?: boolean | CommunityCountOutputTypeCountZonesArgs
    missions?: boolean | CommunityCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityMemberWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountMarkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapMarkerWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountZonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapZoneWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }


  /**
   * Count Type CommunityMemberCountOutputType
   */

  export type CommunityMemberCountOutputType = {
    missionAssignments: number
  }

  export type CommunityMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missionAssignments?: boolean | CommunityMemberCountOutputTypeCountMissionAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * CommunityMemberCountOutputType without action
   */
  export type CommunityMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMemberCountOutputType
     */
    select?: CommunityMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityMemberCountOutputType without action
   */
  export type CommunityMemberCountOutputTypeCountMissionAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionAssignmentWhereInput
  }


  /**
   * Count Type ResourceCountOutputType
   */

  export type ResourceCountOutputType = {
    relatedMissions: number
  }

  export type ResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedMissions?: boolean | ResourceCountOutputTypeCountRelatedMissionsArgs
  }

  // Custom InputTypes
  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCountOutputType
     */
    select?: ResourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountRelatedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }


  /**
   * Count Type MapMarkerCountOutputType
   */

  export type MapMarkerCountOutputType = {
    missions: number
  }

  export type MapMarkerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | MapMarkerCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * MapMarkerCountOutputType without action
   */
  export type MapMarkerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarkerCountOutputType
     */
    select?: MapMarkerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MapMarkerCountOutputType without action
   */
  export type MapMarkerCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }


  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    assignments: number
  }

  export type MissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | MissionCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionAssignmentWhereInput
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
    username: string | null
    password: string | null
    telephone: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    telephone: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    telephone: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    telephone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    telephone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    telephone?: true
    role?: true
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
    username: string
    password: string
    telephone: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    password?: boolean
    telephone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    createdMarkers?: boolean | User$createdMarkersArgs<ExtArgs>
    createdMissions?: boolean | User$createdMissionsArgs<ExtArgs>
    createdCommunities?: boolean | User$createdCommunitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    telephone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    telephone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    telephone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "telephone" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    createdMarkers?: boolean | User$createdMarkersArgs<ExtArgs>
    createdMissions?: boolean | User$createdMissionsArgs<ExtArgs>
    createdCommunities?: boolean | User$createdCommunitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      memberships: Prisma.$CommunityMemberPayload<ExtArgs>[]
      assignments: Prisma.$MissionAssignmentPayload<ExtArgs>[]
      createdMarkers: Prisma.$MapMarkerPayload<ExtArgs>[]
      createdMissions: Prisma.$MissionPayload<ExtArgs>[]
      createdCommunities: Prisma.$CommunityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      telephone: string
      role: $Enums.UserRole
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
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdMarkers<T extends User$createdMarkersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdMarkersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdMissions<T extends User$createdMissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdMissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdCommunities<T extends User$createdCommunitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCommunitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly telephone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    where?: CommunityMemberWhereInput
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    cursor?: CommunityMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    where?: MissionAssignmentWhereInput
    orderBy?: MissionAssignmentOrderByWithRelationInput | MissionAssignmentOrderByWithRelationInput[]
    cursor?: MissionAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionAssignmentScalarFieldEnum | MissionAssignmentScalarFieldEnum[]
  }

  /**
   * User.createdMarkers
   */
  export type User$createdMarkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    where?: MapMarkerWhereInput
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    cursor?: MapMarkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * User.createdMissions
   */
  export type User$createdMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * User.createdCommunities
   */
  export type User$createdCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
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
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    name: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityMinAggregateInputType = {
    id?: true
    name?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    name?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    name?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: string
    name: string
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: CommunityCountAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Community$createdByArgs<ExtArgs>
    members?: boolean | Community$membersArgs<ExtArgs>
    resources?: boolean | Community$resourcesArgs<ExtArgs>
    markers?: boolean | Community$markersArgs<ExtArgs>
    zones?: boolean | Community$zonesArgs<ExtArgs>
    missions?: boolean | Community$missionsArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Community$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Community$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["community"]>
  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Community$createdByArgs<ExtArgs>
    members?: boolean | Community$membersArgs<ExtArgs>
    resources?: boolean | Community$resourcesArgs<ExtArgs>
    markers?: boolean | Community$markersArgs<ExtArgs>
    zones?: boolean | Community$zonesArgs<ExtArgs>
    missions?: boolean | Community$missionsArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Community$createdByArgs<ExtArgs>
  }
  export type CommunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Community$createdByArgs<ExtArgs>
  }

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      members: Prisma.$CommunityMemberPayload<ExtArgs>[]
      resources: Prisma.$ResourcePayload<ExtArgs>[]
      markers: Prisma.$MapMarkerPayload<ExtArgs>[]
      zones: Prisma.$MapZonePayload<ExtArgs>[]
      missions: Prisma.$MissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {CommunityCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities and returns the data updated in the database.
     * @param {CommunityUpdateManyAndReturnArgs} args - Arguments to update many Communities.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
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
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Community$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Community$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Community$membersArgs<ExtArgs> = {}>(args?: Subset<T, Community$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resources<T extends Community$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, Community$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    markers<T extends Community$markersArgs<ExtArgs> = {}>(args?: Subset<T, Community$markersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    zones<T extends Community$zonesArgs<ExtArgs> = {}>(args?: Subset<T, Community$zonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    missions<T extends Community$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Community$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Community model
   */
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'String'>
    readonly name: FieldRef<"Community", 'String'>
    readonly createdById: FieldRef<"Community", 'String'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
    readonly updatedAt: FieldRef<"Community", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
  }

  /**
   * Community createManyAndReturn
   */
  export type CommunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community updateManyAndReturn
   */
  export type CommunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to delete.
     */
    limit?: number
  }

  /**
   * Community.createdBy
   */
  export type Community$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Community.members
   */
  export type Community$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    where?: CommunityMemberWhereInput
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    cursor?: CommunityMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * Community.resources
   */
  export type Community$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Community.markers
   */
  export type Community$markersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    where?: MapMarkerWhereInput
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    cursor?: MapMarkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * Community.zones
   */
  export type Community$zonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
    where?: MapZoneWhereInput
    orderBy?: MapZoneOrderByWithRelationInput | MapZoneOrderByWithRelationInput[]
    cursor?: MapZoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapZoneScalarFieldEnum | MapZoneScalarFieldEnum[]
  }

  /**
   * Community.missions
   */
  export type Community$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Model CommunityMember
   */

  export type AggregateCommunityMember = {
    _count: CommunityMemberCountAggregateOutputType | null
    _min: CommunityMemberMinAggregateOutputType | null
    _max: CommunityMemberMaxAggregateOutputType | null
  }

  export type CommunityMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    communityId: string | null
    role: $Enums.UserRole | null
    joinedAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    communityId: string | null
    role: $Enums.UserRole | null
    joinedAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMemberCountAggregateOutputType = {
    id: number
    userId: number
    communityId: number
    role: number
    joinedAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityMemberMinAggregateInputType = {
    id?: true
    userId?: true
    communityId?: true
    role?: true
    joinedAt?: true
    updatedAt?: true
  }

  export type CommunityMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    communityId?: true
    role?: true
    joinedAt?: true
    updatedAt?: true
  }

  export type CommunityMemberCountAggregateInputType = {
    id?: true
    userId?: true
    communityId?: true
    role?: true
    joinedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityMember to aggregate.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityMembers
    **/
    _count?: true | CommunityMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMemberMaxAggregateInputType
  }

  export type GetCommunityMemberAggregateType<T extends CommunityMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityMember[P]>
      : GetScalarType<T[P], AggregateCommunityMember[P]>
  }




  export type CommunityMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityMemberWhereInput
    orderBy?: CommunityMemberOrderByWithAggregationInput | CommunityMemberOrderByWithAggregationInput[]
    by: CommunityMemberScalarFieldEnum[] | CommunityMemberScalarFieldEnum
    having?: CommunityMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityMemberCountAggregateInputType | true
    _min?: CommunityMemberMinAggregateInputType
    _max?: CommunityMemberMaxAggregateInputType
  }

  export type CommunityMemberGroupByOutputType = {
    id: string
    userId: string
    communityId: string
    role: $Enums.UserRole
    joinedAt: Date
    updatedAt: Date
    _count: CommunityMemberCountAggregateOutputType | null
    _min: CommunityMemberMinAggregateOutputType | null
    _max: CommunityMemberMaxAggregateOutputType | null
  }

  type GetCommunityMemberGroupByPayload<T extends CommunityMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityMemberGroupByOutputType[P]>
        }
      >
    >


  export type CommunityMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    communityId?: boolean
    role?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    missionAssignments?: boolean | CommunityMember$missionAssignmentsArgs<ExtArgs>
    _count?: boolean | CommunityMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityMember"]>

  export type CommunityMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    communityId?: boolean
    role?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityMember"]>

  export type CommunityMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    communityId?: boolean
    role?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityMember"]>

  export type CommunityMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    communityId?: boolean
    role?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "communityId" | "role" | "joinedAt" | "updatedAt", ExtArgs["result"]["communityMember"]>
  export type CommunityMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    missionAssignments?: boolean | CommunityMember$missionAssignmentsArgs<ExtArgs>
    _count?: boolean | CommunityMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }
  export type CommunityMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }

  export type $CommunityMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      community: Prisma.$CommunityPayload<ExtArgs>
      missionAssignments: Prisma.$MissionAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      communityId: string
      role: $Enums.UserRole
      joinedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["communityMember"]>
    composites: {}
  }

  type CommunityMemberGetPayload<S extends boolean | null | undefined | CommunityMemberDefaultArgs> = $Result.GetResult<Prisma.$CommunityMemberPayload, S>

  type CommunityMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityMemberCountAggregateInputType | true
    }

  export interface CommunityMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityMember'], meta: { name: 'CommunityMember' } }
    /**
     * Find zero or one CommunityMember that matches the filter.
     * @param {CommunityMemberFindUniqueArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityMemberFindUniqueArgs>(args: SelectSubset<T, CommunityMemberFindUniqueArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityMemberFindUniqueOrThrowArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberFindFirstArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityMemberFindFirstArgs>(args?: SelectSubset<T, CommunityMemberFindFirstArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberFindFirstOrThrowArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityMembers
     * const communityMembers = await prisma.communityMember.findMany()
     * 
     * // Get first 10 CommunityMembers
     * const communityMembers = await prisma.communityMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityMemberWithIdOnly = await prisma.communityMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityMemberFindManyArgs>(args?: SelectSubset<T, CommunityMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityMember.
     * @param {CommunityMemberCreateArgs} args - Arguments to create a CommunityMember.
     * @example
     * // Create one CommunityMember
     * const CommunityMember = await prisma.communityMember.create({
     *   data: {
     *     // ... data to create a CommunityMember
     *   }
     * })
     * 
     */
    create<T extends CommunityMemberCreateArgs>(args: SelectSubset<T, CommunityMemberCreateArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityMembers.
     * @param {CommunityMemberCreateManyArgs} args - Arguments to create many CommunityMembers.
     * @example
     * // Create many CommunityMembers
     * const communityMember = await prisma.communityMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityMemberCreateManyArgs>(args?: SelectSubset<T, CommunityMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityMembers and returns the data saved in the database.
     * @param {CommunityMemberCreateManyAndReturnArgs} args - Arguments to create many CommunityMembers.
     * @example
     * // Create many CommunityMembers
     * const communityMember = await prisma.communityMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityMembers and only return the `id`
     * const communityMemberWithIdOnly = await prisma.communityMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityMember.
     * @param {CommunityMemberDeleteArgs} args - Arguments to delete one CommunityMember.
     * @example
     * // Delete one CommunityMember
     * const CommunityMember = await prisma.communityMember.delete({
     *   where: {
     *     // ... filter to delete one CommunityMember
     *   }
     * })
     * 
     */
    delete<T extends CommunityMemberDeleteArgs>(args: SelectSubset<T, CommunityMemberDeleteArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityMember.
     * @param {CommunityMemberUpdateArgs} args - Arguments to update one CommunityMember.
     * @example
     * // Update one CommunityMember
     * const communityMember = await prisma.communityMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityMemberUpdateArgs>(args: SelectSubset<T, CommunityMemberUpdateArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityMembers.
     * @param {CommunityMemberDeleteManyArgs} args - Arguments to filter CommunityMembers to delete.
     * @example
     * // Delete a few CommunityMembers
     * const { count } = await prisma.communityMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityMemberDeleteManyArgs>(args?: SelectSubset<T, CommunityMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityMembers
     * const communityMember = await prisma.communityMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityMemberUpdateManyArgs>(args: SelectSubset<T, CommunityMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityMembers and returns the data updated in the database.
     * @param {CommunityMemberUpdateManyAndReturnArgs} args - Arguments to update many CommunityMembers.
     * @example
     * // Update many CommunityMembers
     * const communityMember = await prisma.communityMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityMembers and only return the `id`
     * const communityMemberWithIdOnly = await prisma.communityMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityMember.
     * @param {CommunityMemberUpsertArgs} args - Arguments to update or create a CommunityMember.
     * @example
     * // Update or create a CommunityMember
     * const communityMember = await prisma.communityMember.upsert({
     *   create: {
     *     // ... data to create a CommunityMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityMember we want to update
     *   }
     * })
     */
    upsert<T extends CommunityMemberUpsertArgs>(args: SelectSubset<T, CommunityMemberUpsertArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberCountArgs} args - Arguments to filter CommunityMembers to count.
     * @example
     * // Count the number of CommunityMembers
     * const count = await prisma.communityMember.count({
     *   where: {
     *     // ... the filter for the CommunityMembers we want to count
     *   }
     * })
    **/
    count<T extends CommunityMemberCountArgs>(
      args?: Subset<T, CommunityMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityMemberAggregateArgs>(args: Subset<T, CommunityMemberAggregateArgs>): Prisma.PrismaPromise<GetCommunityMemberAggregateType<T>>

    /**
     * Group by CommunityMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberGroupByArgs} args - Group by arguments.
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
      T extends CommunityMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityMemberGroupByArgs['orderBy'] }
        : { orderBy?: CommunityMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityMember model
   */
  readonly fields: CommunityMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    missionAssignments<T extends CommunityMember$missionAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, CommunityMember$missionAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CommunityMember model
   */
  interface CommunityMemberFieldRefs {
    readonly id: FieldRef<"CommunityMember", 'String'>
    readonly userId: FieldRef<"CommunityMember", 'String'>
    readonly communityId: FieldRef<"CommunityMember", 'String'>
    readonly role: FieldRef<"CommunityMember", 'UserRole'>
    readonly joinedAt: FieldRef<"CommunityMember", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunityMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityMember findUnique
   */
  export type CommunityMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember findUniqueOrThrow
   */
  export type CommunityMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember findFirst
   */
  export type CommunityMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityMembers.
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityMembers.
     */
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * CommunityMember findFirstOrThrow
   */
  export type CommunityMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityMembers.
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityMembers.
     */
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * CommunityMember findMany
   */
  export type CommunityMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMembers to fetch.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityMembers.
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityMembers.
     */
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * CommunityMember create
   */
  export type CommunityMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityMember.
     */
    data: XOR<CommunityMemberCreateInput, CommunityMemberUncheckedCreateInput>
  }

  /**
   * CommunityMember createMany
   */
  export type CommunityMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityMembers.
     */
    data: CommunityMemberCreateManyInput | CommunityMemberCreateManyInput[]
  }

  /**
   * CommunityMember createManyAndReturn
   */
  export type CommunityMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityMembers.
     */
    data: CommunityMemberCreateManyInput | CommunityMemberCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityMember update
   */
  export type CommunityMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityMember.
     */
    data: XOR<CommunityMemberUpdateInput, CommunityMemberUncheckedUpdateInput>
    /**
     * Choose, which CommunityMember to update.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember updateMany
   */
  export type CommunityMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityMembers.
     */
    data: XOR<CommunityMemberUpdateManyMutationInput, CommunityMemberUncheckedUpdateManyInput>
    /**
     * Filter which CommunityMembers to update
     */
    where?: CommunityMemberWhereInput
    /**
     * Limit how many CommunityMembers to update.
     */
    limit?: number
  }

  /**
   * CommunityMember updateManyAndReturn
   */
  export type CommunityMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * The data used to update CommunityMembers.
     */
    data: XOR<CommunityMemberUpdateManyMutationInput, CommunityMemberUncheckedUpdateManyInput>
    /**
     * Filter which CommunityMembers to update
     */
    where?: CommunityMemberWhereInput
    /**
     * Limit how many CommunityMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityMember upsert
   */
  export type CommunityMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityMember to update in case it exists.
     */
    where: CommunityMemberWhereUniqueInput
    /**
     * In case the CommunityMember found by the `where` argument doesn't exist, create a new CommunityMember with this data.
     */
    create: XOR<CommunityMemberCreateInput, CommunityMemberUncheckedCreateInput>
    /**
     * In case the CommunityMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityMemberUpdateInput, CommunityMemberUncheckedUpdateInput>
  }

  /**
   * CommunityMember delete
   */
  export type CommunityMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter which CommunityMember to delete.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember deleteMany
   */
  export type CommunityMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityMembers to delete
     */
    where?: CommunityMemberWhereInput
    /**
     * Limit how many CommunityMembers to delete.
     */
    limit?: number
  }

  /**
   * CommunityMember.missionAssignments
   */
  export type CommunityMember$missionAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    where?: MissionAssignmentWhereInput
    orderBy?: MissionAssignmentOrderByWithRelationInput | MissionAssignmentOrderByWithRelationInput[]
    cursor?: MissionAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionAssignmentScalarFieldEnum | MissionAssignmentScalarFieldEnum[]
  }

  /**
   * CommunityMember without action
   */
  export type CommunityMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    amount: number | null
  }

  export type ResourceSumAggregateOutputType = {
    amount: number | null
  }

  export type ResourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ResourceType | null
    amount: number | null
    unit: string | null
    communityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ResourceType | null
    amount: number | null
    unit: string | null
    communityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    name: number
    type: number
    amount: number
    unit: number
    communityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    amount?: true
  }

  export type ResourceSumAggregateInputType = {
    amount?: true
  }

  export type ResourceMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    amount?: true
    unit?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    amount?: true
    unit?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    amount?: true
    unit?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ResourceType
    amount: number
    unit: string
    communityId: string
    createdAt: Date
    updatedAt: Date
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    unit?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    relatedMissions?: boolean | Resource$relatedMissionsArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    unit?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    unit?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    unit?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "amount" | "unit" | "communityId" | "createdAt" | "updatedAt", ExtArgs["result"]["resource"]>
  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    relatedMissions?: boolean | Resource$relatedMissionsArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      relatedMissions: Prisma.$MissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ResourceType
      amount: number
      unit: string
      communityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
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
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relatedMissions<T extends Resource$relatedMissionsArgs<ExtArgs> = {}>(args?: Subset<T, Resource$relatedMissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'String'>
    readonly name: FieldRef<"Resource", 'String'>
    readonly type: FieldRef<"Resource", 'ResourceType'>
    readonly amount: FieldRef<"Resource", 'Float'>
    readonly unit: FieldRef<"Resource", 'String'>
    readonly communityId: FieldRef<"Resource", 'String'>
    readonly createdAt: FieldRef<"Resource", 'DateTime'>
    readonly updatedAt: FieldRef<"Resource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource updateManyAndReturn
   */
  export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource.relatedMissions
   */
  export type Resource$relatedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model MapZone
   */

  export type AggregateMapZone = {
    _count: MapZoneCountAggregateOutputType | null
    _min: MapZoneMinAggregateOutputType | null
    _max: MapZoneMaxAggregateOutputType | null
  }

  export type MapZoneMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ZoneType | null
    riskLevel: $Enums.RiskLevel | null
    description: string | null
    geoJson: string | null
    communityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapZoneMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ZoneType | null
    riskLevel: $Enums.RiskLevel | null
    description: string | null
    geoJson: string | null
    communityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapZoneCountAggregateOutputType = {
    id: number
    name: number
    type: number
    riskLevel: number
    description: number
    geoJson: number
    communityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MapZoneMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    riskLevel?: true
    description?: true
    geoJson?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapZoneMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    riskLevel?: true
    description?: true
    geoJson?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapZoneCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    riskLevel?: true
    description?: true
    geoJson?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MapZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapZone to aggregate.
     */
    where?: MapZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapZones to fetch.
     */
    orderBy?: MapZoneOrderByWithRelationInput | MapZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapZones
    **/
    _count?: true | MapZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapZoneMaxAggregateInputType
  }

  export type GetMapZoneAggregateType<T extends MapZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMapZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapZone[P]>
      : GetScalarType<T[P], AggregateMapZone[P]>
  }




  export type MapZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapZoneWhereInput
    orderBy?: MapZoneOrderByWithAggregationInput | MapZoneOrderByWithAggregationInput[]
    by: MapZoneScalarFieldEnum[] | MapZoneScalarFieldEnum
    having?: MapZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapZoneCountAggregateInputType | true
    _min?: MapZoneMinAggregateInputType
    _max?: MapZoneMaxAggregateInputType
  }

  export type MapZoneGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ZoneType
    riskLevel: $Enums.RiskLevel
    description: string | null
    geoJson: string | null
    communityId: string
    createdAt: Date
    updatedAt: Date
    _count: MapZoneCountAggregateOutputType | null
    _min: MapZoneMinAggregateOutputType | null
    _max: MapZoneMaxAggregateOutputType | null
  }

  type GetMapZoneGroupByPayload<T extends MapZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapZoneGroupByOutputType[P]>
            : GetScalarType<T[P], MapZoneGroupByOutputType[P]>
        }
      >
    >


  export type MapZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    riskLevel?: boolean
    description?: boolean
    geoJson?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapZone"]>

  export type MapZoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    riskLevel?: boolean
    description?: boolean
    geoJson?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapZone"]>

  export type MapZoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    riskLevel?: boolean
    description?: boolean
    geoJson?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapZone"]>

  export type MapZoneSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    riskLevel?: boolean
    description?: boolean
    geoJson?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MapZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "riskLevel" | "description" | "geoJson" | "communityId" | "createdAt" | "updatedAt", ExtArgs["result"]["mapZone"]>
  export type MapZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }
  export type MapZoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }
  export type MapZoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }

  export type $MapZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapZone"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ZoneType
      riskLevel: $Enums.RiskLevel
      description: string | null
      geoJson: string | null
      communityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mapZone"]>
    composites: {}
  }

  type MapZoneGetPayload<S extends boolean | null | undefined | MapZoneDefaultArgs> = $Result.GetResult<Prisma.$MapZonePayload, S>

  type MapZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapZoneCountAggregateInputType | true
    }

  export interface MapZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapZone'], meta: { name: 'MapZone' } }
    /**
     * Find zero or one MapZone that matches the filter.
     * @param {MapZoneFindUniqueArgs} args - Arguments to find a MapZone
     * @example
     * // Get one MapZone
     * const mapZone = await prisma.mapZone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapZoneFindUniqueArgs>(args: SelectSubset<T, MapZoneFindUniqueArgs<ExtArgs>>): Prisma__MapZoneClient<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapZone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapZoneFindUniqueOrThrowArgs} args - Arguments to find a MapZone
     * @example
     * // Get one MapZone
     * const mapZone = await prisma.mapZone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MapZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapZoneClient<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapZone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapZoneFindFirstArgs} args - Arguments to find a MapZone
     * @example
     * // Get one MapZone
     * const mapZone = await prisma.mapZone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapZoneFindFirstArgs>(args?: SelectSubset<T, MapZoneFindFirstArgs<ExtArgs>>): Prisma__MapZoneClient<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapZone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapZoneFindFirstOrThrowArgs} args - Arguments to find a MapZone
     * @example
     * // Get one MapZone
     * const mapZone = await prisma.mapZone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MapZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapZoneClient<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapZones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapZones
     * const mapZones = await prisma.mapZone.findMany()
     * 
     * // Get first 10 MapZones
     * const mapZones = await prisma.mapZone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapZoneWithIdOnly = await prisma.mapZone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapZoneFindManyArgs>(args?: SelectSubset<T, MapZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapZone.
     * @param {MapZoneCreateArgs} args - Arguments to create a MapZone.
     * @example
     * // Create one MapZone
     * const MapZone = await prisma.mapZone.create({
     *   data: {
     *     // ... data to create a MapZone
     *   }
     * })
     * 
     */
    create<T extends MapZoneCreateArgs>(args: SelectSubset<T, MapZoneCreateArgs<ExtArgs>>): Prisma__MapZoneClient<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapZones.
     * @param {MapZoneCreateManyArgs} args - Arguments to create many MapZones.
     * @example
     * // Create many MapZones
     * const mapZone = await prisma.mapZone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapZoneCreateManyArgs>(args?: SelectSubset<T, MapZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapZones and returns the data saved in the database.
     * @param {MapZoneCreateManyAndReturnArgs} args - Arguments to create many MapZones.
     * @example
     * // Create many MapZones
     * const mapZone = await prisma.mapZone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapZones and only return the `id`
     * const mapZoneWithIdOnly = await prisma.mapZone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapZoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MapZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapZone.
     * @param {MapZoneDeleteArgs} args - Arguments to delete one MapZone.
     * @example
     * // Delete one MapZone
     * const MapZone = await prisma.mapZone.delete({
     *   where: {
     *     // ... filter to delete one MapZone
     *   }
     * })
     * 
     */
    delete<T extends MapZoneDeleteArgs>(args: SelectSubset<T, MapZoneDeleteArgs<ExtArgs>>): Prisma__MapZoneClient<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapZone.
     * @param {MapZoneUpdateArgs} args - Arguments to update one MapZone.
     * @example
     * // Update one MapZone
     * const mapZone = await prisma.mapZone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapZoneUpdateArgs>(args: SelectSubset<T, MapZoneUpdateArgs<ExtArgs>>): Prisma__MapZoneClient<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapZones.
     * @param {MapZoneDeleteManyArgs} args - Arguments to filter MapZones to delete.
     * @example
     * // Delete a few MapZones
     * const { count } = await prisma.mapZone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapZoneDeleteManyArgs>(args?: SelectSubset<T, MapZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapZones
     * const mapZone = await prisma.mapZone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapZoneUpdateManyArgs>(args: SelectSubset<T, MapZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapZones and returns the data updated in the database.
     * @param {MapZoneUpdateManyAndReturnArgs} args - Arguments to update many MapZones.
     * @example
     * // Update many MapZones
     * const mapZone = await prisma.mapZone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapZones and only return the `id`
     * const mapZoneWithIdOnly = await prisma.mapZone.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapZoneUpdateManyAndReturnArgs>(args: SelectSubset<T, MapZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapZone.
     * @param {MapZoneUpsertArgs} args - Arguments to update or create a MapZone.
     * @example
     * // Update or create a MapZone
     * const mapZone = await prisma.mapZone.upsert({
     *   create: {
     *     // ... data to create a MapZone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapZone we want to update
     *   }
     * })
     */
    upsert<T extends MapZoneUpsertArgs>(args: SelectSubset<T, MapZoneUpsertArgs<ExtArgs>>): Prisma__MapZoneClient<$Result.GetResult<Prisma.$MapZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapZoneCountArgs} args - Arguments to filter MapZones to count.
     * @example
     * // Count the number of MapZones
     * const count = await prisma.mapZone.count({
     *   where: {
     *     // ... the filter for the MapZones we want to count
     *   }
     * })
    **/
    count<T extends MapZoneCountArgs>(
      args?: Subset<T, MapZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapZoneAggregateArgs>(args: Subset<T, MapZoneAggregateArgs>): Prisma.PrismaPromise<GetMapZoneAggregateType<T>>

    /**
     * Group by MapZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapZoneGroupByArgs} args - Group by arguments.
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
      T extends MapZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapZoneGroupByArgs['orderBy'] }
        : { orderBy?: MapZoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapZone model
   */
  readonly fields: MapZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapZone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MapZone model
   */
  interface MapZoneFieldRefs {
    readonly id: FieldRef<"MapZone", 'String'>
    readonly name: FieldRef<"MapZone", 'String'>
    readonly type: FieldRef<"MapZone", 'ZoneType'>
    readonly riskLevel: FieldRef<"MapZone", 'RiskLevel'>
    readonly description: FieldRef<"MapZone", 'String'>
    readonly geoJson: FieldRef<"MapZone", 'String'>
    readonly communityId: FieldRef<"MapZone", 'String'>
    readonly createdAt: FieldRef<"MapZone", 'DateTime'>
    readonly updatedAt: FieldRef<"MapZone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MapZone findUnique
   */
  export type MapZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
    /**
     * Filter, which MapZone to fetch.
     */
    where: MapZoneWhereUniqueInput
  }

  /**
   * MapZone findUniqueOrThrow
   */
  export type MapZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
    /**
     * Filter, which MapZone to fetch.
     */
    where: MapZoneWhereUniqueInput
  }

  /**
   * MapZone findFirst
   */
  export type MapZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
    /**
     * Filter, which MapZone to fetch.
     */
    where?: MapZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapZones to fetch.
     */
    orderBy?: MapZoneOrderByWithRelationInput | MapZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapZones.
     */
    cursor?: MapZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapZones.
     */
    distinct?: MapZoneScalarFieldEnum | MapZoneScalarFieldEnum[]
  }

  /**
   * MapZone findFirstOrThrow
   */
  export type MapZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
    /**
     * Filter, which MapZone to fetch.
     */
    where?: MapZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapZones to fetch.
     */
    orderBy?: MapZoneOrderByWithRelationInput | MapZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapZones.
     */
    cursor?: MapZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapZones.
     */
    distinct?: MapZoneScalarFieldEnum | MapZoneScalarFieldEnum[]
  }

  /**
   * MapZone findMany
   */
  export type MapZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
    /**
     * Filter, which MapZones to fetch.
     */
    where?: MapZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapZones to fetch.
     */
    orderBy?: MapZoneOrderByWithRelationInput | MapZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapZones.
     */
    cursor?: MapZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapZones.
     */
    distinct?: MapZoneScalarFieldEnum | MapZoneScalarFieldEnum[]
  }

  /**
   * MapZone create
   */
  export type MapZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a MapZone.
     */
    data: XOR<MapZoneCreateInput, MapZoneUncheckedCreateInput>
  }

  /**
   * MapZone createMany
   */
  export type MapZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapZones.
     */
    data: MapZoneCreateManyInput | MapZoneCreateManyInput[]
  }

  /**
   * MapZone createManyAndReturn
   */
  export type MapZoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * The data used to create many MapZones.
     */
    data: MapZoneCreateManyInput | MapZoneCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapZone update
   */
  export type MapZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a MapZone.
     */
    data: XOR<MapZoneUpdateInput, MapZoneUncheckedUpdateInput>
    /**
     * Choose, which MapZone to update.
     */
    where: MapZoneWhereUniqueInput
  }

  /**
   * MapZone updateMany
   */
  export type MapZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapZones.
     */
    data: XOR<MapZoneUpdateManyMutationInput, MapZoneUncheckedUpdateManyInput>
    /**
     * Filter which MapZones to update
     */
    where?: MapZoneWhereInput
    /**
     * Limit how many MapZones to update.
     */
    limit?: number
  }

  /**
   * MapZone updateManyAndReturn
   */
  export type MapZoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * The data used to update MapZones.
     */
    data: XOR<MapZoneUpdateManyMutationInput, MapZoneUncheckedUpdateManyInput>
    /**
     * Filter which MapZones to update
     */
    where?: MapZoneWhereInput
    /**
     * Limit how many MapZones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapZone upsert
   */
  export type MapZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the MapZone to update in case it exists.
     */
    where: MapZoneWhereUniqueInput
    /**
     * In case the MapZone found by the `where` argument doesn't exist, create a new MapZone with this data.
     */
    create: XOR<MapZoneCreateInput, MapZoneUncheckedCreateInput>
    /**
     * In case the MapZone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapZoneUpdateInput, MapZoneUncheckedUpdateInput>
  }

  /**
   * MapZone delete
   */
  export type MapZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
    /**
     * Filter which MapZone to delete.
     */
    where: MapZoneWhereUniqueInput
  }

  /**
   * MapZone deleteMany
   */
  export type MapZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapZones to delete
     */
    where?: MapZoneWhereInput
    /**
     * Limit how many MapZones to delete.
     */
    limit?: number
  }

  /**
   * MapZone without action
   */
  export type MapZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapZone
     */
    select?: MapZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapZone
     */
    omit?: MapZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapZoneInclude<ExtArgs> | null
  }


  /**
   * Model MapMarker
   */

  export type AggregateMapMarker = {
    _count: MapMarkerCountAggregateOutputType | null
    _avg: MapMarkerAvgAggregateOutputType | null
    _sum: MapMarkerSumAggregateOutputType | null
    _min: MapMarkerMinAggregateOutputType | null
    _max: MapMarkerMaxAggregateOutputType | null
  }

  export type MapMarkerAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type MapMarkerSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type MapMarkerMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.MarkerType | null
    latitude: number | null
    longitude: number | null
    description: string | null
    riskLevel: $Enums.RiskLevel | null
    communityId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapMarkerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.MarkerType | null
    latitude: number | null
    longitude: number | null
    description: string | null
    riskLevel: $Enums.RiskLevel | null
    communityId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapMarkerCountAggregateOutputType = {
    id: number
    name: number
    type: number
    latitude: number
    longitude: number
    description: number
    riskLevel: number
    communityId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MapMarkerAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type MapMarkerSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type MapMarkerMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    latitude?: true
    longitude?: true
    description?: true
    riskLevel?: true
    communityId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapMarkerMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    latitude?: true
    longitude?: true
    description?: true
    riskLevel?: true
    communityId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapMarkerCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    latitude?: true
    longitude?: true
    description?: true
    riskLevel?: true
    communityId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MapMarkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapMarker to aggregate.
     */
    where?: MapMarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapMarkers to fetch.
     */
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapMarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapMarkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapMarkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapMarkers
    **/
    _count?: true | MapMarkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapMarkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapMarkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapMarkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapMarkerMaxAggregateInputType
  }

  export type GetMapMarkerAggregateType<T extends MapMarkerAggregateArgs> = {
        [P in keyof T & keyof AggregateMapMarker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapMarker[P]>
      : GetScalarType<T[P], AggregateMapMarker[P]>
  }




  export type MapMarkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapMarkerWhereInput
    orderBy?: MapMarkerOrderByWithAggregationInput | MapMarkerOrderByWithAggregationInput[]
    by: MapMarkerScalarFieldEnum[] | MapMarkerScalarFieldEnum
    having?: MapMarkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapMarkerCountAggregateInputType | true
    _avg?: MapMarkerAvgAggregateInputType
    _sum?: MapMarkerSumAggregateInputType
    _min?: MapMarkerMinAggregateInputType
    _max?: MapMarkerMaxAggregateInputType
  }

  export type MapMarkerGroupByOutputType = {
    id: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description: string | null
    riskLevel: $Enums.RiskLevel
    communityId: string
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: MapMarkerCountAggregateOutputType | null
    _avg: MapMarkerAvgAggregateOutputType | null
    _sum: MapMarkerSumAggregateOutputType | null
    _min: MapMarkerMinAggregateOutputType | null
    _max: MapMarkerMaxAggregateOutputType | null
  }

  type GetMapMarkerGroupByPayload<T extends MapMarkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapMarkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapMarkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapMarkerGroupByOutputType[P]>
            : GetScalarType<T[P], MapMarkerGroupByOutputType[P]>
        }
      >
    >


  export type MapMarkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    riskLevel?: boolean
    communityId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    createdBy?: boolean | MapMarker$createdByArgs<ExtArgs>
    missions?: boolean | MapMarker$missionsArgs<ExtArgs>
    _count?: boolean | MapMarkerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapMarker"]>

  export type MapMarkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    riskLevel?: boolean
    communityId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    createdBy?: boolean | MapMarker$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["mapMarker"]>

  export type MapMarkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    riskLevel?: boolean
    communityId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    createdBy?: boolean | MapMarker$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["mapMarker"]>

  export type MapMarkerSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    riskLevel?: boolean
    communityId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MapMarkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "latitude" | "longitude" | "description" | "riskLevel" | "communityId" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["mapMarker"]>
  export type MapMarkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    createdBy?: boolean | MapMarker$createdByArgs<ExtArgs>
    missions?: boolean | MapMarker$missionsArgs<ExtArgs>
    _count?: boolean | MapMarkerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MapMarkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    createdBy?: boolean | MapMarker$createdByArgs<ExtArgs>
  }
  export type MapMarkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    createdBy?: boolean | MapMarker$createdByArgs<ExtArgs>
  }

  export type $MapMarkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapMarker"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      missions: Prisma.$MissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.MarkerType
      latitude: number
      longitude: number
      description: string | null
      riskLevel: $Enums.RiskLevel
      communityId: string
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mapMarker"]>
    composites: {}
  }

  type MapMarkerGetPayload<S extends boolean | null | undefined | MapMarkerDefaultArgs> = $Result.GetResult<Prisma.$MapMarkerPayload, S>

  type MapMarkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapMarkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapMarkerCountAggregateInputType | true
    }

  export interface MapMarkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapMarker'], meta: { name: 'MapMarker' } }
    /**
     * Find zero or one MapMarker that matches the filter.
     * @param {MapMarkerFindUniqueArgs} args - Arguments to find a MapMarker
     * @example
     * // Get one MapMarker
     * const mapMarker = await prisma.mapMarker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapMarkerFindUniqueArgs>(args: SelectSubset<T, MapMarkerFindUniqueArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapMarker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapMarkerFindUniqueOrThrowArgs} args - Arguments to find a MapMarker
     * @example
     * // Get one MapMarker
     * const mapMarker = await prisma.mapMarker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapMarkerFindUniqueOrThrowArgs>(args: SelectSubset<T, MapMarkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapMarker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerFindFirstArgs} args - Arguments to find a MapMarker
     * @example
     * // Get one MapMarker
     * const mapMarker = await prisma.mapMarker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapMarkerFindFirstArgs>(args?: SelectSubset<T, MapMarkerFindFirstArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapMarker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerFindFirstOrThrowArgs} args - Arguments to find a MapMarker
     * @example
     * // Get one MapMarker
     * const mapMarker = await prisma.mapMarker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapMarkerFindFirstOrThrowArgs>(args?: SelectSubset<T, MapMarkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapMarkers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapMarkers
     * const mapMarkers = await prisma.mapMarker.findMany()
     * 
     * // Get first 10 MapMarkers
     * const mapMarkers = await prisma.mapMarker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapMarkerWithIdOnly = await prisma.mapMarker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapMarkerFindManyArgs>(args?: SelectSubset<T, MapMarkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapMarker.
     * @param {MapMarkerCreateArgs} args - Arguments to create a MapMarker.
     * @example
     * // Create one MapMarker
     * const MapMarker = await prisma.mapMarker.create({
     *   data: {
     *     // ... data to create a MapMarker
     *   }
     * })
     * 
     */
    create<T extends MapMarkerCreateArgs>(args: SelectSubset<T, MapMarkerCreateArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapMarkers.
     * @param {MapMarkerCreateManyArgs} args - Arguments to create many MapMarkers.
     * @example
     * // Create many MapMarkers
     * const mapMarker = await prisma.mapMarker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapMarkerCreateManyArgs>(args?: SelectSubset<T, MapMarkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapMarkers and returns the data saved in the database.
     * @param {MapMarkerCreateManyAndReturnArgs} args - Arguments to create many MapMarkers.
     * @example
     * // Create many MapMarkers
     * const mapMarker = await prisma.mapMarker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapMarkers and only return the `id`
     * const mapMarkerWithIdOnly = await prisma.mapMarker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapMarkerCreateManyAndReturnArgs>(args?: SelectSubset<T, MapMarkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapMarker.
     * @param {MapMarkerDeleteArgs} args - Arguments to delete one MapMarker.
     * @example
     * // Delete one MapMarker
     * const MapMarker = await prisma.mapMarker.delete({
     *   where: {
     *     // ... filter to delete one MapMarker
     *   }
     * })
     * 
     */
    delete<T extends MapMarkerDeleteArgs>(args: SelectSubset<T, MapMarkerDeleteArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapMarker.
     * @param {MapMarkerUpdateArgs} args - Arguments to update one MapMarker.
     * @example
     * // Update one MapMarker
     * const mapMarker = await prisma.mapMarker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapMarkerUpdateArgs>(args: SelectSubset<T, MapMarkerUpdateArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapMarkers.
     * @param {MapMarkerDeleteManyArgs} args - Arguments to filter MapMarkers to delete.
     * @example
     * // Delete a few MapMarkers
     * const { count } = await prisma.mapMarker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapMarkerDeleteManyArgs>(args?: SelectSubset<T, MapMarkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapMarkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapMarkers
     * const mapMarker = await prisma.mapMarker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapMarkerUpdateManyArgs>(args: SelectSubset<T, MapMarkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapMarkers and returns the data updated in the database.
     * @param {MapMarkerUpdateManyAndReturnArgs} args - Arguments to update many MapMarkers.
     * @example
     * // Update many MapMarkers
     * const mapMarker = await prisma.mapMarker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapMarkers and only return the `id`
     * const mapMarkerWithIdOnly = await prisma.mapMarker.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapMarkerUpdateManyAndReturnArgs>(args: SelectSubset<T, MapMarkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapMarker.
     * @param {MapMarkerUpsertArgs} args - Arguments to update or create a MapMarker.
     * @example
     * // Update or create a MapMarker
     * const mapMarker = await prisma.mapMarker.upsert({
     *   create: {
     *     // ... data to create a MapMarker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapMarker we want to update
     *   }
     * })
     */
    upsert<T extends MapMarkerUpsertArgs>(args: SelectSubset<T, MapMarkerUpsertArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapMarkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerCountArgs} args - Arguments to filter MapMarkers to count.
     * @example
     * // Count the number of MapMarkers
     * const count = await prisma.mapMarker.count({
     *   where: {
     *     // ... the filter for the MapMarkers we want to count
     *   }
     * })
    **/
    count<T extends MapMarkerCountArgs>(
      args?: Subset<T, MapMarkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapMarkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapMarker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapMarkerAggregateArgs>(args: Subset<T, MapMarkerAggregateArgs>): Prisma.PrismaPromise<GetMapMarkerAggregateType<T>>

    /**
     * Group by MapMarker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerGroupByArgs} args - Group by arguments.
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
      T extends MapMarkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapMarkerGroupByArgs['orderBy'] }
        : { orderBy?: MapMarkerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapMarkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapMarkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapMarker model
   */
  readonly fields: MapMarkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapMarker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapMarkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends MapMarker$createdByArgs<ExtArgs> = {}>(args?: Subset<T, MapMarker$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    missions<T extends MapMarker$missionsArgs<ExtArgs> = {}>(args?: Subset<T, MapMarker$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MapMarker model
   */
  interface MapMarkerFieldRefs {
    readonly id: FieldRef<"MapMarker", 'String'>
    readonly name: FieldRef<"MapMarker", 'String'>
    readonly type: FieldRef<"MapMarker", 'MarkerType'>
    readonly latitude: FieldRef<"MapMarker", 'Float'>
    readonly longitude: FieldRef<"MapMarker", 'Float'>
    readonly description: FieldRef<"MapMarker", 'String'>
    readonly riskLevel: FieldRef<"MapMarker", 'RiskLevel'>
    readonly communityId: FieldRef<"MapMarker", 'String'>
    readonly createdById: FieldRef<"MapMarker", 'String'>
    readonly createdAt: FieldRef<"MapMarker", 'DateTime'>
    readonly updatedAt: FieldRef<"MapMarker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MapMarker findUnique
   */
  export type MapMarkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter, which MapMarker to fetch.
     */
    where: MapMarkerWhereUniqueInput
  }

  /**
   * MapMarker findUniqueOrThrow
   */
  export type MapMarkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter, which MapMarker to fetch.
     */
    where: MapMarkerWhereUniqueInput
  }

  /**
   * MapMarker findFirst
   */
  export type MapMarkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter, which MapMarker to fetch.
     */
    where?: MapMarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapMarkers to fetch.
     */
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapMarkers.
     */
    cursor?: MapMarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapMarkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapMarkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapMarkers.
     */
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * MapMarker findFirstOrThrow
   */
  export type MapMarkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter, which MapMarker to fetch.
     */
    where?: MapMarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapMarkers to fetch.
     */
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapMarkers.
     */
    cursor?: MapMarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapMarkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapMarkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapMarkers.
     */
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * MapMarker findMany
   */
  export type MapMarkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter, which MapMarkers to fetch.
     */
    where?: MapMarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapMarkers to fetch.
     */
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapMarkers.
     */
    cursor?: MapMarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapMarkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapMarkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapMarkers.
     */
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * MapMarker create
   */
  export type MapMarkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * The data needed to create a MapMarker.
     */
    data: XOR<MapMarkerCreateInput, MapMarkerUncheckedCreateInput>
  }

  /**
   * MapMarker createMany
   */
  export type MapMarkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapMarkers.
     */
    data: MapMarkerCreateManyInput | MapMarkerCreateManyInput[]
  }

  /**
   * MapMarker createManyAndReturn
   */
  export type MapMarkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * The data used to create many MapMarkers.
     */
    data: MapMarkerCreateManyInput | MapMarkerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapMarker update
   */
  export type MapMarkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * The data needed to update a MapMarker.
     */
    data: XOR<MapMarkerUpdateInput, MapMarkerUncheckedUpdateInput>
    /**
     * Choose, which MapMarker to update.
     */
    where: MapMarkerWhereUniqueInput
  }

  /**
   * MapMarker updateMany
   */
  export type MapMarkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapMarkers.
     */
    data: XOR<MapMarkerUpdateManyMutationInput, MapMarkerUncheckedUpdateManyInput>
    /**
     * Filter which MapMarkers to update
     */
    where?: MapMarkerWhereInput
    /**
     * Limit how many MapMarkers to update.
     */
    limit?: number
  }

  /**
   * MapMarker updateManyAndReturn
   */
  export type MapMarkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * The data used to update MapMarkers.
     */
    data: XOR<MapMarkerUpdateManyMutationInput, MapMarkerUncheckedUpdateManyInput>
    /**
     * Filter which MapMarkers to update
     */
    where?: MapMarkerWhereInput
    /**
     * Limit how many MapMarkers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapMarker upsert
   */
  export type MapMarkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * The filter to search for the MapMarker to update in case it exists.
     */
    where: MapMarkerWhereUniqueInput
    /**
     * In case the MapMarker found by the `where` argument doesn't exist, create a new MapMarker with this data.
     */
    create: XOR<MapMarkerCreateInput, MapMarkerUncheckedCreateInput>
    /**
     * In case the MapMarker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapMarkerUpdateInput, MapMarkerUncheckedUpdateInput>
  }

  /**
   * MapMarker delete
   */
  export type MapMarkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter which MapMarker to delete.
     */
    where: MapMarkerWhereUniqueInput
  }

  /**
   * MapMarker deleteMany
   */
  export type MapMarkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapMarkers to delete
     */
    where?: MapMarkerWhereInput
    /**
     * Limit how many MapMarkers to delete.
     */
    limit?: number
  }

  /**
   * MapMarker.createdBy
   */
  export type MapMarker$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * MapMarker.missions
   */
  export type MapMarker$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * MapMarker without action
   */
  export type MapMarkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionMinAggregateOutputType = {
    id: string | null
    title: string | null
    riskLevel: $Enums.RiskLevel | null
    urgency: $Enums.MissionUrgency | null
    communityId: string | null
    targetMarkerId: string | null
    resourceId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    riskLevel: $Enums.RiskLevel | null
    urgency: $Enums.MissionUrgency | null
    communityId: string | null
    targetMarkerId: string | null
    resourceId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    title: number
    riskLevel: number
    urgency: number
    communityId: number
    targetMarkerId: number
    resourceId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MissionMinAggregateInputType = {
    id?: true
    title?: true
    riskLevel?: true
    urgency?: true
    communityId?: true
    targetMarkerId?: true
    resourceId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    title?: true
    riskLevel?: true
    urgency?: true
    communityId?: true
    targetMarkerId?: true
    resourceId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    title?: true
    riskLevel?: true
    urgency?: true
    communityId?: true
    targetMarkerId?: true
    resourceId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: string
    title: string
    riskLevel: $Enums.RiskLevel
    urgency: $Enums.MissionUrgency
    communityId: string
    targetMarkerId: string | null
    resourceId: string | null
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: MissionCountAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    riskLevel?: boolean
    urgency?: boolean
    communityId?: boolean
    targetMarkerId?: boolean
    resourceId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    targetMarker?: boolean | Mission$targetMarkerArgs<ExtArgs>
    resource?: boolean | Mission$resourceArgs<ExtArgs>
    createdBy?: boolean | Mission$createdByArgs<ExtArgs>
    assignments?: boolean | Mission$assignmentsArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    riskLevel?: boolean
    urgency?: boolean
    communityId?: boolean
    targetMarkerId?: boolean
    resourceId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    targetMarker?: boolean | Mission$targetMarkerArgs<ExtArgs>
    resource?: boolean | Mission$resourceArgs<ExtArgs>
    createdBy?: boolean | Mission$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    riskLevel?: boolean
    urgency?: boolean
    communityId?: boolean
    targetMarkerId?: boolean
    resourceId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    targetMarker?: boolean | Mission$targetMarkerArgs<ExtArgs>
    resource?: boolean | Mission$resourceArgs<ExtArgs>
    createdBy?: boolean | Mission$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectScalar = {
    id?: boolean
    title?: boolean
    riskLevel?: boolean
    urgency?: boolean
    communityId?: boolean
    targetMarkerId?: boolean
    resourceId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "riskLevel" | "urgency" | "communityId" | "targetMarkerId" | "resourceId" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    targetMarker?: boolean | Mission$targetMarkerArgs<ExtArgs>
    resource?: boolean | Mission$resourceArgs<ExtArgs>
    createdBy?: boolean | Mission$createdByArgs<ExtArgs>
    assignments?: boolean | Mission$assignmentsArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    targetMarker?: boolean | Mission$targetMarkerArgs<ExtArgs>
    resource?: boolean | Mission$resourceArgs<ExtArgs>
    createdBy?: boolean | Mission$createdByArgs<ExtArgs>
  }
  export type MissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    targetMarker?: boolean | Mission$targetMarkerArgs<ExtArgs>
    resource?: boolean | Mission$resourceArgs<ExtArgs>
    createdBy?: boolean | Mission$createdByArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      targetMarker: Prisma.$MapMarkerPayload<ExtArgs> | null
      resource: Prisma.$ResourcePayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      assignments: Prisma.$MissionAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      riskLevel: $Enums.RiskLevel
      urgency: $Enums.MissionUrgency
      communityId: string
      targetMarkerId: string | null
      resourceId: string | null
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missions and returns the data saved in the database.
     * @param {MissionCreateManyAndReturnArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Missions and only return the `id`
     * const missionWithIdOnly = await prisma.mission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions and returns the data updated in the database.
     * @param {MissionUpdateManyAndReturnArgs} args - Arguments to update many Missions.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Missions and only return the `id`
     * const missionWithIdOnly = await prisma.mission.updateManyAndReturn({
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
    updateManyAndReturn<T extends MissionUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
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
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetMarker<T extends Mission$targetMarkerArgs<ExtArgs> = {}>(args?: Subset<T, Mission$targetMarkerArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    resource<T extends Mission$resourceArgs<ExtArgs> = {}>(args?: Subset<T, Mission$resourceArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Mission$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Mission$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Mission$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Mission$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'String'>
    readonly title: FieldRef<"Mission", 'String'>
    readonly riskLevel: FieldRef<"Mission", 'RiskLevel'>
    readonly urgency: FieldRef<"Mission", 'MissionUrgency'>
    readonly communityId: FieldRef<"Mission", 'String'>
    readonly targetMarkerId: FieldRef<"Mission", 'String'>
    readonly resourceId: FieldRef<"Mission", 'String'>
    readonly createdById: FieldRef<"Mission", 'String'>
    readonly createdAt: FieldRef<"Mission", 'DateTime'>
    readonly updatedAt: FieldRef<"Mission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
  }

  /**
   * Mission createManyAndReturn
   */
  export type MissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission updateManyAndReturn
   */
  export type MissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission.targetMarker
   */
  export type Mission$targetMarkerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    where?: MapMarkerWhereInput
  }

  /**
   * Mission.resource
   */
  export type Mission$resourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
  }

  /**
   * Mission.createdBy
   */
  export type Mission$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Mission.assignments
   */
  export type Mission$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    where?: MissionAssignmentWhereInput
    orderBy?: MissionAssignmentOrderByWithRelationInput | MissionAssignmentOrderByWithRelationInput[]
    cursor?: MissionAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionAssignmentScalarFieldEnum | MissionAssignmentScalarFieldEnum[]
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model MissionAssignment
   */

  export type AggregateMissionAssignment = {
    _count: MissionAssignmentCountAggregateOutputType | null
    _min: MissionAssignmentMinAggregateOutputType | null
    _max: MissionAssignmentMaxAggregateOutputType | null
  }

  export type MissionAssignmentMinAggregateOutputType = {
    id: string | null
    missionId: string | null
    communityMemberId: string | null
    userId: string | null
    assignedAt: Date | null
  }

  export type MissionAssignmentMaxAggregateOutputType = {
    id: string | null
    missionId: string | null
    communityMemberId: string | null
    userId: string | null
    assignedAt: Date | null
  }

  export type MissionAssignmentCountAggregateOutputType = {
    id: number
    missionId: number
    communityMemberId: number
    userId: number
    assignedAt: number
    _all: number
  }


  export type MissionAssignmentMinAggregateInputType = {
    id?: true
    missionId?: true
    communityMemberId?: true
    userId?: true
    assignedAt?: true
  }

  export type MissionAssignmentMaxAggregateInputType = {
    id?: true
    missionId?: true
    communityMemberId?: true
    userId?: true
    assignedAt?: true
  }

  export type MissionAssignmentCountAggregateInputType = {
    id?: true
    missionId?: true
    communityMemberId?: true
    userId?: true
    assignedAt?: true
    _all?: true
  }

  export type MissionAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionAssignment to aggregate.
     */
    where?: MissionAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionAssignments to fetch.
     */
    orderBy?: MissionAssignmentOrderByWithRelationInput | MissionAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionAssignments
    **/
    _count?: true | MissionAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionAssignmentMaxAggregateInputType
  }

  export type GetMissionAssignmentAggregateType<T extends MissionAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionAssignment[P]>
      : GetScalarType<T[P], AggregateMissionAssignment[P]>
  }




  export type MissionAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionAssignmentWhereInput
    orderBy?: MissionAssignmentOrderByWithAggregationInput | MissionAssignmentOrderByWithAggregationInput[]
    by: MissionAssignmentScalarFieldEnum[] | MissionAssignmentScalarFieldEnum
    having?: MissionAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionAssignmentCountAggregateInputType | true
    _min?: MissionAssignmentMinAggregateInputType
    _max?: MissionAssignmentMaxAggregateInputType
  }

  export type MissionAssignmentGroupByOutputType = {
    id: string
    missionId: string
    communityMemberId: string
    userId: string
    assignedAt: Date
    _count: MissionAssignmentCountAggregateOutputType | null
    _min: MissionAssignmentMinAggregateOutputType | null
    _max: MissionAssignmentMaxAggregateOutputType | null
  }

  type GetMissionAssignmentGroupByPayload<T extends MissionAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], MissionAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type MissionAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    communityMemberId?: boolean
    userId?: boolean
    assignedAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    communityMember?: boolean | CommunityMemberDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionAssignment"]>

  export type MissionAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    communityMemberId?: boolean
    userId?: boolean
    assignedAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    communityMember?: boolean | CommunityMemberDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionAssignment"]>

  export type MissionAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    communityMemberId?: boolean
    userId?: boolean
    assignedAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    communityMember?: boolean | CommunityMemberDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionAssignment"]>

  export type MissionAssignmentSelectScalar = {
    id?: boolean
    missionId?: boolean
    communityMemberId?: boolean
    userId?: boolean
    assignedAt?: boolean
  }

  export type MissionAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "communityMemberId" | "userId" | "assignedAt", ExtArgs["result"]["missionAssignment"]>
  export type MissionAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    communityMember?: boolean | CommunityMemberDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MissionAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    communityMember?: boolean | CommunityMemberDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MissionAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    communityMember?: boolean | CommunityMemberDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MissionAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionAssignment"
    objects: {
      mission: Prisma.$MissionPayload<ExtArgs>
      communityMember: Prisma.$CommunityMemberPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      missionId: string
      communityMemberId: string
      userId: string
      assignedAt: Date
    }, ExtArgs["result"]["missionAssignment"]>
    composites: {}
  }

  type MissionAssignmentGetPayload<S extends boolean | null | undefined | MissionAssignmentDefaultArgs> = $Result.GetResult<Prisma.$MissionAssignmentPayload, S>

  type MissionAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionAssignmentCountAggregateInputType | true
    }

  export interface MissionAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionAssignment'], meta: { name: 'MissionAssignment' } }
    /**
     * Find zero or one MissionAssignment that matches the filter.
     * @param {MissionAssignmentFindUniqueArgs} args - Arguments to find a MissionAssignment
     * @example
     * // Get one MissionAssignment
     * const missionAssignment = await prisma.missionAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionAssignmentFindUniqueArgs>(args: SelectSubset<T, MissionAssignmentFindUniqueArgs<ExtArgs>>): Prisma__MissionAssignmentClient<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionAssignmentFindUniqueOrThrowArgs} args - Arguments to find a MissionAssignment
     * @example
     * // Get one MissionAssignment
     * const missionAssignment = await prisma.missionAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionAssignmentClient<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAssignmentFindFirstArgs} args - Arguments to find a MissionAssignment
     * @example
     * // Get one MissionAssignment
     * const missionAssignment = await prisma.missionAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionAssignmentFindFirstArgs>(args?: SelectSubset<T, MissionAssignmentFindFirstArgs<ExtArgs>>): Prisma__MissionAssignmentClient<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAssignmentFindFirstOrThrowArgs} args - Arguments to find a MissionAssignment
     * @example
     * // Get one MissionAssignment
     * const missionAssignment = await prisma.missionAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionAssignmentClient<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionAssignments
     * const missionAssignments = await prisma.missionAssignment.findMany()
     * 
     * // Get first 10 MissionAssignments
     * const missionAssignments = await prisma.missionAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionAssignmentWithIdOnly = await prisma.missionAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionAssignmentFindManyArgs>(args?: SelectSubset<T, MissionAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionAssignment.
     * @param {MissionAssignmentCreateArgs} args - Arguments to create a MissionAssignment.
     * @example
     * // Create one MissionAssignment
     * const MissionAssignment = await prisma.missionAssignment.create({
     *   data: {
     *     // ... data to create a MissionAssignment
     *   }
     * })
     * 
     */
    create<T extends MissionAssignmentCreateArgs>(args: SelectSubset<T, MissionAssignmentCreateArgs<ExtArgs>>): Prisma__MissionAssignmentClient<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionAssignments.
     * @param {MissionAssignmentCreateManyArgs} args - Arguments to create many MissionAssignments.
     * @example
     * // Create many MissionAssignments
     * const missionAssignment = await prisma.missionAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionAssignmentCreateManyArgs>(args?: SelectSubset<T, MissionAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MissionAssignments and returns the data saved in the database.
     * @param {MissionAssignmentCreateManyAndReturnArgs} args - Arguments to create many MissionAssignments.
     * @example
     * // Create many MissionAssignments
     * const missionAssignment = await prisma.missionAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MissionAssignments and only return the `id`
     * const missionAssignmentWithIdOnly = await prisma.missionAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MissionAssignment.
     * @param {MissionAssignmentDeleteArgs} args - Arguments to delete one MissionAssignment.
     * @example
     * // Delete one MissionAssignment
     * const MissionAssignment = await prisma.missionAssignment.delete({
     *   where: {
     *     // ... filter to delete one MissionAssignment
     *   }
     * })
     * 
     */
    delete<T extends MissionAssignmentDeleteArgs>(args: SelectSubset<T, MissionAssignmentDeleteArgs<ExtArgs>>): Prisma__MissionAssignmentClient<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionAssignment.
     * @param {MissionAssignmentUpdateArgs} args - Arguments to update one MissionAssignment.
     * @example
     * // Update one MissionAssignment
     * const missionAssignment = await prisma.missionAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionAssignmentUpdateArgs>(args: SelectSubset<T, MissionAssignmentUpdateArgs<ExtArgs>>): Prisma__MissionAssignmentClient<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionAssignments.
     * @param {MissionAssignmentDeleteManyArgs} args - Arguments to filter MissionAssignments to delete.
     * @example
     * // Delete a few MissionAssignments
     * const { count } = await prisma.missionAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionAssignmentDeleteManyArgs>(args?: SelectSubset<T, MissionAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionAssignments
     * const missionAssignment = await prisma.missionAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionAssignmentUpdateManyArgs>(args: SelectSubset<T, MissionAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionAssignments and returns the data updated in the database.
     * @param {MissionAssignmentUpdateManyAndReturnArgs} args - Arguments to update many MissionAssignments.
     * @example
     * // Update many MissionAssignments
     * const missionAssignment = await prisma.missionAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MissionAssignments and only return the `id`
     * const missionAssignmentWithIdOnly = await prisma.missionAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends MissionAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MissionAssignment.
     * @param {MissionAssignmentUpsertArgs} args - Arguments to update or create a MissionAssignment.
     * @example
     * // Update or create a MissionAssignment
     * const missionAssignment = await prisma.missionAssignment.upsert({
     *   create: {
     *     // ... data to create a MissionAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionAssignment we want to update
     *   }
     * })
     */
    upsert<T extends MissionAssignmentUpsertArgs>(args: SelectSubset<T, MissionAssignmentUpsertArgs<ExtArgs>>): Prisma__MissionAssignmentClient<$Result.GetResult<Prisma.$MissionAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAssignmentCountArgs} args - Arguments to filter MissionAssignments to count.
     * @example
     * // Count the number of MissionAssignments
     * const count = await prisma.missionAssignment.count({
     *   where: {
     *     // ... the filter for the MissionAssignments we want to count
     *   }
     * })
    **/
    count<T extends MissionAssignmentCountArgs>(
      args?: Subset<T, MissionAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionAssignmentAggregateArgs>(args: Subset<T, MissionAssignmentAggregateArgs>): Prisma.PrismaPromise<GetMissionAssignmentAggregateType<T>>

    /**
     * Group by MissionAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAssignmentGroupByArgs} args - Group by arguments.
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
      T extends MissionAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: MissionAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissionAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionAssignment model
   */
  readonly fields: MissionAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    communityMember<T extends CommunityMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityMemberDefaultArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MissionAssignment model
   */
  interface MissionAssignmentFieldRefs {
    readonly id: FieldRef<"MissionAssignment", 'String'>
    readonly missionId: FieldRef<"MissionAssignment", 'String'>
    readonly communityMemberId: FieldRef<"MissionAssignment", 'String'>
    readonly userId: FieldRef<"MissionAssignment", 'String'>
    readonly assignedAt: FieldRef<"MissionAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MissionAssignment findUnique
   */
  export type MissionAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MissionAssignment to fetch.
     */
    where: MissionAssignmentWhereUniqueInput
  }

  /**
   * MissionAssignment findUniqueOrThrow
   */
  export type MissionAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MissionAssignment to fetch.
     */
    where: MissionAssignmentWhereUniqueInput
  }

  /**
   * MissionAssignment findFirst
   */
  export type MissionAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MissionAssignment to fetch.
     */
    where?: MissionAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionAssignments to fetch.
     */
    orderBy?: MissionAssignmentOrderByWithRelationInput | MissionAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionAssignments.
     */
    cursor?: MissionAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionAssignments.
     */
    distinct?: MissionAssignmentScalarFieldEnum | MissionAssignmentScalarFieldEnum[]
  }

  /**
   * MissionAssignment findFirstOrThrow
   */
  export type MissionAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MissionAssignment to fetch.
     */
    where?: MissionAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionAssignments to fetch.
     */
    orderBy?: MissionAssignmentOrderByWithRelationInput | MissionAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionAssignments.
     */
    cursor?: MissionAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionAssignments.
     */
    distinct?: MissionAssignmentScalarFieldEnum | MissionAssignmentScalarFieldEnum[]
  }

  /**
   * MissionAssignment findMany
   */
  export type MissionAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MissionAssignments to fetch.
     */
    where?: MissionAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionAssignments to fetch.
     */
    orderBy?: MissionAssignmentOrderByWithRelationInput | MissionAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionAssignments.
     */
    cursor?: MissionAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionAssignments.
     */
    distinct?: MissionAssignmentScalarFieldEnum | MissionAssignmentScalarFieldEnum[]
  }

  /**
   * MissionAssignment create
   */
  export type MissionAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionAssignment.
     */
    data: XOR<MissionAssignmentCreateInput, MissionAssignmentUncheckedCreateInput>
  }

  /**
   * MissionAssignment createMany
   */
  export type MissionAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionAssignments.
     */
    data: MissionAssignmentCreateManyInput | MissionAssignmentCreateManyInput[]
  }

  /**
   * MissionAssignment createManyAndReturn
   */
  export type MissionAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many MissionAssignments.
     */
    data: MissionAssignmentCreateManyInput | MissionAssignmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionAssignment update
   */
  export type MissionAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionAssignment.
     */
    data: XOR<MissionAssignmentUpdateInput, MissionAssignmentUncheckedUpdateInput>
    /**
     * Choose, which MissionAssignment to update.
     */
    where: MissionAssignmentWhereUniqueInput
  }

  /**
   * MissionAssignment updateMany
   */
  export type MissionAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionAssignments.
     */
    data: XOR<MissionAssignmentUpdateManyMutationInput, MissionAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which MissionAssignments to update
     */
    where?: MissionAssignmentWhereInput
    /**
     * Limit how many MissionAssignments to update.
     */
    limit?: number
  }

  /**
   * MissionAssignment updateManyAndReturn
   */
  export type MissionAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update MissionAssignments.
     */
    data: XOR<MissionAssignmentUpdateManyMutationInput, MissionAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which MissionAssignments to update
     */
    where?: MissionAssignmentWhereInput
    /**
     * Limit how many MissionAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MissionAssignment upsert
   */
  export type MissionAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionAssignment to update in case it exists.
     */
    where: MissionAssignmentWhereUniqueInput
    /**
     * In case the MissionAssignment found by the `where` argument doesn't exist, create a new MissionAssignment with this data.
     */
    create: XOR<MissionAssignmentCreateInput, MissionAssignmentUncheckedCreateInput>
    /**
     * In case the MissionAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionAssignmentUpdateInput, MissionAssignmentUncheckedUpdateInput>
  }

  /**
   * MissionAssignment delete
   */
  export type MissionAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
    /**
     * Filter which MissionAssignment to delete.
     */
    where: MissionAssignmentWhereUniqueInput
  }

  /**
   * MissionAssignment deleteMany
   */
  export type MissionAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionAssignments to delete
     */
    where?: MissionAssignmentWhereInput
    /**
     * Limit how many MissionAssignments to delete.
     */
    limit?: number
  }

  /**
   * MissionAssignment without action
   */
  export type MissionAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionAssignment
     */
    select?: MissionAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionAssignment
     */
    omit?: MissionAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionAssignmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    telephone: 'telephone',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const CommunityMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    communityId: 'communityId',
    role: 'role',
    joinedAt: 'joinedAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityMemberScalarFieldEnum = (typeof CommunityMemberScalarFieldEnum)[keyof typeof CommunityMemberScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    amount: 'amount',
    unit: 'unit',
    communityId: 'communityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const MapZoneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    riskLevel: 'riskLevel',
    description: 'description',
    geoJson: 'geoJson',
    communityId: 'communityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MapZoneScalarFieldEnum = (typeof MapZoneScalarFieldEnum)[keyof typeof MapZoneScalarFieldEnum]


  export const MapMarkerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    latitude: 'latitude',
    longitude: 'longitude',
    description: 'description',
    riskLevel: 'riskLevel',
    communityId: 'communityId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MapMarkerScalarFieldEnum = (typeof MapMarkerScalarFieldEnum)[keyof typeof MapMarkerScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    riskLevel: 'riskLevel',
    urgency: 'urgency',
    communityId: 'communityId',
    targetMarkerId: 'targetMarkerId',
    resourceId: 'resourceId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const MissionAssignmentScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    communityMemberId: 'communityMemberId',
    userId: 'userId',
    assignedAt: 'assignedAt'
  };

  export type MissionAssignmentScalarFieldEnum = (typeof MissionAssignmentScalarFieldEnum)[keyof typeof MissionAssignmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ResourceType'
   */
  export type EnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'ZoneType'
   */
  export type EnumZoneTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ZoneType'>
    


  /**
   * Reference to a field of type 'RiskLevel'
   */
  export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>
    


  /**
   * Reference to a field of type 'MarkerType'
   */
  export type EnumMarkerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarkerType'>
    


  /**
   * Reference to a field of type 'MissionUrgency'
   */
  export type EnumMissionUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionUrgency'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    telephone?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberships?: CommunityMemberListRelationFilter
    assignments?: MissionAssignmentListRelationFilter
    createdMarkers?: MapMarkerListRelationFilter
    createdMissions?: MissionListRelationFilter
    createdCommunities?: CommunityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberships?: CommunityMemberOrderByRelationAggregateInput
    assignments?: MissionAssignmentOrderByRelationAggregateInput
    createdMarkers?: MapMarkerOrderByRelationAggregateInput
    createdMissions?: MissionOrderByRelationAggregateInput
    createdCommunities?: CommunityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telephone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberships?: CommunityMemberListRelationFilter
    assignments?: MissionAssignmentListRelationFilter
    createdMarkers?: MapMarkerListRelationFilter
    createdMissions?: MissionListRelationFilter
    createdCommunities?: CommunityListRelationFilter
  }, "id" | "telephone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    telephone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: StringFilter<"Community"> | string
    name?: StringFilter<"Community"> | string
    createdById?: StringNullableFilter<"Community"> | string | null
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: CommunityMemberListRelationFilter
    resources?: ResourceListRelationFilter
    markers?: MapMarkerListRelationFilter
    zones?: MapZoneListRelationFilter
    missions?: MissionListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    members?: CommunityMemberOrderByRelationAggregateInput
    resources?: ResourceOrderByRelationAggregateInput
    markers?: MapMarkerOrderByRelationAggregateInput
    zones?: MapZoneOrderByRelationAggregateInput
    missions?: MissionOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    name?: StringFilter<"Community"> | string
    createdById?: StringNullableFilter<"Community"> | string | null
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: CommunityMemberListRelationFilter
    resources?: ResourceListRelationFilter
    markers?: MapMarkerListRelationFilter
    zones?: MapZoneListRelationFilter
    missions?: MissionListRelationFilter
  }, "id">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Community"> | string
    name?: StringWithAggregatesFilter<"Community"> | string
    createdById?: StringNullableWithAggregatesFilter<"Community"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
  }

  export type CommunityMemberWhereInput = {
    AND?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    OR?: CommunityMemberWhereInput[]
    NOT?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    id?: StringFilter<"CommunityMember"> | string
    userId?: StringFilter<"CommunityMember"> | string
    communityId?: StringFilter<"CommunityMember"> | string
    role?: EnumUserRoleFilter<"CommunityMember"> | $Enums.UserRole
    joinedAt?: DateTimeFilter<"CommunityMember"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    missionAssignments?: MissionAssignmentListRelationFilter
  }

  export type CommunityMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    community?: CommunityOrderByWithRelationInput
    missionAssignments?: MissionAssignmentOrderByRelationAggregateInput
  }

  export type CommunityMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_communityId?: CommunityMemberUserIdCommunityIdCompoundUniqueInput
    AND?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    OR?: CommunityMemberWhereInput[]
    NOT?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    userId?: StringFilter<"CommunityMember"> | string
    communityId?: StringFilter<"CommunityMember"> | string
    role?: EnumUserRoleFilter<"CommunityMember"> | $Enums.UserRole
    joinedAt?: DateTimeFilter<"CommunityMember"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    missionAssignments?: MissionAssignmentListRelationFilter
  }, "id" | "userId_communityId">

  export type CommunityMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityMemberCountOrderByAggregateInput
    _max?: CommunityMemberMaxOrderByAggregateInput
    _min?: CommunityMemberMinOrderByAggregateInput
  }

  export type CommunityMemberScalarWhereWithAggregatesInput = {
    AND?: CommunityMemberScalarWhereWithAggregatesInput | CommunityMemberScalarWhereWithAggregatesInput[]
    OR?: CommunityMemberScalarWhereWithAggregatesInput[]
    NOT?: CommunityMemberScalarWhereWithAggregatesInput | CommunityMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunityMember"> | string
    userId?: StringWithAggregatesFilter<"CommunityMember"> | string
    communityId?: StringWithAggregatesFilter<"CommunityMember"> | string
    role?: EnumUserRoleWithAggregatesFilter<"CommunityMember"> | $Enums.UserRole
    joinedAt?: DateTimeWithAggregatesFilter<"CommunityMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommunityMember"> | Date | string
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: StringFilter<"Resource"> | string
    name?: StringFilter<"Resource"> | string
    type?: EnumResourceTypeFilter<"Resource"> | $Enums.ResourceType
    amount?: FloatFilter<"Resource"> | number
    unit?: StringFilter<"Resource"> | string
    communityId?: StringFilter<"Resource"> | string
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    updatedAt?: DateTimeFilter<"Resource"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    relatedMissions?: MissionListRelationFilter
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    unit?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
    relatedMissions?: MissionOrderByRelationAggregateInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    name?: StringFilter<"Resource"> | string
    type?: EnumResourceTypeFilter<"Resource"> | $Enums.ResourceType
    amount?: FloatFilter<"Resource"> | number
    unit?: StringFilter<"Resource"> | string
    communityId?: StringFilter<"Resource"> | string
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    updatedAt?: DateTimeFilter<"Resource"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    relatedMissions?: MissionListRelationFilter
  }, "id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    unit?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _avg?: ResourceAvgOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
    _sum?: ResourceSumOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resource"> | string
    name?: StringWithAggregatesFilter<"Resource"> | string
    type?: EnumResourceTypeWithAggregatesFilter<"Resource"> | $Enums.ResourceType
    amount?: FloatWithAggregatesFilter<"Resource"> | number
    unit?: StringWithAggregatesFilter<"Resource"> | string
    communityId?: StringWithAggregatesFilter<"Resource"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
  }

  export type MapZoneWhereInput = {
    AND?: MapZoneWhereInput | MapZoneWhereInput[]
    OR?: MapZoneWhereInput[]
    NOT?: MapZoneWhereInput | MapZoneWhereInput[]
    id?: StringFilter<"MapZone"> | string
    name?: StringFilter<"MapZone"> | string
    type?: EnumZoneTypeFilter<"MapZone"> | $Enums.ZoneType
    riskLevel?: EnumRiskLevelFilter<"MapZone"> | $Enums.RiskLevel
    description?: StringNullableFilter<"MapZone"> | string | null
    geoJson?: StringNullableFilter<"MapZone"> | string | null
    communityId?: StringFilter<"MapZone"> | string
    createdAt?: DateTimeFilter<"MapZone"> | Date | string
    updatedAt?: DateTimeFilter<"MapZone"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
  }

  export type MapZoneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    riskLevel?: SortOrder
    description?: SortOrderInput | SortOrder
    geoJson?: SortOrderInput | SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
  }

  export type MapZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapZoneWhereInput | MapZoneWhereInput[]
    OR?: MapZoneWhereInput[]
    NOT?: MapZoneWhereInput | MapZoneWhereInput[]
    name?: StringFilter<"MapZone"> | string
    type?: EnumZoneTypeFilter<"MapZone"> | $Enums.ZoneType
    riskLevel?: EnumRiskLevelFilter<"MapZone"> | $Enums.RiskLevel
    description?: StringNullableFilter<"MapZone"> | string | null
    geoJson?: StringNullableFilter<"MapZone"> | string | null
    communityId?: StringFilter<"MapZone"> | string
    createdAt?: DateTimeFilter<"MapZone"> | Date | string
    updatedAt?: DateTimeFilter<"MapZone"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
  }, "id">

  export type MapZoneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    riskLevel?: SortOrder
    description?: SortOrderInput | SortOrder
    geoJson?: SortOrderInput | SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MapZoneCountOrderByAggregateInput
    _max?: MapZoneMaxOrderByAggregateInput
    _min?: MapZoneMinOrderByAggregateInput
  }

  export type MapZoneScalarWhereWithAggregatesInput = {
    AND?: MapZoneScalarWhereWithAggregatesInput | MapZoneScalarWhereWithAggregatesInput[]
    OR?: MapZoneScalarWhereWithAggregatesInput[]
    NOT?: MapZoneScalarWhereWithAggregatesInput | MapZoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapZone"> | string
    name?: StringWithAggregatesFilter<"MapZone"> | string
    type?: EnumZoneTypeWithAggregatesFilter<"MapZone"> | $Enums.ZoneType
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"MapZone"> | $Enums.RiskLevel
    description?: StringNullableWithAggregatesFilter<"MapZone"> | string | null
    geoJson?: StringNullableWithAggregatesFilter<"MapZone"> | string | null
    communityId?: StringWithAggregatesFilter<"MapZone"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MapZone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MapZone"> | Date | string
  }

  export type MapMarkerWhereInput = {
    AND?: MapMarkerWhereInput | MapMarkerWhereInput[]
    OR?: MapMarkerWhereInput[]
    NOT?: MapMarkerWhereInput | MapMarkerWhereInput[]
    id?: StringFilter<"MapMarker"> | string
    name?: StringFilter<"MapMarker"> | string
    type?: EnumMarkerTypeFilter<"MapMarker"> | $Enums.MarkerType
    latitude?: FloatFilter<"MapMarker"> | number
    longitude?: FloatFilter<"MapMarker"> | number
    description?: StringNullableFilter<"MapMarker"> | string | null
    riskLevel?: EnumRiskLevelFilter<"MapMarker"> | $Enums.RiskLevel
    communityId?: StringFilter<"MapMarker"> | string
    createdById?: StringNullableFilter<"MapMarker"> | string | null
    createdAt?: DateTimeFilter<"MapMarker"> | Date | string
    updatedAt?: DateTimeFilter<"MapMarker"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    missions?: MissionListRelationFilter
  }

  export type MapMarkerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrderInput | SortOrder
    riskLevel?: SortOrder
    communityId?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    missions?: MissionOrderByRelationAggregateInput
  }

  export type MapMarkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapMarkerWhereInput | MapMarkerWhereInput[]
    OR?: MapMarkerWhereInput[]
    NOT?: MapMarkerWhereInput | MapMarkerWhereInput[]
    name?: StringFilter<"MapMarker"> | string
    type?: EnumMarkerTypeFilter<"MapMarker"> | $Enums.MarkerType
    latitude?: FloatFilter<"MapMarker"> | number
    longitude?: FloatFilter<"MapMarker"> | number
    description?: StringNullableFilter<"MapMarker"> | string | null
    riskLevel?: EnumRiskLevelFilter<"MapMarker"> | $Enums.RiskLevel
    communityId?: StringFilter<"MapMarker"> | string
    createdById?: StringNullableFilter<"MapMarker"> | string | null
    createdAt?: DateTimeFilter<"MapMarker"> | Date | string
    updatedAt?: DateTimeFilter<"MapMarker"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    missions?: MissionListRelationFilter
  }, "id">

  export type MapMarkerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrderInput | SortOrder
    riskLevel?: SortOrder
    communityId?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MapMarkerCountOrderByAggregateInput
    _avg?: MapMarkerAvgOrderByAggregateInput
    _max?: MapMarkerMaxOrderByAggregateInput
    _min?: MapMarkerMinOrderByAggregateInput
    _sum?: MapMarkerSumOrderByAggregateInput
  }

  export type MapMarkerScalarWhereWithAggregatesInput = {
    AND?: MapMarkerScalarWhereWithAggregatesInput | MapMarkerScalarWhereWithAggregatesInput[]
    OR?: MapMarkerScalarWhereWithAggregatesInput[]
    NOT?: MapMarkerScalarWhereWithAggregatesInput | MapMarkerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapMarker"> | string
    name?: StringWithAggregatesFilter<"MapMarker"> | string
    type?: EnumMarkerTypeWithAggregatesFilter<"MapMarker"> | $Enums.MarkerType
    latitude?: FloatWithAggregatesFilter<"MapMarker"> | number
    longitude?: FloatWithAggregatesFilter<"MapMarker"> | number
    description?: StringNullableWithAggregatesFilter<"MapMarker"> | string | null
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"MapMarker"> | $Enums.RiskLevel
    communityId?: StringWithAggregatesFilter<"MapMarker"> | string
    createdById?: StringNullableWithAggregatesFilter<"MapMarker"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MapMarker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MapMarker"> | Date | string
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: StringFilter<"Mission"> | string
    title?: StringFilter<"Mission"> | string
    riskLevel?: EnumRiskLevelFilter<"Mission"> | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFilter<"Mission"> | $Enums.MissionUrgency
    communityId?: StringFilter<"Mission"> | string
    targetMarkerId?: StringNullableFilter<"Mission"> | string | null
    resourceId?: StringNullableFilter<"Mission"> | string | null
    createdById?: StringNullableFilter<"Mission"> | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    targetMarker?: XOR<MapMarkerNullableScalarRelationFilter, MapMarkerWhereInput> | null
    resource?: XOR<ResourceNullableScalarRelationFilter, ResourceWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignments?: MissionAssignmentListRelationFilter
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    riskLevel?: SortOrder
    urgency?: SortOrder
    communityId?: SortOrder
    targetMarkerId?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
    targetMarker?: MapMarkerOrderByWithRelationInput
    resource?: ResourceOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    assignments?: MissionAssignmentOrderByRelationAggregateInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    title?: StringFilter<"Mission"> | string
    riskLevel?: EnumRiskLevelFilter<"Mission"> | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFilter<"Mission"> | $Enums.MissionUrgency
    communityId?: StringFilter<"Mission"> | string
    targetMarkerId?: StringNullableFilter<"Mission"> | string | null
    resourceId?: StringNullableFilter<"Mission"> | string | null
    createdById?: StringNullableFilter<"Mission"> | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    targetMarker?: XOR<MapMarkerNullableScalarRelationFilter, MapMarkerWhereInput> | null
    resource?: XOR<ResourceNullableScalarRelationFilter, ResourceWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignments?: MissionAssignmentListRelationFilter
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    riskLevel?: SortOrder
    urgency?: SortOrder
    communityId?: SortOrder
    targetMarkerId?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mission"> | string
    title?: StringWithAggregatesFilter<"Mission"> | string
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"Mission"> | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyWithAggregatesFilter<"Mission"> | $Enums.MissionUrgency
    communityId?: StringWithAggregatesFilter<"Mission"> | string
    targetMarkerId?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    resourceId?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
  }

  export type MissionAssignmentWhereInput = {
    AND?: MissionAssignmentWhereInput | MissionAssignmentWhereInput[]
    OR?: MissionAssignmentWhereInput[]
    NOT?: MissionAssignmentWhereInput | MissionAssignmentWhereInput[]
    id?: StringFilter<"MissionAssignment"> | string
    missionId?: StringFilter<"MissionAssignment"> | string
    communityMemberId?: StringFilter<"MissionAssignment"> | string
    userId?: StringFilter<"MissionAssignment"> | string
    assignedAt?: DateTimeFilter<"MissionAssignment"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
    communityMember?: XOR<CommunityMemberScalarRelationFilter, CommunityMemberWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MissionAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    communityMemberId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    mission?: MissionOrderByWithRelationInput
    communityMember?: CommunityMemberOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MissionAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    missionId_userId?: MissionAssignmentMissionIdUserIdCompoundUniqueInput
    AND?: MissionAssignmentWhereInput | MissionAssignmentWhereInput[]
    OR?: MissionAssignmentWhereInput[]
    NOT?: MissionAssignmentWhereInput | MissionAssignmentWhereInput[]
    missionId?: StringFilter<"MissionAssignment"> | string
    communityMemberId?: StringFilter<"MissionAssignment"> | string
    userId?: StringFilter<"MissionAssignment"> | string
    assignedAt?: DateTimeFilter<"MissionAssignment"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
    communityMember?: XOR<CommunityMemberScalarRelationFilter, CommunityMemberWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "missionId_userId">

  export type MissionAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    communityMemberId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    _count?: MissionAssignmentCountOrderByAggregateInput
    _max?: MissionAssignmentMaxOrderByAggregateInput
    _min?: MissionAssignmentMinOrderByAggregateInput
  }

  export type MissionAssignmentScalarWhereWithAggregatesInput = {
    AND?: MissionAssignmentScalarWhereWithAggregatesInput | MissionAssignmentScalarWhereWithAggregatesInput[]
    OR?: MissionAssignmentScalarWhereWithAggregatesInput[]
    NOT?: MissionAssignmentScalarWhereWithAggregatesInput | MissionAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MissionAssignment"> | string
    missionId?: StringWithAggregatesFilter<"MissionAssignment"> | string
    communityMemberId?: StringWithAggregatesFilter<"MissionAssignment"> | string
    userId?: StringWithAggregatesFilter<"MissionAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"MissionAssignment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CommunityMemberCreateNestedManyWithoutUserInput
    assignments?: MissionAssignmentCreateNestedManyWithoutUserInput
    createdMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    createdMissions?: MissionCreateNestedManyWithoutCreatedByInput
    createdCommunities?: CommunityCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CommunityMemberUncheckedCreateNestedManyWithoutUserInput
    assignments?: MissionAssignmentUncheckedCreateNestedManyWithoutUserInput
    createdMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    createdMissions?: MissionUncheckedCreateNestedManyWithoutCreatedByInput
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CommunityMemberUpdateManyWithoutUserNestedInput
    assignments?: MissionAssignmentUpdateManyWithoutUserNestedInput
    createdMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    createdMissions?: MissionUpdateManyWithoutCreatedByNestedInput
    createdCommunities?: CommunityUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CommunityMemberUncheckedUpdateManyWithoutUserNestedInput
    assignments?: MissionAssignmentUncheckedUpdateManyWithoutUserNestedInput
    createdMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMissions?: MissionUncheckedUpdateManyWithoutCreatedByNestedInput
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedCommunitiesInput
    members?: CommunityMemberCreateNestedManyWithoutCommunityInput
    resources?: ResourceCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerCreateNestedManyWithoutCommunityInput
    zones?: MapZoneCreateNestedManyWithoutCommunityInput
    missions?: MissionCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: string
    name: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerUncheckedCreateNestedManyWithoutCommunityInput
    zones?: MapZoneUncheckedCreateNestedManyWithoutCommunityInput
    missions?: MissionUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedCommunitiesNestedInput
    members?: CommunityMemberUpdateManyWithoutCommunityNestedInput
    resources?: ResourceUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUpdateManyWithoutCommunityNestedInput
    missions?: MissionUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUncheckedUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUncheckedUpdateManyWithoutCommunityNestedInput
    missions?: MissionUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: string
    name: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberCreateInput = {
    id?: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    community: CommunityCreateNestedOneWithoutMembersInput
    missionAssignments?: MissionAssignmentCreateNestedManyWithoutCommunityMemberInput
  }

  export type CommunityMemberUncheckedCreateInput = {
    id?: string
    userId: string
    communityId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
    missionAssignments?: MissionAssignmentUncheckedCreateNestedManyWithoutCommunityMemberInput
  }

  export type CommunityMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    community?: CommunityUpdateOneRequiredWithoutMembersNestedInput
    missionAssignments?: MissionAssignmentUpdateManyWithoutCommunityMemberNestedInput
  }

  export type CommunityMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missionAssignments?: MissionAssignmentUncheckedUpdateManyWithoutCommunityMemberNestedInput
  }

  export type CommunityMemberCreateManyInput = {
    id?: string
    userId: string
    communityId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateInput = {
    id?: string
    name: string
    type: $Enums.ResourceType
    amount: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutResourcesInput
    relatedMissions?: MissionCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.ResourceType
    amount: number
    unit: string
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedMissions?: MissionUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    amount?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutResourcesNestedInput
    relatedMissions?: MissionUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    amount?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedMissions?: MissionUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateManyInput = {
    id?: string
    name: string
    type: $Enums.ResourceType
    amount: number
    unit: string
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    amount?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    amount?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapZoneCreateInput = {
    id?: string
    name: string
    type: $Enums.ZoneType
    riskLevel?: $Enums.RiskLevel
    description?: string | null
    geoJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutZonesInput
  }

  export type MapZoneUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.ZoneType
    riskLevel?: $Enums.RiskLevel
    description?: string | null
    geoJson?: string | null
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapZoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    description?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutZonesNestedInput
  }

  export type MapZoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    description?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapZoneCreateManyInput = {
    id?: string
    name: string
    type: $Enums.ZoneType
    riskLevel?: $Enums.RiskLevel
    description?: string | null
    geoJson?: string | null
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapZoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    description?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapZoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    description?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerCreateInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutMarkersInput
    createdBy?: UserCreateNestedOneWithoutCreatedMarkersInput
    missions?: MissionCreateNestedManyWithoutTargetMarkerInput
  }

  export type MapMarkerUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    communityId: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    missions?: MissionUncheckedCreateNestedManyWithoutTargetMarkerInput
  }

  export type MapMarkerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutMarkersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedMarkersNestedInput
    missions?: MissionUpdateManyWithoutTargetMarkerNestedInput
  }

  export type MapMarkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    communityId?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUncheckedUpdateManyWithoutTargetMarkerNestedInput
  }

  export type MapMarkerCreateManyInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    communityId: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapMarkerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    communityId?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutMissionsInput
    targetMarker?: MapMarkerCreateNestedOneWithoutMissionsInput
    resource?: ResourceCreateNestedOneWithoutRelatedMissionsInput
    createdBy?: UserCreateNestedOneWithoutCreatedMissionsInput
    assignments?: MissionAssignmentCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    communityId: string
    targetMarkerId?: string | null
    resourceId?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MissionAssignmentUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutMissionsNestedInput
    targetMarker?: MapMarkerUpdateOneWithoutMissionsNestedInput
    resource?: ResourceUpdateOneWithoutRelatedMissionsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedMissionsNestedInput
    assignments?: MissionAssignmentUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    communityId?: StringFieldUpdateOperationsInput | string
    targetMarkerId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MissionAssignmentUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateManyInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    communityId: string
    targetMarkerId?: string | null
    resourceId?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    communityId?: StringFieldUpdateOperationsInput | string
    targetMarkerId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionAssignmentCreateInput = {
    id?: string
    assignedAt?: Date | string
    mission: MissionCreateNestedOneWithoutAssignmentsInput
    communityMember: CommunityMemberCreateNestedOneWithoutMissionAssignmentsInput
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type MissionAssignmentUncheckedCreateInput = {
    id?: string
    missionId: string
    communityMemberId: string
    userId: string
    assignedAt?: Date | string
  }

  export type MissionAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutAssignmentsNestedInput
    communityMember?: CommunityMemberUpdateOneRequiredWithoutMissionAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type MissionAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    communityMemberId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionAssignmentCreateManyInput = {
    id?: string
    missionId: string
    communityMemberId: string
    userId: string
    assignedAt?: Date | string
  }

  export type MissionAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    communityMemberId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommunityMemberListRelationFilter = {
    every?: CommunityMemberWhereInput
    some?: CommunityMemberWhereInput
    none?: CommunityMemberWhereInput
  }

  export type MissionAssignmentListRelationFilter = {
    every?: MissionAssignmentWhereInput
    some?: MissionAssignmentWhereInput
    none?: MissionAssignmentWhereInput
  }

  export type MapMarkerListRelationFilter = {
    every?: MapMarkerWhereInput
    some?: MapMarkerWhereInput
    none?: MapMarkerWhereInput
  }

  export type MissionListRelationFilter = {
    every?: MissionWhereInput
    some?: MissionWhereInput
    none?: MissionWhereInput
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type CommunityMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapMarkerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ResourceListRelationFilter = {
    every?: ResourceWhereInput
    some?: ResourceWhereInput
    none?: ResourceWhereInput
  }

  export type MapZoneListRelationFilter = {
    every?: MapZoneWhereInput
    some?: MapZoneWhereInput
    none?: MapZoneWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapZoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommunityScalarRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type CommunityMemberUserIdCommunityIdCompoundUniqueInput = {
    userId: string
    communityId: string
  }

  export type CommunityMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[]
    notIn?: $Enums.ResourceType[]
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    unit?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    unit?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    unit?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[]
    notIn?: $Enums.ResourceType[]
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumZoneTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneType | EnumZoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneType[]
    notIn?: $Enums.ZoneType[]
    not?: NestedEnumZoneTypeFilter<$PrismaModel> | $Enums.ZoneType
  }

  export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type MapZoneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    riskLevel?: SortOrder
    description?: SortOrder
    geoJson?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    riskLevel?: SortOrder
    description?: SortOrder
    geoJson?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapZoneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    riskLevel?: SortOrder
    description?: SortOrder
    geoJson?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumZoneTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneType | EnumZoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneType[]
    notIn?: $Enums.ZoneType[]
    not?: NestedEnumZoneTypeWithAggregatesFilter<$PrismaModel> | $Enums.ZoneType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumZoneTypeFilter<$PrismaModel>
    _max?: NestedEnumZoneTypeFilter<$PrismaModel>
  }

  export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type EnumMarkerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MarkerType | EnumMarkerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarkerType[]
    notIn?: $Enums.MarkerType[]
    not?: NestedEnumMarkerTypeFilter<$PrismaModel> | $Enums.MarkerType
  }

  export type MapMarkerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    riskLevel?: SortOrder
    communityId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapMarkerAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type MapMarkerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    riskLevel?: SortOrder
    communityId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapMarkerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    riskLevel?: SortOrder
    communityId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapMarkerSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumMarkerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarkerType | EnumMarkerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarkerType[]
    notIn?: $Enums.MarkerType[]
    not?: NestedEnumMarkerTypeWithAggregatesFilter<$PrismaModel> | $Enums.MarkerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarkerTypeFilter<$PrismaModel>
    _max?: NestedEnumMarkerTypeFilter<$PrismaModel>
  }

  export type EnumMissionUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionUrgency | EnumMissionUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.MissionUrgency[]
    notIn?: $Enums.MissionUrgency[]
    not?: NestedEnumMissionUrgencyFilter<$PrismaModel> | $Enums.MissionUrgency
  }

  export type MapMarkerNullableScalarRelationFilter = {
    is?: MapMarkerWhereInput | null
    isNot?: MapMarkerWhereInput | null
  }

  export type ResourceNullableScalarRelationFilter = {
    is?: ResourceWhereInput | null
    isNot?: ResourceWhereInput | null
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    riskLevel?: SortOrder
    urgency?: SortOrder
    communityId?: SortOrder
    targetMarkerId?: SortOrder
    resourceId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    riskLevel?: SortOrder
    urgency?: SortOrder
    communityId?: SortOrder
    targetMarkerId?: SortOrder
    resourceId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    riskLevel?: SortOrder
    urgency?: SortOrder
    communityId?: SortOrder
    targetMarkerId?: SortOrder
    resourceId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMissionUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionUrgency | EnumMissionUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.MissionUrgency[]
    notIn?: $Enums.MissionUrgency[]
    not?: NestedEnumMissionUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.MissionUrgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionUrgencyFilter<$PrismaModel>
    _max?: NestedEnumMissionUrgencyFilter<$PrismaModel>
  }

  export type MissionScalarRelationFilter = {
    is?: MissionWhereInput
    isNot?: MissionWhereInput
  }

  export type CommunityMemberScalarRelationFilter = {
    is?: CommunityMemberWhereInput
    isNot?: CommunityMemberWhereInput
  }

  export type MissionAssignmentMissionIdUserIdCompoundUniqueInput = {
    missionId: string
    userId: string
  }

  export type MissionAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    communityMemberId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type MissionAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    communityMemberId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type MissionAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    communityMemberId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type CommunityMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityMemberCreateWithoutUserInput, CommunityMemberUncheckedCreateWithoutUserInput> | CommunityMemberCreateWithoutUserInput[] | CommunityMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutUserInput | CommunityMemberCreateOrConnectWithoutUserInput[]
    createMany?: CommunityMemberCreateManyUserInputEnvelope
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
  }

  export type MissionAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionAssignmentCreateWithoutUserInput, MissionAssignmentUncheckedCreateWithoutUserInput> | MissionAssignmentCreateWithoutUserInput[] | MissionAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutUserInput | MissionAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: MissionAssignmentCreateManyUserInputEnvelope
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
  }

  export type MapMarkerCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput> | MapMarkerCreateWithoutCreatedByInput[] | MapMarkerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCreatedByInput | MapMarkerCreateOrConnectWithoutCreatedByInput[]
    createMany?: MapMarkerCreateManyCreatedByInputEnvelope
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
  }

  export type MissionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MissionCreateWithoutCreatedByInput, MissionUncheckedCreateWithoutCreatedByInput> | MissionCreateWithoutCreatedByInput[] | MissionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutCreatedByInput | MissionCreateOrConnectWithoutCreatedByInput[]
    createMany?: MissionCreateManyCreatedByInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityMemberCreateWithoutUserInput, CommunityMemberUncheckedCreateWithoutUserInput> | CommunityMemberCreateWithoutUserInput[] | CommunityMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutUserInput | CommunityMemberCreateOrConnectWithoutUserInput[]
    createMany?: CommunityMemberCreateManyUserInputEnvelope
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
  }

  export type MissionAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionAssignmentCreateWithoutUserInput, MissionAssignmentUncheckedCreateWithoutUserInput> | MissionAssignmentCreateWithoutUserInput[] | MissionAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutUserInput | MissionAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: MissionAssignmentCreateManyUserInputEnvelope
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
  }

  export type MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput> | MapMarkerCreateWithoutCreatedByInput[] | MapMarkerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCreatedByInput | MapMarkerCreateOrConnectWithoutCreatedByInput[]
    createMany?: MapMarkerCreateManyCreatedByInputEnvelope
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MissionCreateWithoutCreatedByInput, MissionUncheckedCreateWithoutCreatedByInput> | MissionCreateWithoutCreatedByInput[] | MissionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutCreatedByInput | MissionCreateOrConnectWithoutCreatedByInput[]
    createMany?: MissionCreateManyCreatedByInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommunityMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityMemberCreateWithoutUserInput, CommunityMemberUncheckedCreateWithoutUserInput> | CommunityMemberCreateWithoutUserInput[] | CommunityMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutUserInput | CommunityMemberCreateOrConnectWithoutUserInput[]
    upsert?: CommunityMemberUpsertWithWhereUniqueWithoutUserInput | CommunityMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityMemberCreateManyUserInputEnvelope
    set?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    disconnect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    delete?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    update?: CommunityMemberUpdateWithWhereUniqueWithoutUserInput | CommunityMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityMemberUpdateManyWithWhereWithoutUserInput | CommunityMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityMemberScalarWhereInput | CommunityMemberScalarWhereInput[]
  }

  export type MissionAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionAssignmentCreateWithoutUserInput, MissionAssignmentUncheckedCreateWithoutUserInput> | MissionAssignmentCreateWithoutUserInput[] | MissionAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutUserInput | MissionAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: MissionAssignmentUpsertWithWhereUniqueWithoutUserInput | MissionAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionAssignmentCreateManyUserInputEnvelope
    set?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    disconnect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    delete?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    update?: MissionAssignmentUpdateWithWhereUniqueWithoutUserInput | MissionAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionAssignmentUpdateManyWithWhereWithoutUserInput | MissionAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionAssignmentScalarWhereInput | MissionAssignmentScalarWhereInput[]
  }

  export type MapMarkerUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput> | MapMarkerCreateWithoutCreatedByInput[] | MapMarkerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCreatedByInput | MapMarkerCreateOrConnectWithoutCreatedByInput[]
    upsert?: MapMarkerUpsertWithWhereUniqueWithoutCreatedByInput | MapMarkerUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MapMarkerCreateManyCreatedByInputEnvelope
    set?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    disconnect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    delete?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    update?: MapMarkerUpdateWithWhereUniqueWithoutCreatedByInput | MapMarkerUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MapMarkerUpdateManyWithWhereWithoutCreatedByInput | MapMarkerUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
  }

  export type MissionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MissionCreateWithoutCreatedByInput, MissionUncheckedCreateWithoutCreatedByInput> | MissionCreateWithoutCreatedByInput[] | MissionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutCreatedByInput | MissionCreateOrConnectWithoutCreatedByInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutCreatedByInput | MissionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MissionCreateManyCreatedByInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutCreatedByInput | MissionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutCreatedByInput | MissionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutCreatedByInput | CommunityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutCreatedByInput | CommunityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutCreatedByInput | CommunityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityMemberCreateWithoutUserInput, CommunityMemberUncheckedCreateWithoutUserInput> | CommunityMemberCreateWithoutUserInput[] | CommunityMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutUserInput | CommunityMemberCreateOrConnectWithoutUserInput[]
    upsert?: CommunityMemberUpsertWithWhereUniqueWithoutUserInput | CommunityMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityMemberCreateManyUserInputEnvelope
    set?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    disconnect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    delete?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    update?: CommunityMemberUpdateWithWhereUniqueWithoutUserInput | CommunityMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityMemberUpdateManyWithWhereWithoutUserInput | CommunityMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityMemberScalarWhereInput | CommunityMemberScalarWhereInput[]
  }

  export type MissionAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionAssignmentCreateWithoutUserInput, MissionAssignmentUncheckedCreateWithoutUserInput> | MissionAssignmentCreateWithoutUserInput[] | MissionAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutUserInput | MissionAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: MissionAssignmentUpsertWithWhereUniqueWithoutUserInput | MissionAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionAssignmentCreateManyUserInputEnvelope
    set?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    disconnect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    delete?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    update?: MissionAssignmentUpdateWithWhereUniqueWithoutUserInput | MissionAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionAssignmentUpdateManyWithWhereWithoutUserInput | MissionAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionAssignmentScalarWhereInput | MissionAssignmentScalarWhereInput[]
  }

  export type MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput> | MapMarkerCreateWithoutCreatedByInput[] | MapMarkerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCreatedByInput | MapMarkerCreateOrConnectWithoutCreatedByInput[]
    upsert?: MapMarkerUpsertWithWhereUniqueWithoutCreatedByInput | MapMarkerUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MapMarkerCreateManyCreatedByInputEnvelope
    set?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    disconnect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    delete?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    update?: MapMarkerUpdateWithWhereUniqueWithoutCreatedByInput | MapMarkerUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MapMarkerUpdateManyWithWhereWithoutCreatedByInput | MapMarkerUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MissionCreateWithoutCreatedByInput, MissionUncheckedCreateWithoutCreatedByInput> | MissionCreateWithoutCreatedByInput[] | MissionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutCreatedByInput | MissionCreateOrConnectWithoutCreatedByInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutCreatedByInput | MissionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MissionCreateManyCreatedByInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutCreatedByInput | MissionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutCreatedByInput | MissionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutCreatedByInput | CommunityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutCreatedByInput | CommunityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutCreatedByInput | CommunityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedCommunitiesInput = {
    create?: XOR<UserCreateWithoutCreatedCommunitiesInput, UserUncheckedCreateWithoutCreatedCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCommunitiesInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityMemberCreateNestedManyWithoutCommunityInput = {
    create?: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput> | CommunityMemberCreateWithoutCommunityInput[] | CommunityMemberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutCommunityInput | CommunityMemberCreateOrConnectWithoutCommunityInput[]
    createMany?: CommunityMemberCreateManyCommunityInputEnvelope
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
  }

  export type ResourceCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ResourceCreateWithoutCommunityInput, ResourceUncheckedCreateWithoutCommunityInput> | ResourceCreateWithoutCommunityInput[] | ResourceUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCommunityInput | ResourceCreateOrConnectWithoutCommunityInput[]
    createMany?: ResourceCreateManyCommunityInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type MapMarkerCreateNestedManyWithoutCommunityInput = {
    create?: XOR<MapMarkerCreateWithoutCommunityInput, MapMarkerUncheckedCreateWithoutCommunityInput> | MapMarkerCreateWithoutCommunityInput[] | MapMarkerUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCommunityInput | MapMarkerCreateOrConnectWithoutCommunityInput[]
    createMany?: MapMarkerCreateManyCommunityInputEnvelope
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
  }

  export type MapZoneCreateNestedManyWithoutCommunityInput = {
    create?: XOR<MapZoneCreateWithoutCommunityInput, MapZoneUncheckedCreateWithoutCommunityInput> | MapZoneCreateWithoutCommunityInput[] | MapZoneUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MapZoneCreateOrConnectWithoutCommunityInput | MapZoneCreateOrConnectWithoutCommunityInput[]
    createMany?: MapZoneCreateManyCommunityInputEnvelope
    connect?: MapZoneWhereUniqueInput | MapZoneWhereUniqueInput[]
  }

  export type MissionCreateNestedManyWithoutCommunityInput = {
    create?: XOR<MissionCreateWithoutCommunityInput, MissionUncheckedCreateWithoutCommunityInput> | MissionCreateWithoutCommunityInput[] | MissionUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutCommunityInput | MissionCreateOrConnectWithoutCommunityInput[]
    createMany?: MissionCreateManyCommunityInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput> | CommunityMemberCreateWithoutCommunityInput[] | CommunityMemberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutCommunityInput | CommunityMemberCreateOrConnectWithoutCommunityInput[]
    createMany?: CommunityMemberCreateManyCommunityInputEnvelope
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ResourceCreateWithoutCommunityInput, ResourceUncheckedCreateWithoutCommunityInput> | ResourceCreateWithoutCommunityInput[] | ResourceUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCommunityInput | ResourceCreateOrConnectWithoutCommunityInput[]
    createMany?: ResourceCreateManyCommunityInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type MapMarkerUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<MapMarkerCreateWithoutCommunityInput, MapMarkerUncheckedCreateWithoutCommunityInput> | MapMarkerCreateWithoutCommunityInput[] | MapMarkerUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCommunityInput | MapMarkerCreateOrConnectWithoutCommunityInput[]
    createMany?: MapMarkerCreateManyCommunityInputEnvelope
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
  }

  export type MapZoneUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<MapZoneCreateWithoutCommunityInput, MapZoneUncheckedCreateWithoutCommunityInput> | MapZoneCreateWithoutCommunityInput[] | MapZoneUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MapZoneCreateOrConnectWithoutCommunityInput | MapZoneCreateOrConnectWithoutCommunityInput[]
    createMany?: MapZoneCreateManyCommunityInputEnvelope
    connect?: MapZoneWhereUniqueInput | MapZoneWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<MissionCreateWithoutCommunityInput, MissionUncheckedCreateWithoutCommunityInput> | MissionCreateWithoutCommunityInput[] | MissionUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutCommunityInput | MissionCreateOrConnectWithoutCommunityInput[]
    createMany?: MissionCreateManyCommunityInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCreatedCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCommunitiesInput, UserUncheckedCreateWithoutCreatedCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCommunitiesInput
    upsert?: UserUpsertWithoutCreatedCommunitiesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCommunitiesInput, UserUpdateWithoutCreatedCommunitiesInput>, UserUncheckedUpdateWithoutCreatedCommunitiesInput>
  }

  export type CommunityMemberUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput> | CommunityMemberCreateWithoutCommunityInput[] | CommunityMemberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutCommunityInput | CommunityMemberCreateOrConnectWithoutCommunityInput[]
    upsert?: CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput | CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: CommunityMemberCreateManyCommunityInputEnvelope
    set?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    disconnect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    delete?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    update?: CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput | CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: CommunityMemberUpdateManyWithWhereWithoutCommunityInput | CommunityMemberUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: CommunityMemberScalarWhereInput | CommunityMemberScalarWhereInput[]
  }

  export type ResourceUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ResourceCreateWithoutCommunityInput, ResourceUncheckedCreateWithoutCommunityInput> | ResourceCreateWithoutCommunityInput[] | ResourceUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCommunityInput | ResourceCreateOrConnectWithoutCommunityInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutCommunityInput | ResourceUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ResourceCreateManyCommunityInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutCommunityInput | ResourceUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutCommunityInput | ResourceUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type MapMarkerUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<MapMarkerCreateWithoutCommunityInput, MapMarkerUncheckedCreateWithoutCommunityInput> | MapMarkerCreateWithoutCommunityInput[] | MapMarkerUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCommunityInput | MapMarkerCreateOrConnectWithoutCommunityInput[]
    upsert?: MapMarkerUpsertWithWhereUniqueWithoutCommunityInput | MapMarkerUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: MapMarkerCreateManyCommunityInputEnvelope
    set?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    disconnect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    delete?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    update?: MapMarkerUpdateWithWhereUniqueWithoutCommunityInput | MapMarkerUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: MapMarkerUpdateManyWithWhereWithoutCommunityInput | MapMarkerUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
  }

  export type MapZoneUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<MapZoneCreateWithoutCommunityInput, MapZoneUncheckedCreateWithoutCommunityInput> | MapZoneCreateWithoutCommunityInput[] | MapZoneUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MapZoneCreateOrConnectWithoutCommunityInput | MapZoneCreateOrConnectWithoutCommunityInput[]
    upsert?: MapZoneUpsertWithWhereUniqueWithoutCommunityInput | MapZoneUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: MapZoneCreateManyCommunityInputEnvelope
    set?: MapZoneWhereUniqueInput | MapZoneWhereUniqueInput[]
    disconnect?: MapZoneWhereUniqueInput | MapZoneWhereUniqueInput[]
    delete?: MapZoneWhereUniqueInput | MapZoneWhereUniqueInput[]
    connect?: MapZoneWhereUniqueInput | MapZoneWhereUniqueInput[]
    update?: MapZoneUpdateWithWhereUniqueWithoutCommunityInput | MapZoneUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: MapZoneUpdateManyWithWhereWithoutCommunityInput | MapZoneUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: MapZoneScalarWhereInput | MapZoneScalarWhereInput[]
  }

  export type MissionUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<MissionCreateWithoutCommunityInput, MissionUncheckedCreateWithoutCommunityInput> | MissionCreateWithoutCommunityInput[] | MissionUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutCommunityInput | MissionCreateOrConnectWithoutCommunityInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutCommunityInput | MissionUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: MissionCreateManyCommunityInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutCommunityInput | MissionUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutCommunityInput | MissionUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput> | CommunityMemberCreateWithoutCommunityInput[] | CommunityMemberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutCommunityInput | CommunityMemberCreateOrConnectWithoutCommunityInput[]
    upsert?: CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput | CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: CommunityMemberCreateManyCommunityInputEnvelope
    set?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    disconnect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    delete?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    update?: CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput | CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: CommunityMemberUpdateManyWithWhereWithoutCommunityInput | CommunityMemberUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: CommunityMemberScalarWhereInput | CommunityMemberScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ResourceCreateWithoutCommunityInput, ResourceUncheckedCreateWithoutCommunityInput> | ResourceCreateWithoutCommunityInput[] | ResourceUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCommunityInput | ResourceCreateOrConnectWithoutCommunityInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutCommunityInput | ResourceUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ResourceCreateManyCommunityInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutCommunityInput | ResourceUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutCommunityInput | ResourceUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type MapMarkerUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<MapMarkerCreateWithoutCommunityInput, MapMarkerUncheckedCreateWithoutCommunityInput> | MapMarkerCreateWithoutCommunityInput[] | MapMarkerUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCommunityInput | MapMarkerCreateOrConnectWithoutCommunityInput[]
    upsert?: MapMarkerUpsertWithWhereUniqueWithoutCommunityInput | MapMarkerUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: MapMarkerCreateManyCommunityInputEnvelope
    set?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    disconnect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    delete?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    update?: MapMarkerUpdateWithWhereUniqueWithoutCommunityInput | MapMarkerUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: MapMarkerUpdateManyWithWhereWithoutCommunityInput | MapMarkerUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
  }

  export type MapZoneUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<MapZoneCreateWithoutCommunityInput, MapZoneUncheckedCreateWithoutCommunityInput> | MapZoneCreateWithoutCommunityInput[] | MapZoneUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MapZoneCreateOrConnectWithoutCommunityInput | MapZoneCreateOrConnectWithoutCommunityInput[]
    upsert?: MapZoneUpsertWithWhereUniqueWithoutCommunityInput | MapZoneUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: MapZoneCreateManyCommunityInputEnvelope
    set?: MapZoneWhereUniqueInput | MapZoneWhereUniqueInput[]
    disconnect?: MapZoneWhereUniqueInput | MapZoneWhereUniqueInput[]
    delete?: MapZoneWhereUniqueInput | MapZoneWhereUniqueInput[]
    connect?: MapZoneWhereUniqueInput | MapZoneWhereUniqueInput[]
    update?: MapZoneUpdateWithWhereUniqueWithoutCommunityInput | MapZoneUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: MapZoneUpdateManyWithWhereWithoutCommunityInput | MapZoneUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: MapZoneScalarWhereInput | MapZoneScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<MissionCreateWithoutCommunityInput, MissionUncheckedCreateWithoutCommunityInput> | MissionCreateWithoutCommunityInput[] | MissionUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutCommunityInput | MissionCreateOrConnectWithoutCommunityInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutCommunityInput | MissionUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: MissionCreateManyCommunityInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutCommunityInput | MissionUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutCommunityInput | MissionUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutMembersInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput
    connect?: CommunityWhereUniqueInput
  }

  export type MissionAssignmentCreateNestedManyWithoutCommunityMemberInput = {
    create?: XOR<MissionAssignmentCreateWithoutCommunityMemberInput, MissionAssignmentUncheckedCreateWithoutCommunityMemberInput> | MissionAssignmentCreateWithoutCommunityMemberInput[] | MissionAssignmentUncheckedCreateWithoutCommunityMemberInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutCommunityMemberInput | MissionAssignmentCreateOrConnectWithoutCommunityMemberInput[]
    createMany?: MissionAssignmentCreateManyCommunityMemberInputEnvelope
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
  }

  export type MissionAssignmentUncheckedCreateNestedManyWithoutCommunityMemberInput = {
    create?: XOR<MissionAssignmentCreateWithoutCommunityMemberInput, MissionAssignmentUncheckedCreateWithoutCommunityMemberInput> | MissionAssignmentCreateWithoutCommunityMemberInput[] | MissionAssignmentUncheckedCreateWithoutCommunityMemberInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutCommunityMemberInput | MissionAssignmentCreateOrConnectWithoutCommunityMemberInput[]
    createMany?: MissionAssignmentCreateManyCommunityMemberInputEnvelope
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type CommunityUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput
    upsert?: CommunityUpsertWithoutMembersInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutMembersInput, CommunityUpdateWithoutMembersInput>, CommunityUncheckedUpdateWithoutMembersInput>
  }

  export type MissionAssignmentUpdateManyWithoutCommunityMemberNestedInput = {
    create?: XOR<MissionAssignmentCreateWithoutCommunityMemberInput, MissionAssignmentUncheckedCreateWithoutCommunityMemberInput> | MissionAssignmentCreateWithoutCommunityMemberInput[] | MissionAssignmentUncheckedCreateWithoutCommunityMemberInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutCommunityMemberInput | MissionAssignmentCreateOrConnectWithoutCommunityMemberInput[]
    upsert?: MissionAssignmentUpsertWithWhereUniqueWithoutCommunityMemberInput | MissionAssignmentUpsertWithWhereUniqueWithoutCommunityMemberInput[]
    createMany?: MissionAssignmentCreateManyCommunityMemberInputEnvelope
    set?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    disconnect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    delete?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    update?: MissionAssignmentUpdateWithWhereUniqueWithoutCommunityMemberInput | MissionAssignmentUpdateWithWhereUniqueWithoutCommunityMemberInput[]
    updateMany?: MissionAssignmentUpdateManyWithWhereWithoutCommunityMemberInput | MissionAssignmentUpdateManyWithWhereWithoutCommunityMemberInput[]
    deleteMany?: MissionAssignmentScalarWhereInput | MissionAssignmentScalarWhereInput[]
  }

  export type MissionAssignmentUncheckedUpdateManyWithoutCommunityMemberNestedInput = {
    create?: XOR<MissionAssignmentCreateWithoutCommunityMemberInput, MissionAssignmentUncheckedCreateWithoutCommunityMemberInput> | MissionAssignmentCreateWithoutCommunityMemberInput[] | MissionAssignmentUncheckedCreateWithoutCommunityMemberInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutCommunityMemberInput | MissionAssignmentCreateOrConnectWithoutCommunityMemberInput[]
    upsert?: MissionAssignmentUpsertWithWhereUniqueWithoutCommunityMemberInput | MissionAssignmentUpsertWithWhereUniqueWithoutCommunityMemberInput[]
    createMany?: MissionAssignmentCreateManyCommunityMemberInputEnvelope
    set?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    disconnect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    delete?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    update?: MissionAssignmentUpdateWithWhereUniqueWithoutCommunityMemberInput | MissionAssignmentUpdateWithWhereUniqueWithoutCommunityMemberInput[]
    updateMany?: MissionAssignmentUpdateManyWithWhereWithoutCommunityMemberInput | MissionAssignmentUpdateManyWithWhereWithoutCommunityMemberInput[]
    deleteMany?: MissionAssignmentScalarWhereInput | MissionAssignmentScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutResourcesInput = {
    create?: XOR<CommunityCreateWithoutResourcesInput, CommunityUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutResourcesInput
    connect?: CommunityWhereUniqueInput
  }

  export type MissionCreateNestedManyWithoutResourceInput = {
    create?: XOR<MissionCreateWithoutResourceInput, MissionUncheckedCreateWithoutResourceInput> | MissionCreateWithoutResourceInput[] | MissionUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutResourceInput | MissionCreateOrConnectWithoutResourceInput[]
    createMany?: MissionCreateManyResourceInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<MissionCreateWithoutResourceInput, MissionUncheckedCreateWithoutResourceInput> | MissionCreateWithoutResourceInput[] | MissionUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutResourceInput | MissionCreateOrConnectWithoutResourceInput[]
    createMany?: MissionCreateManyResourceInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type EnumResourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResourceType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommunityUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<CommunityCreateWithoutResourcesInput, CommunityUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutResourcesInput
    upsert?: CommunityUpsertWithoutResourcesInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutResourcesInput, CommunityUpdateWithoutResourcesInput>, CommunityUncheckedUpdateWithoutResourcesInput>
  }

  export type MissionUpdateManyWithoutResourceNestedInput = {
    create?: XOR<MissionCreateWithoutResourceInput, MissionUncheckedCreateWithoutResourceInput> | MissionCreateWithoutResourceInput[] | MissionUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutResourceInput | MissionCreateOrConnectWithoutResourceInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutResourceInput | MissionUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: MissionCreateManyResourceInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutResourceInput | MissionUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutResourceInput | MissionUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<MissionCreateWithoutResourceInput, MissionUncheckedCreateWithoutResourceInput> | MissionCreateWithoutResourceInput[] | MissionUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutResourceInput | MissionCreateOrConnectWithoutResourceInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutResourceInput | MissionUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: MissionCreateManyResourceInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutResourceInput | MissionUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutResourceInput | MissionUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutZonesInput = {
    create?: XOR<CommunityCreateWithoutZonesInput, CommunityUncheckedCreateWithoutZonesInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutZonesInput
    connect?: CommunityWhereUniqueInput
  }

  export type EnumZoneTypeFieldUpdateOperationsInput = {
    set?: $Enums.ZoneType
  }

  export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel
  }

  export type CommunityUpdateOneRequiredWithoutZonesNestedInput = {
    create?: XOR<CommunityCreateWithoutZonesInput, CommunityUncheckedCreateWithoutZonesInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutZonesInput
    upsert?: CommunityUpsertWithoutZonesInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutZonesInput, CommunityUpdateWithoutZonesInput>, CommunityUncheckedUpdateWithoutZonesInput>
  }

  export type CommunityCreateNestedOneWithoutMarkersInput = {
    create?: XOR<CommunityCreateWithoutMarkersInput, CommunityUncheckedCreateWithoutMarkersInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutMarkersInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedMarkersInput = {
    create?: XOR<UserCreateWithoutCreatedMarkersInput, UserUncheckedCreateWithoutCreatedMarkersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMarkersInput
    connect?: UserWhereUniqueInput
  }

  export type MissionCreateNestedManyWithoutTargetMarkerInput = {
    create?: XOR<MissionCreateWithoutTargetMarkerInput, MissionUncheckedCreateWithoutTargetMarkerInput> | MissionCreateWithoutTargetMarkerInput[] | MissionUncheckedCreateWithoutTargetMarkerInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutTargetMarkerInput | MissionCreateOrConnectWithoutTargetMarkerInput[]
    createMany?: MissionCreateManyTargetMarkerInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutTargetMarkerInput = {
    create?: XOR<MissionCreateWithoutTargetMarkerInput, MissionUncheckedCreateWithoutTargetMarkerInput> | MissionCreateWithoutTargetMarkerInput[] | MissionUncheckedCreateWithoutTargetMarkerInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutTargetMarkerInput | MissionCreateOrConnectWithoutTargetMarkerInput[]
    createMany?: MissionCreateManyTargetMarkerInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type EnumMarkerTypeFieldUpdateOperationsInput = {
    set?: $Enums.MarkerType
  }

  export type CommunityUpdateOneRequiredWithoutMarkersNestedInput = {
    create?: XOR<CommunityCreateWithoutMarkersInput, CommunityUncheckedCreateWithoutMarkersInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutMarkersInput
    upsert?: CommunityUpsertWithoutMarkersInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutMarkersInput, CommunityUpdateWithoutMarkersInput>, CommunityUncheckedUpdateWithoutMarkersInput>
  }

  export type UserUpdateOneWithoutCreatedMarkersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedMarkersInput, UserUncheckedCreateWithoutCreatedMarkersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMarkersInput
    upsert?: UserUpsertWithoutCreatedMarkersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedMarkersInput, UserUpdateWithoutCreatedMarkersInput>, UserUncheckedUpdateWithoutCreatedMarkersInput>
  }

  export type MissionUpdateManyWithoutTargetMarkerNestedInput = {
    create?: XOR<MissionCreateWithoutTargetMarkerInput, MissionUncheckedCreateWithoutTargetMarkerInput> | MissionCreateWithoutTargetMarkerInput[] | MissionUncheckedCreateWithoutTargetMarkerInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutTargetMarkerInput | MissionCreateOrConnectWithoutTargetMarkerInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutTargetMarkerInput | MissionUpsertWithWhereUniqueWithoutTargetMarkerInput[]
    createMany?: MissionCreateManyTargetMarkerInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutTargetMarkerInput | MissionUpdateWithWhereUniqueWithoutTargetMarkerInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutTargetMarkerInput | MissionUpdateManyWithWhereWithoutTargetMarkerInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutTargetMarkerNestedInput = {
    create?: XOR<MissionCreateWithoutTargetMarkerInput, MissionUncheckedCreateWithoutTargetMarkerInput> | MissionCreateWithoutTargetMarkerInput[] | MissionUncheckedCreateWithoutTargetMarkerInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutTargetMarkerInput | MissionCreateOrConnectWithoutTargetMarkerInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutTargetMarkerInput | MissionUpsertWithWhereUniqueWithoutTargetMarkerInput[]
    createMany?: MissionCreateManyTargetMarkerInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutTargetMarkerInput | MissionUpdateWithWhereUniqueWithoutTargetMarkerInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutTargetMarkerInput | MissionUpdateManyWithWhereWithoutTargetMarkerInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutMissionsInput = {
    create?: XOR<CommunityCreateWithoutMissionsInput, CommunityUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutMissionsInput
    connect?: CommunityWhereUniqueInput
  }

  export type MapMarkerCreateNestedOneWithoutMissionsInput = {
    create?: XOR<MapMarkerCreateWithoutMissionsInput, MapMarkerUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: MapMarkerCreateOrConnectWithoutMissionsInput
    connect?: MapMarkerWhereUniqueInput
  }

  export type ResourceCreateNestedOneWithoutRelatedMissionsInput = {
    create?: XOR<ResourceCreateWithoutRelatedMissionsInput, ResourceUncheckedCreateWithoutRelatedMissionsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutRelatedMissionsInput
    connect?: ResourceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedMissionsInput = {
    create?: XOR<UserCreateWithoutCreatedMissionsInput, UserUncheckedCreateWithoutCreatedMissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMissionsInput
    connect?: UserWhereUniqueInput
  }

  export type MissionAssignmentCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionAssignmentCreateWithoutMissionInput, MissionAssignmentUncheckedCreateWithoutMissionInput> | MissionAssignmentCreateWithoutMissionInput[] | MissionAssignmentUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutMissionInput | MissionAssignmentCreateOrConnectWithoutMissionInput[]
    createMany?: MissionAssignmentCreateManyMissionInputEnvelope
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
  }

  export type MissionAssignmentUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionAssignmentCreateWithoutMissionInput, MissionAssignmentUncheckedCreateWithoutMissionInput> | MissionAssignmentCreateWithoutMissionInput[] | MissionAssignmentUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutMissionInput | MissionAssignmentCreateOrConnectWithoutMissionInput[]
    createMany?: MissionAssignmentCreateManyMissionInputEnvelope
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
  }

  export type EnumMissionUrgencyFieldUpdateOperationsInput = {
    set?: $Enums.MissionUrgency
  }

  export type CommunityUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<CommunityCreateWithoutMissionsInput, CommunityUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutMissionsInput
    upsert?: CommunityUpsertWithoutMissionsInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutMissionsInput, CommunityUpdateWithoutMissionsInput>, CommunityUncheckedUpdateWithoutMissionsInput>
  }

  export type MapMarkerUpdateOneWithoutMissionsNestedInput = {
    create?: XOR<MapMarkerCreateWithoutMissionsInput, MapMarkerUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: MapMarkerCreateOrConnectWithoutMissionsInput
    upsert?: MapMarkerUpsertWithoutMissionsInput
    disconnect?: MapMarkerWhereInput | boolean
    delete?: MapMarkerWhereInput | boolean
    connect?: MapMarkerWhereUniqueInput
    update?: XOR<XOR<MapMarkerUpdateToOneWithWhereWithoutMissionsInput, MapMarkerUpdateWithoutMissionsInput>, MapMarkerUncheckedUpdateWithoutMissionsInput>
  }

  export type ResourceUpdateOneWithoutRelatedMissionsNestedInput = {
    create?: XOR<ResourceCreateWithoutRelatedMissionsInput, ResourceUncheckedCreateWithoutRelatedMissionsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutRelatedMissionsInput
    upsert?: ResourceUpsertWithoutRelatedMissionsInput
    disconnect?: ResourceWhereInput | boolean
    delete?: ResourceWhereInput | boolean
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutRelatedMissionsInput, ResourceUpdateWithoutRelatedMissionsInput>, ResourceUncheckedUpdateWithoutRelatedMissionsInput>
  }

  export type UserUpdateOneWithoutCreatedMissionsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedMissionsInput, UserUncheckedCreateWithoutCreatedMissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMissionsInput
    upsert?: UserUpsertWithoutCreatedMissionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedMissionsInput, UserUpdateWithoutCreatedMissionsInput>, UserUncheckedUpdateWithoutCreatedMissionsInput>
  }

  export type MissionAssignmentUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionAssignmentCreateWithoutMissionInput, MissionAssignmentUncheckedCreateWithoutMissionInput> | MissionAssignmentCreateWithoutMissionInput[] | MissionAssignmentUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutMissionInput | MissionAssignmentCreateOrConnectWithoutMissionInput[]
    upsert?: MissionAssignmentUpsertWithWhereUniqueWithoutMissionInput | MissionAssignmentUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionAssignmentCreateManyMissionInputEnvelope
    set?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    disconnect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    delete?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    update?: MissionAssignmentUpdateWithWhereUniqueWithoutMissionInput | MissionAssignmentUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionAssignmentUpdateManyWithWhereWithoutMissionInput | MissionAssignmentUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionAssignmentScalarWhereInput | MissionAssignmentScalarWhereInput[]
  }

  export type MissionAssignmentUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionAssignmentCreateWithoutMissionInput, MissionAssignmentUncheckedCreateWithoutMissionInput> | MissionAssignmentCreateWithoutMissionInput[] | MissionAssignmentUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionAssignmentCreateOrConnectWithoutMissionInput | MissionAssignmentCreateOrConnectWithoutMissionInput[]
    upsert?: MissionAssignmentUpsertWithWhereUniqueWithoutMissionInput | MissionAssignmentUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionAssignmentCreateManyMissionInputEnvelope
    set?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    disconnect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    delete?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    connect?: MissionAssignmentWhereUniqueInput | MissionAssignmentWhereUniqueInput[]
    update?: MissionAssignmentUpdateWithWhereUniqueWithoutMissionInput | MissionAssignmentUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionAssignmentUpdateManyWithWhereWithoutMissionInput | MissionAssignmentUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionAssignmentScalarWhereInput | MissionAssignmentScalarWhereInput[]
  }

  export type MissionCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<MissionCreateWithoutAssignmentsInput, MissionUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutAssignmentsInput
    connect?: MissionWhereUniqueInput
  }

  export type CommunityMemberCreateNestedOneWithoutMissionAssignmentsInput = {
    create?: XOR<CommunityMemberCreateWithoutMissionAssignmentsInput, CommunityMemberUncheckedCreateWithoutMissionAssignmentsInput>
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutMissionAssignmentsInput
    connect?: CommunityMemberWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type MissionUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<MissionCreateWithoutAssignmentsInput, MissionUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutAssignmentsInput
    upsert?: MissionUpsertWithoutAssignmentsInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutAssignmentsInput, MissionUpdateWithoutAssignmentsInput>, MissionUncheckedUpdateWithoutAssignmentsInput>
  }

  export type CommunityMemberUpdateOneRequiredWithoutMissionAssignmentsNestedInput = {
    create?: XOR<CommunityMemberCreateWithoutMissionAssignmentsInput, CommunityMemberUncheckedCreateWithoutMissionAssignmentsInput>
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutMissionAssignmentsInput
    upsert?: CommunityMemberUpsertWithoutMissionAssignmentsInput
    connect?: CommunityMemberWhereUniqueInput
    update?: XOR<XOR<CommunityMemberUpdateToOneWithWhereWithoutMissionAssignmentsInput, CommunityMemberUpdateWithoutMissionAssignmentsInput>, CommunityMemberUncheckedUpdateWithoutMissionAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[]
    notIn?: $Enums.ResourceType[]
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[]
    notIn?: $Enums.ResourceType[]
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedEnumZoneTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneType | EnumZoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneType[]
    notIn?: $Enums.ZoneType[]
    not?: NestedEnumZoneTypeFilter<$PrismaModel> | $Enums.ZoneType
  }

  export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type NestedEnumZoneTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneType | EnumZoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneType[]
    notIn?: $Enums.ZoneType[]
    not?: NestedEnumZoneTypeWithAggregatesFilter<$PrismaModel> | $Enums.ZoneType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumZoneTypeFilter<$PrismaModel>
    _max?: NestedEnumZoneTypeFilter<$PrismaModel>
  }

  export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type NestedEnumMarkerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MarkerType | EnumMarkerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarkerType[]
    notIn?: $Enums.MarkerType[]
    not?: NestedEnumMarkerTypeFilter<$PrismaModel> | $Enums.MarkerType
  }

  export type NestedEnumMarkerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarkerType | EnumMarkerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarkerType[]
    notIn?: $Enums.MarkerType[]
    not?: NestedEnumMarkerTypeWithAggregatesFilter<$PrismaModel> | $Enums.MarkerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarkerTypeFilter<$PrismaModel>
    _max?: NestedEnumMarkerTypeFilter<$PrismaModel>
  }

  export type NestedEnumMissionUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionUrgency | EnumMissionUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.MissionUrgency[]
    notIn?: $Enums.MissionUrgency[]
    not?: NestedEnumMissionUrgencyFilter<$PrismaModel> | $Enums.MissionUrgency
  }

  export type NestedEnumMissionUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionUrgency | EnumMissionUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.MissionUrgency[]
    notIn?: $Enums.MissionUrgency[]
    not?: NestedEnumMissionUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.MissionUrgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionUrgencyFilter<$PrismaModel>
    _max?: NestedEnumMissionUrgencyFilter<$PrismaModel>
  }

  export type CommunityMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutMembersInput
    missionAssignments?: MissionAssignmentCreateNestedManyWithoutCommunityMemberInput
  }

  export type CommunityMemberUncheckedCreateWithoutUserInput = {
    id?: string
    communityId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
    missionAssignments?: MissionAssignmentUncheckedCreateNestedManyWithoutCommunityMemberInput
  }

  export type CommunityMemberCreateOrConnectWithoutUserInput = {
    where: CommunityMemberWhereUniqueInput
    create: XOR<CommunityMemberCreateWithoutUserInput, CommunityMemberUncheckedCreateWithoutUserInput>
  }

  export type CommunityMemberCreateManyUserInputEnvelope = {
    data: CommunityMemberCreateManyUserInput | CommunityMemberCreateManyUserInput[]
  }

  export type MissionAssignmentCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    mission: MissionCreateNestedOneWithoutAssignmentsInput
    communityMember: CommunityMemberCreateNestedOneWithoutMissionAssignmentsInput
  }

  export type MissionAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    missionId: string
    communityMemberId: string
    assignedAt?: Date | string
  }

  export type MissionAssignmentCreateOrConnectWithoutUserInput = {
    where: MissionAssignmentWhereUniqueInput
    create: XOR<MissionAssignmentCreateWithoutUserInput, MissionAssignmentUncheckedCreateWithoutUserInput>
  }

  export type MissionAssignmentCreateManyUserInputEnvelope = {
    data: MissionAssignmentCreateManyUserInput | MissionAssignmentCreateManyUserInput[]
  }

  export type MapMarkerCreateWithoutCreatedByInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutMarkersInput
    missions?: MissionCreateNestedManyWithoutTargetMarkerInput
  }

  export type MapMarkerUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    missions?: MissionUncheckedCreateNestedManyWithoutTargetMarkerInput
  }

  export type MapMarkerCreateOrConnectWithoutCreatedByInput = {
    where: MapMarkerWhereUniqueInput
    create: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput>
  }

  export type MapMarkerCreateManyCreatedByInputEnvelope = {
    data: MapMarkerCreateManyCreatedByInput | MapMarkerCreateManyCreatedByInput[]
  }

  export type MissionCreateWithoutCreatedByInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutMissionsInput
    targetMarker?: MapMarkerCreateNestedOneWithoutMissionsInput
    resource?: ResourceCreateNestedOneWithoutRelatedMissionsInput
    assignments?: MissionAssignmentCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    communityId: string
    targetMarkerId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MissionAssignmentUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutCreatedByInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutCreatedByInput, MissionUncheckedCreateWithoutCreatedByInput>
  }

  export type MissionCreateManyCreatedByInputEnvelope = {
    data: MissionCreateManyCreatedByInput | MissionCreateManyCreatedByInput[]
  }

  export type CommunityCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CommunityMemberCreateNestedManyWithoutCommunityInput
    resources?: ResourceCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerCreateNestedManyWithoutCommunityInput
    zones?: MapZoneCreateNestedManyWithoutCommunityInput
    missions?: MissionCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerUncheckedCreateNestedManyWithoutCommunityInput
    zones?: MapZoneUncheckedCreateNestedManyWithoutCommunityInput
    missions?: MissionUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput>
  }

  export type CommunityCreateManyCreatedByInputEnvelope = {
    data: CommunityCreateManyCreatedByInput | CommunityCreateManyCreatedByInput[]
  }

  export type CommunityMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunityMemberWhereUniqueInput
    update: XOR<CommunityMemberUpdateWithoutUserInput, CommunityMemberUncheckedUpdateWithoutUserInput>
    create: XOR<CommunityMemberCreateWithoutUserInput, CommunityMemberUncheckedCreateWithoutUserInput>
  }

  export type CommunityMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunityMemberWhereUniqueInput
    data: XOR<CommunityMemberUpdateWithoutUserInput, CommunityMemberUncheckedUpdateWithoutUserInput>
  }

  export type CommunityMemberUpdateManyWithWhereWithoutUserInput = {
    where: CommunityMemberScalarWhereInput
    data: XOR<CommunityMemberUpdateManyMutationInput, CommunityMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunityMemberScalarWhereInput = {
    AND?: CommunityMemberScalarWhereInput | CommunityMemberScalarWhereInput[]
    OR?: CommunityMemberScalarWhereInput[]
    NOT?: CommunityMemberScalarWhereInput | CommunityMemberScalarWhereInput[]
    id?: StringFilter<"CommunityMember"> | string
    userId?: StringFilter<"CommunityMember"> | string
    communityId?: StringFilter<"CommunityMember"> | string
    role?: EnumUserRoleFilter<"CommunityMember"> | $Enums.UserRole
    joinedAt?: DateTimeFilter<"CommunityMember"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityMember"> | Date | string
  }

  export type MissionAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: MissionAssignmentWhereUniqueInput
    update: XOR<MissionAssignmentUpdateWithoutUserInput, MissionAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<MissionAssignmentCreateWithoutUserInput, MissionAssignmentUncheckedCreateWithoutUserInput>
  }

  export type MissionAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: MissionAssignmentWhereUniqueInput
    data: XOR<MissionAssignmentUpdateWithoutUserInput, MissionAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type MissionAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: MissionAssignmentScalarWhereInput
    data: XOR<MissionAssignmentUpdateManyMutationInput, MissionAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type MissionAssignmentScalarWhereInput = {
    AND?: MissionAssignmentScalarWhereInput | MissionAssignmentScalarWhereInput[]
    OR?: MissionAssignmentScalarWhereInput[]
    NOT?: MissionAssignmentScalarWhereInput | MissionAssignmentScalarWhereInput[]
    id?: StringFilter<"MissionAssignment"> | string
    missionId?: StringFilter<"MissionAssignment"> | string
    communityMemberId?: StringFilter<"MissionAssignment"> | string
    userId?: StringFilter<"MissionAssignment"> | string
    assignedAt?: DateTimeFilter<"MissionAssignment"> | Date | string
  }

  export type MapMarkerUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: MapMarkerWhereUniqueInput
    update: XOR<MapMarkerUpdateWithoutCreatedByInput, MapMarkerUncheckedUpdateWithoutCreatedByInput>
    create: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput>
  }

  export type MapMarkerUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: MapMarkerWhereUniqueInput
    data: XOR<MapMarkerUpdateWithoutCreatedByInput, MapMarkerUncheckedUpdateWithoutCreatedByInput>
  }

  export type MapMarkerUpdateManyWithWhereWithoutCreatedByInput = {
    where: MapMarkerScalarWhereInput
    data: XOR<MapMarkerUpdateManyMutationInput, MapMarkerUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type MapMarkerScalarWhereInput = {
    AND?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
    OR?: MapMarkerScalarWhereInput[]
    NOT?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
    id?: StringFilter<"MapMarker"> | string
    name?: StringFilter<"MapMarker"> | string
    type?: EnumMarkerTypeFilter<"MapMarker"> | $Enums.MarkerType
    latitude?: FloatFilter<"MapMarker"> | number
    longitude?: FloatFilter<"MapMarker"> | number
    description?: StringNullableFilter<"MapMarker"> | string | null
    riskLevel?: EnumRiskLevelFilter<"MapMarker"> | $Enums.RiskLevel
    communityId?: StringFilter<"MapMarker"> | string
    createdById?: StringNullableFilter<"MapMarker"> | string | null
    createdAt?: DateTimeFilter<"MapMarker"> | Date | string
    updatedAt?: DateTimeFilter<"MapMarker"> | Date | string
  }

  export type MissionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutCreatedByInput, MissionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<MissionCreateWithoutCreatedByInput, MissionUncheckedCreateWithoutCreatedByInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutCreatedByInput, MissionUncheckedUpdateWithoutCreatedByInput>
  }

  export type MissionUpdateManyWithWhereWithoutCreatedByInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type MissionScalarWhereInput = {
    AND?: MissionScalarWhereInput | MissionScalarWhereInput[]
    OR?: MissionScalarWhereInput[]
    NOT?: MissionScalarWhereInput | MissionScalarWhereInput[]
    id?: StringFilter<"Mission"> | string
    title?: StringFilter<"Mission"> | string
    riskLevel?: EnumRiskLevelFilter<"Mission"> | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFilter<"Mission"> | $Enums.MissionUrgency
    communityId?: StringFilter<"Mission"> | string
    targetMarkerId?: StringNullableFilter<"Mission"> | string | null
    resourceId?: StringNullableFilter<"Mission"> | string | null
    createdById?: StringNullableFilter<"Mission"> | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
  }

  export type CommunityUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutCreatedByInput, CommunityUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutCreatedByInput, CommunityUncheckedUpdateWithoutCreatedByInput>
  }

  export type CommunityUpdateManyWithWhereWithoutCreatedByInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id?: StringFilter<"Community"> | string
    name?: StringFilter<"Community"> | string
    createdById?: StringNullableFilter<"Community"> | string | null
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
  }

  export type UserCreateWithoutCreatedCommunitiesInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CommunityMemberCreateNestedManyWithoutUserInput
    assignments?: MissionAssignmentCreateNestedManyWithoutUserInput
    createdMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    createdMissions?: MissionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedCommunitiesInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CommunityMemberUncheckedCreateNestedManyWithoutUserInput
    assignments?: MissionAssignmentUncheckedCreateNestedManyWithoutUserInput
    createdMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    createdMissions?: MissionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCommunitiesInput, UserUncheckedCreateWithoutCreatedCommunitiesInput>
  }

  export type CommunityMemberCreateWithoutCommunityInput = {
    id?: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    missionAssignments?: MissionAssignmentCreateNestedManyWithoutCommunityMemberInput
  }

  export type CommunityMemberUncheckedCreateWithoutCommunityInput = {
    id?: string
    userId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
    missionAssignments?: MissionAssignmentUncheckedCreateNestedManyWithoutCommunityMemberInput
  }

  export type CommunityMemberCreateOrConnectWithoutCommunityInput = {
    where: CommunityMemberWhereUniqueInput
    create: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput>
  }

  export type CommunityMemberCreateManyCommunityInputEnvelope = {
    data: CommunityMemberCreateManyCommunityInput | CommunityMemberCreateManyCommunityInput[]
  }

  export type ResourceCreateWithoutCommunityInput = {
    id?: string
    name: string
    type: $Enums.ResourceType
    amount: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedMissions?: MissionCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutCommunityInput = {
    id?: string
    name: string
    type: $Enums.ResourceType
    amount: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedMissions?: MissionUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutCommunityInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutCommunityInput, ResourceUncheckedCreateWithoutCommunityInput>
  }

  export type ResourceCreateManyCommunityInputEnvelope = {
    data: ResourceCreateManyCommunityInput | ResourceCreateManyCommunityInput[]
  }

  export type MapMarkerCreateWithoutCommunityInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedMarkersInput
    missions?: MissionCreateNestedManyWithoutTargetMarkerInput
  }

  export type MapMarkerUncheckedCreateWithoutCommunityInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    missions?: MissionUncheckedCreateNestedManyWithoutTargetMarkerInput
  }

  export type MapMarkerCreateOrConnectWithoutCommunityInput = {
    where: MapMarkerWhereUniqueInput
    create: XOR<MapMarkerCreateWithoutCommunityInput, MapMarkerUncheckedCreateWithoutCommunityInput>
  }

  export type MapMarkerCreateManyCommunityInputEnvelope = {
    data: MapMarkerCreateManyCommunityInput | MapMarkerCreateManyCommunityInput[]
  }

  export type MapZoneCreateWithoutCommunityInput = {
    id?: string
    name: string
    type: $Enums.ZoneType
    riskLevel?: $Enums.RiskLevel
    description?: string | null
    geoJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapZoneUncheckedCreateWithoutCommunityInput = {
    id?: string
    name: string
    type: $Enums.ZoneType
    riskLevel?: $Enums.RiskLevel
    description?: string | null
    geoJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapZoneCreateOrConnectWithoutCommunityInput = {
    where: MapZoneWhereUniqueInput
    create: XOR<MapZoneCreateWithoutCommunityInput, MapZoneUncheckedCreateWithoutCommunityInput>
  }

  export type MapZoneCreateManyCommunityInputEnvelope = {
    data: MapZoneCreateManyCommunityInput | MapZoneCreateManyCommunityInput[]
  }

  export type MissionCreateWithoutCommunityInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    createdAt?: Date | string
    updatedAt?: Date | string
    targetMarker?: MapMarkerCreateNestedOneWithoutMissionsInput
    resource?: ResourceCreateNestedOneWithoutRelatedMissionsInput
    createdBy?: UserCreateNestedOneWithoutCreatedMissionsInput
    assignments?: MissionAssignmentCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutCommunityInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    targetMarkerId?: string | null
    resourceId?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MissionAssignmentUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutCommunityInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutCommunityInput, MissionUncheckedCreateWithoutCommunityInput>
  }

  export type MissionCreateManyCommunityInputEnvelope = {
    data: MissionCreateManyCommunityInput | MissionCreateManyCommunityInput[]
  }

  export type UserUpsertWithoutCreatedCommunitiesInput = {
    update: XOR<UserUpdateWithoutCreatedCommunitiesInput, UserUncheckedUpdateWithoutCreatedCommunitiesInput>
    create: XOR<UserCreateWithoutCreatedCommunitiesInput, UserUncheckedCreateWithoutCreatedCommunitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCommunitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCommunitiesInput, UserUncheckedUpdateWithoutCreatedCommunitiesInput>
  }

  export type UserUpdateWithoutCreatedCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CommunityMemberUpdateManyWithoutUserNestedInput
    assignments?: MissionAssignmentUpdateManyWithoutUserNestedInput
    createdMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    createdMissions?: MissionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CommunityMemberUncheckedUpdateManyWithoutUserNestedInput
    assignments?: MissionAssignmentUncheckedUpdateManyWithoutUserNestedInput
    createdMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMissions?: MissionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput = {
    where: CommunityMemberWhereUniqueInput
    update: XOR<CommunityMemberUpdateWithoutCommunityInput, CommunityMemberUncheckedUpdateWithoutCommunityInput>
    create: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput>
  }

  export type CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput = {
    where: CommunityMemberWhereUniqueInput
    data: XOR<CommunityMemberUpdateWithoutCommunityInput, CommunityMemberUncheckedUpdateWithoutCommunityInput>
  }

  export type CommunityMemberUpdateManyWithWhereWithoutCommunityInput = {
    where: CommunityMemberScalarWhereInput
    data: XOR<CommunityMemberUpdateManyMutationInput, CommunityMemberUncheckedUpdateManyWithoutCommunityInput>
  }

  export type ResourceUpsertWithWhereUniqueWithoutCommunityInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutCommunityInput, ResourceUncheckedUpdateWithoutCommunityInput>
    create: XOR<ResourceCreateWithoutCommunityInput, ResourceUncheckedCreateWithoutCommunityInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutCommunityInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutCommunityInput, ResourceUncheckedUpdateWithoutCommunityInput>
  }

  export type ResourceUpdateManyWithWhereWithoutCommunityInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutCommunityInput>
  }

  export type ResourceScalarWhereInput = {
    AND?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    OR?: ResourceScalarWhereInput[]
    NOT?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    id?: StringFilter<"Resource"> | string
    name?: StringFilter<"Resource"> | string
    type?: EnumResourceTypeFilter<"Resource"> | $Enums.ResourceType
    amount?: FloatFilter<"Resource"> | number
    unit?: StringFilter<"Resource"> | string
    communityId?: StringFilter<"Resource"> | string
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    updatedAt?: DateTimeFilter<"Resource"> | Date | string
  }

  export type MapMarkerUpsertWithWhereUniqueWithoutCommunityInput = {
    where: MapMarkerWhereUniqueInput
    update: XOR<MapMarkerUpdateWithoutCommunityInput, MapMarkerUncheckedUpdateWithoutCommunityInput>
    create: XOR<MapMarkerCreateWithoutCommunityInput, MapMarkerUncheckedCreateWithoutCommunityInput>
  }

  export type MapMarkerUpdateWithWhereUniqueWithoutCommunityInput = {
    where: MapMarkerWhereUniqueInput
    data: XOR<MapMarkerUpdateWithoutCommunityInput, MapMarkerUncheckedUpdateWithoutCommunityInput>
  }

  export type MapMarkerUpdateManyWithWhereWithoutCommunityInput = {
    where: MapMarkerScalarWhereInput
    data: XOR<MapMarkerUpdateManyMutationInput, MapMarkerUncheckedUpdateManyWithoutCommunityInput>
  }

  export type MapZoneUpsertWithWhereUniqueWithoutCommunityInput = {
    where: MapZoneWhereUniqueInput
    update: XOR<MapZoneUpdateWithoutCommunityInput, MapZoneUncheckedUpdateWithoutCommunityInput>
    create: XOR<MapZoneCreateWithoutCommunityInput, MapZoneUncheckedCreateWithoutCommunityInput>
  }

  export type MapZoneUpdateWithWhereUniqueWithoutCommunityInput = {
    where: MapZoneWhereUniqueInput
    data: XOR<MapZoneUpdateWithoutCommunityInput, MapZoneUncheckedUpdateWithoutCommunityInput>
  }

  export type MapZoneUpdateManyWithWhereWithoutCommunityInput = {
    where: MapZoneScalarWhereInput
    data: XOR<MapZoneUpdateManyMutationInput, MapZoneUncheckedUpdateManyWithoutCommunityInput>
  }

  export type MapZoneScalarWhereInput = {
    AND?: MapZoneScalarWhereInput | MapZoneScalarWhereInput[]
    OR?: MapZoneScalarWhereInput[]
    NOT?: MapZoneScalarWhereInput | MapZoneScalarWhereInput[]
    id?: StringFilter<"MapZone"> | string
    name?: StringFilter<"MapZone"> | string
    type?: EnumZoneTypeFilter<"MapZone"> | $Enums.ZoneType
    riskLevel?: EnumRiskLevelFilter<"MapZone"> | $Enums.RiskLevel
    description?: StringNullableFilter<"MapZone"> | string | null
    geoJson?: StringNullableFilter<"MapZone"> | string | null
    communityId?: StringFilter<"MapZone"> | string
    createdAt?: DateTimeFilter<"MapZone"> | Date | string
    updatedAt?: DateTimeFilter<"MapZone"> | Date | string
  }

  export type MissionUpsertWithWhereUniqueWithoutCommunityInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutCommunityInput, MissionUncheckedUpdateWithoutCommunityInput>
    create: XOR<MissionCreateWithoutCommunityInput, MissionUncheckedCreateWithoutCommunityInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutCommunityInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutCommunityInput, MissionUncheckedUpdateWithoutCommunityInput>
  }

  export type MissionUpdateManyWithWhereWithoutCommunityInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutCommunityInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MissionAssignmentCreateNestedManyWithoutUserInput
    createdMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    createdMissions?: MissionCreateNestedManyWithoutCreatedByInput
    createdCommunities?: CommunityCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MissionAssignmentUncheckedCreateNestedManyWithoutUserInput
    createdMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    createdMissions?: MissionUncheckedCreateNestedManyWithoutCreatedByInput
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type CommunityCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedCommunitiesInput
    resources?: ResourceCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerCreateNestedManyWithoutCommunityInput
    zones?: MapZoneCreateNestedManyWithoutCommunityInput
    missions?: MissionCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resources?: ResourceUncheckedCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerUncheckedCreateNestedManyWithoutCommunityInput
    zones?: MapZoneUncheckedCreateNestedManyWithoutCommunityInput
    missions?: MissionUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutMembersInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
  }

  export type MissionAssignmentCreateWithoutCommunityMemberInput = {
    id?: string
    assignedAt?: Date | string
    mission: MissionCreateNestedOneWithoutAssignmentsInput
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type MissionAssignmentUncheckedCreateWithoutCommunityMemberInput = {
    id?: string
    missionId: string
    userId: string
    assignedAt?: Date | string
  }

  export type MissionAssignmentCreateOrConnectWithoutCommunityMemberInput = {
    where: MissionAssignmentWhereUniqueInput
    create: XOR<MissionAssignmentCreateWithoutCommunityMemberInput, MissionAssignmentUncheckedCreateWithoutCommunityMemberInput>
  }

  export type MissionAssignmentCreateManyCommunityMemberInputEnvelope = {
    data: MissionAssignmentCreateManyCommunityMemberInput | MissionAssignmentCreateManyCommunityMemberInput[]
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MissionAssignmentUpdateManyWithoutUserNestedInput
    createdMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    createdMissions?: MissionUpdateManyWithoutCreatedByNestedInput
    createdCommunities?: CommunityUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MissionAssignmentUncheckedUpdateManyWithoutUserNestedInput
    createdMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMissions?: MissionUncheckedUpdateManyWithoutCreatedByNestedInput
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type CommunityUpsertWithoutMembersInput = {
    update: XOR<CommunityUpdateWithoutMembersInput, CommunityUncheckedUpdateWithoutMembersInput>
    create: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutMembersInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutMembersInput, CommunityUncheckedUpdateWithoutMembersInput>
  }

  export type CommunityUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedCommunitiesNestedInput
    resources?: ResourceUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUpdateManyWithoutCommunityNestedInput
    missions?: MissionUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUncheckedUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUncheckedUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUncheckedUpdateManyWithoutCommunityNestedInput
    missions?: MissionUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type MissionAssignmentUpsertWithWhereUniqueWithoutCommunityMemberInput = {
    where: MissionAssignmentWhereUniqueInput
    update: XOR<MissionAssignmentUpdateWithoutCommunityMemberInput, MissionAssignmentUncheckedUpdateWithoutCommunityMemberInput>
    create: XOR<MissionAssignmentCreateWithoutCommunityMemberInput, MissionAssignmentUncheckedCreateWithoutCommunityMemberInput>
  }

  export type MissionAssignmentUpdateWithWhereUniqueWithoutCommunityMemberInput = {
    where: MissionAssignmentWhereUniqueInput
    data: XOR<MissionAssignmentUpdateWithoutCommunityMemberInput, MissionAssignmentUncheckedUpdateWithoutCommunityMemberInput>
  }

  export type MissionAssignmentUpdateManyWithWhereWithoutCommunityMemberInput = {
    where: MissionAssignmentScalarWhereInput
    data: XOR<MissionAssignmentUpdateManyMutationInput, MissionAssignmentUncheckedUpdateManyWithoutCommunityMemberInput>
  }

  export type CommunityCreateWithoutResourcesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedCommunitiesInput
    members?: CommunityMemberCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerCreateNestedManyWithoutCommunityInput
    zones?: MapZoneCreateNestedManyWithoutCommunityInput
    missions?: MissionCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutResourcesInput = {
    id?: string
    name: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerUncheckedCreateNestedManyWithoutCommunityInput
    zones?: MapZoneUncheckedCreateNestedManyWithoutCommunityInput
    missions?: MissionUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutResourcesInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutResourcesInput, CommunityUncheckedCreateWithoutResourcesInput>
  }

  export type MissionCreateWithoutResourceInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutMissionsInput
    targetMarker?: MapMarkerCreateNestedOneWithoutMissionsInput
    createdBy?: UserCreateNestedOneWithoutCreatedMissionsInput
    assignments?: MissionAssignmentCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutResourceInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    communityId: string
    targetMarkerId?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MissionAssignmentUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutResourceInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutResourceInput, MissionUncheckedCreateWithoutResourceInput>
  }

  export type MissionCreateManyResourceInputEnvelope = {
    data: MissionCreateManyResourceInput | MissionCreateManyResourceInput[]
  }

  export type CommunityUpsertWithoutResourcesInput = {
    update: XOR<CommunityUpdateWithoutResourcesInput, CommunityUncheckedUpdateWithoutResourcesInput>
    create: XOR<CommunityCreateWithoutResourcesInput, CommunityUncheckedCreateWithoutResourcesInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutResourcesInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutResourcesInput, CommunityUncheckedUpdateWithoutResourcesInput>
  }

  export type CommunityUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedCommunitiesNestedInput
    members?: CommunityMemberUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUpdateManyWithoutCommunityNestedInput
    missions?: MissionUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUncheckedUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUncheckedUpdateManyWithoutCommunityNestedInput
    missions?: MissionUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type MissionUpsertWithWhereUniqueWithoutResourceInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutResourceInput, MissionUncheckedUpdateWithoutResourceInput>
    create: XOR<MissionCreateWithoutResourceInput, MissionUncheckedCreateWithoutResourceInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutResourceInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutResourceInput, MissionUncheckedUpdateWithoutResourceInput>
  }

  export type MissionUpdateManyWithWhereWithoutResourceInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutResourceInput>
  }

  export type CommunityCreateWithoutZonesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedCommunitiesInput
    members?: CommunityMemberCreateNestedManyWithoutCommunityInput
    resources?: ResourceCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerCreateNestedManyWithoutCommunityInput
    missions?: MissionCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutZonesInput = {
    id?: string
    name: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerUncheckedCreateNestedManyWithoutCommunityInput
    missions?: MissionUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutZonesInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutZonesInput, CommunityUncheckedCreateWithoutZonesInput>
  }

  export type CommunityUpsertWithoutZonesInput = {
    update: XOR<CommunityUpdateWithoutZonesInput, CommunityUncheckedUpdateWithoutZonesInput>
    create: XOR<CommunityCreateWithoutZonesInput, CommunityUncheckedCreateWithoutZonesInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutZonesInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutZonesInput, CommunityUncheckedUpdateWithoutZonesInput>
  }

  export type CommunityUpdateWithoutZonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedCommunitiesNestedInput
    members?: CommunityMemberUpdateManyWithoutCommunityNestedInput
    resources?: ResourceUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUpdateManyWithoutCommunityNestedInput
    missions?: MissionUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutZonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUncheckedUpdateManyWithoutCommunityNestedInput
    missions?: MissionUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateWithoutMarkersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedCommunitiesInput
    members?: CommunityMemberCreateNestedManyWithoutCommunityInput
    resources?: ResourceCreateNestedManyWithoutCommunityInput
    zones?: MapZoneCreateNestedManyWithoutCommunityInput
    missions?: MissionCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutMarkersInput = {
    id?: string
    name: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCommunityInput
    zones?: MapZoneUncheckedCreateNestedManyWithoutCommunityInput
    missions?: MissionUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutMarkersInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutMarkersInput, CommunityUncheckedCreateWithoutMarkersInput>
  }

  export type UserCreateWithoutCreatedMarkersInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CommunityMemberCreateNestedManyWithoutUserInput
    assignments?: MissionAssignmentCreateNestedManyWithoutUserInput
    createdMissions?: MissionCreateNestedManyWithoutCreatedByInput
    createdCommunities?: CommunityCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedMarkersInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CommunityMemberUncheckedCreateNestedManyWithoutUserInput
    assignments?: MissionAssignmentUncheckedCreateNestedManyWithoutUserInput
    createdMissions?: MissionUncheckedCreateNestedManyWithoutCreatedByInput
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedMarkersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedMarkersInput, UserUncheckedCreateWithoutCreatedMarkersInput>
  }

  export type MissionCreateWithoutTargetMarkerInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutMissionsInput
    resource?: ResourceCreateNestedOneWithoutRelatedMissionsInput
    createdBy?: UserCreateNestedOneWithoutCreatedMissionsInput
    assignments?: MissionAssignmentCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutTargetMarkerInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    communityId: string
    resourceId?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MissionAssignmentUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutTargetMarkerInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutTargetMarkerInput, MissionUncheckedCreateWithoutTargetMarkerInput>
  }

  export type MissionCreateManyTargetMarkerInputEnvelope = {
    data: MissionCreateManyTargetMarkerInput | MissionCreateManyTargetMarkerInput[]
  }

  export type CommunityUpsertWithoutMarkersInput = {
    update: XOR<CommunityUpdateWithoutMarkersInput, CommunityUncheckedUpdateWithoutMarkersInput>
    create: XOR<CommunityCreateWithoutMarkersInput, CommunityUncheckedCreateWithoutMarkersInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutMarkersInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutMarkersInput, CommunityUncheckedUpdateWithoutMarkersInput>
  }

  export type CommunityUpdateWithoutMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedCommunitiesNestedInput
    members?: CommunityMemberUpdateManyWithoutCommunityNestedInput
    resources?: ResourceUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUpdateManyWithoutCommunityNestedInput
    missions?: MissionUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUncheckedUpdateManyWithoutCommunityNestedInput
    missions?: MissionUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type UserUpsertWithoutCreatedMarkersInput = {
    update: XOR<UserUpdateWithoutCreatedMarkersInput, UserUncheckedUpdateWithoutCreatedMarkersInput>
    create: XOR<UserCreateWithoutCreatedMarkersInput, UserUncheckedCreateWithoutCreatedMarkersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedMarkersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedMarkersInput, UserUncheckedUpdateWithoutCreatedMarkersInput>
  }

  export type UserUpdateWithoutCreatedMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CommunityMemberUpdateManyWithoutUserNestedInput
    assignments?: MissionAssignmentUpdateManyWithoutUserNestedInput
    createdMissions?: MissionUpdateManyWithoutCreatedByNestedInput
    createdCommunities?: CommunityUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CommunityMemberUncheckedUpdateManyWithoutUserNestedInput
    assignments?: MissionAssignmentUncheckedUpdateManyWithoutUserNestedInput
    createdMissions?: MissionUncheckedUpdateManyWithoutCreatedByNestedInput
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type MissionUpsertWithWhereUniqueWithoutTargetMarkerInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutTargetMarkerInput, MissionUncheckedUpdateWithoutTargetMarkerInput>
    create: XOR<MissionCreateWithoutTargetMarkerInput, MissionUncheckedCreateWithoutTargetMarkerInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutTargetMarkerInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutTargetMarkerInput, MissionUncheckedUpdateWithoutTargetMarkerInput>
  }

  export type MissionUpdateManyWithWhereWithoutTargetMarkerInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutTargetMarkerInput>
  }

  export type CommunityCreateWithoutMissionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedCommunitiesInput
    members?: CommunityMemberCreateNestedManyWithoutCommunityInput
    resources?: ResourceCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerCreateNestedManyWithoutCommunityInput
    zones?: MapZoneCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutMissionsInput = {
    id?: string
    name: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCommunityInput
    markers?: MapMarkerUncheckedCreateNestedManyWithoutCommunityInput
    zones?: MapZoneUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutMissionsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutMissionsInput, CommunityUncheckedCreateWithoutMissionsInput>
  }

  export type MapMarkerCreateWithoutMissionsInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutMarkersInput
    createdBy?: UserCreateNestedOneWithoutCreatedMarkersInput
  }

  export type MapMarkerUncheckedCreateWithoutMissionsInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    communityId: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapMarkerCreateOrConnectWithoutMissionsInput = {
    where: MapMarkerWhereUniqueInput
    create: XOR<MapMarkerCreateWithoutMissionsInput, MapMarkerUncheckedCreateWithoutMissionsInput>
  }

  export type ResourceCreateWithoutRelatedMissionsInput = {
    id?: string
    name: string
    type: $Enums.ResourceType
    amount: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutResourcesInput
  }

  export type ResourceUncheckedCreateWithoutRelatedMissionsInput = {
    id?: string
    name: string
    type: $Enums.ResourceType
    amount: number
    unit: string
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceCreateOrConnectWithoutRelatedMissionsInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutRelatedMissionsInput, ResourceUncheckedCreateWithoutRelatedMissionsInput>
  }

  export type UserCreateWithoutCreatedMissionsInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CommunityMemberCreateNestedManyWithoutUserInput
    assignments?: MissionAssignmentCreateNestedManyWithoutUserInput
    createdMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    createdCommunities?: CommunityCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedMissionsInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CommunityMemberUncheckedCreateNestedManyWithoutUserInput
    assignments?: MissionAssignmentUncheckedCreateNestedManyWithoutUserInput
    createdMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedMissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedMissionsInput, UserUncheckedCreateWithoutCreatedMissionsInput>
  }

  export type MissionAssignmentCreateWithoutMissionInput = {
    id?: string
    assignedAt?: Date | string
    communityMember: CommunityMemberCreateNestedOneWithoutMissionAssignmentsInput
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type MissionAssignmentUncheckedCreateWithoutMissionInput = {
    id?: string
    communityMemberId: string
    userId: string
    assignedAt?: Date | string
  }

  export type MissionAssignmentCreateOrConnectWithoutMissionInput = {
    where: MissionAssignmentWhereUniqueInput
    create: XOR<MissionAssignmentCreateWithoutMissionInput, MissionAssignmentUncheckedCreateWithoutMissionInput>
  }

  export type MissionAssignmentCreateManyMissionInputEnvelope = {
    data: MissionAssignmentCreateManyMissionInput | MissionAssignmentCreateManyMissionInput[]
  }

  export type CommunityUpsertWithoutMissionsInput = {
    update: XOR<CommunityUpdateWithoutMissionsInput, CommunityUncheckedUpdateWithoutMissionsInput>
    create: XOR<CommunityCreateWithoutMissionsInput, CommunityUncheckedCreateWithoutMissionsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutMissionsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutMissionsInput, CommunityUncheckedUpdateWithoutMissionsInput>
  }

  export type CommunityUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedCommunitiesNestedInput
    members?: CommunityMemberUpdateManyWithoutCommunityNestedInput
    resources?: ResourceUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUncheckedUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type MapMarkerUpsertWithoutMissionsInput = {
    update: XOR<MapMarkerUpdateWithoutMissionsInput, MapMarkerUncheckedUpdateWithoutMissionsInput>
    create: XOR<MapMarkerCreateWithoutMissionsInput, MapMarkerUncheckedCreateWithoutMissionsInput>
    where?: MapMarkerWhereInput
  }

  export type MapMarkerUpdateToOneWithWhereWithoutMissionsInput = {
    where?: MapMarkerWhereInput
    data: XOR<MapMarkerUpdateWithoutMissionsInput, MapMarkerUncheckedUpdateWithoutMissionsInput>
  }

  export type MapMarkerUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutMarkersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedMarkersNestedInput
  }

  export type MapMarkerUncheckedUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    communityId?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUpsertWithoutRelatedMissionsInput = {
    update: XOR<ResourceUpdateWithoutRelatedMissionsInput, ResourceUncheckedUpdateWithoutRelatedMissionsInput>
    create: XOR<ResourceCreateWithoutRelatedMissionsInput, ResourceUncheckedCreateWithoutRelatedMissionsInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutRelatedMissionsInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutRelatedMissionsInput, ResourceUncheckedUpdateWithoutRelatedMissionsInput>
  }

  export type ResourceUpdateWithoutRelatedMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    amount?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type ResourceUncheckedUpdateWithoutRelatedMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    amount?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCreatedMissionsInput = {
    update: XOR<UserUpdateWithoutCreatedMissionsInput, UserUncheckedUpdateWithoutCreatedMissionsInput>
    create: XOR<UserCreateWithoutCreatedMissionsInput, UserUncheckedCreateWithoutCreatedMissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedMissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedMissionsInput, UserUncheckedUpdateWithoutCreatedMissionsInput>
  }

  export type UserUpdateWithoutCreatedMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CommunityMemberUpdateManyWithoutUserNestedInput
    assignments?: MissionAssignmentUpdateManyWithoutUserNestedInput
    createdMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    createdCommunities?: CommunityUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CommunityMemberUncheckedUpdateManyWithoutUserNestedInput
    assignments?: MissionAssignmentUncheckedUpdateManyWithoutUserNestedInput
    createdMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type MissionAssignmentUpsertWithWhereUniqueWithoutMissionInput = {
    where: MissionAssignmentWhereUniqueInput
    update: XOR<MissionAssignmentUpdateWithoutMissionInput, MissionAssignmentUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionAssignmentCreateWithoutMissionInput, MissionAssignmentUncheckedCreateWithoutMissionInput>
  }

  export type MissionAssignmentUpdateWithWhereUniqueWithoutMissionInput = {
    where: MissionAssignmentWhereUniqueInput
    data: XOR<MissionAssignmentUpdateWithoutMissionInput, MissionAssignmentUncheckedUpdateWithoutMissionInput>
  }

  export type MissionAssignmentUpdateManyWithWhereWithoutMissionInput = {
    where: MissionAssignmentScalarWhereInput
    data: XOR<MissionAssignmentUpdateManyMutationInput, MissionAssignmentUncheckedUpdateManyWithoutMissionInput>
  }

  export type MissionCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutMissionsInput
    targetMarker?: MapMarkerCreateNestedOneWithoutMissionsInput
    resource?: ResourceCreateNestedOneWithoutRelatedMissionsInput
    createdBy?: UserCreateNestedOneWithoutCreatedMissionsInput
  }

  export type MissionUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    communityId: string
    targetMarkerId?: string | null
    resourceId?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionCreateOrConnectWithoutAssignmentsInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutAssignmentsInput, MissionUncheckedCreateWithoutAssignmentsInput>
  }

  export type CommunityMemberCreateWithoutMissionAssignmentsInput = {
    id?: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    community: CommunityCreateNestedOneWithoutMembersInput
  }

  export type CommunityMemberUncheckedCreateWithoutMissionAssignmentsInput = {
    id?: string
    userId: string
    communityId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityMemberCreateOrConnectWithoutMissionAssignmentsInput = {
    where: CommunityMemberWhereUniqueInput
    create: XOR<CommunityMemberCreateWithoutMissionAssignmentsInput, CommunityMemberUncheckedCreateWithoutMissionAssignmentsInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CommunityMemberCreateNestedManyWithoutUserInput
    createdMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    createdMissions?: MissionCreateNestedManyWithoutCreatedByInput
    createdCommunities?: CommunityCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    username: string
    password: string
    telephone: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CommunityMemberUncheckedCreateNestedManyWithoutUserInput
    createdMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    createdMissions?: MissionUncheckedCreateNestedManyWithoutCreatedByInput
    createdCommunities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type MissionUpsertWithoutAssignmentsInput = {
    update: XOR<MissionUpdateWithoutAssignmentsInput, MissionUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<MissionCreateWithoutAssignmentsInput, MissionUncheckedCreateWithoutAssignmentsInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutAssignmentsInput, MissionUncheckedUpdateWithoutAssignmentsInput>
  }

  export type MissionUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutMissionsNestedInput
    targetMarker?: MapMarkerUpdateOneWithoutMissionsNestedInput
    resource?: ResourceUpdateOneWithoutRelatedMissionsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedMissionsNestedInput
  }

  export type MissionUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    communityId?: StringFieldUpdateOperationsInput | string
    targetMarkerId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberUpsertWithoutMissionAssignmentsInput = {
    update: XOR<CommunityMemberUpdateWithoutMissionAssignmentsInput, CommunityMemberUncheckedUpdateWithoutMissionAssignmentsInput>
    create: XOR<CommunityMemberCreateWithoutMissionAssignmentsInput, CommunityMemberUncheckedCreateWithoutMissionAssignmentsInput>
    where?: CommunityMemberWhereInput
  }

  export type CommunityMemberUpdateToOneWithWhereWithoutMissionAssignmentsInput = {
    where?: CommunityMemberWhereInput
    data: XOR<CommunityMemberUpdateWithoutMissionAssignmentsInput, CommunityMemberUncheckedUpdateWithoutMissionAssignmentsInput>
  }

  export type CommunityMemberUpdateWithoutMissionAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    community?: CommunityUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CommunityMemberUncheckedUpdateWithoutMissionAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CommunityMemberUpdateManyWithoutUserNestedInput
    createdMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    createdMissions?: MissionUpdateManyWithoutCreatedByNestedInput
    createdCommunities?: CommunityUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CommunityMemberUncheckedUpdateManyWithoutUserNestedInput
    createdMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMissions?: MissionUncheckedUpdateManyWithoutCreatedByNestedInput
    createdCommunities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type CommunityMemberCreateManyUserInput = {
    id?: string
    communityId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionAssignmentCreateManyUserInput = {
    id?: string
    missionId: string
    communityMemberId: string
    assignedAt?: Date | string
  }

  export type MapMarkerCreateManyCreatedByInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    communityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionCreateManyCreatedByInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    communityId: string
    targetMarkerId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutMembersNestedInput
    missionAssignments?: MissionAssignmentUpdateManyWithoutCommunityMemberNestedInput
  }

  export type CommunityMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missionAssignments?: MissionAssignmentUncheckedUpdateManyWithoutCommunityMemberNestedInput
  }

  export type CommunityMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutAssignmentsNestedInput
    communityMember?: CommunityMemberUpdateOneRequiredWithoutMissionAssignmentsNestedInput
  }

  export type MissionAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    communityMemberId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    communityMemberId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutMarkersNestedInput
    missions?: MissionUpdateManyWithoutTargetMarkerNestedInput
  }

  export type MapMarkerUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUncheckedUpdateManyWithoutTargetMarkerNestedInput
  }

  export type MapMarkerUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    communityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutMissionsNestedInput
    targetMarker?: MapMarkerUpdateOneWithoutMissionsNestedInput
    resource?: ResourceUpdateOneWithoutRelatedMissionsNestedInput
    assignments?: MissionAssignmentUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    communityId?: StringFieldUpdateOperationsInput | string
    targetMarkerId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MissionAssignmentUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    communityId?: StringFieldUpdateOperationsInput | string
    targetMarkerId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CommunityMemberUpdateManyWithoutCommunityNestedInput
    resources?: ResourceUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUpdateManyWithoutCommunityNestedInput
    missions?: MissionUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCommunityNestedInput
    markers?: MapMarkerUncheckedUpdateManyWithoutCommunityNestedInput
    zones?: MapZoneUncheckedUpdateManyWithoutCommunityNestedInput
    missions?: MissionUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberCreateManyCommunityInput = {
    id?: string
    userId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceCreateManyCommunityInput = {
    id?: string
    name: string
    type: $Enums.ResourceType
    amount: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapMarkerCreateManyCommunityInput = {
    id?: string
    name: string
    type: $Enums.MarkerType
    latitude: number
    longitude: number
    description?: string | null
    riskLevel?: $Enums.RiskLevel
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapZoneCreateManyCommunityInput = {
    id?: string
    name: string
    type: $Enums.ZoneType
    riskLevel?: $Enums.RiskLevel
    description?: string | null
    geoJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionCreateManyCommunityInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    targetMarkerId?: string | null
    resourceId?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityMemberUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    missionAssignments?: MissionAssignmentUpdateManyWithoutCommunityMemberNestedInput
  }

  export type CommunityMemberUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missionAssignments?: MissionAssignmentUncheckedUpdateManyWithoutCommunityMemberNestedInput
  }

  export type CommunityMemberUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    amount?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedMissions?: MissionUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    amount?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedMissions?: MissionUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    amount?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedMarkersNestedInput
    missions?: MissionUpdateManyWithoutTargetMarkerNestedInput
  }

  export type MapMarkerUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUncheckedUpdateManyWithoutTargetMarkerNestedInput
  }

  export type MapMarkerUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapZoneUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    description?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapZoneUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    description?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapZoneUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    description?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetMarker?: MapMarkerUpdateOneWithoutMissionsNestedInput
    resource?: ResourceUpdateOneWithoutRelatedMissionsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedMissionsNestedInput
    assignments?: MissionAssignmentUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    targetMarkerId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MissionAssignmentUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    targetMarkerId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionAssignmentCreateManyCommunityMemberInput = {
    id?: string
    missionId: string
    userId: string
    assignedAt?: Date | string
  }

  export type MissionAssignmentUpdateWithoutCommunityMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type MissionAssignmentUncheckedUpdateWithoutCommunityMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionAssignmentUncheckedUpdateManyWithoutCommunityMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateManyResourceInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    communityId: string
    targetMarkerId?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutMissionsNestedInput
    targetMarker?: MapMarkerUpdateOneWithoutMissionsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedMissionsNestedInput
    assignments?: MissionAssignmentUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    communityId?: StringFieldUpdateOperationsInput | string
    targetMarkerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MissionAssignmentUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    communityId?: StringFieldUpdateOperationsInput | string
    targetMarkerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateManyTargetMarkerInput = {
    id?: string
    title: string
    riskLevel?: $Enums.RiskLevel
    urgency?: $Enums.MissionUrgency
    communityId: string
    resourceId?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateWithoutTargetMarkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutMissionsNestedInput
    resource?: ResourceUpdateOneWithoutRelatedMissionsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedMissionsNestedInput
    assignments?: MissionAssignmentUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutTargetMarkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    communityId?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MissionAssignmentUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutTargetMarkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    urgency?: EnumMissionUrgencyFieldUpdateOperationsInput | $Enums.MissionUrgency
    communityId?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionAssignmentCreateManyMissionInput = {
    id?: string
    communityMemberId: string
    userId: string
    assignedAt?: Date | string
  }

  export type MissionAssignmentUpdateWithoutMissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityMember?: CommunityMemberUpdateOneRequiredWithoutMissionAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type MissionAssignmentUncheckedUpdateWithoutMissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityMemberId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionAssignmentUncheckedUpdateManyWithoutMissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityMemberId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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