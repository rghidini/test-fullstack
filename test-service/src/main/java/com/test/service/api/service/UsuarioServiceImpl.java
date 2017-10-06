package com.test.service.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.test.model.api.model.Usuario;
import com.test.model.api.repository.UsuarioRepository;

@Component
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Override
	public Usuario save(Usuario usuario) {
		if(StringUtils.isEmpty(usuario.getNome())){
			throw new RuntimeException("The required field nome is empty");
		}else if (StringUtils.isEmpty(usuario.getSexo())){
			throw new RuntimeException("The required field sexo is empty");
		}else if (StringUtils.isEmpty(usuario.getTelefone())){
			throw new RuntimeException("The required field telefone is empty");
		}else if (StringUtils.isEmpty(usuario.getEmail()) && !(usuario.getEmail().contains("@"))){
			throw new RuntimeException("The required field email is empty or is invalid");
		}
		return usuarioRepository.save(usuario);
	}

	@Override
	public List<Usuario> findAll() {
		return usuarioRepository.findAll();
	}

	@Override
	public Usuario findById(Long id) {
		Usuario usuario = usuarioRepository.findOne(id);
		if(usuario == null) {
			throw new RuntimeException("Usuário not found!");
		}
		return usuario; 
	}

	@Override
	public void delete(Long id) {
		usuarioRepository.delete(id);
	}

}
