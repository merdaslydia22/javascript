function fortune(){
    let name=document.getElementById("name").value;
    let persons=[
        "samia",
        "chiraz",
        "lydia",
        "abouda"
    ];
    let messages= [
        "t9oli ml balcon trma",
        "tdrbi papa",
        "tdrbi mama",
        "tboul",
        "t9ol tiz tiz tiz"
    ];
    let randomPerson= Math.floor(
        Math.random()*persons.length
    );
    let randomMessage = Math.floor(Math.random()*messages.length);
    document.getElementById("result").innerHTML=
    "<h2>welcome " + name + "</h2>" + "<p> the person is : <b>" + persons[randomPerson] +
    "</b></p>" + 
    "<p>" + messages[randomMessage] + "</p>"
}