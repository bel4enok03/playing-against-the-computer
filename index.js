const input = document.querySelector ("#quess");
const button = document.querySelector("#btn");
const answer = Math.floor (Math.random()*20)+1;

input.addEventListener("keypress", function(e){
    if (e.keyCode === 13) {
        play();
    }
})

button.addEventListener ("click", play);

//доступ к числу пользователя
//нет возможности ввести число 1< и >20
//не буквы
function play(){
    const userNumber = document.querySelector ("#quess").value;
    
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введи число от 01 до 20!',
        })
    } 
    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Нужно ввести число!',
        })
    }
    else {
        if (userNumber < answer){
            Swal.fire('Введи число ВЫШЕ!',
            'Компьютер пока побеждает!') 
        }
        else if (userNumber > answer) {
            Swal.fire('Введи число НИЖЕ!',
            'Компьютер пока побеждает!')
        }
        else {
            Swal.fire({
                title: 'ПОБЕДА!',
                imageUrl: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Custom image',
            })
        }
    }
}
