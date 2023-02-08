import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([
    {
      id:9,
      name:"Nathan",
      city:"Portland"
    },
    {
      id:3,
      name:"Ilana",
      city:"New York"
    }
  ]);

  return (
    <div className="App">
      <Form list={list} setList={setList}/>
      <List list={list} setList={setList} />
   </div>
  );
}

export default App;
