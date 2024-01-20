 // Criando logo rotativo

 // Pegar a referência HTML
 const image = document.getElementById('logo')
 // Adicionar um evento do curso do mouse assim que o cursor passar por cima da imagem adiciona a classe
 image.addEventListener('mouseover', () => {
 image.classList.add('rotated');
 });  
 // Assim que eu tirar o cursor do mouse por cima remove a claase
 image.addEventListener('mouseout', () => {
    image.classList.remove('rotated')
 })




/* // Criando um acorddion

 // Adicionar a function clickAcordion

 function clickAcordion(t){
    // seleionar o elemento e o elemento pai
    var pai = document.getElementsByClassName('txt')[t].parentElement;
    // selecionar a imagem abrir
    var abrir = document.getElementsByClassName('max')[t];
    // selecionar a imagem fechar
    var fechar = document.getElementsByClassName('min')[t];
    // se tiver uma condição com nome de hiden
    var conteudo = pai.lastElementChild.classList.contains('hiden');
    console.log(conteudo);

    // se o conteudo for "true" ele ira mudar 
    if(conteudo == true){
       pai.lastElementChild.className ='show'
       
       abrir.style.display = 'none'
       fechar.style.display = 'block';
    // Caso contrario o valor sera revertido   
    }else{
        pai.lastElementChild.className ='hiden'
        
        abrir.style.display = 'block';
        fechar.style.display = 'none';       
        
    }
 }

 */