/* ===== Dados ===== */
const TRACKS = [
  {
    id: "branding", emoji: "🎨", name: "Branding e Estratégia", color: "#004A8D",
    tagline: "Visão de longo prazo: o que a marca é, não só o que ela posta.",
    perfil: "Gosta de pensar, pesquisar e conectar ideias. Tem paciência com o longo prazo.",
    tools: ["Pesquisa de mercado", "Personas", "Brand platform", "Canvas", "Notion/Miro", "Google Trends"],
    reality: "O crescimento é mais lento no começo: você apoia pesquisa e planejamento. A influência estratégica vem com repertório e tempo, mas é daqui que saem diretores de marca.",
    career: ["Assistente de planejamento", "Analista de marca", "Coordenador de branding", "Head de estratégia"],
    graduacao: "Publicidade, Administração, Comunicação",
    phases: [
      { when: "0–3 meses", icon: "🌱", title: "Fundamentos de marca", items: [
        "Estudar posicionamento, propósito e arquitetura de marca",
        "Analisar 3 marcas que você admira (o que dizem, para quem, por quê)",
        "Aprender a montar persona e mapa de empatia com dados reais" ] },
      { when: "3–6 meses", icon: "🔍", title: "Pesquisa e diagnóstico", items: [
        "Fazer uma pesquisa de percepção de marca (formulário + 10 entrevistas)",
        "Montar um benchmarking de concorrentes",
        "Aprender a transformar achados em insights acionáveis" ] },
      { when: "6–12 meses", icon: "🧱", title: "Estratégia na prática", items: [
        "Criar uma plataforma de marca completa para um negócio real (propósito, valores, tom de voz)",
        "Estudar planejamento de comunicação e arquitetura de portfólio",
        "Publicar o case com problema, decisões e resultado" ] },
      { when: "1–3 anos", icon: "🏛️", title: "Consolidação", items: [
        "Cursar graduação ou pós em área de estratégia/comunicação",
        "Liderar um projeto de reposicionamento ou lançamento",
        "Construir repertório: ler, visitar, comparar mercados" ] }
    ]
  },
  {
    id: "produto", emoji: "🌉", name: "Marketing de Produto", color: "#00A9E0",
    tagline: "Ponte entre quem desenvolve e quem vende.",
    perfil: "Gosta de conversar com todo mundo, organizar informação e traduzir linguagem técnica.",
    tools: ["Entrevistas com clientes", "Proposta de valor", "Roadmap de produto", "Precificação", "Jira/Trello", "Pesquisa de mercado"],
    reality: "É um papel de tradução: você senta com desenvolvimento e com vendas, e lida com opiniões diferentes. Muito valorizado em empresas de tecnologia e serviços.",
    career: ["Assistente de produto/marketing", "Analista de marketing de produto", "Product Marketing Manager", "Head de produto/go-to-market"],
    graduacao: "Marketing, Administração, Sistemas de Informação, Engenharia de Produção",
    phases: [
      { when: "0–3 meses", icon: "🌱", title: "Entender produto", items: [
        "Estudar proposta de valor, segmentação e posicionamento de produto",
        "Aprender o básico de ciclo de vida do produto e roadmap",
        "Escolher um produto digital e documentar o que ele resolve e para quem" ] },
      { when: "3–6 meses", icon: "🗣️", title: "Ouvir o cliente", items: [
        "Fazer 8 entrevistas com usuários de um produto real",
        "Mapear dores, alternativas e critérios de compra",
        "Transformar as entrevistas em requisitos e mensagens" ] },
      { when: "6–12 meses", icon: "🚀", title: "Lançar e posicionar", items: [
        "Criar um plano de lançamento (go-to-market) completo para um produto/serviço",
        "Estudar precificação e materiais de venda (one-pager, FAQ)",
        "Medir adoção e propor melhorias" ] },
      { when: "1–3 anos", icon: "🏛️", title: "Consolidação", items: [
        "Aprofundar métricas de produto (ativação, retenção)",
        "Trabalhar lado a lado com times de produto e vendas",
        "Considerar graduação/pós em produto ou gestão" ] }
    ]
  },
  {
    id: "dados", emoji: "📊", name: "Performance e Dados", color: "#F7941D",
    tagline: "Growth, Web Analytics, testes A/B e análise preditiva com Python.",
    perfil: "Gosta de números, hipóteses e provar o que funciona. Tem constância para estudar.",
    tools: ["GA4", "Google Tag Manager", "Looker Studio", "Google Ads", "Meta Ads", "Testes A/B", "SQL", "Python + pandas", "Planilhas avançadas"],
    reality: "É a área em que o mercado mais pede gente e menos encontra, mas exige estudo constante de estatística básica e muita prática. Quem chega ao nível preditivo raramente fica sem proposta.",
    career: ["Assistente de mídia/dados", "Analista de performance", "Analista de growth/BI", "Coordenador de dados & growth"],
    graduacao: "Ciência de Dados, Estatística, Sistemas de Informação, Marketing",
    phases: [
      { when: "0–3 meses", icon: "🌱", title: "Base de medição", items: [
        "Fazer o curso de GA4 e a certificação gratuita do Google Analytics",
        "Dominar planilhas: tabela dinâmica, PROCV/XLOOKUP, gráficos",
        "Entender funil, CAC, LTV, ROAS e taxa de conversão" ] },
      { when: "3–6 meses", icon: "🧪", title: "Experimentação (Growth)", items: [
        "Instalar GA4 + GTM em uma landing page própria",
        "Rodar um teste A/B (hipótese, amostra, significância, decisão)",
        "Montar um dashboard no Looker Studio" ] },
      { when: "6–12 meses", icon: "🐍", title: "Python, SQL e pandas", items: [
        "Aprender SQL básico (SELECT, JOIN, GROUP BY)",
        "Usar pandas para cruzar base de CRM, vendas e mídia",
        "Fazer um modelo simples de previsão (ex.: propensão de compra ou churn)" ] },
      { when: "1–3 anos", icon: "🏛️", title: "Consolidação", items: [
        "Certificações de mídia (Google Ads, Meta Blueprint)",
        "Documentar casos com impacto em receita",
        "Considerar graduação/pós em dados ou estatística aplicada" ] }
    ]
  },
  {
    id: "conteudo", emoji: "✍️", name: "Conteúdo e Engajamento", color: "#0A6BC0",
    tagline: "Copy avançada, automação de CRM e comunidade.",
    perfil: "Gosta de escrever, entender o que move as pessoas e organizar isso em processo.",
    tools: ["Copywriting", "E-mail marketing", "RD Station/HubSpot", "Automação de fluxos", "WhatsApp Business", "SEO", "Comunidades"],
    reality: "A demanda por produção é grande. Quem sobe é quem sai de 'fazer posts' para desenhar a estratégia de relacionamento, com régua, segmentação e métricas.",
    career: ["Assistente de conteúdo", "Analista de conteúdo/CRM", "Coordenador de relacionamento", "Head de conteúdo e CRM"],
    graduacao: "Comunicação, Jornalismo, Publicidade, Letras",
    phases: [
      { when: "0–3 meses", icon: "🌱", title: "Escrita que converte", items: [
        "Estudar copywriting (AIDA, PAS, promessa e prova)",
        "Reescrever 5 anúncios/e-mails reais e explicar o que melhorou",
        "Fazer o curso gratuito de Content Marketing da HubSpot Academy" ] },
      { when: "3–6 meses", icon: "📬", title: "Canal próprio", items: [
        "Criar uma newsletter ou blog sobre um tema que você domina",
        "Aprender SEO básico e calendário editorial",
        "Medir abertura, clique e retorno e ajustar" ] },
      { when: "6–12 meses", icon: "⚙️", title: "CRM e automação", items: [
        "Desenhar uma régua de relacionamento (boas-vindas, nutrição, reativação)",
        "Montar a automação em uma ferramenta gratuita (HubSpot/RD)",
        "Segmentar a base e comparar resultados entre grupos" ] },
      { when: "1–3 anos", icon: "🫂", title: "Comunidade", items: [
        "Criar ou moderar uma comunidade (WhatsApp, Discord, Instagram)",
        "Definir ritual, regras e métricas de engajamento",
        "Transformar clientes em público que volta e indica" ] }
    ]
  },
  {
    id: "trade", emoji: "🏬", name: "Trade Marketing e Varejo", color: "#00305E",
    tagline: "O ecossistema offline e a experiência phygital.",
    perfil: "Gosta de ver o resultado materializado, de lidar com pessoas e com operação.",
    tools: ["Planograma", "Layout de loja", "Logística de PDV", "Merchandising", "QR Code/NFC", "Pesquisa de ponto de venda", "Prototipagem maker"],
    reality: "Menos glamour, mais impacto direto em venda. Há pouca concorrência qualificada porque muita gente do marketing só olha para a tela.",
    career: ["Assistente de trade", "Analista de trade marketing", "Coordenador de trade/varejo", "Gerente de trade e canais"],
    graduacao: "Administração, Marketing, Logística, Comércio",
    phases: [
      { when: "0–3 meses", icon: "🌱", title: "Entender o PDV", items: [
        "Visitar 5 lojas e registrar layout, exposição, preço e sinalização",
        "Estudar merchandising, planograma e comportamento no ponto de venda",
        "Aprender os canais de varejo (autosserviço, especializado, e-commerce)" ] },
      { when: "3–6 meses", icon: "📐", title: "Layout e exposição", items: [
        "Redesenhar o layout/vitrine de uma loja parceira (antes e depois)",
        "Montar um planograma simples para uma categoria",
        "Medir efeito em fluxo, tempo de permanência ou venda" ] },
      { when: "6–12 meses", icon: "🚚", title: "Logística e execução", items: [
        "Entender abastecimento, ruptura e logística de PDV",
        "Planejar uma ação promocional com cronograma de execução",
        "Criar um checklist de auditoria de loja" ] },
      { when: "1–3 anos", icon: "🔗", title: "Phygital", items: [
        "Integrar QR Code/NFC e conteúdo digital à experiência na loja",
        "Prototipar um display ou experiência maker física",
        "Cruzar dados de loja física e online para decidir ações" ] }
    ]
  }
];

