import { IRelationalDatabase, Query } from "../types";

export class Postgresql implements IRelationalDatabase {
    constructor() {
        // do something
        // 接続先の情報、認証の設定..etc
    }

    // データベースとコネクションを確立
    connect(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    // クエリを実行
    execute<T>(query: Query): Promise<T> {
        throw new Error("Method not implemented.");
    }

    // コネクションを切断
    close(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export class MockPostgresql implements IRelationalDatabase {
    constructor() {
        // do something
        // 接続先の情報、認証の設定..etc
    }

    // データベースとコネクションを確立
    connect(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    // クエリを実行
    execute<T>(query: Query): Promise<T> {
        throw new Error("Method not implemented.");
    }

    // コネクションを切断
    close(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
