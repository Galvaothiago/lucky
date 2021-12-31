import { useContext } from 'react'
import { 
        ContainerFooter, 
        ContinerCardNumbers, 
        NumberStyleLight, 
        NumberStyleDark, 
        SectionFeedback, 
        SectionButton, 
        ContainerButtonNumber} from './styles'
import { NumbersContext } from '../context/numbersContext'
import { RandomNumbersContext } from '../context/GenerateRandomNumbersContext'

export function CardNumber() {
    const numbersFromOneToFifteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const numbersFromSixteenToThirty = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const numbersFromThirtyoneToFortyfive = [31, 32, 33, 34, 35 , 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
    const numbersFromFortysixToSixty = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]

    const { 
        handleNumbers, 
        showCorrectButton, 
        deleteLastNumber, 
        showNumbers, 
        saveBet, 
        setShowNumbers, 
        cleanBet } = useContext(NumbersContext)

    const { generateSixRandomNumber, randomNumbers} = useContext(RandomNumbersContext)

    const transformArray = (array) => {
        const arr = [...array]

        const arrTransform = arr.map((item) => {
            return [item]
        }).reverse()
        
        setShowNumbers(arrTransform)
    }

    const handleGenerateNumber = () => {
        generateSixRandomNumber()
        transformArray(randomNumbers)
    }
    return (
        <ContinerCardNumbers>
            <div>
                { numbersFromOneToFifteen.map( number => (
                    <NumberStyleLight 
                        key={number}
                        onClick={ () => { 
                            handleNumbers(number)
                         } }
            
                    >
                        {number}
                    </NumberStyleLight>
                ) ) }
            </div>
            <div>
                { numbersFromSixteenToThirty.map( number => (
                    <NumberStyleDark 
                        key={number}
                        onClick={ () => { handleNumbers(number) } }
                    >
                        {number}
                    </NumberStyleDark>
                ) ) }
            </div>
            <div>
                { numbersFromThirtyoneToFortyfive.map( number => (
                    <NumberStyleLight 
                        key={number}
                        onClick={ () => { handleNumbers(number) } }
                    >
                        {number}
                    </NumberStyleLight>
                ) ) }
            </div>
            <div>
                { numbersFromFortysixToSixty.map( number => (
                    <NumberStyleDark 
                        key={number}
                        onClick={ () => { handleNumbers(number) } }
                    >
                        {number}
                    </NumberStyleDark>
                ) ) }
            </div>
            <ContainerFooter>
                <SectionFeedback>
                    { <span>{ showNumbers.map( number => <p key={ number }>{ number < 10 ? `0${number}` : number }</p>)}</span> }
                   { showCorrectButton && <ContainerButtonNumber>
                        <button onClick={ cleanBet}>Limpar</button>
                        <button onClick={ deleteLastNumber }>X</button>
                       </ContainerButtonNumber>}
                </SectionFeedback>
    
                <SectionButton>
                    <button onClick={() => handleGenerateNumber()}>
                        gerar numeros
                    </button>
                    <button
                        onClick={ saveBet }
                    >criar jogo</button>
                </SectionButton>
            </ContainerFooter>

        </ContinerCardNumbers>
    )
}