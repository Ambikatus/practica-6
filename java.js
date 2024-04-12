var btn = document.getElementById('btn1');
btn = addEventListener('click',function(){
    var num = this.document.getElementById('num').value;
    var par = 0;
    var impar = 0;
    var multiplo =0;
    for(var i=50;i<=num;i++){
        if(i % 2 == 0){
            par = par + i;
        }else {
            impar = impar + i;
        }
        if(i % 5 == 0){
            multiplo = multiplo + i;
        }
    }

    var div1 = this.document.getElementById('div1');
    var div2 = this.document.getElementById('div2');
    var div3 = this.document.getElementById('div3');
    div1.innerHTML = "pares: "+par;
    div2.innerHTML = "impares: "+impar;
    div3.innerHTML = "multiplos: "+multiplo;
    div1.style.color = 'black';
    div2.style.color = 'black';
    div3.style.color = 'black';

    var mayor = 0;
    var medio = 0;
    var menor = 0;

    if(par>impar){
        mayor = par;
        div1.style.color = "#00913f";
        if(mayor<multiplo){
            mayor = multiplo;
            div3.style.color = "#00913f";
            medio = par;
            menor = impar;
        }
    }else{
        mayor = impar;
        div2.style.color = "#00913f";
    }
});