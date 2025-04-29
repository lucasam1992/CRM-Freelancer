
# 🧠 CRM para Freelancers

Este projeto é um CRM (Customer Relationship Management) focado em freelancers, que gerencia clientes, propostas, contratos, produtividade, finanças e comunicação integrada.

## ✨ Funcionalidades do MVP
Gestão de Clientes (cadastro, atualização, exclusão)

Criação e envio de Propostas/Orçamentos

Gerenciamento de Contratos fechados

Controle de Tarefas e Produtividade

Automação de Pagamentos e Emissão de Notas Fiscais

Sistema de Lembretes e Notificações automáticas

Painel Administrativo (Dashboard)

## 📚 Estrutura do Back End (NestJS)
```src/
├── auth/          # Autenticação e autorização
├── users/         # Usuários (freelancers)
├── clients/       # Gestão de clientes
├── proposals/     # Propostas e orçamentos
├── contracts/     # Contratos
├── tasks/         # Tarefas e produtividade
├── payments/      # Controle de pagamentos
├── invoices/      # Emissão de notas fiscais
├── messages/      # Comunicação (WhatsApp/E-mail)
├── reminders/     # Lembretes automáticos
└── notifications/ # Notificações via WebSocket
```
## 🛠️ Tecnologias Principais

**Back-end:** NestJS, Prisma ORM, PostgreSQL, Socket.IO (Websockets), JWT (Autenticação segura)

**Front-end:** Reactjs, TailwindCSS

