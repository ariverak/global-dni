const { format } = require('rut.js')
const { clean } = require('../utils')
/**
 * reference https://gist.github.com/lgaticaq/2e5de70146e34afe0968eed49bc533ad
 * Verifica que un DNI de Perú sea valido
 * @param {String} data DNI
 * @returns {Boolean}
 */
const validate = (data) => {
  const dni = data.replace('-', '').trim().toUpperCase();
  if (!dni || dni.length < 9) return false;
  const multiples = [3, 2, 7, 6, 5, 4, 3, 2];
  const dcontrols = {
    numbers: [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5],
    letters: ['K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
  };
  const numdni = dni.substring(0, dni.length - 1).split('');
  const dcontrol = dni.substring(dni.length - 1);
  const dsum = numdni.reduce((acc, digit, index) => {
    acc += digit * multiples[index];
    return acc;
  }, 0);
  const key = 11 - (dsum % 11);
  const index = key === 11 ? 0 : key;
  if (/^\d+$/.test(dni)) {
    return dcontrols.numbers[index] === parseInt(dcontrol, 10);
  }
  return dcontrols.letters[index] === dcontrol;
};

exports.format = dni => format(dni).replace(/[.]/g, '');

exports.validate = validate;

exports.clean = clean;

