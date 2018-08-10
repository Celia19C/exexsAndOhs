// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


const { exesAndOhs } = require ("./main.js")

describe('exs and ohs', () => {
    it("checks if the string contain 1o and 1x", () => {
        const result = exesAndOhs('xo')
        expect(result).toEqual(true)
    })
    it("checks if the string contain 1o and 1x", () => {
        const result = exesAndOhs('xoo')
        expect(result).toEqual(false)
    })
    it("checks if the string contain 1o and 1x", () => {
        const result = exesAndOhs('Xo')
        expect(result).toEqual(true)
    })
    it("checks if the string contain 1o and 1x", () => {
        const result = exesAndOhs('XopK')
        expect(result).toEqual(true)
    })
    it("checks if the string contain zero 'o' and zero 'x'", () => {
        const result = exesAndOhs('zzppp')
        expect(result).toEqual(true)
    })
    it("checks if the string contain zero 'o' and zero 'x'", () => {
        const result = exesAndOhs('zzoo')
        expect(result).toEqual(false)
    })
})