const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyperlinking Text Management Language", correct: false }
        ]
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "JQuery", correct: false },
            { text: "CSS", correct: true },
            { text: "XML", correct: false }
        ]
    },
    {
        question: "Which is not a JavaScript Framework?",
        answers: [
            { text: "Python Script", correct: true },
            { text: "React", correct: false },
            { text: "Angular", correct: false },
            { text: "Vue", correct: false }
        ]
    },
    {
        question: "What does DOM stand for?",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Display Object Management", correct: false },
            { text: "Digital Ordinance Model", correct: false },
            { text: "Desktop Oriented Mode", correct: false }
        ]
    }
    
];

const qutaionElement=document.getElementById("qutaion");
const answerbtn=document.getElementById("answerbtn");
const nextbtn=document.getElementById("nextbtn");

let currentQindex=0;
let score=0;

function startQuiz()
{
    currentQindex=0;
    score=0;
    nextbtn.innerHTML="next";
    showQuiz();
}

function showQuiz(){

    resetstate();
    let currentQuestion=questions[currentQindex];
    let questionnNo=currentQindex+1;
    qutaionElement.innerHTML=questionnNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAns)


    });
}

function resetstate(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
function  selectAns(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct===true;
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect")
    }
    Array.from(answerbtn.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    });
    nextbtn.style.display="block"
}

nextbtn.addEventListener("click",()=>{
    if(currentQindex<questions.length)
    {
        handlenextbtn();
    }else{
        startQuiz();
    }
});

function showscore()
{
    resetstate();
    qutaionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML="play again";
    nextbtn.style.display="block"; 
}

function handlenextbtn(){
    currentQindex++;
    if(currentQindex<questions.length){
        showQuiz();
    }else{
        showscore();
    }
}
startQuiz();
