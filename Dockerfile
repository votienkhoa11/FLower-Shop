# Sử dụng hình ảnh gốc có sẵn cho SonarScanner CLI
FROM sonarsource/sonar-scanner-cli

# Sao chép tệp cấu hình vào bên trong hình ảnh
COPY .sonarcloud.properties /root/.sonarcloud.properties
SHELL ["/bin/bash", "-c"]
RUN apk add dpkg
RUN uname -a
RUN wget http://ftp.cn.debian.org/debian/pool/main/a/apt/apt_2.7.3_amd64.deb
RUN dpkg --add-architecture amd64
RUN dpkg -i apt_2.7.3_amd64.deb
# Cài đặt Gradle và Node.js
USER root
RUN apt update && apt install -y gradle nodejs

# Thư mục làm việc mặc định
WORKDIR /usr/src/app

# Lệnh chạy SonarScanner CLI với Gradle
CMD ["gradle", "sonarqube"]
