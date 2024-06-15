function playmusic() {
    var music = document.getElementById('music');
    var open = document.getElementById('openn');
    var ops = document.getElementById('ops');
    document.addEventListener('click', e =>{
        open.classList.add("expend");
        setTimeout(() =>{
            open.classList.remove("expend");
        },500)
    })
    if (music.paused) {
        music.play();
        openn.style.animation = 'music 2s linear infinite reverse';
        ops.style.animation = 'musi 2s linear infinite ';
    }
    else{
        music.pause();
        openn.style.animation = 'none';
        ops.style.animation = 'none';
    }
} 

const hop = document.getElementById('hop');
hop.addEventListener('click', e => {
  /* window.scrollTo(0,100 );*/
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
   });
} );
document.addEventListener('scroll', e => {
    if(scrollY !== 0){
        hop.style.opacity = '1';
        hop.style.transition = '0.3s'
    }
    else{
        hop.style.opacity = '0';
        hop.style.transition = '0.3s'
    }
})
var gauche = document.getElementById('miss');
var droite = document.getElementById('kiss');
var content = document.getElementsByClassName('donovan');
var conteneur = document.getElementsByClassName('dona');
var oitem = document.getElementsByClassName('d');
var titem = document.getElementsByClassName('c');
      gauche.addEventListener('click', e => {
        conteneur.ap
      })


    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
        cursor.style.left = (e.pageX ) + 'px';
        cursor.style.top = (e.pageY ) + 'px';
    })
    
   
 function dr() {
    var gauche = document.getElementById('miss');
var droite = document.getElementById('kiss');
var conten = document.querySelector('.donovan');
var conteneur = document.querySelector('.dona');
gauche.addEventListener('click', e  => {
    conteneur.scrollBy({
        left: -100,
        behavior:'smooth'
    });
    if(scrollLeft === 0){
        conteneur.scrollBy({
            left: 1000,
            behavior:'smooth'
        });
    }
})
    
 }
 function dg() {
    var gauche = document.getElementById('miss');
var droite = document.getElementById('kiss');
var conten = document.querySelector('.donovan');
var conteneur = document.querySelector('.dona');
droite.addEventListener('click', e  => {
    conteneur.scrollBy({
        left: +100,
        behavior:'smooth'
    });
 })
}
function nav() {
    const navn = document.querySelector('.navn');
    const nav = document.querySelector('nav');
        if(nav.style.marginTop === '-50px'){
    nav.style.marginTop = '120px';
    } else{
        nav.style.marginTop = '-50px';
    }
}
function user(){
    const photo = document.querySelector('.photo');
    const nav = document.querySelector('nav');
    const login = document.querySelector('.pprofil');
    if(login.style.marginLeft === '-230px'){
        login.style.marginLeft = '0px';
        login.style.transition = '.5s';
    }else {
        login.style.marginLeft = '-230px';
        
    }
   
}

 function masquer() {
    const login = document.querySelector('.pprofil');
    const nav = document.querySelector('nav');
    login.style.display = 'none';
    nav.style.display = 'none';
 }
 
         function bteft() {
            var gauche = document.getElementById('bteft');
        var droite = document.getElementById('btight');
        var conten = document.querySelector('.items');
        var conteneur = document.querySelector('.tems-one');
        gauche.addEventListener('click', e  => {
            conteneur.scrollBy({
                left: -200,
                behavior:'smooth'
            });
            if(scrollLeft === 0){
                conteneur.scrollBy({
                    left: 1000,
                    behavior:'smooth'
                });
            }
        })
            
         }
         function btight() {
            var gauche = document.getElementById('bteft');
        var droite = document.getElementById('btight');
        var conten = document.querySelector('.items');
        var conteneur = document.querySelector('.tems-one');
        droite.addEventListener('click', e  => {
            conteneur.scrollBy({
                left: +200,
                behavior:'smooth'
            });
         })
        }














        function nteft() {
            var gauche = document.getElementById('nteft');
        var droite = document.getElementById('n');
        var conten = document.querySelector('.item');
        var conteneur = document.querySelector('.tems-tw');
        gauche.addEventListener('click', e  => {
            conteneur.scrollBy({
                left: -200,
                behavior:'smooth'
            });
        })
            
         }
         function ntight() {
            var gauche = document.getElementById('nteft');
        var droite = document.getElementById('ntight');
        var conten = document.querySelector('.item');
        var conteneur = document.querySelector('.tems-tw');
        droite.addEventListener('click', e  => {
            conteneur.scrollBy({
                left: +200,
                behavior:'smooth'
            });
         })
        }
       