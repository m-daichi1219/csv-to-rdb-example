import { fetchAzureBlobFile } from "../../../blobStorage"

// CSVファイルを取得
// ユーザのCSVファイルがどこに保管されているか管理する
export const fetchUserCsv = async (): Promise<string> => {
    const userCsvString = await fetchAzureBlobFile('user-csv-container', 'user-blob-name', 'user-csv-file-name');
    return userCsvString;
}