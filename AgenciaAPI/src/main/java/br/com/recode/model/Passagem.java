package br.com.recode.model;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;





import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Entity
@Table
public class Passagem {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
		
	@Column(nullable = false, name = "data_passagem")
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate data_passagem;
	
	@Column(nullable = false)
    private String hora_partida;
	
	@Column(nullable = false)
    private String hora_chegada;
	
	@Column(nullable = false)
    private String origem;
	
	@Column(nullable = false)
    private String destino;
	
	@Column(nullable = false)
    private String tipo_voo;
	
	
	@Column(nullable = false)
    private double valor;
	
	@Column(nullable = false)
    private String bagagem ;
	
	@Column(nullable = false)
    private String nome_cliente;
	
	@Column(nullable = false)
    private String cpf;
	
	

	public Passagem(Long id, LocalDate data_passagem, String hora_partida, String hora_chegada, String origem,
			String destino, String tipo_voo, double valor, String bagagem, String nome_cliente, String cpf) {
		super();
		this.id = id;
		this.data_passagem = data_passagem;
		this.hora_partida = hora_partida;
		this.hora_chegada = hora_chegada;
		this.origem = origem;
		this.destino = destino;
		this.tipo_voo = tipo_voo;
		this.valor = valor;
		this.bagagem = bagagem;
		this.nome_cliente = nome_cliente;
		this.cpf = cpf;
	}
	
	
	public Passagem() {
		
	}

	@Override
	public int hashCode() {
		return Objects.hash(bagagem, cpf, data_passagem, destino, hora_chegada, hora_partida, id, nome_cliente, origem,
				tipo_voo, valor);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Passagem other = (Passagem) obj;
		return Objects.equals(bagagem, other.bagagem) && Objects.equals(cpf, other.cpf)
				&& Objects.equals(data_passagem, other.data_passagem) && Objects.equals(destino, other.destino)
				&& Objects.equals(hora_chegada, other.hora_chegada) && Objects.equals(hora_partida, other.hora_partida)
				&& Objects.equals(id, other.id) && Objects.equals(nome_cliente, other.nome_cliente)
				&& Objects.equals(origem, other.origem) && Objects.equals(tipo_voo, other.tipo_voo)
				&& Double.doubleToLongBits(valor) == Double.doubleToLongBits(other.valor);
	}

	@Override
	public String toString() {
		return "Passagem [id=" + id + ", data_passagem=" + data_passagem + ", hora_partida=" + hora_partida
				+ ", hora_chegada=" + hora_chegada + ", origem=" + origem + ", destino=" + destino + ", tipo_voo="
				+ tipo_voo + ", valor=" + valor + ", bagagem=" + bagagem + ", nome_cliente=" + nome_cliente + ", cpf="
				+ cpf + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDataPassagem() {
		return data_passagem;
	}

	public void setDataPassagem(LocalDate dataPassagem) {
		this.data_passagem = dataPassagem;
	}

	public String getHora_partida() {
		return hora_partida;
	}

	public void setHora_partida(String hora_partida) {
		this.hora_partida = hora_partida;
	}

	public String getHora_chegada() {
		return hora_chegada;
	}

	public void setHora_chegada(String hora_chegada) {
		this.hora_chegada = hora_chegada;
	}

	public String getOrigem() {
		return origem;
	}

	public void setOrigem(String origem) {
		this.origem = origem;
	}

	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}

	public String getTipo_voo() {
		return tipo_voo;
	}

	public void setTipo_voo(String tipo_voo) {
		this.tipo_voo = tipo_voo;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public String getBagagem() {
		return bagagem;
	}

	public void setBagagem(String bagagem) {
		this.bagagem = bagagem;
	}

	public String getNome_cliente() {
		return nome_cliente;
	}

	public void setNome_cliente(String nome_cliente) {
		this.nome_cliente = nome_cliente;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	


	

}
