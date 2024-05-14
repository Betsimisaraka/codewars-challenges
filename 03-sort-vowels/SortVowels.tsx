function sortVowels(s: string) {
  //code
  if (s === undefined || s === null || typeof s !== "string") {
    return "";
  }

  let vowels = "aeiouAEIOU";
  let result = [];
  for (let char of s) {
    if (vowels.includes(char)) {
      result.push("|" + char);
    } else if (char !== "|") {
      result.push(char + "|");
    }
  }
  return result.join("\n");
}

const sortVowels2 = (s) => {
  return typeof s !== "string"
    ? ""
    : s
        .split("")
        .map((char) => (/[aeiou]/i.test(char) ? `|${char}` : `${char}|`))
        .join("\n");
};
