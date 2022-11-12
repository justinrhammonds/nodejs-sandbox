function splitInputString(input) {
    return input.split(/\r?\n/).filter((i) => i !== '');
}

module.exports = { 
    splitInputString
}