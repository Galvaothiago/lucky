
import { useContext, useEffect } from 'react'
import { ContainerResult } from './styles'

import { NumbersContext } from '../context/numbersContext'


export function CardResultBet() {
    const resultFake = [2, 11, 37, 48, 51, 53]

    return (
        <ContainerResult>
            <div>
               <h4>{'MEGA-SENA' }</h4>
               <span>concurso: { '2034'}</span>
            </div>
            <main>
                { resultFake?.map( dezena => (
                    <div key={dezena}>{ Number(dezena) }</div>
                ) ) }
            </main>
            <footer>
                <span>ultimo concurso: { '16/06/21' }</span>
            </footer>
        </ContainerResult>
    )
}

