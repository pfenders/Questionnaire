const quizArea = document.getElementById('quiz');
const resultArea = document.getElementById('results');
const submitButton = document.getElementById('submit');

//Building Quiz
const quizQuestions = [
{
    question:"What percentage of school leavers and graduates believe that it is important to have fun at work?",
    answers:{
        a:"50%",
        b:"32%",
        c:"79%",
        d:"83%"
    },
    correctAns:"79%"
},
{
    question:"During thinking, how much percentage of our brains do we use?",
    answers:{
        a:"71%",
        b:"35%",
        c:"58%",
        d:"40%"
    },
    correctAns:"35%"
},
{
    question:"What country was paper invented in?",
    answers:{
        a:"China",
        b:"United States",
        c:"England",
        d:"Japan"
    },
    correctAns:"China"
},
{
    question:"According to Maslow’s hierarchy of needs what is the final employees need after completing all of the others?",
    answers:{
        a:"Love and Belonging",
        b:"Safety",
        c:"Self-Actualization",
        d:"Psychological Needs"
    },
    correctAns:"Self-Actualization"
},
{
    question:"What percentage of workers believe having access to social media platforms helps them to be more productive?",
    answers:{
        a:"20%",
        b:"53%",
        c:"65%",
        d:"39%"
    },
    correctAns:"39%"
},
{
    question: "Which company allows employees to bring their dogs to the work?",
    answers:{
        a:"Ikea",
        b:"Amazon",
        c:"Microsoft",
        d:"Samsung"
    },
    correctAns:"Amazon"
},
{
    question:"How many minutes a day does the average office worker spend looking for lost files and other items?",
    answers:{
        a:"50 Minutes",
        b:"20 Minutes",
        c:"15 Minutes",
        d:"35 Minutes"
    },
    correctAns:"50 Minutes"
},
{
    question:"During an average day, how many miles does a typist’s fingers travel?",
    answers:{
        a:"6 Miles",
        b:"3.5 Miles",
        c:"12.6 Miles",
        d:"9.7 Miles"
    },
    correctAns:"12.6 Miles"
},
{
    question:"When was Microsoft established?",
    answers:{
        a:"2005",
        b:"1998",
        c:"1965",
        d:"1975"
    },
    correctAns:"1975"
},
{
    question:"Who is the owner of Microsoft?",
    answers:{
        a:"Bill Clinton",
        b:"Robert Half",
        c:"Mr Clean",
        d:"Bill Gates"
    },
    correctAns:"Bill Gates"
},
];

function buildQuiz() {

}

//Showing the result
function showResults() {
    
}

//Displaying the quiz
buildQuiz();

//Show Results After it is submited
submitButton.addEventListener('click', showResults);