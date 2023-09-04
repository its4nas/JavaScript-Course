function game(sname)
{
    const audio = new Audio("C:/Users/96777/Desktop/stuff/JavaScript Course/lecture two/Piano/tunes/"+sname+".wav");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
    });
}