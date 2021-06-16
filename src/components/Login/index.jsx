import { auth, provider } from '../../firebase'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import { ContainerLogin, Sign } from './styles'
import Cookies from 'js-cookie'

export function Login() {
    const [{}, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then( result => dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            }) )
            .catch( err => alert(err.message) )
    }

    return (
        <ContainerLogin>
            <Sign>
                <h3>Lucky</h3>
                <button onClick={signIn}>Sign In with google</button>
            </Sign>
        </ContainerLogin>
    )
}

