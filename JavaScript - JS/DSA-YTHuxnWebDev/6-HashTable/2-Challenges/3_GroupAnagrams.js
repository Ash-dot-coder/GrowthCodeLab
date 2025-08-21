function groupAnagrams(strs) {
  const anagramMap = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (sortedStr in anagramMap) {
      anagramMap[sortedStr].push(str);
    } else {
      anagramMap[sortedStr] = [str];
    }
  }
  return Object.values(anagramMap);
}

const str = [
  "keen",
  "neek",
  "ant",
  "tan",
  "nat",
  "eken",
  "dir",
  "idr",
  "opsu",
  "pan",
  "neken",
  "kene",
  "nap",
  "soup",
  "pure",
  "rid",
];
const groups = groupAnagrams(str);

console.table(groups);
