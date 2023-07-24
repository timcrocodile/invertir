export interface faqType {
  id: number;
  question: string;
  answer: string;
}

export const faq: faqType[] = [
  {
    id: 1,
    question: "Che cos'è Invertir ? ",
    answer:
      "Invertir è il servizio di consulenza finanziaria indipendente di Fabio Massi (il Consulente Finanziario Indipendente).",
  },
  {
    id: 2,
    question: "Devo inviarti i miei soldi per investire ? ",
    answer:
      "Assolutamente no, i soldi e titoli finanziari ( fondi, polizze assicurative, fondi pensione, obbligazioni, conti deposito, azioni.. ) rimarranno sempre nella tua banca o intermediario, non ci sarà e non potrà mai esserci nessun trasferimento di denaro al di fuori della parcella fra cliente e Consulente Finanziario Autonomo.",
  },
  {
    id: 3,
    question:
      "Come faccio a comprare gli strumenti finanziari che mi consigli ?",
    answer:
      "Partendo dal fatto che il Consulente Finanziario Autonomo non ha accesso ai soldi del cliente, praticamente ti accompagnerò nel processo di formulazione e conferma dell'ordine tramite la tua Banca o Broker, ed addirittura potrà anche essere il tuo intermediario storico ad eseguire l'ordine in base alle istruzioni fornite.",
  },
  {
    id: 4,
    question:
      "Quale differenza c'è dal punto di vista legale fra un consulente bancario ( assicurativo , SGR , SIM )  ed un consulente finanziario indipendente ?",
    answer:
      "La differenza principale è che un consulente classico ( bancario, assicurativo, SGR , SIM ) riceve la sua remunerazione sulla base dei prodotti finanziari che vende al cliente, ci saranno prodotti per cui verrà pagato di più altri per cui verrà pagato di meno, ma praticamente c'è sempre un ragionamento di Budget Aziendali di vendita da raggiungere e quindi sarà molto probabile che il prodotto finanziario che ti viene offerta sia aderente alle linee guida della Società di Intermediazione che propone la vendita dello strumento. Il consulente finanziario Indipendente invece proprio grazie al suo principio di indipendenza, che si traduce nel fatto che non prende commissioni direttamente o indirettamente dai creatori del prodotto finanziario per la sua distribuzione, ma viene pagato direttamente dal cliente, può dare consigli liberi che vanno a rispecchiare le reali esigenze del cliente, con uno sguardo oggettivo sul mercato, mettendo gli interessi del cliente al primo posto e non quelli della realtà aziendali per cui uno lavora.",
  },
  {
    id: 5,
    question:
      "Dal punto di vista legale invece c'è differenza fra il CFA e il consulente finanziario tradizionale ?",
    answer:
      "No, sono entrambi soggetti alla stessa regolamentazione per l'iscrizione all'albo, l'aggiornamento professionale periodico, hanno gli stessi requisiti di professionalità ed onorabilità insomma, in più il Consulente Finanziario Autonomo ha l'obbligo di stipulare una Polizza di Responsabilità Civile ( pena cancellazione dall'albo ) a tutela della sua attività e dei suoi clienti.",
  },
  {
    id: 6,
    question: "Devo pagare una parcella al primo appuntamento ?",
    answer:
      "Ovviamente questo è un lavoro di consulenza basato sulla fiducia dove i risultati si vedranno solo nel tempo, ed è per questo che il primo appunto sarà gratuito e servirà per far capire sia al cliente che al consulente quale siano le necessità e come arrivarci, dopo il primo appuntamento verrà poi formulata una proposta contrattuale al cliente che deciderà o meno se aderire al servizio, nel primo incontro conoscitivo è molto importante arrivare senza troppi preconcetti ed è importante che il primo contatto via telefono o mail o chat sia già esso esplicativo del motivo principale per cui si pensa che una Consulenza Autonoma possa essere di aiuto.",
  },
  {
    id: 7,
    question: "Come viene calcolato il costo del servizio ?  ",
    answer:
      "La parcella può essere una-tantum nel caso che il cliente necessiti di consulenza specifica, o in percentuale sul totale del patrimonio che sarà oggetto della consulenza ( in media dallo 0,5% all '1% ) oppure potrebbe anche essere una parcella a performance, cioè in % sul guadagno ( in termine di risparmio dei costi o di differenza di prezzo )  ottenuto. bisogna specificare che poi ogni cliente avrà un piano personalizzato che risponderà alle sue esigenze, e così anche la parcella lo sarà.",
  },
  {
    id: 8,
    question:
      "Quali standard di sicurezza sono adottati per la protezione dei miei dati ?",
    answer:
      "Per quanto riguarda la sicurezza dello storage dei dati sensibili ( privacy, dati anagrafici, dati sugli investimenti ) che vengono comunicati al consulente finanziario autonomo, le procedure sono le medesime che vengono utilizzate dai grandi intermediari finanziari ( pena cancellazione dall'albo )  e così anche il software per lo storage dei dati sarà identico. ad esempio io utilizzo il software di Analysis, azienda leader del settore in Italia con 30 anni di esperienza e più di 250 compagnie come clienti.",
  },
  {
    id: 9,
    question: "Perchè Libera?",
    answer:
      " Perchè possiamo scegliere fra tutte le asset class disponibili sul mercato",
  },
  {
    id: 10,
    question: "Perchè indipendente?",
    answer:
      " Perchè essendo Consulente Finanziario Autonomo non c'è nessuna Banca , Compagnia di Assicurazione, o Società di Intermediazione che mi paga ( incentivi, provvigioni, bonus .. ecc.. ) per consigliare o vendere determinati strumenti finanziari",
  },
];
