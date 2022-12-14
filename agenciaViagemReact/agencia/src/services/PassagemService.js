import axios from "axios";

const PASSAGEM_API_URL = "http://localhost:8080/passagem";

class PassagemService {
  getAllPassagens() {
    return axios.get(PASSAGEM_API_URL);
  }

  createPassagem(passagem) {
    return axios.post(PASSAGEM_API_URL,passagem);
  }

  getPassagemById(passagemId) {
    return axios.get(PASSAGEM_API_URL + "/" + passagemId);
  }

  updatePassagem(passagem) {
    return axios.put(PASSAGEM_API_URL + "/" + passagem);
  }

  deletePassagem(passagemId) {
    return axios.delete(PASSAGEM_API_URL + "/" + passagemId);
  }
}

export default new PassagemService();