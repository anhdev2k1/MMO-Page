const layerTrans = document.querySelector('.mfp-container')
const inputSearch = document.querySelector('.input__search')
const btnExit = document.querySelector('.btn__exit')
const btnSearch = document.querySelector('.search-icon')

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

const navbar = document.querySelector('.header__navbar')
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.top = "0";
    }else{
        navbar.style.top = "-200px"
    }
  }
  
window.onscroll = function() {scrollFunction()};





const categorys = document.querySelectorAll('.category-item-link')

categorys.forEach( category => {
    category.addEventListener('click',() => {
        let data = category.getAttribute('data')
        category.setAttribute('href',`./danhmuc.html?data=${data}`)
    })
})





