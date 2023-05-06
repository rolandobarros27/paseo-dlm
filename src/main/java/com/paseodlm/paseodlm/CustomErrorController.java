package com.paseodlm.paseodlm;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CustomErrorController implements ErrorController{
    
    @GetMapping("/error")
    public String handleError() {
        // redirect to your custom error page
        return "redirect:/index.html";
    }

    // @Override
    // public String getErrorPath() {
    //     return "/error";
    // }
}
