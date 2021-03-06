import { createContext, useContext, useEffect, useState } from "react";
import db from '../../firebase';
import { ModalResult } from "../ModalResult";
import { NumbersContext } from "./numbersContext";

export const VerifyContext = createContext({})

export function VerifyProvider({ children }) {
    const { allBets, setAllBets, showFeedbackBets, setShowFeedbackBets } = useContext(NumbersContext)
    const resultFake = [46, 32, 15, 12, 23, 33]

    const quantity = allBets.length

    const [ delayLoading, setDelayLoading ] = useState(null)   // variable used to create a delay
    const [ isOpenModal, setIsOpenModal ] = useState(false)

    const [ showAllBets, setShowAllBets ] = useState(false)
    const [ isActiveBetsNow, setIsActiveBetsNow ] = useState(true)
    const [ isActiveAllBets, setIsActiveAllBets ] = useState(false)
    const [ betsDatabase, setBetDatabase ] = useState()
    const [ betsAwarded, setBetsAwarded] = useState({})
    const [ arrayOrdered, setArrayOrdered ] = useState([])

    const [ allHits, setAllHits ] = useState([])

    console.log(allHits, allBets)
    const hasAnyHits = [...allHits].length !== 0

    const formatedArray = () => {
        const arrNumbers = []

        for(let i = 0; i < allBets.length; i++) {
            const arr = allBets[i][0].map( number => number[0] )
            arrNumbers.push(arr)
        }

        return arrNumbers
    }

    function showBetsNow() {
        setShowAllBets(false)
        setIsActiveAllBets(false)
        setIsActiveBetsNow(true)
    }

    function showBets() {
        setShowAllBets(true)
        setIsActiveBetsNow(false)
        setIsActiveAllBets(true)
    }
    
    useEffect(() => {
        const array = formatedArray()
    
        const arrFIltered = array.map( arr => arr.sort((a, b) => a - b) )
        setArrayOrdered(arrFIltered)

    }, [allBets])


    useEffect(() => {
        db.collection('games').onSnapshot(snapshot => (
            setBetDatabase( snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
    
            })))
        )) 

    },[showAllBets])

    const permissionToSaveBet = () => {
        const user_password = prompt("digite a senha que recebeu para salvar sua aposta:")
        const password = process.env.REACT_APP_PASSWORD
        
        if(user_password === password) {
            return true
        }
        return false
    }

    const saveData = () => {
        const allowedSave = permissionToSaveBet()

        if(allowedSave) {
            try {
                if(arrayOrdered.length === 0) {
                    alert('ops, crie algum jogo antes de salva-lo')
                    return
                }
                arrayOrdered.map(array => {
                    db.collection('games').add({
                        game: array
                    })
                })
    
                alert('Dados salvo com sucesso!')
                setAllBets([])

    
            } catch(err) {
                alert('Nao foi possivel salvar os dados, tente novamente mais tarde.')
            }
        }else {
            alert("senha invalida!")
        }
    }
        
    function checkNumbers(verify) {
        setDelayLoading(true)

        const fourHitsForThePrize = 4
        const fiveHitsForThePrize = 5
        const sixHitsForThePrize = 6

        let fourNumbers = []
        let fiveNumbers = []
        let sixNumbers = []

        let allNumbersAwarded = []

        const betsForCheckout = verify
 
        for(let i = 0; i < verify.length; i++) {
            let newArray = []
    
            const arrFormated = betsForCheckout.map(bet => ([
                ...bet.data.game
            ]))

            const arr = [...arrFormated[i]]
    
            for(let i = 0; i < arr.length; i++) {
                const resultFiltered = resultFake.filter(number => number === arr[i])

                if(resultFiltered[0]) {
                    newArray.push(resultFiltered[0])
                }

            }
                    
            if(newArray.length >= fourHitsForThePrize) {
                allNumbersAwarded.push(arrFormated[i])
            }
    
            if(newArray.length === fourHitsForThePrize) {
                fourNumbers.push(arrFormated[i], newArray)
            }
            if(newArray.length === fiveHitsForThePrize) {
                fiveNumbers.push(arrFormated[i], newArray)
            }
            if(newArray.length === sixHitsForThePrize) {
                sixNumbers.push(arrFormated[i], newArray)
            }
        }
        
        const bets = {
            fourNumbers,
            fiveNumbers,
            sixNumbers
        }

        setAllHits(allNumbersAwarded)
        setBetsAwarded(bets)
        setShowFeedbackBets(true)
        setDelayLoading(null)
    }

    const showModalResult = () => {
        setIsOpenModal(true)
    }

    const closeModalResult = () => {
        setIsOpenModal(false)
    }
    
    return (
        <VerifyContext.Provider
            value={{
                showFeedbackBets,
                showAllBets,
                allBets,
                quantity,
                saveData,
                checkNumbers,
                showBetsNow,
                showBets,
                showModalResult,
                closeModalResult,
                allHits,
                delayLoading,
                betsDatabase,
                setBetDatabase,
                betsAwarded,
                arrayOrdered,
                resultFake,
                isActiveBetsNow,
                isActiveAllBets
            }}
        >
            { (isOpenModal && hasAnyHits) && <ModalResult data={betsAwarded}/> }
            { children }
        </VerifyContext.Provider>
    )

}

