import {Outlet} from 'react-router-dom'
import GlobalStyle from './styles/global';

function App() {
  return (
     <div>
      <GlobalStyle />
      <h1>GitHub Finder</h1> 
      <Outlet />
     </div>
  )
}

export default App
