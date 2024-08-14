// Create a reactive state and set default value
export const useCounter = () => useState<number>("counter", () => 0);
export const useColor = () => useState<string>("color", () => "green");
