/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demoweb1.services.implement;

import com.example.demoweb1.dao.ClienteDao;
import com.example.demoweb1.model.Cliente;
import com.example.demoweb1.services.ClienteService;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Usuario
 */
@Service
public class ClienteServiceImpl implements ClienteService {
    @Autowired
    private ClienteDao clientedao;
    
    //Como son 4 métodos, habrán 4 implementaciones
    //implementación de save
    @Override
    @Transactional
    public Cliente save(Cliente cliente) {
        if(cliente.getIdcliente()==null){
            return clientedao.save(cliente);
        } else {
            Optional<Cliente> c = clientedao.findById(cliente.getIdcliente());
            if(c.isEmpty()){
                return clientedao.save(cliente);
            } else {
                return cliente;
            }
        }
        
    }
    //implementación de delete
    @Override
    @Transactional
    public void delete(Integer id){
        clientedao.deleteById(id);
    }
    //implementación de findbyid
    @Override
    public Cliente findById(Integer id){
        return clientedao.findById(id).orElse(null);
    }
    //implementación de findAll
    @Override
    public List<Cliente> findAll() {
        return (List<Cliente>) clientedao.findAll();
    }
}
