import { Link } from "react-router-dom";


const Login = ()=>{
    return(

        <>
         <div className="container">
                <h3>Login</h3>
                <form action="InserirCliente" method="post" className="form-control">
                    <fieldset>
                        <legend>Dados do Login</legend>
                        <p>
                            <label htmlFor="usuario">Usuario:</label> <input type="text" id="usuario" name="usuario" size={40} className="form-control" required />
                        </p>
                       
                        
                        <p>
                            <label htmlFor="senha">Senha:</label> <input type="password" id="senha" name="senha" size={40} className="form-control" required />
                        </p>
                        <Link to="/Cliente" >Ainda não tem cadastro?</Link>
                        <br /><br />
                        <p>
                            <input type="submit" defaultValue="Cadastrar Usuario" className="btn btn-primary" />
                        </p>
                    </fieldset>
                </form>
            </div>

            <br/><br/><br/><br/><br/>
        
        
        </>
    )
}

export default Login;