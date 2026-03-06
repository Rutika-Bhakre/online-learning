# Use Java 17 slim image
FROM eclipse-temurin:21-jdk-jammy

# Set working directory in container
WORKDIR /app

# Copy jar into container
COPY target/userservice-0.0.1-SNAPSHOT.jar app.jar

# Expose port 8081
EXPOSE 8081

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]
