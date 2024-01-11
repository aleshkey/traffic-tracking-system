package test.tarfic.trafic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import test.tarfic.trafic.model.Button;

public interface ButtonRepository extends JpaRepository<Button, Long> {
}
