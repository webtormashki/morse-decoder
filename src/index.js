const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     var strArr = expr.match(/.{2}/g);
     var character = '';
     var decoded = '';

     for (var i = 0; i < strArr.length; i++) {
         if (strArr[i] == '00') {
            character += '';
         } else if (strArr[i] == '10') {
            character += '.';
         } else if (strArr[i] == '11') {
            character += '-';
         } else if (strArr[i] == '**') {
            decoded += ' ';
            i += 4;
            continue;
         }

         if ((i + 1) % 5 == 0) {
            decoded += MORSE_TABLE[character];
            character = '';
         }
     }

     return decoded;
}

module.exports = {
    decode
}
