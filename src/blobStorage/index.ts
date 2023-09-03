const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME as string;
if (!accountName) throw Error('Azure Storage accountName not found');

// AzureBlobStorageからファイルを取得
// アプリケーションとインフラ（AzureBlobStorage）の接続を管理する
export const fetchAzureBlobFile = async (containerName: string, blobName: string, fileName: string): Promise<string> => {
    // do something
    throw new Error('not impl');
}