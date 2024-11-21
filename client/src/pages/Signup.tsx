import {useState} from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
import '../css/auth.css'


export default function Auth() {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <div className='auth-page'>

            <div className='auth-container'>
                <h1 style={{ color: "#003049" }}>{isLogin ? 'Login' : 'Sign up'}</h1>
                {isLogin ? <Login /> : <Signup />}
                <p className='auth-toggle' onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Need to create an account?' : 'Already have an account?'}</p>
            </div>
        </div>
    )
}

