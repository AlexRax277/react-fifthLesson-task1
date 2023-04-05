import './App.css';
import Card from './Card.js';

function App() {
  return <div>
    <Card>
      <div className='pic'></div>
      <p>Some text</p>
      <a href="123">Link</a>
    </Card>
    <Card>
      <p>Another text</p>
      <button className='btn' type='submit'>push-me</button>
    </Card>
  </div> 
}

export default App;
