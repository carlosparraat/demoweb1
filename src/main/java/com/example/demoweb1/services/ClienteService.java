/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demoweb1.services;

import com.example.demoweb1.model.Cliente;
import java.util.List;

/**
 *
 * @author Usuario
 */
public interface ClienteService {
    public Cliente save(Cliente cliente);
    public void delete(Integer id);
    public Cliente findById(Integer id);
    public List<Cliente> findAll();
}
