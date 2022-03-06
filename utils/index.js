exports.clean = (dni) => {
  return typeof dni === 'string'
    ? dni.replace(/[^a-zA-Z0-9]/g, '').toUpperCase()
    : ''
}