import {BrowserRouter, Link, Routes, Route, Outlet} from "react-router-dom";
import UsersTable from "../UsersTable/UsersTable";
import UsersAdd from "../UsersAdd/UsersAdd";
import UsersEdit from "../UsersEdit/UsersEdit";
import UsersDelete from "../UsersDelete/UsersDelete";

function UsersLayout(){
    return (
        <>
        <BrowserRouter>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to={'/'} className="nav-link " >Users list</Link>                            
                        </li>        
                         <li class="nav-item">
                            <Link to={'/user/create'} className="nav-link " >Add user</Link>                            
                        </li>            
                    </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route index element={<UsersTable/>} />
                <Route path={'/user/create'} element={<UsersAdd />} />
                <Route path={'/user/:id/edit'} element={<UsersEdit />} />
                <Route path={'/user/:id/delete'} element={<UsersDelete />} />
            </Routes>
        </BrowserRouter>
        <Outlet />
        </>
    );
}

export default UsersLayout;




