# 💰 Finanças App

Aplicativo mobile desenvolvido com React Native e Expo, focado no gerenciamento financeiro pessoal.  
O projeto permite autenticação de usuários, persistência de sessão e gerenciamento de despesas utilizando o Supabase como backend.

---

## 💡 Inspiração

Desenvolvi esse projeto buscando fugir do controle em planilhas das minhas despesas pessoais.
Fora isso, no meu caso, realizo transações que não são minhas logo, tenho a necessidade ter o controle de quem está me devendo e qual o valor. Posto isso, embora nessa versão atual da
aplicação não tenha a funcionalidade de criar categorias, essa é uma melhoria futura que
irei implementar.

---

## 📱 Sobre o Projeto

O objetivo do aplicativo é oferecer uma experiência simples e prática para controle financeiro,
permitindo que cada usuário tenha acesso apenas aos seus próprios registros de despesas.

A aplicação foi construída utilizando tecnologias modernas do ecossistema React Native, seguindo boas práticas de componentização, tipagem com TypeScript e validação de formulários.

---

## 🚀 Funcionalidades

- ✅ Cadastro e autenticação de usuários
- ✅ Persistência automática da sessão do usuário
- ✅ Inserção de despesas
- ✅ Consulta de registros financeiros
- ✅ Exclusão de despesas
- ✅ Integração com banco de dados via Supabase
- ✅ Navegação entre telas
- ✅ Validação de formulários

---

## 🛠️ Tecnologias Utilizadas

### Front-end Mobile

- React Native
- Expo
- TypeScript
- Expo Router

### Backend & Banco de Dados

- Supabase

### Estilização

- NativeWind

### Formulários & Validação

- React Hook Form
- Zod

### Navegação

- Expo Router

### Componentes e UX

- Lucide React Native
- React Native Calendars

---

## 📂 Estrutura do Projeto

```bash
financas/
└──src/
  ├── app/
  ├── components/
  ├── config/
  ├── hooks/
  ├── services/
  ├── screens/
  ├── types/
  └── ...
```

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto

```bash
npx expo start
```

Para Android:

```bash
npx expo run:android
```

Para iOS:

```bash
npx expo run:ios
```

---

## 🔐 Configuração do Supabase

Crie um arquivo `.env` contendo:

```env
EXPO_PUBLIC_SUPABASE_URL=YOUR_URL
EXPO_PUBLIC_SUPABASE_ANON_KEY=YOUR_KEY
```

---

## Configuração no Supabase

Ative a autenticação de usuários utilizando e-mail

Crie uma tabela para armazenar dados dos usuários

Crie um trigger para sempre que um usuário é registrado, realizar uma inserção
na tabela de usuários

Crie uma tabela para as despesas

## 🎯 Objetivos Técnicos do Projeto

Este projeto foi desenvolvido com foco em:

- Evolução na tipagem de dados utilizando TypeScript
- Prática de arquitetura mobile
- Consumo de backend com autenticação
- Manipulação de estado e formulários
- Persistência de sessão
- Integração com banco de dados em tempo real

---

## 📌 Melhorias Futuras

- [ ] Edição de despesas já registradas
- [ ] Adicionar filtro de busca de despesas, por período e/ou categoria
- [ ] Inserção de despesas com parcelas
- [ ] Visualização de despesas futuras

---

## 👨‍💻 Autor

Desenvolvido por Márcio Filho com ☕.
