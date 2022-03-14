# Global DNI
  collection of libraries to format and validate multiple DNI types
  ## DNI Available:
    * Chile (CL)
    * Perú (PE)
    * España (ES)
    * Paraguay (PY)
# Installation
    npm install --save global-dni
# Api
    format(dni)
    validate(dni)
    clean(dni)
# Example 
     import dni from 'global-dni'
     
     dni.ES.validate('181303859') // false
     dni.CL.validate('181303859') // true
     
     dni.PE.clean('1*2*3456*78*')   // '12345678'

 

