import { auth } from '../../firebase'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import { ContainerHeader } from './styles'

export function Header() {
    const [{ user }, dispatch] = useStateValue()

    const userDefault = {
        displayName: 'default'
    }

    const signOut = async () => {
        await auth.signOut()
        
        dispatch({
            type: actionTypes.LOGOUT_USER,
            user: null
        })
    }

    const { displayName } = user || userDefault
    return (
        <ContainerHeader>
            <h1>mega da virada</h1>
            <span>Olá, {displayName}</span>

            <button onClick={signOut} >Sair</button>      
        </ContainerHeader>
    )
}