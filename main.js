
function exesAndOhs(text) {
    let numberOfO = 0;
    let numberOfX = 0;

    const arrayText = Array.from(text);
    console.log(arrayText);

    arrayText.forEach(function(element){
        if (element === 'x'){
            numberOfX++
        } else if (element === 'o'){
            numberOfO++
        }
    })
    return numberOfO === numberOfX
}

module.exports = {
    exesAndOhs
}