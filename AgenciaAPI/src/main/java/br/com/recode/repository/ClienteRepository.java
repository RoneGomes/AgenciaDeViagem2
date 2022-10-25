package br.com.recode.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.recode.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
