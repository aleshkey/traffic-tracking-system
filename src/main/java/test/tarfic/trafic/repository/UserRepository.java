package test.tarfic.trafic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import test.tarfic.trafic.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
