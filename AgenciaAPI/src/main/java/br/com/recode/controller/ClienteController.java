package br.com.recode.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.recode.model.Cliente;
import br.com.recode.repository.ClienteRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class ClienteController {


		
		@Autowired
		private ClienteRepository clienteRepository;
		
		@GetMapping("/cliente")
		public List<Cliente> listar(){
			return clienteRepository.findAll();
		}
		
		@PostMapping("/cliente")
		public Cliente adicionar(@RequestBody Cliente cliente) {
			return clienteRepository.save(cliente);
		}
		
		
		
		@GetMapping("/cliente/{id}")
		public Cliente listarPorId (@PathVariable Long id) {
		
		return clienteRepository.findById(id).get();
		}
		
		@DeleteMapping("/cliente/{id}")
		public void delete (@PathVariable Long id) {
		 clienteRepository.deleteById(id);
		}
		
		
		@PutMapping("/cliente/{id}")
		public Cliente atualiza(@RequestBody Cliente cliente,@PathVariable Long id) {
			Cliente clienteAtualizado = clienteRepository.findById(id).get();
			clienteAtualizado.setNome(cliente.getNome());
			clienteAtualizado.setEmail(cliente.getEmail());
			clienteAtualizado.setCpf(cliente.getCpf());
			clienteAtualizado.setData_nascimento(cliente.getData_nascimento());
			clienteAtualizado.setSenha(cliente.getSenha());
						
			
			return clienteRepository.save(clienteAtualizado);
		}
}
