package test.tarfic.trafic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import test.tarfic.trafic.model.Traffic;

import java.math.BigDecimal;
import java.time.Duration;
import java.util.Date;
import java.util.List;

public interface TrafficRepository extends JpaRepository<Traffic, Long> {

    @Query("SELECT t.enterTime FROM Traffic t " +
            "GROUP BY t.enterTime " +
            "ORDER BY COUNT(t.id) DESC")
    List<Date> findMostActiveTime();

    @Query(value = "SELECT AVG(EXTRACT(EPOCH FROM (exit_time - enter_time))) FROM traffic", nativeQuery = true)
    double getAverageTrafficDuration();


}
