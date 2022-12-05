let li1 = document.querySelector('.a')
let li2 = document.querySelector('.b')
let li3 = document.querySelector('.c')
let li4 = document.querySelector('.d')
let li5 = document.querySelector('.e')
let li6 = document.querySelector('.f')
let li7 = document.querySelector('.g')
let li8 = document.querySelector('.h')
let left = document.querySelector('.leftP')
let right = document.querySelector('.rightP')
let inpt1 = document.querySelector('.inpute')
let inpt2 = document.querySelector('.input2')




const btnLi1 = document.querySelectorAll('.liBottomLeft');
btnLi1.forEach(element => {
    element.addEventListener('click', () => {
        delete1()
        delete2()
        element.style.backgroundColor = '#833AE0'
        element.style.color = '#FFFFFF'
        left.innerHTML = ' '
        right.innerText = ' '
        inpt2.innerHTML = ' '
        inpt1.value = ''
    })
})
const cixis=document.querySelector('.btn3').addEventListener('click',()=>{
    window.location.assign('https://learn.algoritmika.org')
})


const photo = document.querySelector('.headerLeft')
photo.addEventListener('click', () => {

    window.location.assign('https://www.youtube.com/watch?v=XbIj-EuUHtQ')
})
function delete1() {
    btnLi1.forEach(element => {
        element.style.backgroundColor = 'white'
        element.style.color = '#C6C6C6'
    })


}
function delete2() {

    btnLi2.forEach(element => {
        element.style.backgroundColor = 'white'
        element.style.color = '#C6C6C6'
    })

}
let yer1 = ''
let yer2 = ''
li1.addEventListener('click', () => {
    yer1 = ('RUB')
})
li2.addEventListener('click', () => {
    yer1 = ('USD')
})
li3.addEventListener('click', () => {
    yer1 = ('EUR')
})
li4.addEventListener('click', () => {
    yer1 = ('GBP')
})
li5.addEventListener('click', () => {
    yer2 = ('RUB')
})
li6.addEventListener('click', () => {
    yer2 = ('USD')
})
li7.addEventListener('click', () => {
    yer2 = ('EUR')
})
li8.addEventListener('click', () => {
    yer2 = ('GBP')
})


const btnLi2 = document.querySelectorAll('.liBottomRight');
btnLi2.forEach(element => {

    element.addEventListener('click', () => {


        let url = (`https://api.exchangerate.host/latest?base=${yer1}&symbols=${yer2}`)
        fetch(`${url}`).then(res => res.json())
            .then(data => {
                console.log(data.rates[`${yer2}`]);

                left.innerText = `1${yer1} =${data.rates[`${yer2}`]} ${yer2}`
                right.innerText = `1${yer2} =${1 / data.rates[`${yer2}`]} ${yer1}`
                inpt2.innerHTML = inpt1.value * data.rates[`${yer2}`]
                console.log(inpt1.value.indexOf(3));
                
            })

       
        

        delete2()
        element.style.backgroundColor = '#833AE0'
        element.style.color = '#FFFFFF'
    })
})


