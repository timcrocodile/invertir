interface subArrayType {
  id: number;
  text: string | null;
}

interface arrayType {
  id: number;
  title: string;
  text: subArrayType[] | any;
  subTitle: string | null;
}

export interface infoType {
  id: number;
  title: string;
  content: string;
  subContent: arrayType[] | null;
}

export const info: infoType[] = [
  {
    id: 1,
    title: "Informativa precontrattuale per i CFA",
    content:
      "Ai sensi dell’art. 165 del Regolamento adottato con Delibera Consob n. 20307/2018 (il “Regolamento Intermediari) si forniscono di seguito le informazioni sul signor Fabio Massi (d’ora innanzi il “CONSULENTE”) e sui servizi da esso svolti. Le informazioni contenute nel presente Documento devono essere fornite al cliente o potenziale cliente prima che questi sia vincolato da un accordo per la prestazione del servizio di consulenza in materia di investimenti o comunque prima della prestazione di tale servizio. Il destinatario del presente documento è invitato a leggere quanto segue prima di prendere qualsiasi decisione circa la stipulazione di un contratto di consulenza in materia di investimenti. Il CONSULENTE è a disposizione per fornire ulteriori informazioni circa la natura e le caratteristiche del servizio di consulenza in materia di investimenti.",
    subContent: [
      {
        id: 1,
        title: "Informazioni sul consulente",
        subTitle: null,
        text: [
          {
            id: 1,
            text: "Nome e Cognome: Fabio Massi ",
          },
          {
            id: 2,
            text: "Domicilio: via Oroboni 109 - Civitanova Marche (MC) ",
          },
          {
            id: 3,
            text: "Sito web: www.invertir.fm ",
          },
          {
            id: 4,
            text: "Email: cfautonomo@proton.me ",
          },
          {
            id: 5,
            text: "PEC: fabiomassi@peceasy.it ",
          },
          {
            id: 6,
            text: "Telefono e telefax: +39 3518424799 ",
          },
          {
            id: 7,
            text: "Iscritto con delibera n. 2336 del 8/11/2023 nella sezione CFA dell’Albo unico dei consulenti finanziari ",
          },
        ],
      },
      {
        id: 2,
        title: "Lingua utilizzata",
        subTitle:
          "Il Cliente potrà comunicare con il CONSULENTE e ricevere da esso documenti e informazioni in lingua italiana.",
        text: null,
      },
      {
        id: 3,
        title: "Metodi di comunicazione utilizzati",
        subTitle:
          "L'invio di lettere, note informative, rendiconti, le eventuali notifiche e qualunque altra dichiarazione o comunicazione scritta, comprese le modifiche della informazioni contenute nel presente Documento, ove non diversamente previsto dalla legge o dal contratto, saranno effettuate al Cliente con pieno effetto all'indirizzo indicato all'atto della sottoscrizione del contratto o comunicato successivamente per iscritto. Il Cliente può scegliere, al momento della sottoscrizione del contratto relativo al servizio di consulenza o con successiva comunicazione per iscritto, di ricevere le informazioni tramite supporto duraturo non cartaceo e, in particolare, tramite e-mail. A tal fine, il Cliente indicherà un indirizzo e-mail valido ed accessibile unicamente a lui e si impegna a mantenerlo attivo (o comunicare per iscritto un diverso indirizzo e-mail valido) sino a 14 mesi dopo lo scioglimento del contratto. Le comunicazioni e/o eventuali notifiche al CONSULENTE dovranno essere effettuate dal Cliente al domicilio del CONSULENTE ovvero a mezzo posta elettronica certificata agli indirizzi sopra indicati. L’invio delle raccomandazioni da parte del CONSULENTE e la conferma dell’esecuzione delle operazioni da parte del Cliente potranno essere effettuate mediante le seguenti modalità: posta (lettera raccomandata A/R), consegna a mano, piattaforme di comunicazione via internet con utenza appositamente indicata dal Consulente, posta elettronica ordinaria, all’indirizzo indicato nel contratto, posta elettronica certificate (PEC), all’indirizzo indicato nel contratto, fax.",
        text: null,
      },
      {
        id: 4,
        title:
          " Iscrizione nell'albo previsto dall' art. 18 bis del decreto legislativo 24.2.1998, n. 58",
        subTitle:
          "Si dichiara che il CONSULENTE è iscritto nella sezione dell’albo di cui all’art. 18 bis del Decreto Legislativo 24.2.1998 (TUF) tenuto dall’Organismo di Vigilanza previsto dall’art. 31, comma 4 del suddetto Decreto, con delibera del 8/11/2023 n.2336. Il nome e l’indirizzo di contatto dell’Organismo sono:……",
        text: null,
      },
      {
        id: 5,
        title: "Relazioni sull'esecuzione del servizio di consulenza",
        subTitle:
          "Il CONSULENTE invia al Cliente i seguenti rendiconti relativi alla prestazione del servizio di consulenza",
        text: [
          {
            id: 1,
            text: "entro 30 giorni dalla fine di ogni trimestre/semestre/anno solare un rendiconto contenente la composizione e l’andamento del Portafoglio;",
          },
          {
            id: 2,
            text: "entro 60 giorni dalla fine dell’anno solare, un rendiconto contenente a) una dichiarazione aggiornata che indichi i motivi secondo cui il Portafoglio corrisponde alle preferenze, agli obbiettivi e alle altre caratteristiche del Cliente, b) le raccomandazioni fornite nel periodo di riferimento c) in forma aggregata, i costi e gli oneri del Servizio prestato e dei Prodotti Finanziari e servizi oggetto di raccomandazione.",
          },
        ],
      },
      {
        id: 6,
        title: "Politica sui conflitti di interesse",
        subTitle:
          "Ai sensi dell’art. 177 del Regolamento Intermediari il CONSULENTE ha adottato una Politica sui conflitti di interesse finalizzata a: ",
        text: [
          {
            id: 1,
            text: "individuare, in riferimento al servizio di consulenza in materia di investimenti, le circostanze che generano o potrebbero generare un conflitto di interesse che possa ledere gli interessi di uno o più clienti, comprese le sue preferenze di sostenibilità;",
          },
          {
            id: 2,
            text: "definire le procedure da seguire e le misure da adottare per prevenire o gestire tali conflitti. Le procedure e le misure adottate sono volte a identificare e prevenire i conflitti di interesse che potrebbero insorgere tra il CONSULENTE il Cliente o tra il Cliente e altri clienti del CONSULENTE al momento della prestazione del Servizio oggetto del presente Contratto, al fine di evitare che tali conflitti di interesse incidano negativamente sul Cliente. Il CONSULENTE ove le misure adottate non siano sufficienti a evitare, con ragionevole certezza, il rischio di danneggiare gli interessi del Cliente, informerà chiaramente su supporto durevole il Cliente della natura generale e/o delle fonti dei potenziali conflitti di interesse derivanti dalle raccomandazioni fornite, nonché delle misure adottate per mitigare i rischi connessi, affinché il Cliente possa assumere una decisione di investimento informata. Il Cliente può richiedere aL CONSULENTE ulteriori dettagli analitici sulla politica di gestione dei conflitti di interessi ai recapiti precedentemente indicati.",
          },
        ],
      },
      {
        id: 7,
        title: "Attività prestata e modalità di svolgimento",
        subTitle:
          "Il CONSULENTE svolge il servizio di consulenza in materia di investimenti di cui all’art. 1, comma 5, lettera f) del TUF, consistente nella “prestazione di raccomandazioni personalizzate ad un cliente, dietro sua richiesta o per iniziativa del prestatore del servizio, riguardo a uno o più operazioni relative a strumenti finanziari In particolare, il servizio prestato dal CONSULENTE ha per oggetto: ",
        text: [
          {
            id: 1,
            text: "l’analisi dell’allocazione del Portafoglio complessivo del cliente e della valutazione dell’efficienza dei prodotti detenuti;",
          },
          {
            id: 2,
            text: "l’eventuale riformulazione dell’asset allocation del portafoglio e degli strumenti e dei prodotti finanziari detenuti sulla base delle informazioni fornite dal cliente;",
          },
          {
            id: 3,
            text: " la valutazione periodica, con frequenza annuale, dell’adeguatezza del Portafoglio. Le raccomandazioni personalizzate fornite al Cliente in esecuzione del servizio possono avere ad oggetto un’ampia gamma di strumenti finanziari riconducibili alle seguenti categorie riportate nell’allegato 1, sezione C, del TUF  a) Valori mobiliari, b) Quote e azioni di O.I.C.R. Le raccomandazioni personalizzate possono avere ad oggetto anche prodotti finanziari diversi dagli strumenti finanziari, quali i prodotti finanziari emessi da imprese di assicurazioni e i prodotti finanziari emessi da banche, nonché il servizio di gestione di portafogli e il servizio di ricezione e trasmissione ordini.",
          },
          {
            id: 4,
            text: "Il CONSULENTE si riserva la possibilità di svolgere i servizi accessori di cui al n. 3 e n. 5 dell’Allegato 1, sezione B, del TUF. Non è prevista la prestazione di raccomandazioni non personalizzate. In merito ad eventuali ulteriori attività professionali svolte dal CONSULENTE, si precisa che non sono oggetto della vigilanza della Consob nè dell’Organismo. La predetta attività di consulenza è rivolta sia ai clienti al dettaglio sia a clienti professionali Nello svolgimento dell’attività il CONSULENTE non ha l’obbligo di aggiornare le raccomandazioni prestate al Cliente e di comunicare al Cliente le perdite subite sugli strumenti oggetto di raccomandazione. Il Cliente è libero di non dar corso alle operazioni di investimento/disinvestimento consigliate in esecuzione del presente contratto. Il Servizio può essere erogato dal CONSULENTE anche in luogo diverso dal suo domicilio. Il CONSULENTE non è autorizzato ad eseguire le operazioni raccomandate al cliente il quale potrà effettuarle per il tramite degli intermediari abilitati (banche, SIM, SGR) nell’ambito dei servizi di investimento e delle attività da queste prestate. Quale remunerazione per lo svolgimento delservizio di consulenza il Cliente è tenuto a pagare al CONSULENTE e una parcella commisurata al contenuto ed al valore del servizio. In mancanza di una modalità univoca di quantificazione del compenso essa può variare in funzione dalla complessità e dalla dimensione del patrimonio sotto consulenza, degli obiettivi e dal profilo di rischio del cliente ed in linea generale dal tempo che il CONSULENTE dedicherà all’analisi e allo studio sulla fattispecie concreta. Pertanto il CONSULENTE si impegna a sottoporre al potenziale Cliente, dopo che questi gli abbia fornito le necessarie informazioni sopra sintetizzate, in tempo utile prima che questi sia vincolato da un accordo per la prestazione del servizio di consulenza, un preventivo di parcella personalizzato. Modalità e tempi di pagamento saranno indicati nel suddetto preventivo La parcella pagata dal Cliente costituisce, per previsione di legge e per vincolo contrattuale, l’unica forma di remunerazione del CONSULENTE per i servizi prestati al Cliente; al CONSULENTE è vietato percepire compensi (incentivi) da parte di soggetti terzi. Il CONSULENTE è tenuto, per deontologia professionale, ad essere indipendente rispetto agli emittenti dei prodotti finanziari raccomandati, nonché rispetto agli intermediari abilitati allo svolgimento dei servizi di investimento nell’ambito dei quali il Cliente esegue le raccomandazioni. Nella prestazione del servizio di consulenza il CONSULENTE non può detenere fondi o titoli appartenenti ai clienti. Il Cliente ed il CONSULENTE possono eventualmente concordare che il CONSULENTE abbia una delega a visionare gli investimenti del Cliente presso le banche o gli intermediari finanziari o le società di gestione del risparmio che il Cliente utilizza, senza alcuna autorizzazione ad operare. Possono eventualmente concordare altresì che le dette imprese di investimento inviino direttamente al CONSULENTE le informative sulle operazioni eseguite dal Cliente. Per maggiori informazioni sui contenuti del servizio di consulenza e sugli obblighi del CONSULENTE e del cliente si rinvia al contratto di consulenza in materia di investimenti che deve essere sottoscritto preventivamente allo svolgimento del servizio. ",
          },
        ],
      },
      {
        id: 8,
        title: "Valutazione periodica dell'adeguatezza",
        subTitle:
          "Nello svolgimento del servizio di consulenza in materia di investimenti il CONSULENTE fornisce al Cliente raccomandazioni in relazione ad operazioni di investimento o disinvestimento che, se eseguite, consentano l’adeguatezza del Portafoglio rispetto al profilo del Cliente ricostruito sulla base delle informazioni fornite mediante compilazione del Questionario sottopostogli prima della conclusione del presente contratto o in occasione di eventuali successivi aggiornamenti. In particolare, il CONSULENTE verifica che l’operazione raccomandata:",
        text: [
          {
            id: 1,
            text: "corrisponda agli obiettivi di investimento del Cliente, inclusa la sua tolleranza al rischio;",
          },
          {
            id: 2,
            text: "sia di natura tale che il Cliente sia finanziariamente in grado di sopportare i rischi connessi all’investimento compatibilmente con i suoi obiettivi di investimento;",
          },
          {
            id: 3,
            text: "sia di natura tale per cui il Cliente possieda le necessarie conoscenze per comprendere i rischi connessi alla gestione del suo portafoglio.",
          },
          {
            id: 4,
            text: "Il CONSULENTE effettua una valutazione periodica dell’adeguatezza del Portafoglio con frequenza ANNUALE. La valutazione di adeguatezza è svolta per consentire al consulente di agire secondo il migliore interesse del cliente. È pertanto indispensabile che il Cliente, mediante la compilazione del Questionario sottopostogli dal CONSULENTE, fornisca informazioni corrette e aggiornate concernenti: le sue conoscenze ed esperienze in materia di investimenti riguardo al tipo specifico di prodotto o servizio, la sua situazione finanziaria, compresa la sua capacità di sostenere le perdite, i suoi obbiettivi di investimento, compresa la sua tolleranza al rischio, le sue preferenze di sostenibilità. Il Cliente è tenuto a comunicare al CONSULENTE eventuali aggiornamenti delle informazioni. Le suddette informazioni consentono al CONSULENTE di comprendere le caratteristiche essenziali del Cliente e di raccomandargli prodotti finanziari e servizi di investimento che siano adeguati con particolare riferimento alla sua tolleranza al rischio, alla sua capacità di sostenere perdite e alle sue preferenze di sostenibilità; nel caso in cui il Cliente non fornisca le informazioni previste nel Questionario, il servizio di consulenza non potrà essere prestato. Il Cliente deve rendersi consapevole che risposte errate o non veritiere possono compromettere l’attendibilità della valutazione di adeguatezza e diminuire il suo livello di tutela. Il CONSULENTE è tenuto ad astenersi dal formulare raccomandazioni se nessuno dei prodotti finanziari e dei servizi di investimento è adeguato per il Cliente.",
          },
        ],
      },
      {
        id: 9,
        title: "Integrazione dei fattori di sostenibilità",
        subTitle:
          "Ai sensi dell’ Art. 165 comma 1 lett. h-bis del Regolamento Intermediari, nel processo di selezione degli strumenti finanziari oggetto del servizio di consulenza in materia di investimenti, il CONSULENTE integra una valutazione in merito ai fattori di sostenibilità ambientale, sociale e di governance, al fine di garantire che i vari prodotti e strumenti possano essere raccomandati solamente a clienti che esprimono preferenze in tema di sostenibilità compatibili con le caratteristiche degli stessi strumenti. Dato che la consulenza svolta dal CONSULENTE riguarda il portafoglio finanziario nel suo complesso, la valutazione dei fattori di sostenibilità viene svolta a livello di portafoglio. Ciò significa che, nel suo complesso, il portafoglio dovrà essere allineato alle preferenze di sostenibilità del cliente, anche se è possibile che, per ragioni di gestione del rischio o di raggiungimento degli obiettivi del cliente, alcuni singoli strumenti utilizzati non siano singolarmente allineati alle preferenze del cliente. La valutazione delle caratteristiche di sostenibilità ambientale, sociale e di governance viene svolta, a seconda della tipologia di strumento/prodotto secondo le informazioni dichiarate dall’emittente ai sensi delle regolamentazioni vigenti oppure utilizzando modelli di valutazione esterni (rating) e/o analisi svolte internamente. ",
        text: null,
      },
      {
        id: 10,
        title: "Altre attività professionali svolte da Fabio Massi",
        subTitle:
          "Fabio Massi presta le seguenti attività ulteriori rispetto al servizio di consulenza in materia di investimenti:",
        text: [
          {
            id: 1,
            text: "Consulenza per la valutazione e la copertura delle esigenze di integrazione pensionistica;",
          },
          {
            id: 2,
            text: "Consulenza per l’individuazione e quantificazione dei rischi del nucleo familiare;",
          },
          {
            id: 3,
            text: "Consulenza per la pianificazione finanziaria personale e familiare;",
          },
          {
            id: 4,
            text: "Consulenza per la pianificazione successoria familiare.",
          },
          {
            id: 5,
            text: "Le suddette attività pur essendo personalizzate non hanno per oggetto specifici strumenti finanziari o prodotti finanziari. Lo svolgimento delle attività summenzionate è regolato da uno specifico contratto, distinto da quello relativo al servizio di consulenza in materia di investimenti, che prevede il pagamento di un compenso fisso o variabile di volta in volta concordato con il cliente, commisurato al contenuto ed al valore dell’attività prestata. Le attività sopra indicate non sono soggette alla vigilanza della Consob e dell’Organismo, né alla vigilanza di altre Autorità.",
          },
        ],
      },
      {
        id: 11,
        title: "Strategie di investimento proposte",
        subTitle:
          "Nello svolgimento del servizio di consulenza il CONSULENTE non è orientato su determinate categorie o una gamma specifica di strumenti finanziari. Il CONSULENTE non propone strategie di investimento standardizzate ma valuta per ogni Cliente la strategia più adeguata, tenuto conto degli obbiettivi di investimento del Cliente, della sua tolleranza al rischio e della sua situazione finanziaria, compresa la sua capacità di sostenibilità delle perdite.",
        text: null,
      },
    ],
  },
  {
    id: 2,
    title: "Informativa sui rischi di sostenibilità per i CFA",
    content:
      "Ai sensi dell’ Art. 165 comma 1 lett. h-bis del Regolamento Intermediari, nel processo di selezione degli strumenti finanziari oggetto del servizio di consulenza in materia di investimenti, il (nome consulente) integra una valutazione in merito ai fattori di sostenibilità ambientale, sociale e di governance, al fine di garantire che i vari prodotti e strumenti possano essere raccomandati solamente a clienti che esprimono preferenze in tema di sostenibilità compatibili con le caratteristiche degli stessi strumenti. Dato che la consulenza svolta dal (Fabio Massi) riguarda il portafoglio finanziario nel suo complesso, la valutazione dei fattori di sostenibilità viene svolta a livello di portafoglio. Ciò significa che, nel suo complesso, il portafoglio dovrà essere allineato alle preferenze di sostenibilità del cliente, anche se è possibile che, per ragioni di gestione del rischio o di raggiungimento degli obiettivi del cliente, alcuni singoli strumenti utilizzati non siano singolarmente allineati alle preferenze del cliente. La valutazione delle caratteristiche di sostenibilità ambientale, sociale e di governance viene svolta, a seconda della tipologia di strumento/prodotto secondo le informazioni dichiarate dall’emittente ai sensi delle regolamentazioni vigenti oppure utilizzando modelli di valutazione esterni (rating) e/o analisi svolte internamente",
    subContent: null,
  },
  {
    id: 3,
    title: "Arbitro per le controversie finanziarie",
    content: `Il Cliente può presentare ricorso all’Arbitro per le Controversie Finanziarie (ACF), istituito presso la CONSOB, per la risoluzione extragiudiziale delle controversie tra investitori (diversi dai clienti professionali) e i consulenti finanziari autonomi e le società di consulenza finanziaria di cui, rispettivamente, agli articoli 18-bis e 18-ter del TUF, , relative alla violazione da parte di questi ultimi degli obblighi di diligenza, correttezza, informazione e trasparenza nell’esercizio dell’attività disciplinata dalla Parte II del TUF, incluse le controversie oggetto del Regolamento (UE) n. 524/2013. Non rientrano nell’ambito dell’operatività dell’Arbitro le controversie che implicano la richiesta di somme di denaro per un importo superiore a Euro cinquecentomila. Sono esclusi dalla cognizione dell’Arbitro i danni che non sono conseguenza immediata e diretta dell’inadempimento o della violazione da parte dell’intermediario degli obblighi sopra descritti e quelli che non hanno natura patrimoniale. Il diritto di ricorrere all’ACF è irrinunciabile e sempre esercitabile anche in presenza di clausole di devoluzione delle controversie ad altri organismi di risoluzione extragiudiziale contenute nel contratto. Per maggiori informazioni fare riferimento al sito internet <a className= " underline hover:text-gray " href='https://www.acf.consob.it/'>ACF</a>`,
    subContent: null,
  },
];
