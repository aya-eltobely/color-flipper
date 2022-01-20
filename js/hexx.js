var btn = document.getElementById('btnn'),

    spann = document.querySelector('main section span'),

    colors = [ 0 ,1,2,3,4,5,6,7,8,9,"A" , "B" , "C" , "D" ,"E" ,"F"];

btn.addEventListener('click' , function () {  //#ff5a64

    var hexa = "#";

    for( var i =0 ; i<6 ; i++ ) //loop for colors to collect 6 hexa color
    {
        var randomcolor = Math.floor( Math.random()*colors.length );
        hexa = hexa + colors[randomcolor]; //#ff5a64
    }

    document.getElementById('main').style.backgroundColor = hexa;

    spann.innerHTML = hexa;


});   