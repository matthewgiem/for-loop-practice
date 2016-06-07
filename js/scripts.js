//  backend business logic

var countNum = function (count, num){
  if ($.isNumeric( count ) && $.isNumeric( num ) && count > num && num > 0){
    var result =[];
      for(var i=num; i<=count; i+=num){
        result.push(i);
      }
      return result;
  }
   else{
     return "invalid value";
   }
}

var Ilove = function (){
  var languages = ['HTML', 'CSS', 'JavaScript'];
  for(var i=0; i<languages.length; i++){
  alert(languages[i]);
  }
}

var vowel = function (words){
	var letters = words.split("");
  for(var i=0; i<letters.length;i++){
  	if(letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u"){
    letters[i] = "-";
    }
  };
  return letters.join("");
}

var factorial = function(num){
	var result = 1;
	for(var i= num; i>0; i--)	{
  result*=i;
  }
  return result;
}

function factorial2(num){
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (num * factorial(num - 1));
    }
}

var pallandrom = function(statement){
	var pallandromLetters
  pallandromLetters = statement.split("");
  var newArr=[];
  pallandromLetters.forEach(function(letter)	{
  	if(letter.match(/[a-z]/i))	{
    newArr.push(letter);
    }
  });
  var forwardsString = newArr.toString("").toUpperCase();
  var backwardsString = newArr.reverse().toString("").toUpperCase();
  alert(forwardsString === backwardsString);
}

var prime = function (highNum){
  var removNum=[];
  var nums = [];
    for(var k=2; k<=highNum; k++){
    	nums.push(k);
    }
    	for(var i=0; i<highNum; i++){
        for(var j=2; j*nums[i]<=highNum; j++ ){
        	removNum.push(j*nums[i])
        }
     }

     var prime=[];
  		for(var i=0; i<nums.length; i++){
  			for(var j=0; j<removNum.length; j++){
      		if(nums[i] === removNum[j]){
      			nums[i] = nums[i] * 0;
      		}
        }
  		}

      nums.forEach(function(value){
      	if(value !==0 ){
        	prime.push(value);
        }
      });
      return prime.join();
  }
//  front end user interface logic

$(document).ready(function() {
  $("#iLove").click(function(event) {
    Ilove();
  });
  $("#blank form").submit(function(event) {
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());

    var wordPuzzel= $("input#wordPuzzel").val();
    var Factorialinput = parseInt($("input#Factorial").val());
    var Palindromes = $("input#Palindromes").val();
    var PrimeInput = parseInt($("input#Prime").val());

    $(".countTo").text(countNum(countTo,countBy));
    $(".wordPuzzel").text(vowel(wordPuzzel));
    $(".Factorial").text(factorial(Factorialinput));
    $(".Palindromes").text(pallandrom(Palindromes));
     $(".Prime").text(prime(PrimeInput));

    event.preventDefault();
  });
});