const QUIZ = [
  { q: "Qual tarefa te deixa mais animado(a)?", o: [
    ["Entender por que uma marca é percebida de certo jeito", { branding: 3 }],
    ["Ouvir clientes e traduzir o que eles precisam", { produto: 3 }],
    ["Abrir uma planilha e descobrir o que está funcionando", { dados: 3 }],
    ["Escrever uma mensagem que faz alguém responder", { conteudo: 3 }],
    ["Ver uma ideia virar algo real numa loja", { trade: 3 }] ] },
  { q: "Como você lida melhor com um problema?", o: [
    ["Pesquisando e conectando referências", { branding: 2, produto: 1 }],
    ["Conversando com as pessoas envolvidas", { produto: 2, conteudo: 1 }],
    ["Testando hipóteses e medindo", { dados: 2, trade: 1 }],
    ["Escrevendo e organizando o raciocínio", { conteudo: 2, branding: 1 }],
    ["Indo ao local e observando de perto", { trade: 2, produto: 1 }] ] },
  { q: "O que você aguenta fazer por muito tempo sem enjoar?", o: [
    ["Construir significado e posicionamento", { branding: 3 }],
    ["Alinhar áreas e priorizar", { produto: 3 }],
    ["Analisar números e refinar", { dados: 3 }],
    ["Produzir e aprimorar conteúdo", { conteudo: 3 }],
    ["Cuidar de detalhes de execução", { trade: 3 }] ] },
  { q: "Qual ferramenta você mais quer dominar?", o: [
    ["Miro/Notion para estruturar estratégia", { branding: 2, produto: 1 }],
    ["Trello/Jira para organizar entregas", { produto: 2, trade: 1 }],
    ["GA4, SQL ou Python", { dados: 3 }],
    ["HubSpot/RD Station e e-mail marketing", { conteudo: 3 }],
    ["Planograma e ferramentas de layout", { trade: 3 }] ] },
  { q: "Qual cenário de trabalho combina com você?", o: [
    ["Agência ou consultoria de marca", { branding: 3 }],
    ["Empresa de tecnologia/serviços", { produto: 2, dados: 1 }],
    ["Time de growth ou mídia", { dados: 3 }],
    ["Time de conteúdo, CRM ou comunidade", { conteudo: 3 }],
    ["Indústria/varejo com contato com lojas", { trade: 3 }] ] },
  { q: "Qual frase te define melhor?", o: [
    ["Sempre pergunto 'por quê?'", { branding: 2, produto: 1 }],
    ["Gosto de ser o elo entre as pessoas", { produto: 2, conteudo: 1 }],
    ["Só acredito vendo os dados", { dados: 3 }],
    ["Sou boa(bom) de palavra", { conteudo: 3 }],
    ["Gosto de colocar a mão na massa", { trade: 2, dados: 1 }] ] }
];

