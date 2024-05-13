export type MultipleChoiceQuestion = {
    question: string, 
    answer: string, 
    choices: string[], 
    correct: null | boolean
}

export let hiraganaQuestions = [
    {
      question: "a",
      answer: "あ",
      choices: ["あ", "い", "う", "え"],
      correct: null
    },
    {
      question: "i",
      answer: "い",
      choices: ["い", "あ", "う", "お"],
      correct: null
    },
    {
      question: "u",
      answer: "う",
      choices: ["う", "あ", "い", "え"],
      correct: null
    },
    {
      question: "e",
      answer: "え",
      choices: ["え", "あ", "い", "お"],
      correct: null
    },
    {
      question: "o",
      answer: "お",
      choices: ["お", "あ", "い", "う"],
      correct: null
    },
    {
      question: "k",
      answer: "か",
      choices: ["か", "き", "く", "け"],
      correct: null
    },
    {
      question: "ki",
      answer: "き",
      choices: ["き", "か", "く", "け"],
      correct: null
    },
    {
      question: "ku",
      answer: "く",
      choices: ["く", "か", "き", "け"],
      correct: null
    },
    {
      question: "ke",
      answer: "け",
      choices: ["け", "か", "き", "く"],
      correct: null
    },
    {
      question: "ko",
      answer: "こ",
      choices: ["こ", "か", "き", "く"],
      correct: null
    },
    {
      question: "sa",
      answer: "さ",
      choices: ["さ", "し", "す", "せ"],
      correct: null
    },
    {
      question: "shi",
      answer: "し",
      choices: ["し", "さ", "す", "せ"],
      correct: null
    },
    {
      question: "su",
      answer: "す",
      choices: ["す", "さ", "し", "せ"],
      correct: null
    },
    {
      question: "se",
      answer: "せ",
      choices: ["せ", "さ", "し", "す"],
      correct: null
    },
    {
      question: "so",
      answer: "そ",
      choices: ["そ", "さ", "し", "す"],
      correct: null
    },
    {
      question: "ta",
      answer: "た",
      choices: ["た", "ち", "つ", "て"],
      correct: null
    },
    {
      question: "chi",
      answer: "ち",
      choices: ["ち", "た", "つ", "て"],
      correct: null
    },
    {
      question: "tsu",
      answer: "つ",
      choices: ["つ", "た", "ち", "て"],
      correct: null
    },
    {
      question: "te",
      answer: "て",
      choices: ["て", "た", "ち", "つ"],
      correct: null
    },
    {
      question: "to",
      answer: "と",
      choices: ["と", "た", "ち", "つ"],
      correct: null
    },
    {
      question: "na",
      answer: "な",
      choices: ["な", "に", "ぬ", "ね"],
      correct: null
    },
    {
      question: "ni",
      answer: "に",
      choices: ["に", "な", "ぬ", "ね"],
      correct: null
    },
    {
      question: "nu",
      answer: "ぬ",
      choices: ["ぬ", "な", "に", "ね"],
      correct: null
    },
    {
      question: "ne",
      answer: "ね",
      choices: ["ね", "な", "に", "ぬ"],
      correct: null
    },
    {
      question: "no",
      answer: "の",
      choices: ["の", "な", "に", "ぬ"],
      correct: null
    },
    {
      question: "ha",
      answer: "は",
      choices: ["は", "ひ", "ふ", "へ"],
      correct: null
    },
    {
      question: "hi",
      answer: "ひ",
      choices: ["ひ", "は", "ふ", "へ"],
      correct: null
    },
    {
      question: "fu",
      answer: "ふ",
      choices: ["ふ", "は", "ひ", "へ"],
      correct: null
    },
    {
      question: "he",
      answer: "へ",
      choices: ["へ", "は", "ひ", "ふ"],
      correct: null
    },
    {
      question: "ho",
      answer: "ほ",
      choices: ["ほ", "は", "ひ", "ふ"],
      correct: null
    },
    {
      question: "ma",
      answer: "ま",
      choices: ["ま", "み", "む", "め"],
      correct: null
    },
    {
      question: "mi",
      answer: "み",
      choices: ["み", "ま", "む", "め"],
      correct: null
    },
    {
      question: "mu",
      answer: "む",
      choices: ["む", "ま", "み", "め"],
      correct: null
    },
    {
      question: "me",
      answer: "め",
      choices: ["め", "ま", "み", "む"],
      correct: null
    },
    {
      question: "mo",
      answer: "も",
      choices: ["も", "ま", "み", "む"],
      correct: null
    },
    {
      question: "ya",
      answer: "や",
      choices: ["や", "ゆ", "よ", "ゃ"],
      correct: null
    },
    {
      question: "yu",
      answer: "ゆ",
      choices: ["ゆ", "や", "よ", "ゅ"],
      correct: null
    },
    {
      question: "yo",
      answer: "よ",
      choices: ["よ", "や", "ゆ", "ょ"],
      correct: null
    },
    {
      question: "ra",
      answer: "ら",
      choices: ["ら", "り", "る", "れ"],
      correct: null
    },
    {
      question: "ri",
      answer: "り",
      choices: ["り", "ら", "る", "れ"],
      correct: null
    },
    {
      question: "ru",
      answer: "る",
      choices: ["る", "ら", "り", "れ"],
      correct: null
    },
    {
      question: "re",
      answer: "れ",
      choices: ["れ", "ら", "り", "る"],
      correct: null
    },
    {
      question: "ro",
      answer: "ろ",
      choices: ["ろ", "ら", "り", "る"],
      correct: null
    },
    {
      question: "wa",
      answer: "わ",
      choices: ["わ", "ゐ", "ゑ", "を"],
      correct: null
    },
    {
      question: "wo",
      answer: "を",
      choices: ["を", "わ", "ゐ", "ゑ"],
      correct: null
    },
    {
      question: "n",
      answer: "ん",
      choices: ["ん", "な", "に", "ぬ"],
      correct: null
    }
  ]
  