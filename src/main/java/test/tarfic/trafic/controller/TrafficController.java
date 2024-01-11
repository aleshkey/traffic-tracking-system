package test.tarfic.trafic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import test.tarfic.trafic.model.User;
import test.tarfic.trafic.repository.TrafficRepository;
import test.tarfic.trafic.repository.UserRepository;

import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/traffic")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 2000,
        allowedHeaders = "*", allowCredentials = "true")
public class TrafficController {

    @Autowired
    private TrafficRepository trafficRepository;

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/most-active-time")
    public ResponseEntity<Object> getMostActiveTime(){
        Map<String, Object> json = new HashMap<>();
        var date = trafficRepository.findMostActiveTime().get(0);
        SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm");
        String formattedTime = dateFormat.format(date);
        json.put("most_active_time",formattedTime);
        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    @GetMapping("/avg-active-time")
    public ResponseEntity<Object> getAvgActiveTime(){
        Map<String, Object> json = new HashMap<>();
        Double averageDuration = trafficRepository.getAverageTrafficDuration();
        Duration duration = Duration.ofSeconds(averageDuration.longValue());
        long hours = duration.toHours();
        long minutes = duration.toMinutesPart();
        long seconds = duration.toSecondsPart();

        String formattedDuration = String.format("%02d:%02d:%02d", hours, minutes, seconds);
        json.put("avg_active_time", formattedDuration);
        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<Object> getInfoAboutUser(@PathVariable("username")String username){
        User user = userRepository.findByUsername(username);
        return new ResponseEntity<>(user.getTraffic(), HttpStatus.OK);

    }

}
