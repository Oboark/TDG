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


function word(wordlist)
{
    return wordlist[random(wordlist.length)];
}


function suffix(s)
{
    return s[s.length - 1] == "s" ? "es" : "s";   
}


//Procedure
function GenSen()
{
    var r;

    switch(random(4 + 1))
    {
        case 0:
            r = "Ang " + word(insultingAdjectives) + " naman.";
        break;
        case 1:
            r = "These " + s + suffix(word(insultingNouns)) + " yeah?";
        break;
        case 2:
            r = "I know " + random(100) + " forms of martial arts.";
        break;
        case 3:
            r = "Ang " + word(insultingAdjectives) + " naman si " + word(dogNames) + "!";
        break;
        case 3:
            r = "You all idiots"; //todo
        break;
    }

    return r;
}


function DrawSentence()
{   
    var sentenceHolder = document.getElementById("sentenceHolder").textContent = GenSen();
}


DrawSentence();
