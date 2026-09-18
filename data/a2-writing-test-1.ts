export type WritingTask = {
  id: number;
  title: string;
  maxScore: number;
  instructions: string;
  prompts?: string[];
  to?: string;
  subject?: string;
  sampleAnswer: string;
};

export const a2WritingTest1: WritingTask[] = [
  {
    id: 1,
    title: "Schrijf een e-mail",
    maxScore: 10,
    instructions: "U moet volgende week rijexamen doen, maar u hebt uw arm gebroken. Schrijf een e-mail aan het CBR. Leg uit waarom u niet kunt komen en vraag wat u nu moet doen.",
    to: "info@rijexamen.nl",
    subject: "mijn examen volgende week",
    sampleAnswer: "Geachte heer/mevrouw,\n\nIk kan volgende week niet naar mijn rijexamen komen, omdat ik mijn arm heb gebroken. Wat moet ik nu doen?\n\nMet vriendelijke groet,\nQi"
  },
  {
    id: 2,
    title: "Vul een formulier in",
    maxScore: 8,
    instructions: "U wilt een cursus Engels volgen. U spreekt al goed Engels, maar schrijven vindt u nog moeilijk. Vul het formulier in.",
    prompts: [
      "Kies drie dagdelen waarop u les kunt volgen.",
      "Geef uw vooropleiding aan.",
      "Kies de vaardigheid die u wilt verbeteren.",
      "Leg in één zin uit waarom u deze vaardigheid wilt verbeteren."
    ],
    sampleAnswer: "Maandagmiddag, dinsdagmiddag en woensdagmiddag.\nVooropleiding: middelbaar onderwijs.\nVaardigheid: schrijven.\nIk wil beter leren schrijven, omdat ik vaak e-mails in het Engels moet schrijven."
  },
  {
    id: 3,
    title: "Stel uzelf voor aan de buurt",
    maxScore: 10,
    instructions: "U bent pas verhuisd naar een nieuwe wijk. De wijkkrant vraagt nieuwe bewoners om zich kort voor te stellen. Schrijf minimaal drie hele zinnen.",
    prompts: [
      "Hoe heet u en waar komt u vandaan?",
      "Wat vindt u van uw nieuwe buurt?",
      "Met wie woont u?"
    ],
    sampleAnswer: "Mijn naam is Qi en ik kom uit China. Ik woon sinds kort in deze wijk en ik vind de buurt rustig en gezellig. Ik woon hier met mijn gezin."
  },
  {
    id: 4,
    title: "Schrijf een e-mail",
    maxScore: 10,
    instructions: "Volgende week begint uw computercursus. De eerste maandagavond kunt u niet komen. Schrijf een e-mail aan de docent. Leg uit waarom u niet kunt komen, vraag of u de les kunt inhalen en schrijf dat u de andere maandagen wel kunt komen.",
    to: "docent@compuschool.org",
    subject: "eerste les computercursus",
    sampleAnswer: "Beste docent,\n\nVolgende week maandag kan ik helaas niet naar de eerste les komen, omdat ik een belangrijke afspraak heb. Kan ik deze les op een ander moment inhalen? De andere maandagavonden kan ik wel komen.\n\nMet vriendelijke groet,\nQi"
  }
];
