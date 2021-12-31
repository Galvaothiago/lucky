import { useContext } from 'react'
import { VerifyContext } from '../context/VerifyResultContext'
import { ContainerResult } from './styles'

export function CardResultBet() {
    const { resultFake } = useContext(VerifyContext)
    return (
        <ContainerResult>
            <div>
               <h4>MEGA DA VIRADA</h4>
            </div>
            <main>
                { resultFake?.map( dezena => (
                    <div key={dezena}>{ Number(dezena) }</div>
                ) ) }
            </main>
            <footer>
                <span>ultimo sorteio: 31/12/2021</span>
            </footer>
        </ContainerResult>
    )
}

