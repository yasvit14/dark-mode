const body = document.body;
const toggleThemeButton = document.getElementById('toggle-theme');


//verificando o tema  salvo do localStorage
const savedTheme = localStorage.getItem('theme');

if(savedTheme){
    body.classList.add(savedTheme);
}else{
    body.classList.add('ligth');

}
if(toggleThemeButton){

    toggleThemeButton.addEventListener('click',()=>{
if(body.classList.contains('ligth')){
    body.classList.remove('ligth');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');

}else{
    body.classList.remove('dark');
    body.classList.add('ligth');
    localStorage.setItem('theme', 'ligth');
}


    })
}