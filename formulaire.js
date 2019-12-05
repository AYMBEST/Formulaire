$(function(){
    //Lorsque le bouton 1 est cliqué, un texte, une zone de texte et un bouton sont injectés dans le DOM, après la balise <hr>. Remarquez que ces éléments sont insérés dans une balise <div> parent did conteneur.Cela permettra par la suite de faciliter leur suppression du DOM
    $('#btn1').click(function(){
        $(this).prop('disabled', true);
        $('#btn2').prop('disabled', true);
        $('#btn3').prop('disabled', true);
      $('hr').after('<div id="conteneur">Texte du label <input type="text" id="tex"><button id="btnok">OK</button><br /><button id="annule">Annuler</button></div>');
      $('#conteneur').fadeOut(000).fadeIn(2000);
      $('#annule').after('<div id="aide"></div>');
      // Insertion du text d'aide par la methode load du système Ajax
      $('#aide').load('../html/ac.htm #para1').fadeOut(000).fadeIn(2000); 
      //Lorsque le bouton OK est pressé, un <span> est inséré dans la balise <div> d'id gauche
      $('#btnok').click(function(){
        $('#btn1').prop('disabled', false);
        $('#btn2').prop('disabled', false);
        $('#btn3').prop('disabled', false);
        let lid =  '<span>' + $('#tex').val() + '</span>';
        $('#gauche').append(lid);
        //Et le <div> d'id conteneur est supprimé du DOM
        // $('#conteneur').remove();
        $('#conteneur').fadeOut(2000);
        $('#aide').fadeOut(2000);
      });
      $('#annule').click(vider_formulaire); 
          function vider_formulaire() {
              // $(':input').val('').prop('#text', false).fadeOut(2000);
              $('#conteneur').fadeOut(2000);
              $('#aide').fadeOut(2000);
              $('#btn1').prop('disabled', false);
              $('#btn2').prop('disabled', false);
              $('#btn3').prop('disabled', false);
          }
    });
    
    //Le traitement des deux autres boutons est très proche. Dans le cas du deuxième bouton, un <input> de type text et dont l'id a été défini par l'utilisateur est injecté dans le <div> d'id gauche et les éléments affichés dans la partie droite de l'écran sont supprimés
    $('#btn2').click(function(){
        $(this).prop('disabled', true);
        $('#btn1').prop('disabled', true);
        $('#btn3').prop('disabled', true);
      $('hr').after('<div id="conteneur">id de la zone de texte <input type="text" id="tex"><button id="btnok">OK</button><br /><button id="annule">Annuler</button></div>');
      $('#conteneur').fadeOut(000).fadeIn(2000);
      $('#annule').after('<div id="aide"></div>');
      // Insertion du text d'aide par la methode load du système Ajax
      $('#aide').load('../html/ac.htm #para2').fadeOut(000).fadeIn(2000); 
      $('#btnok').click(function(){
        $('#btn1').prop('disabled',false);
        $('#btn2').prop('disabled',false);
        $('#btn3').prop('disabled',false);
        let lid =  '<input type="text" id="' + $('#tex').val() + '"><br>';
        $('#gauche').append(lid);
        $('#conteneur').fadeOut(2000);
        $('#aide').fadeOut(2000);
      });
      $('#annule').click(vider_formulaire); 
          function vider_formulaire() {
              // $(':input').val('').prop('#text', false);
              $('#conteneur').fadeOut(2000);
              $('#aide').fadeOut(2000);
              $('#btn1').prop('disabled', false);
              $('#btn2').prop('disabled', false);
              $('#btn3').prop('disabled', false);
          }
    });
    
    //Le troisième bouton fait à peu près la même chose si ce n'est qu'il injecte un <button> dans le DOM en lui donnant le libellé défini par l'utilisateur
    $('#btn3').click(function(){
        $(this).prop('disabled', true);
        $('#btn2').prop('disabled', true);
        $('#btn1').prop('disabled', true);
      $('hr').after('<div id="conteneur">Texte du bouton <input type="text" id="tex"><button id="btnok">OK</button><br /><button id="annule">Annuler</button></div>');
      $('#conteneur').fadeOut(000).fadeIn(2000);
      $('#annule').after('<div id="aide"></div>');
      // Insertion du text d'aide par la methode load du système Ajax
      $('#aide').load('../html/ac.htm #para3').fadeOut(000).fadeIn(2000); 
      $('#btnok').click(function(){
        $('#btn1').prop('disabled', false);
        $('#btn2').prop('disabled', false);
        $('#btn3').prop('disabled', false);
        let lid =  '<button>' + $('#tex').val() + '</button>';
        $('#gauche').append(lid);
        $('#conteneur').fadeOut(2000);
        $('#aide').fadeOut(2000);
      });
      $('#annule').click(vider_formulaire); 
          function vider_formulaire() {
              // $(':input').val('').prop('#text', false);
              $('#conteneur').fadeOut(2000);
              $('#aide').fadeOut(2000);
              $('#btn1').prop('disabled', false);
              $('#btn2').prop('disabled', false);
              $('#btn3').prop('disabled', false);
          }
    });
  });