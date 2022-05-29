const content = document.querySelector('.content-left')
const categoryActive = document.querySelectorAll('.category-item-link')
let category = new URLSearchParams(window.location.search).get("data") || "";
const headingCategory = document.querySelector('.hero-heading')
categoryActive.forEach( item =>{
   
    if(category === item.getAttribute('data')){
        item.classList.toggle('active')
        headingCategory.innerText = item.innerHTML
    }
})

categoryActive.forEach( item => {
    item.addEventListener('click',() => {
      
        let data = item.getAttribute('data')
        
        item.setAttribute('href',`./danhmuc.html?data=${data}`)
        switch(data){
            case '1':
                item.removeAttribute('target')
                showProduct(data)
                break;
            case '2':
                item.removeAttribute('target')
                showProduct(data)
                break;
            case '3':
                item.removeAttribute('target')
                showProduct(data)
                break;
            case '4':
                item.removeAttribute('target')
                showProduct(data)
                break;
        }
    })
})
async function showProduct(data){
  
    await fetch(`https://6273706b6b04786a09060c1a.mockapi.io/api/item/data/${data}/category/${data}/products`)
    .then( async res => {
      let data = await res.json()
      const products = document.querySelector('.list__product')
       let htmls = data.map( item => {
        return `
        <div class="card">
            <a href="${item.link_category}" class="item__product">
              <div class="img__product">
                <img src="${item.img}" alt="">
              </div>
              <div class="title__product">
                <h3 class="heading__product">${item.name}</h3>
              </div>
            </a>
        </div>
          `;
      })
      content.style.display ="none"
      products.innerHTML = htmls.join('')
      
    })
    .catch(err =>{
      console.log(err);
    })
  
}
showProduct(category)

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
  



