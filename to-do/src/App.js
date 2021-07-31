import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import TodoList from './component/TodoList';

function App() {
  const [inn, setinn] = useState('');
  const [list, setList] = useState([])

  const handleClick = () => {
    if(inn !== ''){
    setList([...list, inn]);
    setinn('');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='input-area'>
          <input value={inn} onChange={(e) => {setinn(e.target.value)}}>
          </input>
          <button onClick={handleClick}>
            Add
          </button>
        </div>
        <div className='listing-area'>
          <TodoList list={list} setList={setList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
