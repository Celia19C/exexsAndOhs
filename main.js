
function exesAndOhs(text) {
    let acumulatorO = 0;
    let acumulatorX = 0;
    for (let i = 0; i < text.length; i++){
        const element = text[i];
        if (element === 'x'){
            acumulatorX ++
        } else if (element === 'o'){
            acumulatorO ++
    }
    console.log(acumulatorO)
    console.log(acumulatorX)
    }
    if (acumulatorO === acumulatorX) {
        return true
    }
    return false
}

module.exports = {
    exesAndOhs
}