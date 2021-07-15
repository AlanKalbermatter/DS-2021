package com.utn.ds.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class ControladorInicio {
    
    @GetMapping(path = "/")
    public String home(){
        return "index";
    }
    
}
