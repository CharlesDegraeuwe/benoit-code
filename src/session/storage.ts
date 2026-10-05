type Models = "deepseek-chat" | "deepseek-reasoner"

interface IStorage {
    model: Models;
}
export const storage: IStorage = {
    model: "deepseek-chat",
}