import { Query } from "../../../rdbms/types";
import { User } from "../types";

// CSV文字列をユーザエンティティ（データベースに保存するテーブル形式）に変換
// CSVファイルの文字列構成と変換の過程を管理する
export const userCsvToUserEntity = (userCsv: string): User[] => {
    throw new Error('not impl');
}

// ユーザエンティティを永続化するクエリに変換
// ユーザエンティティからクエリ（SQL）への変換の過程を管理する
export const userEntityToQuery = (users: User[]): Query => {
    throw new Error('not impl');
}