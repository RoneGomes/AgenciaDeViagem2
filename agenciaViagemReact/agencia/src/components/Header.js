
import { Link } from "react-router-dom";


const Header = () => {

   
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: '#5CA255' }}>
                <div className="container-fluid">
                    <img src="imagens/mundo3.png" />
                    <Link className="navbar-brand"  style={{ fontSize: 35 }}>DREAM TRIP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to="/Voo"><img src="imagens/aviao4.png" />  Voo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Hotel"><img src="imagens/hotel4.png" />  Hotel</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/Pacote"><img src="imagens/mala3.png" />  Pacotes</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="Aluguel"><img src="imagens/carro.png" />  Aluguel de carro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Contato"><img src="imagens/contato.png" />  Contato</Link>
                            </li>

                            <div className="dropdown">
                            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="imagens/user.png" alt=" " />
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link  className="dropdown-item" to="Login">Fazer Login</Link></li>
                                <li><Link className="dropdown-item" to="Cliente">Cadastrar</Link></li>
                            </ul>
                        </div>
                        </ul>
                        
                    </div>
                </div>
            </nav>


        </>
    )
}


export default Header;