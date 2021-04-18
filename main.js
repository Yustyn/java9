// Task 1

let $btn1 = document.querySelector('.random'),
    $numberplace = document.querySelector('.numberplace')


Math.round(Math.random() * 100)

$btn1.addEventListener('click', ()=>{
    $numberplace.innerHTML = Math.round(Math.random() * 100)
})

// End of task 1

// Task 2

let $mousepos = document.querySelector('.mousepos'),
    $mouseclick = document.querySelector('.mouseclick'),
    $body = document.querySelector('.task2')

$body.addEventListener('mousemove', (event)=>{
    $mousepos.innerHTML = 'X = ' + event.clientX+', Y = '+event.clientY
})
$body.addEventListener('mousedown', (event)=>{
 
    if (event.which == 1){
        $mouseclick.innerHTML = 'Left mouse button'
    }
    if (event.which == 2){
        $mouseclick.innerHTML = 'Middle mouse button'
    }
    if (event.which == 3){
        $mouseclick.innerHTML = 'Right mouse button'
    }
})

// End of task 2

// Task 3

let $show = document.querySelector('.show'),
    $showp = document.querySelector('.showP')

$show.addEventListener('click', ()=>{
    $showp.classList.toggle('d-none')
})

// End of task 3

// Task 4

let $nav = document.querySelectorAll('.nav>li'),
    $article = document.querySelectorAll("article"),
    ind = 0

for(let i = 0; i < $nav.length; i++){
    $nav[i].addEventListener('click', ()=>{
        
        $article[i].classList.add('d-block')
        if(ind>=0 && ind != i){
            $article[ind].classList.remove('d-block')
        }
        ind = i
        console.log(ind)
    })
}

// End of task 4

// Task 5

let $closebutton = document.querySelectorAll('.task5 .closenews'),
    $news = document.querySelectorAll(".news")

for(let i = 0; i < $closebutton.length; i++){
    $closebutton[i].addEventListener('click', ()=>{
        $news[i].classList.add('d-none')
    })
}

// End of task 5

// Task 6

let progress = document.getElementById('zero').value,
    $addpercent = document.querySelector(".addpercent")

$addpercent.addEventListener('click', ()=>{
    if (document.getElementById('zero').value != 100){
        document.getElementById('zero').value += 5
    } else {
        document.getElementById('zero').value = 0
    } 
})


