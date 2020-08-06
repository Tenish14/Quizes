let start = document.querySelector('#pre-loader')
let clickFunction = document.querySelector('#pre-loader').addEventListener('click', abc) 
function abc(){
	start.style.display = 'none';
}

// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
      question: "What does HTML stand for?",
      a: "Hyperlinks and Text Markup Language",
      b: "Hyper Text Markup Language",
      c: "Home Tool Markup Langauge",
      answer: "B"
    },
  {
      question: "Who is making the Web standards?",
      a: `The World Wide Web Consortium` ,
      b: `Google`,
      c: `Microsoft`,
      answer: "A"
    },
  {
      question: "What is the font-size of the h1 heading tag?",
      a: "3.5 em",
      b: "2.17 em",
      c: "2 em",
      answer: "C"
    },
  {
      question: "How many heading tags are there in HTML5?",
      a: "2",
      b: "5",
      c: "6",
      answer: "C"
    },
   {
      question: "Which of the following attributes is used to add link to any element?",
      a: "href",
      b: "link",
      c: "ref",
      answer: "A"
    }, 
    {
      question: "Insside which HTML element do we put the Javascript?",
      a: "script",
      b: "js",
      c: "scripting",
      answer: "A"
    },
    {
      question: "How do you create a function in JavaScript?",
      a: "function = myFunction()",
      b: "function myFunction()",
      c: "function:myFunction()",
      answer: "B"
    },
    {
      question: "How to write an IF statement in JavaScript?",
      a: "if i = 5",
      b: "if i == 5 then",
      c: "if (i == 5)",
      answer: "C"
    },
    {
      question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      a: "if  i =! 5 then",
      b: "if (i != 5) ",
      c: "if (i =! 5)",
      answer: "B"
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      a: "onmouseover",
      b: "onmouseclick",
      c: "onclick",
      answer: "C"
    }


  ];
// this get function is short for the getElementById function  
	
// this function renders a question for display on the page
function renderQuestion(){
  test = document.getElementById("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2 class = 'text-center'	>You got "+correct+" of "+questions.length+" questions correct</h2>";
    document.getElementById("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  document.getElementById("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // display the question
  test.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'>"+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'>"+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'>"+chC+"</label><br><br>";
  test.innerHTML += "<button class = 'btn btn-success px-3 py-3' onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
      console.log(i)
    }
    
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);