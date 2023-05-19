/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demoweb1.services.implement;

import com.example.demoweb1.dao.ArticuloDao;
import com.example.demoweb1.model.Articulo;
import com.example.demoweb1.services.ArticuloService;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Usuario
 */
@Service
public class ArticuloServiceImpl implements ArticuloService {
    @Autowired
    private ArticuloDao articulodao;
    @Override
    @Transactional
    public Articulo save(Articulo articulo){
        return articulodao.save(articulo);
    }
    @Override
    @Transactional
    public void delete(Integer id){
        articulodao.deleteById(id);
    }
    @Override
    public Articulo findById(Integer id){
        return articulodao.findById(id).orElse(null);
    }
    @Override
    public List<Articulo> findAll(){
        return (List<Articulo>) articulodao.findAll();
    }
}
