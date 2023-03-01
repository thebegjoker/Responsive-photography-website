// NAV-SCRIPT.....
    window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('nav-scroll', window.scrollY>0)
})
 // CONTACT-BUTTON-LG.....
 const tbtns = document.querySelectorAll('.contact-btn-lg');

 tbtns.forEach(tbtn => {
    let text = tbtn.querySelector('p')  ;
    
    text.innerHTML = text.innerHTML.split('').map((Character, index)=>`<span style="transform: rotate(${index * 12}deg)">${Character}</span>`).join('')
 });


//  Swiper........................

var swiper = new Swiper('.mySwiper',{
    slidesPerView: 3,
    spaceBetween: 20,     
    pagination:{
        el:'.swiper-pagination',
        clickable: true,
    },
    breakpoints:{

        0 :{
            slidesPerView: 1,
            spaceBetween: 0,   
        },
        600 :{
            slidesPerView: 2,
            spaceBetween: 20,   
        },
        991 :{
            slidesPerView: 3,
            spaceBetween: 30,   
        }
    }
},
)

// phone menu --------------------

document.querySelector('.open').addEventListener('click',()=>{
    document.querySelector('nav .nav-link').style.display='block' 
    document.querySelector('.close').style.display='block'
    document.querySelector('.open').style.display='none'
})
document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('nav .nav-link').style.display='none' 
    document.querySelector('.close').style.display='none'
    document.querySelector('.open').style.display='block'
})


const navA = document.querySelectorAll('nav ul li a');

if(document.body.clientWidth < 1220){
    navA.forEach(nA =>{
        nA.addEventListener('click',()=>{
            document.querySelector('nav .nav-link').style.display='none' 
            document.querySelector('.close').style.display='none'
            document.querySelector('.open').style.display='block'
        }) 
    })
}