import { useState } from "react";

import { useNavigate } from "react-router-dom";


import PassagemService from "../services/PassagemService";


export default function Voo() {
    const [bagagem, setBagagem] = useState("com bagagem");
    const [cpf, setCpf] = useState("55884666");
    const [dataPassagem, setDataPassagem] = useState("");
    const [destino, setDestino] = useState("");
    const [horaChegada, setHoraChegada] = useState("2:30");
    const [horaPartida, setHoraPartida] = useState("8:20");
    const [nomeCliente, setNomeCliente] = useState("clenilson");
    const [origem, setOrigem] = useState("");
    const [tipoVoo, setTipoVoo] = useState("domestico");
    const [valor, setValor] = useState(500.00);

    const navigate = useNavigate();






    const criarPassagem = (e) => {
        e.preventDefault();

        const passagem = {
            bagagem, cpf, dataPassagem, destino,
            horaChegada, horaPartida, nomeCliente, origem
            , tipoVoo, valor
        };

        PassagemService.createPassagem(passagem).then(() => {
            navigate("/Voo");

        });

        alert("passagem comprada")
    };

   





    return (
        <>

            <section id="secaoPassagem">

                <br /><br /><br />
                <div className=" p-5 " style={{ border: 'solid', borderRadius: 50, width: '90%', marginLeft: '5%', borderColor: '#5CA255' }}>
                    <form className="row gx-3 gy-2 align-items-center">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <h1 className="display-5" style={{ fontWeight: 'bold' }}>Comprar Passagem</h1>
                            <hr className="my-2" />
                            <br />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                <h6 className="form-check-label" htmlFor="inlineRadio1">somente ida</h6>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                <h6 className="form-check-label" htmlFor="inlineRadio2">ida e volta</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="form-check">
                                <input className="form-check-input" type={"checkbox"} />
                                <h6 className="form-check-label" htmlFor="flexCheckIndeterminate">
                                    Com bagagem dispachada
                                </h6>
                            </div>
                        </div>
                        <br /><br /><br /><br /><br /><br />
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <select
                                    className="form-select"
                                    aria-label="Disabled select example"

                                    onChange={(e) =>
                                        setOrigem(e.target.value)
                                    }
                                >

                                    <option selected>buscar origem</option>
                                    <option value={"Salavdor"}>Salvador</option>
                                    <option value={"Rio de Janeiro"}>Rio de Janeiro</option>
                                    <option value={"São Paulo"}>São Paulo</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <select className="form-select"
                                    aria-label="Disabled select example"
                                    onChange={(e) =>
                                        setDestino(e.target.value)
                                    }
                                >
                                    <option selected>buscar destino</option>
                                    <option value={"Salavdor"}>Salvador</option>
                                    <option value={"Rio de Janeiro"}>Rio de Janeiro</option>
                                    <option value={"São Paulo"}>São Paulo</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="input-group flex-nowrap">
                                    <input type="date"
                                        className="form-control"
                                        placeholder="Data ida"
                                        id="DataIda"
                                        value={dataPassagem}
                                        onChange={(e) => setDataPassagem(e.target.value)}


                                    />
                                    <input type="date"
                                        className="form-control"
                                        placeholder="Data volta"

                                    />
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-6 col-sm-12">
                                <select className="form-select" aria-label="Disabled select example">
                                    <option selected>passageiros</option>
                                    <option value={1} >1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </select>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <button type="submit"
                                    onClick={(e) => criarPassagem(e)}
                                    style={{ borderRadius: 10, backgroundColor: '#5CA255', width: '100%' }}>
                                    Buscar
                                    voo</button>
                            </div>
                        </div>
                    </form>
                </div>
                <br /><br /><br />
            </section>
            <br />



            <section>
                <div className="row  my-2">
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="card mb-3" style={{ maxWidth: 540, border: 'solid', backgroundColor: '#5CA255', borderColor: '#E0E0E0' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="imagens/hospe1.webp" className="img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <br />
                                        <h2 style={{ color: '#E0E0E0' }}>Hotéis</h2>
                                        <br /><br />
                                        <h5 style={{ color: '#E0E0E0' }}><a>Conheça nossos hotéis!</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="card mb-3" style={{ maxWidth: 540, border: 'solid', backgroundColor: '#5CA255', borderColor: '#E0E0E0' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="imagens/pacote1.webp" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <br />
                                        <h2 style={{ color: '#E0E0E0' }}>Pacotes</h2>
                                        <br /><br />
                                        <h5 style={{ color: '#E0E0E0' }}><a>Conheça nossos pacotes!</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="card mb-3" style={{ maxWidth: 540, border: 'solid', backgroundColor: '#5CA255', borderColor: '#E0E0E0' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="imagens/carro2.webp" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <br />
                                        <h2 style={{ color: '#E0E0E0' }}>Aluguel de carros</h2>
                                        <br />
                                        <h5 style={{ color: '#E0E0E0' }}><a>Conheça nossos carros!</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
            </section>





            <section>
                <div className="row  my-2">
                    <h2>Destinos Nacionais</h2>
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/balneario-camboriu-parque-unipraias-15-sc-divulgacao-cvc-.jpg" alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">Balneario Caboriu</h4>
                                <h6>conheça agora!</h6>
                                <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/fortaleza-2.jpg" alt="Fortaleza" />
                            <div className="card-body">
                                <h4 className="card-title">Fotaleza</h4>
                                <h6>conheça agora!</h6>
                                <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/foz-do-iguacu-parque-nacional-shutterstock-337634303.jpg" alt="Foz Iguaçú" />
                            <div className="card-body">
                                <h4 className="card-title">Foz Iguaçú</h4>
                                <h6>conheça agora!</h6>
                                <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/Gramado-2.jpg" alt="Gramado" />
                            <div className="card-body">
                                <h4 className="card-title">Gramado</h4>
                                <h6>conheça agora!</h6>
                                <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  my-2">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/joao pessoa.jpg" alt="João Pessoa" />
                            <div className="card-body">
                                <h4 className="card-title">João Pessoa</h4>
                                <h6>conheça agora!</h6>
                                <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/porto-seguro.jpg" alt="Porto Seguro" />
                            <div className="card-body">
                                <h4 className="card-title">Porto Seguro</h4>
                                <h6>conheça agora!</h6>
                                <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/rio-2_0.jpg" alt="Rio De Janeiro" />
                            <div className="card-body">
                                <h4 className="card-title">Rio de Janeiro</h4>
                                <h6>conheça agora!</h6>
                                <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/porto-de-galinhas-praia-aerea_0.jpg" alt="Porto de Galinhas" />
                            <div className="card-body">
                                <h4 className="card-title">Porto de Galinhas</h4>
                                <h6>conheça agora!</h6>
                                <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
            <section>
                <h2>Destinos Internacionais</h2>
                <div className="row  my-2">
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div style={{ border: 'solid', borderColor: '#080C0D', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/lisboa-thinkstock-516950227_2.jpg" alt="Lisbao" />
                            <div className="card-body">
                                <h4 className="card-title">Lisboa</h4>
                                <h6>conheça agora!</h6>
                                <button className="btn btn-primary">Visitar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div style={{ border: 'solid', borderColor: '#080C0D', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/orlando-3.jpg" alt="Orlando" />
                            <div className="card-body">
                                <h4 className="card-title">Orlando</h4>
                                <h6>conheça agora!</h6>
                                <button className="btn btn-primary">Visitar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div style={{ border: 'solid', borderColor: '#080C0D', backgroundColor: '#E0E0E0' }}>
                            <img className="card-img-top" src="imagens/punta-cana.jpg" alt="Punta Cana" />
                            <div className="card-body">
                                <h4 className="card-title">Punta Cana</h4>
                                <h6>conheça agora!</h6>
                                <button className="btn btn-primary">Visitar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br />

            <section>
                <h2 style={{ color: 'red' }}>Aproveite as nossas promoçoes!</h2>
                <div className="row  my-2">
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="card text-start" style={{ border: 'solid', borderColor: 'red' }}>
                            <img className="card-img-top" src="imagens/lisboa-thinkstock-516950227_2.jpg" alt="Lisbao" />
                            <div className="card-body">
                                <h4 className="card-title">Lisboa</h4>
                                <hr />
                                <h5 style={{ color: 'red' }}>Promoção</h5>
                                <br />
                                <font style={{ color: 'red' }}><strike>De: 7000,00</strike></font><br /><br />
                                <font>Por: 5500,00</font> <br /><br />
                                <button className="btn btn-primary">Saiba mais</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card text-start" style={{ border: 'solid', borderColor: 'red' }}>
                            <img className="card-img-top" src="imagens/punta-cana.jpg" alt="punta" />
                            <div className="card-body">
                                <h4 className="card-title">Puanta</h4>
                                <hr />
                                <h5 style={{ color: 'red' }}>Promoção</h5>
                                <br />
                                <font style={{ color: 'red' }}><strike>De: 6000,00</strike></font><br /><br />
                                <font>Por: 5000,00</font> <br /><br />
                                <button className="btn btn-primary">Saiba mais</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card text-start" style={{ border: 'solid', borderColor: 'red' }}>
                            <img className="card-img-top" src="imagens/rio-2_0.jpg" alt="Rio de Janeiro" />
                            <div className="card-body">
                                <h4 className="card-title">Rio de Janeiro</h4>
                                <hr />
                                <h5 style={{ color: 'red' }}>Promoção</h5>
                                <br />
                                <font style={{ color: 'red' }}><strike>De: 1200,00</strike></font><br /><br />
                                <font>Por: 999,00</font> <br /><br />
                                <button className="btn btn-primary">Saiba mais</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br />


        </>

    )
}
