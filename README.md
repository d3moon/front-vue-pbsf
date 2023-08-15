# Frontend Vue - Desafio PBSF

Essa aplicação destina-se à criação de uma interface para consumo de uma api feita em PHP.
Foi utilizado o React.js como library e Tailwind como estilização.

**As funcionalidades da aplicação são:**

- Criar Vacinas;
- Listar Vacinas;
- Deletar Vacinas;
- Atualizar Vacinas;
- Identificação de tipos de Vacina;

## Instalação


Instale e rode o projeto com:

```bash
  cd front-vue-pbsf
  npm install
  npm run dev
```

ou entre em: [front-vue-pbsf.vercel.app](front-vue-pbsf.vercel.app)

**Instale o bakcend necessário**
```bash
  git clone https://github.com/d3moon/back-php-pbsf.git vacinas
  cd vacinas
```
1. Coloque a pasta em um servidor PHP: ex: (XAMPP)
2. Crie o banco e a respectiva tabela no MySQL:
```sql
    CREATE DATABASE vaccine;
    USE vaccine;

    CREATE TABLE vaccines (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      publico_alvo VARCHAR(20) NOT NULL
    );

```

3. Coloque suas credenciais no arquivo de database:
```bash
    private $host = "";
    private $db_name = "vaccine";
    private $username = "";
    private $password = "";
    private $port = 3306; (Mude caso esteja em outra porta.)
```
4. Suba o servidor PHP com o XAMPP ou outro servidor.

</br>


## Authors

- [João Victor F. Braga](https://www.github.com/d3moon)
- [LinkedIn](https://www.linkedin.com/in/d3moon)
