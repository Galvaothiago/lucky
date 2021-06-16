import { useContext } from 'react'
import { ContainerFooter, ContinerCardNumbers, Number, NumbersClicked, SectionFeedback, SectionButton } from './styles'
import { NumbersContext } from '../context/numbersContext'

export function CardNumber() {
    const numbersFromOneToFifteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const numbersFromSixteenToThirty = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const numbersFromThirtyoneToFortyfive = [31, 32, 33, 34, 35 , 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
    const numbersFromFortysixToSixty = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]

    const { handleNumbers, showCorrectButton, deleteLastNumber, showNumbers, saveBet } = useContext(NumbersContext)


    return (
        <ContinerCardNumbers>
            <div>
                { numbersFromOneToFifteen.map( number => (
                    <Number 
                        key={number}
                        onClick={ () => { 
                            handleNumbers(number)
                         } }
            
                    >
                        {number}
                    </Number>
                ) ) }
            </div>
            <div>
                { numbersFromSixteenToThirty.map( number => (
                    <NumbersClicked 
                        key={number}
                        onClick={ () => { handleNumbers(number) } }
                    >
                        {number}
                    </NumbersClicked>
                ) ) }
            </div>
            <div>
                { numbersFromThirtyoneToFortyfive.map( number => (
                    <Number 
                        key={number}
                        onClick={ () => { handleNumbers(number) } }
                    >
                        {number}
                    </Number>
                ) ) }
            </div>
            <div>
                { numbersFromFortysixToSixty.map( number => (
                    <NumbersClicked 
                        key={number}
                        onClick={ () => { handleNumbers(number) } }
                    >
                        {number}
                    </NumbersClicked>
                ) ) }
            </div>
            <ContainerFooter>
                <SectionFeedback>
                    <span>{ showNumbers.map( number => <p key={ number }>{ number }</p>
                    )}</span>
                   { showCorrectButton && <button
                        onClick={ deleteLastNumber }
                    >corrigir</button>}
                </SectionFeedback>
    
                <SectionButton>
                    <button
                        onClick={ saveBet }
                    >criar jogo</button>
                </SectionButton>
            </ContainerFooter>

        </ContinerCardNumbers>
    )
}