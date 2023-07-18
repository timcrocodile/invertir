interface arrayType {
  id: number;
  subtitle: string | null;
  content: string | null;
}

export interface serviceType {
  id: number;
  linkWord: string;
  title: string;
  image: string;
  alt: string;
  text: arrayType[];
}

export const service: serviceType[] = [
  {
    id: 1,
    title: "Area analisi",
    linkWord: "analisi",
    image: "/images/analisi.jpg",
    alt: "Analisi finanziaria",
    text: [
      {
        id: 1,
        subtitle: "Analisi di portafoglio (o del pac):",
        content:
          "asset allocation, analisi del rischio calcolo dei costi complessivi e della redditività.",
      },
      {
        id: 2,
        subtitle:
          "Analisi indipendente sui singoli strumenti/prodotti presenti nel portafoglio:",
        content:
          "fondi comuni di investimenti e sicav, gestioni patrimoniali, obbligazioni strutturate e subordinate, polizze, certificati, ETF), rischi e costi.",
      },
      {
        id: 3,
        subtitle:
          "Analisi indipendente per la valutazione dei gestori cui si è affidato il patrimonio:",
        content: "analisi di gestori/case di gestione di prodotti/fondi.",
      },
      {
        id: 4,
        subtitle: "Analisi dei fondi pensione o PIP.",
        content: null,
      },
      {
        id: 5,
        subtitle:
          "Valutazione e analisi di situazioni debitorie, verifica del contratto di finanziamento:",
        content: "mutui, leasing,fideiussioni, garanzie, conti correnti.",
      },
    ],
  },
  {
    id: 2,
    title: "Area pianificazione",
    linkWord: "pianificazione",
    image: "/images/pianificazione.jpg",
    alt: "Pianificazione finanziaria",
    text: [
      {
        id: 1,
        subtitle:
          "Analisi dello stato patrimoniale, conto economico e cash-flow del nucleo familiare.",
        content: null,
      },
      {
        id: 2,
        subtitle: "Pianificazione previdenziale indipendente:",
        content: "previdenza pubblica, complementare, riscatto di laurea.",
      },
      {
        id: 3,
        subtitle: "Pianificazione assicurativa indipendente:",
        content:
          "valutazione dei rischi assicurativi (mappatura, quantificazione e gestione dei rischi).",
      },
      {
        id: 4,
        subtitle:
          "Pianificazione per la protezione del patrimonio complessivo da potenziali cause di aggressione:",
        content: "fideiussioni rilasciate da imprenditori, trust, ecc.",
      },
      {
        id: 5,
        subtitle: "Pianificazione fiscale, immobiliare, successoria.",
        content: null,
      },
    ],
  },
  {
    id: 3,
    title: "Area investimenti",
    linkWord: "investimenti",
    image: "/images/investimenti.jpg",
    alt: "investimenti finanziari",
    text: [
      {
        id: 1,
        subtitle: "Valutazione del portafoglio complessivo:",
        content: "(se rispondente ai veri obiettivi espressi).",
      },
      {
        id: 2,
        subtitle:
          "Asset allocation suddivise per rischio, patrimonio, strumenti utilizzati e temi di investimento:",
        content: "impostazione di un piano finanziario personalizzato.",
      },
      {
        id: 3,
        subtitle: "Invio di raccomandazioni personalizzate.",
        content: null,
      },
      {
        id: 4,
        subtitle:
          "Monitoraggio e reportistica periodica della situazione di portafoglio in essere.",
        content: null,
      },
    ],
  },
  {
    id: 4,
    title: "Altro",
    linkWord: "altro",
    image: "/images/altro.jpg",
    alt: "bitcoin, crypto",
    text: [
      {
        id: 1,
        subtitle: null,
        content:
          "Colloqui personalizzati a richiesta su singoli temi di attualità o per specifiche richieste.",
      },
    ],
  },
];
