function talk(){
    var know = {
        "Hello" : "Hi there",
        "Who are you" : "Hi, Charlotte here",
        "How are you" : "Good :)",
        "Can you help me with something" : "Sure... Whatsup?",
        "What is programming" : "Programming is a set of insructions that tells a computer how to perform a certain task to solve problems",
        "What is a programming language" : "It is a program/ app development that allows you to build Apps or program. for example, Html",
        "What is Html" : "Html is an abrevation of Hyper Text Mark-up Language. It is a structure to present content on the web like a text or image.",
        "What are some of the most common Html tags" : "Common tags include <h1> to <h6>, <href>, <body> and <header>",
        "How does Html work with CSS and JavaScript" : "HTML provides the structure and content of a webpage. CSS (Cascading Style Sheets) is used to style the Html. JavaScript is a programming language that uses functions to validate, and content manipulation",
        "Thank you, bye" : "Okay! Will meet soon..."
    };
    var user = document.getElementById('userbox').value;
    document.getElementById('chatlog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatlog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatlog').innerHTML = "Sorry, I didn't understand that <br>";
    }
}