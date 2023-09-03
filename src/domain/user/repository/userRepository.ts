import { IRelationalDatabase } from "../../../rdbms/types";
import { userEntityToQuery } from "../service/userConverterService";
import { User } from "../types"

// ユーザ情報を永続化
export const insertUserEntity = async (users: User[], database: IRelationalDatabase): Promise<void> => {
    const query = userEntityToQuery(users);
    await database.execute(query);
}