package test.tarfic.trafic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import test.tarfic.trafic.model.Page;
import test.tarfic.trafic.repository.PageRepository;

import java.util.Optional;

@RestController
@RequestMapping("/pages")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 2000,
        allowedHeaders = "*", allowCredentials = "true")
public class PageController {

    @Autowired
    private PageRepository pageRepository;

    @GetMapping("/{pageId}")
    public ResponseEntity<Object> getNumberOfGuests(@PathVariable("pageId") String pageId){
        Optional<Page> page = pageRepository.findById(Long.parseLong(pageId));
        if (page.isPresent()){
            return new ResponseEntity<>(page.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getNumberOfGuestsOfOllPages(){
        var pages = pageRepository.findAll();
        return new ResponseEntity<>(pages, HttpStatus.OK);
    }

}
