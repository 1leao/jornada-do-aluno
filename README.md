# Jornada do Aluno

> **Slogan:** “Tecnologia que transforma acompanhamento em aprovação.”

---

## 📌 Contexto do Projeto

O **Jornada do Aluno** é uma proposta de plataforma inteligente de acompanhamento e preparação para o ENEM, desenvolvida como protótipo pedagógico interativo para validação de uma proposta de parceria com instituições de ensino de alta performance.

Nesta primeira versão (MVP):
- A plataforma foi desenhada focando exclusivamente nos estudantes do **3º ano do Ensino Médio**;
- A arquitetura do sistema foi preparada para permitir uma **futura expansão gradual para o 1º e o 2º anos** do Ensino Médio;
- Todos os dados, nomes, turmas e notas utilizados são **rigorosamente fictícios**;
- Não há integração com banco de dados (como Supabase), login real ou APIs de Inteligência Artificial reais nesta etapa.

---

## 🎯 Solução & Os 4 Pilares da Plataforma

O protótipo conecta os três perfis da comunidade escolar (*Aluno*, *Coordenação* e *Família*) através de quatro pilares estratégicos:

1. **Jornada de Orientação Profissional**: Questionário reflexivo em 15 etapas para explorar afinidades vocacionais e cursos universitários sem rótulos ou diagnósticos clínicos.
2. **Simulados e Desempenho**: Análise gráfica da evolução nas 4 áreas do conhecimento do ENEM + Redação, comparando a média atual com a nota meta.
3. **Plano Personalizado de Estudos**: Cronograma semanal organizado por prioridades, disciplinas e controle diário de tarefas concluídas.
4. **Tutora ENEM (Lumi)**: Assistente virtual demonstrativa com 3 fluxos interativos guiados (*Matemática/Porcentagem*, *Biologia/Genética* e *Redação/Repertório*), atuando como apoio complementar aos professores.

---

## 👥 Perfis e Funcionalidades do Protótipo

### 1. Painel do Aluno (`aluno.html`)
- Dashboard individual da estudante fictícia **Mariana Oliveira (3º Ano A)**.
- Indicador da distância entre a média atual (742 pts) e a meta para Medicina/USP (780 pts).
- Gráficos de evolução nos simulados, pontos fortes, conteúdos que precisam de atenção e progresso do plano semanal.

### 2. Painel da Coordenação (`coordenacao.html`)
- **Filtros Combinados por Turma e Simulado**: Permite filtrar simultaneamente por turma (*Todas as Turmas*, *3º Ano A*, *3º Ano B*) e simulado (*1º*, *2º* ou *3º Simulado*), atualizando dinamicamente todos os gráficos e estatísticas.
- **Conteúdos com Maior Dificuldade**: Tabela visível com percentual de erros, área do conhecimento, turmas afetadas e nível de prioridade pedagógica.
- **Acompanhamento Individual em Modal**: Lista de estudantes clicáveis (com suporte completo a navegação por mouse e teclado via `Enter` e `Barra de Espaço`) que abre um painel modal com histórico, adesão ao plano, motivo de acompanhamento e ação recomendada, devolvendo o foco ao fechar.
- **Indicadores da Tutora Lumi**: Estatísticas anônimas e agregadas de acessos sem expor conversas privadas dos alunos.

### 3. Portal da Família (`familia.html`)
- **Gráfico de Evolução nos Simulados**: Visualização clara da evolução da aluna (705 → 724 → 742 pts) com mensagem explicativa simples (sem rankings ou comparações com colegas).
- **Resumo desde o Último Simulado**: Destaques de crescimento, áreas de evolução, conteúdos que demandam atenção e progresso do plano.
- **Compromissos Importantes**: Próximas atividades, datas dos simulados e tarefa prioritária da semana.
- **Comunicados Escolares**: Botão interativo para **"Marcar como lido"** com persistência no `localStorage` e opção de desfazer a marcação.

---

## 🛠️ Tecnologias, Acessibilidade e Persistência

- **Tecnologias**: HTML5 Semântico, CSS3 Vanilla (com Design System baseado em variáveis HSL) e JavaScript ES6 limpo.
- **Gráficos e Fallback**: Biblioteca Chart.js (via CDN) com suporte a um mecanismo de *fallback visual nativo em HTML/CSS* caso a CDN não esteja disponível.
- **Persistência**: Utilização de `localStorage` para salvar o estado de conclusão de tarefas no plano de estudos, rascunho da orientação profissional e leitura de comunicados da família.
- **Acessibilidade**: Suporte a teclado (`Tab`, `Enter`, `Espaço` com prevenção de rolagem, `Escape`), foco visível, rótulos ARIA, contraste elevado e mensagens não baseadas exclusivamente em cores.

---

## 📁 Estrutura de Pastas

```
jornada-do-aluno/
├── index.html                  # Landing page institucional da plataforma
├── login.html                  # Seletor demonstrativo de perfis (sem senha)
├── aluno.html                  # Dashboard principal da aluna Mariana Oliveira
├── coordenacao.html            # Painel pedagógico com filtros combinados e modal
├── familia.html                # Portal da família com comunicados e evolução
├── simulados.html              # Histórico detalhado e análise de erros por área
├── plano-estudos.html          # Cronograma semanal interativo com salvamento
├── tutora.html                 # Simulador da assistente virtual Lumi
├── orientacao.html             # Questionário de Orientação Profissional (15 perguntas)
├── resultado-orientacao.html   # Relatório com as 3 áreas de maior afinidade
├── css/
│   └── style.css               # Design System centralizado e estilos responsivos
├── js/
│   ├── dados-demo.js           # Central única de dados fictícios
│   ├── app.js                  # Lógica geral, navegação e notificações
│   ├── graficos.js             # Gerenciamento de gráficos e fallback visual
│   ├── tutora-demo.js          # Fluxos interativos da assistente Lumi
│   └── orientacao.js           # Algoritmo do questionário de orientação
├── assets/
│   └── imagens/                # Recursos vetoriais
├── README.md                   # Documentação completa do protótipo
├── CHANGELOG.md                # Registro de versões
├── LICENSE                     # Licença MIT
└── .gitignore                  # Arquivos ignorados pelo Git
```

---

## 🚀 Como Executar Localmente

1. Faça o download ou clone a pasta `jornada-do-aluno`.
2. Abra o arquivo `index.html` em qualquer navegador web moderno.
3. Não é necessária nenhuma instalação de pacotes (`npm install`), banco de dados ou servidor backend nesta versão estática.

---

## ⚠️ Isenção de Responsabilidade & Protótipo

Este software é um **protótipo educacional em desenvolvimento** idealizado para demonstrar a proposta pedagógica e tecnológica da solução. **Não é utilizado por nenhuma escola real no momento** e não coleta dados pessoais dos usuários.

---

## 👩‍💻 Autoria

Desenvolvido por **Gabriela Leão**  
*Plataforma de acompanhamento e alta performance educacional para o Ensino Médio.*
