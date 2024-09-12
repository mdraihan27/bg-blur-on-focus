const content = document.getElementsByClassName('content')[0];
const email = document.getElementsByClassName('email')[0];
const pass = document.getElementsByClassName('pass')[0]
const btn = document.getElementsByClassName('btn')[0]

email.addEventListener('focus', function(){
    pass.style.filter = 'blur(5px)'
    btn.style.filter = 'blur(5px)'
    content.style.backdropFilter = 'blur(5px)'
})

email.addEventListener('blur', function(){
    pass.style.filter = ''
    btn.style.filter = ''
    content.style.backdropFilter = ''
})

pass.addEventListener('focus', function(){
    email.style.filter = 'blur(5px)'
    btn.style.filter = 'blur(5px)'
    content.style.backdropFilter = 'blur(5px)'
})

pass.addEventListener('blur', function(){
    email.style.filter = ''
    btn.style.filter = ''
    content.style.backdropFilter = ''
})