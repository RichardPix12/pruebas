import {useEffect, useState} from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

interface Sub{
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

const INITIAL_STATE = [
  {
    nick: 'Dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de morerador a veces '
  },
  {
    nick: 'Richard',
    subMonths: 2,
    avatar: 'https://i.pravatar.cc/150?u=richard',
  }
]

interface AppState{
  subs: Sub[]
  newSubsNumber: number
}

function App() {

const [subs, setSubs] = useState<AppState["subs"]>([]);
const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);

useEffect(() =>{
  setSubs(INITIAL_STATE)
},[])

  return (
    <div className="App">
      <h1>midu subs</h1>
      <List subs = {subs} />
      <Form />
    </div>
  );
}

export default App;
