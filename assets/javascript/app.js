const quizPanel = $("#quiz-area");

//Questions
const questions = [
    {
        question: "What percentage of school leavers and graduates believe that it is important to have fun at work?",
        answer: {
            a: "50%",
            b: "32%",
            c: "79%",
            d: "83%"
        },
        correctAns: "79%"
    },
    {
        question: "During thinking, how much percentage of our brains do we use?",
        answer: {
            a: "71%",
            b: "35%",
            c: "58%",
            d: "40%"
        },
        correctAns: "35%"
    },
    {
        question: "What country was paper invented in?",
        answer: {
            a: "China",
            b: "United States",
            c: "England",
            d: "Japan"
        },
        correctAns: "China"
    },
    {
        question: "According to Maslow’s hierarchy of needs what is the final employees need after completing all of the others?",
        answer: {
            a: "Love and Belonging",
            b: "Safety",
            c: "Self-Actualization",
            d: "Psychological Needs"
        },
        correctAns: "Self-Actualization"
    },
    {
        question: "What percentage of workers believe having access to social media platforms helps them to be more productive?",
        answer: {
            a: "20%",
            b: "53%",
            c: "65%",
            d: "39%"
        },
        correctAns: "39%"
    },
    {
        question: "Which company allows employees to bring their dogs to the work?",
        answer: {
            a: "Ikea",
            b: "Amazon",
            c: "Microsoft",
            d: "Samsung"
        },
        correctAns: "Amazon"
    },
    {
        question: "How many minutes a day does the average office worker spend looking for lost files and other items?",
        answer: {
            a: "50 Minutes",
            b: "20 Minutes",
            c: "15 Minutes",
            d: "35 Minutes"
        },
        correctAns: "50 Minutes"
    },
    {
        question: "During an average day, how many miles does a typist’s fingers travel?",
        answer: {
            a: "6 Miles",
            b: "3.5 Miles",
            c: "12.6 Miles",
            d: "9.7 Miles"
        },
        correctAns: "12.6 Miles"
    },
    {
        question: "When was Microsoft established?",
        answer: {
            a: "2005",
            b: "1998",
            c: "1965",
            d: "1975"
        },
        correctAns: "1975"
    },
    {
        question: "Who is the owner of Microsoft?",
        answer: {
            a: "Bill Clinton",
            b: "Robert Half",
            c: "Mr Clean",
            d: "Bill Gates"
        },
        correctAns: "Bill Gates"
    },
];

//Timer
var timer;

let quizQuestions = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        quizQuestions.counter--;
        $("counter-number").html(quizQuestions.counter);
        if (quizQuestions.counter === 0) {
            quizQuestions.done();
        }
    },

    //Start Function
    start: function () {
        timer = setInterval(quizQuestions.countdown, 1000);
        $("#sub-wrapper").prepend("<h2> Time Remaining: <span id='counter-number'>120</span></h2>");
        $("#start").remove();

        for (let i = 0; i < questions.length; i++) {
            quizPanel.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answer.length; j++) {
                quizPanel.append("<input type='radio' name='question'>" + i + " 'value'" + questions[i].answer[j] + "''>" + questions[i].answer[j]);
            }
        }
        quizPanel.append("<button id='done'>Done</button>");
    },

    //Done Function
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === questions[0].correctAns) {
                quizQuestions.correct++;
            } else {
                quizQuestions.incorrect++;
            }
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].correctAns) {
                quizQuestions.correct++;
            } else {
                quizQuestions.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].correctAns) {
                quizQuestions.correct++;
            } else {
                quizQuestions.incorrect++;
            }
        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === questions[3].correctAns) {
                quizQuestions.correct++;
            } else {
                quizQuestions.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === questions[4].correctAns) {
                quizQuestions.correct++;
            } else {
                quizQuestions.incorrect++;
            }
        });

        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === questions[5].correctAns) {
                quizQuestions.correct++;
            } else {
                quizQuestions.incorrect++;
            }
        });

        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() === questions[6].correctAns) {
                quizQuestions.correct++;
            } else {
                quizQuestions.incorrect++;
            }
        });

        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() === questions[7].correctAns) {
                quizQuestions.correct++;
            } else {
                quizQuestions.incorrect++;
            }
        });

        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() === questions[8].correctAns) {
                quizQuestions.correct++;
            } else {
                quizQuestions.incorrect++;
            }
        });

        $.each($("input[name='question-9']:checked"), function () {
            if ($(this).val() === questions[9].correctAns) {
                quizQuestions.correct++;
            } else {
                quizQuestions.incorrect++;
            }
        });

        this.result();
    },


result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    quizPanel.html("<h2>All Done!</h2>");
    quizPanel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    quizPanel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    quizPanel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
}
};


//Click Events
$(document).on("click", "#start", function () {
    quizQuestions.start();
});

$(document).on("click", "#done", function () {
    quizQuestions.done();
});

