package com.test.model.api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.test.model.api.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario,Long> {
	List<Usuario> findAll();
}
