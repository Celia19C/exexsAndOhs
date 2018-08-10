
const countNumberOfElements = (array, elementToCount) => array.filter(element => element === elementToCount).length

//curryfication
const createCountNumberOf = array => element => countNumberOfElements(array, element) 
//

function exesAndOhs(text) {
    const characters = Array.from(text.toLowerCase());

    const countNumberOfCharacters = createCountNumberOf(characters)

    const numberOfX = countNumberOfCharacters('x')
    const numberOfO = countNumberOfCharacters('o')

    return numberOfO === numberOfX

}

module.exports = {
    exesAndOhs
}