const HANGMAN_PICS = [
  "  +---+\n" +
    "  |   |\n" +
    "      |\n" +
    "      |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    "      |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    "  |   |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|   |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    " /    |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    " / \\  |\n" +
    "      |\n" +
    "=========",
];

// TODO: Fill this list with values about a certain topic
// you are passionate about: e.g. famous scientists, chess players, ...
// obj with array of words per level
//WORDS_TO_GUESS[Level][Words to guess]
const WORDS_TO_GUESS = [["Auto", "Turm", "See", "Meer", "Bremse"],
                        ["Professor", "Theologe", "Philosoph", "Dieselejektor", "Dynamo", "Wanderpokal", "Sonnenschein", "Quarzuhr", "brillant", 
                         "Terasse", "Jackette", "Zucchini"],
                        ["Quantenmechanik", "Sicherheitsbeauftragter", "Registerbank", "Verkehrsinfrastrukturfinanzierungsgesellschaft","Akquise", 	
                          "nichtsdestotrotz", "Burgverlies", "Chrysantheme", "Portemonnaie" , "Einfaltspinsel", "Bredouille", "Fronleichnam", 
                          "Schlafittchen", "Galionsfigur", "unentgeltlich", "Kernspintomografie", "Xanthippe", "Yuccapalme"]
                       ];

module.exports = {
  HANGMAN_PICS: HANGMAN_PICS,
  WORDS_TO_GUESS: WORDS_TO_GUESS,
};
