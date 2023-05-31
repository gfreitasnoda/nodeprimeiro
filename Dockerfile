# O comando FROM faz download da Imagem do Node na versão 18
FROM node:18 
# WORKDIR é o diretorio onde o projeto seá instalado dentro da imagem
WORKDIR /usr/src/app
# Estamos copiando todos os arquivos package json e colando no 
# diretorio de trabalho (WORKDIR) app, definido acima
COPY package*.json ./
# Copiando todos os arquivos e diretório app
COPY . .
# Estamos executando os comandos de instalação das dependencias
# do projeto no diretório app 
RUN npm install
# Instalando no sistema o módulo do nodemon
RUN npm i -g nodemon
# Declaração da porta de comunicação usada no projeto
EXPOSE 5050
# Executar o comando de nodemon index.js quando o container subir
CMD ["nodemon","index.js"]
