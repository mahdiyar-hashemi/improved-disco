let contaa = 0;
// starte code teh project code
const count = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//function start
btns.forEach(function(btn) {
    btn.addEventListener("click" , function(e){
        //console.log(e.currentTarget.classList)
        const style = e.currentTarget.classList;
        if (style.contains('decrease')){
           contaa--;
        } else if(style.contains('increase')){

          contaa++;
        }else{
            contaa = 0;
        }
        if(contaa > 0){
            count.style.color = "green"
        }
        if(contaa < 0){
            count.style.color = "red"
        }
        if(contaa === 0){
            count.style.color = "blue"
        }
        count.textContent = contaa;

    })




})
