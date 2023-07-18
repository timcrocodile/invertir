export interface wordType {
  id: number;
  title: string;
  content: string;
}

export const words: wordType[] = [
  {
    id: 1,
    title: "Trasparente",
    content:
      " L'unica fonte di remunerazione è una parcella concordata con il cliente. Questo modello di compensazione assicura che il consulente sia imparziale nelle decisioni prese e che non vi siano conflitti di interesse nell'offerta di consulenza finanziaria autonoma",
  },
  {
    id: 2,
    title: "Personalizzata",
    content:
      "Viene invertito il concetto di prodotto finanziario standard dedicato alla clientela, con un approccio che parte dalla volontà del cliente, per andare a modellare un portafoglio di investimento che sia fedele alla strategia implementata e con la libertà di scegliere fra tutte le asset class presenti nel mercato",
  },
  {
    id: 3,
    title: "Innovativa",
    content:
      "Dal punto di vista normativo la consulenza finanziaria indipendente rappresenta una rottura con il passato ed è presente ufficialmente solo da pochi anni in Italia",
  },
];
