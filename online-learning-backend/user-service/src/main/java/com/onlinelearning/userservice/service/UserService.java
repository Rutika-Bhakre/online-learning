package com.onlinelearning.userservice.service;

import com.onlinelearning.userservice.dto.LoginRequest;
import com.onlinelearning.userservice.dto.LoginResponse;
import com.onlinelearning.userservice.model.User;
import com.onlinelearning.userservice.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public LoginResponse login(LoginRequest request) {

        // 1️⃣ Find user by email
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid email or password"));

        // 2️⃣ Check if user is active
        if (!user.isActive()) {
            throw new RuntimeException("User account is inactive");
        }

        // 3️⃣ Validate password (PLAIN TEXT - TEMP ONLY)
        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        // 4️⃣ Successful login
        return new LoginResponse(
                "Login successful",
                user.getEmail(),
                user.getRole()
        );
    }
}
