import { useState,useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import ClienteService from "../services/ClienteService";


const Cliente = () => {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [dataNacimento, setDataNascimento] = useState("");
    const [senha, setSenha] = useState("");
    const [clientes,setClientes] = useState([]);

    const navigate = useNavigate();

    const getAllCliente = () => {
        ClienteService.getAllCliente()
          .then((response) => {
            setClientes(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      useEffect(() => {
        getAllCliente();
      },[]);



    const criarCliente = (e) => {
        e.preventDefault();

        const cliente = {
            nome, cpf, email, dataNacimento,
            senha
        };

        ClienteService.createCliente(cliente)
        .then((response) => {
        navigate("/Voo")
        alert("cliente cadastrato com sucesso!")
        });


    };

    return (
        <>
            <div className="container">
                <h3>Cadastro Usuário</h3>
                <form  className="form-control">
                    <fieldset>
                        <legend>Dados do Usuario</legend>
                        <p>
                            <label htmlFor="usuario">Usuario:</label>
                            <input type="text"
                                id="usuario"
                                name="usuario"
                                size={40}
                                className="form-control"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required />
                        </p>
                        <p>
                            <label htmlFor="email">Email:</label> 
                            <input
                             type="email"
                              id="email" 
                              name="email" 
                              size={15} 
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                               required />
                        </p>
                        <p>
                            <label htmlFor="data">Data de nascimento:</label>
                             <input type="text"
                              id="data"
                               name="data" 
                               size={40} 
                               className="form-control" 

                               value={dataNacimento}
                               onChange={(e) => setDataNascimento(e.target.value)}
                               required />
                        </p>
                        <p>
                            <label htmlFor="cpf">CPF:</label> 
                            <input
                             type="text" 
                             id="cpf" 
                             name="cpf" 
                             size={40} 
                             className="form-control"
                             value={cpf}
                             onChange={(e) => setCpf(e.target.value)}
                              required />
                        </p>
                        <p>
                            <label htmlFor="senha">Senha:</label>
                             <input 
                             type="password"
                              id="senha" 
                              name="senha"
                               size={40} 
                               className="form-control" 
                               value={senha}
                               onChange={(e) => setSenha(e.target.value)}
                               required />
                        </p>
                        <Link to="/Login">Já tem cadastro? faça o Login </Link>
                        <br /><br />
                        <p>
                            <button type="submit" 
                            className="btn btn-primary" 
                            onClick={(e) => criarCliente(e)}
                            > cadastrar</button>
                        </p>
                    </fieldset>
                </form>
            </div>


        </>
    )
}

export default Cliente;