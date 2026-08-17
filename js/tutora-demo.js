/* ==========================================================================
   JORNADA DO ALUNO — TUTORA VIRTUAL LUMI (TUTORA-DEMO.JS)
   Simulador interativo da assistente Lumi com 3 fluxos completos.
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('chat-messages')) {
    JornadaTutora.init();
  }
});

const JornadaTutora = {
  chatContainer: null,
  inputField: null,
  sendBtn: null,
  fluxoAtual: null,
  etapaFluxo: 0,

  init: function() {
    this.chatContainer = document.getElementById('chat-messages');
    this.inputField = document.getElementById('chat-input');
    this.sendBtn = document.getElementById('btn-send-chat');

    if (this.sendBtn) {
      this.sendBtn.addEventListener('click', () => this.handleUserSend());
    }

    if (this.inputField) {
      this.inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.handleUserSend();
      });
    }

    // Mensagem de Boas-Vindas da Lumi
    this.appendMessage('tutor', `
      👋 Olá, Mariana! Eu sou a <strong>Lumi — sua Tutora ENEM</strong>.
      <br><br>
      Estou aqui para ajudar você a tirar dúvidas, revisar conteúdos e praticar exercícios! Lembre-se: eu sou uma <strong>ferramenta de apoio aos estudos</strong> e trabalho junto com seus professores.
      <br><br>
      💡 <em>Por onde gostaria de começar hoje? Escolha um dos atalhos abaixo ou selecione um dos 3 fluxos interativos recomendados:</em>
    `);

    this.renderInitialButtons();
  },

  // Adicionar bolha de mensagem no chat
  appendMessage: function(sender, htmlContent) {
    if (!this.chatContainer) return;
    
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;

    const avatar = sender === 'tutor' 
      ? `<div class="tutor-avatar">L</div>` 
      : `<div class="tutor-avatar" style="background:#4F46E5;">M</div>`;

    msgDiv.innerHTML = `
      ${avatar}
      <div class="message-bubble">${htmlContent}</div>
    `;

    this.chatContainer.appendChild(msgDiv);
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
  },

  // Botões de Ação Inicial
  renderInitialButtons: function() {
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'chat-quick-actions';
    actionsDiv.style.cssText = 'margin-top: 10px; border: none; padding: 0;';

    actionsDiv.innerHTML = `
      <button class="btn btn-sm btn-outline" onclick="JornadaTutora.iniciarFluxo('matematica')">📐 1. Matemática (Porcentagem)</button>
      <button class="btn btn-sm btn-outline" onclick="JornadaTutora.iniciarFluxo('genetica')">🧬 2. Natureza (Genética)</button>
      <button class="btn btn-sm btn-outline" onclick="JornadaTutora.iniciarFluxo('redacao')">✍️ 3. Redação (Repertório)</button>
    `;

    this.chatContainer.appendChild(actionsDiv);
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
  },

  // Processar envio de mensagem digitada pelo usuário
  handleUserSend: function() {
    const text = this.inputField.value.trim();
    if (!text) return;

    this.appendMessage('user', text);
    this.inputField.value = '';

    // Resposta simulada inteligente caso o usuário digite no campo livre
    setTimeout(() => {
      if (text.toLowerCase().includes('porcentagem') || text.toLowerCase().includes('matemática')) {
        this.iniciarFluxo('matematica');
      } else if (text.toLowerCase().includes('genética') || text.toLowerCase().includes('mendel') || text.toLowerCase().includes('biologia')) {
        this.iniciarFluxo('genetica');
      } else if (text.toLowerCase().includes('redação') || text.toLowerCase().includes('repertório')) {
        this.iniciarFluxo('redacao');
      } else {
        this.appendMessage('tutor', `
          Entendi sua dúvida sobre "<em>${text}</em>"! 
          <br><br>
          Nesta versão demonstrativa, preparei 3 rotas completas de estudo guiado baseadas nas suas maiores necessidades do ENEM. Qual delas você quer explorar?
        `);
        this.renderInitialButtons();
      }
    }, 600);
  },

  // Trigger para atalhos rápidos
  atalhoRapido: function(tipo) {
    let msg = "";
    if (tipo === 'duvida') msg = "Gostaria de tirar uma dúvida sobre a matéria";
    if (tipo === 'explicar') msg = "Pode me explicar um conteúdo que errei no simulado?";
    if (tipo === 'questoes') msg = "Quero fazer um exercício de fixação do ENEM";
    if (tipo === 'redacao') msg = "Como posso melhorar minha nota na Competência 2 da Redação?";

    this.appendMessage('user', msg);
    setTimeout(() => {
      this.appendMessage('tutor', `Ótima escolha! Vamos trabalhar exatamente isso. Selecione o tema abaixo para começarmos:`);
      this.renderInitialButtons();
    }, 500);
  },

  // ------------------------------------------------------------------------
  // FLUXOS INTERATIVOS COMPLETOS (MATEMÁTICA, GENÉTICA, REDAÇÃO)
  // ------------------------------------------------------------------------
  iniciarFluxo: function(tipo) {
    this.fluxoAtual = tipo;
    this.etapaFluxo = 1;

    if (tipo === 'matematica') {
      this.appendMessage('user', 'Quero revisar Porcentagem e Matemática Financeira');
      setTimeout(() => {
        this.appendMessage('tutor', `
          🎓 <strong>Matemática — Porcentagem no ENEM</strong>
          <br><br>
          No ENEM, porcentagem aparece muito em gráficos e problemas do dia a dia.
          <br><br>
          <strong>Dica da Lumi:</strong> Para calcular um aumento de 15%, basta multiplicar o valor por <code>1,15</code>. Para dar um desconto de 10%, multiplique por <code>0,90</code>.
          <br><br>
          Pronta para testar um exercício que caiu em um simulado recente?
        `);
        this.renderBotaoProximo('matematica_ex');
      }, 600);
    } 
    else if (tipo === 'genetica') {
      this.appendMessage('user', 'Preciso entender a 1ª Lei de Mendel (Genética)');
      setTimeout(() => {
        this.appendMessage('tutor', `
          🧬 <strong>Ciências da Natureza — 1ª Lei de Mendel</strong>
          <br><br>
          A 1ª Lei afirma que cada caráter é determinado por um par de fatores (alelos) que se separam na formação dos gametas.
          <br><br>
          • <strong>Alelo Dominante (A):</strong> Expressa-se mesmo em dose simples.<br>
          • <strong>Alelo Recessivo (a):</strong> Expressa-se apenas em dose dupla (aa).
          <br><br>
          Quer tentar resolver uma questão prática de probabilidade genética?
        `);
        this.renderBotaoProximo('genetica_ex');
      }, 600);
    } 
    else if (tipo === 'redacao') {
      this.appendMessage('user', 'Quero ajuda para construir Repertório Sociocultural na Redação');
      setTimeout(() => {
        this.appendMessage('tutor', `
          ✍️ <strong>Redação ENEM — Uso Legítimo de Repertório</strong>
          <br><br>
          Para tirar nota máxima na Competência 2, seu repertório sociocultural deve ser:
          <br>1. <strong>Legítimo</strong> (baseado em área do conhecimento reconhecida);<br>
          2. <strong>Pertinente</strong> ao tema da redação;<br>
          3. <strong>Produtivo</strong> (conectado à sua tese e argumento).
          <br><br>
          <strong>Exemplo Curinga:</strong> O conceito de <em>"Cidadania Mutilada"</em> de Milton Santos serve para quase qualquer tema sobre exclusão social ou falta de acesso a direitos.
          <br><br>
          Vamos ver como aplicar isso na prática?
        `);
        this.renderBotaoProximo('redacao_ex');
      }, 600);
    }
  },

  // Renderizar Exercício Interativo
  renderBotaoProximo: function(etapa) {
    const div = document.createElement('div');
    div.style.margin = '10px 0';

    if (etapa === 'matematica_ex') {
      div.innerHTML = `
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 12px; margin-top: 8px;">
          <p style="font-weight: 600; margin-bottom: 0.5rem; color: #0F172A;">❓ Exercício de Fixação:</p>
          <p style="font-size: 0.9rem; color: #334155; margin-bottom: 1rem;">
            Um casaco de R$ 200,00 teve um aumento de 15% em maio. Em junho, a loja deu um desconto de 10% sobre o novo preço. Qual o valor final do casaco?
          </p>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <button class="btn btn-sm btn-outline" onclick="JornadaTutora.responderEx('matematica', 'A')">A) R$ 200,00</button>
            <button class="btn btn-sm btn-outline" onclick="JornadaTutora.responderEx('matematica', 'B')">B) R$ 207,00</button>
            <button class="btn btn-sm btn-outline" onclick="JornadaTutora.responderEx('matematica', 'C')">C) R$ 210,00</button>
          </div>
        </div>
      `;
    } else if (etapa === 'genetica_ex') {
      div.innerHTML = `
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 12px; margin-top: 8px;">
          <p style="font-weight: 600; margin-bottom: 0.5rem; color: #0F172A;">❓ Exercício de Fixação:</p>
          <p style="font-size: 0.9rem; color: #334155; margin-bottom: 1rem;">
            Um casal ambos heterozigotos (Aa) para o albinismo deseja ter um filho. Qual a probabilidade de a criança nascer albina (aa)?
          </p>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <button class="btn btn-sm btn-outline" onclick="JornadaTutora.responderEx('genetica', 'A')">A) 50% (1/2)</button>
            <button class="btn btn-sm btn-outline" onclick="JornadaTutora.responderEx('genetica', 'B')">B) 25% (1/4)</button>
            <button class="btn btn-sm btn-outline" onclick="JornadaTutora.responderEx('genetica', 'C')">C) 75% (3/4)</button>
          </div>
        </div>
      `;
    } else if (etapa === 'redacao_ex') {
      div.innerHTML = `
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 12px; margin-top: 8px;">
          <p style="font-weight: 600; margin-bottom: 0.5rem; color: #0F172A;">❓ Aplicação Prática:</p>
          <p style="font-size: 0.9rem; color: #334155; margin-bottom: 1rem;">
            Tema: "Desafios do envelhecimento da população brasileira". Qual repertório seria mais produtivo?
          </p>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <button class="btn btn-sm btn-outline" onclick="JornadaTutora.responderEx('redacao', 'A')">A) Art. 230 da Constituição (Dever de amparar pessoas idosas)</button>
            <button class="btn btn-sm btn-outline" onclick="JornadaTutora.responderEx('redacao', 'B')">B) Citar apenas um filme de ficção sem relação direta</button>
          </div>
        </div>
      `;
    }

    this.chatContainer.appendChild(div);
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
  },

  // Processar Resposta do Exercício
  responderEx: function(tipo, opcao) {
    if (tipo === 'matematica') {
      const acertou = (opcao === 'B');
      this.appendMessage('user', `Escolhi a alternativa ${opcao}`);
      setTimeout(() => {
        this.appendMessage('tutor', `
          ${acertou ? '🎉 <strong>Exato! Resposta Correta! (R$ 207,00)</strong>' : '❌ <strong>Quase lá! A resposta correta é a B (R$ 207,00).</strong>'}
          <br><br>
          <strong>Resolução Comentada:</strong><br>
          1. Aumento de 15%: R$ 200,00 × 1,15 = R$ 230,00.<br>
          2. Desconto de 10%: R$ 230,00 × 0,90 = <strong>R$ 207,00</strong>.
          <br><br>
          📌 <em>Dica de Ouro: Desconto e aumento sucessivos NÃO se cancelam!</em>
        `);
        this.renderBotaoAdicionarPlano("Matemática", "Exercícios de Porcentagem e Descontos Sucessivos");
      }, 500);
    } 
    else if (tipo === 'genetica') {
      const acertou = (opcao === 'B');
      this.appendMessage('user', `Escolhi a alternativa ${opcao}`);
      setTimeout(() => {
        this.appendMessage('tutor', `
          ${acertou ? '🎉 <strong>Excelente! Resposta Correta! (25% ou 1/4)</strong>' : '❌ <strong>Quase! A resposta correta é B (25%).</strong>'}
          <br><br>
          <strong>Resolução no Quadro de Punnett (Aa × Aa):</strong><br>
          • Genótipos possíveis: AA (25%), Aa (50%), aa (25%).<br>
          • Como o albinismo é recessivo, apenas o genótipo <strong>aa</strong> desenvolve a condição (25%).
        `);
        this.renderBotaoAdicionarPlano("Biologia", "Cruzamentos Genéticos e 1ª Lei de Mendel");
      }, 500);
    } 
    else if (tipo === 'redacao') {
      const acertou = (opcao === 'A');
      this.appendMessage('user', `Escolhi a alternativa ${opcao}`);
      setTimeout(() => {
        this.appendMessage('tutor', `
          ${acertou ? '🎉 <strong>Perfeito! Alternativa A!</strong>' : '❌ <strong>A opção A é a mais recomendada.</strong>'}
          <br><br>
          O Artigo 230 da Constituição Federal de 1988 estabelece formalmente que a família, a sociedade e o Estado têm o dever de amparar as pessoas idosas. Citar a legislação demonstra domínio de repertório sociocultural legítimo e altamente pertinente ao ENEM!
        `);
        this.renderBotaoAdicionarPlano("Redação", "Repertórios Socioculturais para a Competência 2");
      }, 500);
    }
  },

  // Botão para Adicionar ao Plano de Estudos
  renderBotaoAdicionarPlano: function(disciplina, conteudo) {
    const div = document.createElement('div');
    div.style.marginTop = '1rem';
    div.innerHTML = `
      <div style="background: #F0FDF4; border: 1px solid #BBF7D0; padding: 1rem; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
        <span style="font-size: 0.85rem; color: #166534; font-weight: 600;">
          💡 Deseja praticar este tema durante a semana?
        </span>
        <button class="btn btn-sm btn-primary" onclick="JornadaApp.adicionarAoPlanoEstudos({ disciplina: '${disciplina}', conteudo: '${conteudo}', prioridade: 'Alta' })">
          ➕ Adicionar ao Meu Plano de Estudos
        </button>
      </div>
    `;
    this.chatContainer.appendChild(div);
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
  }
};

// Expor globalmente
if (typeof window !== 'undefined') {
  window.JornadaTutora = JornadaTutora;
}
