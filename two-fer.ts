import { Console } from "console";

export function twoFer(name: string) {
  const str1 = "One for";
  const str2 = "one for me";
  const str3 = "One for you";

  //if (name === "Bob") {
  //return `${str1} ${name}, ${str2}.`;
  //} else if (name === "Alice") {
  // return `${str1} ${name}, ${str2}.`;
  // } else return `${str3}, ${str2}.`;
  if (name && name.length > 0) {
    return `${str1} ${name}, ${str2}.`;
  } else return `${str3}, ${str2}.`;
}
