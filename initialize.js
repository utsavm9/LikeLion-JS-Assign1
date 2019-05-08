const colorStore = document.getElementById("changeColorTo");
const changeColorOf = document.getElementById("changeColorOf");
const randomVal = Math.floor(Math.random() * 4)

let chosenColor;
switch (randomVal) {
    case 1:
        chosenColor = "red";
        break;
    case 2:
        chosenColor = "green";
        break;
    case 3:
        chosenColor = "yellow";
        break;
    default:
        chosenColor = "cyan";
        break;
}

colorStore.innerHTML = chosenColor;
colorStore.style.color = chosenColor;
answer();