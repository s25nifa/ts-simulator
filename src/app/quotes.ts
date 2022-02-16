const quotes = [
  { frequency: 1, text: 'No no, non dirò più niente' },
  { frequency: 1, text: 'Ma baaasta !' },
  { frequency: 1, text: 'Che vuoi da me ?' },
  { frequency: 1, text: 'A chi sono i piatti oggi ?' },
  { frequency: 1, text: 'Non mi piace...' },
  { frequency: 1, text: 'Ma non mi piaaaace !' },
  { frequency: 1, text: 'Puzza di piede' },
  { frequency: 1, text: 'Voglio le scarpe' },
  { frequency: 1, text: 'Che mi compri ?' },
  { frequency: 1, text: 'Che mi hai comprato ?' },
  { frequency: 1, text: 'Voglio qualcosa che mi piace' },
  { frequency: 1, text: 'Fa freeeddo' },
  { frequency: 1, text: 'Fa freddissimo' },
  { frequency: 1, text: 'Oggi non faccio niente' },
  { frequency: 1, text: 'Oggi non faccio proprio niente' },
  { frequency: 1, text: 'La TV non funzioooona !' },
  { frequency: 1, text: 'Ma Internet non funziona ?' },
  { frequency: 1, text: 'Mi tagli due fette di pane ?' },
  { frequency: 1, text: 'Che mangiamo a pranzo ?' },
  { frequency: 1, text: 'Che mangiamo a cena ?' },
  { frequency: 1, text: 'Che posso mangiare ?' },
  { frequency: 1, text: 'Ecco la miseria' },
  { frequency: 1, text: 'È sempre miseria' },
  { frequency: 1, text: 'Pane e miseria' },
  { frequency: 1, text: "C'è il caffè ?" },
  { frequency: 1, text: 'Che posso mettermi oggi ?' },
  { frequency: 1, text: 'Che posso mettermi per domani ?' },
  { frequency: 1, text: 'Oggi mi farò i peli' },
  { frequency: 1, text: 'Oggi mi farò le unghie' },
  { frequency: 1, text: 'Oggi mi farò i capelli ' },
  { frequency: 1, text: 'Oggi non faro piu NIENTE !' },
  { frequency: 1, text: 'Non ho voglia di fare niente…' },
  { frequency: 2, text: 'Ahiii mi sono tagliata con il pane…' },
  { frequency: 3, text: 'Non sono una lavastoviglie !' },
];

export class QuoteGenerator {
  static index = QuoteGenerator.buildIndex();

  static nextQuotePos = -1;

  static buildIndex() {
    console.log('building quote index');
    let tmpIndex = [];
    let indexPos = 0;
    for (let i = 0; i < quotes.length; i++) {
      for (let j = 0; j < quotes[i].frequency; j++) {
        tmpIndex[indexPos++] = quotes[i].text;
      }
    }
    return tmpIndex;
  }

  nextQuote() {
    console.log('computing next quote');
    let result = '...';
    if (QuoteGenerator.nextQuotePos != -1) {
      result = QuoteGenerator.index[Math.floor(QuoteGenerator.nextQuotePos)];
    }
    QuoteGenerator.nextQuotePos = QuoteGenerator.index.length * Math.random();
    result = result.replace(' ?', '&nbsp;?');
    result = result.replace(' !', '&nbsp;?');
    return result;
  }
}
