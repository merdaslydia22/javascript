function showadvice(subjects){
    let box= document.getElementById("advicebox");
    if(subjects=="algorithm"){
        box.innerHTML =`
        <h2>algorithm<h2>
        <p> practice problems and solve exercices </P>
          `;
    }
    if(subjects=="html"){
        box.innerHTML=  `
        <h2>html<h2>
        <p> build projects and learn semantic html </p>
        `;
    }
        if(subjects=="css"){
        box.innerHTML=  `
        <h2> css <h2>
            <p>practice flexbox, classes , layout</p> 
            `;
    
    }
    if(subjects=="physics"){
        box.innerHTML= `
         <h2>physics</h2>
         <p>solve exercices , understand concepts , not only formulas </p>
         `;

    }





}