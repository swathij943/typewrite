const sentence = "hello there swathi from lighthouse labs";

const allLetters = (sentence) => {
  let time = 0;
  for(const char of sentence) {
    setTimeout(() => process.stdout.write(char), time);
    time += 50;
  };
  setTimeout(() => process.stdout.write('\n'), time);
};

allLetters(sentence);