
    const partsOfSpeech = {

      noun: ["apple", "car", "book", "teacher", "city", "music", "computer", "river", "cat", "phone", "school", "friend", "game", "planet", "house", "country", "movie", "robot", "garden", "language"],

      verb: ["run", "eat", "jump", "write", "read", "play", "sleep", "speak", "listen", "drive", "build", "draw", "learn", "code", "teach", "swim", "cook", "walk", "watch", "laugh"],

      adjective: ["happy", "fast", "blue", "loud", "bright", "soft", "strong", "cold", "hot", "funny", "tall", "short", "smart", "kind", "brave", "angry", "rich", "young", "new", "clean"],

      adverb: ["quickly", "slowly", "happily", "sadly", "loudly", "quietly", "easily", "badly", "softly", "bravely", "kindly", "neatly", "rarely", "always", "never", "sometimes", "soon", "now", "yesterday", "today"],

      pronoun: ["I", "you", "he", "she", "it", "we", "they", "me", "us", "them", "him", "her", "my", "your", "his", "its", "our", "their", "mine", "yours"],

      preposition: ["in", "on", "under", "over", "between", "behind", "beside", "near", "through", "across", "around", "inside", "outside", "to", "from", "with", "without", "about", "before", "after"],

      conjunction: ["and", "but", "or", "nor", "for", "yet", "so", "although", "because", "since", "unless", "while", "whereas", "if", "though", "when", "even", "as", "until", "once"],

      interjection: ["wow", "hey", "ouch", "oh", "oops", "ugh", "yay", "hmm", "aha", "eh", "phew", "yikes", "whoa", "alas", "bravo", "shh", "boo", "hooray", "gee", "oh no"]

    };

     const checkBtn = document.getElementById('checkBtn');

     const colors = {
        noun: "blue",
        verb: 'green',
        adverb: "peach",
        adjective: 'orange',
        pronoun: 'pink',
        preposition: 'brown',
        conjunction: 'steelblue',
        interjection: 'teal'
     }

    checkBtn.addEventListener('click', function(){
    const inputText = document.getElementById('inputText').value.trim().toLowerCase();

   

    const partOfSpeechResult = document.getElementById('partOfSpeechResult');

    let found = false;

        if(inputText === ''){
            partOfSpeechResult.textContent = 'You must enter a word'.toUpperCase()
            partOfSpeechResult.style.color = 'red'
            return;
        }

         for(const [part,words] of Object.entries(partsOfSpeech)){
        if(words.includes(inputText)){
           
            partOfSpeechResult.textContent = `${inputText} is a ${part}.`.toUpperCase()

            partOfSpeechResult.style.color = colors[part]
            
            break;
        }
        else if(!found){
            partOfSpeechResult.textContent = `Sorry ${inputText} is not found`.toUpperCase()
            partOfSpeechResult.style.color = 'red'
        }
   
    }
    })
   