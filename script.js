const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin",
      "Madrid",
      "Paris",
      "Rome",],
    correct: 2,
  },
  {
    question: "Which language is used for web development?",
    options: ["Python",
      "JavaScript",
      "C++",
      "Java",],
    correct: 1,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",],
    correct: 0,
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["Earth",
      "Mars",
      "Jupiter",
      "Saturn",],
    correct: 2,
  },
  {
    question: "What year did the first manned moon landing occur?",
    options: ["1965",
      "1969",
      "1972",
      "1975",],
    correct: 1,
  }
];

//javascript initializations

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4,] = document.querySelectorAll(
  "#question , .option_1 , .option_2 , .option_3 , .option_4"
);

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

//load quiz funtion

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  console.log(question);
  questionElm.innerHTML = question;
  //options.foreach((curOption, index)=>{
  //})
  options.forEach(
    (curOption, index) => (window[`option_${index+1}`].innerText = curOption)
  );
};


loadQuiz();

// Get selected answer function on button click 

const getSelectedOption = ()=>{
  let ans_index = 0;
  answerElm.forEach((curOption, index)=>{
    if(curOption.checked){
      ans_index = index;
    }
    
  })
  return ans_index;
}

//deselected function
const deselectedAnswers = ()=>{
  answerElm.forEach((curElem) => curElem.checked = false);
}

submitBtn.addEventListener('click' , ()=>{
  const selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);

  if(selectedOptionIndex === quizData[currentQuiz].correct){
    score+=1;
  }
  currentQuiz++;

  if(currentQuiz<quizData.length){
    deselectedAnswers();
    loadQuiz();
  }
  else{
    quiz.innerHTML = `
      <div class="result">
        <h2>You scored ${score} out of ${quizData.length} questions.</h2>
        <p>Congratulations on completing the quiz!</p>
        <button class="reload-button" onclick="location.reload()">Play again</button>
      </div>
    `;
  }
})

