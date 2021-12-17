import { Container, ContainerLeft, Wrapper } from "./styles";
import { CardNumber } from "../CardNumbers";
import { SectionContent } from "../SectionContent";
import { NumberProvider } from "../context/numbersContext";
import { CardResultBet } from "../CardResultBet";
import { VerifyProvider } from "../context/VerifyResultContext";


export function Dashboard() {
    return (
        <Wrapper>
            <Container>
                <ContainerLeft>
                    <CardNumber />
                    <CardResultBet />
                </ContainerLeft>
                <SectionContent />
            </Container>
        </Wrapper>
    )
}