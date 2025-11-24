# 🌸 Portal de Projetos - Festival de Primavera 2024

Sistema de organização e inscrição de projetos desenvolvido para a Semana do Festival de Primavera de 2024.  
Criado para gerenciar a logística do evento organizado pelo grêmio estudantil, permitindo que alunos visualizassem atividades disponíveis e realizassem inscrições de forma rápida e digital.

---

## ⚡ História do Projeto

Este repositório é o resultado de um **sprint de 24 horas**.

- **O Pedido:** A necessidade surgiu em um sábado, com urgência para organizar o evento da semana seguinte.  
- **O Desafio:** Criar uma plataforma funcional, responsiva e integrada a um banco de dados em apenas **um único dia**.

**O Resultado:** Entregue no domingo à noite, o sistema foi capaz de listar projetos por dia e período, gerenciar inscrições de alunos e gerar listas de presença em PDF.

---

## 🛠️ Tecnologias Utilizadas

A aplicação foi construída com uma stack moderna para garantir agilidade e desempenho:

- **Next.js 14** – Framework React com App Router para estrutura e roteamento  
- **Supabase** – Banco de dados PostgreSQL + autenticação  
- **Tailwind CSS** – Estilização rápida e responsiva  
- **React Hook Form + Zod** – Formulários com validação segura  
- **html2pdf.js** – Geração dos PDFs com listas de alunos inscritos  

---

## ✨ Funcionalidades

### **1. Listagem de Projetos**
A página inicial exibe os projetos de forma organizada:
- Divididos por **dias**: Quarta (18/09), Quinta (19/09) e Sexta (20/09)  
- Separados por **turnos**: Manhã, Tarde e Noite  
- **Cards informativos** com nome, horário e local

### **2. Modal de Detalhes e Gestão**
Ao clicar em um projeto, abre-se um modal com:
- Lista de alunos inscritos por período  
- Dados completos: Nome, Curso (ADM, MKT, DS, RH) e Ano  
- **Botão de download** da lista em PDF

### **3. Sistema de Inscrição**
Formulário em `/projeto/[id]/forms`, com:
- Validação de campos obrigatórios  
- Integração com Supabase para registrar inscrições em tempo real  

---

## 🚀 Como Rodar o Projeto

**1. Clone o repositório:**

```bash
git clone https://github.com/victor-lis/festival-da-primavera-2024.git
```

**2. Instale as dependências:**
```bash
npm install
# ou
yarn install
```

**3. Configure as variáveis de ambiente:**
Crie um arquivo .env.local com:
```.env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

**4. Rode o servidor de desenvolvimento:**
```bash
npm run dev
```

#👤 Autor
- [@Victor-Lis](https://www.linkedin.com/in/victor-lis-bronzo)
