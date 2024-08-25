document.addEventListener('DOMContentLoaded',function(){
    
    function calculate(g1,g2,g3){
        let total = parseFloat( g1+g2+g3);
        document.querySelector("#result").innerHTML = `The total amount is:$ ${total}`;
    }


    document.querySelector('input[type=submit]').onclick = function(){
        const g1 = parseFloat(document.querySelector("#g1").value);
    const g2 = parseFloat(document.querySelector("#g2").value);
    const g3 =parseFloat(document.querySelector("#g3").value);

        calculate(g1,g2,g3)
    }
})