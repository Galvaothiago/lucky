
import { useContext, useEffect } from 'react'
import { ContainerResult } from './styles'

import { NumbersContext } from '../context/numbersContext'


export function CardResultBet() {
    const { getDataResult, dataApi } = useContext(NumbersContext)

    const resultFake = [2, 11, 37, 48, 51, 53]

    useEffect(() => {
        getDataResult()
    },[])


    const { nome, numero_concurso, data_concurso, dezenas } = dataApi 
    const date = data_concurso?.split('T')[0]

    return (
        <ContainerResult>
            <div>
               <h4>{ nome || 'MEGA-SENA' }</h4>
               <span>concurso: { numero_concurso || '2034'}</span>
            </div>
            <main>
                { (dezenas || resultFake)?.map( dezena => (
                    <div key={dezena}>{ Number(dezena) }</div>
                ) ) }
            </main>
            <footer>
                <span>ultimo concurso: {  date || '16/06/21' }</span>
            </footer>
        </ContainerResult>
    )
}

