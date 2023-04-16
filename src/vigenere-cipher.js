const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    text = text.toUpperCase();

    if (this.reverse === false) {
      text = text.split('').reverse().join('');
    }

    key = key.toUpperCase().repeat(Math.ceil(text.length / key.length))

    const codeA = 'A'.charCodeAt(0);
    const codeZ = 'Z'.charCodeAt(0);
    const alphabet = 26;

    const encrypted = [];

    for (let k = 0, i = 0; i < text.length; i++) {
      const letter = text[i];
      const codeLetter = letter.charCodeAt(0);

      if (codeZ < codeLetter || codeLetter < codeA) {
        encrypted.push(letter)
      } else {
        const letterIdx = codeLetter - codeA;
        const shift = key.charCodeAt(k) - codeA;
        encrypted.push(String.fromCharCode(codeA + (letterIdx + shift) % alphabet));
        k++;
      };
    }

    return encrypted.join('');
  }

  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    if (this.reverse === false) {
      text = text.split('').reverse().join('');
    }

    key = key.toUpperCase().repeat(Math.ceil(text.length / key.length))

    const codeA = 'A'.charCodeAt(0);
    const codeZ = 'Z'.charCodeAt(0);
    const alphabet = 26;

    const decrypted = [];

    for (let k = 0, i = 0; i < text.length; i++) {
      const letter = text[i];
      const codeLetter = letter.charCodeAt(0);

      if (codeZ < codeLetter || codeLetter < codeA) {
        decrypted.push(letter)
      } else {
        const letterIdx = codeLetter - codeA;
        const shift = key.charCodeAt(k) - codeA;
        decrypted.push(String.fromCharCode(codeA + (letterIdx - shift + alphabet) % alphabet));
        k++;
      };
    }

    return decrypted.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
