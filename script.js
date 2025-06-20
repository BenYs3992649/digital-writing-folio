//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "Your device is not connected.",
  "Make sure '[—]' is turned on and in range.",
  "Now discoverable as '[—]'.",
  "Connection unsuccessful.",
  "Your connection is unstable.",
  "Out of range.",
  "Unexpected device.",
  "Bad connection.",
];

const buttonRetry = document.getElementById("button-network");

// Function to handle the button click and update the text
function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}

//end of network error function

//function dropdown menu (do not edit this first part)
function addText(content) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = content;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFun() {
  var x = document.getElementById("subject").value;
  if (x === "flighty") {
    addText("🛩️🐦🦅🦋🌪️💭");
  } else if (x === "vague") {
    addText("🥱👽🐙🪼🌘");
  } else if (x === "joyful") {
    addText("😀😍😸👾👻🕺");
  } else if (x === "cloudy") {
    addText("🌦️🌨️🫧🌫️☔⚡🥶");
  } else if (x === "hangry") {
    addText("🍟🥨🌮🥗🍱");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "shadows kiss the gate",
  "crows whisper your name",
  "graves sigh in moonlight",
  "lamplight flickers red",
  "dust drapes the mirror",
  "ink bleeds from my eyes",
  "clock hands scratch the dusk",
  "bone beneath the lace",
  "hunger haunts the halls",
];

const sevenSyllables = [
  "the wind cries through broken panes",
  "i dream in candlelit blood",
  "a hand knocks from underground",
  "the roses bloom black and wide",
  "my breath fogs the old glass door",
  "every mirror holds a face",
  "footsteps echo without end",
  "time decays behind closed eyes",
  "the bell tolls for none but me",
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
    "art of war free pdf download",
  "ask izzy homelessness services",
  "australian family law news updates",

  "barrister vs solicitor difference",
  "bulk billing psychologist near me",
  "buy fridge magnets online australia",

  "can i change my family court order",
  "ccs no cctv policy concerns",
  "cost of childcare in australia",

  "delete google search history",
  "domestic violence statistics australia",
  "delusional jealousy symptoms",

  "earliest childhood memory age",
  "emotional manipulation signs in relationships",
  "emdr therapy bulk billed",

  "family court order variations",
  "free legal advice australia",
  "foster care payments australia",

  "google timeline history delete",
  "gps tracking laws australia",
  "guardian ad litem family law",

  "how much is childcare per day",
  "how to apply for intervention order",
  "how to become a barrister in australia",

  "is my partner gaslighting me",
  "intervention order conditions victoria",
  "is bulk billing still available",

  "justice of the peace near me",
  "jealousy in relationships psychology",
  "jobseeker parenting payment eligibility",

  "kinship care allowance australia",
  "keep kids safe online resources",
  "kafkaesque legal process meaning",

  "legal aid family law help",
  "longest family court trial australia",
  "low cost therapy options near me",

  "mediation vs family court",
  "mental load in relationships",
  "mandatory reporting laws australia",

  "narcissist emotional abuse signs",
  "nsw parenting orders guide",
  "non-custodial parent rights australia",

  "online parenting course free",
  "occupational therapy for toddlers",
  "overcoming emotional trauma",

  "parenting plan vs consent order",
  "psychologist vs psychiatrist difference",
  "public housing wait times australia",

  "queensland domestic violence laws",
  "questions asked in family court",
  "quick divorce options australia",

  "restraining order process australia",
  "reporting child abuse anonymously",
  "recovery order family law australia",

  "signs of coercive control",
  "shared custody rights australia",
  "self-representing in family court",

  "therapy dog certification australia",
  "trauma bonding symptoms checklist",
  "top law firms family court australia",

  "unreasonable parenting demands examples",
  "urgent family court application australia",
  "understanding supervised visitation",

  "victim impact statement template",
  "vic legal aid contact number",
  "visitation schedule ideas australia",

  "what is a parenting plan",
  "what happens in family mediation",
  "why is childcare so expensive",

  "x-ray for child injury legal concerns",
  "xmas holiday parenting arrangements",
  "xenophobia family court implications",

  "yelling emotional abuse signs",
  "youth mental health support services",
  "your rights in family law australia",

  "zoloft side effects emotional numbness",
  "zero tolerance policy domestic violence",
  "zone of parental responsibility meaning"
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects = 
  "ghost children, apostate monks, irradiated settlers, biomech hunters, deserter saints, sentient spores, rogue AIs, hollow-eyed prophets".split(
    ","
  ),
  verbs = 
  "drift through, scavenge, trespass across, whisper prayers in, haunt, chart the edges of, vanish into, linger near".split(
    ","
  ),
  objects = 
  "the cracked cathedral ruins, haunted data fields, scorched migration corridors, forgotten outposts, plague-swept riverbeds, machine graveyards, fractured dome-cities, relic-choked ravines".split(
    ","
  );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
  setTimeout(processPoem, 1000);
}
// Start the process
processPoem();