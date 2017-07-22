//Wordlists
var insultingAdjectives = 
[
    "nuts",
    "stupid",
    "dumb"
];


var insultingNouns =
[
    "genius",
    "idiot",
    "moron"
];


var dogNames = 
[
    "Shobee",
    "Oliviot",
    "Nine",
    "Soupie"
];


//Basic functions
function random(limit)
{
    return Math.floor(Math.random() * limit);
}

//Returns a random word from the specified wordlist
function word(wordlist)
{
    return wordlist[random(wordlist.length)];
}

//Checks what suffix a word is using
function suffix(s)
{
    return s += (s[s.length - 1] == "s" ? "es" : "s");   
}


//Function that actually generates sentences
function GenSen()
{
    var r;
    
    //I'm adding the + 1 for readability.
    switch(random(4 + 1)) 
    {
        case 0:
            r = "Ang " + word(insultingAdjectives) + " naman.";
        break;
        case 1:
            r = "These " + suffix(word(insultingNouns)) + " yeah?";
        break;
        case 2:
            r = "I know " + random(100) + " forms of martial arts.";
        break;
        case 3:
            r = "Ang " + word(insultingAdjectives) + " naman si " + word(dogNames) + "!";
        break;
        case 4:
            r = "You all idiots"; //todo
        break;
    }

    return r;
}

//Edits HTML file with a random sentence.
function DrawSentence()
{   
    var sentenceHolder = document.getElementById("sentenceHolder").textContent = GenSen();
}

DrawSentence();
