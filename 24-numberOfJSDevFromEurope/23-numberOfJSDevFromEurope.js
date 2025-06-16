function countDevelopers(list) {
  const devFromEurope = list.filter(
    (dev) => dev.continent === "Europe" && dev.language === "JavaScript"
  );

  return devFromEurope ? devFromEurope.length : 0;
}

function countDevelopers(list) {
  return list.reduce(
    (count, dev) =>
      dev.continent === "Europe" && dev.language === "JavaScript"
        ? count + 1
        : count,
    0
  );
}

function countDevelopers(list) {
  var count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].continent === "Europe" && list[i].language === "JavaScript") {
      count++;
    }
  }
  return count;
}
