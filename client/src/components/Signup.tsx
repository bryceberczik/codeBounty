import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth'

const ROLES = ['developer', 'client']
export default function Signup() {
    const [formState, setFormState] = useState({ email: '', password: '', username: '', role: '', technologies: [], description: '', links: [] })
    const [error, setError] = useState('')
    const [addUser] = useMutation(ADD_USER)

    const validate=()=>{
        let isValid=true;
        if(formState.email===''){
            setError('Email is required')
            isValid=false
        }
        else if(formState.password===''){
            setError('Password is required')
            isValid=false
        }
        else if(formState.username===''){
            setError('Username is required')
            isValid=false
        }
        else if(formState.role===''){
            setError('Reason for joining is required')
            isValid=false
        }
        else if(formState.description===''){
            setError('Description is required')
            isValid=false
        }
        else if(formState.technologies.length===0){
            setError('Technologies is required')
            isValid=false
        }
        else if(formState.links.length===0){
            setError('Links is required')
            isValid=false
        }
        //Password must be at least 8 characters long, contain at least one letter, one number, and one special character.
        else if(!/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&])/.test(formState.password)){
            setError('Password must be at least 8 characters long, contain at least one letter, one number, and one special character.')
            isValid=false
        }
        return isValid
    }
    const handleFormSubmit = async (event: any) => {
        event.preventDefault()

        if(!validate()){
            return
        }
        try {
            const { data } = await addUser({
                variables: { input: formState }
            })
            Auth.login(data.addUser.token)
        } catch (err) {
            console.error(err)
            setError("Something went wrong")
        }
    }
    
    return (
        <div className='signup-container'>
            <form className='auth-form' onSubmit={handleFormSubmit}>
                <input
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={formState.username}
                    onChange={(e) => setFormState({ ...formState, username: e.target.value })}
                />
                <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={formState.password}
                    onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                />
                <select
                    name='role'
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                >
                    <option value=''>Why are you here</option>
                    {ROLES.map((role) => (
                        <option key={role} value={role}>
                            {role}
                        </option>
                    ))}
                </select>
               
                <div>
                    <label>Description</label>
                    <textarea
                        placeholder='Description'
                        value={formState.description}
                        onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    />
                </div>
                
                <div>
                    <label>Technologies</label>
                    <div className='input-items'>
                        {formState.technologies.map((technology, idx) => (
                            <div key={idx}>
                                <input
                                    type='text'
                                    placeholder='Technology'
                                    value={technology}
                                    onChange={(e) => {
                                        const newTechnologies = [...formState.technologies]
                                        newTechnologies[idx] = e.target.value
                                        setFormState({ ...formState, technologies: newTechnologies })
                                    }}
                                />
                                <button
                                    type='button'
                                    onClick={() => {
                                        const newTechnologies = [...formState.technologies]
                                        newTechnologies.splice(idx, 1)
                                        setFormState({ ...formState, technologies: newTechnologies })
                                    }}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                        <button
                            type='button'
                            onClick={() => {
                                setFormState({ ...formState, technologies: [...formState.technologies, ''] })
                            }}
                        >
                            Add Technology
                        </button>
                    </div>
                </div>

                <div>
                    <label>Links</label>
                    <div className='input-items'>
                        {formState.links.map((link, idx) => (
                            <div key={idx}>
                                <input
                                    type='text'
                                    placeholder='Link'
                                    value={link}
                                    onChange={(e) => {
                                        const newLinks = [...formState.links]
                                        newLinks[idx] = e.target.value
                                        setFormState({ ...formState, links: newLinks })
                                    }}
                                />
                                <button
                                    type='button'
                                    onClick={() => {
                                        const newLinks = [...formState.links]
                                        newLinks.splice(idx, 1)
                                        setFormState({ ...formState, links: newLinks })
                                    }}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                        <button
                            type='button'
                            onClick={() => {
                                setFormState({ ...formState, links: [...formState.links, ''] })
                            }}
                        >
                            Add Link
                        </button>
                    </div>
                </div>
                <button className='auth-btn' type='submit'>Submit</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}
