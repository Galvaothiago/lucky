import { useState, createContext } from 'react'

export const NumbersContext = createContext({})

export function NumberProvider({ children }) {
    let numbersClicked = []
    const finalyBets = []

    const matchNumbers = []

 

    const [ showNumbers, setShowNumbers  ] = useState([])
    const [ allBets, setAllBets ] =useState([])

    const [ dataApi, setDataApi ] = useState({})

    const [ showBet, setShowBet ] = useState(false)


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
  
            localStorage.setItem('myBets', JSON.stringify(allBets))
            return
        }

        alert('Escolha 6 numeros antes de salva-los')
    }

    // request loterica

    const getDataResult = async () => {
        try {
            const token = 'wXt0Iv8lr4UdBek'
            const response = await fetch(`https://apiloterias.com.br/app/resultado?loteria=megasena&token=${token}`)
        
            const data = await response.json()
            const { nome, numero_concurso, data_concurso, dezenas } = data
            console.log(data)
            setDataApi({ 
                nome,
                numero_concurso,
                data_concurso,
                dezenas
            })
    
        } catch({name, err}) {
            alert(`${name}: ${err}`)
        }
    }

    
    // compare arrays
    
    
    
    // function checkNumbers() {
    //     const { dezenas } = dataApi
    //     const resultNumbers = dezenas?.map( number => Number(number) )
    //     const result = resultNumbers
    //     const betsForCheckout = allBets
        
            
    //     for(let i = 0; i < betsForCheckout.length; i++) {
    //         const newArray = []
    
    //         const arr = betsForCheckout[i][0].map(number => number[0])
    
    //         for(let i = 0; i < arr.length; i++) {
    //             const resultFiltered = result.filter(number => number === arr[i])
    //             if(resultFiltered[0]) {
    //                 newArray.push(resultFiltered[0])
    //             }
    //         }
                
    //         if(newArray.length >= 3) {
    //             matchNumbers.push(newArray)
    //         }
    //     }
    
    //     setBet(matchNumbers)
    //     setShowBet(true)
    // }


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
                getDataResult,
                dataApi,
                showBet,
                setAllBets,
            }}
        >

            { children }
        </NumbersContext.Provider>
    )
}

