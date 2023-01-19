function putAlphaCharWithinRange(char, minChar, maxChar, shiftAmount = 0) {
  if (
    typeof char !== 'string' ||
    typeof minChar !== 'string' ||
    typeof maxChar !== 'string' ||
    typeof shiftAmount !== 'number' ||
    Number.isNaN(shiftAmount)
  ) {
    return undefined;
  }

  const charCode = char.charCodeAt(0);
  const minCharCode = minChar.charCodeAt(0);
  const maxCharCode = maxChar.charCodeAt(0);

  if (minCharCode <= charCode && charCode <= maxCharCode) {
    let shiftedNewCharCode = charCode + shiftAmount - minCharCode;

    while (shiftedNewCharCode < 0) {
      shiftedNewCharCode += 26;
    }

    if (shiftedNewCharCode >= 26) {
      shiftedNewCharCode %= 26;
    }

    return String.fromCharCode(shiftedNewCharCode + minCharCode);
  } else {
    return char;
  }
}

export function caesarCipher(text, shiftAmount) {
  if (typeof text !== 'string' || typeof shiftAmount !== 'number' || Number.isNaN(shiftAmount)) {
    return undefined;
  }

  let shiftedText = [...text]
    .map((char) => {
      let newChar = putAlphaCharWithinRange(char, 'A', 'Z', shiftAmount);
      return putAlphaCharWithinRange(newChar, 'a', 'z', shiftAmount);
    })
    .join('');

  return shiftedText;
}
