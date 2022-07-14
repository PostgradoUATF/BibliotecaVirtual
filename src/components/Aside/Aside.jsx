import React from "react";
import {Link} from 'react-router-dom';
function MenuAside(){
    return(
        <div className="d-flex flex-column " id="menu">
            <Link to="/diplomados" className="text-white btn">DIPLOMADOS</Link>
            <Link to="/maestrias" className="text-white btn">MAESTRIAS</Link>
            <Link to="/doctorados" className="text-white btn">DOCTORADOS</Link>
            <Link to="/especialidades" className="text-white btn">ESPECIALIDAD</Link>
        </div>
    );
}
export default MenuAside;