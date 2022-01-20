var btn = document.getElementById('btnn'),

    spann = document.querySelector('main section span'),

    colors = ["green" , "blue" , "purple" , "violet" ,"#f15025"];

btn.addEventListener('click' , function(){

    var randomcolor = Math.floor( Math.random()*colors.length );

    document.getElementById('main').style.backgroundColor = colors[randomcolor];

    spann.innerHTML = colors[randomcolor];

});



