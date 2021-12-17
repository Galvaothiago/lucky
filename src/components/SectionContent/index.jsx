import { ContainerCheckNumber, ContainerContent, ContainerResults, HeaderContent } from "./styles";

import Scrollbar from 'react-scrollbars-custom'
import { Spinner } from '../Spinner';
import { useContext } from "react";
import { VerifyContext } from "../context/VerifyResultContext";

export function SectionContent() {
    const { 
        quantity, 
        showBets, 
        showBetsNow, 
        showAllBets, 
        saveData, 
        showFeedbackBets, 
        betsDatabase, 
        arrayOrdered, 
        delayLoading, 
        allHits, 
        checkNumbers,
        showModalResult,
     } = useContext(VerifyContext)
    
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
                        <div onClick={showBets}>Todos os jogos <span>{betsDatabase?.length}</span></div>
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
                { delayLoading ? (
                    <Spinner />
                ) : (
                    <p onClick={ showModalResult }>{ showFeedbackBets ? (
                        allHits.length !== 0 ? (allHits.length === 1 ? `Parabens, voce teve ${allHits.length} jogo premiado` : `Parabens, voce teve ${allHits.length} jogos premiados`) : 'nenhum jogo premiado'
                    ) : ''}</p>
                ) }

                <button
                    onClick={ () => checkNumbers(betsDatabase) }
                >
                    Conferir meus jogos
                </button>
            </ContainerCheckNumber>
        </ContainerContent>
    )
}