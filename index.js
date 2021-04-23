document.addEventListener('click', function() {

    var randomP = Math.floor(Math.random() * 9 + 1);
    var randomPimage = "p-" + randomP + ".png";
    var randomImageSource = "images/" + randomPimage;
    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);
    var randomO = Math.floor(Math.random() * 9 + 1);
    var randomOimage = "o-" + randomO + ".png";
    var randomImageSource2 = "images/" + randomOimage;
    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource2);

    var randomL = Math.floor(Math.random() * 9 + 1);
    var randomLimage = "l-" + randomL + ".png";
    var randomImageSource3 = "images/" + randomLimage;
    var image3 = document.querySelectorAll("img")[2];

    image3.setAttribute("src", randomImageSource3);

    var randomA = Math.floor(Math.random() * 9 + 1);
    var randomAimage = "a-" + randomA + ".png";
    var randomImageSource4 = "images/" + randomAimage;
    var image4 = document.querySelectorAll("img")[3];

    image4.setAttribute("src", randomImageSource4);
    $("#img").fadeToggle();

});
