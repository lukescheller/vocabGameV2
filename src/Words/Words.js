let wordsV2 = [
  "servile",
  "distinguish",
  "capricious",
  "sway",
  "toady",
  "obsequious",
  "intercession",
  "obfuscation",
  "liaison",
  "inordinate",
  "foppish",
  "appoint",
  "lap",
  "redound",
  "confer",
  "fulsome",
  "menial",
];

let dictionaryV2 = [];

let fetchDictionary = (wordArray) => {
  let wordObj = {};
  for (let x = 0; x < wordArray.length; x++) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordArray[x]}`)
      .then((response) => response.json())
      .then((data) => {
        for (let x = 0; x < data.length; x++) {
          wordObj.word = data[x].word;
          dictionaryV2.push(wordObj);
          wordObj = {};
        }
        // data.forEach((w) => {
        //   wordObj.word = w.word;
        //   wordObj.definition = w.meanings;
        //   wordObj.scrambled = "";
        //   dictionaryV2.push(wordObj);
        //   wordObj = {};
        // });
      })
      .catch((error) => console.error(error));
  }
};

fetchDictionary(wordsV2);

console.log(dictionaryV2);

//////////////////////////////////////////////////////////////////////////////////////

let words = [
  {
    word: "servile",
    scrambled: "",
    definition:
      "having or showing an excessive willingness to serve or please others.",
    example: "he bowed his head in a servile manner",
    type: "adjective",
  },
  {
    word: "distinguish",
    scrambled: "",
    definition: "recognize or treat (someone or something) as different.",
    example:
      "the child is perfectly capable of distinguishing reality from fantasy",
    type: "verb",
  },
  {
    word: "capricious",
    scrambled: "",
    definition:
      "given to sudden and unaccountable changes of mood or behavior.",
    example: "it's terrible to feel our livelihood hinges on a capricious boss",
    type: "adjective",
  },
  {
    word: "sway",
    scrambled: "",
    definition: "rule; control.",
    example: "the part of the continent under Russia's sway",
    type: "noun",
  },
  {
    word: "toady",
    scrambled: "",
    definition: "a person who behaves obsequiously to someone important.",
    example: "she imagined him toadying to his rich clients",
    type: "noun",
  },
  {
    word: "obsequious",
    scrambled: "",
    definition: "obedient or attentive to an excessive or servile degree.",
    example: "they were served by obsequious waiters",
    type: "adjective",
  },
  {
    word: "intercession",
    scrambled: "",
    definition: "the action of intervening on behalf of another.",
    example:
      "through the intercession of friends, I was able to obtain her a sinecure",
    type: "noun",
  },
  {
    word: "obfuscation",
    scrambled: "",
    definition:
      "the action of making something obscure, unclear, or unintelligible.",
    example: "when confronted with sharp questions they resort to obfuscation",
    type: "noun",
  },
  {
    word: "liaison",
    scrambled: "",
    definition:
      "communication or cooperation which facilitates a close working relationship between people or organizations.",
    example: "the head porter works in close liaison with the reception office",
    type: "noun",
  },
  {
    word: "inordinate",
    scrambled: "",
    definition: "unusually or disproportionately large; excessive.",
    example: "a case that had taken up an inordinate amount of time",
    type: "adjective",
  },
  {
    word: "foppish",
    scrambled: "",
    definition:
      "concerned with one's clothes and appearance in an affected and excessive way (typically used of a man).",
    example: "he is foppish and vain",
    type: "adjective",
  },
  {
    word: "appoint",
    scrambled: "",
    definition: "assign a job or role to (someone).",
    example: "she has been appointed to the board",
    type: "verb",
  },
  {
    word: "lap",
    scrambled: "",
    definition:
      "enfold or swathe a person or thing, especially a part of the body, in (something soft).",
    example: "he was lapped in blankets",
    type: "verb",
  },
  {
    word: "redound",
    scrambled: "",
    definition: "contribute greatly to",
    example: "his latest diplomatic effort will redound to his credit",
    type: "verb",
  },
  {
    word: "confer",
    scrambled: "",
    definition: "grant or bestow (a title, degree, benefit, or right).",
    example: "moves were made to confer an honorary degree on her",
    type: "verb",
  },
  {
    word: "fulsome",
    scrambled: "",
    definition: "complimentary or flattering to an excessive degree.",
    example: "they are almost embarrassingly fulsome in their appreciation",
    type: "adjective",
  },
];

let wordsList = [];

for (let x = 0; x < words.length; x++) {
  wordsList.push(words[x].word);
}

// console.log(wordsList.sort());

function shuffle(str) {
  let strArray = Array.from(str);
  for (let i = 0; i < strArray.length - 1; ++i) {
    let j = Math.floor(Math.random() * strArray.length);
    // Swap letters
    let temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;
  }
  return strArray.join(" ");
}

for (let x = 0; x < words.length; x++) {
  words[x].scrambled = shuffle(words[x].word);
}

function shuffleARRAY(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

shuffleARRAY(words);

export default words;
