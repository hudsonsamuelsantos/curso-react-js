import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

function NavBar() {

    const { user } = useAuthValue()

  return (
    <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
            Mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to='/' className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
            </li>
            {!user && 
                <>
                    <li>
                        <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : '')}>Entrar</NavLink>
                     </li>
                     <li>
                        <NavLink to='/register' className={({isActive}) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
                    </li>
                </>
            }
            {user && 
                <>
                    <li>
                        <NavLink to='/dashboard' className={({isActive}) => (isActive ? styles.active : '')}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts/create' className={({isActive}) => (isActive ? styles.active : '')}>Criar Post</NavLink>
                    </li>
                </>
            }
        </ul>
    </nav>
  )
}

export default NavBar