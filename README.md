# educAR Frontend

Interface web da plataforma educAR, desenvolvida com HTML, CSS e JavaScript puro, integrada com recursos de Realidade Aumentada utilizando AR.js e A-Frame.

O frontend permite acesso aos dashboards, livro digital e atividades em AR diretamente pelo navegador e dispositivos móveis.

---

# Sobre o projeto

O educAR é uma plataforma educacional com Realidade Aumentada voltada para experiências interativas de aprendizagem.

Os alunos acessam capítulos digitais liberados pelos professores e utilizam o celular para escanear marcadores Hiro presentes nas atividades impressas ou no livro digital.

---

# Funcionalidades

- Tela de login
- Dashboard do aluno
- Dashboard do professor
- Dashboard da gestão
- Livro digital
- Visualização de capítulos
- Integração com API FastAPI
- Realidade Aumentada com AR.js
- Leitura do marcador Hiro
- Visualização 3D no navegador
- Interface responsiva

---

# Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- AR.js
- A-Frame
- Cloudflare Tunnel

---

# Estrutura do projeto

```text
educar-frontend/
│
├── login.html
├── dashboard-aluno.html
├── dashboard-professor.html
├── dashboard-gestao.html
├── livro.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js
│   ├── login.js
│   ├── aluno.js
│   ├── professor.js
│   └── gestao.js
│
├── assets/
│   ├── hiro.png
│   └── textures/
│       └── earth.jpg
│
└── ar/
    └── atividadeAR.html
```

---

# Como executar o frontend

## 1. Clone o repositório

```bash
git clone LINK_FRONTEND
```

---

## 2. Acesse a pasta

```bash
cd educar-frontend
```

---

# Instalação do Cloudflare Tunnel

O Cloudflare Tunnel é utilizado para gerar um link HTTPS público, necessário para funcionamento correto da câmera e da Realidade Aumentada em dispositivos móveis.

---

## Windows

Baixe o Cloudflared:

https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/

Após baixar, coloque o executável dentro da pasta do projeto ou em uma pasta acessível pelo terminal.

---

# Como executar o frontend

## 1. Inicie servidor local

```bash
python -m http.server 5500
```

---

## 2. Inicie o Cloudflare Tunnel

```bash
./cloudflared tunnel --url http://localhost:5500
```

---

# Acesse no navegador

O terminal irá gerar um link HTTPS semelhante a:

```text
https://xxxxx.trycloudflare.com
```

Abra o link no navegador ou no celular.

---

# Realidade Aumentada

O sistema utiliza:

- marcador Hiro
- câmera do dispositivo
- AR.js
- A-Frame

para renderizar objetos 3D em tempo real no navegador.

O HTTPS é necessário para liberar:
- câmera
- sensores
- funcionalidades de AR no celular

---

# Backend necessário

O frontend depende da API do projeto:

```text
educar-backend
```

Certifique-se de que o backend esteja em execução antes de acessar o sistema.

---

# Objetivo

Promover uma experiência educacional interativa por meio da integração entre conteúdos didáticos e Realidade Aumentada.

---

# Equipe

- Poliana Lima Carvalho
- Isamara Silva Evangelista
- Raylla Myrellen Sousa Morais
- Yasmim Evellyn Barbosa Ribeiro
- Raimundo Ítalo Muniz Ribeiro

---

# Orientadora

- Sabrina Nicolle Rodrigues Sousa Rosa
