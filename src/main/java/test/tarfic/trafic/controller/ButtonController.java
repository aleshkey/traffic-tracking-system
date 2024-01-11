package test.tarfic.trafic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import test.tarfic.trafic.model.Button;
import test.tarfic.trafic.repository.ButtonRepository;


import java.util.Optional;

@RestController
@RequestMapping("/buttons")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 2000,
        allowedHeaders = "*", allowCredentials = "true")
public class ButtonController {

    @Autowired
    private ButtonRepository buttonRepository;

    @GetMapping("/{buttonId}")
    public ResponseEntity<Object> getNumberOfGuests(@PathVariable("buttonId") String pageId){
        Optional<Button> button = buttonRepository.findById(Long.parseLong(pageId));
        if (button.isPresent()){
            return new ResponseEntity<>(button.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getNumberOfGuestsOfOllPages(){
        var buttons = buttonRepository.findAll();
        return new ResponseEntity<>(buttons, HttpStatus.OK);
    }

}
