

const Contato = () => {

    return (
        <>
            <div>
                <div className="p-5 bg-light">
                    <div className="container">
                        <h1 className="display-3">Fale conosco</h1>
                        <hr className="my-2" />
                    </div>
                </div>
                {/*fim jumbottrom*/}
                <section className="container">
                    <div className="row  my-2">
                        <div className="col-3" />
                        <div className="col col-lg-4 col-md-4 col-sm-12">
                            <img src="../imagens/o-email.png" alt />
                            <h5>dreamtrip@email.com</h5>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-12">
                            <img src="../imagens/whatsapp.png" alt />
                            <h5>(71)999999999</h5>
                        </div>
                        <div className="col-2" />
                    </div>
                    <div className="col-8 mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Digite seu
                            email</label> <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="col-8 mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Digite
                            sua mesagem</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <input type="submit" defaultValue="Enviar" />
                    <br /><br /><br /><br />
                </section>
            </div>



        </>

    )
}

export default Contato;