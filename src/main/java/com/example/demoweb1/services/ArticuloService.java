/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demoweb1.services;

import com.example.demoweb1.model.Articulo;
import java.util.List;

/**
 *
 * @author Usuario
 */
public interface ArticuloService {
    public Articulo save(Articulo articulo);
    public void delete(Integer id);
    public Articulo findById(Integer id);
    public List<Articulo> findAll();
}
