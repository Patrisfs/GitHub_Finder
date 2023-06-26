import {Outlet} from 'react-router-dom'
import GlobalStyle from './styles/global';
import { Container } from './components/Container';

function App() {
  return (
       <Container>
       <h1>GitHub Finder</h1>
        <GlobalStyle />
          <Outlet />
       </Container>
  )
}

export default App
