var slider = document.getElementsByClassName('slider');
var cont = document.getElementsByClassName('conteudo');
var botao = document.getElementsByClassName('botao');

window.onload = function() {
    if(cont.length == 1){
        cont[0].classList.add('main');
    }
    if(cont.length == 2){
        cont[0].classList.add('main');
        cont[1].classList.add('next');

    }
    else {
        cont[0].classList.add('main');
        cont[1].classList.add('next');
        cont[cont.length - 1].classList.add('previous')
    }
   
  };

  
    function passaSlider() {
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
    