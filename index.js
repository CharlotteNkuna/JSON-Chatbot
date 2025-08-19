function talk(){
    var know = {
        "Hello" : "Hi there         ",
        "Who are you" : "Hello, Charlotte here",
        "How are you" : "Good :)",
        "What can I do for you" : "Please give us a Follow & Like.",
        "Your followers" : "I have my family of 5000 members, I don't have follower, have supportive Family    ",
        "Ok" : "Thank you so much",
        "Bye" : "Okay! Will meet soon..."
    };
    var user = document.getElementById('userbox').value;
    document.getElementById('chatlog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatlog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatlog').innerHTML = "Sorry, I didn't understand that <br>";
    }
}