/* ==========================================================================
   JORNADA DO ALUNO — JORNADA DE ORIENTAÇÃO PROFISSIONAL (ORIENTACAO.JS)
   Questionário reflexivo em 15 etapas e cálculo de afinidade por área.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('wizard-container')) {
    JornadaOrientacao.init();
  }
});

const JornadaOrientacao = {
  etapaAtual: 0,
  respostas: {},

  // As 15 Perguntas da Jornada de Orientação Profissional
  perguntas: [
    {
      id: 1,
      titulo: "Quais tipos de atividades mais despertam sua curiosidade no dia a dia?",
      opcoes: [
        { texto: "Entender como funcionam softwares, sistemas, robôs ou máquinas", area: "tecnologiaEngenharia" },
        { texto: "Compreender o funcionamento do corpo humano, saúde e seres vivos", area: "saudeBiologicas" },
        { texto: "Analisar comportamento humano, história, sociedade e cultura", area: "humanasSociais" },
        { texto: "Criar conteúdos visuais, textos, artes, vídeos ou designs", area: "comunicacaoCriatividade" },
        { texto: "Organizar projetos, planejar estratégias e liderar iniciativas", area: "gestaoNegocios" }
      ]
    },
    {
      id: 2,
      titulo: "Qual área das disciplinas do Ensino Médio costuma ser mais atraente para você?",
      opcoes: [
        { texto: "Matemática e Física (Cálculos e Raciocínio Lógico)", area: "cienciasExatas" },
        { texto: "Biologia e Química (Ciências da Vida e Transformações)", area: "saudeBiologicas" },
        { texto: "História, Geografia, Filosofia e Sociologia", area: "humanasSociais" },
        { texto: "Português, Literatura, Línguas e Redação", area: "comunicacaoCriatividade" },
        { texto: "Informática, Robótica e Projetos de Tecnologia", area: "tecnologiaEngenharia" }
      ]
    },
    {
      id: 3,
      titulo: "Em um trabalho em grupo na escola, qual papel você costuma assumir naturalmente?",
      opcoes: [
        { texto: "O responsável por estruturar a apresentação visual ou escrever o texto principal", area: "comunicacaoCriatividade" },
        { texto: "O responsável por organizar as tarefas, prazos e distribuir as partes do grupo", area: "gestaoNegocios" },
        { texto: "O responsável por pesquisar os dados mais complexos e resolver os problemas difíceis", area: "cienciasExatas" },
        { texto: "O responsável por garantir que todos sejam ouvidos e por mediar ideias", area: "humanasSociais" },
        { texto: "O responsável por montar a parte técnica, como slides interativos ou protótipos", area: "tecnologiaEngenharia" }
      ]
    },
    {
      id: 4,
      titulo: "Qual ambiente de trabalho parece mais motivador para a sua rotina no futuro?",
      opcoes: [
        { texto: "Hospitais, clínicas, laboratórios de pesquisa ou contato direto com pacientes", area: "saudeBiologicas" },
        { texto: "Empresas de tecnologia, escritórios inovadores ou regime home-office flexível", area: "tecnologiaEngenharia" },
        { texto: "Estúdios de criação, agências de comunicação ou espaços artísticos", area: "comunicacaoCriatividade" },
        { texto: "Organizações sociais, escolas, universidades ou ONGs", area: "humanasSociais" },
        { texto: "Corporações, startups, mercado financeiro ou consultorias de negócios", area: "gestaoNegocios" }
      ]
    },
    {
      id: 5,
      titulo: "O que você mais valoriza em uma futura realização profissional?",
      opcoes: [
        { texto: "Impactar positivamente a saúde e o bem-estar das pessoas", area: "saudeBiologicas" },
        { texto: "Criar soluções tecnológicas inovadoras que facilitem a vida das pessoas", area: "tecnologiaEngenharia" },
        { texto: "Defender direitos, promover justiça e contribuir para a educação e cultura", area: "humanasSociais" },
        { texto: "Expressar ideias, emocionar públicos e comunicar mensagens marcantes", area: "comunicacaoCriatividade" },
        { texto: "Alcançar independência financeira, construir negócios e liderar grandes equipes", area: "gestaoNegocios" }
      ]
    },
    {
      id: 6,
      titulo: "Como você prefere lidar com desafios complexos de raciocínio?",
      opcoes: [
        { texto: "Utilizando equações, estatística e análise lógica minuciosa", area: "cienciasExatas" },
        { texto: "Desenvolvendo hipóteses científicas e testando em experimentos", area: "saudeBiologicas" },
        { texto: "Debatendo ideias com argumentos bem fundamentados e leituras", area: "humanasSociais" },
        { texto: "Pensando 'fora da caixa' e encontrando saídas criativas e não convencionais", area: "comunicacaoCriatividade" },
        { texto: "Mapeando prós e contras financeiros, riscos e eficiência de processos", area: "gestaoNegocios" }
      ]
    },
    {
      id: 7,
      titulo: "Qual destas ferramentas ou recursos você acha mais instigante explorar?",
      opcoes: [
        { texto: "Linguagens de programação, código e inteligência artificial", area: "tecnologiaEngenharia" },
        { texto: "Microscópios, equipamentos médicos e pesquisas laboratoriais", area: "saudeBiologicas" },
        { texto: "Editores de áudio, vídeo, softwares de design e câmeras", area: "comunicacaoCriatividade" },
        { texto: "Livros de teoria, acervos históricos e leis", area: "humanasSociais" },
        { texto: "Planilhas de gestão, dashboards de métricas e relatórios estratégicos", area: "gestaoNegocios" }
      ]
    },
    {
      id: 8,
      titulo: "Como você lida com a rotina de estudos ou trabalho diário?",
      opcoes: [
        { texto: "Prefiro rotinas muito dinâmicas, com novidades e projetos diferentes a cada dia", area: "comunicacaoCriatividade" },
        { texto: "Prefiro rotinas estruturadas, com processos claros e metas objetivas", area: "cienciasExatas" },
        { texto: "Prefiro rotinas em que eu passe a maior parte do tempo em interação humana", area: "humanasSociais" },
        { texto: "Prefiro focar em resolução concentrada de problemas técnicos e práticos", area: "tecnologiaEngenharia" },
        { texto: "Prefiro um equilíbrio entre planejamento estratégico e ação em equipe", area: "gestaoNegocios" }
      ]
    },
    {
      id: 9,
      titulo: "Qual destas causas sociais ou tecnológicas mais chama a sua atenção?",
      opcoes: [
        { texto: "Avanço da medicina preventiva e cura de enfermidades", area: "saudeBiologicas" },
        { texto: "Digitalização, segurança de dados e automação sustentável", area: "tecnologiaEngenharia" },
        { texto: "Redução das desigualdades sociais e acesso à cidadania", area: "humanasSociais" },
        { texto: "Preservação da memória cultural, arte e liberdade de expressão", area: "comunicacaoCriatividade" },
        { texto: "Empreendedorismo consciente e geração de oportunidades de trabalho", area: "gestaoNegocios" }
      ]
    },
    {
      id: 10,
      titulo: "Em momentos de decisão importante, em que você costuma se apoiar?",
      opcoes: [
        { texto: "Em dados concretos, fatos e evidências comprovadas", area: "cienciasExatas" },
        { texto: "Na intuição criativa e nas possibilidades estéticas/narrativas", area: "comunicacaoCriatividade" },
        { texto: "No impacto que a decisão terá nas pessoas envolvidas", area: "humanasSociais" },
        { texto: "Na eficiência prática e no menor margem de erro técnico", area: "tecnologiaEngenharia" },
        { texto: "Na relação custo-benefício e no alinhamento com os objetivos finais", area: "gestaoNegocios" }
      ]
    },
    {
      id: 11,
      titulo: "Qual tipo de leitura ou consumo de conteúdo você mais aprecia fora da escola?",
      opcoes: [
        { texto: "Notícias sobre tecnologia, novidades digitais e games", area: "tecnologiaEngenharia" },
        { texto: "Artigos de ciência, descobertas da saúde e meio ambiente", area: "saudeBiologicas" },
        { texto: "Livros de ficção, crônicas, podcasts de entrevistas ou filmes", area: "comunicacaoCriatividade" },
        { texto: "Documentários históricos, geopolítica e atualidades", area: "humanasSociais" },
        { texto: "Histórias de empreendedores, economia e estratégias", area: "gestaoNegocios" }
      ]
    },
    {
      id: 12,
      titulo: "Se você pudesse escolher um grande projeto para desenvolver na faculdade, qual seria?",
      opcoes: [
        { texto: "Um aplicativo ou sistema inteligente para resolver um problema urbano", area: "tecnologiaEngenharia" },
        { texto: "Uma pesquisa sobre tratamentos inovadores para a saúde", area: "saudeBiologicas" },
        { texto: "Um projeto comunitário de inclusão social ou educacional", area: "humanasSociais" },
        { texto: "Uma campanha de conscientização com documentário ou marca própria", area: "comunicacaoCriatividade" },
        { texto: "Um plano de negócios para uma nova empresa no mercado", area: "gestaoNegocios" }
      ]
    },
    {
      id: 13,
      titulo: "Como você se descreve em relação às suas habilidades pessoais?",
      opcoes: [
        { texto: "Analítico(a), observador(a) e preciso(a)", area: "cienciasExatas" },
        { texto: "Empático(a), comunicativo(a) e acolhedor(a)", area: "humanasSociais" },
        { texto: "Criativo(a), expressivo(a) e imaginativo(a)", area: "comunicacaoCriatividade" },
        { texto: "Prático(a), focado(a) em soluções e lógico(a)", area: "tecnologiaEngenharia" },
        { texto: "Persuasivo(a), focado(a) em resultados e liderança", area: "gestaoNegocios" }
      ]
    },
    {
      id: 14,
      titulo: "Qual o seu interesse ao interagir com a natureza e o meio ambiente?",
      opcoes: [
        { texto: "Estudar os ecossistemas, preservação de espécies e biologia", area: "saudeBiologicas" },
        { texto: "Desenvolver energias renováveis e tecnologias limpas", area: "tecnologiaEngenharia" },
        { texto: "Compreender as relações das populações humanas com o espaço geográfico", area: "humanasSociais" },
        { texto: "Fotografar, registrar ou criar arte inspirada na natureza", area: "comunicacaoCriatividade" },
        { texto: "Gerenciar projetos de gestão ambiental e sustentabilidade corporativa", area: "gestaoNegocios" }
      ]
    },
    {
      id: 15,
      titulo: "Por fim, qual o seu sentimento sobre o seu futuro profissional após o ENEM?",
      opcoes: [
        { texto: "Empolgado(a) para explorar áreas inovadoras e cheias de tecnologia", area: "tecnologiaEngenharia" },
        { texto: "Motivado(a) para cuidar de pessoas e contribuir com a saúde", area: "saudeBiologicas" },
        { texto: "Dedicado(a) a fazer a diferença na sociedade e na educação", area: "humanasSociais" },
        { texto: "Ansioso(a) para expressar minha identidade e ideias no mercado", area: "comunicacaoCriatividade" },
        { texto: "Determinado(a) a conquistar meu espaço e construir uma carreira de liderança", area: "gestaoNegocios" }
      ]
    }
  ],

  init: function() {
    this.carregarRespostasSalvas();
    this.renderPergunta();
  },

  // Carregar respostas temporárias do localStorage se existirem
  carregarRespostasSalvas: function() {
    const salvos = localStorage.getItem('jornada_orientacao_draft');
    if (salvos) {
      try {
        const obj = JSON.parse(salvos);
        this.respostas = obj.respostas || {};
        this.etapaAtual = obj.etapaAtual || 0;
      } catch (e) {
        this.respostas = {};
        this.etapaAtual = 0;
      }
    }
  },

  // Salvar rascunho temporário
  salvarRascunho: function() {
    localStorage.setItem('jornada_orientacao_draft', JSON.stringify({
      respostas: this.respostas,
      etapaAtual: this.etapaAtual
    }));
  },

  // Renderizar a Pergunta Atual
  renderPergunta: function() {
    const container = document.getElementById('wizard-container');
    if (!container) return;

    const perg = this.perguntas[this.etapaAtual];
    const total = this.perguntas.length;
    const progressoPct = Math.round(((this.etapaAtual + 1) / total) * 100);

    let html = `
      <div class="wizard-step-container">
        <div class="wizard-progress">
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 600;">
            <span>Etapa ${this.etapaAtual + 1} de ${total}</span>
            <span>${progressoPct}% Concluído</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${progressoPct}%;"></div>
          </div>
        </div>

        <h2 style="font-size: 1.35rem; margin-bottom: 1.5rem; color: var(--text-main);">
          ${perg.id}. ${perg.titulo}
        </h2>

        <div class="options-group" style="margin-bottom: 2rem;">
    `;

    perg.opcoes.forEach((opt, idx) => {
      const isSelected = this.respostas[perg.id] && this.respostas[perg.id].area === opt.area && this.respostas[perg.id].texto === opt.texto;
      html += `
        <div class="option-card ${isSelected ? 'selected' : ''}" onclick="JornadaOrientacao.selecionarOpcao(${idx})">
          <div class="option-radio"></div>
          <span style="font-size: 0.95rem; color: var(--text-main); font-weight: 500;">${opt.texto}</span>
        </div>
      `;
    });

    html += `
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <button class="btn btn-outline" onclick="JornadaOrientacao.voltarEtapa()" ${this.etapaAtual === 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
            ⬅️ Voltar
          </button>
          
          <button class="btn btn-ghost btn-sm" onclick="JornadaOrientacao.reiniciar()">
            🔄 Reiniciar
          </button>

          <button class="btn btn-primary" onclick="JornadaOrientacao.avancarEtapa()">
            ${this.etapaAtual === total - 1 ? '🎓 Finalizar e Ver Resultado' : 'Continuar ➡️'}
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  // Selecionar uma opção da pergunta
  selecionarOpcao: function(optIdx) {
    const perg = this.perguntas[this.etapaAtual];
    const escolhida = perg.opcoes[optIdx];
    this.respostas[perg.id] = escolhida;
    this.salvarRascunho();
    this.renderPergunta();
  },

  // Avançar para a próxima etapa
  avancarEtapa: function() {
    const perg = this.perguntas[this.etapaAtual];
    if (!this.respostas[perg.id]) {
      JornadaApp.showToast("⚠️ Por favor, escolha uma das alternativas antes de continuar.");
      return;
    }

    if (this.etapaAtual < this.perguntas.length - 1) {
      this.etapaAtual++;
      this.salvarRascunho();
      this.renderPergunta();
      window.scrollTo(0, 0);
    } else {
      this.calcularEFinalizar();
    }
  },

  // Voltar etapa
  voltarEtapa: function() {
    if (this.etapaAtual > 0) {
      this.etapaAtual--;
      this.salvarRascunho();
      this.renderPergunta();
      window.scrollTo(0, 0);
    }
  },

  // Reiniciar questionário
  reiniciar: function() {
    if (confirm("Deseja realmente reiniciar o questionário? As respostas selecionadas serão limpas.")) {
      this.etapaAtual = 0;
      this.respostas = {};
      localStorage.removeItem('jornada_orientacao_draft');
      this.renderPergunta();
    }
  },

  // Calcular o resultado de afinidades e salvar para a página de resultado
  calcularEFinalizar: function() {
    const pontuacao = {
      tecnologiaEngenharia: 0,
      saudeBiologicas: 0,
      humanasSociais: 0,
      comunicacaoCriatividade: 0,
      gestaoNegocios: 0,
      cienciasExatas: 0
    };

    Object.values(this.respostas).forEach(r => {
      if (pontuacao[r.area] !== undefined) {
        pontuacao[r.area] += 1;
      }
    });

    const mapaAreas = [
      { key: "tecnologiaEngenharia", nome: "Tecnologia e Engenharias", icone: "💻" },
      { key: "saudeBiologicas", nome: "Saúde e Ciências Biológicas", icone: "🩺" },
      { key: "humanasSociais", nome: "Ciências Humanas e Sociais", icone: "⚖️" },
      { key: "comunicacaoCriatividade", nome: "Comunicação e Criatividade", icone: "🎨" },
      { key: "gestaoNegocios", nome: "Gestão e Negócios", icone: "📊" },
      { key: "cienciasExatas", nome: "Ciências Exatas", icone: "📐" }
    ];

    // Ordenar por pontuação decrescente
    const ordenadas = mapaAreas.map(a => ({
      ...a,
      pontos: pontuacao[a.key],
      porcentagem: Math.round((pontuacao[a.key] / this.perguntas.length) * 100)
    })).sort((a, b) => b.pontos - a.pontos);

    const resultadoFinal = {
      dataCalculo: new Date().toLocaleDateString('pt-BR'),
      topAreas: ordenadas.slice(0, 3),
      todasAreas: ordenadas
    };

    localStorage.setItem('jornada_orientacao_resultado', JSON.stringify(resultadoFinal));
    localStorage.removeItem('jornada_orientacao_draft');

    window.location.href = 'resultado-orientacao.html';
  }
};

// Expor globalmente
if (typeof window !== 'undefined') {
  window.JornadaOrientacao = JornadaOrientacao;
}
