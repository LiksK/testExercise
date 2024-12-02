let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("menuNav")
let flag = 0;

console.log("1")
btnMenu.onclick = function(){
    if (flag) {
        menu.innerHTML = ``
        flag = 0
    }
    else{
        menu.innerHTML = `<ul class="nav-list">
                <li><a href="#">Главная</a></li>
                <li><a href="#">Профпробы</a></li>
                <li><a href="#">Партнеры.Экскурсии</a></li>
            </ul>`
        flag = 1
    }
    
}