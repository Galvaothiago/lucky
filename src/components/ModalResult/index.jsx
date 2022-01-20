import { Container, ContainerModal, ContainerResult, Main, Title } from "./styles"
import { AiFillCloseCircle } from 'react-icons/ai'
import { useContext } from "react"
import { VerifyContext } from "../context/VerifyResultContext"
export function ModalResult({ data }) {
    const { closeModalResult } = useContext(VerifyContext)

    const {
        fourNumbers,
        fiveNumbers,
        sixNumbers
    } = data

    const allBets = [fourNumbers, fiveNumbers, sixNumbers]

    const betsFiltered = allBets?.filter((item) => item?.length !== 0)

    console.log(allBets)

    return (
        <Container>
            <ContainerModal>
                <AiFillCloseCircle onClick={closeModalResult} />
                <Title>
                    <h3>Jogos premiados</h3>
                </Title>
                <Main>
                    <div>
                        { betsFiltered.map((arrResult) => (
                            <ContainerResult>
                                { arrResult?.filter(arr => arr.length !== 6).map(arr => (
                                <p>{arr.length}</p>))}
                               { arrResult?.filter(arr => arr.length === 6).map((arr) =>  <span>{ String(arr).split(',').join(' - ') }</span> ) }
                            </ContainerResult>
                        )) }

                    </div>
                </Main>
            </ContainerModal>
        </Container>
    )
}

// arr.length != 6).map(arr => (
//     <p>{arr.length}</p>
// )) 