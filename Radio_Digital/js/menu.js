const menu_nav = document.querySelector('.menu_nav');
const vinculos = document.querySelector('.menu-navegacion');
console.log(vinculos)
console.log(menu_nav)

menu_nav.addEventListener('click', ()=>{
    vinculos.classList.toggle("spread")
})

 window.addEventListener('click',e=>{
     console.log(e.target)
 }) 


 window.addEventListener('click',e=>{
   if (vinculos.classList.contains('spread')
    && e.target != vinculos && e.target != menu_nav
   ){


     vinculos.classList.toggle("spread")

   }
})


