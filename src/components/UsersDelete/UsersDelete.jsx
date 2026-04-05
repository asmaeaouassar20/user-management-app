import {useContext} from "react";

import { UsersContext } from "../../App";
import { useParams } from "react-router-dom";
export default function UsersDelete(){

  const context = useContext(UsersContext);
  const params=useParams();

 
  const handleSubmit = (e) => {
    e.preventDefault();
    context.actions.deleteUser({
       payload : {
        id: params.id    
       }
    })
  
  }  
   
    return <>
    <h1>Do you want to delete  this user</h1>
      <button type="submit" className="btn btn-danger" onClick={handleSubmit}>Delete</button>
    </>
}