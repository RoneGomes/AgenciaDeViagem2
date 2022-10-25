
const Pacote = () => {

    return (
        <>
            <div>
                <section id="secaoPacote">
                    {/*-incio form comprar passagem*/}
                    <br /><br /><br />
                    <div className=" p-5 " style={{ border: 'solid', borderRadius: 50, width: '90%', marginLeft: '5%', borderColor: '#5CA255' }}>
                        <form className="row gx-3 gy-2 align-items-center">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <h1 className="display-5" style={{ fontWeight: 'bold' }}>Pacotes</h1>
                                <hr className="my-2" />
                                <br />
                            </div>
                            <br /><br /><br /><br /><br /><br />
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <select className="form-select" aria-label="Disabled select example">
                                        <option selected>Origem</option>
                                        <option value={1}>Salvador</option>
                                        <option value={2}>Rio de Janeiro</option>
                                        <option value={3}>São Paulo</option>
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <select className="form-select" aria-label="Disabled select example">
                                        <option selected>Origem</option>
                                        <option value={1}>Salvador</option>
                                        <option value={2}>Rio de Janeiro</option>
                                        <option value={3}>São Paulo</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="input-group flex-nowrap">
                                        <input type="text" className="form-control" placeholder="check-in" />
                                        <input type="text" className="form-control" placeholder="check-out" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <select className="form-select" aria-label="Disabled select example">
                                        <option selected>viajentes</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <button type="submit" style={{ borderRadius: 10, backgroundColor: '#5CA255', width: '100%' }}>Buscar
                                        pacote</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <br /><br /><br />
                </section>
                <br /><br /><br />
                {/*fim do do form*/}
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
                        <div className="col-lg-4 col-md-6 col-sm-12 ">
                            <div className="card mb-3" style={{ maxWidth: 540, border: 'solid', backgroundColor: '#5CA255', borderColor: '#E0E0E0' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="imagens/pacote2.webp" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <br />
                                            <h2 style={{ color: '#E0E0E0' }}>Destinos</h2>
                                            <br />
                                            <h5 style={{ color: '#E0E0E0' }}><a>Conheça nossos destinos!</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </section>
                {/*-começo seção de pacotes--*/}
                <section>
                    <div className="row  my-2">
                        <h2>Nossos Pacotes</h2>
                        <div className="col-lg-3 col-md-6 col-sm-12 ">
                            <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                                <img className="card-img-top" src="imagens/pacote1.webp" alt="Title" />
                                <div className="card-body">
                                    <h4 className="card-title">Balneario Caboriu</h4>
                                    <h6>conheça agora!</h6>
                                    <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                                <img className="card-img-top" src="imagens/hospe3.webp" alt="Fortaleza" />
                                <div className="card-body">
                                    <h4 className="card-title">Fotaleza</h4>
                                    <h6>conheça agora!</h6>
                                    <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                                <img className="card-img-top" src="imagens/pacote3.webp" alt="Foz Iguaçú" />
                                <div className="card-body">
                                    <h4 className="card-title">Foz Iguaçú</h4>
                                    <h6>conheça agora!</h6>
                                    <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 ">
                            <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                                <img className="card-img-top" src="imagens/pacote4.webp" alt="Gramado" />
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
                                <img className="card-img-top" src="imagens/hospe2.webp" alt="João Pessoa" />
                                <div className="card-body">
                                    <h4 className="card-title">João Pessoa</h4>
                                    <h6>conheça agora!</h6>
                                    <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 ">
                            <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                                <img className="card-img-top" src="imagens/pacote7.webp" alt="P" />
                                <div className="card-body">
                                    <h4 className="card-title">Porto Seguro</h4>
                                    <h6>conheça agora!</h6>
                                    <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                                <img className="card-img-top" src="imagens/pacote8.webp" alt />
                                <div className="card-body">
                                    <h4 className="card-title">Rio de Janeiro</h4>
                                    <h6>conheça agora!</h6>
                                    <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div style={{ border: 'solid', borderColor: '#5CA255', backgroundColor: '#E0E0E0' }}>
                                <img className="card-img-top" src="imagens/pacote9.webp" alt="Porto de Galinhas" />
                                <div className="card-body">
                                    <h4 className="card-title">Porto de Galinhas</h4>
                                    <h6>conheça agora!</h6>
                                    <button style={{ backgroundColor: '#5CA255' }}>Visitar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br /><br /><br /><br />
                <section>
                    <div className="row  my-2">
                        <h2 style={{ color: 'red' }}>Aproveite as nossas promoçoes!</h2>
                        <div className="col-lg-4 col-md-6 col-sm-12 ">
                            <div className="card text-start">
                                <img className="card-img-top" src="imagens/porto-seguro.jpg" alt="Porto Seguro" />
                                <div className="card-body">
                                    <h4 className="card-title">Porto Seguro</h4>
                                    <hr />
                                    <h5 style={{ color: 'red' }}>Promoção</h5>
                                    <br />
                                    <font style={{ color: 'red' }}><strike>De: 1300,00</strike></font><br /><br />
                                    <font>Por: 1100</font> <br /><br />
                                    <button className="btn btn-primary">Saiba Mais</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card text-start">
                                <img className="card-img-top" src="imagens/Gramado-2.jpg" alt="Gramado" />
                                <div className="card-body">
                                    <h4 className="card-title">Gramado</h4>
                                    <hr />
                                    <h5 style={{ color: 'red' }}>Promoção</h5>
                                    <br />
                                    <font style={{ color: 'red' }}><strike>De: 900,00</strike></font><br /><br />
                                    <font>Por: 700,00</font> <br /><br />
                                    <button className="btn btn-primary">Saiba Mais</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card text-start">
                                <img className="card-img-top" src="imagens/punta-cana.jpg" alt="Punta" />
                                <div className="card-body">
                                    <h4 className="card-title">Punta Cana</h4>
                                    <hr />
                                    <h5 style={{ color: 'red' }}>Promoção</h5>
                                    <br />
                                    <font style={{ color: 'red' }}><strike>De: 5000,00</strike></font><br /><br />
                                    <font>Por: 4000,00</font> <br /><br />
                                    <button className="btn btn-primary">Saiba Mais</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br /><br /><br /><br />
            </div>

        </>

    )
}

export default Pacote;