const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function splitter(str, n) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (i % n || i === 0) {
      result.push(str[i]);
    } else {
      result.push(',', str[i]);
    }
  }

  return result.join('').split(',');
}

function decode(expr) {
  return splitter(expr, 10)
    .map((item) =>
      splitter(item, 2)
        .map((item) => {
          if (item === '00') {
            return '';
          }
          if (item === '10') {
            return '.';
          }
          if (item === '11') {
            return '-';
          } else {
            return item;
          }
        })
        .join('')
    )
    .map((item) => MORSE_TABLE[item] || ' ')
    .join('');
}

module.exports = {
  decode,
};
