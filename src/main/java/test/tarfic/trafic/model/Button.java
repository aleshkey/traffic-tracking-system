package test.tarfic.trafic.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Button{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private int numberOfButtonClick;

}