const PROMPTS = [
  { t: "📋 Rotina operacional da semana", p: "Atue como coordenador de marketing. Monte um checklist semanal de operação para [tipo de negócio], com tarefas por dia, responsável, tempo estimado e indicador de conclusão. Termine com 3 pontos de atenção." },
  { t: "🔄 Automatizar um fluxo", p: "Quero automatizar o seguinte processo: [descreva]. Desenhe o fluxo passo a passo (gatilho, ações, condições, exceções), liste as ferramentas gratuitas que posso usar e aponte onde um humano precisa revisar." },
  { t: "🕵️ Analisar concorrentes", p: "Analise 3 concorrentes de [segmento] com base nas informações que vou colar: posicionamento, público, preços, canais e tom de voz. Entregue uma tabela comparativa e 3 oportunidades que eles não exploram. Aponte o que você não consegue afirmar sem fonte." },
  { t: "📊 Ler um relatório de dados", p: "Vou colar o resultado de uma campanha. Explique em linguagem simples o que os números dizem, o que pode estar distorcendo a leitura (amostra, sazonalidade, atribuição) e quais 2 testes eu deveria rodar a seguir." },
  { t: "🐍 Primeiro script em pandas", p: "Tenho dois arquivos CSV: clientes.csv (id, cidade, data_cadastro) e compras.csv (id_cliente, valor, data). Escreva um script em Python com pandas que una as bases, calcule ticket médio e recorrência por cidade e explique cada linha como se eu fosse iniciante." }
];

