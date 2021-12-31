import { createContext, useState } from "react";

export const RandomNumbersContext = createContext({})

export function RandomNumbersProvider({ children }) {
    const firstQuadrant = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25]
    const secondQuadrant = [6, 7, 8, 9, 10, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30]
    const thirdQuadrant = [31, 32, 33, 34, 35, 41,42, 43, 44,45, 51, 52, 53, 54, 55]
    const fourthQuadrant = [36, 39, 38, 39, 40, 46, 47, 48, 49, 50, 56, 57, 58, 59, 60]

    let sixRandomNumbers = []
    const TOTAL_NUMBERS = 6

    const [ randomNumbers, setRandomNumbers ] = useState([])

    const pickRandomNumberOnQuadrant = (quadrant) => {
        function ramdom() {
            return Math.floor(Math.random() * quadrant.length)
        }
        return quadrant[ramdom()]
    }

    const validateOneNumberOnQuadrant = (quadrant) => {
        const numberOne = pickRandomNumberOnQuadrant(quadrant)
        const numberTwo = pickRandomNumberOnQuadrant(quadrant)

        const isOdd = numberOne % 2 !== 1
        const isEven = numberTwo % 2 === 1

        if(isOdd && isEven) {
            sixRandomNumbers.push(numberOne)
            sixRandomNumbers.push(numberTwo)
        }else {
            validateOneNumberOnQuadrant(quadrant)
        }
    }

    const validateIfNumbersAreOddOrEven = (quadrant) => {
        let numberOne = pickRandomNumberOnQuadrant(quadrant)
        let numberTwo = pickRandomNumberOnQuadrant(quadrant)

        const isOdd = numberOne % 2 !== 1
        const isEven = numberTwo % 2 === 1

        if(sixRandomNumbers.length !== TOTAL_NUMBERS) {
            if(isOdd) {
                if(isEven) {
                    sixRandomNumbers.push(numberOne)
                    sixRandomNumbers.push(numberTwo)
                } else {
                    validateIfNumbersAreOddOrEven(quadrant)
                }
            } else {
                if(!isEven) {
                    sixRandomNumbers.push(numberOne)
                    sixRandomNumbers.push(numberTwo)
                }else {
                    validateIfNumbersAreOddOrEven(quadrant)
                }
            }
        }
    }


    const generateSixRandomNumber = () => {
        sixRandomNumbers = []
        setRandomNumbers([])

        validateOneNumberOnQuadrant(fourthQuadrant)
        validateOneNumberOnQuadrant(secondQuadrant)
        validateIfNumbersAreOddOrEven(firstQuadrant)
        validateIfNumbersAreOddOrEven(thirdQuadrant)

        setRandomNumbers(sixRandomNumbers)
    }


    return (
        <RandomNumbersContext.Provider
            value={{
                generateSixRandomNumber,
                randomNumbers
            }}
        >
            { children }
        </RandomNumbersContext.Provider>
    )
}