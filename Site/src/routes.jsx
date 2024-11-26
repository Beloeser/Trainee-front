import {
    RouterProvider ,
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom" ;

import Cadastro from"./Pages/Cadastro/Cadastro" ;
import Login from "./Pages/Login/Login" ;

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="login" element={<Login />} />
        </Route>
    )
);

export default function Routes(){
    return <RouterProvider router ={router} />
}
