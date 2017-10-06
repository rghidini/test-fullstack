package com.test.api;

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

import com.test.model.api.model.Usuario;
import com.test.service.api.service.UsuarioServiceImpl;

@RestController
public class UsuarioRestService {

	@Autowired
	private UsuarioServiceImpl usuarioServiceImpl;
	
	@CrossOrigin
	@GetMapping("/api/user")
	public List<Usuario> listar(){
		return usuarioServiceImpl.findAll();
	}
	
	@CrossOrigin
	@PostMapping("/api/user")
	public Usuario cadastrar(@RequestBody Usuario usuario){
		return usuarioServiceImpl.save(usuario);
	}
	
	@CrossOrigin
	@PutMapping("/api/user/{id}")
	public Usuario editar(@PathVariable Long id, @RequestBody Usuario usuario){
		return usuarioServiceImpl.save(usuario);
	}
	
	@CrossOrigin
	@DeleteMapping("/api/user/{id}")
	public void excluir(@PathVariable Long id){
		usuarioServiceImpl.delete(id);
	}
	
	@CrossOrigin
	@GetMapping("/api/user/{id}")
	public Usuario pesquisaPorId(@PathVariable Long id){
		return usuarioServiceImpl.findById(id);
	}
}
