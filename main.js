
function exesAndOhs(text) {

    const arrayText = Array.from(text);

    let numberOfX = arrayText
    .filter(element => element === 'x')
    console.log(numberOfX);

    let numberOfO = arrayText
    .filter(element => element === 'o')
    console.log(numberOfO);



        // if (element === 'x'){
        //     numberOfX++
        // } else if (element === 'o'){
        //     numberOfO++
        // }

    return numberOfO.length === numberOfX.length
}

module.exports = {
    exesAndOhs
}