export function capitalize(text) {
  if (typeof text !== 'string') {
    return undefined;
  }
  let words = text.split(' ');
  words = words.map((word) => word[0].toUpperCase() + word.slice(1));
  return words.join(' ');
}
