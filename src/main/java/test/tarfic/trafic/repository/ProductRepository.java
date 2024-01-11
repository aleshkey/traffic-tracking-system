package test.tarfic.trafic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import test.tarfic.trafic.model.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAll();

    Product findTopByOrderByNumberOfSoldDesc();
    @Query("SELECT AVG(p.conversionRate) FROM Product p")
    Double findAverageConversion();

}
