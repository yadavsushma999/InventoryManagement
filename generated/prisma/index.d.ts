
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
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model AddStockAdjustment
 * 
 */
export type AddStockAdjustment = $Result.DefaultSelection<Prisma.$AddStockAdjustmentPayload>
/**
 * Model TransferStockAdjustment
 * 
 */
export type TransferStockAdjustment = $Result.DefaultSelection<Prisma.$TransferStockAdjustmentPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
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
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addStockAdjustment`: Exposes CRUD operations for the **AddStockAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddStockAdjustments
    * const addStockAdjustments = await prisma.addStockAdjustment.findMany()
    * ```
    */
  get addStockAdjustment(): Prisma.AddStockAdjustmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transferStockAdjustment`: Exposes CRUD operations for the **TransferStockAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransferStockAdjustments
    * const transferStockAdjustments = await prisma.transferStockAdjustment.findMany()
    * ```
    */
  get transferStockAdjustment(): Prisma.TransferStockAdjustmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Item: 'Item',
    Category: 'Category',
    Unit: 'Unit',
    Brand: 'Brand',
    Warehouse: 'Warehouse',
    AddStockAdjustment: 'AddStockAdjustment',
    TransferStockAdjustment: 'TransferStockAdjustment',
    Supplier: 'Supplier'
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
      modelProps: "item" | "category" | "unit" | "brand" | "warehouse" | "addStockAdjustment" | "transferStockAdjustment" | "supplier"
      txIsolationLevel: never
    }
    model: {
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ItemFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ItemAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UnitFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UnitAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BrandFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BrandAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WarehouseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.WarehouseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      AddStockAdjustment: {
        payload: Prisma.$AddStockAdjustmentPayload<ExtArgs>
        fields: Prisma.AddStockAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddStockAdjustmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddStockAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddStockAdjustmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddStockAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.AddStockAdjustmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddStockAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddStockAdjustmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddStockAdjustmentPayload>
          }
          findMany: {
            args: Prisma.AddStockAdjustmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddStockAdjustmentPayload>[]
          }
          create: {
            args: Prisma.AddStockAdjustmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddStockAdjustmentPayload>
          }
          createMany: {
            args: Prisma.AddStockAdjustmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddStockAdjustmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddStockAdjustmentPayload>
          }
          update: {
            args: Prisma.AddStockAdjustmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddStockAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.AddStockAdjustmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddStockAdjustmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddStockAdjustmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddStockAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.AddStockAdjustmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddStockAdjustment>
          }
          groupBy: {
            args: Prisma.AddStockAdjustmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddStockAdjustmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AddStockAdjustmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AddStockAdjustmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AddStockAdjustmentCountArgs<ExtArgs>
            result: $Utils.Optional<AddStockAdjustmentCountAggregateOutputType> | number
          }
        }
      }
      TransferStockAdjustment: {
        payload: Prisma.$TransferStockAdjustmentPayload<ExtArgs>
        fields: Prisma.TransferStockAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransferStockAdjustmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferStockAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransferStockAdjustmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferStockAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.TransferStockAdjustmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferStockAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransferStockAdjustmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferStockAdjustmentPayload>
          }
          findMany: {
            args: Prisma.TransferStockAdjustmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferStockAdjustmentPayload>[]
          }
          create: {
            args: Prisma.TransferStockAdjustmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferStockAdjustmentPayload>
          }
          createMany: {
            args: Prisma.TransferStockAdjustmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransferStockAdjustmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferStockAdjustmentPayload>
          }
          update: {
            args: Prisma.TransferStockAdjustmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferStockAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.TransferStockAdjustmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransferStockAdjustmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransferStockAdjustmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferStockAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.TransferStockAdjustmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransferStockAdjustment>
          }
          groupBy: {
            args: Prisma.TransferStockAdjustmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransferStockAdjustmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TransferStockAdjustmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TransferStockAdjustmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TransferStockAdjustmentCountArgs<ExtArgs>
            result: $Utils.Optional<TransferStockAdjustmentCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SupplierFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SupplierAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    item?: ItemOmit
    category?: CategoryOmit
    unit?: UnitOmit
    brand?: BrandOmit
    warehouse?: WarehouseOmit
    addStockAdjustment?: AddStockAdjustmentOmit
    transferStockAdjustment?: TransferStockAdjustmentOmit
    supplier?: SupplierOmit
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
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    AddStockAdjustment: number
    TransferStockAdjustment: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AddStockAdjustment?: boolean | ItemCountOutputTypeCountAddStockAdjustmentArgs
    TransferStockAdjustment?: boolean | ItemCountOutputTypeCountTransferStockAdjustmentArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountAddStockAdjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddStockAdjustmentWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountTransferStockAdjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferStockAdjustmentWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Item: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | CategoryCountOutputTypeCountItemArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    Item: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | UnitCountOutputTypeCountItemArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    Item: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | BrandCountOutputTypeCountItemArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    Item: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | WarehouseCountOutputTypeCountItemArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    Item: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | SupplierCountOutputTypeCountItemArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    quantity: number | null
    sellingPrice: number | null
    buyingPrice: number | null
    reOrderPoint: number | null
    weight: number | null
    taxRate: number | null
  }

  export type ItemSumAggregateOutputType = {
    quantity: number | null
    sellingPrice: number | null
    buyingPrice: number | null
    reOrderPoint: number | null
    weight: number | null
    taxRate: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    categoryId: string | null
    sku: string | null
    barcode: string | null
    quantity: number | null
    unitId: string | null
    brandId: string | null
    warehouseId: string | null
    sellingPrice: number | null
    buyingPrice: number | null
    supplierId: string | null
    reOrderPoint: number | null
    location: string | null
    imageUrl: string | null
    weight: number | null
    dimensions: string | null
    taxRate: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    categoryId: string | null
    sku: string | null
    barcode: string | null
    quantity: number | null
    unitId: string | null
    brandId: string | null
    warehouseId: string | null
    sellingPrice: number | null
    buyingPrice: number | null
    supplierId: string | null
    reOrderPoint: number | null
    location: string | null
    imageUrl: string | null
    weight: number | null
    dimensions: string | null
    taxRate: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    categoryId: number
    sku: number
    barcode: number
    quantity: number
    unitId: number
    brandId: number
    warehouseId: number
    sellingPrice: number
    buyingPrice: number
    supplierId: number
    reOrderPoint: number
    location: number
    imageUrl: number
    weight: number
    dimensions: number
    taxRate: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    quantity?: true
    sellingPrice?: true
    buyingPrice?: true
    reOrderPoint?: true
    weight?: true
    taxRate?: true
  }

  export type ItemSumAggregateInputType = {
    quantity?: true
    sellingPrice?: true
    buyingPrice?: true
    reOrderPoint?: true
    weight?: true
    taxRate?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    categoryId?: true
    sku?: true
    barcode?: true
    quantity?: true
    unitId?: true
    brandId?: true
    warehouseId?: true
    sellingPrice?: true
    buyingPrice?: true
    supplierId?: true
    reOrderPoint?: true
    location?: true
    imageUrl?: true
    weight?: true
    dimensions?: true
    taxRate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    categoryId?: true
    sku?: true
    barcode?: true
    quantity?: true
    unitId?: true
    brandId?: true
    warehouseId?: true
    sellingPrice?: true
    buyingPrice?: true
    supplierId?: true
    reOrderPoint?: true
    location?: true
    imageUrl?: true
    weight?: true
    dimensions?: true
    taxRate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    categoryId?: true
    sku?: true
    barcode?: true
    quantity?: true
    unitId?: true
    brandId?: true
    warehouseId?: true
    sellingPrice?: true
    buyingPrice?: true
    supplierId?: true
    reOrderPoint?: true
    location?: true
    imageUrl?: true
    weight?: true
    dimensions?: true
    taxRate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    title: string
    description: string | null
    categoryId: string
    sku: string
    barcode: string | null
    quantity: number
    unitId: string
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location: string | null
    imageUrl: string
    weight: number | null
    dimensions: string | null
    taxRate: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    categoryId?: boolean
    sku?: boolean
    barcode?: boolean
    quantity?: boolean
    unitId?: boolean
    brandId?: boolean
    warehouseId?: boolean
    sellingPrice?: boolean
    buyingPrice?: boolean
    supplierId?: boolean
    reOrderPoint?: boolean
    location?: boolean
    imageUrl?: boolean
    weight?: boolean
    dimensions?: boolean
    taxRate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    AddStockAdjustment?: boolean | Item$AddStockAdjustmentArgs<ExtArgs>
    TransferStockAdjustment?: boolean | Item$TransferStockAdjustmentArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>



  export type ItemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    categoryId?: boolean
    sku?: boolean
    barcode?: boolean
    quantity?: boolean
    unitId?: boolean
    brandId?: boolean
    warehouseId?: boolean
    sellingPrice?: boolean
    buyingPrice?: boolean
    supplierId?: boolean
    reOrderPoint?: boolean
    location?: boolean
    imageUrl?: boolean
    weight?: boolean
    dimensions?: boolean
    taxRate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "categoryId" | "sku" | "barcode" | "quantity" | "unitId" | "brandId" | "warehouseId" | "sellingPrice" | "buyingPrice" | "supplierId" | "reOrderPoint" | "location" | "imageUrl" | "weight" | "dimensions" | "taxRate" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    AddStockAdjustment?: boolean | Item$AddStockAdjustmentArgs<ExtArgs>
    TransferStockAdjustment?: boolean | Item$TransferStockAdjustmentArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      brand: Prisma.$BrandPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs>
      AddStockAdjustment: Prisma.$AddStockAdjustmentPayload<ExtArgs>[]
      TransferStockAdjustment: Prisma.$TransferStockAdjustmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      categoryId: string
      sku: string
      barcode: string | null
      quantity: number
      unitId: string
      brandId: string
      warehouseId: string
      sellingPrice: number
      buyingPrice: number
      supplierId: string
      reOrderPoint: number
      location: string | null
      imageUrl: string
      weight: number | null
      dimensions: string | null
      taxRate: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * @param {ItemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const item = await prisma.item.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ItemFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Item.
     * @param {ItemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const item = await prisma.item.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ItemAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AddStockAdjustment<T extends Item$AddStockAdjustmentArgs<ExtArgs> = {}>(args?: Subset<T, Item$AddStockAdjustmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddStockAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TransferStockAdjustment<T extends Item$TransferStockAdjustmentArgs<ExtArgs> = {}>(args?: Subset<T, Item$TransferStockAdjustmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferStockAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly title: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly categoryId: FieldRef<"Item", 'String'>
    readonly sku: FieldRef<"Item", 'String'>
    readonly barcode: FieldRef<"Item", 'String'>
    readonly quantity: FieldRef<"Item", 'Int'>
    readonly unitId: FieldRef<"Item", 'String'>
    readonly brandId: FieldRef<"Item", 'String'>
    readonly warehouseId: FieldRef<"Item", 'String'>
    readonly sellingPrice: FieldRef<"Item", 'Float'>
    readonly buyingPrice: FieldRef<"Item", 'Float'>
    readonly supplierId: FieldRef<"Item", 'String'>
    readonly reOrderPoint: FieldRef<"Item", 'Int'>
    readonly location: FieldRef<"Item", 'String'>
    readonly imageUrl: FieldRef<"Item", 'String'>
    readonly weight: FieldRef<"Item", 'Float'>
    readonly dimensions: FieldRef<"Item", 'String'>
    readonly taxRate: FieldRef<"Item", 'Float'>
    readonly notes: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item findRaw
   */
  export type ItemFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Item aggregateRaw
   */
  export type ItemAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Item.AddStockAdjustment
   */
  export type Item$AddStockAdjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
    where?: AddStockAdjustmentWhereInput
    orderBy?: AddStockAdjustmentOrderByWithRelationInput | AddStockAdjustmentOrderByWithRelationInput[]
    cursor?: AddStockAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddStockAdjustmentScalarFieldEnum | AddStockAdjustmentScalarFieldEnum[]
  }

  /**
   * Item.TransferStockAdjustment
   */
  export type Item$TransferStockAdjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
    where?: TransferStockAdjustmentWhereInput
    orderBy?: TransferStockAdjustmentOrderByWithRelationInput | TransferStockAdjustmentOrderByWithRelationInput[]
    cursor?: TransferStockAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferStockAdjustmentScalarFieldEnum | TransferStockAdjustmentScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Item?: boolean | Category$ItemArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | Category$ItemArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Item: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Item<T extends Category$ItemArgs<ExtArgs> = {}>(args?: Subset<T, Category$ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly title: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category.Item
   */
  export type Category$ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    title: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    title: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    title: number
    abbreviation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitMinAggregateInputType = {
    id?: true
    title?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    title?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    title?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    title: string
    abbreviation: string
    createdAt: Date
    updatedAt: Date
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Item?: boolean | Unit$ItemArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>



  export type UnitSelectScalar = {
    id?: boolean
    title?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "abbreviation" | "createdAt" | "updatedAt", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | Unit$ItemArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      Item: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      abbreviation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * @param {UnitFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const unit = await prisma.unit.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UnitFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Unit.
     * @param {UnitAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const unit = await prisma.unit.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UnitAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Item<T extends Unit$ItemArgs<ExtArgs> = {}>(args?: Subset<T, Unit$ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly title: FieldRef<"Unit", 'String'>
    readonly abbreviation: FieldRef<"Unit", 'String'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
    readonly updatedAt: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit findRaw
   */
  export type UnitFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Unit aggregateRaw
   */
  export type UnitAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Unit.Item
   */
  export type Unit$ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Item?: boolean | Brand$ItemArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>



  export type BrandSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | Brand$ItemArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      Item: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * @param {BrandFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const brand = await prisma.brand.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BrandFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Brand.
     * @param {BrandAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const brand = await prisma.brand.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BrandAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Item<T extends Brand$ItemArgs<ExtArgs> = {}>(args?: Subset<T, Brand$ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly title: FieldRef<"Brand", 'String'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand findRaw
   */
  export type BrandFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Brand aggregateRaw
   */
  export type BrandAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Brand.Item
   */
  export type Brand$ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: string | null
    title: string | null
    location: string | null
    description: string | null
    warehouseType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    location: string | null
    description: string | null
    warehouseType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    title: number
    location: number
    description: number
    warehouseType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WarehouseMinAggregateInputType = {
    id?: true
    title?: true
    location?: true
    description?: true
    warehouseType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    title?: true
    location?: true
    description?: true
    warehouseType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    title?: true
    location?: true
    description?: true
    warehouseType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: string
    title: string
    location: string | null
    description: string | null
    warehouseType: string
    createdAt: Date
    updatedAt: Date
    _count: WarehouseCountAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    description?: boolean
    warehouseType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Item?: boolean | Warehouse$ItemArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>



  export type WarehouseSelectScalar = {
    id?: boolean
    title?: boolean
    location?: boolean
    description?: boolean
    warehouseType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WarehouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "location" | "description" | "warehouseType" | "createdAt" | "updatedAt", ExtArgs["result"]["warehouse"]>
  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | Warehouse$ItemArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      Item: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      location: string | null
      description: string | null
      warehouseType: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * @param {WarehouseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const warehouse = await prisma.warehouse.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: WarehouseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Warehouse.
     * @param {WarehouseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const warehouse = await prisma.warehouse.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: WarehouseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
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
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Item<T extends Warehouse$ItemArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Warehouse model
   */
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'String'>
    readonly title: FieldRef<"Warehouse", 'String'>
    readonly location: FieldRef<"Warehouse", 'String'>
    readonly description: FieldRef<"Warehouse", 'String'>
    readonly warehouseType: FieldRef<"Warehouse", 'String'>
    readonly createdAt: FieldRef<"Warehouse", 'DateTime'>
    readonly updatedAt: FieldRef<"Warehouse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouse findRaw
   */
  export type WarehouseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Warehouse aggregateRaw
   */
  export type WarehouseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Warehouse.Item
   */
  export type Warehouse$ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Model AddStockAdjustment
   */

  export type AggregateAddStockAdjustment = {
    _count: AddStockAdjustmentCountAggregateOutputType | null
    _avg: AddStockAdjustmentAvgAggregateOutputType | null
    _sum: AddStockAdjustmentSumAggregateOutputType | null
    _min: AddStockAdjustmentMinAggregateOutputType | null
    _max: AddStockAdjustmentMaxAggregateOutputType | null
  }

  export type AddStockAdjustmentAvgAggregateOutputType = {
    addStockQty: number | null
  }

  export type AddStockAdjustmentSumAggregateOutputType = {
    addStockQty: number | null
  }

  export type AddStockAdjustmentMinAggregateOutputType = {
    id: string | null
    referenceNumber: string | null
    addStockQty: number | null
    notes: string | null
    receivingWarehouseId: string | null
    itemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddStockAdjustmentMaxAggregateOutputType = {
    id: string | null
    referenceNumber: string | null
    addStockQty: number | null
    notes: string | null
    receivingWarehouseId: string | null
    itemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddStockAdjustmentCountAggregateOutputType = {
    id: number
    referenceNumber: number
    addStockQty: number
    notes: number
    receivingWarehouseId: number
    itemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddStockAdjustmentAvgAggregateInputType = {
    addStockQty?: true
  }

  export type AddStockAdjustmentSumAggregateInputType = {
    addStockQty?: true
  }

  export type AddStockAdjustmentMinAggregateInputType = {
    id?: true
    referenceNumber?: true
    addStockQty?: true
    notes?: true
    receivingWarehouseId?: true
    itemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddStockAdjustmentMaxAggregateInputType = {
    id?: true
    referenceNumber?: true
    addStockQty?: true
    notes?: true
    receivingWarehouseId?: true
    itemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddStockAdjustmentCountAggregateInputType = {
    id?: true
    referenceNumber?: true
    addStockQty?: true
    notes?: true
    receivingWarehouseId?: true
    itemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddStockAdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddStockAdjustment to aggregate.
     */
    where?: AddStockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddStockAdjustments to fetch.
     */
    orderBy?: AddStockAdjustmentOrderByWithRelationInput | AddStockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddStockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddStockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddStockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddStockAdjustments
    **/
    _count?: true | AddStockAdjustmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddStockAdjustmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddStockAdjustmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddStockAdjustmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddStockAdjustmentMaxAggregateInputType
  }

  export type GetAddStockAdjustmentAggregateType<T extends AddStockAdjustmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAddStockAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddStockAdjustment[P]>
      : GetScalarType<T[P], AggregateAddStockAdjustment[P]>
  }




  export type AddStockAdjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddStockAdjustmentWhereInput
    orderBy?: AddStockAdjustmentOrderByWithAggregationInput | AddStockAdjustmentOrderByWithAggregationInput[]
    by: AddStockAdjustmentScalarFieldEnum[] | AddStockAdjustmentScalarFieldEnum
    having?: AddStockAdjustmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddStockAdjustmentCountAggregateInputType | true
    _avg?: AddStockAdjustmentAvgAggregateInputType
    _sum?: AddStockAdjustmentSumAggregateInputType
    _min?: AddStockAdjustmentMinAggregateInputType
    _max?: AddStockAdjustmentMaxAggregateInputType
  }

  export type AddStockAdjustmentGroupByOutputType = {
    id: string
    referenceNumber: string
    addStockQty: number
    notes: string | null
    receivingWarehouseId: string
    itemId: string
    createdAt: Date
    updatedAt: Date
    _count: AddStockAdjustmentCountAggregateOutputType | null
    _avg: AddStockAdjustmentAvgAggregateOutputType | null
    _sum: AddStockAdjustmentSumAggregateOutputType | null
    _min: AddStockAdjustmentMinAggregateOutputType | null
    _max: AddStockAdjustmentMaxAggregateOutputType | null
  }

  type GetAddStockAdjustmentGroupByPayload<T extends AddStockAdjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddStockAdjustmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddStockAdjustmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddStockAdjustmentGroupByOutputType[P]>
            : GetScalarType<T[P], AddStockAdjustmentGroupByOutputType[P]>
        }
      >
    >


  export type AddStockAdjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNumber?: boolean
    addStockQty?: boolean
    notes?: boolean
    receivingWarehouseId?: boolean
    itemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addStockAdjustment"]>



  export type AddStockAdjustmentSelectScalar = {
    id?: boolean
    referenceNumber?: boolean
    addStockQty?: boolean
    notes?: boolean
    receivingWarehouseId?: boolean
    itemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddStockAdjustmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceNumber" | "addStockQty" | "notes" | "receivingWarehouseId" | "itemId" | "createdAt" | "updatedAt", ExtArgs["result"]["addStockAdjustment"]>
  export type AddStockAdjustmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $AddStockAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddStockAdjustment"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceNumber: string
      addStockQty: number
      notes: string | null
      receivingWarehouseId: string
      itemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["addStockAdjustment"]>
    composites: {}
  }

  type AddStockAdjustmentGetPayload<S extends boolean | null | undefined | AddStockAdjustmentDefaultArgs> = $Result.GetResult<Prisma.$AddStockAdjustmentPayload, S>

  type AddStockAdjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddStockAdjustmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddStockAdjustmentCountAggregateInputType | true
    }

  export interface AddStockAdjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddStockAdjustment'], meta: { name: 'AddStockAdjustment' } }
    /**
     * Find zero or one AddStockAdjustment that matches the filter.
     * @param {AddStockAdjustmentFindUniqueArgs} args - Arguments to find a AddStockAdjustment
     * @example
     * // Get one AddStockAdjustment
     * const addStockAdjustment = await prisma.addStockAdjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddStockAdjustmentFindUniqueArgs>(args: SelectSubset<T, AddStockAdjustmentFindUniqueArgs<ExtArgs>>): Prisma__AddStockAdjustmentClient<$Result.GetResult<Prisma.$AddStockAdjustmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddStockAdjustment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddStockAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a AddStockAdjustment
     * @example
     * // Get one AddStockAdjustment
     * const addStockAdjustment = await prisma.addStockAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddStockAdjustmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AddStockAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddStockAdjustmentClient<$Result.GetResult<Prisma.$AddStockAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddStockAdjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddStockAdjustmentFindFirstArgs} args - Arguments to find a AddStockAdjustment
     * @example
     * // Get one AddStockAdjustment
     * const addStockAdjustment = await prisma.addStockAdjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddStockAdjustmentFindFirstArgs>(args?: SelectSubset<T, AddStockAdjustmentFindFirstArgs<ExtArgs>>): Prisma__AddStockAdjustmentClient<$Result.GetResult<Prisma.$AddStockAdjustmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddStockAdjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddStockAdjustmentFindFirstOrThrowArgs} args - Arguments to find a AddStockAdjustment
     * @example
     * // Get one AddStockAdjustment
     * const addStockAdjustment = await prisma.addStockAdjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddStockAdjustmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AddStockAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddStockAdjustmentClient<$Result.GetResult<Prisma.$AddStockAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddStockAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddStockAdjustmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddStockAdjustments
     * const addStockAdjustments = await prisma.addStockAdjustment.findMany()
     * 
     * // Get first 10 AddStockAdjustments
     * const addStockAdjustments = await prisma.addStockAdjustment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addStockAdjustmentWithIdOnly = await prisma.addStockAdjustment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddStockAdjustmentFindManyArgs>(args?: SelectSubset<T, AddStockAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddStockAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddStockAdjustment.
     * @param {AddStockAdjustmentCreateArgs} args - Arguments to create a AddStockAdjustment.
     * @example
     * // Create one AddStockAdjustment
     * const AddStockAdjustment = await prisma.addStockAdjustment.create({
     *   data: {
     *     // ... data to create a AddStockAdjustment
     *   }
     * })
     * 
     */
    create<T extends AddStockAdjustmentCreateArgs>(args: SelectSubset<T, AddStockAdjustmentCreateArgs<ExtArgs>>): Prisma__AddStockAdjustmentClient<$Result.GetResult<Prisma.$AddStockAdjustmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddStockAdjustments.
     * @param {AddStockAdjustmentCreateManyArgs} args - Arguments to create many AddStockAdjustments.
     * @example
     * // Create many AddStockAdjustments
     * const addStockAdjustment = await prisma.addStockAdjustment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddStockAdjustmentCreateManyArgs>(args?: SelectSubset<T, AddStockAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddStockAdjustment.
     * @param {AddStockAdjustmentDeleteArgs} args - Arguments to delete one AddStockAdjustment.
     * @example
     * // Delete one AddStockAdjustment
     * const AddStockAdjustment = await prisma.addStockAdjustment.delete({
     *   where: {
     *     // ... filter to delete one AddStockAdjustment
     *   }
     * })
     * 
     */
    delete<T extends AddStockAdjustmentDeleteArgs>(args: SelectSubset<T, AddStockAdjustmentDeleteArgs<ExtArgs>>): Prisma__AddStockAdjustmentClient<$Result.GetResult<Prisma.$AddStockAdjustmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddStockAdjustment.
     * @param {AddStockAdjustmentUpdateArgs} args - Arguments to update one AddStockAdjustment.
     * @example
     * // Update one AddStockAdjustment
     * const addStockAdjustment = await prisma.addStockAdjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddStockAdjustmentUpdateArgs>(args: SelectSubset<T, AddStockAdjustmentUpdateArgs<ExtArgs>>): Prisma__AddStockAdjustmentClient<$Result.GetResult<Prisma.$AddStockAdjustmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddStockAdjustments.
     * @param {AddStockAdjustmentDeleteManyArgs} args - Arguments to filter AddStockAdjustments to delete.
     * @example
     * // Delete a few AddStockAdjustments
     * const { count } = await prisma.addStockAdjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddStockAdjustmentDeleteManyArgs>(args?: SelectSubset<T, AddStockAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddStockAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddStockAdjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddStockAdjustments
     * const addStockAdjustment = await prisma.addStockAdjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddStockAdjustmentUpdateManyArgs>(args: SelectSubset<T, AddStockAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddStockAdjustment.
     * @param {AddStockAdjustmentUpsertArgs} args - Arguments to update or create a AddStockAdjustment.
     * @example
     * // Update or create a AddStockAdjustment
     * const addStockAdjustment = await prisma.addStockAdjustment.upsert({
     *   create: {
     *     // ... data to create a AddStockAdjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddStockAdjustment we want to update
     *   }
     * })
     */
    upsert<T extends AddStockAdjustmentUpsertArgs>(args: SelectSubset<T, AddStockAdjustmentUpsertArgs<ExtArgs>>): Prisma__AddStockAdjustmentClient<$Result.GetResult<Prisma.$AddStockAdjustmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddStockAdjustments that matches the filter.
     * @param {AddStockAdjustmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const addStockAdjustment = await prisma.addStockAdjustment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AddStockAdjustmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AddStockAdjustment.
     * @param {AddStockAdjustmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const addStockAdjustment = await prisma.addStockAdjustment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AddStockAdjustmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AddStockAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddStockAdjustmentCountArgs} args - Arguments to filter AddStockAdjustments to count.
     * @example
     * // Count the number of AddStockAdjustments
     * const count = await prisma.addStockAdjustment.count({
     *   where: {
     *     // ... the filter for the AddStockAdjustments we want to count
     *   }
     * })
    **/
    count<T extends AddStockAdjustmentCountArgs>(
      args?: Subset<T, AddStockAdjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddStockAdjustmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddStockAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddStockAdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddStockAdjustmentAggregateArgs>(args: Subset<T, AddStockAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetAddStockAdjustmentAggregateType<T>>

    /**
     * Group by AddStockAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddStockAdjustmentGroupByArgs} args - Group by arguments.
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
      T extends AddStockAdjustmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddStockAdjustmentGroupByArgs['orderBy'] }
        : { orderBy?: AddStockAdjustmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddStockAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddStockAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddStockAdjustment model
   */
  readonly fields: AddStockAdjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddStockAdjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddStockAdjustmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AddStockAdjustment model
   */
  interface AddStockAdjustmentFieldRefs {
    readonly id: FieldRef<"AddStockAdjustment", 'String'>
    readonly referenceNumber: FieldRef<"AddStockAdjustment", 'String'>
    readonly addStockQty: FieldRef<"AddStockAdjustment", 'Int'>
    readonly notes: FieldRef<"AddStockAdjustment", 'String'>
    readonly receivingWarehouseId: FieldRef<"AddStockAdjustment", 'String'>
    readonly itemId: FieldRef<"AddStockAdjustment", 'String'>
    readonly createdAt: FieldRef<"AddStockAdjustment", 'DateTime'>
    readonly updatedAt: FieldRef<"AddStockAdjustment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AddStockAdjustment findUnique
   */
  export type AddStockAdjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which AddStockAdjustment to fetch.
     */
    where: AddStockAdjustmentWhereUniqueInput
  }

  /**
   * AddStockAdjustment findUniqueOrThrow
   */
  export type AddStockAdjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which AddStockAdjustment to fetch.
     */
    where: AddStockAdjustmentWhereUniqueInput
  }

  /**
   * AddStockAdjustment findFirst
   */
  export type AddStockAdjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which AddStockAdjustment to fetch.
     */
    where?: AddStockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddStockAdjustments to fetch.
     */
    orderBy?: AddStockAdjustmentOrderByWithRelationInput | AddStockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddStockAdjustments.
     */
    cursor?: AddStockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddStockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddStockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddStockAdjustments.
     */
    distinct?: AddStockAdjustmentScalarFieldEnum | AddStockAdjustmentScalarFieldEnum[]
  }

  /**
   * AddStockAdjustment findFirstOrThrow
   */
  export type AddStockAdjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which AddStockAdjustment to fetch.
     */
    where?: AddStockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddStockAdjustments to fetch.
     */
    orderBy?: AddStockAdjustmentOrderByWithRelationInput | AddStockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddStockAdjustments.
     */
    cursor?: AddStockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddStockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddStockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddStockAdjustments.
     */
    distinct?: AddStockAdjustmentScalarFieldEnum | AddStockAdjustmentScalarFieldEnum[]
  }

  /**
   * AddStockAdjustment findMany
   */
  export type AddStockAdjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which AddStockAdjustments to fetch.
     */
    where?: AddStockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddStockAdjustments to fetch.
     */
    orderBy?: AddStockAdjustmentOrderByWithRelationInput | AddStockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddStockAdjustments.
     */
    cursor?: AddStockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddStockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddStockAdjustments.
     */
    skip?: number
    distinct?: AddStockAdjustmentScalarFieldEnum | AddStockAdjustmentScalarFieldEnum[]
  }

  /**
   * AddStockAdjustment create
   */
  export type AddStockAdjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to create a AddStockAdjustment.
     */
    data: XOR<AddStockAdjustmentCreateInput, AddStockAdjustmentUncheckedCreateInput>
  }

  /**
   * AddStockAdjustment createMany
   */
  export type AddStockAdjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddStockAdjustments.
     */
    data: AddStockAdjustmentCreateManyInput | AddStockAdjustmentCreateManyInput[]
  }

  /**
   * AddStockAdjustment update
   */
  export type AddStockAdjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to update a AddStockAdjustment.
     */
    data: XOR<AddStockAdjustmentUpdateInput, AddStockAdjustmentUncheckedUpdateInput>
    /**
     * Choose, which AddStockAdjustment to update.
     */
    where: AddStockAdjustmentWhereUniqueInput
  }

  /**
   * AddStockAdjustment updateMany
   */
  export type AddStockAdjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddStockAdjustments.
     */
    data: XOR<AddStockAdjustmentUpdateManyMutationInput, AddStockAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which AddStockAdjustments to update
     */
    where?: AddStockAdjustmentWhereInput
    /**
     * Limit how many AddStockAdjustments to update.
     */
    limit?: number
  }

  /**
   * AddStockAdjustment upsert
   */
  export type AddStockAdjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
    /**
     * The filter to search for the AddStockAdjustment to update in case it exists.
     */
    where: AddStockAdjustmentWhereUniqueInput
    /**
     * In case the AddStockAdjustment found by the `where` argument doesn't exist, create a new AddStockAdjustment with this data.
     */
    create: XOR<AddStockAdjustmentCreateInput, AddStockAdjustmentUncheckedCreateInput>
    /**
     * In case the AddStockAdjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddStockAdjustmentUpdateInput, AddStockAdjustmentUncheckedUpdateInput>
  }

  /**
   * AddStockAdjustment delete
   */
  export type AddStockAdjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter which AddStockAdjustment to delete.
     */
    where: AddStockAdjustmentWhereUniqueInput
  }

  /**
   * AddStockAdjustment deleteMany
   */
  export type AddStockAdjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddStockAdjustments to delete
     */
    where?: AddStockAdjustmentWhereInput
    /**
     * Limit how many AddStockAdjustments to delete.
     */
    limit?: number
  }

  /**
   * AddStockAdjustment findRaw
   */
  export type AddStockAdjustmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AddStockAdjustment aggregateRaw
   */
  export type AddStockAdjustmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AddStockAdjustment without action
   */
  export type AddStockAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddStockAdjustment
     */
    select?: AddStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddStockAdjustment
     */
    omit?: AddStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddStockAdjustmentInclude<ExtArgs> | null
  }


  /**
   * Model TransferStockAdjustment
   */

  export type AggregateTransferStockAdjustment = {
    _count: TransferStockAdjustmentCountAggregateOutputType | null
    _avg: TransferStockAdjustmentAvgAggregateOutputType | null
    _sum: TransferStockAdjustmentSumAggregateOutputType | null
    _min: TransferStockAdjustmentMinAggregateOutputType | null
    _max: TransferStockAdjustmentMaxAggregateOutputType | null
  }

  export type TransferStockAdjustmentAvgAggregateOutputType = {
    transferStockQty: number | null
  }

  export type TransferStockAdjustmentSumAggregateOutputType = {
    transferStockQty: number | null
  }

  export type TransferStockAdjustmentMinAggregateOutputType = {
    id: string | null
    referenceNumber: string | null
    transferStockQty: number | null
    notes: string | null
    givingWarehouseId: string | null
    receivingWarehouseId: string | null
    itemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransferStockAdjustmentMaxAggregateOutputType = {
    id: string | null
    referenceNumber: string | null
    transferStockQty: number | null
    notes: string | null
    givingWarehouseId: string | null
    receivingWarehouseId: string | null
    itemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransferStockAdjustmentCountAggregateOutputType = {
    id: number
    referenceNumber: number
    transferStockQty: number
    notes: number
    givingWarehouseId: number
    receivingWarehouseId: number
    itemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransferStockAdjustmentAvgAggregateInputType = {
    transferStockQty?: true
  }

  export type TransferStockAdjustmentSumAggregateInputType = {
    transferStockQty?: true
  }

  export type TransferStockAdjustmentMinAggregateInputType = {
    id?: true
    referenceNumber?: true
    transferStockQty?: true
    notes?: true
    givingWarehouseId?: true
    receivingWarehouseId?: true
    itemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransferStockAdjustmentMaxAggregateInputType = {
    id?: true
    referenceNumber?: true
    transferStockQty?: true
    notes?: true
    givingWarehouseId?: true
    receivingWarehouseId?: true
    itemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransferStockAdjustmentCountAggregateInputType = {
    id?: true
    referenceNumber?: true
    transferStockQty?: true
    notes?: true
    givingWarehouseId?: true
    receivingWarehouseId?: true
    itemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransferStockAdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransferStockAdjustment to aggregate.
     */
    where?: TransferStockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferStockAdjustments to fetch.
     */
    orderBy?: TransferStockAdjustmentOrderByWithRelationInput | TransferStockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransferStockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferStockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferStockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransferStockAdjustments
    **/
    _count?: true | TransferStockAdjustmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransferStockAdjustmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransferStockAdjustmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransferStockAdjustmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransferStockAdjustmentMaxAggregateInputType
  }

  export type GetTransferStockAdjustmentAggregateType<T extends TransferStockAdjustmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTransferStockAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransferStockAdjustment[P]>
      : GetScalarType<T[P], AggregateTransferStockAdjustment[P]>
  }




  export type TransferStockAdjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferStockAdjustmentWhereInput
    orderBy?: TransferStockAdjustmentOrderByWithAggregationInput | TransferStockAdjustmentOrderByWithAggregationInput[]
    by: TransferStockAdjustmentScalarFieldEnum[] | TransferStockAdjustmentScalarFieldEnum
    having?: TransferStockAdjustmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransferStockAdjustmentCountAggregateInputType | true
    _avg?: TransferStockAdjustmentAvgAggregateInputType
    _sum?: TransferStockAdjustmentSumAggregateInputType
    _min?: TransferStockAdjustmentMinAggregateInputType
    _max?: TransferStockAdjustmentMaxAggregateInputType
  }

  export type TransferStockAdjustmentGroupByOutputType = {
    id: string
    referenceNumber: string
    transferStockQty: number
    notes: string | null
    givingWarehouseId: string
    receivingWarehouseId: string
    itemId: string
    createdAt: Date
    updatedAt: Date
    _count: TransferStockAdjustmentCountAggregateOutputType | null
    _avg: TransferStockAdjustmentAvgAggregateOutputType | null
    _sum: TransferStockAdjustmentSumAggregateOutputType | null
    _min: TransferStockAdjustmentMinAggregateOutputType | null
    _max: TransferStockAdjustmentMaxAggregateOutputType | null
  }

  type GetTransferStockAdjustmentGroupByPayload<T extends TransferStockAdjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransferStockAdjustmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransferStockAdjustmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransferStockAdjustmentGroupByOutputType[P]>
            : GetScalarType<T[P], TransferStockAdjustmentGroupByOutputType[P]>
        }
      >
    >


  export type TransferStockAdjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNumber?: boolean
    transferStockQty?: boolean
    notes?: boolean
    givingWarehouseId?: boolean
    receivingWarehouseId?: boolean
    itemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transferStockAdjustment"]>



  export type TransferStockAdjustmentSelectScalar = {
    id?: boolean
    referenceNumber?: boolean
    transferStockQty?: boolean
    notes?: boolean
    givingWarehouseId?: boolean
    receivingWarehouseId?: boolean
    itemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransferStockAdjustmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceNumber" | "transferStockQty" | "notes" | "givingWarehouseId" | "receivingWarehouseId" | "itemId" | "createdAt" | "updatedAt", ExtArgs["result"]["transferStockAdjustment"]>
  export type TransferStockAdjustmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $TransferStockAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransferStockAdjustment"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceNumber: string
      transferStockQty: number
      notes: string | null
      givingWarehouseId: string
      receivingWarehouseId: string
      itemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transferStockAdjustment"]>
    composites: {}
  }

  type TransferStockAdjustmentGetPayload<S extends boolean | null | undefined | TransferStockAdjustmentDefaultArgs> = $Result.GetResult<Prisma.$TransferStockAdjustmentPayload, S>

  type TransferStockAdjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransferStockAdjustmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransferStockAdjustmentCountAggregateInputType | true
    }

  export interface TransferStockAdjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransferStockAdjustment'], meta: { name: 'TransferStockAdjustment' } }
    /**
     * Find zero or one TransferStockAdjustment that matches the filter.
     * @param {TransferStockAdjustmentFindUniqueArgs} args - Arguments to find a TransferStockAdjustment
     * @example
     * // Get one TransferStockAdjustment
     * const transferStockAdjustment = await prisma.transferStockAdjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransferStockAdjustmentFindUniqueArgs>(args: SelectSubset<T, TransferStockAdjustmentFindUniqueArgs<ExtArgs>>): Prisma__TransferStockAdjustmentClient<$Result.GetResult<Prisma.$TransferStockAdjustmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransferStockAdjustment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransferStockAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a TransferStockAdjustment
     * @example
     * // Get one TransferStockAdjustment
     * const transferStockAdjustment = await prisma.transferStockAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransferStockAdjustmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TransferStockAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransferStockAdjustmentClient<$Result.GetResult<Prisma.$TransferStockAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransferStockAdjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferStockAdjustmentFindFirstArgs} args - Arguments to find a TransferStockAdjustment
     * @example
     * // Get one TransferStockAdjustment
     * const transferStockAdjustment = await prisma.transferStockAdjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransferStockAdjustmentFindFirstArgs>(args?: SelectSubset<T, TransferStockAdjustmentFindFirstArgs<ExtArgs>>): Prisma__TransferStockAdjustmentClient<$Result.GetResult<Prisma.$TransferStockAdjustmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransferStockAdjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferStockAdjustmentFindFirstOrThrowArgs} args - Arguments to find a TransferStockAdjustment
     * @example
     * // Get one TransferStockAdjustment
     * const transferStockAdjustment = await prisma.transferStockAdjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransferStockAdjustmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TransferStockAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransferStockAdjustmentClient<$Result.GetResult<Prisma.$TransferStockAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransferStockAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferStockAdjustmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransferStockAdjustments
     * const transferStockAdjustments = await prisma.transferStockAdjustment.findMany()
     * 
     * // Get first 10 TransferStockAdjustments
     * const transferStockAdjustments = await prisma.transferStockAdjustment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transferStockAdjustmentWithIdOnly = await prisma.transferStockAdjustment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransferStockAdjustmentFindManyArgs>(args?: SelectSubset<T, TransferStockAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferStockAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransferStockAdjustment.
     * @param {TransferStockAdjustmentCreateArgs} args - Arguments to create a TransferStockAdjustment.
     * @example
     * // Create one TransferStockAdjustment
     * const TransferStockAdjustment = await prisma.transferStockAdjustment.create({
     *   data: {
     *     // ... data to create a TransferStockAdjustment
     *   }
     * })
     * 
     */
    create<T extends TransferStockAdjustmentCreateArgs>(args: SelectSubset<T, TransferStockAdjustmentCreateArgs<ExtArgs>>): Prisma__TransferStockAdjustmentClient<$Result.GetResult<Prisma.$TransferStockAdjustmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransferStockAdjustments.
     * @param {TransferStockAdjustmentCreateManyArgs} args - Arguments to create many TransferStockAdjustments.
     * @example
     * // Create many TransferStockAdjustments
     * const transferStockAdjustment = await prisma.transferStockAdjustment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransferStockAdjustmentCreateManyArgs>(args?: SelectSubset<T, TransferStockAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TransferStockAdjustment.
     * @param {TransferStockAdjustmentDeleteArgs} args - Arguments to delete one TransferStockAdjustment.
     * @example
     * // Delete one TransferStockAdjustment
     * const TransferStockAdjustment = await prisma.transferStockAdjustment.delete({
     *   where: {
     *     // ... filter to delete one TransferStockAdjustment
     *   }
     * })
     * 
     */
    delete<T extends TransferStockAdjustmentDeleteArgs>(args: SelectSubset<T, TransferStockAdjustmentDeleteArgs<ExtArgs>>): Prisma__TransferStockAdjustmentClient<$Result.GetResult<Prisma.$TransferStockAdjustmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransferStockAdjustment.
     * @param {TransferStockAdjustmentUpdateArgs} args - Arguments to update one TransferStockAdjustment.
     * @example
     * // Update one TransferStockAdjustment
     * const transferStockAdjustment = await prisma.transferStockAdjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransferStockAdjustmentUpdateArgs>(args: SelectSubset<T, TransferStockAdjustmentUpdateArgs<ExtArgs>>): Prisma__TransferStockAdjustmentClient<$Result.GetResult<Prisma.$TransferStockAdjustmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransferStockAdjustments.
     * @param {TransferStockAdjustmentDeleteManyArgs} args - Arguments to filter TransferStockAdjustments to delete.
     * @example
     * // Delete a few TransferStockAdjustments
     * const { count } = await prisma.transferStockAdjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransferStockAdjustmentDeleteManyArgs>(args?: SelectSubset<T, TransferStockAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransferStockAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferStockAdjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransferStockAdjustments
     * const transferStockAdjustment = await prisma.transferStockAdjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransferStockAdjustmentUpdateManyArgs>(args: SelectSubset<T, TransferStockAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransferStockAdjustment.
     * @param {TransferStockAdjustmentUpsertArgs} args - Arguments to update or create a TransferStockAdjustment.
     * @example
     * // Update or create a TransferStockAdjustment
     * const transferStockAdjustment = await prisma.transferStockAdjustment.upsert({
     *   create: {
     *     // ... data to create a TransferStockAdjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransferStockAdjustment we want to update
     *   }
     * })
     */
    upsert<T extends TransferStockAdjustmentUpsertArgs>(args: SelectSubset<T, TransferStockAdjustmentUpsertArgs<ExtArgs>>): Prisma__TransferStockAdjustmentClient<$Result.GetResult<Prisma.$TransferStockAdjustmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransferStockAdjustments that matches the filter.
     * @param {TransferStockAdjustmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const transferStockAdjustment = await prisma.transferStockAdjustment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TransferStockAdjustmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TransferStockAdjustment.
     * @param {TransferStockAdjustmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const transferStockAdjustment = await prisma.transferStockAdjustment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TransferStockAdjustmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TransferStockAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferStockAdjustmentCountArgs} args - Arguments to filter TransferStockAdjustments to count.
     * @example
     * // Count the number of TransferStockAdjustments
     * const count = await prisma.transferStockAdjustment.count({
     *   where: {
     *     // ... the filter for the TransferStockAdjustments we want to count
     *   }
     * })
    **/
    count<T extends TransferStockAdjustmentCountArgs>(
      args?: Subset<T, TransferStockAdjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransferStockAdjustmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransferStockAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferStockAdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransferStockAdjustmentAggregateArgs>(args: Subset<T, TransferStockAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetTransferStockAdjustmentAggregateType<T>>

    /**
     * Group by TransferStockAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferStockAdjustmentGroupByArgs} args - Group by arguments.
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
      T extends TransferStockAdjustmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransferStockAdjustmentGroupByArgs['orderBy'] }
        : { orderBy?: TransferStockAdjustmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransferStockAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferStockAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransferStockAdjustment model
   */
  readonly fields: TransferStockAdjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransferStockAdjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransferStockAdjustmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TransferStockAdjustment model
   */
  interface TransferStockAdjustmentFieldRefs {
    readonly id: FieldRef<"TransferStockAdjustment", 'String'>
    readonly referenceNumber: FieldRef<"TransferStockAdjustment", 'String'>
    readonly transferStockQty: FieldRef<"TransferStockAdjustment", 'Int'>
    readonly notes: FieldRef<"TransferStockAdjustment", 'String'>
    readonly givingWarehouseId: FieldRef<"TransferStockAdjustment", 'String'>
    readonly receivingWarehouseId: FieldRef<"TransferStockAdjustment", 'String'>
    readonly itemId: FieldRef<"TransferStockAdjustment", 'String'>
    readonly createdAt: FieldRef<"TransferStockAdjustment", 'DateTime'>
    readonly updatedAt: FieldRef<"TransferStockAdjustment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransferStockAdjustment findUnique
   */
  export type TransferStockAdjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which TransferStockAdjustment to fetch.
     */
    where: TransferStockAdjustmentWhereUniqueInput
  }

  /**
   * TransferStockAdjustment findUniqueOrThrow
   */
  export type TransferStockAdjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which TransferStockAdjustment to fetch.
     */
    where: TransferStockAdjustmentWhereUniqueInput
  }

  /**
   * TransferStockAdjustment findFirst
   */
  export type TransferStockAdjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which TransferStockAdjustment to fetch.
     */
    where?: TransferStockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferStockAdjustments to fetch.
     */
    orderBy?: TransferStockAdjustmentOrderByWithRelationInput | TransferStockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferStockAdjustments.
     */
    cursor?: TransferStockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferStockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferStockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferStockAdjustments.
     */
    distinct?: TransferStockAdjustmentScalarFieldEnum | TransferStockAdjustmentScalarFieldEnum[]
  }

  /**
   * TransferStockAdjustment findFirstOrThrow
   */
  export type TransferStockAdjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which TransferStockAdjustment to fetch.
     */
    where?: TransferStockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferStockAdjustments to fetch.
     */
    orderBy?: TransferStockAdjustmentOrderByWithRelationInput | TransferStockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferStockAdjustments.
     */
    cursor?: TransferStockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferStockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferStockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferStockAdjustments.
     */
    distinct?: TransferStockAdjustmentScalarFieldEnum | TransferStockAdjustmentScalarFieldEnum[]
  }

  /**
   * TransferStockAdjustment findMany
   */
  export type TransferStockAdjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which TransferStockAdjustments to fetch.
     */
    where?: TransferStockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferStockAdjustments to fetch.
     */
    orderBy?: TransferStockAdjustmentOrderByWithRelationInput | TransferStockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransferStockAdjustments.
     */
    cursor?: TransferStockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferStockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferStockAdjustments.
     */
    skip?: number
    distinct?: TransferStockAdjustmentScalarFieldEnum | TransferStockAdjustmentScalarFieldEnum[]
  }

  /**
   * TransferStockAdjustment create
   */
  export type TransferStockAdjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TransferStockAdjustment.
     */
    data: XOR<TransferStockAdjustmentCreateInput, TransferStockAdjustmentUncheckedCreateInput>
  }

  /**
   * TransferStockAdjustment createMany
   */
  export type TransferStockAdjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransferStockAdjustments.
     */
    data: TransferStockAdjustmentCreateManyInput | TransferStockAdjustmentCreateManyInput[]
  }

  /**
   * TransferStockAdjustment update
   */
  export type TransferStockAdjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TransferStockAdjustment.
     */
    data: XOR<TransferStockAdjustmentUpdateInput, TransferStockAdjustmentUncheckedUpdateInput>
    /**
     * Choose, which TransferStockAdjustment to update.
     */
    where: TransferStockAdjustmentWhereUniqueInput
  }

  /**
   * TransferStockAdjustment updateMany
   */
  export type TransferStockAdjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransferStockAdjustments.
     */
    data: XOR<TransferStockAdjustmentUpdateManyMutationInput, TransferStockAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which TransferStockAdjustments to update
     */
    where?: TransferStockAdjustmentWhereInput
    /**
     * Limit how many TransferStockAdjustments to update.
     */
    limit?: number
  }

  /**
   * TransferStockAdjustment upsert
   */
  export type TransferStockAdjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TransferStockAdjustment to update in case it exists.
     */
    where: TransferStockAdjustmentWhereUniqueInput
    /**
     * In case the TransferStockAdjustment found by the `where` argument doesn't exist, create a new TransferStockAdjustment with this data.
     */
    create: XOR<TransferStockAdjustmentCreateInput, TransferStockAdjustmentUncheckedCreateInput>
    /**
     * In case the TransferStockAdjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransferStockAdjustmentUpdateInput, TransferStockAdjustmentUncheckedUpdateInput>
  }

  /**
   * TransferStockAdjustment delete
   */
  export type TransferStockAdjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter which TransferStockAdjustment to delete.
     */
    where: TransferStockAdjustmentWhereUniqueInput
  }

  /**
   * TransferStockAdjustment deleteMany
   */
  export type TransferStockAdjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransferStockAdjustments to delete
     */
    where?: TransferStockAdjustmentWhereInput
    /**
     * Limit how many TransferStockAdjustments to delete.
     */
    limit?: number
  }

  /**
   * TransferStockAdjustment findRaw
   */
  export type TransferStockAdjustmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TransferStockAdjustment aggregateRaw
   */
  export type TransferStockAdjustmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TransferStockAdjustment without action
   */
  export type TransferStockAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferStockAdjustment
     */
    select?: TransferStockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferStockAdjustment
     */
    omit?: TransferStockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferStockAdjustmentInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    title: string | null
    phone: string | null
    email: string | null
    address: string | null
    contactPerson: string | null
    supplierCode: string | null
    paymentTerms: string | null
    taxID: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    title: string | null
    phone: string | null
    email: string | null
    address: string | null
    contactPerson: string | null
    supplierCode: string | null
    paymentTerms: string | null
    taxID: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    title: number
    phone: number
    email: number
    address: number
    contactPerson: number
    supplierCode: number
    paymentTerms: number
    taxID: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    title?: true
    phone?: true
    email?: true
    address?: true
    contactPerson?: true
    supplierCode?: true
    paymentTerms?: true
    taxID?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    title?: true
    phone?: true
    email?: true
    address?: true
    contactPerson?: true
    supplierCode?: true
    paymentTerms?: true
    taxID?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    title?: true
    phone?: true
    email?: true
    address?: true
    contactPerson?: true
    supplierCode?: true
    paymentTerms?: true
    taxID?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    title: string
    phone: string | null
    email: string | null
    address: string | null
    contactPerson: string | null
    supplierCode: string
    paymentTerms: string | null
    taxID: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    contactPerson?: boolean
    supplierCode?: boolean
    paymentTerms?: boolean
    taxID?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Item?: boolean | Supplier$ItemArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>



  export type SupplierSelectScalar = {
    id?: boolean
    title?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    contactPerson?: boolean
    supplierCode?: boolean
    paymentTerms?: boolean
    taxID?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "phone" | "email" | "address" | "contactPerson" | "supplierCode" | "paymentTerms" | "taxID" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | Supplier$ItemArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      Item: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      phone: string | null
      email: string | null
      address: string | null
      contactPerson: string | null
      supplierCode: string
      paymentTerms: string | null
      taxID: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * @param {SupplierFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const supplier = await prisma.supplier.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SupplierFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Supplier.
     * @param {SupplierAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const supplier = await prisma.supplier.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SupplierAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Item<T extends Supplier$ItemArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly title: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly contactPerson: FieldRef<"Supplier", 'String'>
    readonly supplierCode: FieldRef<"Supplier", 'String'>
    readonly paymentTerms: FieldRef<"Supplier", 'String'>
    readonly taxID: FieldRef<"Supplier", 'String'>
    readonly notes: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier findRaw
   */
  export type SupplierFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Supplier aggregateRaw
   */
  export type SupplierAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Supplier.Item
   */
  export type Supplier$ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    categoryId: 'categoryId',
    sku: 'sku',
    barcode: 'barcode',
    quantity: 'quantity',
    unitId: 'unitId',
    brandId: 'brandId',
    warehouseId: 'warehouseId',
    sellingPrice: 'sellingPrice',
    buyingPrice: 'buyingPrice',
    supplierId: 'supplierId',
    reOrderPoint: 'reOrderPoint',
    location: 'location',
    imageUrl: 'imageUrl',
    weight: 'weight',
    dimensions: 'dimensions',
    taxRate: 'taxRate',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    title: 'title',
    abbreviation: 'abbreviation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    location: 'location',
    description: 'description',
    warehouseType: 'warehouseType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const AddStockAdjustmentScalarFieldEnum: {
    id: 'id',
    referenceNumber: 'referenceNumber',
    addStockQty: 'addStockQty',
    notes: 'notes',
    receivingWarehouseId: 'receivingWarehouseId',
    itemId: 'itemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddStockAdjustmentScalarFieldEnum = (typeof AddStockAdjustmentScalarFieldEnum)[keyof typeof AddStockAdjustmentScalarFieldEnum]


  export const TransferStockAdjustmentScalarFieldEnum: {
    id: 'id',
    referenceNumber: 'referenceNumber',
    transferStockQty: 'transferStockQty',
    notes: 'notes',
    givingWarehouseId: 'givingWarehouseId',
    receivingWarehouseId: 'receivingWarehouseId',
    itemId: 'itemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransferStockAdjustmentScalarFieldEnum = (typeof TransferStockAdjustmentScalarFieldEnum)[keyof typeof TransferStockAdjustmentScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    title: 'title',
    phone: 'phone',
    email: 'email',
    address: 'address',
    contactPerson: 'contactPerson',
    supplierCode: 'supplierCode',
    paymentTerms: 'paymentTerms',
    taxID: 'taxID',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    title?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    categoryId?: StringFilter<"Item"> | string
    sku?: StringFilter<"Item"> | string
    barcode?: StringNullableFilter<"Item"> | string | null
    quantity?: IntFilter<"Item"> | number
    unitId?: StringFilter<"Item"> | string
    brandId?: StringFilter<"Item"> | string
    warehouseId?: StringFilter<"Item"> | string
    sellingPrice?: FloatFilter<"Item"> | number
    buyingPrice?: FloatFilter<"Item"> | number
    supplierId?: StringFilter<"Item"> | string
    reOrderPoint?: IntFilter<"Item"> | number
    location?: StringNullableFilter<"Item"> | string | null
    imageUrl?: StringFilter<"Item"> | string
    weight?: FloatNullableFilter<"Item"> | number | null
    dimensions?: StringNullableFilter<"Item"> | string | null
    taxRate?: FloatFilter<"Item"> | number
    notes?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    AddStockAdjustment?: AddStockAdjustmentListRelationFilter
    TransferStockAdjustment?: TransferStockAdjustmentListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    quantity?: SortOrder
    unitId?: SortOrder
    brandId?: SortOrder
    warehouseId?: SortOrder
    sellingPrice?: SortOrder
    buyingPrice?: SortOrder
    supplierId?: SortOrder
    reOrderPoint?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrder
    taxRate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    brand?: BrandOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
    AddStockAdjustment?: AddStockAdjustmentOrderByRelationAggregateInput
    TransferStockAdjustment?: TransferStockAdjustmentOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    title?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    categoryId?: StringFilter<"Item"> | string
    barcode?: StringNullableFilter<"Item"> | string | null
    quantity?: IntFilter<"Item"> | number
    unitId?: StringFilter<"Item"> | string
    brandId?: StringFilter<"Item"> | string
    warehouseId?: StringFilter<"Item"> | string
    sellingPrice?: FloatFilter<"Item"> | number
    buyingPrice?: FloatFilter<"Item"> | number
    supplierId?: StringFilter<"Item"> | string
    reOrderPoint?: IntFilter<"Item"> | number
    location?: StringNullableFilter<"Item"> | string | null
    imageUrl?: StringFilter<"Item"> | string
    weight?: FloatNullableFilter<"Item"> | number | null
    dimensions?: StringNullableFilter<"Item"> | string | null
    taxRate?: FloatFilter<"Item"> | number
    notes?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    AddStockAdjustment?: AddStockAdjustmentListRelationFilter
    TransferStockAdjustment?: TransferStockAdjustmentListRelationFilter
  }, "id" | "sku">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    quantity?: SortOrder
    unitId?: SortOrder
    brandId?: SortOrder
    warehouseId?: SortOrder
    sellingPrice?: SortOrder
    buyingPrice?: SortOrder
    supplierId?: SortOrder
    reOrderPoint?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrder
    taxRate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    title?: StringWithAggregatesFilter<"Item"> | string
    description?: StringNullableWithAggregatesFilter<"Item"> | string | null
    categoryId?: StringWithAggregatesFilter<"Item"> | string
    sku?: StringWithAggregatesFilter<"Item"> | string
    barcode?: StringNullableWithAggregatesFilter<"Item"> | string | null
    quantity?: IntWithAggregatesFilter<"Item"> | number
    unitId?: StringWithAggregatesFilter<"Item"> | string
    brandId?: StringWithAggregatesFilter<"Item"> | string
    warehouseId?: StringWithAggregatesFilter<"Item"> | string
    sellingPrice?: FloatWithAggregatesFilter<"Item"> | number
    buyingPrice?: FloatWithAggregatesFilter<"Item"> | number
    supplierId?: StringWithAggregatesFilter<"Item"> | string
    reOrderPoint?: IntWithAggregatesFilter<"Item"> | number
    location?: StringNullableWithAggregatesFilter<"Item"> | string | null
    imageUrl?: StringWithAggregatesFilter<"Item"> | string
    weight?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    dimensions?: StringNullableWithAggregatesFilter<"Item"> | string | null
    taxRate?: FloatWithAggregatesFilter<"Item"> | number
    notes?: StringNullableWithAggregatesFilter<"Item"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    title?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    Item?: ItemListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Item?: ItemOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    title?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    Item?: ItemListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    title?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    title?: StringFilter<"Unit"> | string
    abbreviation?: StringFilter<"Unit"> | string
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    Item?: ItemListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Item?: ItemOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    title?: StringFilter<"Unit"> | string
    abbreviation?: StringFilter<"Unit"> | string
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    Item?: ItemListRelationFilter
  }, "id">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    title?: StringWithAggregatesFilter<"Unit"> | string
    abbreviation?: StringWithAggregatesFilter<"Unit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    title?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    Item?: ItemListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Item?: ItemOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    title?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    Item?: ItemListRelationFilter
  }, "id">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    title?: StringWithAggregatesFilter<"Brand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: StringFilter<"Warehouse"> | string
    title?: StringFilter<"Warehouse"> | string
    location?: StringNullableFilter<"Warehouse"> | string | null
    description?: StringNullableFilter<"Warehouse"> | string | null
    warehouseType?: StringFilter<"Warehouse"> | string
    createdAt?: DateTimeFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouse"> | Date | string
    Item?: ItemListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    description?: SortOrder
    warehouseType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Item?: ItemOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    title?: StringFilter<"Warehouse"> | string
    location?: StringNullableFilter<"Warehouse"> | string | null
    description?: StringNullableFilter<"Warehouse"> | string | null
    warehouseType?: StringFilter<"Warehouse"> | string
    createdAt?: DateTimeFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouse"> | Date | string
    Item?: ItemListRelationFilter
  }, "id">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    description?: SortOrder
    warehouseType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Warehouse"> | string
    title?: StringWithAggregatesFilter<"Warehouse"> | string
    location?: StringNullableWithAggregatesFilter<"Warehouse"> | string | null
    description?: StringNullableWithAggregatesFilter<"Warehouse"> | string | null
    warehouseType?: StringWithAggregatesFilter<"Warehouse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
  }

  export type AddStockAdjustmentWhereInput = {
    AND?: AddStockAdjustmentWhereInput | AddStockAdjustmentWhereInput[]
    OR?: AddStockAdjustmentWhereInput[]
    NOT?: AddStockAdjustmentWhereInput | AddStockAdjustmentWhereInput[]
    id?: StringFilter<"AddStockAdjustment"> | string
    referenceNumber?: StringFilter<"AddStockAdjustment"> | string
    addStockQty?: IntFilter<"AddStockAdjustment"> | number
    notes?: StringNullableFilter<"AddStockAdjustment"> | string | null
    receivingWarehouseId?: StringFilter<"AddStockAdjustment"> | string
    itemId?: StringFilter<"AddStockAdjustment"> | string
    createdAt?: DateTimeFilter<"AddStockAdjustment"> | Date | string
    updatedAt?: DateTimeFilter<"AddStockAdjustment"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type AddStockAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    addStockQty?: SortOrder
    notes?: SortOrder
    receivingWarehouseId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    item?: ItemOrderByWithRelationInput
  }

  export type AddStockAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddStockAdjustmentWhereInput | AddStockAdjustmentWhereInput[]
    OR?: AddStockAdjustmentWhereInput[]
    NOT?: AddStockAdjustmentWhereInput | AddStockAdjustmentWhereInput[]
    referenceNumber?: StringFilter<"AddStockAdjustment"> | string
    addStockQty?: IntFilter<"AddStockAdjustment"> | number
    notes?: StringNullableFilter<"AddStockAdjustment"> | string | null
    receivingWarehouseId?: StringFilter<"AddStockAdjustment"> | string
    itemId?: StringFilter<"AddStockAdjustment"> | string
    createdAt?: DateTimeFilter<"AddStockAdjustment"> | Date | string
    updatedAt?: DateTimeFilter<"AddStockAdjustment"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type AddStockAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    addStockQty?: SortOrder
    notes?: SortOrder
    receivingWarehouseId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddStockAdjustmentCountOrderByAggregateInput
    _avg?: AddStockAdjustmentAvgOrderByAggregateInput
    _max?: AddStockAdjustmentMaxOrderByAggregateInput
    _min?: AddStockAdjustmentMinOrderByAggregateInput
    _sum?: AddStockAdjustmentSumOrderByAggregateInput
  }

  export type AddStockAdjustmentScalarWhereWithAggregatesInput = {
    AND?: AddStockAdjustmentScalarWhereWithAggregatesInput | AddStockAdjustmentScalarWhereWithAggregatesInput[]
    OR?: AddStockAdjustmentScalarWhereWithAggregatesInput[]
    NOT?: AddStockAdjustmentScalarWhereWithAggregatesInput | AddStockAdjustmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AddStockAdjustment"> | string
    referenceNumber?: StringWithAggregatesFilter<"AddStockAdjustment"> | string
    addStockQty?: IntWithAggregatesFilter<"AddStockAdjustment"> | number
    notes?: StringNullableWithAggregatesFilter<"AddStockAdjustment"> | string | null
    receivingWarehouseId?: StringWithAggregatesFilter<"AddStockAdjustment"> | string
    itemId?: StringWithAggregatesFilter<"AddStockAdjustment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AddStockAdjustment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AddStockAdjustment"> | Date | string
  }

  export type TransferStockAdjustmentWhereInput = {
    AND?: TransferStockAdjustmentWhereInput | TransferStockAdjustmentWhereInput[]
    OR?: TransferStockAdjustmentWhereInput[]
    NOT?: TransferStockAdjustmentWhereInput | TransferStockAdjustmentWhereInput[]
    id?: StringFilter<"TransferStockAdjustment"> | string
    referenceNumber?: StringFilter<"TransferStockAdjustment"> | string
    transferStockQty?: IntFilter<"TransferStockAdjustment"> | number
    notes?: StringNullableFilter<"TransferStockAdjustment"> | string | null
    givingWarehouseId?: StringFilter<"TransferStockAdjustment"> | string
    receivingWarehouseId?: StringFilter<"TransferStockAdjustment"> | string
    itemId?: StringFilter<"TransferStockAdjustment"> | string
    createdAt?: DateTimeFilter<"TransferStockAdjustment"> | Date | string
    updatedAt?: DateTimeFilter<"TransferStockAdjustment"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type TransferStockAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    transferStockQty?: SortOrder
    notes?: SortOrder
    givingWarehouseId?: SortOrder
    receivingWarehouseId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    item?: ItemOrderByWithRelationInput
  }

  export type TransferStockAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransferStockAdjustmentWhereInput | TransferStockAdjustmentWhereInput[]
    OR?: TransferStockAdjustmentWhereInput[]
    NOT?: TransferStockAdjustmentWhereInput | TransferStockAdjustmentWhereInput[]
    referenceNumber?: StringFilter<"TransferStockAdjustment"> | string
    transferStockQty?: IntFilter<"TransferStockAdjustment"> | number
    notes?: StringNullableFilter<"TransferStockAdjustment"> | string | null
    givingWarehouseId?: StringFilter<"TransferStockAdjustment"> | string
    receivingWarehouseId?: StringFilter<"TransferStockAdjustment"> | string
    itemId?: StringFilter<"TransferStockAdjustment"> | string
    createdAt?: DateTimeFilter<"TransferStockAdjustment"> | Date | string
    updatedAt?: DateTimeFilter<"TransferStockAdjustment"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type TransferStockAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    transferStockQty?: SortOrder
    notes?: SortOrder
    givingWarehouseId?: SortOrder
    receivingWarehouseId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransferStockAdjustmentCountOrderByAggregateInput
    _avg?: TransferStockAdjustmentAvgOrderByAggregateInput
    _max?: TransferStockAdjustmentMaxOrderByAggregateInput
    _min?: TransferStockAdjustmentMinOrderByAggregateInput
    _sum?: TransferStockAdjustmentSumOrderByAggregateInput
  }

  export type TransferStockAdjustmentScalarWhereWithAggregatesInput = {
    AND?: TransferStockAdjustmentScalarWhereWithAggregatesInput | TransferStockAdjustmentScalarWhereWithAggregatesInput[]
    OR?: TransferStockAdjustmentScalarWhereWithAggregatesInput[]
    NOT?: TransferStockAdjustmentScalarWhereWithAggregatesInput | TransferStockAdjustmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransferStockAdjustment"> | string
    referenceNumber?: StringWithAggregatesFilter<"TransferStockAdjustment"> | string
    transferStockQty?: IntWithAggregatesFilter<"TransferStockAdjustment"> | number
    notes?: StringNullableWithAggregatesFilter<"TransferStockAdjustment"> | string | null
    givingWarehouseId?: StringWithAggregatesFilter<"TransferStockAdjustment"> | string
    receivingWarehouseId?: StringWithAggregatesFilter<"TransferStockAdjustment"> | string
    itemId?: StringWithAggregatesFilter<"TransferStockAdjustment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TransferStockAdjustment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransferStockAdjustment"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    title?: StringFilter<"Supplier"> | string
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    contactPerson?: StringNullableFilter<"Supplier"> | string | null
    supplierCode?: StringFilter<"Supplier"> | string
    paymentTerms?: StringNullableFilter<"Supplier"> | string | null
    taxID?: StringNullableFilter<"Supplier"> | string | null
    notes?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    Item?: ItemListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    contactPerson?: SortOrder
    supplierCode?: SortOrder
    paymentTerms?: SortOrder
    taxID?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Item?: ItemOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supplierCode?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    title?: StringFilter<"Supplier"> | string
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    contactPerson?: StringNullableFilter<"Supplier"> | string | null
    paymentTerms?: StringNullableFilter<"Supplier"> | string | null
    taxID?: StringNullableFilter<"Supplier"> | string | null
    notes?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    Item?: ItemListRelationFilter
  }, "id" | "supplierCode">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    contactPerson?: SortOrder
    supplierCode?: SortOrder
    paymentTerms?: SortOrder
    taxID?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    title?: StringWithAggregatesFilter<"Supplier"> | string
    phone?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    address?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    contactPerson?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    supplierCode?: StringWithAggregatesFilter<"Supplier"> | string
    paymentTerms?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    taxID?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type ItemCreateInput = {
    id?: string
    title: string
    description?: string | null
    sku: string
    barcode?: string | null
    quantity: number
    sellingPrice: number
    buyingPrice: number
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutItemInput
    unit: UnitCreateNestedOneWithoutItemInput
    brand: BrandCreateNestedOneWithoutItemInput
    warehouse: WarehouseCreateNestedOneWithoutItemInput
    supplier: SupplierCreateNestedOneWithoutItemInput
    AddStockAdjustment?: AddStockAdjustmentCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemNestedInput
    unit?: UnitUpdateOneRequiredWithoutItemNestedInput
    brand?: BrandUpdateOneRequiredWithoutItemNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutItemNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutItemNestedInput
    AddStockAdjustment?: AddStockAdjustmentUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    id?: string
    title: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    title: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    title: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseCreateInput = {
    id?: string
    title: string
    location?: string | null
    description?: string | null
    warehouseType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: string
    title: string
    location?: string | null
    description?: string | null
    warehouseType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    warehouseType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    warehouseType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: string
    title: string
    location?: string | null
    description?: string | null
    warehouseType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehouseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    warehouseType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    warehouseType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddStockAdjustmentCreateInput = {
    id?: string
    referenceNumber: string
    addStockQty: number
    notes?: string | null
    receivingWarehouseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutAddStockAdjustmentInput
  }

  export type AddStockAdjustmentUncheckedCreateInput = {
    id?: string
    referenceNumber: string
    addStockQty: number
    notes?: string | null
    receivingWarehouseId: string
    itemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddStockAdjustmentUpdateInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    addStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutAddStockAdjustmentNestedInput
  }

  export type AddStockAdjustmentUncheckedUpdateInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    addStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddStockAdjustmentCreateManyInput = {
    id?: string
    referenceNumber: string
    addStockQty: number
    notes?: string | null
    receivingWarehouseId: string
    itemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddStockAdjustmentUpdateManyMutationInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    addStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddStockAdjustmentUncheckedUpdateManyInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    addStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferStockAdjustmentCreateInput = {
    id?: string
    referenceNumber: string
    transferStockQty: number
    notes?: string | null
    givingWarehouseId: string
    receivingWarehouseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutTransferStockAdjustmentInput
  }

  export type TransferStockAdjustmentUncheckedCreateInput = {
    id?: string
    referenceNumber: string
    transferStockQty: number
    notes?: string | null
    givingWarehouseId: string
    receivingWarehouseId: string
    itemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferStockAdjustmentUpdateInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    transferStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    givingWarehouseId?: StringFieldUpdateOperationsInput | string
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutTransferStockAdjustmentNestedInput
  }

  export type TransferStockAdjustmentUncheckedUpdateInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    transferStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    givingWarehouseId?: StringFieldUpdateOperationsInput | string
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferStockAdjustmentCreateManyInput = {
    id?: string
    referenceNumber: string
    transferStockQty: number
    notes?: string | null
    givingWarehouseId: string
    receivingWarehouseId: string
    itemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferStockAdjustmentUpdateManyMutationInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    transferStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    givingWarehouseId?: StringFieldUpdateOperationsInput | string
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferStockAdjustmentUncheckedUpdateManyInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    transferStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    givingWarehouseId?: StringFieldUpdateOperationsInput | string
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    title: string
    phone?: string | null
    email?: string | null
    address?: string | null
    contactPerson?: string | null
    supplierCode: string
    paymentTerms?: string | null
    taxID?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    title: string
    phone?: string | null
    email?: string | null
    address?: string | null
    contactPerson?: string | null
    supplierCode: string
    paymentTerms?: string | null
    taxID?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: StringFieldUpdateOperationsInput | string
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: StringFieldUpdateOperationsInput | string
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    title: string
    phone?: string | null
    email?: string | null
    address?: string | null
    contactPerson?: string | null
    supplierCode: string
    paymentTerms?: string | null
    taxID?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: StringFieldUpdateOperationsInput | string
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: StringFieldUpdateOperationsInput | string
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type WarehouseScalarRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type AddStockAdjustmentListRelationFilter = {
    every?: AddStockAdjustmentWhereInput
    some?: AddStockAdjustmentWhereInput
    none?: AddStockAdjustmentWhereInput
  }

  export type TransferStockAdjustmentListRelationFilter = {
    every?: TransferStockAdjustmentWhereInput
    some?: TransferStockAdjustmentWhereInput
    none?: TransferStockAdjustmentWhereInput
  }

  export type AddStockAdjustmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransferStockAdjustmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    quantity?: SortOrder
    unitId?: SortOrder
    brandId?: SortOrder
    warehouseId?: SortOrder
    sellingPrice?: SortOrder
    buyingPrice?: SortOrder
    supplierId?: SortOrder
    reOrderPoint?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrder
    taxRate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    sellingPrice?: SortOrder
    buyingPrice?: SortOrder
    reOrderPoint?: SortOrder
    weight?: SortOrder
    taxRate?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    quantity?: SortOrder
    unitId?: SortOrder
    brandId?: SortOrder
    warehouseId?: SortOrder
    sellingPrice?: SortOrder
    buyingPrice?: SortOrder
    supplierId?: SortOrder
    reOrderPoint?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrder
    taxRate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    quantity?: SortOrder
    unitId?: SortOrder
    brandId?: SortOrder
    warehouseId?: SortOrder
    sellingPrice?: SortOrder
    buyingPrice?: SortOrder
    supplierId?: SortOrder
    reOrderPoint?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrder
    taxRate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    sellingPrice?: SortOrder
    buyingPrice?: SortOrder
    reOrderPoint?: SortOrder
    weight?: SortOrder
    taxRate?: SortOrder
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
    isSet?: boolean
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    description?: SortOrder
    warehouseType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    description?: SortOrder
    warehouseType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    description?: SortOrder
    warehouseType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type AddStockAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    addStockQty?: SortOrder
    notes?: SortOrder
    receivingWarehouseId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddStockAdjustmentAvgOrderByAggregateInput = {
    addStockQty?: SortOrder
  }

  export type AddStockAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    addStockQty?: SortOrder
    notes?: SortOrder
    receivingWarehouseId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddStockAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    addStockQty?: SortOrder
    notes?: SortOrder
    receivingWarehouseId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddStockAdjustmentSumOrderByAggregateInput = {
    addStockQty?: SortOrder
  }

  export type TransferStockAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    transferStockQty?: SortOrder
    notes?: SortOrder
    givingWarehouseId?: SortOrder
    receivingWarehouseId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransferStockAdjustmentAvgOrderByAggregateInput = {
    transferStockQty?: SortOrder
  }

  export type TransferStockAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    transferStockQty?: SortOrder
    notes?: SortOrder
    givingWarehouseId?: SortOrder
    receivingWarehouseId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransferStockAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    transferStockQty?: SortOrder
    notes?: SortOrder
    givingWarehouseId?: SortOrder
    receivingWarehouseId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransferStockAdjustmentSumOrderByAggregateInput = {
    transferStockQty?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    contactPerson?: SortOrder
    supplierCode?: SortOrder
    paymentTerms?: SortOrder
    taxID?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    contactPerson?: SortOrder
    supplierCode?: SortOrder
    paymentTerms?: SortOrder
    taxID?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    contactPerson?: SortOrder
    supplierCode?: SortOrder
    paymentTerms?: SortOrder
    taxID?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutItemInput = {
    create?: XOR<CategoryCreateWithoutItemInput, CategoryUncheckedCreateWithoutItemInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutItemInput
    connect?: CategoryWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutItemInput = {
    create?: XOR<UnitCreateWithoutItemInput, UnitUncheckedCreateWithoutItemInput>
    connectOrCreate?: UnitCreateOrConnectWithoutItemInput
    connect?: UnitWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutItemInput = {
    create?: XOR<BrandCreateWithoutItemInput, BrandUncheckedCreateWithoutItemInput>
    connectOrCreate?: BrandCreateOrConnectWithoutItemInput
    connect?: BrandWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutItemInput = {
    create?: XOR<WarehouseCreateWithoutItemInput, WarehouseUncheckedCreateWithoutItemInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutItemInput
    connect?: WarehouseWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutItemInput = {
    create?: XOR<SupplierCreateWithoutItemInput, SupplierUncheckedCreateWithoutItemInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutItemInput
    connect?: SupplierWhereUniqueInput
  }

  export type AddStockAdjustmentCreateNestedManyWithoutItemInput = {
    create?: XOR<AddStockAdjustmentCreateWithoutItemInput, AddStockAdjustmentUncheckedCreateWithoutItemInput> | AddStockAdjustmentCreateWithoutItemInput[] | AddStockAdjustmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AddStockAdjustmentCreateOrConnectWithoutItemInput | AddStockAdjustmentCreateOrConnectWithoutItemInput[]
    createMany?: AddStockAdjustmentCreateManyItemInputEnvelope
    connect?: AddStockAdjustmentWhereUniqueInput | AddStockAdjustmentWhereUniqueInput[]
  }

  export type TransferStockAdjustmentCreateNestedManyWithoutItemInput = {
    create?: XOR<TransferStockAdjustmentCreateWithoutItemInput, TransferStockAdjustmentUncheckedCreateWithoutItemInput> | TransferStockAdjustmentCreateWithoutItemInput[] | TransferStockAdjustmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TransferStockAdjustmentCreateOrConnectWithoutItemInput | TransferStockAdjustmentCreateOrConnectWithoutItemInput[]
    createMany?: TransferStockAdjustmentCreateManyItemInputEnvelope
    connect?: TransferStockAdjustmentWhereUniqueInput | TransferStockAdjustmentWhereUniqueInput[]
  }

  export type AddStockAdjustmentUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<AddStockAdjustmentCreateWithoutItemInput, AddStockAdjustmentUncheckedCreateWithoutItemInput> | AddStockAdjustmentCreateWithoutItemInput[] | AddStockAdjustmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AddStockAdjustmentCreateOrConnectWithoutItemInput | AddStockAdjustmentCreateOrConnectWithoutItemInput[]
    createMany?: AddStockAdjustmentCreateManyItemInputEnvelope
    connect?: AddStockAdjustmentWhereUniqueInput | AddStockAdjustmentWhereUniqueInput[]
  }

  export type TransferStockAdjustmentUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<TransferStockAdjustmentCreateWithoutItemInput, TransferStockAdjustmentUncheckedCreateWithoutItemInput> | TransferStockAdjustmentCreateWithoutItemInput[] | TransferStockAdjustmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TransferStockAdjustmentCreateOrConnectWithoutItemInput | TransferStockAdjustmentCreateOrConnectWithoutItemInput[]
    createMany?: TransferStockAdjustmentCreateManyItemInputEnvelope
    connect?: TransferStockAdjustmentWhereUniqueInput | TransferStockAdjustmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneRequiredWithoutItemNestedInput = {
    create?: XOR<CategoryCreateWithoutItemInput, CategoryUncheckedCreateWithoutItemInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutItemInput
    upsert?: CategoryUpsertWithoutItemInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutItemInput, CategoryUpdateWithoutItemInput>, CategoryUncheckedUpdateWithoutItemInput>
  }

  export type UnitUpdateOneRequiredWithoutItemNestedInput = {
    create?: XOR<UnitCreateWithoutItemInput, UnitUncheckedCreateWithoutItemInput>
    connectOrCreate?: UnitCreateOrConnectWithoutItemInput
    upsert?: UnitUpsertWithoutItemInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutItemInput, UnitUpdateWithoutItemInput>, UnitUncheckedUpdateWithoutItemInput>
  }

  export type BrandUpdateOneRequiredWithoutItemNestedInput = {
    create?: XOR<BrandCreateWithoutItemInput, BrandUncheckedCreateWithoutItemInput>
    connectOrCreate?: BrandCreateOrConnectWithoutItemInput
    upsert?: BrandUpsertWithoutItemInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutItemInput, BrandUpdateWithoutItemInput>, BrandUncheckedUpdateWithoutItemInput>
  }

  export type WarehouseUpdateOneRequiredWithoutItemNestedInput = {
    create?: XOR<WarehouseCreateWithoutItemInput, WarehouseUncheckedCreateWithoutItemInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutItemInput
    upsert?: WarehouseUpsertWithoutItemInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutItemInput, WarehouseUpdateWithoutItemInput>, WarehouseUncheckedUpdateWithoutItemInput>
  }

  export type SupplierUpdateOneRequiredWithoutItemNestedInput = {
    create?: XOR<SupplierCreateWithoutItemInput, SupplierUncheckedCreateWithoutItemInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutItemInput
    upsert?: SupplierUpsertWithoutItemInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutItemInput, SupplierUpdateWithoutItemInput>, SupplierUncheckedUpdateWithoutItemInput>
  }

  export type AddStockAdjustmentUpdateManyWithoutItemNestedInput = {
    create?: XOR<AddStockAdjustmentCreateWithoutItemInput, AddStockAdjustmentUncheckedCreateWithoutItemInput> | AddStockAdjustmentCreateWithoutItemInput[] | AddStockAdjustmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AddStockAdjustmentCreateOrConnectWithoutItemInput | AddStockAdjustmentCreateOrConnectWithoutItemInput[]
    upsert?: AddStockAdjustmentUpsertWithWhereUniqueWithoutItemInput | AddStockAdjustmentUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: AddStockAdjustmentCreateManyItemInputEnvelope
    set?: AddStockAdjustmentWhereUniqueInput | AddStockAdjustmentWhereUniqueInput[]
    disconnect?: AddStockAdjustmentWhereUniqueInput | AddStockAdjustmentWhereUniqueInput[]
    delete?: AddStockAdjustmentWhereUniqueInput | AddStockAdjustmentWhereUniqueInput[]
    connect?: AddStockAdjustmentWhereUniqueInput | AddStockAdjustmentWhereUniqueInput[]
    update?: AddStockAdjustmentUpdateWithWhereUniqueWithoutItemInput | AddStockAdjustmentUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: AddStockAdjustmentUpdateManyWithWhereWithoutItemInput | AddStockAdjustmentUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: AddStockAdjustmentScalarWhereInput | AddStockAdjustmentScalarWhereInput[]
  }

  export type TransferStockAdjustmentUpdateManyWithoutItemNestedInput = {
    create?: XOR<TransferStockAdjustmentCreateWithoutItemInput, TransferStockAdjustmentUncheckedCreateWithoutItemInput> | TransferStockAdjustmentCreateWithoutItemInput[] | TransferStockAdjustmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TransferStockAdjustmentCreateOrConnectWithoutItemInput | TransferStockAdjustmentCreateOrConnectWithoutItemInput[]
    upsert?: TransferStockAdjustmentUpsertWithWhereUniqueWithoutItemInput | TransferStockAdjustmentUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: TransferStockAdjustmentCreateManyItemInputEnvelope
    set?: TransferStockAdjustmentWhereUniqueInput | TransferStockAdjustmentWhereUniqueInput[]
    disconnect?: TransferStockAdjustmentWhereUniqueInput | TransferStockAdjustmentWhereUniqueInput[]
    delete?: TransferStockAdjustmentWhereUniqueInput | TransferStockAdjustmentWhereUniqueInput[]
    connect?: TransferStockAdjustmentWhereUniqueInput | TransferStockAdjustmentWhereUniqueInput[]
    update?: TransferStockAdjustmentUpdateWithWhereUniqueWithoutItemInput | TransferStockAdjustmentUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: TransferStockAdjustmentUpdateManyWithWhereWithoutItemInput | TransferStockAdjustmentUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: TransferStockAdjustmentScalarWhereInput | TransferStockAdjustmentScalarWhereInput[]
  }

  export type AddStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<AddStockAdjustmentCreateWithoutItemInput, AddStockAdjustmentUncheckedCreateWithoutItemInput> | AddStockAdjustmentCreateWithoutItemInput[] | AddStockAdjustmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AddStockAdjustmentCreateOrConnectWithoutItemInput | AddStockAdjustmentCreateOrConnectWithoutItemInput[]
    upsert?: AddStockAdjustmentUpsertWithWhereUniqueWithoutItemInput | AddStockAdjustmentUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: AddStockAdjustmentCreateManyItemInputEnvelope
    set?: AddStockAdjustmentWhereUniqueInput | AddStockAdjustmentWhereUniqueInput[]
    disconnect?: AddStockAdjustmentWhereUniqueInput | AddStockAdjustmentWhereUniqueInput[]
    delete?: AddStockAdjustmentWhereUniqueInput | AddStockAdjustmentWhereUniqueInput[]
    connect?: AddStockAdjustmentWhereUniqueInput | AddStockAdjustmentWhereUniqueInput[]
    update?: AddStockAdjustmentUpdateWithWhereUniqueWithoutItemInput | AddStockAdjustmentUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: AddStockAdjustmentUpdateManyWithWhereWithoutItemInput | AddStockAdjustmentUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: AddStockAdjustmentScalarWhereInput | AddStockAdjustmentScalarWhereInput[]
  }

  export type TransferStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<TransferStockAdjustmentCreateWithoutItemInput, TransferStockAdjustmentUncheckedCreateWithoutItemInput> | TransferStockAdjustmentCreateWithoutItemInput[] | TransferStockAdjustmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TransferStockAdjustmentCreateOrConnectWithoutItemInput | TransferStockAdjustmentCreateOrConnectWithoutItemInput[]
    upsert?: TransferStockAdjustmentUpsertWithWhereUniqueWithoutItemInput | TransferStockAdjustmentUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: TransferStockAdjustmentCreateManyItemInputEnvelope
    set?: TransferStockAdjustmentWhereUniqueInput | TransferStockAdjustmentWhereUniqueInput[]
    disconnect?: TransferStockAdjustmentWhereUniqueInput | TransferStockAdjustmentWhereUniqueInput[]
    delete?: TransferStockAdjustmentWhereUniqueInput | TransferStockAdjustmentWhereUniqueInput[]
    connect?: TransferStockAdjustmentWhereUniqueInput | TransferStockAdjustmentWhereUniqueInput[]
    update?: TransferStockAdjustmentUpdateWithWhereUniqueWithoutItemInput | TransferStockAdjustmentUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: TransferStockAdjustmentUpdateManyWithWhereWithoutItemInput | TransferStockAdjustmentUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: TransferStockAdjustmentScalarWhereInput | TransferStockAdjustmentScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput> | ItemCreateWithoutCategoryInput[] | ItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryInput | ItemCreateOrConnectWithoutCategoryInput[]
    createMany?: ItemCreateManyCategoryInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput> | ItemCreateWithoutCategoryInput[] | ItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryInput | ItemCreateOrConnectWithoutCategoryInput[]
    createMany?: ItemCreateManyCategoryInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput> | ItemCreateWithoutCategoryInput[] | ItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryInput | ItemCreateOrConnectWithoutCategoryInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCategoryInput | ItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ItemCreateManyCategoryInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCategoryInput | ItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCategoryInput | ItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput> | ItemCreateWithoutCategoryInput[] | ItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryInput | ItemCreateOrConnectWithoutCategoryInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCategoryInput | ItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ItemCreateManyCategoryInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCategoryInput | ItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCategoryInput | ItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutUnitInput = {
    create?: XOR<ItemCreateWithoutUnitInput, ItemUncheckedCreateWithoutUnitInput> | ItemCreateWithoutUnitInput[] | ItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUnitInput | ItemCreateOrConnectWithoutUnitInput[]
    createMany?: ItemCreateManyUnitInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<ItemCreateWithoutUnitInput, ItemUncheckedCreateWithoutUnitInput> | ItemCreateWithoutUnitInput[] | ItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUnitInput | ItemCreateOrConnectWithoutUnitInput[]
    createMany?: ItemCreateManyUnitInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ItemCreateWithoutUnitInput, ItemUncheckedCreateWithoutUnitInput> | ItemCreateWithoutUnitInput[] | ItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUnitInput | ItemCreateOrConnectWithoutUnitInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutUnitInput | ItemUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ItemCreateManyUnitInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutUnitInput | ItemUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutUnitInput | ItemUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ItemCreateWithoutUnitInput, ItemUncheckedCreateWithoutUnitInput> | ItemCreateWithoutUnitInput[] | ItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUnitInput | ItemCreateOrConnectWithoutUnitInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutUnitInput | ItemUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ItemCreateManyUnitInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutUnitInput | ItemUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutUnitInput | ItemUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutBrandInput = {
    create?: XOR<ItemCreateWithoutBrandInput, ItemUncheckedCreateWithoutBrandInput> | ItemCreateWithoutBrandInput[] | ItemUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBrandInput | ItemCreateOrConnectWithoutBrandInput[]
    createMany?: ItemCreateManyBrandInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ItemCreateWithoutBrandInput, ItemUncheckedCreateWithoutBrandInput> | ItemCreateWithoutBrandInput[] | ItemUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBrandInput | ItemCreateOrConnectWithoutBrandInput[]
    createMany?: ItemCreateManyBrandInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ItemCreateWithoutBrandInput, ItemUncheckedCreateWithoutBrandInput> | ItemCreateWithoutBrandInput[] | ItemUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBrandInput | ItemCreateOrConnectWithoutBrandInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutBrandInput | ItemUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ItemCreateManyBrandInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutBrandInput | ItemUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutBrandInput | ItemUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ItemCreateWithoutBrandInput, ItemUncheckedCreateWithoutBrandInput> | ItemCreateWithoutBrandInput[] | ItemUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBrandInput | ItemCreateOrConnectWithoutBrandInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutBrandInput | ItemUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ItemCreateManyBrandInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutBrandInput | ItemUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutBrandInput | ItemUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ItemCreateWithoutWarehouseInput, ItemUncheckedCreateWithoutWarehouseInput> | ItemCreateWithoutWarehouseInput[] | ItemUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutWarehouseInput | ItemCreateOrConnectWithoutWarehouseInput[]
    createMany?: ItemCreateManyWarehouseInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ItemCreateWithoutWarehouseInput, ItemUncheckedCreateWithoutWarehouseInput> | ItemCreateWithoutWarehouseInput[] | ItemUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutWarehouseInput | ItemCreateOrConnectWithoutWarehouseInput[]
    createMany?: ItemCreateManyWarehouseInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ItemCreateWithoutWarehouseInput, ItemUncheckedCreateWithoutWarehouseInput> | ItemCreateWithoutWarehouseInput[] | ItemUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutWarehouseInput | ItemCreateOrConnectWithoutWarehouseInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutWarehouseInput | ItemUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ItemCreateManyWarehouseInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutWarehouseInput | ItemUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutWarehouseInput | ItemUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ItemCreateWithoutWarehouseInput, ItemUncheckedCreateWithoutWarehouseInput> | ItemCreateWithoutWarehouseInput[] | ItemUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutWarehouseInput | ItemCreateOrConnectWithoutWarehouseInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutWarehouseInput | ItemUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ItemCreateManyWarehouseInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutWarehouseInput | ItemUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutWarehouseInput | ItemUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutAddStockAdjustmentInput = {
    create?: XOR<ItemCreateWithoutAddStockAdjustmentInput, ItemUncheckedCreateWithoutAddStockAdjustmentInput>
    connectOrCreate?: ItemCreateOrConnectWithoutAddStockAdjustmentInput
    connect?: ItemWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutAddStockAdjustmentNestedInput = {
    create?: XOR<ItemCreateWithoutAddStockAdjustmentInput, ItemUncheckedCreateWithoutAddStockAdjustmentInput>
    connectOrCreate?: ItemCreateOrConnectWithoutAddStockAdjustmentInput
    upsert?: ItemUpsertWithoutAddStockAdjustmentInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutAddStockAdjustmentInput, ItemUpdateWithoutAddStockAdjustmentInput>, ItemUncheckedUpdateWithoutAddStockAdjustmentInput>
  }

  export type ItemCreateNestedOneWithoutTransferStockAdjustmentInput = {
    create?: XOR<ItemCreateWithoutTransferStockAdjustmentInput, ItemUncheckedCreateWithoutTransferStockAdjustmentInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTransferStockAdjustmentInput
    connect?: ItemWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutTransferStockAdjustmentNestedInput = {
    create?: XOR<ItemCreateWithoutTransferStockAdjustmentInput, ItemUncheckedCreateWithoutTransferStockAdjustmentInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTransferStockAdjustmentInput
    upsert?: ItemUpsertWithoutTransferStockAdjustmentInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutTransferStockAdjustmentInput, ItemUpdateWithoutTransferStockAdjustmentInput>, ItemUncheckedUpdateWithoutTransferStockAdjustmentInput>
  }

  export type ItemCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput> | ItemCreateWithoutSupplierInput[] | ItemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutSupplierInput | ItemCreateOrConnectWithoutSupplierInput[]
    createMany?: ItemCreateManySupplierInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput> | ItemCreateWithoutSupplierInput[] | ItemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutSupplierInput | ItemCreateOrConnectWithoutSupplierInput[]
    createMany?: ItemCreateManySupplierInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput> | ItemCreateWithoutSupplierInput[] | ItemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutSupplierInput | ItemCreateOrConnectWithoutSupplierInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutSupplierInput | ItemUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ItemCreateManySupplierInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutSupplierInput | ItemUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutSupplierInput | ItemUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput> | ItemCreateWithoutSupplierInput[] | ItemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutSupplierInput | ItemCreateOrConnectWithoutSupplierInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutSupplierInput | ItemUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ItemCreateManySupplierInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutSupplierInput | ItemUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutSupplierInput | ItemUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
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
    isSet?: boolean
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type CategoryCreateWithoutItemInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutItemInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutItemInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutItemInput, CategoryUncheckedCreateWithoutItemInput>
  }

  export type UnitCreateWithoutItemInput = {
    id?: string
    title: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUncheckedCreateWithoutItemInput = {
    id?: string
    title: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitCreateOrConnectWithoutItemInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutItemInput, UnitUncheckedCreateWithoutItemInput>
  }

  export type BrandCreateWithoutItemInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUncheckedCreateWithoutItemInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandCreateOrConnectWithoutItemInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutItemInput, BrandUncheckedCreateWithoutItemInput>
  }

  export type WarehouseCreateWithoutItemInput = {
    id?: string
    title: string
    location?: string | null
    description?: string | null
    warehouseType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehouseUncheckedCreateWithoutItemInput = {
    id?: string
    title: string
    location?: string | null
    description?: string | null
    warehouseType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehouseCreateOrConnectWithoutItemInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutItemInput, WarehouseUncheckedCreateWithoutItemInput>
  }

  export type SupplierCreateWithoutItemInput = {
    id?: string
    title: string
    phone?: string | null
    email?: string | null
    address?: string | null
    contactPerson?: string | null
    supplierCode: string
    paymentTerms?: string | null
    taxID?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUncheckedCreateWithoutItemInput = {
    id?: string
    title: string
    phone?: string | null
    email?: string | null
    address?: string | null
    contactPerson?: string | null
    supplierCode: string
    paymentTerms?: string | null
    taxID?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutItemInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutItemInput, SupplierUncheckedCreateWithoutItemInput>
  }

  export type AddStockAdjustmentCreateWithoutItemInput = {
    id?: string
    referenceNumber: string
    addStockQty: number
    notes?: string | null
    receivingWarehouseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddStockAdjustmentUncheckedCreateWithoutItemInput = {
    id?: string
    referenceNumber: string
    addStockQty: number
    notes?: string | null
    receivingWarehouseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddStockAdjustmentCreateOrConnectWithoutItemInput = {
    where: AddStockAdjustmentWhereUniqueInput
    create: XOR<AddStockAdjustmentCreateWithoutItemInput, AddStockAdjustmentUncheckedCreateWithoutItemInput>
  }

  export type AddStockAdjustmentCreateManyItemInputEnvelope = {
    data: AddStockAdjustmentCreateManyItemInput | AddStockAdjustmentCreateManyItemInput[]
  }

  export type TransferStockAdjustmentCreateWithoutItemInput = {
    id?: string
    referenceNumber: string
    transferStockQty: number
    notes?: string | null
    givingWarehouseId: string
    receivingWarehouseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferStockAdjustmentUncheckedCreateWithoutItemInput = {
    id?: string
    referenceNumber: string
    transferStockQty: number
    notes?: string | null
    givingWarehouseId: string
    receivingWarehouseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferStockAdjustmentCreateOrConnectWithoutItemInput = {
    where: TransferStockAdjustmentWhereUniqueInput
    create: XOR<TransferStockAdjustmentCreateWithoutItemInput, TransferStockAdjustmentUncheckedCreateWithoutItemInput>
  }

  export type TransferStockAdjustmentCreateManyItemInputEnvelope = {
    data: TransferStockAdjustmentCreateManyItemInput | TransferStockAdjustmentCreateManyItemInput[]
  }

  export type CategoryUpsertWithoutItemInput = {
    update: XOR<CategoryUpdateWithoutItemInput, CategoryUncheckedUpdateWithoutItemInput>
    create: XOR<CategoryCreateWithoutItemInput, CategoryUncheckedCreateWithoutItemInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutItemInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutItemInput, CategoryUncheckedUpdateWithoutItemInput>
  }

  export type CategoryUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUpsertWithoutItemInput = {
    update: XOR<UnitUpdateWithoutItemInput, UnitUncheckedUpdateWithoutItemInput>
    create: XOR<UnitCreateWithoutItemInput, UnitUncheckedCreateWithoutItemInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutItemInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutItemInput, UnitUncheckedUpdateWithoutItemInput>
  }

  export type UnitUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUpsertWithoutItemInput = {
    update: XOR<BrandUpdateWithoutItemInput, BrandUncheckedUpdateWithoutItemInput>
    create: XOR<BrandCreateWithoutItemInput, BrandUncheckedCreateWithoutItemInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutItemInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutItemInput, BrandUncheckedUpdateWithoutItemInput>
  }

  export type BrandUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseUpsertWithoutItemInput = {
    update: XOR<WarehouseUpdateWithoutItemInput, WarehouseUncheckedUpdateWithoutItemInput>
    create: XOR<WarehouseCreateWithoutItemInput, WarehouseUncheckedCreateWithoutItemInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutItemInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutItemInput, WarehouseUncheckedUpdateWithoutItemInput>
  }

  export type WarehouseUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    warehouseType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseUncheckedUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    warehouseType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUpsertWithoutItemInput = {
    update: XOR<SupplierUpdateWithoutItemInput, SupplierUncheckedUpdateWithoutItemInput>
    create: XOR<SupplierCreateWithoutItemInput, SupplierUncheckedCreateWithoutItemInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutItemInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutItemInput, SupplierUncheckedUpdateWithoutItemInput>
  }

  export type SupplierUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: StringFieldUpdateOperationsInput | string
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: StringFieldUpdateOperationsInput | string
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    taxID?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddStockAdjustmentUpsertWithWhereUniqueWithoutItemInput = {
    where: AddStockAdjustmentWhereUniqueInput
    update: XOR<AddStockAdjustmentUpdateWithoutItemInput, AddStockAdjustmentUncheckedUpdateWithoutItemInput>
    create: XOR<AddStockAdjustmentCreateWithoutItemInput, AddStockAdjustmentUncheckedCreateWithoutItemInput>
  }

  export type AddStockAdjustmentUpdateWithWhereUniqueWithoutItemInput = {
    where: AddStockAdjustmentWhereUniqueInput
    data: XOR<AddStockAdjustmentUpdateWithoutItemInput, AddStockAdjustmentUncheckedUpdateWithoutItemInput>
  }

  export type AddStockAdjustmentUpdateManyWithWhereWithoutItemInput = {
    where: AddStockAdjustmentScalarWhereInput
    data: XOR<AddStockAdjustmentUpdateManyMutationInput, AddStockAdjustmentUncheckedUpdateManyWithoutItemInput>
  }

  export type AddStockAdjustmentScalarWhereInput = {
    AND?: AddStockAdjustmentScalarWhereInput | AddStockAdjustmentScalarWhereInput[]
    OR?: AddStockAdjustmentScalarWhereInput[]
    NOT?: AddStockAdjustmentScalarWhereInput | AddStockAdjustmentScalarWhereInput[]
    id?: StringFilter<"AddStockAdjustment"> | string
    referenceNumber?: StringFilter<"AddStockAdjustment"> | string
    addStockQty?: IntFilter<"AddStockAdjustment"> | number
    notes?: StringNullableFilter<"AddStockAdjustment"> | string | null
    receivingWarehouseId?: StringFilter<"AddStockAdjustment"> | string
    itemId?: StringFilter<"AddStockAdjustment"> | string
    createdAt?: DateTimeFilter<"AddStockAdjustment"> | Date | string
    updatedAt?: DateTimeFilter<"AddStockAdjustment"> | Date | string
  }

  export type TransferStockAdjustmentUpsertWithWhereUniqueWithoutItemInput = {
    where: TransferStockAdjustmentWhereUniqueInput
    update: XOR<TransferStockAdjustmentUpdateWithoutItemInput, TransferStockAdjustmentUncheckedUpdateWithoutItemInput>
    create: XOR<TransferStockAdjustmentCreateWithoutItemInput, TransferStockAdjustmentUncheckedCreateWithoutItemInput>
  }

  export type TransferStockAdjustmentUpdateWithWhereUniqueWithoutItemInput = {
    where: TransferStockAdjustmentWhereUniqueInput
    data: XOR<TransferStockAdjustmentUpdateWithoutItemInput, TransferStockAdjustmentUncheckedUpdateWithoutItemInput>
  }

  export type TransferStockAdjustmentUpdateManyWithWhereWithoutItemInput = {
    where: TransferStockAdjustmentScalarWhereInput
    data: XOR<TransferStockAdjustmentUpdateManyMutationInput, TransferStockAdjustmentUncheckedUpdateManyWithoutItemInput>
  }

  export type TransferStockAdjustmentScalarWhereInput = {
    AND?: TransferStockAdjustmentScalarWhereInput | TransferStockAdjustmentScalarWhereInput[]
    OR?: TransferStockAdjustmentScalarWhereInput[]
    NOT?: TransferStockAdjustmentScalarWhereInput | TransferStockAdjustmentScalarWhereInput[]
    id?: StringFilter<"TransferStockAdjustment"> | string
    referenceNumber?: StringFilter<"TransferStockAdjustment"> | string
    transferStockQty?: IntFilter<"TransferStockAdjustment"> | number
    notes?: StringNullableFilter<"TransferStockAdjustment"> | string | null
    givingWarehouseId?: StringFilter<"TransferStockAdjustment"> | string
    receivingWarehouseId?: StringFilter<"TransferStockAdjustment"> | string
    itemId?: StringFilter<"TransferStockAdjustment"> | string
    createdAt?: DateTimeFilter<"TransferStockAdjustment"> | Date | string
    updatedAt?: DateTimeFilter<"TransferStockAdjustment"> | Date | string
  }

  export type ItemCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    sku: string
    barcode?: string | null
    quantity: number
    sellingPrice: number
    buyingPrice: number
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutItemInput
    brand: BrandCreateNestedOneWithoutItemInput
    warehouse: WarehouseCreateNestedOneWithoutItemInput
    supplier: SupplierCreateNestedOneWithoutItemInput
    AddStockAdjustment?: AddStockAdjustmentCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutCategoryInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput>
  }

  export type ItemCreateManyCategoryInputEnvelope = {
    data: ItemCreateManyCategoryInput | ItemCreateManyCategoryInput[]
  }

  export type ItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutCategoryInput, ItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutCategoryInput, ItemUncheckedUpdateWithoutCategoryInput>
  }

  export type ItemUpdateManyWithWhereWithoutCategoryInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    title?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    categoryId?: StringFilter<"Item"> | string
    sku?: StringFilter<"Item"> | string
    barcode?: StringNullableFilter<"Item"> | string | null
    quantity?: IntFilter<"Item"> | number
    unitId?: StringFilter<"Item"> | string
    brandId?: StringFilter<"Item"> | string
    warehouseId?: StringFilter<"Item"> | string
    sellingPrice?: FloatFilter<"Item"> | number
    buyingPrice?: FloatFilter<"Item"> | number
    supplierId?: StringFilter<"Item"> | string
    reOrderPoint?: IntFilter<"Item"> | number
    location?: StringNullableFilter<"Item"> | string | null
    imageUrl?: StringFilter<"Item"> | string
    weight?: FloatNullableFilter<"Item"> | number | null
    dimensions?: StringNullableFilter<"Item"> | string | null
    taxRate?: FloatFilter<"Item"> | number
    notes?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type ItemCreateWithoutUnitInput = {
    id?: string
    title: string
    description?: string | null
    sku: string
    barcode?: string | null
    quantity: number
    sellingPrice: number
    buyingPrice: number
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutItemInput
    brand: BrandCreateNestedOneWithoutItemInput
    warehouse: WarehouseCreateNestedOneWithoutItemInput
    supplier: SupplierCreateNestedOneWithoutItemInput
    AddStockAdjustment?: AddStockAdjustmentCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutUnitInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutUnitInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutUnitInput, ItemUncheckedCreateWithoutUnitInput>
  }

  export type ItemCreateManyUnitInputEnvelope = {
    data: ItemCreateManyUnitInput | ItemCreateManyUnitInput[]
  }

  export type ItemUpsertWithWhereUniqueWithoutUnitInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutUnitInput, ItemUncheckedUpdateWithoutUnitInput>
    create: XOR<ItemCreateWithoutUnitInput, ItemUncheckedCreateWithoutUnitInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutUnitInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutUnitInput, ItemUncheckedUpdateWithoutUnitInput>
  }

  export type ItemUpdateManyWithWhereWithoutUnitInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutUnitInput>
  }

  export type ItemCreateWithoutBrandInput = {
    id?: string
    title: string
    description?: string | null
    sku: string
    barcode?: string | null
    quantity: number
    sellingPrice: number
    buyingPrice: number
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutItemInput
    unit: UnitCreateNestedOneWithoutItemInput
    warehouse: WarehouseCreateNestedOneWithoutItemInput
    supplier: SupplierCreateNestedOneWithoutItemInput
    AddStockAdjustment?: AddStockAdjustmentCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutBrandInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutBrandInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutBrandInput, ItemUncheckedCreateWithoutBrandInput>
  }

  export type ItemCreateManyBrandInputEnvelope = {
    data: ItemCreateManyBrandInput | ItemCreateManyBrandInput[]
  }

  export type ItemUpsertWithWhereUniqueWithoutBrandInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutBrandInput, ItemUncheckedUpdateWithoutBrandInput>
    create: XOR<ItemCreateWithoutBrandInput, ItemUncheckedCreateWithoutBrandInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutBrandInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutBrandInput, ItemUncheckedUpdateWithoutBrandInput>
  }

  export type ItemUpdateManyWithWhereWithoutBrandInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutBrandInput>
  }

  export type ItemCreateWithoutWarehouseInput = {
    id?: string
    title: string
    description?: string | null
    sku: string
    barcode?: string | null
    quantity: number
    sellingPrice: number
    buyingPrice: number
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutItemInput
    unit: UnitCreateNestedOneWithoutItemInput
    brand: BrandCreateNestedOneWithoutItemInput
    supplier: SupplierCreateNestedOneWithoutItemInput
    AddStockAdjustment?: AddStockAdjustmentCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutWarehouseInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    brandId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutWarehouseInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutWarehouseInput, ItemUncheckedCreateWithoutWarehouseInput>
  }

  export type ItemCreateManyWarehouseInputEnvelope = {
    data: ItemCreateManyWarehouseInput | ItemCreateManyWarehouseInput[]
  }

  export type ItemUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutWarehouseInput, ItemUncheckedUpdateWithoutWarehouseInput>
    create: XOR<ItemCreateWithoutWarehouseInput, ItemUncheckedCreateWithoutWarehouseInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutWarehouseInput, ItemUncheckedUpdateWithoutWarehouseInput>
  }

  export type ItemUpdateManyWithWhereWithoutWarehouseInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type ItemCreateWithoutAddStockAdjustmentInput = {
    id?: string
    title: string
    description?: string | null
    sku: string
    barcode?: string | null
    quantity: number
    sellingPrice: number
    buyingPrice: number
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutItemInput
    unit: UnitCreateNestedOneWithoutItemInput
    brand: BrandCreateNestedOneWithoutItemInput
    warehouse: WarehouseCreateNestedOneWithoutItemInput
    supplier: SupplierCreateNestedOneWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutAddStockAdjustmentInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutAddStockAdjustmentInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutAddStockAdjustmentInput, ItemUncheckedCreateWithoutAddStockAdjustmentInput>
  }

  export type ItemUpsertWithoutAddStockAdjustmentInput = {
    update: XOR<ItemUpdateWithoutAddStockAdjustmentInput, ItemUncheckedUpdateWithoutAddStockAdjustmentInput>
    create: XOR<ItemCreateWithoutAddStockAdjustmentInput, ItemUncheckedCreateWithoutAddStockAdjustmentInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutAddStockAdjustmentInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutAddStockAdjustmentInput, ItemUncheckedUpdateWithoutAddStockAdjustmentInput>
  }

  export type ItemUpdateWithoutAddStockAdjustmentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemNestedInput
    unit?: UnitUpdateOneRequiredWithoutItemNestedInput
    brand?: BrandUpdateOneRequiredWithoutItemNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutItemNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutAddStockAdjustmentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateWithoutTransferStockAdjustmentInput = {
    id?: string
    title: string
    description?: string | null
    sku: string
    barcode?: string | null
    quantity: number
    sellingPrice: number
    buyingPrice: number
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutItemInput
    unit: UnitCreateNestedOneWithoutItemInput
    brand: BrandCreateNestedOneWithoutItemInput
    warehouse: WarehouseCreateNestedOneWithoutItemInput
    supplier: SupplierCreateNestedOneWithoutItemInput
    AddStockAdjustment?: AddStockAdjustmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutTransferStockAdjustmentInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutTransferStockAdjustmentInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTransferStockAdjustmentInput, ItemUncheckedCreateWithoutTransferStockAdjustmentInput>
  }

  export type ItemUpsertWithoutTransferStockAdjustmentInput = {
    update: XOR<ItemUpdateWithoutTransferStockAdjustmentInput, ItemUncheckedUpdateWithoutTransferStockAdjustmentInput>
    create: XOR<ItemCreateWithoutTransferStockAdjustmentInput, ItemUncheckedCreateWithoutTransferStockAdjustmentInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutTransferStockAdjustmentInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutTransferStockAdjustmentInput, ItemUncheckedUpdateWithoutTransferStockAdjustmentInput>
  }

  export type ItemUpdateWithoutTransferStockAdjustmentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemNestedInput
    unit?: UnitUpdateOneRequiredWithoutItemNestedInput
    brand?: BrandUpdateOneRequiredWithoutItemNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutItemNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutItemNestedInput
    AddStockAdjustment?: AddStockAdjustmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutTransferStockAdjustmentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateWithoutSupplierInput = {
    id?: string
    title: string
    description?: string | null
    sku: string
    barcode?: string | null
    quantity: number
    sellingPrice: number
    buyingPrice: number
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutItemInput
    unit: UnitCreateNestedOneWithoutItemInput
    brand: BrandCreateNestedOneWithoutItemInput
    warehouse: WarehouseCreateNestedOneWithoutItemInput
    AddStockAdjustment?: AddStockAdjustmentCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutSupplierInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutSupplierInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput>
  }

  export type ItemCreateManySupplierInputEnvelope = {
    data: ItemCreateManySupplierInput | ItemCreateManySupplierInput[]
  }

  export type ItemUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutSupplierInput, ItemUncheckedUpdateWithoutSupplierInput>
    create: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutSupplierInput, ItemUncheckedUpdateWithoutSupplierInput>
  }

  export type ItemUpdateManyWithWhereWithoutSupplierInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutSupplierInput>
  }

  export type AddStockAdjustmentCreateManyItemInput = {
    id?: string
    referenceNumber: string
    addStockQty: number
    notes?: string | null
    receivingWarehouseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferStockAdjustmentCreateManyItemInput = {
    id?: string
    referenceNumber: string
    transferStockQty: number
    notes?: string | null
    givingWarehouseId: string
    receivingWarehouseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddStockAdjustmentUpdateWithoutItemInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    addStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddStockAdjustmentUncheckedUpdateWithoutItemInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    addStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddStockAdjustmentUncheckedUpdateManyWithoutItemInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    addStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferStockAdjustmentUpdateWithoutItemInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    transferStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    givingWarehouseId?: StringFieldUpdateOperationsInput | string
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferStockAdjustmentUncheckedUpdateWithoutItemInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    transferStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    givingWarehouseId?: StringFieldUpdateOperationsInput | string
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferStockAdjustmentUncheckedUpdateManyWithoutItemInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    transferStockQty?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    givingWarehouseId?: StringFieldUpdateOperationsInput | string
    receivingWarehouseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyCategoryInput = {
    id?: string
    title: string
    description?: string | null
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutItemNestedInput
    brand?: BrandUpdateOneRequiredWithoutItemNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutItemNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutItemNestedInput
    AddStockAdjustment?: AddStockAdjustmentUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyUnitInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateWithoutUnitInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemNestedInput
    brand?: BrandUpdateOneRequiredWithoutItemNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutItemNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutItemNestedInput
    AddStockAdjustment?: AddStockAdjustmentUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutUnitInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    brandId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutUnitInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    brandId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyBrandInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateWithoutBrandInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemNestedInput
    unit?: UnitUpdateOneRequiredWithoutItemNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutItemNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutItemNestedInput
    AddStockAdjustment?: AddStockAdjustmentUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutBrandInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutBrandInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyWarehouseInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    brandId: string
    sellingPrice: number
    buyingPrice: number
    supplierId: string
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateWithoutWarehouseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemNestedInput
    unit?: UnitUpdateOneRequiredWithoutItemNestedInput
    brand?: BrandUpdateOneRequiredWithoutItemNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutItemNestedInput
    AddStockAdjustment?: AddStockAdjustmentUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutWarehouseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutWarehouseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    supplierId?: StringFieldUpdateOperationsInput | string
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManySupplierInput = {
    id?: string
    title: string
    description?: string | null
    categoryId: string
    sku: string
    barcode?: string | null
    quantity: number
    unitId: string
    brandId: string
    warehouseId: string
    sellingPrice: number
    buyingPrice: number
    reOrderPoint: number
    location?: string | null
    imageUrl: string
    weight?: number | null
    dimensions?: string | null
    taxRate: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateWithoutSupplierInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemNestedInput
    unit?: UnitUpdateOneRequiredWithoutItemNestedInput
    brand?: BrandUpdateOneRequiredWithoutItemNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutItemNestedInput
    AddStockAdjustment?: AddStockAdjustmentUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutSupplierInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AddStockAdjustment?: AddStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
    TransferStockAdjustment?: TransferStockAdjustmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutSupplierInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    buyingPrice?: FloatFieldUpdateOperationsInput | number
    reOrderPoint?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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