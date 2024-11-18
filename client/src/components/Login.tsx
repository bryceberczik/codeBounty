import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {LOGIN} from '../utils/mutations'
import Auth from '../utils/auth'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('') 
    const [login] = useMutation(LOGIN)

    const handleFormSubmit = async (event: any) => {
        event.preventDefault()

        if(username === '' || password === ''){
            setError('Username and password are required')
            return
        }
        try {
            const {data} = await login({
                variables: {username: username, password: password}
            })
            Auth.login(data.login.token)
        } catch (err) {
            console.error(err)
            setError('Incorrect credentials')
        }
    }
  return (
    <div className='login-container'>
        <form className='auth-form' onSubmit={handleFormSubmit}>
            <label>username:</label>
            <input
            name='username'
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <label>password:</label>
            <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className="auth-btn"  type='submit'>Submit</button>
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}
