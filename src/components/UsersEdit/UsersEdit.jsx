import {useContext, useEffect, useRef, useState} from "react";

import { UsersContext } from "../../App";
import { useParams } from "react-router-dom";
export default function UsersEdit(){

  const context = useContext(UsersContext);
  const firstName=useRef(null);
  const lastName=useRef(null);
  const country=useRef(null);

  const [currentUser, setCurrentUser] = useState();
  const params= useParams();

  const styles = {
    margin : '20px auto'    
  }

  useEffect( ()=>{  
    const id=params.id;          
    const user= context.users.filter(u => u.id===parseInt(id));
    
    if(user.length > 0){
      setCurrentUser(...user);                
    }else{
      console.error('User not found');;
    }
    
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    context.actions.updateUser({
       payload : {   
        id:params.id,     
         firstName:firstName.current.value,
        lastName:lastName.current.value,
        country:country.current.value
       }
    })
   
  }  
   
    return <form style={styles} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">Current id</label>
                <input  readOnly type="email" className="form-control" id="id" aria-describedby="emailHelp" defaultValue={currentUser?.id}  />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input ref={firstName} type="text" className="form-control" id="firstname" aria-describedby="emailHelp" defaultValue={currentUser?.firstName} />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input ref={lastName} type="text" className="form-control" id="lastname" defaultValue={currentUser?.lastName}  />
              </div>
              <div className="mb-3">
                <label htmlFor="Country" className="form-label">Country</label>
                <select ref={country} className="form-select" aria-label="Default select example" defaultValue={currentUser?.country} key={currentUser?.country}  >
                    <option selected >Open this select menu</option>
                    <option value="morocco">Morocco</option>
                    <option value="tunisia">Tunisia</option>
                    <option value="algeria">Algéria</option>
                </select>        
              </div>
            
            <button type="submit" className="btn btn-success">Update</button>
        </form>
}