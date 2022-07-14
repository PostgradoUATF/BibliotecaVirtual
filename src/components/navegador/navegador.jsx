import React from "react";
import {Link} from 'react-router-dom';

function Navegador(){
    return (
        <Link to="/login" className="text-white btn">INICIO DE SESIÓN</Link>
    );
}
export default Navegador;