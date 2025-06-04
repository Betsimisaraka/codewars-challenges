function getFirstPython(list) {
  // Thank you for checking out my kata :)
  let firstName;
  let country;
  const findPythonDev = list.find((dev) => dev.language === "Python");
  if (findPythonDev) {
    return `${findPythonDev.firstName}, ${findPythonDev.country}`;
  } else {
    return "There will be no Python developers";
  }
}

function getFirstPython(list) {
  const dev = list.find((x) => x.language === "Python");
  return dev
    ? `${dev.firstName}, ${dev.country}`
    : "There will be no Python developers";
}

function getFirstPython(list) {
  for (var i = 0; i < list.length; ++i)
    if (list[i].language == "Python")
      return list[i].firstName + ", " + list[i].country;
  return "There will be no Python developers";
}
