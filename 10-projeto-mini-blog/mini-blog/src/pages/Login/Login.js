import styles from './Login.module.css'
import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    
    e.preventDefault()

    setError('')
    
    const user = {
      email,
      password,
    }

    const res = await login(user)

  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça seu login para utilizar o sistema</p>
      <form>
        <label>
          <span>E-mail:</span>
          <input 
            type='email'
            name='email'
            required
            placeholder='Insira seu e-mail' 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
            type='password'
            name='password'
            required
            placeholder='Insira sua senha' 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn' onClick={handleSubmit}>Cadastrar</button>}
        {loading && <button className='btn' onClick={handleSubmit} disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login