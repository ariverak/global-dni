const { format, validate, clean } = require('rut.js')

exports.format = dni => format(dni);

exports.validate = validate;

exports.clean = clean;