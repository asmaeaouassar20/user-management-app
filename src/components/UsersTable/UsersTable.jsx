export default function UsersTable({users}){
    return <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (users.length > 0 ) ?
                        users.map((user,index) => {
                            return <tr key={index}>
                                <td >{user.id}</td>
                                <td >{user.firstName}</td>
                                <td >{user.lastName}</td>
                                <td >{user.country}</td>
                            </tr>
                        }) 
                        :
                        <tr><td colSpan={4} align={"center"}>No users</td></tr>
                    }
                </tbody>
            </table>
        </>
}