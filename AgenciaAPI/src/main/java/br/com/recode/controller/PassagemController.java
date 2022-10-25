package br.com.recode.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import br.com.recode.model.Passagem;
import br.com.recode.repository.PassagemRepository;







@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class PassagemController {
	
	@Autowired
	private PassagemRepository passagemRepository;
	
	@GetMapping("/Passagem")
	public List<Passagem> listar(){
		return passagemRepository.findAll();
	}
	
	@PostMapping("/passagem")
	public Passagem adicionar(@RequestBody Passagem passagem) {
		return passagemRepository.save(passagem);
	}
	
	
	
	@GetMapping("/{id}")
	public Passagem listarPorId (@PathVariable Long id) {
	
	return passagemRepository.findById(id).get();
	}
	
	@DeleteMapping("/{id}")
	public void delete (@PathVariable Long id) {
	 passagemRepository.deleteById(id);
	}
	
	
	@PutMapping("/{id}")
	public Passagem atualiza(@RequestBody Passagem passagem,@PathVariable Long id) {
		Passagem passagemAtualizado = passagemRepository.findById(id).get();
		passagemAtualizado.setBagagem(passagem.getBagagem());
		passagemAtualizado.setCpf(passagem.getCpf());
		
		passagemAtualizado.setDataPassagem(passagem.getDataPassagem());
		passagemAtualizado.setDestino(passagem.getDestino());
		
		passagemAtualizado.setHora_chegada(passagem.getHora_chegada());
		passagemAtualizado.setHora_partida(passagem.getHora_partida());
		
		passagemAtualizado.setNome_cliente(passagem.getNome_cliente());
		passagemAtualizado.setOrigem(passagem.getOrigem());
		
		passagemAtualizado.setTipo_voo(passagem.getTipo_voo());
		passagemAtualizado.setValor(passagem.getValor());
		
		
		return passagemRepository.save(passagemAtualizado);
	}


}