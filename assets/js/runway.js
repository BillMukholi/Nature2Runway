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
    },1000)

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
    //padding: { left: 0, right: '1.5cm' },
  } );
  
  splide.mount();

//Product Picture Animation
let productPictureAnimation = gsap.timeline()
productPictureAnimation.pause()

let productPictureContainer = document.getElementsByClassName('product-area-grid-item-cont')
for(let i = 0; i < productPictureContainer.length; i++){
    productPictureContainer[i].addEventListener('click',()=>{
        productPictureAnimation.to('.product-area-grid-cont',{opacity:0,duration:0.5},'+=0')
        productPictureAnimation.set('.product-area-grid-cont',{display:'none'})
        productPictureAnimation.set('.mobile-carousel',{height:'80vh'})
        splide.go(i)
        productPictureAnimation.to('.mobile-carousel',{opacity:1,duration:1.1},'-=0.25')

        productPictureAnimation.restart()
    })
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
        productPictureAnimation.reverse()
    }
  });


  //Product Image Hover
  // Select all .splide__slide containers
const containers = document.querySelectorAll('.splide__slide');
// Iterate over each container using a for loop
for (let i = 0; i < containers.length; i++) {
  const container = containers[i];
  const img = container.querySelector('img');

  // Add event listener for mousemove on each container
  container.addEventListener('mousemove', e => {
    const { clientX, clientY } = e;

    // Calculate the center position of the cursor relative to the container
    const { left, top } = container.getBoundingClientRect();
    const containerCenterX = left + container.offsetWidth / 2;
    const containerCenterY = top + container.offsetHeight / 2;

    // Calculate the position to animate the image to
    const x = clientX - containerCenterX;
    const y = clientY - containerCenterY;

    // Use GSAP to smoothly animate the image to the center of the cursor
    gsap.to(img, {
      duration: 0.3,
      x: x,
      y: y,
      ease: 'power2.out'
    });
  });

  // Reset the image position when the mouse leaves each container
  container.addEventListener('mouseenter', () => {
    gsap.to(img, {
      duration: 0.3,
      scale:2,
      ease: 'power2.out'
    });
  });
  
  container.addEventListener('mouseleave', () => {
    gsap.to(img, {
      duration: 0.3,
      scale:1,
      x: 0,
      y: 0,
      ease: 'power2.out'
    });
  });
}