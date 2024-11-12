import React , {useContext}from 'react'
import ThemeContext from '../context/ThemeContext'
const ToggleButton = () => {

    const {toggleTheme, theme} = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
        switch to {theme === 'light' ? 'dark' : 'light'}
    </button>
  )
}

export default ToggleButton