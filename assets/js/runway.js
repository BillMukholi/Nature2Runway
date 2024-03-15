//Product Price
if (typeof variationData !== 'undefined'){
    const bdi = document.getElementsByTagName('bdi');
    const variationFrom = document.getElementsByClassName("variations_form")[0]
    const regularPrice = document.getElementsByClassName('regular-price')[0]
    const salePrice = document.getElementsByClassName('sale-price')[0]
    const variationImg = document.getElementById("variationImg")
    const variationImg2 = document.getElementById("variationImg2")
    setTimeout(()=>{
        regularPrice.innerText = bdi[2].innerText
        salePrice.innerText = bdi[3].innerText
    },500)

    variationFrom.addEventListener('change',()=>{
        setTimeout(()=>{
            regularPrice.innerText = bdi[2].innerText
            salePrice.innerText = bdi[3].innerText
        },10)
        setTimeout(()=>{
            var variation_data = variationData.find(function(variation) {
                return variation.variation_id == jQuery( 'input[name="variation_id"]' ).val();
            });
            var image_url = variation_data.image_url;
            variationImg.setAttribute('src',image_url)
            variationImg2.setAttribute('src',image_url)
            
        },200)
    })

}
// Product Carousel
var splide = new Splide( '.splide', {
    perPage: 1,
    perMove: 1,
    padding: { left: 0, right: '1.5cm' },
  } );
  
  splide.mount();

//Product Picture Animation
let productPictureAnimation = gsap.timeline()
productPictureAnimation.pause()

let productPictureContainer = document.getElementsByClassName('product-area-grid-item-cont')
for(let i = 0; i < productPictureContainer.length; i++){
    productPictureContainer[i].addEventListener('click',()=>{
        productPictureAnimation.to('.product-area-grid-item-cont',{width:'0cm',duration:1})
        productPictureAnimation.to(productPictureContainer[i],{width:'100%',height:'70vh',duration:1},'-=1')
        productPictureAnimation.to('.product-area-grid-cont',{opacity:0,duration:1},'-=1')

        productPictureAnimation.restart()
    })
}