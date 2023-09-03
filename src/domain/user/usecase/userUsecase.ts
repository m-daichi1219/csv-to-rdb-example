import { IRelationalDatabase } from "../../../rdbms/types";
import { insertUserEntity } from "../repository/userRepository";
import { userCsvToUserEntity } from "../service/userConverterService";
import { fetchUserCsv } from "../service/userCsvService";

// ユーザ情報を永続化するユースケース
// CSVファイルを取得して永続する一連の流れを管理する
export const registerUserCsvUseCase = async (database: IRelationalDatabase) => {
    const userCsvString = await fetchUserCsv();
    const userEntity = userCsvToUserEntity(userCsvString);
    await insertUserEntity(userEntity, database);
}