package com.onlinelearning.userservice.controller;

import com.onlinelearning.userservice.dto.ApiResponse;
import com.onlinelearning.userservice.dto.PaymentRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/payments")
public class PaymentController {

    @PostMapping("/create")
    public ApiResponse<String> createPayment(@RequestBody PaymentRequest request) {

        // Later integrate Stripe/Razorpay
        String paymentId = "PAY_" + System.currentTimeMillis();

        return new ApiResponse<>(
            true,
            "Payment initiated successfully",
            paymentId
        );
    }
}
