# Sử dụng hình ảnh gốc có sẵn cho SonarScanner CLI
FROM sonarsource/sonar-scanner-cli

# Sao chép tệp cấu hình vào bên trong hình ảnh
COPY .sonarcloud.properties /root/.sonarcloud.properties

# Cài đặt Gradle và Node.js
USER root
RUN apk update && apk add --no-cache gradle nodejs 
RUN npm install -g react-native-cli

# Thư mục làm việc mặc định
WORKDIR /usr/src/android

# Lệnh chạy SonarScanner CLI với Gradle
CMD ["gradle", "sonarqube"]
