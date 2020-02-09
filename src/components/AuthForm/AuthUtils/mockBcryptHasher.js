const mockBcryptHasher = pass => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let newPass = pass
    .split('')
    .map(char => {
      let index = alpha.indexOf(char);
      let newIndex = (index + 13) % 26;
      return alpha[newIndex];
    })
    .join('');

  return newPass;
};

module.exports = mockBcryptHasher;
