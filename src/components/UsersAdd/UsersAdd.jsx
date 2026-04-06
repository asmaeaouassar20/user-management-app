import {useContext, useRef} from "react";

import { UsersContext } from "../../App";
export default function UsersAdd(){

  const context = useContext(UsersContext);
  const firstName=useRef(null);
  const lastName=useRef(null);
  const country=useRef(null);

  const styles = {
    margin : '20px auto'    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    context.actions.addUser({
       payload : {
        id:context.lastId+1,
         firstName:firstName.current.value,
        lastName:lastName.current.value,
        country:country.current.value
       }
    })
    firstName.current.value='';
    lastName.current.value='';
    country.current.value='';
  }  
   
    return <form style={styles} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">Current id</label>
                <input  readOnly type="email" className="form-control" id="id" aria-describedby="emailHelp" value={context.lastId}  />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input ref={firstName} type="text" className="form-control" id="firstname" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input ref={lastName} type="text" className="form-control" id="lastname" />
              </div>
              <div className="mb-3">
                <label htmlFor="Country" className="form-label">Country</label>
                <select ref={country} className="form-select" aria-label="Default select example">
                    <option selected >Open this select menu</option>
                    <option value="morocco">Morocco</option>
                    <option value="tunisia">Tunisia</option>
                    <option value="algeria">Algéria</option>
                </select>        
              </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
}