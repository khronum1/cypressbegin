# 🔐 Casos de Teste - Login OrangeHRM

## 📋 Cenário 01: Login na Plataforma

---

### ✅ Caso de Teste 01: Login com Credenciais Válidas

| Campo | Descrição |
|-------|-----------|
| **ID** | C01-CT01 |
| **Descrição** | O login será realizado com um nome de usuário e uma senha válidos. |
| **Pré-condições** | As credenciais fornecidas (usuário e senha) devem ser válidas. |
| **Prioridade** | Alta |
| **Tipo** | Funcional - Positivo |

<br>

#### 📝 Passos de Execução

```gherkin
DADO que estamos na página de login do OrangeHRM
E preenchemos "Admin" no campo usuário
E preenchemos "admin123" no campo senha
QUANDO clicarmos no botão "Login"
ENTÃO seremos redirecionados para o Dashboard do sistema
```

<br>

#### ✔️ Critérios de Aceitação

- O redirecionamento para o Dashboard deve ocorrer corretamente
- Não deve haver mensagens de erro
- A sessão do usuário deve ser criada com sucesso

<br>

#### 📊 Resultado Esperado

✅ Usuário autenticado e redirecionado para o Dashboard

<br>
<br>

---

### ❌ Caso de Teste 02: Tentativa de Login com Senha Incorreta

| Campo | Descrição |
|-------|-----------|
| **ID** | C01-CT02 |
| **Descrição** | O login falhará quando a senha for inválida. |
| **Pré-condições** | O usuário "Admin" deve existir no sistema. |
| **Prioridade** | Alta |
| **Tipo** | Funcional - Negativo |

<br>

#### 📝 Passos de Execução

```gherkin
DADO que estamos na página de login do OrangeHRM
E preenchemos "Admin" no campo usuário
E preenchemos "senhaerrada" no campo senha
QUANDO clicarmos no botão "Login"
ENTÃO uma mensagem de erro "Invalid credentials" será exibida
```

<br>

#### ✔️ Critérios de Aceitação

- A mensagem de erro "Invalid credentials" deve ser exibida
- O usuário não deve ser autenticado
- O usuário deve permanecer na página de login

<br>

#### 📊 Resultado Esperado

❌ Mensagem de erro exibida: "Invalid credentials"

<br>
<br>

---

### ⚠️ Caso de Teste 03: Tentativa de Login com Campos em Branco

| Campo | Descrição |
|-------|-----------|
| **ID** | C01-CT03 |
| **Descrição** | O login falhará quando os campos obrigatórios estiverem em branco. |
| **Pré-condições** | Nenhuma. |
| **Prioridade** | Média |
| **Tipo** | Funcional - Negativo |

<br>

#### 📝 Passos de Execução

```gherkin
DADO que estamos na página de login do OrangeHRM
E deixamos os campos de usuário e senha em branco
QUANDO clicarmos no botão "Login"
ENTÃO deve ser exibida a mensagem "Required" em ambos os campos
```

<br>

#### ✔️ Critérios de Aceitação

- Os campos obrigatórios devem exibir mensagens de validação
- A mensagem "Required" deve aparecer abaixo de cada campo vazio
- O formulário não deve ser submetido

<br>

#### 📊 Resultado Esperado

⚠️ Mensagens de validação exibidas: "Required" nos campos vazios

<br>
<br>

---

## 📈 Resumo dos Testes

| ID | Título | Tipo | Prioridade | Status |
|----|--------|------|------------|--------|
| C01-CT01 | Login com credenciais válidas | Positivo | Alta | 🔄 Pendente |
| C01-CT02 | Login com senha incorreta | Negativo | Alta | 🔄 Pendente |
| C01-CT03 | Login com campos em branco | Negativo | Média | 🔄 Pendente |

<br>

---

## 📝 Notas Adicionais

- **Sistema Testado:** OrangeHRM
- **Módulo:** Autenticação/Login
- **Versão:** [Preencher versão]
- **Responsável:** [Patrick Ribeiro]
- **Data de Criação:** [12/10/25]

<br>
