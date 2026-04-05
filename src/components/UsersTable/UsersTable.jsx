import { useContext } from "react"
import { UsersContext } from "../../App"
import { Link } from "react-router-dom";



export default function UsersTable(){

    const context = useContext(UsersContext);

    return <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Country</th>
                    <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {                        
                        (context.users?.length > 0 ) ?
                        context.users.map((user,index) => {
                            return <tr key={index}>
                                <td >{user.id}</td>
                                <td >{user.firstName}</td>
                                <td >{user.lastName}</td>
                                <td >{user.country}</td>
                                <td>
                                    <Link to={`/user/${user.id}/edit`}  className="btn btn-primary mx-1">Edit</Link>
                                    <Link to={`/user/${user.id}/delete`}  className="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                        }) 
                        :
                        <tr><td colSpan={4} align={"center"}>No users</td></tr>
                    }
                </tbody>
            </table>
        </>
}