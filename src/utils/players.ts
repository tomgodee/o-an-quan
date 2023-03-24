import { faker } from "@faker-js/faker";
import { capitalizeSentence } from "./miscellaneous";

export const generateRandomName = () =>
  capitalizeSentence(
    `${faker.word.adverb()} ${faker.word.adjective()} ${faker.animal.type()}`
  );
