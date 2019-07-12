let url = 'https://www.spreadshirt.com/shopData/list?query=K118614&locale=us_US';

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    const articles = data.articles;

    generateImages(articles);
});

function generateImages(articles) {
    let swiperSliderImageList = '';
    for(var i=0;i<6;i++) {
        let imageUrl = 'https://image.spreadshirtmedia.com/image-server/v1/mp/products/'+ articles[i].imageId + '/views/1';
        let sliderImage = '<div class="article_image"><img src="'+ imageUrl +'"/></div>';
        let imageCaption = '<div class="article_name">'+ articles[i].name +'</div>';
        let price = '<div>'+ articles[i].price +'</div>';

        let sliderImageWrapper = '<div class="swiper-slide">'+ sliderImage + imageCaption + price + '</div>';

        swiperSliderImageList = swiperSliderImageList + sliderImageWrapper;
    }

    document.querySelector('#wrapper').innerHTML = swiperSliderImageList;
}

let swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 70,
    observer: true,
    observeParents: true,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});