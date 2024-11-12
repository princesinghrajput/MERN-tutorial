import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const Navbar = () => {
    const {theme} = useContext(ThemeContext);
    console.log(theme);
  return (
    <nav style={{backgroundColor:theme ==='light' ? '#fff' : '#000', color:theme =='light' ? 'black' : '#fff'}}>
        <h1>Context API Examples</h1>
    </nav>
  )
}

export default Navbar