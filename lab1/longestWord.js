function longestWord(sentence) {

    var words = sentence.split(" ");
    console.log("Words:", words);
    var longestWord = "";
    
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }

    return longestWord;
  }

  var sentence = "Web Development Tutorial";
  var result = longestWord(sentence);
  console.log("Longest word:", result);