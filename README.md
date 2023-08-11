# Frontend Vue - Desafio PBSF

Essa aplicação destina-se à criação de uma interface para consumo de uma api feita usando uma biblioteca do Python chamada Django Rest Framework.
Foi utilizado o React.js como library e Tailwind como estilização.

**Por conta da falta de tempo, não consegui implementar o gráfico de Pizza (Adulto/Criança), mas os conceitos estão bem sólidos no código e o gráfico está disponível na versão React**

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

**Instale o backend necessário:**

```bash
  git clone https://github.com/d3moon/back-pbsf.git
  cd back-pbsf
  python3 -m virtualenv venv
  source venv/bin/activate
  pip install -r requirements.txt
  python3 manage.py migrate
  python3 manage.py runserver
```

## Authors

- [João Victor F. Braga](https://www.github.com/d3moon)
- [LinkedIn](https://www.linkedin.com/in/d3moon)
