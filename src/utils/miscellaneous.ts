export const capitalizeWord = (word: string): string =>
  word.slice(0, 1).toLocaleUpperCase() + word.slice(1).toLowerCase();

export const capitalizeSentence = (sentence: string) =>
  sentence
    .split(" ")
    .map((word) => capitalizeWord(word))
    .join(" ");
