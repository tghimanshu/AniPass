function getCharactersFromSettings({
  lowerCase,
  upperCase,
  numbers,
  symbols,
  allowedSymbols,
}) {
  let characters = [];

  if (lowerCase) characters.push("abcdefghijklmnopqrstuvwxyz");
  if (upperCase) characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (numbers) characters.push("0123456789");
  if (symbols) characters.push(allowedSymbols);

  return characters.join("");
}

function randomPassword(characters, { length, lowerCase, upperCase }) {
  let password = [];

  while (password.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password.push(characters[randomIndex]);
  }

  return password.join("");
}

export const generatePassword = (settings) => {
  const characters = getCharactersFromSettings(settings);
  return randomPassword(characters, settings);
};
