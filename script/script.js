$( document ).ready(function() {
    $( '.twenties button' ).click( function() {
    	$('.twenties img' ).show();
        $('.thirties img').hide();
        $('.forties img').hide();
        $('.fifties img').hide();
        $('.sixties img').hide();
        $('.seventies img').hide();
        $('.eighties img').hide();
        $('.ninties img').hide();
        $('.thousand img').hide();
    });

    $('.thirties button').click(function() {
    	$('.thirties img').show();
    	$('.twenties img').hide();
        $('.forties img').hide();
        $('.fifties img').hide();
        $('.sixties img').hide();
        $('.seventies img').hide();
        $('.eighties img').hide();
        $('.ninties img').hide();
        $('.thousand img').hide();

    });
	$( '.forties button' ).click(function() {
    	$('.forties img').show();
        $('.thirties img').hide();
        $('.forties img').hide();
        $('.twenties img').hide();
        $('.fifties img').hide();
        $('.sixties img').hide();
        $('.seventies img').hide();
        $('.eighties img').hide();
        $('.ninties img').hide();
        $('.thousand img').hide();
    });
    $('.fifties button').click(function() {
    	$('.fifties img').show();
        $('.forties img').hide();
        $('.sixties img').hide();
        $('.seventies img').hide();
        $('.eighties img').hide();
        $('.ninties img').hide();
        $('.thousand img').hide();
        $('.twenties img').hide();
        $('.thirties img').hide();
    });
    $( '.sixties button' ).click( function(){
    	$( '.sixties img' ).show();
        $('.fifties img').hide();
        $('.thirties img').hide();
        $('.forties img').hide();
        $('.twenties img').hide();
        $('.sixties img').hide();
        $('.seventies img').hide();
        $('.eighties img').hide();
        $('.ninties img').hide();
        $('.thousand img').hide();

    });
    $('.seventies button').click(function(){
    	$('.seventies img').show();
        $('.sixties img').hide();
        $('.thirties img').hide();
        $('.forties img').hide();
        $('.twenties img').hide();
        $('.fifties img').hide();
        $('.seventies img').hide();
        $('.eighties img').hide();
        $('.ninties img').hide();
        $('.thousand img').hide();

    });
    $( '.eighties button' ).click( function() {
    	$( '.eighties img' ).show();
        $('.seventies img').hide();
        $('.thirties img').hide();
        $('.forties img').hide();
        $('.twenties img').hide();
        $('.fifties img').hide();
        $('.sixties img').hide();
        $('.eighties img').hide();
        $('.ninties img').hide();
        $('.thousand img').hide();

    });
    $('.ninties button').click(function() {
    	$('.ninties img').show();
        $('.eighties img').hide();
        $('.thirties img').hide();
        $('.forties img').hide();
        $('.twenties img').hide();
        $('.fifties img').hide();
        $('.sixties img').hide();
        $('.seventies img').hide();
        $('.ninties img').hide();
        $('.thousand img').hide();

    });
    $( '.thousand button' ).click( function() {
    	$( '.thousand img' ).show();
        $('.ninties img').hide();
        $('.thirties img').hide();
        $('.forties img').hide();
        $('.twenties img').hide();
        $('.fifties img').hide();
        $('.sixties img').hide();
        $('.seventies img').hide();
        $('.eighties img').hide();
        $('.ninties img').hide();
        $('.thousand img').hide();
    });
});