const MAKER = [
  { e: "🌐", t: "Landing page com teste A/B", d: "Crie 2 versões, divida o tráfego, meça conversão e <strong>documente a decisão</strong>." },
  { e: "📬", t: "Newsletter de um nicho", d: "Escolha um tema, publique 6 edições e <strong>acompanhe abertura e cliques</strong>." },
  { e: "📈", t: "Análise de dados públicos", d: "Pegue uma base aberta, limpe com pandas e conte uma <strong>história com gráficos</strong>." },
  { e: "🤖", t: "Automação de uma rotina", d: "Use IA e uma ferramenta gratuita para <strong>eliminar uma tarefa repetitiva</strong>." },
  { e: "🏪", t: "Campanha para negócio local", d: "Ajude um comércio do bairro, defina métricas e <strong>mostre o antes e o depois</strong>." },
  { e: "🧩", t: "Experiência phygital", d: "Monte um display com <strong>QR Code</strong> que leva a um conteúdo digital e meça os acessos." }
];

const PLAN = [
  { t: "📅 Dias 1–30: escolher e organizar", items: [
    "Fazer o quiz e escolher uma trilha provisória (dá para mudar)",
    "Conversar com 2 profissionais da área escolhida",
    "Definir 3 horas fixas de estudo por semana",
    "Criar/atualizar perfil no LinkedIn com o que você já sabe fazer" ] },
  { t: "🛠️ Dias 31–60: estudar e fazer", items: [
    "Iniciar um curso focado na trilha (um tema, até o fim)",
    "Começar um projeto pequeno e real para o portfólio",
    "Participar de 1 evento ou comunidade da área",
    "Conversar com mais 2 profissionais" ] },
  { t: "🏅 Dias 61–90: provar e publicar", items: [
    "Concluir uma certificação (Google ou HubSpot Academy)",
    "Publicar o projeto com problema, decisão, resultado e aprendizado",
    "Conversar com mais 1 profissional e pedir feedback do portfólio",
    "Pesquisar graduações e comparar com sua trilha",
    "Definir o plano dos próximos 90 dias" ] }
];

