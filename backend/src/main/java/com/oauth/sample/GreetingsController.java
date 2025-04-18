package com.oauth.sample;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingsController {

    //Dummy endpoint
    @GetMapping("/hello")
    public String sayHello(){
        return "SUCCESSFUL LOGIN";
    }
}
