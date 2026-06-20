function choice(food){
    let info= document.getElementById("info");
    if(food==="pizza"){
        info.innerHTML=`
        <h2>choices</h2>
        <p>pizza is 200da </P>
        `;
    }
    if(food==="panini"){
        info.innerHTML=`
        <h2>choices</h2>
        <p>panini is with 350da </p>
        `;
    }
    if(food==="sandwich"){
        info.innerHTML=`
        <h2>choices</h2>
        <p> sandwich is with 300da </p>
        `;
    }
        if(food==="tacos"){
        info.innerHTML=`
        <h2>choices </h2>
        <p>tacos is 750da</p>
        `;
    }
    if(food==="burger"){
        info.innerHTML=`
        <h2>choices</h2>
        <p>burger is 450da </p>
        `;
    }

}

function drink(soda){
    info=document.getElementById("info");
    if(soda==="coca cola"){
        info.innerHTML=`
        <h2> choices </h2>
        <p> coca is 40 da </p>
        `;
    }
    if(soda==="pepsi") {
        info.innerHTML=`
        <h2>choices </h2>
        <p>pepsi is 30da </p>
        `;
    }
}