# DCCord

> - Este projeto foi idealizado na disciplina **DCC704 - Arquitetura e tecnologias de Sistemas Web** da Universidade Federal de Roraima **(UFRR)**
> - Trata-se de um ambiente de conversação em tempo real baseado em softwares já existentes como o WhatsApp e o Discord

---

## Tecnologias

### [ReactJs](https://pt-br.reactjs.org/)

<br>
<img src="./images/logo-react.jpg" width="250px">  
<br><br>

### [Nextjs](https://nextjs.org/)

<br>
<img src="./images/logo-next.png" width="250px">  
<br><br>

---

## Como executar o projeto

### **1. Instalar os pacotes:**

<br>

    npm install

### **2. Adicionar os arquivos com informações sensiveis**

<br>

> **PROFESSOR** Verificar no Slack

<br>

#### .env

    // Caminho: /.env
    // arquivo com informação do banco de dados

    DATABASE_URL="String-de-conexão-com-o-banco-de-dados-postgres"

#### Auth.json

    // Caminho: /config/Auth.json
    // arquivo que contém a chave md5 utilizada na autenticação JWT

    {
        secret: "chave-md5-gerada"
    }

### **3. Iniciar o servidor no modo de desenvolvimento**

    npm run dev