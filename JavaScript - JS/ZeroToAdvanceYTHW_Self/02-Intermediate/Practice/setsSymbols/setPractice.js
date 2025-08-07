const watchedAbroadSeries = new Set([
  "From",
  "The Protector",
  "Wednesday",
  "Dark",
  "All Of Us Are Dead",
  "Squid Game",
  "Mercy For None",
  "Peaky Blinder",
  "Daredevil",
  "Loki",
  "MoonLight",
]);

console.log("Does Dark Included in the list?", watchedAbroadSeries.has("Dark"));
console.log("Wednesday got Deleted: ", watchedAbroadSeries.delete("Wednesday"));
console.log("-> Values: ", [...watchedAbroadSeries.values()]);
console.log("-> Keys: ", [...watchedAbroadSeries.keys()]);
console.log("-> Entries: ", [...watchedAbroadSeries.entries()]);
watchedAbroadSeries.forEach((series) => console.log("Using forEach: ", series));
console.table(Array.from(watchedAbroadSeries));
console.log(
  "Adding New Data: ",
  watchedAbroadSeries.add("Alice in the Borderland")
);
console.log("Total size of the Series: ", watchedAbroadSeries.size);
console.log("After the series got cleared: ", watchedAbroadSeries.clear());
console.log("Total size of the Series: ", watchedAbroadSeries.size);
