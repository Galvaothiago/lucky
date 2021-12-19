import { auth } from '../../firebase'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import { ContainerHeader } from './styles'

export function Header() {
    const [{ user }, dispatch] = useStateValue()

    const signOut = () => {
        auth.signOut()
        
        dispatch({
            type: actionTypes.LOGOUT_USER,
            user: null
        })
    }

    // const { displayName } = user

    return (
        <ContainerHeader>
            <h1>Lucky</h1>
            <span>Olá, thiago</span>

            <button onClick={signOut} >Exit</button>      
        </ContainerHeader>
    )
}