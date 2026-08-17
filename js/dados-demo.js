/* ==========================================================================
   JORNADA DO ALUNO — CENTRAL DE DADOS FICTÍCIOS (DADOS-DEMO.JS)
   Fonte única da verdade para o protótipo do 3º Ano do Ensino Médio.
   ========================================================================== */

const JORNADA_DADOS = {
  anoLetivo: 2026,
  serie: "3º Ano",
  nivelEnsino: "Ensino Médio",
  
  // Aluna Fictícia Principal
  alunoPrincipal: {
    id: "ALU-2026-001",
    nome: "Mariana Oliveira",
    turma: "3º Ano A",
    matricula: "20260301",
    avatar: "MO",
    frequenciaGeral: 96, // %
    cursoInteresse: "Medicina",
    universidadeInteresse: "USP / UNICAMP",
    metaNotaEnem: 780,
    mediaAtualEstimada: 742,
    distanciaMeta: -38,
    percentualPlanoConcluido: 78,
    
    // Pontuações Atuais por Área do Conhecimento (Último Simulado)
    notasPorArea: {
      linguagens: 730,
      matematica: 780,
      humanas: 750,
      natureza: 710,
      redacao: 880
    },

    // Pontos Fortes e Conteúdos em Atenção
    pontosFortes: [
      "Redação — Construção de Repertório e Proposta de Intervenção",
      "Matemática — Geometria Plana e Funções do 1º Grau",
      "Ciências Humanas — História do Brasil Império e Sociologia"
    ],
    conteudosAtencao: [
      "Ciências da Natureza — Genética e Leis de Mendel",
      "Matemática — Porcentagem e Matemática Financeira",
      "Linguagens — Funções da Linguagem e Figuras de Linguagem",
      "Ciências da Natureza — Eletrodinâmica e Leis de Ohm"
    ],

    // Histórico dos Simulados
    simuladosHistorico: [
      {
        id: "SIM-01",
        nome: "1º Simulado ENEM (Março/2026)",
        data: "15/03/2026",
        mediaGeral: 705,
        certas: 132,
        erradas: 48,
        totalQuestoes: 180,
        notas: { linguagens: 690, matematica: 730, humanas: 710, natureza: 660, redacao: 800 },
        maioresErros: ["Genética Humana", "Eletrodinâmica", "Geometria Espacial"]
      },
      {
        id: "SIM-02",
        nome: "2º Simulado ENEM (Maio/2026)",
        data: "22/05/2026",
        mediaGeral: 724,
        certas: 141,
        erradas: 39,
        totalQuestoes: 180,
        notas: { linguagens: 710, matematica: 750, humanas: 730, natureza: 680, redacao: 840 },
        maioresErros: ["Porcentagem e Juros", "Genética Mendeliana", "Sintaxe da Oração"]
      },
      {
        id: "SIM-03",
        nome: "3º Simulado ENEM (Julho/2026)",
        data: "18/07/2026",
        mediaGeral: 742,
        certas: 148,
        erradas: 32,
        totalQuestoes: 180,
        notas: { linguagens: 730, matematica: 780, humanas: 750, natureza: 710, redacao: 880 },
        maioresErros: ["Genética (Primeira Lei)", "Eletrodinâmica", "Porcentagem"]
      }
    ],

    // Próximo Simulado Agendado
    proximoSimulado: {
      nome: "4º Simulado Diagnóstico ENEM",
      data: "15/09/2026",
      diasRestantes: 28,
      local: "Prédio Principal / Ambiente Virtual"
    },

    // Plano Semanal de Estudos Interativo
    planoSemanal: [
      {
        id: "TASK-101",
        dia: "Segunda-feira",
        disciplina: "Matemática",
        conteudo: "Revisão de Porcentagem e Regra de Três Composta",
        duracao: "50 min",
        tipo: "Exercícios Práticos",
        prioridade: "Alta",
        dificuldadeRelacionada: true,
        concluida: true
      },
      {
        id: "TASK-102",
        dia: "Segunda-feira",
        disciplina: "Redação",
        conteudo: "Leitura de temas coringa e estrutura de proposta de intervenção",
        duracao: "60 min",
        tipo: "Leitura / Produção",
        prioridade: "Média",
        dificuldadeRelacionada: false,
        concluida: true
      },
      {
        id: "TASK-103",
        dia: "Terça-feira",
        disciplina: "Biologia",
        conteudo: "Primeira Lei de Mendel e Cruzamentos Genéticos (Lumi)",
        duracao: "45 min",
        tipo: "Estudo Dirigido com Tutora",
        prioridade: "Alta",
        dificuldadeRelacionada: true,
        concluida: true
      },
      {
        id: "TASK-104",
        dia: "Quarta-feira",
        disciplina: "Física",
        conteudo: "Leis de Ohm e Associação de Resistores",
        duracao: "50 min",
        tipo: "Resolução de Questões",
        prioridade: "Alta",
        dificuldadeRelacionada: true,
        concluida: false
      },
      {
        id: "TASK-105",
        dia: "Quinta-feira",
        disciplina: "História",
        conteudo: "Brasil Império: Segundo Reinado e Economia Cafeeira",
        duracao: "40 min",
        tipo: "Revisão de Resumos",
        prioridade: "Média",
        dificuldadeRelacionada: false,
        concluida: false
      },
      {
        id: "TASK-106",
        dia: "Sexta-feira",
        disciplina: "Português",
        conteudo: "Análise de Funções da Linguagem em Provas Anteriores",
        duracao: "45 min",
        tipo: "Questões do ENEM",
        prioridade: "Média",
        dificuldadeRelacionada: true,
        concluida: false
      }
    ]
  },

  // Dados das Turmas da Coordenação (Indexados por combinação Turma + Simulado)
  coordenacaoData: {
    resumoGeral: {
      totalAlunos: 62,
      mediaGeralTerceiroAno: 718,
      participacaoSimulados: "94.8%",
      mediaPlanoConcluido: "74%"
    },
    
    // Matriz completa combinando Turma (todas, 3A, 3B) e Simulado (SIM-01, SIM-02, SIM-03)
    dadosCombinados: {
      "todas_SIM-03": {
        totalAlunos: 62,
        mediaGeral: 718,
        participacaoSimulados: "94.8%",
        mediaPlanoConcluido: "74%",
        desempenhoPorArea: { linguagens: 708, matematica: 735, humanas: 728, natureza: 685, redacao: 835 },
        areasInteresseProfissional: { tecnologiaEngenharia: 30, saudeBiologicas: 28, humanasSociais: 20, comunicacaoCriatividade: 12, gestaoNegocios: 10 },
        conteudosMaiorDificuldade: [
          { conteudo: "Genética Humana e Leis de Mendel", area: "Ciências da Natureza", pctErro: 42, turmasAfetadas: "3º Ano A e B", prioridade: "Alta" },
          { conteudo: "Eletrodinâmica e Leis de Ohm", area: "Ciências da Natureza", pctErro: 38, turmasAfetadas: "3º Ano A e B", prioridade: "Alta" },
          { conteudo: "Estequiometria e Balanço de Reações", area: "Ciências da Natureza", pctErro: 35, turmasAfetadas: "3º Ano B", prioridade: "Alta" },
          { conteudo: "Porcentagem e Matemática Financeira", area: "Matemática", pctErro: 32, turmasAfetadas: "3º Ano A e B", prioridade: "Média" },
          { conteudo: "Funções da Linguagem e Figuras", area: "Linguagens", pctErro: 28, turmasAfetadas: "3º Ano B", prioridade: "Média" }
        ],
        tutoraAnalytics: {
          totalInteracoesMes: 412,
          duvidasMaisFrequentes: [
            { assunto: "Genética — 1ª Lei de Mendel", totalAcessos: 94 },
            { assunto: "Matemática — Porcentagem e Juros", totalAcessos: 82 },
            { assunto: "Redação — Repertório Sociocultural", totalAcessos: 76 },
            { assunto: "Física — Leis de Ohm", totalAcessos: 58 }
          ]
        },
        acoesPedagogicasRecomendadas: [
          "Realizar oficina focada em Genética e Eletrodinâmica para o 3º Ano A e B antes do 4º Simulado.",
          "Promover plantão de dúvidas de Redação para os estudantes com pontuação abaixo de 700.",
          "Reforçar o uso do Plano Semanal com a turma 3º B para elevar a taxa de conclusão acima de 75%."
        ]
      },
      "todas_SIM-02": {
        totalAlunos: 62,
        mediaGeral: 702,
        participacaoSimulados: "93.5%",
        mediaPlanoConcluido: "71%",
        desempenhoPorArea: { linguagens: 695, matematica: 715, humanas: 710, natureza: 670, redacao: 820 },
        areasInteresseProfissional: { tecnologiaEngenharia: 29, saudeBiologicas: 29, humanasSociais: 21, comunicacaoCriatividade: 11, gestaoNegocios: 10 },
        conteudosMaiorDificuldade: [
          { conteudo: "Porcentagem e Juros Compostos", area: "Matemática", pctErro: 45, turmasAfetadas: "3º Ano A e B", prioridade: "Alta" },
          { conteudo: "Genética Mendeliana Básica", area: "Ciências da Natureza", pctErro: 40, turmasAfetadas: "3º Ano A", prioridade: "Alta" },
          { conteudo: "Geometria Espacial e Volumes", area: "Matemática", pctErro: 36, turmasAfetadas: "3º Ano B", prioridade: "Média" }
        ],
        tutoraAnalytics: {
          totalInteracoesMes: 380,
          duvidasMaisFrequentes: [
            { assunto: "Matemática — Porcentagem e Juros", totalAcessos: 102 },
            { assunto: "Genética — 1ª Lei de Mendel", totalAcessos: 88 },
            { assunto: "Sintaxe da Oração", totalAcessos: 65 }
          ]
        },
        acoesPedagogicasRecomendadas: [
          "Intensificar plantão de Matemática Financeira para ambas as turmas.",
          "Disponibilizar material de apoio sobre sintaxe e concordância na Redação."
        ]
      },
      "todas_SIM-01": {
        totalAlunos: 62,
        mediaGeral: 685,
        participacaoSimulados: "92.0%",
        mediaPlanoConcluido: "66%",
        desempenhoPorArea: { linguagens: 680, matematica: 695, humanas: 690, natureza: 650, redacao: 800 },
        areasInteresseProfissional: { tecnologiaEngenharia: 28, saudeBiologicas: 30, humanasSociais: 22, comunicacaoCriatividade: 10, gestaoNegocios: 10 },
        conteudosMaiorDificuldade: [
          { conteudo: "Eletrodinâmica Básica", area: "Ciências da Natureza", pctErro: 48, turmasAfetadas: "3º Ano A e B", prioridade: "Alta" },
          { conteudo: "Geometria Plana", area: "Matemática", pctErro: 44, turmasAfetadas: "3º Ano B", prioridade: "Alta" },
          { conteudo: "Interpretação Textual no ENEM", area: "Linguagens", pctErro: 39, turmasAfetadas: "3º Ano A e B", prioridade: "Média" }
        ],
        tutoraAnalytics: {
          totalInteracoesMes: 310,
          duvidasMaisFrequentes: [
            { assunto: "Física — Leis de Ohm", totalAcessos: 95 },
            { assunto: "Geometria Plana", totalAcessos: 78 },
            { assunto: "Estrutura do Texto Dissertativo", totalAcessos: 70 }
          ]
        },
        acoesPedagogicasRecomendadas: [
          "Realizar aula inaugural sobre gestão de tempo no 1º Simulado.",
          "Implantar cronograma básico de estudos semanais para os alunos inadimplentes no plano."
        ]
      },

      "3A_SIM-03": {
        totalAlunos: 32,
        mediaGeral: 735,
        participacaoSimulados: "96.0%",
        mediaPlanoConcluido: "79%",
        desempenhoPorArea: { linguagens: 720, matematica: 760, humanas: 740, natureza: 700, redacao: 855 },
        areasInteresseProfissional: { tecnologiaEngenharia: 35, saudeBiologicas: 30, humanasSociais: 15, comunicacaoCriatividade: 10, gestaoNegocios: 10 },
        conteudosMaiorDificuldade: [
          { conteudo: "Genética Humana e Biologia Molecular", area: "Ciências da Natureza", pctErro: 39, turmasAfetadas: "3º Ano A", prioridade: "Alta" },
          { conteudo: "Eletrodinâmica e Circuitos Elétricos", area: "Ciências da Natureza", pctErro: 34, turmasAfetadas: "3º Ano A", prioridade: "Alta" },
          { conteudo: "Análise Combinatória", area: "Matemática", pctErro: 30, turmasAfetadas: "3º Ano A", prioridade: "Média" }
        ],
        tutoraAnalytics: {
          totalInteracoesMes: 225,
          duvidasMaisFrequentes: [
            { assunto: "Genética — 1ª Lei de Mendel", totalAcessos: 56 },
            { assunto: "Redação — Repertório Sociocultural", totalAcessos: 48 },
            { assunto: "Análise Combinatória", totalAcessos: 40 }
          ]
        },
        acoesPedagogicasRecomendadas: [
          "Promover oficina de resolução de problemas complexos de Genética para o 3º A.",
          "Oferecer mentoria de Redação avançada para estudantes no nível 850+."
        ]
      },
      "3A_SIM-02": {
        totalAlunos: 32,
        mediaGeral: 718,
        participacaoSimulados: "95.0%",
        mediaPlanoConcluido: "75%",
        desempenhoPorArea: { linguagens: 705, matematica: 740, humanas: 725, natureza: 685, redacao: 835 },
        areasInteresseProfissional: { tecnologiaEngenharia: 35, saudeBiologicas: 30, humanasSociais: 15, comunicacaoCriatividade: 10, gestaoNegocios: 10 },
        conteudosMaiorDificuldade: [
          { conteudo: "Porcentagem e Regra de Três Composta", area: "Matemática", pctErro: 41, turmasAfetadas: "3º Ano A", prioridade: "Alta" },
          { conteudo: "Genética Mendeliana", area: "Ciências da Natureza", pctErro: 38, turmasAfetadas: "3º Ano A", prioridade: "Alta" }
        ],
        tutoraAnalytics: {
          totalInteracoesMes: 200,
          duvidasMaisFrequentes: [
            { assunto: "Porcentagem e Juros", totalAcessos: 55 },
            { assunto: "Genética", totalAcessos: 45 }
          ]
        },
        acoesPedagogicasRecomendadas: [
          "Focar reforço em Matemática Financeira na turma 3º A."
        ]
      },
      "3A_SIM-01": {
        totalAlunos: 32,
        mediaGeral: 698,
        participacaoSimulados: "93.8%",
        mediaPlanoConcluido: "70%",
        desempenhoPorArea: { linguagens: 690, matematica: 720, humanas: 705, natureza: 665, redacao: 810 },
        areasInteresseProfissional: { tecnologiaEngenharia: 35, saudeBiologicas: 30, humanasSociais: 15, comunicacaoCriatividade: 10, gestaoNegocios: 10 },
        conteudosMaiorDificuldade: [
          { conteudo: "Eletrodinâmica", area: "Ciências da Natureza", pctErro: 45, turmasAfetadas: "3º Ano A", prioridade: "Alta" },
          { conteudo: "Funções da Linguagem", area: "Linguagens", pctErro: 37, turmasAfetadas: "3º Ano A", prioridade: "Média" }
        ],
        tutoraAnalytics: {
          totalInteracoesMes: 170,
          duvidasMaisFrequentes: [
            { assunto: "Física - Circuitos", totalAcessos: 50 }
          ]
        },
        acoesPedagogicasRecomendadas: [
          "Acompanhar adaptação do 3º A ao ritmo de simulados do ENEM."
        ]
      },

      "3B_SIM-03": {
        totalAlunos: 30,
        mediaGeral: 701,
        participacaoSimulados: "93.3%",
        mediaPlanoConcluido: "68%",
        desempenhoPorArea: { linguagens: 695, matematica: 710, humanas: 715, natureza: 670, redacao: 815 },
        areasInteresseProfissional: { tecnologiaEngenharia: 25, saudeBiologicas: 25, humanasSociais: 25, comunicacaoCriatividade: 15, gestaoNegocios: 10 },
        conteudosMaiorDificuldade: [
          { conteudo: "Estequiometria e Soluções Químicas", area: "Ciências da Natureza", pctErro: 46, turmasAfetadas: "3º Ano B", prioridade: "Alta" },
          { conteudo: "Geometria Espacial e Áreas", area: "Matemática", pctErro: 41, turmasAfetadas: "3º Ano B", prioridade: "Alta" },
          { conteudo: "Redação — Coesão e Coerência", area: "Redação", pctErro: 36, turmasAfetadas: "3º Ano B", prioridade: "Média" },
          { conteudo: "Física Mecânica e Leis de Newton", area: "Ciências da Natureza", pctErro: 33, turmasAfetadas: "3º Ano B", prioridade: "Média" }
        ],
        tutoraAnalytics: {
          totalInteracoesMes: 187,
          duvidasMaisFrequentes: [
            { assunto: "Estequiometria", totalAcessos: 52 },
            { assunto: "Geometria Espacial", totalAcessos: 44 },
            { assunto: "Física Mecânica", totalAcessos: 38 }
          ]
        },
        acoesPedagogicasRecomendadas: [
          "Agendar plantão de dúvidas focado em Estequiometria para o 3º B.",
          "Reforçar o uso do Plano Semanal para elevar a adesão da turma acima de 75%."
        ]
      },
      "3B_SIM-02": {
        totalAlunos: 30,
        mediaGeral: 685,
        participacaoSimulados: "92.0%",
        mediaPlanoConcluido: "64%",
        desempenhoPorArea: { linguagens: 680, matematica: 690, humanas: 695, natureza: 655, redacao: 800 },
        areasInteresseProfissional: { tecnologiaEngenharia: 25, saudeBiologicas: 25, humanasSociais: 25, comunicacaoCriatividade: 15, gestaoNegocios: 10 },
        conteudosMaiorDificuldade: [
          { conteudo: "Geometria Espacial", area: "Matemática", pctErro: 48, turmasAfetadas: "3º Ano B", prioridade: "Alta" },
          { conteudo: "Sintaxe da Oração", area: "Linguagens", pctErro: 42, turmasAfetadas: "3º Ano B", prioridade: "Alta" }
        ],
        tutoraAnalytics: {
          totalInteracoesMes: 165,
          duvidasMaisFrequentes: [
            { assunto: "Geometria", totalAcessos: 48 },
            { assunto: "Sintaxe", totalAcessos: 40 }
          ]
        },
        acoesPedagogicasRecomendadas: [
          "Promover oficina de técnicas de estudo e foco para o 3º B."
        ]
      },
      "3B_SIM-01": {
        totalAlunos: 30,
        mediaGeral: 672,
        participacaoSimulados: "90.0%",
        mediaPlanoConcluido: "60%",
        desempenhoPorArea: { linguagens: 670, matematica: 675, humanas: 680, natureza: 635, redacao: 785 },
        areasInteresseProfissional: { tecnologiaEngenharia: 25, saudeBiologicas: 25, humanasSociais: 25, comunicacaoCriatividade: 15, gestaoNegocios: 10 },
        conteudosMaiorDificuldade: [
          { conteudo: "Física Mecânica", area: "Ciências da Natureza", pctErro: 50, turmasAfetadas: "3º Ano B", prioridade: "Alta" },
          { conteudo: "Redação — Estrutura Dissertativa", area: "Redação", pctErro: 45, turmasAfetadas: "3º Ano B", prioridade: "Alta" }
        ],
        tutoraAnalytics: {
          totalInteracoesMes: 140,
          duvidasMaisFrequentes: [
            { assunto: "Física Mecânica", totalAcessos: 45 },
            { assunto: "Redação", totalAcessos: 35 }
          ]
        },
        acoesPedagogicasRecomendadas: [
          "Realizar diagnóstico inicial de habilidades com o 3º B."
        ]
      }
    },

    // Lista de Estudantes para Acompanhamento Individual com dados completos para o modal
    estudantesAcompanhamentoDetalhados: [
      {
        id: "EST-01",
        nome: "Lucas Mendes",
        turma: "3º Ano A",
        simuladosEvolucao: { "1º Simulado (Mar)": 680, "2º Simulado (Mai)": 705, "3º Simulado (Jul)": 690 },
        areaMaiorDificuldade: "Matemática (Geometria Espacial & Porcentagem)",
        adesaoPlano: "65%",
        motivo: "Oscilação de nota em Matemática no último simulado",
        acaoSugerida: "Tutoria individual de resolução de problemas de geometria espacial e revisão de juros.",
        status: "Em Acompanhamento"
      },
      {
        id: "EST-02",
        nome: "Beatriz Santos",
        turma: "3º Ano A",
        simuladosEvolucao: { "1º Simulado (Mar)": 660, "2º Simulado (Mai)": 670, "3º Simulado (Jul)": 675 },
        areaMaiorDificuldade: "Ciências da Natureza (Genética & Biologia)",
        adesaoPlano: "42%",
        motivo: "Baixa adesão ao cronograma de estudos semanal (42% de tarefas cumpridas)",
        acaoSugerida: "Entrevista pedagógica com a orientação para reestruturar a rotina de estudos doméstica.",
        status: "Intervenção Sugerida"
      },
      {
        id: "EST-03",
        nome: "Gabriel Ramos",
        turma: "3º Ano A",
        simuladosEvolucao: { "1º Simulado (Mar)": 610, "2º Simulado (Mai)": 635, "3º Simulado (Jul)": 640 },
        areaMaiorDificuldade: "Redação (Competência 3 — Projeto de Texto)",
        adesaoPlano: "72%",
        motivo: "Pontuação em Redação mantida abaixo de 700 pontos",
        acaoSugerida: "Participação agendada em oficina de produção textual com correção comentada individual.",
        status: "Oficina Agendada"
      },
      {
        id: "EST-04",
        nome: "Thiago Lima",
        turma: "3º Ano B",
        simuladosEvolucao: { "1º Simulado (Mar)": 690, "2º Simulado (Mai)": "Ausente (Saúde)", "3º Simulado (Jul)": 705 },
        areaMaiorDificuldade: "Física (Eletrodinâmica & Leis de Ohm)",
        adesaoPlano: "80%",
        motivo: "Ausência motivada por saúde no 2º simulado",
        acaoSugerida: "Aplicação do 2º Simulado em data de reposição para consolidação das métricas.",
        status: "Simulado de Reposição"
      },
      {
        id: "EST-05",
        nome: "Camila Ferreira",
        turma: "3º Ano B",
        simuladosEvolucao: { "1º Simulado (Mar)": 640, "2º Simulado (Mai)": 655, "3º Simulado (Jul)": 670 },
        areaMaiorDificuldade: "Química (Estequiometria & Soluções)",
        adesaoPlano: "58%",
        motivo: "Dificuldade técnica concentrada em Ciências da Natureza",
        acaoSugerida: "Agendamento de grupo de estudos guiado com apoio do módulo Tutora Lumi.",
        status: "Tutoria Agendada"
      },
      {
        id: "EST-06",
        nome: "Rafael Souza",
        turma: "3º Ano B",
        simuladosEvolucao: { "1º Simulado (Mar)": 670, "2º Simulado (Mai)": 685, "3º Simulado (Jul)": 695 },
        areaMaiorDificuldade: "Linguagens (Gestão de Tempo na Prova)",
        adesaoPlano: "70%",
        motivo: "Dificuldade na gestão de tempo e leitura de textos extensos",
        acaoSugerida: "Sessão de treino guiado de estratégias de prova e descarte de alternativas.",
        status: "Em Acompanhamento"
      }
    ]
  },

  // Dados do Portal da Família
  familiaData: {
    alunoNome: "Mariana Oliveira",
    turma: "3º Ano A",
    frequenciaAulas: "96%",
    simuladosRealizados: "3 de 3 (100% de participação)",
    metaCumpridaCount: "8 de 10 metas alcançadas no mês",
    statusGeral: "Excelente evolução com ritmo de estudo constante e alto engajamento.",
    
    // Evolução nos 3 simulados da Mariana
    simuladosEvolucaoMariana: [
      { id: "SIM-01", nome: "1º Simulado", media: 705 },
      { id: "SIM-02", nome: "2º Simulado", media: 724 },
      { id: "SIM-03", nome: "3º Simulado", media: 742 }
    ],

    // Resumo desde o último simulado
    resumoUltimoSimulado: {
      evolucaoGeral: "+18 pts no 3º simulado (+37 pts no total)",
      areaMaisEvoluiu: "Redação (880 pts, +40 pts de evolução)",
      conteudoAtencao: "Genética e Eletrodinâmica",
      progressoPlanoSemanal: "78% de tarefas concluídas"
    },

    // Compromissos importantes
    compromissosImportantes: {
      proximaAtividade: "Revisão de Física — Leis de Ohm (Quarta-feira)",
      proximoSimulado: "4º Simulado Diagnóstico ENEM (15/09/2026)",
      tarefaPrioritaria: "Cruzamentos Genéticos — 1ª Lei de Mendel (Terça-feira)"
    },

    comunicadosEscolares: [
      {
        id: "COM-01",
        data: "10/08/2026",
        titulo: "Reunião de Acompanhamento do 3º Trimestre",
        conteudo: "Convidamos os responsáveis para a reunião de alinhamento estratégico do ENEM no próximo sábado, às 09h."
      },
      {
        id: "COM-02",
        data: "01/08/2026",
        titulo: "Divulgação do Calendário de Simulados 2º Semestre",
        conteudo: "O 4º Simulado ENEM ocorrerá no dia 15/09. Lembre-se de apoiar seu filho a manter boas noites de sono."
      }
    ],

    dicasParaFamília: [
      "Mantenha um ambiente tranquilo e organizado para os horários de estudo em casa.",
      "Valorize o esforço e a constância do estudante em vez de focar apenas no resultado imediato da nota.",
      "Incentive pausas regulares para descanso e momentos de lazer nos fins de semana."
    ]
  }
};

// Tornar os dados disponíveis globalmente no navegador
if (typeof window !== 'undefined') {
  window.JORNADA_DADOS = JORNADA_DADOS;
}
