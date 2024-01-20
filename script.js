 
 
 function clickAcordion(t) {
   // Selecionar o elemento e o elemento pai
   var pai = document.getElementsByClassName('txt')[t].parentElement;

   // Selecionar a imagem abrir
   var abrir = document.getElementsByClassName('max')[t];

   // Selecionar a imagem fechar
   var fechar = document.getElementsByClassName('min')[t];

   // Verificar se o conteúdo está oculto
   var conteudoOculto = pai.lastElementChild.classList.contains('hiden');

   // Se o conteúdo estiver oculto, mostrar e trocar ícones
   if (conteudoOculto) {
       pai.lastElementChild.classList.remove('hiden');
       pai.lastElementChild.classList.add('show');
   } else {
       // Se o conteúdo estiver visível, ocultar
       pai.lastElementChild.classList.remove('show');
       pai.lastElementChild.classList.add('hiden');
   }

   // Alternar a visibilidade dos ícones
   abrir.style.display = conteudoOculto ? 'none' : 'block';
   fechar.style.display = conteudoOculto ? 'block' : 'none';
}