$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();
    const question1Input = $("#question1").val();
    const question2Input = $("input:radio[name=question2]:checked").val();
    const question3Input = $("input:radio[name=question3]:checked").val();
    const question4Input = $("input:radio[name=question4]:checked").val();
    const question5Input = $("input:radio[name=question5]:checked").val(); 
  });
});