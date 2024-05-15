export type verb = {
  eVerb: string;
  jVerb: string;
  meaning: string;
  type: string;
  masuForm: string;
};

export type Grammar = {
  particle: string;
  useCase: string;
  jExample: string;
  eExample: string;
};

export const verbs = [
  {
    eVerb: "iku",
    jVerb: "いく",
    meaning: "to go",
    type: "U verb",
    masuForm: "いきます",
  },
  {
    eVerb: "kaeru",
    jVerb: "かえる",
    meaning: "to return",
    type: "U verb",
    masuForm: "かえります",
  },
  {
    eVerb: "kiku",
    jVerb: "きく",
    meaning: "to hear",
    type: "U verb",
    masuForm: "ききます",
  },
  {
    eVerb: "nomu",
    jVerb: "のむ",
    meaning: "to drink",
    type: "U verb",
    masuForm: "のみます",
  },
  {
    eVerb: "hanasu",
    jVerb: "はなす",
    meaning: "to speak",
    type: "U verb",
    masuForm: "はなします",
  },
  {
    eVerb: "yomu",
    jVerb: "よむ",
    meaning: "to read",
    type: "U verb",
    masuForm: "よみます",
  },
  {
    eVerb: "okiru",
    jVerb: "おきる",
    meaning: "to get up",
    type: "RU verb",
    masuForm: "おきます",
  },
  {
    eVerb: "taberu",
    jVerb: "たべる",
    meaning: "to eat",
    type: "RU verb",
    masuForm: "たべます",
  },
  {
    eVerb: "neru",
    jVerb: "ねる",
    meaning: "to sleep",
    type: "RU verb",
    masuForm: "ねます",
  },
  {
    eVerb: "miru",
    jVerb: "みる",
    meaning: "to watch",
    type: "RU verb",
    masuForm: "みます",
  },
  {
    eVerb: "kuru",
    jVerb: "くる",
    meaning: "to come (spatially or temporally) / to approach",
    type: "KURU verb / irregular",
    masuForm: "きます",
  },
  {
    eVerb: "suru",
    jVerb: "する",
    meaning: "to do",
    type: "SURU verb / irregular",
    masuForm: "します",
  },
];

export const grammarRules: Grammar[] = [
  {
    particle: "は",
    useCase: "Denotes the topic of the sentence",
    jExample: "これはすしです",
    eExample: "This is sushi"
  },
  {
    particle: "を",
    useCase: "Denotes the direct object of the sentence",
    jExample: "えいがをみます",
    eExample: "I (will) watch a movie"
  },
  {
    particle: "に",
    useCase: "Denotes the time at which something takes place",
    jExample: "はちじにおきます",
    eExample: "i wake up at 8 o'clock"
  },
  {
    particle: "で",
    useCase: "Denotes the place at which an action occurs",
    jExample: "うちでたべます",
    eExample: "I (will) eat at home"
  },
  {
    particle: "に・へ",
    useCase: "Denotes the goal of movement",
    jExample: "がっこうにいきます",
    eExample: "i (will) go to school"
  },
];
