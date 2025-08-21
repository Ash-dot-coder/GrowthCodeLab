function wordCounter(text) {
  const lowerText = text.toLowerCase();
  const wordMap = {};
  const words = lowerText.split(/\s+/);

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
}

const text = "Hey, I'm Ash name name Ash toh sunaa hii hongaa..!";
const wordCounts = wordCounter(text);

console.log(wordCounts);
