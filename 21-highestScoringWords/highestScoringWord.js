function high(x) {
  let splitText = x.split(" ");
  let wordsScore = splitText.map((char) => {
    const getPossition = char.split("").map((char2) => {
      const possition = char2.charCodeAt(0) - "a".charCodeAt(0) + 1;
      return char2 >= "a" && char2 <= "z" ? possition : "";
    });

    return getPossition.reduce((acc, index) => acc + index, 0);
  });

  const highestScoreIndex = wordsScore.reduce(
    (highestIndex, currentNum, currentIndex, array) => {
      return currentNum > array[highestIndex] ? currentIndex : highestIndex;
    },
    0
  );

  const highestScore = splitText.map((char, index) => {
    if (index === highestScoreIndex) {
      return char;
    }
  });
  return highestScore.join("");
}

function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
