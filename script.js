function thirdLetter() {
  var input = document.getElementById("input").value;
  var third = input.charAt(2);
  document.getElementById("output").value = third;
  return third;
}

function random(){
  var letter = thirdLetter();
  function generate(){
    var alphabets = 'abcdefghijklmnopqrstuvwxyz';
    var alphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
    return random;
  }
  var gen = generate();

  if (letter == gen){
    document.getElementById("result").value = "Lucky number!";
  }else {
    document.getElementById("result").value = "Oops! Try again";
  }
}
