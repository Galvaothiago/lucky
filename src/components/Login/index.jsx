import { auth, provider } from '../../firebase'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import { ContainerLogin, Sign } from './styles'

import { FaGoogle } from 'react-icons/fa'
import { signInWithGoogle } from '../../functions-firebase'
import { useEffect } from 'react'

export function Login() {
    const [user, dispatch] = useStateValue()

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
                <section>
                    <img src="/clover.png" alt="Clover" />
                </section>
                <div>
                    <button onClick={signIn}><FaGoogle />Sign In with google</button>
                </div>
            </Sign>
        </ContainerLogin>
    )
}

