/*
 reference https://github.com/jcalijurio/paraguay-validators/blob/master/src/RUC/paraguay-ruc-validator.ts
 */

const { format } = require('rut.js');
const { clean } = require('../utils');

 const _regexFormat = /^(\d|\.|\-)+$/;
 const _regexAdjust = /\D/gi;
 const _baseMod = 11;

 function validateRUC(ruc) {
    if (!ruc)
        return false;

    if (!_regexFormat.test(ruc))
        return false;

    const adjustedRuc = ruc.replace(_regexAdjust, '');
    if (![8, 9].includes(adjustedRuc.length))
        return false;
    const identityDigitsLength = adjustedRuc.length - 2;
    let valueSum = 0;
    let increasingSequenceQtd = 0;
    let decreasingSequenceQtd = 0;
    let equalsDigitQtd = 0;
    for (let index = identityDigitsLength, multiplier = 2; index >= 0; index -= 1, multiplier += 1) {
        valueSum += Number(adjustedRuc[index]) * multiplier;

        if (index > 0) {
            const previousDigit = Number(adjustedRuc[index - 1]);
            const currentDigit = Number(adjustedRuc[index]);
            if (previousDigit === currentDigit)
                equalsDigitQtd += 1;

            if (currentDigit > previousDigit)
                increasingSequenceQtd += 1;

            if (previousDigit > currentDigit)
                decreasingSequenceQtd += 1;
        }
    }

    if (increasingSequenceQtd >= 6 || decreasingSequenceQtd >= 6 || equalsDigitQtd >= 6)
        return false;

    const mod = valueSum % _baseMod;
    console.log(valueSum , _baseMod)
    const verifyDigit = mod > 1 ? _baseMod - mod : 0;

    return adjustedRuc[identityDigitsLength + 1] === verifyDigit.toString();
}

function validateIndividualRUC(ruc) {
    return ruc && ruc.replace(_regexAdjust, '').length === 8 && validateRUC(ruc)
}
        
exports.format = dni => format(dni).replace(/[.]/g, '');

exports.validate = ruc => validateRUC(ruc) || validateIndividualRUC(ruc);

exports.clean = clean;