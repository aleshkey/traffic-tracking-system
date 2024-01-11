package test.tarfic.trafic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import test.tarfic.trafic.model.Product;
import test.tarfic.trafic.repository.ProductRepository;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 2000,
        allowedHeaders = "*", allowCredentials = "true")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/all")
    public ResponseEntity<Object> getAll(){
        var products = productRepository.findAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/get-most-popular")
    public ResponseEntity<Object> getMostPopularProduct(){
        Product product = productRepository.findTopByOrderByNumberOfSoldDesc();
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/get-conversion-rate")
    public ResponseEntity<Object> getAvgConversion(){
        Map<String, Object> json = new HashMap<>();
        json.put("conversion", productRepository.findAverageConversion());
        return new ResponseEntity<>(json, HttpStatus.OK);
    }

}
