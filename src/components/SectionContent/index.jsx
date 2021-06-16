import { useContext, useEffect, useState } from 'react'
import { ContainerCheckNumber, ContainerContent, ContainerResults, HeaderContent } from "./styles";

import Scrollbar from 'react-scrollbars-custom'
import { NumbersContext } from '../context/numbersContext'
import db from '../../firebase';

export function SectionContent() {
    const { allBets } = useContext(NumbersContext)
    const resultFake = [2, 11, 37, 48, 51, 53]

    const quantity = allBets.length

    const [ showAllBets, setShowAllBets ] = useState(false)
    const [ betsDatabase, setBetDatabase ] = useState()
    const [resultMega, setResultMega] = useState([])
    const [ showFeedbackBets, setShowFeedbackBets ] = useState(false)

    const formatedArray = () => {
        const arrNumbers = []

        for(let i = 0; i < allBets.length; i++) {
            const arr = allBets[i][0].map( number => number[0] )
            arrNumbers.push(arr)
        }

        return arrNumbers
    }

    function showBetsNow() {
        setShowAllBets(true)
    }

    function showBets() {
        setShowAllBets(false)
    }

    const array = formatedArray()
    const arrayOrdered = array.map( arr => arr.sort((a, b) => a - b) )

    useEffect(() => {
        db.collection('games').onSnapshot(snapshot => (
            setBetDatabase( snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
    
            })))
        )) 

    },[showAllBets])

    const saveData = () => {
        try {
            arrayOrdered.map(array => {
                db.collection('games').add({
                    game: array
                })
            })

            alert('Dados salvo com sucesso!')

        } catch(err) {
            alert('Nao foi possivel salvar os dados, tente novamente mais tarde.')
        }
    }
        
    function checkNumbers(verify) {

        const betsForCheckout = verify
        let matchNumbers = []
 
        for(let i = 0; i < verify.length; i++) {
            const newArray = []
    
            const arrFormated = betsForCheckout.map(bet => ([
                ...bet.data.game
            ]))

            const arr = arrFormated[i]
    
            for(let i = 0; i < arrFormated.length; i++) {
                const resultFiltered = resultFake.filter(number => number === arr[i])
                console.log(resultMega)
                if(resultFiltered[0]) {
                    newArray.push(resultFiltered[0])
                }
            }
                
            if(newArray.length >= 3) {
                matchNumbers.push(newArray)
            }
        }
        setResultMega(matchNumbers)
        setShowFeedbackBets(true)
    }

    console.log(resultMega)
    
    return (
        <ContainerContent>
            <HeaderContent>
                <img src="clover.png" alt="Clover" />
                <p>voce tem <strong>{ quantity }</strong> { quantity === 1 ? 'jogo!' : 'jogos!' }</p>
            </HeaderContent>
            <ContainerResults>
                <div>
                    <main>
                        <div onClick={showBetsNow}>Jogos de agora</div>
                        <div onClick={showBets}>Todos os jogos</div>
                    </main>  
                </div>
                { showAllBets ? (
                    <section>
                        <Scrollbar style={{ width: '100%', height: '100%' }} >
                            <p>
                                { arrayOrdered.map( array => <span>{ String(array).split(',').join(' - ') }</span> ) }
                            </p>
                        </Scrollbar>
                        <button onClick={saveData}>salvar</button>
                    </section> ) : (
                                    <section>
                                        <Scrollbar style={{ width: '100%', height: '100%' }} >
                                            <p>
                                                { betsDatabase?.map( array => (
                                                    <span>{ String(array.data.game).split(',').join(' - ') }</span> 
                                                )) }
                                            </p>
                                        </Scrollbar>
                                    </section> 
                    )}
            </ContainerResults>
            <ContainerCheckNumber>
                <p>{ showFeedbackBets ? (
                    resultMega.length !== 0 ? (resultMega.length === 1 ? `Parabens, voce teve ${resultMega.length} jogo premiado` : `Parabens, voce teve ${resultMega.length} jogos premiados`) : 'nenhum jogo premiado'
                ) : ''}</p>
                <button
                    onClick={ () => checkNumbers(betsDatabase) }
                >
                    Conferir meus jogos
                </button>
            </ContainerCheckNumber>
        </ContainerContent>
    )
}