const x=document.querySelectorAll('.menu-btn')
const y=document.querySelector('.screemoverall')
const z=document.querySelector('.moonbtn i')
z.addEventListener('click',()=>{
   const zz=  document.body.classList.toggle('dark')
   z.classList.toggle('fa-sun',zz)
   z.classList.toggle('fa-moon',!zz)

})

x.forEach(button => {
    button.addEventListener('click',()=>{
        document.body.classList.toggle('mmm')
    })
})

y.addEventListener('click',()=>{
     document.body.classList.toggle('mmm')
})

if(window.innerWidth>=768){
  document.body.classList.remove('mmm')
}