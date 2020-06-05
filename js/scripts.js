$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();
    const question1Input = $("#question1").val();
    const question2Input = $("input:radio[name=question2]:checked").val();
    const question3Input = $("input:radio[name=question3]:checked").val();
    const question4Input = $("input:radio[name=question4]:checked").val();
    const question5Input = $("input:radio[name=question5]:checked").val();

    let languageResult;
    if (question1Input === "money") {
      if(question2Input === "yes" && question3Input === "yes" && question4Input === "yes" && question5Input === "someDifficultyIsFine") {
        languageResult = "C#";
      }
      else if ((question5Input === "veryEasy" || question5Input === "relativelyEasy") && question3Input === "no"){
        languageResult = "Python";
      }
      else {
        languageResult = "JavaScript";
      }
    } 
    else if (question1Input === "skill") {
      if ((question5Input === "relativelyEasy" || question5Input === "someDifficultyIsFine") && question3Input === "yes") {
        languageResult = "JavaScript";
      }
      else if (question5Input === "someDifficultyIsFine" && question4Input === "yes") {
        languageResult = "C#";
      }
      else {
        languageResult = "Python";
      }
      
    } 
    else if (question1Input === "idea") {
      if(question2Input === "yes" && question3Input === "yes" && question4Input === "yes" && question5Input === "someDifficultyIsFine"){
          languageResult = "C#";
        }
      else {
        languageResult = "JavaScript";
      }
    } 
    else {
      if(question3Input === "yes"){
        languageResult = "JavaScript";
      }
      else {
        languageResult = "Python";
      }
    }

    $("#result-python,#result-javascript,#result-csharp").hide();
    if (languageResult == "JavaScript"){
      $("#language-result").text("JavaScript");
      $("#result-javascript").show();
    }
    else if (languageResult == "Python") {
      $("#language-result").text("Python");
      $("#result-python").show();
    }
    else if (languageResult == "C#") {
      $("#language-result").text("C#");
      $("#result-csharp").show();
    }
    $("#results").show();
  });
});