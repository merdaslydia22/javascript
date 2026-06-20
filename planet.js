function searchPlanet() {
    let userPlanet = document.getElementById("PlanetInput").Value;
    let planets=[
        {
            name:"earth",
            moon:1,
            color:"blue"
        },
        {
            name:"mercury",
            moon:0,
            color:"gray"
        },
        {
            name:"venus",
            moon:1,
            color:"yellow"
        },
        {   
        name:"mars",
        moon:2,
        color:"red"
        }
    ];
       let found= false;
       for(let i=0;i<planets.length;i++){
       if(userPlanet.toLowerCase()===planets[i].name.toLowerCase()){
        document.getElementById("result").innerHTML=
        "<h2>" + planets[i].name + "</h2>" + "<p>color :" + planets[i].color + "</p>"
        + "<p> number of moons is : " + planets[i].moon + "</p>";
        found=true;
    }
 }
 if(found===false){
    document.getElementById("result").innerHTML= 
    "<h2>planet not found</h2>";
 }
 
  }