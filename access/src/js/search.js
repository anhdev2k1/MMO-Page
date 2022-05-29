/*--------SEARCH ------------- */
const ButtonSearch = document.querySelector('.btn__search')
ButtonSearch.addEventListener('click',()=>{
  
  let dataSearch = ChangeToSlug()
  ButtonSearch.setAttribute('href',`./search.html?search=${dataSearch}`)
})

function ChangeToSlug(){
    var title, slug;
 
    //Lấy text từ thẻ input title 
    title = document.getElementById("input__search").value;
 
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();
 
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return slug
}

//------GET DATA TỪ PARAMS VÀ FETCH DATA RA HTML

const valueSearch = new URLSearchParams(window.location.search).get("search") || "";
const contentSearch = document.querySelector('.content-search')
async function showProductSearch(data){
  
  await fetch(`https://6273706b6b04786a09060c1a.mockapi.io/api/item/data?search=${data}`)
  .then( async res => {
    let data = await res.json()
    const listSearch = document.querySelector('.list__product')
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
    contentSearch.style.display ="none"
    listSearch.innerHTML = htmls.join('')
    
  })
  .catch(err =>{
    console.log(err);
  })

}
showProductSearch(valueSearch)