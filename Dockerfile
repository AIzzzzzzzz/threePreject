# 设置基础镜像
FROM nginx
# 定义作者
MAINTAINER lihongyuan
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY .  /usr/share/nginx/html/