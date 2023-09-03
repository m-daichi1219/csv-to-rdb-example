import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { registerUserCsvUseCase } from "../domain/user/usecase/userUsecase";
import { IRelationalDatabase } from "../rdbms/types";
import { MockPostgresql, Postgresql } from "../rdbms/postgresql";


let database: IRelationalDatabase;
// 実行環境の環境変数によって利用するデータベースを切り替える
if (process.env.Local === 'true') database = new MockPostgresql()
else database = new Postgresql();

// HTTPトリガーで実行するメイン関数
// HTTPとアプリケーションのインターフェースを担う
async function main(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('Http function was triggered.');

    await database.connect()
    await registerUserCsvUseCase(database)
        .finally(async () => {
            await database.close();
        });

    return { status: 201, body: 'created user entity.' };
};

app.http('registerBlobUserCsv', {
    methods: ['POST'],
    handler: main
});