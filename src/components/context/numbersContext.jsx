import { useState, createContext } from 'react'

export const NumbersContext = createContext({})

export function NumberProvider({ children }) {
    let numbersClicked = []
    const finalyBets = []

    const [ showNumbers, setShowNumbers  ] = useState([])
    const [ allBets, setAllBets ] =useState([])

    const [ showBet, setShowBet ] = useState(false)
    const [ showFeedbackBets, setShowFeedbackBets ] = useState(false)


    const showCorrectButton = showNumbers.length !== 0


    function handleNumbers(number) {
        const isDifferent = (currentNumber) => currentNumber[0] !== number
        const repeatedNumbers = showNumbers.every(isDifferent)

        if(showNumbers.length < 6) {
            if(repeatedNumbers) {
                numbersClicked.push(number)  
                setShowNumbers(oldArray => [...oldArray, numbersClicked])
            } else {
                alert('Numero ja inserido!')
            }

        }

        if(showNumbers.length === 6) {
            alert('Adicione somente 6 numeros! =)')
            return
        }
    }

    function deleteLastNumber() {
        const arrayLastNumberDeleted = [...showNumbers]
        arrayLastNumberDeleted.pop()
        
        setShowNumbers(arrayLastNumberDeleted)
    }

    function saveBet() {
        if(showNumbers.length === 6) {
            finalyBets.push(showNumbers)

            numbersClicked = []

            setShowNumbers([])
            setAllBets( oldArray => [...oldArray, finalyBets] )

            setShowBet(false)
            setShowFeedbackBets(false)
  
            return
        }

        alert('Escolha 6 numeros antes de salva-los')
    }

    return (
        <NumbersContext.Provider
            value={{
                numbersClicked,
                handleNumbers,
                showCorrectButton,
                deleteLastNumber,
                showNumbers,
                finalyBets,
                saveBet,
                allBets,
                showBet,
                setAllBets,
                showFeedbackBets,
                setShowFeedbackBets
            }}
        >

            { children }
        </NumbersContext.Provider>
    )
}

