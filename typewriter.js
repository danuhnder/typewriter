const sentence = "hello there from lighthouse labs"
const typewriter = (sentence) => {
let delay = 200
  for (const char of sentence) {
    setTimeout(() => {
    process.stdout.write(char);
    }, delay);
    delay += 50;
  };
  setTimeout(() => process.stdout.write('\n'), delay);
}
typewriter(sentence)