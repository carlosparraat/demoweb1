/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demoweb1.controller;

import com.example.demoweb1.model.Articulo;
import com.example.demoweb1.services.ArticuloService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
@RestController
@CrossOrigin("*")
@RequestMapping("/articulo")
public class ArticuloController {
    @Autowired
    private ArticuloService articuloservice;
    @GetMapping(value="/lista")
    public List<Articulo> consultartodo(){
        return articuloservice.findAll();
    }
    @GetMapping(value="/lista/{id}")
    public Articulo consultaporId(@PathVariable Integer id){
        return articuloservice.findById(id);
    }
    @PostMapping(value="/save")
    public ResponseEntity<Articulo> agregar(@RequestBody Articulo articulo) {
        Articulo art;
        art = articuloservice.save(articulo);
        return new ResponseEntity<> (art,HttpStatus.OK);
    }
}
