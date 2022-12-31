import React,{useContext} from 'react'
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { themeContext } from '../../hooks/themeContext';

export default function Toggle() {
    const theme = useContext(themeContext)
    const darkMode = theme?.state?.darkMode

    const handleClick = () => {
        theme.dispatch({ type: 'toggle' })
    }
  return (
      <div className="toggle flex border-2 rounded-lg relative p-2 cursor-pointer border-purple-600"
          onClick={handleClick}>
          <FaRegSun size={20} className="mr-2" />
          <FaRegMoon size={20} />
          <div className="rounded-full absolute bg-purple-600"
              style={darkMode ? { left: '2px' } : { right: '2px' }}
          >
          </div>
      </div>
  )
}
