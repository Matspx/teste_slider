var slider = document.getElementsByClassName('slider');
let cont = document.getElementsByClassName('conteudo');
var botao = document.getElementsByClassName('botao');
let menuSlider = document.getElementById("menuSlider");
var opcaoCont = document.getElementsByClassName("opcaoCont");


window.onload = function() {
    if(cont.length == 1){
        cont[0].classList.add('main');
        var menuSlider = document.getElementById("menuSlider");
        var criarOpcao = document.createElement("div");
        criarOpcao.className = "opcaoCont";
        menuSlider.appendChild(criarOpcao);
    }
    if(cont.length == 2){
        cont[0].classList.add('main');
        cont[1].classList.add('next');
        var menuSlider = document.getElementById("menuSlider");
        var criarOpcao = document.createElement("div");
        criarOpcao.className = "opcaoCont";
        for(i=0; i< cont.length; i++){
            var menuSlider = document.getElementById("menuSlider");
            var criarOpcao = document.createElement("div");
            criarOpcao.className = "opcaoCont";
            menuSlider.appendChild(criarOpcao);
        }
    }
    else {
        cont[0].classList.add('main');
        cont[1].classList.add('next');
        cont[cont.length - 1].classList.add('previous')
        for(i=0; i< cont.length; i++){
            var menuSlider = document.getElementById("menuSlider");
            var criarOpcao = document.createElement("div");
            criarOpcao.className = `opcaoCont ${i}`;
            criarOpcao.setAttribute('onclick', `escolheOpcao(${i})`);
            menuSlider.appendChild(criarOpcao);
        }
    }
   
  };

    function escolheOpcao(j) {

        if(cont[j].classList.contains("main")){

        }
        else{
            for(i=0; i<cont.length; i++){
                cont[i].classList.remove("main");
                cont[i].classList.remove("previous");
                cont[i].classList.remove("next");
            }
            if(j == 0){
                cont[cont.length - 1].classList.add("previous");
                cont[j].classList.add("main");
                cont[j+1].classList.add("next");

            }
            else if(j+1 >= cont.length){
                cont[j-1].classList.add("previous");
                cont[j].classList.add("main");
                cont[0].classList.add('next');
            }
            
            else{
                cont[j - 1].classList.add("previous");
                cont[j].classList.add("main");
                cont[j+1].classList.add("next");
            }
            
        }    

        
    };

  
    function passaSlider() {
        if(cont.length == 1){
        }
        else{
            for(i=0; i < cont.length; i++){
                cont[i].classList.remove('previous')
            }

            for(i=0; i < cont.length; i++){
                if (cont[i].classList.contains('main')) {
                    cont[i].classList.replace('main', 'previous');
                    if(i+1 >= cont.length){
                        cont[0].classList.replace('next', 'main');
                        cont[1].classList.add('next');
                    }
                    else if(i+2 >= cont.length){
                        cont[i+1].classList.replace('next', 'main');
                        cont[0].classList.add('next');
                    }
                    
                    else{
                        
                        cont[i+1].classList.replace('next', 'main');
                        cont[i+2].classList.add('next');

                        //cont[i-1].classList.add('previous');
            
            
                    }
                    break;
                }
                    
            
                
            }
        }
    };

    

    //se houver mais de 3 conteudos
    //
    
    
    /*if (cont[i].classList.contains('main')) {
        cont[i].classList.replace('main', 'previous');
        cont[i+1].classList.replace('next', 'main');
    

        if(cont[i+1] >= cont.length){
            cont[0].classList.remove('main');
            cont[0].classList.add('next');
            cont[cont.length - 1].classList.add('previous');
        }
        else{
            cont[i+1].classList.add('next');
            //cont[i-1].classList.add('previous');


        }



        }*/
    
