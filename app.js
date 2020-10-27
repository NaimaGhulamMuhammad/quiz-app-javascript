var inp = document.getElementById("inp")
var wbox = document.getElementById("welcome")
    var qbox = document.getElementById("questions")
function start(){
    if(inp.value === "")
    alert("First Enter Your Name")
    else{
    
    wbox.classList.add("hide")
    qbox.classList.remove("hide")
    quizQuestion();
    }
}
var quiz = [
    {
        q : "Full form Of HTML is :",
        options : [
            "Hyper Text Mail language",
            "High tool machine language",
            "Hyper Text Markup Language",
            "None Of These"
        ],
        ans : "Hyper Text Markup Language"
    },
    {
        q : "Full form Of CSS is :",
        options : [
            "Computer College System",
            "Cascading Style Sheet",
            "Computer Style Sheet",
            "None Of These"
        ],
        ans : "Cascading Style Sheet"
    },
    {
        q: ' What is the colour of apple ?',
        options: ['Red', 'Orange', 'yellow', 'blue'],
        ans: 'Red'
    }
]
var uname = document.getElementById("uname")
var quest = document.getElementById("quest")
var opt = document.getElementById("options")
var list  = document.createElement("ol")
var c = 0
var b
var terminate = quiz[c].options.length
var correct =0
var wrong=0

function quizQuestion(){
uname.innerHTML = `Student Name ==> ${inp.value}`
quest.innerHTML = `Question ${c+1}<br> ${quiz[c].q}`


for( b=0; b<terminate; b++){
var li = document.createElement("li")
li.setAttribute("onclick","check(this)")
list.appendChild(li)
opt.appendChild(list)
var random = Math.floor(Math.random()*quiz[c].options.length)
li.innerHTML = `${quiz[c].options[random]}`
quiz[c].options.splice(random,1)
}
}

function check(x){
    var ch = quiz[c].ans
    if( x.innerHTML === ch )
    {
        x.style.backgroundColor = "green"
        correct++
    }

    else

        {
            x.style.backgroundColor = "red"
        console.log()
        wrong++
        }
    
}

 function next(){
     if(c === quiz.length-1)
        finish()
     c++
    list.innerHTML = ""
     quizQuestion()
 }
function finish(){
if(correct == quiz.length){
    var result = document.getElementById("result")
    result.classList.remove("hide")
    qbox.classList.add("hide")
}
}