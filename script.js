const inp = document.querySelector('.inp');
const generate = document.querySelector('.generate');
const arr = [ ...'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*'];

generate.addEventListener('click',() =>{
    let password = '';
    for(let i =0;i<=12;i++)
    {
        password +=arr[Math.floor(Math.random() * arr.length)];
    }
    inp.value = password;
})