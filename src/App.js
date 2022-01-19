import { Header } from './components/Header';

const HeaderContainter = styled.div`
background-color: black;
`
function App() {
  return (
    <HeaderContainter>
      <Header/>
    </HeaderContainter>
  );
}

export default App;
