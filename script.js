// peguei as informações de hamburguer por meio do query selector e do class hamburguer
let hamburguer = document.querySelector(".hamburguer"); 
// aqui pegasse o hamburguer e adiciona um evento no qual se click(função JS) ele adicina uma function
hamburguer.addEventListener("click", function(){ 
    // nessa função ele pega o container que é a div que imgloba todo codigo. (.classlist acessa a lista de classes do elemento).
    //(.toggle adiciona se não tiver ou tira se tiver) o toggle adiciona ou tira a classe show-menu dependendo do click
    document.querySelector(".container").classList.toggle("show-menu");
   

});

