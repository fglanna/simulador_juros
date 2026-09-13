# 📈 Simulador de Juros Compostos

Um simulador de juros compostos interativo, leve e responsivo desenvolvido com **HTML5, CSS3 e JavaScript Puro (Vanilla JS)**. Ideal para planejar investimentos, reservas de emergência, aposentadoria ou metas financeiras de médio e longo prazo.

---

## 🚀 Funcionalidades

- **Objetivo Didático e Exemplos Práticos:** Explicação clara do conceito de juros compostos e botões de teste rápido com 1 clique (Reserva de Emergência, Aposentadoria e Metas de Médio Prazo).
- **Entradas Flexíveis:**
  - Valor inicial (R$)
  - Investimento/Aporte mensal (R$)
  - Taxa de juros (% ao mês ou % ao ano)
  - Período de aplicação (em meses ou em anos)
- **Resultados Claros e Formatados:**
  - Valor Total Final (R$)
  - Valor Total Investido (R$)
  - Total de Juros Acumulados (R$)
- **Tabela Mês a Mês Dinâmica:** Exibição detalhada da evolução do patrimônio com colunas de Mês, Juros do Mês, Total Investido, Juros Acumulados e Saldo Acumulado.
- **Formatação de Moeda Brasileira:** Uso nativo de `Intl.NumberFormat` para exibição em Real (R$).

---

## 🧮 Fórmulas Utilizadas

1. **Conversão de Taxa Anual para Mensal:**
   $$i_m = (1 + i_a)^{1/12} - 1$$
2. **Cálculo Mês a Mês:**
   - $\text{Juros do Mês } (J_k) = \text{Saldo}_{k-1} \times i_m$
   - $\text{Novo Saldo } (S_k) = \text{Saldo}_{k-1} + J_k + \text{Aporte Mensal}$
   - $\text{Total Investido } (I_k) = \text{Valor Inicial} + (\text{Aporte Mensal} \times k)$

---

## 💻 Tecnologias Utilizadas

- **HTML5** (Estrutura semântica)
- **CSS3** (Variáveis CSS, Flexbox, Grid e layout responsivo)
- **JavaScript (Vanilla JS)** (Manipulação da DOM e matemática financeira sem dependências externas)

---

## 🛠️ Como Executar o Projeto

1. Clone este repositório ou baixe os arquivos:
   ```bash
   git clone https://github.com/seu-usuario/simulador-juros-compostos.git
   ```
2. Abra o arquivo `index.html` diretamente em seu navegador web (Google Chrome, Firefox, Edge, Safari, etc.).

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais e pessoais.
