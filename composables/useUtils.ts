export const useUtils = () => {
  const saySomething = (phrase: string, status: string) =>
    console.log(phrase + status);
  return {
    saySomething,
  };
};
