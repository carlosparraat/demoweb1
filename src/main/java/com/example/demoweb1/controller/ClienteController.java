/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demoweb1.controller;

import com.example.demoweb1.model.Cliente;
import com.example.demoweb1.services.ClienteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
@RestController
@CrossOrigin("*")  //acepte todas las peticiones entrantes
@RequestMapping("/cliente") //RequestMapping completa el endpoint
public class ClienteController {
    @Autowired
    private ClienteService clienteservice;
    
    //Peticiones GET
    @GetMapping(value="/lista") //se agrega al endpoint
    public List<Cliente> consultartodos(){
        return clienteservice.findAll();
    }
    @GetMapping(value="/lista/{id}")
    public Cliente consultarporId(@PathVariable Integer id){
        return clienteservice.findById(id);
    }
    
    //Petición POST para insertar
    //ResponseEntity<Cliente> agregar(@RequestBody Cliente cliente)
    //Cliente save(@RequestBody Cliente cliente)
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Cliente> agregar(@RequestBody Cliente cliente){
        Cliente cli = clienteservice.save(cliente); //se guarda el cliente
        //System.out.println(cli.getIdcliente());
        return new ResponseEntity<> (cli,HttpStatus.OK);
        //return clienteservice.save(cliente);
    }
    
    //Petición PUT para actualizar
    @PutMapping(value="/{id}")
    public ResponseEntity<Cliente> actualizar(@RequestBody Cliente cliente){
        //Se busca primero el cliente
        Cliente cli = clienteservice.findById(cliente.getIdcliente());
        if (cli!=null) {
            //Encontró al cliente con el id
            cli.setNombre(cliente.getNombre());
            cli.setCorreoelectronico(cliente.getCorreoelectronico());
            cli.setDireccion(cliente.getDireccion());
            clienteservice.save(cli);
        } else {
            //No lo encontró
            return new ResponseEntity<> (cli,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<> (cli,HttpStatus.OK);
    }
    
    //Petición DELETE para borrar
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Cliente> borrar(@PathVariable Integer id){
        //Buscamos por id
        Cliente cli = clienteservice.findById(id);
        if (cli!=null) {
            //Existe el cliente
            clienteservice.delete(id);
        } else {
            return new ResponseEntity<> (cli,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<> (cli,HttpStatus.OK);
    }
}
