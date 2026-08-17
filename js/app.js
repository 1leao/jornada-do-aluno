/* ==========================================================================
   JORNADA DO ALUNO — APLICAÇÃO PRINCIPAL (APP.JS)
   Navegação responsiva, estado do usuário e utilitários gerais.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  JornadaApp.initNav();
  JornadaApp.highlightActivePage();
  JornadaApp.loadPlanoState();
});

const JornadaApp = {
  // Inicializar menu responsivo mobile
  initNav: function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
      });
    }
  },

  // Destacar link ativo no menu superior
  highlightActivePage: function() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (linkHref === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  // Carregar e persistir o estado do Plano de Estudos (localStorage)
  loadPlanoState: function() {
    const savedState = localStorage.getItem('jornada_plano_tarefas');
    if (savedState && window.JORNADA_DADOS) {
      try {
        const tarefasSalvas = JSON.parse(savedState);
        window.JORNADA_DADOS.alunoPrincipal.planoSemanal.forEach(tarefa => {
          if (tarefasSalvas[tarefa.id] !== undefined) {
            tarefa.concluida = tarefasSalvas[tarefa.id];
          }
        });
      } catch (e) {
        console.warn("Erro ao carregar estado salvo do plano:", e);
      }
    }
  },

  // Salvar estado da tarefa no localStorage
  toggleTaskCompletion: function(taskId) {
    if (!window.JORNADA_DADOS) return;
    const tarefas = window.JORNADA_DADOS.alunoPrincipal.planoSemanal;
    const tarefa = tarefas.find(t => t.id === taskId);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
      
      // Atualizar localStorage
      let savedState = {};
      try {
        savedState = JSON.parse(localStorage.getItem('jornada_plano_tarefas') || '{}');
      } catch (e) { savedState = {}; }
      savedState[taskId] = tarefa.concluida;
      localStorage.setItem('jornada_plano_tarefas', JSON.stringify(savedState));

      // Disparar evento para atualizar a UI da página se necessário
      const event = new CustomEvent('planoUpdated', { detail: { taskId, concluida: tarefa.concluida } });
      window.dispatchEvent(event);
    }
  },

  // Adicionar recomendação ao plano de estudos
  adicionarAoPlanoEstudos: function(novaTarefaObj) {
    if (!window.JORNADA_DADOS) return;
    const plano = window.JORNADA_DADOS.alunoPrincipal.planoSemanal;
    const novaId = "TASK-" + (Date.now().toString().slice(-4));
    const tarefaFinal = {
      id: novaId,
      dia: novaTarefaObj.dia || "Sexta-feira",
      disciplina: novaTarefaObj.disciplina || "Revisão Lumi",
      conteudo: novaTarefaObj.conteudo || "Exercício recomendado pela Tutora Lumi",
      duracao: novaTarefaObj.duracao || "45 min",
      tipo: novaTarefaObj.tipo || "Reforço Recomendado",
      prioridade: novaTarefaObj.prioridade || "Alta",
      dificuldadeRelacionada: true,
      concluida: false
    };

    plano.unshift(tarefaFinal);

    // Salvar no localStorage
    let savedNovas = [];
    try {
      savedNovas = JSON.parse(localStorage.getItem('jornada_tarefas_extras') || '[]');
    } catch(e) { savedNovas = []; }
    savedNovas.unshift(tarefaFinal);
    localStorage.setItem('jornada_tarefas_extras', JSON.stringify(savedNovas));

    this.showToast(`✨ Conteúdo "${tarefaFinal.disciplina}" adicionado ao seu Plano de Estudos!`);
  },

  // Exibir Toast de Notificação
  showToast: function(mensagem) {
    let toast = document.getElementById('jornada-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'jornada-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #0F172A;
        color: #FFFFFF;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 9999;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = mensagem;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 3500);
  },

  // Ação de Sair do Protótipo
  fazerLogout: function() {
    window.location.href = 'login.html';
  }
};

// Expor globalmente
if (typeof window !== 'undefined') {
  window.JornadaApp = JornadaApp;
}