/* ===== Utilidades ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.id); toast.id = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ===== Trilhas + Roadmap ===== */
let currentTrack = store.get("mkt_track", TRACKS[0].id);
const checks = store.get("mkt_checks", {});

function renderTabs() {
  const ul = $("#trackTabs");
  ul.innerHTML = TRACKS.map(t => `
    <li class="nav-item"><button class="nav-link ${t.id === currentTrack ? "active" : ""}" style="--tc:${t.color}"
      data-track="${t.id}" type="button">${t.emoji} ${t.name}</button></li>`).join("");
  $$("button", ul).forEach(b => b.addEventListener("click", () => selectTrack(b.dataset.track, true)));
}

function selectTrack(id, scroll) {
  currentTrack = id; store.set("mkt_track", id);
  $$("#trackTabs .nav-link").forEach(b => b.classList.toggle("active", b.dataset.track === id));
  renderTrack();
  if (scroll) $("#trackPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function trackProgress(t) {
  let done = 0, total = 0;
  t.phases.forEach((p, i) => p.items.forEach((_, j) => { total++; if (checks[`${t.id}-${i}-${j}`]) done++; }));
  return { done, total, pct: Math.round(done / total * 100) };
}

function renderTrack() {
  const t = TRACKS.find(x => x.id === currentTrack);
  const panel = $("#trackPanel");
  panel.style.setProperty("--track", t.color);
  const prog = trackProgress(t);
  panel.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-7">
        <div class="track-hero h-100">
          <div class="d-flex gap-3 align-items-center mb-2"><span class="big">${t.emoji}</span>
            <div><h3 class="mb-0">${t.name}</h3><div class="opacity-75">${t.tagline}</div></div></div>
          <p class="mt-3 mb-3">🧑‍💻 <strong>Perfil:</strong> ${t.perfil}</p>
          <div class="chips mb-4">${t.tools.map(x => `<span class="chip">${x}</span>`).join("")}</div>
          <div class="d-flex justify-content-between small fw-bold mb-1"><span>🏁 Seu progresso no roadmap</span><span id="trackPct">${prog.pct}%</span></div>
          <div class="progress-slim"><div id="trackBar" style="width:${prog.pct}%"></div></div>
          <div class="small mt-1 opacity-75" id="trackCount">${prog.done} de ${prog.total} passos concluídos</div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="side-box">
          <h4>🪜 Possível trajetória de cargos</h4>
          <div class="career mb-3">${t.career.map((c, i) => `<span class="step">${c}</span>${i < t.career.length - 1 ? '<span class="arrow">➜</span>' : ""}`).join("")}</div>
          <h4>🎓 Graduações que combinam</h4>
          <p class="mb-3">${t.graduacao}</p>
          <div class="reality"><strong>⚠️ Realidade:</strong> ${t.reality}</div>
        </div>
      </div>
    </div>

    <h3 class="text-center fw-bold mt-5 mb-0">🗺️ Roadmap: ${t.name}</h3>
    <p class="text-center text-muted">Os prazos são uma referência: ajuste ao seu ritmo.</p>
    <div class="roadmap">
      ${t.phases.map((p, i) => phaseHTML(t, p, i)).join("")}
    </div>`;

  $$(".todo input", panel).forEach(inp => inp.addEventListener("change", () => {
    checks[inp.dataset.key] = inp.checked; store.set("mkt_checks", checks);
    updateTrackProgress(t);
    const ph = inp.closest(".phase");
    ph.classList.toggle("done", $$("input", ph).every(i => i.checked));
    if (inp.checked && trackProgress(t).pct === 100) { toast("🎉 Roadmap concluído! Hora de publicar o case."); confetti(); }
  }));
  revealNow(panel);
}

function phaseHTML(t, p, i) {
  const all = p.items.every((_, j) => checks[`${t.id}-${i}-${j}`]);
  return `
  <div class="phase ${all ? "done" : ""} reveal">
    <div class="dot">${p.icon}</div>
    <div class="phase-card">
      <span class="phase-when">${p.when}</span>
      <h4>${p.title}</h4>
      ${p.items.map((it, j) => {
        const k = `${t.id}-${i}-${j}`;
        return `<label class="todo"><input type="checkbox" data-key="${k}" ${checks[k] ? "checked" : ""}><span>${it}</span></label>`;
      }).join("")}
    </div>
  </div>`;
}

function updateTrackProgress(t) {
  const p = trackProgress(t);
  $("#trackPct").textContent = p.pct + "%";
  $("#trackBar").style.width = p.pct + "%";
  $("#trackCount").textContent = `${p.done} de ${p.total} passos concluídos`;
}

/* ===== Quiz ===== */
let qi = 0, scores = {};
function renderQuiz() {
  const box = $("#quizBox");
  if (qi >= QUIZ.length) return renderResult(box);
  const q = QUIZ[qi];
  box.innerHTML = `
    <div class="quiz-progress"><div style="width:${qi / QUIZ.length * 100}%"></div></div>
    <div class="text-muted small mb-1">Pergunta ${qi + 1} de ${QUIZ.length}</div>
    <div class="quiz-q">${q.q}</div>
    ${q.o.map((o, i) => `<button class="quiz-opt" data-i="${i}" type="button">${o[0]}</button>`).join("")}`;
  $$(".quiz-opt", box).forEach(b => b.addEventListener("click", () => {
    const pts = q.o[+b.dataset.i][1];
    Object.entries(pts).forEach(([k, v]) => scores[k] = (scores[k] || 0) + v);
    qi++; renderQuiz();
  }));
}
function renderResult(box) {
  const ranked = TRACKS.map(t => ({ t, s: scores[t.id] || 0 })).sort((a, b) => b.s - a.s);
  const max = Math.max(...ranked.map(r => r.s)) || 1;
  const top = ranked[0].t, second = ranked[1].t;
  box.innerHTML = `
    <div class="quiz-result">
      <div class="big">${top.emoji}</div>
      <h3 class="fw-bold">Sua trilha mais forte: ${top.name}</h3>
      <p class="text-muted">Segunda opção: ${second.emoji} ${second.name}. Lembre-se: a haste do T pode mudar de lugar ao longo da carreira.</p>
      <div class="mb-4">${ranked.map(r => `
        <div class="bar-row"><span class="lbl">${r.t.emoji} ${r.t.name.split(" e ")[0]}</span>
        <span class="bar"><div style="width:0" data-w="${r.s / max * 100}%"></div></span><strong>${r.s}</strong></div>`).join("")}</div>
      <div class="d-flex flex-wrap gap-2 justify-content-center">
        <button class="btn btn-senac" id="goTrack" type="button">🗺️ Ver o roadmap</button>
        <button class="btn btn-outline-senac" id="redo" type="button">🔄 Refazer</button>
      </div>
    </div>`;
  requestAnimationFrame(() => $$(".bar>div", box).forEach(b => b.style.width = b.dataset.w));
  $("#goTrack").onclick = () => { selectTrack(top.id, false); $("#trilhas").scrollIntoView({ behavior: "smooth" }); };
  $("#redo").onclick = () => { qi = 0; scores = {}; renderQuiz(); };
  confetti();
}

/* ===== Prompts, Maker, Plano ===== */
function renderPrompts() {
  $("#promptAcc").innerHTML = PROMPTS.map((p, i) => `
    <div class="accordion-item">
      <h2 class="accordion-header"><button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#pr${i}">${p.t}</button></h2>
      <div id="pr${i}" class="accordion-collapse collapse ${i ? "" : "show"}" data-bs-parent="#promptAcc">
        <div class="accordion-body"><div class="prompt-box"><button class="copy-btn" data-i="${i}" type="button">Copiar</button>${p.p}</div></div>
      </div>
    </div>`).join("");
  $$(".copy-btn").forEach(b => b.addEventListener("click", async () => {
    const text = PROMPTS[+b.dataset.i].p;
    try { await navigator.clipboard.writeText(text); toast("📋 Prompt copiado!"); }
    catch { toast("Selecione o texto e copie com Ctrl+C"); }
  }));
}

function renderMaker() {
  $("#makerGrid").innerHTML = MAKER.map(m => `
    <div class="col-sm-6 col-lg-4 reveal">
      <div class="flip" tabindex="0" role="button" aria-label="${m.t}">
        <div class="flip-in">
          <div class="flip-face flip-front"><div class="e">${m.e}</div><h3 class="h5 mt-2 mb-1">${m.t}</h3><small class="text-muted">Toque para virar</small></div>
          <div class="flip-face flip-back"><div>${m.e} ${m.d}</div></div>
        </div>
      </div>
    </div>`).join("");
  $$(".flip").forEach(f => {
    f.addEventListener("click", () => f.classList.toggle("on"));
    f.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); f.classList.toggle("on"); } });
  });
}

const planChecks = store.get("mkt_plan", {});
function renderPlan() {
  $("#planAcc").innerHTML = PLAN.map((b, i) => `
    <div class="accordion-item">
      <h2 class="accordion-header"><button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#pl${i}">${b.t}</button></h2>
      <div id="pl${i}" class="accordion-collapse collapse ${i ? "" : "show"}">
        <div class="accordion-body">${b.items.map((it, j) => `
          <label class="todo"><input type="checkbox" data-k="${i}-${j}" ${planChecks[`${i}-${j}`] ? "checked" : ""}><span>${it}</span></label>`).join("")}</div>
      </div>
    </div>`).join("");
  $$("#planAcc input").forEach(inp => inp.addEventListener("change", () => {
    planChecks[inp.dataset.k] = inp.checked; store.set("mkt_plan", planChecks); updatePlan(true);
  }));
  updatePlan(false);
}
function updatePlan(celebrate) {
  const inputs = $$("#planAcc input");
  const done = inputs.filter(i => i.checked).length;
  const pct = Math.round(done / inputs.length * 100);
  $("#planRing").style.setProperty("--p", pct);
  $("#planPct").textContent = pct + "%";
  $("#planMsg").textContent = pct === 100 ? "Plano completo! Hora de planejar os próximos 90 dias 🚀"
    : pct >= 50 ? "Mais da metade! Siga firme 💪" : pct > 0 ? "Bom começo, continue 👏" : "Comece pelo primeiro passo 👇";
  if (celebrate && pct === 100) { toast("🎉 Plano de 90 dias concluído!"); confetti(); }
}

/* ===== T interativo ===== */
const T_INFO = {
  bar: `<h3>➖ Barra horizontal</h3>
    <p>É o que você construiu no curso: entender como <strong>processos, funil e jornadas</strong> se conectam. Sem ela, você executa tarefas sem saber por quê.</p>
    <ul class="list-unstyled mb-0"><li>✅ Fala a língua de todas as áreas</li><li>✅ Enxerga o impacto das decisões no funil</li><li>✅ Colabora sem virar gargalo</li></ul>`,
  stem: `<h3>⬇️ Haste vertical</h3>
    <p>É a <strong>profundidade</strong>: o tema em que você é referência. É nela que mora a vaga melhor, o salário melhor e a voz dentro da equipe.</p>
    <ul class="list-unstyled mb-0"><li>🔬 Domínio real de uma área (uma das 5 trilhas)</li><li>🧱 Prova prática: projetos e certificações</li><li>🔄 Pode mudar de lugar ao longo da carreira</li></ul>`
};
function initT() {
  $$(".t-part").forEach(b => {
    const show = () => {
      $("#tInfo").innerHTML = T_INFO[b.dataset.info];
      $$(".t-part").forEach(x => x.classList.toggle("active", x === b));
    };
    b.addEventListener("mouseenter", show); b.addEventListener("click", show); b.addEventListener("focus", show);
  });
  $(".t-top").classList.add("active");
}

/* ===== Animações gerais ===== */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
let io;
function initReveal() {
  io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); if (e.target.dataset.count !== undefined) countUp(e.target); }
  }), { threshold: .12 });
  $$(".reveal").forEach(el => io.observe(el));
  $$("[data-count]").forEach(el => io.observe(el));
}
function revealNow(scope) { $$(".reveal", scope).forEach(el => io && io.observe(el)); }

function countUp(el) {
  const target = +el.dataset.count; let n = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const id = setInterval(() => { n = Math.min(target, n + step); el.textContent = n; if (n >= target) clearInterval(id); }, 30);
}

function initTyped() {
  const words = ["continuidade de estudos 📚", "possibilidades de mercado 🌎", "IA e dados 🤖", "cultura maker 🛠️", "o seu próximo passo 🚀"];
  const el = $("#typed"); let w = 0, c = 0, del = false;
  if (reduce) { el.textContent = words[0]; return; }
  (function tick() {
    const word = words[w];
    el.textContent = word.slice(0, c);
    if (!del && c === word.length) { del = true; return setTimeout(tick, 1300); }
    if (del && c === 0) { del = false; w = (w + 1) % words.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 75);
  })();
}

function initFloaties() {
  if (reduce) return;
  const emojis = ["📈", "🎯", "💡", "🤖", "📊", "🛒", "✍️", "🧩", "🚀", "🏬"];
  const box = $(".floaties");
  for (let i = 0; i < 16; i++) {
    const s = document.createElement("span");
    s.textContent = emojis[i % emojis.length];
    s.style.left = Math.random() * 100 + "%";
    s.style.animationDuration = 12 + Math.random() * 14 + "s";
    s.style.animationDelay = -Math.random() * 20 + "s";
    s.style.fontSize = 1.2 + Math.random() * 1.6 + "rem";
    box.appendChild(s);
  }
}

function confetti() {
  if (reduce) return;
  const colors = ["#F7941D", "#004A8D", "#00A9E0", "#FFFFFF"];
  const c = document.createElement("canvas");
  Object.assign(c.style, { position: "fixed", inset: 0, pointerEvents: "none", zIndex: 3000 });
  c.width = innerWidth; c.height = innerHeight; document.body.appendChild(c);
  const ctx = c.getContext("2d");
  const ps = Array.from({ length: 140 }, () => ({ x: innerWidth / 2, y: innerHeight / 2, vx: (Math.random() - .5) * 16, vy: Math.random() * -14 - 3, s: 4 + Math.random() * 6, col: colors[Math.floor(Math.random() * colors.length)], r: Math.random() * 6 }));
  let f = 0;
  (function loop() {
    ctx.clearRect(0, 0, c.width, c.height);
    ps.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .35; p.r += .2; ctx.fillStyle = p.col; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); ctx.restore(); });
    if (++f < 110) requestAnimationFrame(loop); else c.remove();
  })();
}

function initScroll() {
  const nav = $("#topnav"), bar = $("#scrollbar"), top = $("#toTop");
  const links = $$("#menu .nav-link");
  const secs = links.map(l => $(l.getAttribute("href")));
  const onScroll = () => {
    const h = document.documentElement;
    const y = h.scrollTop;
    bar.style.width = (y / (h.scrollHeight - h.clientHeight) * 100) + "%";
    nav.classList.toggle("scrolled", y > 40);
    top.classList.toggle("show", y > 600);
    let idx = -1;
    secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 140) idx = i; });
    links.forEach((l, i) => l.classList.toggle("active", i === idx));
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  $$("#menu .nav-link").forEach(l => l.addEventListener("click", () => {
    const m = $("#menu"); if (m.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(m).hide();
  }));
}

/* ===== Boot ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderTabs(); renderTrack();
  renderQuiz(); renderPrompts(); renderMaker(); renderPlan();
  initT(); initTyped(); initFloaties(); initScroll();
  initReveal();
  $("#planReset").addEventListener("click", () => {
    Object.keys(planChecks).forEach(k => delete planChecks[k]); store.set("mkt_plan", planChecks);
    $$("#planAcc input").forEach(i => i.checked = false); updatePlan(false); toast("Plano reiniciado");
  });
});
