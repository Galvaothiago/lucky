import { auth } from '../../firebase'
import { useStateValue } from '../context/StateProvider'
import { ContainerHeader, ContainerNavi } from './styles'

export function Header() {
    const [{ user }] = useStateValue()

    const signOut = () => {
        auth.signOut().then(() => console.log('user did logout'))
    }

    const { displayName } = user
    console.log(displayName)
    return (
        <ContainerHeader>
            <h1>Lucky</h1>
            <span>Ola, {displayName}</span>
            <ContainerNavi>
                <button onClick={signOut} >Exit</button>
            </ContainerNavi>
        </ContainerHeader>
    )
}