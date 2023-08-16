# Sử dụng hình ảnh gốc có sẵn cho SonarScanner CLI
FROM sonarsource/sonar-scanner-cli

# Sao chép tệp cấu hình vào bên trong hình ảnh
COPY .sonarcloud.properties /root/.sonarcloud.properties

# Cài đặt Gradle và Node.js
RUN apt-get update && apt-get install -y gradle nodejs

# Thư mục làm việc mặc định
WORKDIR /usr/src/app

# Lệnh chạy SonarScanner CLI với Gradle
CMD ["gradle", "sonarqube"]
