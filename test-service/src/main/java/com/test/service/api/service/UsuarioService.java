package com.test.service.api.service;

import java.util.List;

import com.test.model.api.model.Usuario;

public interface UsuarioService {
	
	Usuario save(Usuario usuario);
	List<Usuario> findAll();
	Usuario findById(Long id);
	void delete(Long id);

}
