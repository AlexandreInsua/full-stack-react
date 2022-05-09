import './App.css';
import Container from './components/Container';
import Description from './components/Description';
import Message from './components/Message';

function App() {

  return (
    <div className="App">
      <Message message='Bos días' />
      <Description />
      <Container />
    </div>
  );
}

export default App;
