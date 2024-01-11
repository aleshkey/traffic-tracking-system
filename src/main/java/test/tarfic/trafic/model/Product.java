package test.tarfic.trafic.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    private int numberOfSold;

    private int numberOfGuests;

    private double conversionRate;

}



