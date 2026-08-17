# Changelog

Todas as alterações notáveis do projeto **Jornada do Aluno** serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/) e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [0.2.0] - 2026-08-16

### Adicionado
- Favicon com a identidade visual do Jornada do Aluno.
- Filtros combinados por turma (Todas, 3º A, 3º B) e simulado (SIM-01, SIM-02, SIM-03) no painel da coordenação.

- Dados históricos realistas para as duas turmas da coordenação ao longo dos três simulados.
- Seção visível de conteúdos com maior dificuldade e índice de erro na coordenação.
- Acompanhamento individual de estudantes em painel modal interativo e acessível.
- Gráfico simples de evolução e resumo de progresso no portal da família.
- Seção de compromissos importantes no portal da família.
- Controle interativo de leitura dos comunicados familiares com persistência em `localStorage`.

### Alterado
- Gráficos, métricas, lista de dificuldades, tutora e ações pedagógicas da coordenação agora respondem dinamicamente aos filtros.
- Painel da família recebeu um acompanhamento mais detalhado e acolhedor sem rankings ou comparações.
- Melhorias gerais de responsividade e acessibilidade em botões e modais.

### Corrigido
- Filtro de simulado na coordenação que aparecia mas não alterava os dados.
- Atualização incompleta dos gráficos ao trocar filtros.
- Navegação por teclado (`Enter` e `Barra de Espaço` sem rolagem) nos itens de acompanhamento individual.
- Fallback visual do gráfico comparativo quando o Chart.js não está disponível, garantindo exibição de valores numéricos sem NaN ou formatação inválida.

## [0.1.0] - 2026-08-16

### Adicionado
- Versão Inicial do Protótipo (MVP para o 3º Ano do Ensino Médio).
- Página inicial de apresentação (`index.html`).
- Tela de seleção demonstrativa de perfis (`login.html`).
- Dashboard do Aluno (`aluno.html`).
- Painel de Simulados (`simulados.html`).
- Plano de Estudos semanal interativo (`plano-estudos.html`).
- Assistente Virtual Lumi (`tutora.html`).
- Questionário de Orientação Profissional (`orientacao.html`).
- Relatório de Afinidade Profissional (`resultado-orientacao.html`).
- Painel da Coordenação (`coordenacao.html`).
- Portal da Família (`familia.html`).
- Design System em CSS puro (`css/style.css`).
- Central de dados fictícios (`js/dados-demo.js`).
