const { isValid, normalize } = require('dni-js')
const { clean } = require('../utils')

exports.format = dni => normalize(dni);

exports.validate = isValid;

exports.clean = clean;