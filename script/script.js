$( document ).ready(function() {
    $( '.twenties button' ).click( function() {
    	$('.twenties img' ).show();
        $('.thirties img').hide();
    });
    $('.thirties button').click(function() {
    	$('.thirties img').show();
    	$('.twenties img').hide();
    });
	$( '.forties button' ).click(function() {
    	$('.forties img').show();
        $('thirties img').hide();
    });
    $('.fifties button').click(function() {
    	$('.fifties img').show();
        $('.forties img').hide();

    });
    $( '.sixties button' ).click( function(){
    	$( '.sixties img' ).show();
        $('.fifties img').hide();

    });
    $('.seventies button').click(function(){
    	$('.seventies img').show();
        $('.sixties img').hide();

    });
    $( '.eighties button' ).click( function() {
    	$( '.eighties img' ).show();
        $('.seventies img').hide();

    });
    $('.ninties button').click(function() {
    	$('.ninties img').show();
        $('.eighties img').hide();

    });
    $( '.thousand button' ).click( function() {
    	$( '.thousand img' ).show();
        $('.ninties img').hide();
    });
});