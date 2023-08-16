# Sử dụng hình ảnh gốc có sẵn cho SonarScanner CLI
FROM sonarsource/sonar-scanner-cli

# Sao chép tệp cấu hình vào bên trong hình ảnh
COPY .sonarcloud.properties /root/.sonarcloud.properties
SHELL ["/bin/bash", "-c"]

# Cài đặt Gradle và Node.js
USER root
RUN apk update && apk add --no-cache gradle nodejs

# Thư mục làm việc mặc định
WORKDIR /usr/src/app

# Lệnh chạy SonarScanner CLI với Gradle
CMD ["gradle", "sonarqube"]
