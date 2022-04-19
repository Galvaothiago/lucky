import { useContext, useState } from 'react'
import { VerifyContext } from '../context/VerifyResultContext'
import { ContainerResult } from './styles'
import { FiEdit } from 'react-icons/fi'

export function CardResultBet() {
    const { resultFake, setBetDatabase } = useContext(VerifyContext)
    const [ newResult, setNewResult ] = useState([])

    const generateArr = (content) => { 
        const arr = content?.split(',')
        if(arr.length < 6) {
            alert('tente novamente e insera os numeros corretamente!')
            setNewResult(resultFake)
            return 
        }
        const finalArr = arr.map(value => Number(value))
        setNewResult(finalArr)
        
    }

    const changeResult = () => { 
        const newText = prompt('digite os numeros separados por virgula. Ex: 23,30,23,55...')

        generateArr(newText)
        setBetDatabase(newResult)
    }
    return (
        <ContainerResult>
            <div>
               <h4>MEGA DA VIRADA</h4>
            </div>
            <main>
                { (newResult.length === 0 ? resultFake : newResult)?.map( dezena => (
                    <div key={dezena}>{ Number(dezena) }</div>
                ) ) }
            </main>
            <footer>
                < FiEdit onClick={changeResult}/>
                <span>ultimo sorteio: 31/12/2021</span>
            </footer>
        </ContainerResult>
    )
}

