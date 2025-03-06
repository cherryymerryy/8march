let confetti = new Confetti("fireworkButton");

function removeButton(t) {
    t.target.style.opacity = 0;
    t.target.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
        t.target.style.visibility = "hidden";
    }, 0); 

    setTimeout(() => {
        t.target.style.visibility = "visible";
        t.target.style.opacity = 1;
        t.target.style.transition = "opacity 0.5s ease";
    }, 0); 
}