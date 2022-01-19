import { Header } from './components/Header';
import styled from 'styled-components';

const Container = styled.div`
background-color: black;
padding: 20px;
min-height: 100vh;
max-width: 100vw;
`

const App = () => {
  return (
    <Container>
      <Header/>
    </Container>
  );
}

export default App;
