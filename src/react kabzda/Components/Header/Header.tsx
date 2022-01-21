import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export type MapPropsType = {
  isAuth: boolean
  login: string | null  
}
export type DispatchPropsType = {  
  logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = ({isAuth, login, logout}) => {
  
  return (    
    <header className={s.header}>
      <img src='https://st2.depositphotos.com/1192512/6870/v/600/depositphotos_68706365-stock-illustration-woman-eye-logo-beauty-symbol.jpg' alt={'alt'} />
      <div className={s.loginBlok}>
        {isAuth 
        ?<div> {login}  <button onClick={logout}>Logout</button> </div>
        : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )

}
// 
export default Header;
