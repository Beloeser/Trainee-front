import {
    RouterProvider ,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Outlet,
    useNavigate,
    Navigate
} from "react-router-dom" ;

import Cadastro from"./Pages/Cadastro/Cadastro" ;
import Login from "./Pages/Login/Login" ;
import Home from "./Pages/Home/Home";
import AppLayout from "./Components/AppLayout/AppLayout";
import Perfil from "./Pages/Perfil";
import useAuthStore from "./stores/auth";

function RotasPrivadas() {
    const token = useAuthStore((state) =>state.token);

    if(token) return<Outlet/> ;

    return <Navigate to = "/login" replace /> ;
}

const router = createBrowserRouter(
    createRoutesFromElements(
         <Route>
             <Route path ='/' element ={<AppLayout/>}> 

             <Route element ={<RotasPrivadas/> }>


             </Route>
             <Route index element = {<Home/> }/>
             <Route path="cadastro" element={<Cadastro />} />
             <Route path="perfil" element={<Perfil />} />
             
             <Route path="login" element={<Login />} />
            </Route>
            </Route> 

         )
);

export default function Routes(){
    return <RouterProvider router ={router} />
}
