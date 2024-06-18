function formatDuration(seconds) {
  if (seconds === 0) return "now";

  let year = Math.floor(seconds / (86400 * 365));
  let day = Math.floor(seconds / 86400) % 365;
  let hour = Math.floor(seconds / 3600) % 24;
  let minute = Math.floor(seconds / 60) % 60;
  let second = seconds % 60;

  let years = year === 0 ? "" : year > 1 ? `${year} years` : `${year} year`;
  let days = day === 0 ? "" : day > 1 ? `${day} days` : `${day} day`;
  let hours = hour === 0 ? "" : hour > 1 ? `${hour} hours` : `${hour} hour`;
  let minutes =
    minute === 0 ? "" : minute > 1 ? `${minute} minutes` : `${minute} minute`;
  let getSeconds =
    second === 0 ? "" : second > 1 ? `${second} seconds` : `${second} second`;

  let arr = [];

  if (years !== "") {
    arr.push(years);
  }
  if (days !== "") {
    arr.push(days);
  }
  if (hours !== "") {
    arr.push(hours);
  }
  if (minutes !== "") {
    arr.push(minutes);
  }
  if (getSeconds !== "") {
    arr.push(getSeconds);
  }

  let str = arr.join(", ");
  let lastCommaIndex = str.lastIndexOf(",");

  if (lastCommaIndex === -1) return str;

  return (
    str.substring(0, lastCommaIndex) +
    " and" +
    str.substring(lastCommaIndex + 1)
  );
}

function formatDuration(seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    res = [];

  if (seconds === 0) return "now";

  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds / time[key]);
      res.push((val += val > 1 ? " " + key + "s" : " " + key));
      seconds = seconds % time[key];
    }
  }

  return res.length > 1
    ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
    : res[0];
}
