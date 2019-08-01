const quizArea = document.getElementById('quiz');
const resultArea = document.getElementById('results');
const submitButton = document.getElementById('submit');

//Building Quiz
const questions = [
{
    prompt:"What percentage of school leavers and graduates believe that it is important to have fun at work?",
    answer:{
        a:"50%",
        b:"32%",
        c:"79%",
        d:"83%"
    },
    correctAns:"79%"
},
{
    prompt:"During thinking, how much percentage of our brains do we use?",
    answer:{
        a:"71%",
        b:"35%",
        c:"58%",
        d:"40%"
    },
    correctAns:"35%"
},
{
    prompt:"What country was paper invented in?",
    answer:{
        a:"China",
        b:"United States",
        c:"England",
        d:"Japan"
    },
    correctAns:"China"
},
{
    prompt:"According to Maslow’s hierarchy of needs what is the final employees need after completing all of the others?",
    answer:{
        a:"Love and Belonging",
        b:"Safety",
        c:"Self-Actualization",
        d:"Psychological Needs"
    },
    correctAns:"Self-Actualization"
},
{
    prompt:"What percentage of workers believe having access to social media platforms helps them to be more productive?",
    answer:{
        a:"20%",
        b:"53%",
        c:"65%",
        d:"39%"
    },
    correctAns:"39%"
},
{
    prompt: "Which company allows employees to bring their dogs to the work?",
    answer:{
        a:"Ikea",
        b:"Amazon",
        c:"Microsoft",
        d:"Samsung"
    },
    correctAns:"Amazon"
},
{
    prompt:"How many minutes a day does the average office worker spend looking for lost files and other items?",
    answer:{
        a:"50 Minutes",
        b:"20 Minutes",
        c:"15 Minutes",
        d:"35 Minutes"
    },
    correctAns:"50 Minutes"
},
{
    prompt:"During an average day, how many miles does a typist’s fingers travel?",
    answer:{
        a:"6 Miles",
        b:"3.5 Miles",
        c:"12.6 Miles",
        d:"9.7 Miles"
    },
    correctAns:"12.6 Miles"
},
{
    prompt:"When was Microsoft established?",
    answer:{
        a:"2005",
        b:"1998",
        c:"1965",
        d:"1975"
    },
    correctAns:"1975"
},
{
    prompt:"Who is the owner of Microsoft?",
    answer:{
        a:"Bill Clinton",
        b:"Robert Half",
        c:"Mr Clean",
        d:"Bill Gates"
    },
    correctAns:"Bill Gates"
},
];
