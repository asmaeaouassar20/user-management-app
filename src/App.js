
import { createContext, useEffect, useState } from 'react';
import './App.css';
import UsersLayout from './components/UsersLayout/UsersLayout';

export const UsersContext = createContext( {
  users : [],
  lastId : 0,
  addUser : () => null,
  updateUser : () => null,
  deleteUser : () => null
})

function App() {

  const usersLS=localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []; 

  const [users, setUsers] = useState(usersLS);
  const [lastId, setLastId]  = useState(usersLS.length);

  useEffect( ()=> {
    localStorage.setItem('users',JSON.stringify(users))
  }, [users])

  const addUser = (data) => {      
    setUsers(prevState => [...prevState, data.payload])
    setLastId(lastId+1);
    window.history.back();
  }

  const updateUser = (data) =>{     
    const {id, ...rest} = data.payload;
    
    setUsers( prevState => 
      prevState.map(user => {
        if(user.id===parseInt(id)){
          return {id:user.id, ...rest};
        }
        return user;
      })
    )
   window.history.back();
  }


   const deleteUser = (data) => {        
    setUsers( prevState => 
      prevState.filter(user => {
        if(user.id!==parseInt(data.payload.id)){
          return user;
        }        
      })
    )
   window.history.back();
  }


  return (  
   <div className='container-fluid w-75 mx-auto'>
      <UsersContext.Provider value={{
        users: users,
        lastId : lastId, 
        actions : {
          addUser, updateUser,  deleteUser
        }    
      }} >
        <UsersLayout />
      </UsersContext.Provider>         
   </div>
  );
}

export default App;



