export interface Query {
  query: string
  values: string[]
}

export interface IRelationalDatabase {
  connect(): Promise<void>              // 接続
  execute<T>(query: Query): Promise<T>  // クエリ発行
  close(): Promise<void>                /// 切断
}