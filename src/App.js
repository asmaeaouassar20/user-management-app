
import { useState } from 'react';
import './App.css';
import UsersTable from './components/UsersTable/UsersTable';
import UsersAdd from './components/UsersAdd/UsersAdd';


const INITIAL_DATA = [
  { 
    id: 1,
    firstName :  'Asmae',
    lastName : 'Aouassar',
    country : 'morocco'
  },
  {
    id : 2,
    firstName : 'Israe',
    lastName : 'Haha',
    country : 'Tunisie'
  }, 
  {
    id: 3,
    firstName : 'ali',
    lastName : 'alio',
    country : 'Algérie'
  }
]

function App() {

  const [users, setUsers] = useState(INITIAL_DATA);

  return (
   <div className='container-fluid w-75 mx-auto'>
    <UsersAdd />
     <UsersTable users={users}></UsersTable>
   </div>
  );
}

export default App;
