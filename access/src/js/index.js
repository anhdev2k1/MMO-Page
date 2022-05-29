
const layerTrans = document.querySelector('.mfp-container')
const inputSearch = document.querySelector('.input__search')
const btnExit = document.querySelector('.btn__exit')
const btnSearch = document.querySelector('.search-icon')




// ADD & REMOVE MODAL
document.addEventListener('click', e => {
  if(btnSearch.contains(e.target)){
    layerTrans.classList.add('active');
    document.querySelector('body').classList.add('disable-scroll')
  }
  if(inputSearch.contains(e.target) || btnSearch.contains(e.target)){
    return
  }
 
  layerTrans.classList.remove('active');
  document.querySelector('body').classList.remove('disable-scroll')

})

// layerTrans.addEventListener('click',RemoveModal)
// btnExit.addEventListener('click',RemoveModal)

//SETTING SLIDES
$(document).ready(function(){
    $('.slides').slick({
        autoplay :true,
        autoplaySpeed : 2000,
        prevArrow : '<i class="fa-solid fa-angle-left slick-prev slick-arrow"></i>',
        nextArrow : '<i class="fa-solid fa-angle-right slick-next slick-arrow"></i>',
        dots : true,
        focusOnSelect:true
    });
  });



/*----------COUNT UP-------------- */
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 8000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
});

const navbar = document.querySelector('.header__navbar')
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.top = "0";
    }else{
        navbar.style.top = "-200px"
    }
  }
  
  window.onscroll = function() {scrollFunction()};
//CALL API GET PRODUCT

async function getProduct(){
  await fetch('https://6273706b6b04786a09060c1a.mockapi.io/api/item/data')
  .then( async res => {
    let data = await res.json()
    // console.log(data);
    const products = document.querySelector('.list__product')
     let htmls = data.map( item => {
      return `
      <div class="card">
          <div class="item__product">
            <div class="img__product">
              <img src="${item.img}" alt="">
            </div>
            <div class="title__product">
              <h3 class="heading__product">${item.name}</h3>
              <a href="${item.link}" class="btn__product btn">Xem thêm</a>
            </div>
          </div>
        </div>
        `;
    })
    products.innerHTML = htmls.join('')
  })
  .catch(err =>{
    console.log(err);
  })

}
getProduct();

//SLIDES REVIEWER
$(document).ready(function(){
  $('.slides__reviews').slick({
    autoplay :true,
    autoplaySpeed : 2000,
    arrows:false,
    // prevArrow : '<i class="fa-solid fa-angle-left slick-prev arows-reviews"></i>',
    // nextArrow : '<i class="fa-solid fa-angle-right slick-next arows-reviews"></i>',
    dots : true,
    focusOnSelect:true
  });
});


