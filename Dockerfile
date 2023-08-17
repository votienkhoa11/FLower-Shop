# Sử dụng hình ảnh gốc có sẵn cho SonarScanner CLI
FROM sonarsource/sonar-scanner-cli


# Cài đặt Gradle và Node.js
USER root
RUN apk add --update nodejs npm 
RUN npm install -g react-native-cli


# Sao chép tệp cấu hình React Native vào hình ảnh
COPY sonar-project.properties /usr/src/sonar-project.properties
USER sonar-scanner
# Thư mục làm việc mặc định
WORKDIR /usr/src
# Lệnh chạy SonarScanner
#CMD ["sonar-scanner"]
