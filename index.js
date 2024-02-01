
document.querySelector("button").addEventListener("click", function() {
    // Code to execute when the button is clicked
    var player1 = Math.floor((Math.random() * 6)+1);
    var player2 = Math.floor((Math.random() * 6)+1);
    var randomImg1 = "./imgs/dice"+player1+".png";
    var randomImg2 = "./imgs/dice"+player2+".png";
    document.querySelector(".img1").setAttribute("src", randomImg1);
    document.querySelector(".img2").setAttribute("src",randomImg2);
    if(player1>player2){
        document.querySelector("h1").textContent = "🚩Player-1 wins!";
    }else if(player2>player1){
        document.querySelector("h1").textContent = "Player-2 wins!🚩";
    }else{
        document.querySelector("h1").textContent = "Draw!";
    }
});