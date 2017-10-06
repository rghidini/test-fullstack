package com.test.api.resource;
import org.springframework.hateoas.ResourceSupport;


public class UsuarioResource extends ResourceSupport {

	private String nome;
	private String email;
	private String telefone;
	private String sexo;

	public UsuarioResource() {

	}

	public UsuarioResource(Long id, String nome, String email, String telefone, String sexo) {
		super();
		this.nome = nome;
		this.email = email;
		this.telefone = telefone;
		this.sexo = sexo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	

}
