import { createGlobalStyle } from 'styled-components'
import ThemeContext from './ThemeContext'
import { useRef, useState, useEffect } from 'react'
import Toggler from './Toggler';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.darkMode ? '#334' : '#ccd'};
    color: ${props => props.darkMode ? '#ccc' : '#222'};
  }
`

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closedDropdown = e => {
      console.log(e);
      if (e?.target[0] !== btnRef.current) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closedDropdown);

    return () => document.body.removeEventListener('click', closedDropdown);
  }, [])


  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }} >
        <GlobalStyles darkMode={darkMode} />
        <h2> DARK MODE : </h2>
        <Toggler />

        <div style={{ display: 'none', }}>
          <button ref={btnRef} onClick={() => setIsOpen(prev => !prev)}>Options 🔽</button>
          <div className={"dropdown " + (isOpen ? 'open' : 'closed')}>
            <a href="#">Opt 1</a>
            <a href="#">Opt 2</a>
            <a href="#">Opt 3</a>
          </div>
        </div>
      </ThemeContext.Provider >
    </div >
  )
}

export default App
