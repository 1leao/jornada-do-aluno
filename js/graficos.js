/* ==========================================================================
   JORNADA DO ALUNO — GERENCIADOR DE GRÁFICOS (GRAFICOS.JS)
   Suporte ao Chart.js via CDN com Fallback Visual Nativo em HTML/CSS.
   ========================================================================== */

const JornadaGraficos = {
  instancias: {},

  // Verificar se o Chart.js foi carregado com sucesso
  isChartAvailable: function() {
    return typeof Chart !== 'undefined';
  },

  // Fallback em HTML/CSS para quando o Chart.js não carregar
  renderFallback: function(containerId, titulo, dados) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const parent = el.parentElement;

    let html = `
      <div class="chart-fallback-box" style="padding: 1.25rem; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; margin-top: 0.5rem;">
        <p style="font-weight: 600; font-size: 0.9rem; color: #475569; margin-bottom: 1rem;">📊 ${titulo} (Visualização Alternativa)</p>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
    `;

    if (Array.isArray(dados)) {
      dados.forEach(item => {
        const valNum = (typeof item.valor === 'number' && !isNaN(item.valor)) ? item.valor : 0;
        const maxNum = (typeof item.max === 'number' && item.max > 0) ? item.max : 1000;
        const pct = Math.min(Math.round((valNum / maxNum) * 100), 100);

        html += `
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem; font-weight: 500;">
              <span>${item.rotulo}</span>
              <strong>${valNum}${item.unidade || ''}</strong>
            </div>
            <div style="width: 100%; background: #E2E8F0; height: 8px; border-radius: 4px; overflow: hidden;">
              <div style="width: ${pct}%; background: #4F46E5; height: 100%; border-radius: 4px;"></div>
            </div>
          </div>
        `;
      });
    }

    html += `</div></div>`;
    parent.innerHTML = html;
  },

  // 1. Gráfico de Evolução nos Simulados (Linha)
  renderEvolucaoSimulados: function(canvasId, historicoSimulados) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const rotulos = historicoSimulados.map(s => s.nome.split(' ')[0] + ' ' + s.nome.split(' ')[1]);
    const medias = historicoSimulados.map(s => s.mediaGeral);

    if (!this.isChartAvailable()) {
      const dadosFallback = historicoSimulados.map(s => ({
        rotulo: s.nome,
        valor: typeof s.mediaGeral === 'number' ? s.mediaGeral : 0,
        max: 1000,
        unidade: " pts"
      }));
      this.renderFallback(canvasId, "Evolução nos Simulados", dadosFallback);
      return;
    }

    if (this.instancias[canvasId]) this.instancias[canvasId].destroy();

    const ctx = canvas.getContext('2d');
    this.instancias[canvasId] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: rotulos,
        datasets: [{
          label: 'Média Geral (Pontos)',
          data: medias,
          borderColor: '#4F46E5',
          backgroundColor: 'rgba(79, 70, 229, 0.08)',
          borderWidth: 3,
          fill: true,
          tension: 0.35,
          pointBackgroundColor: '#7C3AED',
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0F172A',
            padding: 10,
            cornerRadius: 8
          }
        },
        scales: {
          y: {
            min: 600,
            max: 900,
            grid: { color: '#E2E8F0' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });
  },

  // 2. Gráfico de Desempenho por Área
  renderDesempenhoPorArea: function(canvasId, notasArea) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const rotulos = ['Linguagens', 'Matemática', 'Humanas', 'Natureza', 'Redação'];
    const valores = [
      notasArea.linguagens,
      notasArea.matematica,
      notasArea.humanas,
      notasArea.natureza,
      notasArea.redacao
    ];

    if (!this.isChartAvailable()) {
      const dadosFallback = rotulos.map((r, i) => ({
        rotulo: r,
        valor: typeof valores[i] === 'number' ? valores[i] : 0,
        max: 1000,
        unidade: " pts"
      }));
      this.renderFallback(canvasId, "Desempenho por Área", dadosFallback);
      return;
    }

    if (this.instancias[canvasId]) this.instancias[canvasId].destroy();

    const ctx = canvas.getContext('2d');
    this.instancias[canvasId] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: rotulos,
        datasets: [{
          label: 'Nota Obtida',
          data: valores,
          backgroundColor: [
            '#4F46E5', '#7C3AED', '#0D9488', '#10B981', '#F59E0B'
          ],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            min: 500,
            max: 1000,
            grid: { color: '#E2E8F0' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });
  },

  // 3. Gráfico Comparativo entre Turmas (Coordenação - Corrigido Fallback com Valores Numéricos Separados)
  renderComparativoTurmas: function(canvasId, dadosObjA, dadosObjB) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const rotulos = ['Linguagens', 'Matemática', 'Humanas', 'Natureza', 'Redação'];
    let datasets = [];

    if (dadosObjA && dadosObjB) {
      // Duas turmas (Todas as Turmas)
      const valoresA = [dadosObjA.linguagens, dadosObjA.matematica, dadosObjA.humanas, dadosObjA.natureza, dadosObjA.redacao];
      const valoresB = [dadosObjB.linguagens, dadosObjB.matematica, dadosObjB.humanas, dadosObjB.natureza, dadosObjB.redacao];

      datasets = [
        { label: '3º Ano A', data: valoresA, backgroundColor: '#4F46E5', borderRadius: 6 },
        { label: '3º Ano B', data: valoresB, backgroundColor: '#0D9488', borderRadius: 6 }
      ];
    } else {
      // Apenas uma turma selecionada (3º A ou 3º B)
      const dadosUnicos = dadosObjA || dadosObjB;
      const nomeTurma = dadosUnicos.nome || 'Turma Selecionada';
      const valores = [dadosUnicos.linguagens, dadosUnicos.matematica, dadosUnicos.humanas, dadosUnicos.natureza, dadosUnicos.redacao];

      datasets = [
        { label: nomeTurma, data: valores, backgroundColor: '#4F46E5', borderRadius: 6 }
      ];
    }

    if (!this.isChartAvailable()) {
      // CORREÇÃO DO FALLBACK: Apresenta cada turma como uma linha numérica independente sem NaN/Textos concatenados
      const dadosFallback = [];
      rotulos.forEach((rotulo, idx) => {
        datasets.forEach(d => {
          const valNum = (typeof d.data[idx] === 'number' && !isNaN(d.data[idx])) ? d.data[idx] : 0;
          dadosFallback.push({
            rotulo: `${rotulo} — ${d.label}`,
            valor: valNum,
            max: 1000,
            unidade: " pts"
          });
        });
      });

      this.renderFallback(canvasId, "Desempenho por Área das Turmas", dadosFallback);
      return;
    }

    if (this.instancias[canvasId]) this.instancias[canvasId].destroy();

    const ctx = canvas.getContext('2d');
    this.instancias[canvasId] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: rotulos,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' }
        },
        scales: {
          y: { min: 550, max: 950, grid: { color: '#E2E8F0' } },
          x: { grid: { display: false } }
        }
      }
    });
  },

  // 4. Gráfico de Áreas de Interesse Profissional (Coordenação)
  renderInteressesProfissionais: function(canvasId, interessesObj) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const rotulos = ['Tecnologia & Eng.', 'Saúde & Biológicas', 'Humanas & Sociais', 'Comunicação & Criat.', 'Gestão & Negócios'];
    const valores = Object.values(interessesObj);

    if (!this.isChartAvailable()) {
      const dadosFallback = rotulos.map((r, i) => ({
        rotulo: r,
        valor: (typeof valores[i] === 'number' && !isNaN(valores[i])) ? valores[i] : 0,
        max: 100,
        unidade: "%"
      }));
      this.renderFallback(canvasId, "Interesses Profissionais", dadosFallback);
      return;
    }

    if (this.instancias[canvasId]) this.instancias[canvasId].destroy();

    const ctx = canvas.getContext('2d');
    this.instancias[canvasId] = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: rotulos,
        datasets: [{
          data: valores,
          backgroundColor: ['#4F46E5', '#10B981', '#7C3AED', '#F59E0B', '#0D9488'],
          borderWidth: 2,
          borderColor: '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right' }
        }
      }
    });
  },

  // 5. Gráfico de Evolução para o Portal da Família (Mariana)
  renderEvolucaoFamilia: function(canvasId, simuladosData) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const rotulos = simuladosData.map(s => s.nome);
    const valores = simuladosData.map(s => s.media);

    if (!this.isChartAvailable()) {
      const dadosFallback = simuladosData.map(s => ({
        rotulo: s.nome,
        valor: (typeof s.media === 'number' && !isNaN(s.media)) ? s.media : 0,
        max: 1000,
        unidade: " pts"
      }));
      this.renderFallback(canvasId, "Evolução nos Simulados", dadosFallback);
      return;
    }

    if (this.instancias[canvasId]) this.instancias[canvasId].destroy();

    const ctx = canvas.getContext('2d');
    this.instancias[canvasId] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: rotulos,
        datasets: [{
          label: 'Média de Nota',
          data: valores,
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.3,
          pointBackgroundColor: '#0D9488',
          pointRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { min: 650, max: 800, grid: { color: '#E2E8F0' } },
          x: { grid: { display: false } }
        }
      }
    });
  }
};

// Expor globalmente
if (typeof window !== 'undefined') {
  window.JornadaGraficos = JornadaGraficos;
}
