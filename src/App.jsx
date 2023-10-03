import { createGlobalStyle } from 'styled-components'
import ThemeContext from './ThemeContext'
import { useState } from 'react'
import Toggler from './Toggler';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.darkMode ? '#334' : '#eef'};
    color: ${props => props.darkMode ? '#eee' : '#222'};
  }
`

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }} >
        <GlobalStyles darkMode={darkMode} />
        <h2> DARK MODE : </h2>
        <Toggler />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
