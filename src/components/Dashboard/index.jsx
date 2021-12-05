import { Container, ContainerLeft, Wrapper } from "./styles";
import { CardNumber } from "../CardNumbers";
import { SectionContent } from "../SectionContent";
import { NumberProvider } from "../context/numbersContext";
import { CardResultBet } from "../CardResultBet";


export function Dashboard() {
    return (
        <Wrapper>
        <Container>
            <NumberProvider>
                <ContainerLeft>
                    <CardNumber />
                    <CardResultBet />
                </ContainerLeft>
                <SectionContent />
            </NumberProvider>
        </Container>
        </Wrapper>
    )
}