
var distancia = 350;


$('#botao-pular').click(function(){

    $('#sapo').css('margin-top', '350px');
    //
    $('#sapo').css('margin-left', distancia);
    //
    $('#sapo').css('border', '2px solid red');

    distancia = distancia + 150;

});