
const INITIAL_STATE = {
    data :[
 {
          question  : "What does HTML stand for?",
          option : ["Home Tool Markup Language", "Hyperlink Markup Language","HyperText Markup Language", "HyperStar Markup Language"],
          anwser : "HyperText Markup Language"
        },
        {
          question : "Who is making the Web standards?",
          option : ["Mozilla FireFox","The World  Wide Web Consortium","Google","MicroSoft"],
          anwser : "The World  Wide Web Consortium"
        },
        {
        question : "Choose the correct HTML element for the largest heading?",
        option : ["<h1>","<Head>","<Heading>","<H6>"],
        anwser : "<h1>"
        },
        {
          question : "What is the correct HTML element for inserting a line break?",
          option : ["<lb>","<br>","<lbr>","<break>"],
          awnser : "<br>"
        },
        {
          question :"What is the correct HTML for adding a background color?",
          option : ["<body bg='yellow'>","<body style='background-color:yellow;'>","<background>yellow</background>","<head>yellow</head>"],
          anwser : "<body style='background-color:yellow;'>"
        },
        { 
          question : "Choose the correct HTML element to define important text?",
          option : ["<important","<strong>","<br>","<i>"],
          answer : "<strong>"
    
        },
        {
          question : "Choose the correct HTML element to define emphasized text?",
          option : ["<em>","<i>","<italic>","<strong>"],
          anwser : "<em>"
        },
        {
          question : "Which character is used to indicate an end tag?",
          option : ["*","<","/",">"],
          anwser : "/"
    
        },
        {
          question : "Which of these elements are all <table> elements?",
          option : ["<table><head><tfoot>","<thead><body><tr>","<table><tr><td>","<table><tr><tt>"],
          anwser : "<table><tr><td>"
        },
        {
          question : "How can you make a numbered list?",
          option : ["<dl>","<ul>","<ol>","<list>"],
          anwser : "<ol>"
        }
        
    
    
    ]
} 

const reducer = (state = INITIAL_STATE) => state  


export default reducer