# Usar a imagem base do PHP com Apache
FROM php:apache

# Copiar os arquivos da landing page para o diretório padrão do Apache
COPY . /var/www/html/

# Expor a porta 80
EXPOSE 80

# Iniciar o servidor Apache
CMD ["apache2-foreground"]