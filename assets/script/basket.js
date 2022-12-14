let pageBasket = document.querySelector('.basket'),
    products = document.querySelector('.products'),
    btnBasket = document.querySelectorAll('.btn_item_details');

let allProducts = {
    items : [
        {
            first_name: "Холодильник ",
            second_name: "Samsung",
            price: "15000",
            imageSrc: 'assets/image/products/холодильник.jpg',
        },
        {
            first_name: "Настольная лампа ",
            second_name: "Alex",
            price: "1000",
            imageSrc: 'assets/image/products/настольная лампа.png',
        },
        {
            first_name: "Настольная лампа ",
            second_name: "Light",
            price: "1250",
            imageSrc: 'assets/image/products/настольная лампа 2.png',
        },
        {
            first_name: "Стул ",
            second_name: "Ch",
            price: "400",
            imageSrc: 'assets/image/products/стул Ch.jpg',
        },
        {
            first_name: "Стол ",
            second_name: "Bakea",
            price: "3000",
            imageSrc: 'assets/image/products/Стол Bakea.png',
        },

        {
            first_name: "Сковородка ",
            second_name: "Beko",
            price: "7899",
            imageSrc: 'assets/image/products/сковородка bako.jpg',
        },
        {
            first_name: "Сковородка ",
            second_name: "Stilit",
            price: "1999",
            imageSrc: 'assets/image/products/сковородка stilit.png',
        },
        {
            first_name: "Кастрюля ",
            second_name: "Stilit",
            price: "6250",
            imageSrc: 'assets/image/products/Кастрюля Stilit.png',
        },
        {
            first_name: "Дуршлаг ",
            second_name: "Mako",
            price: "450",
            imageSrc: 'assets/image/products/дуршлаг Mako.jpg',
        },
        {
            first_name: "Скалка ",
            second_name: "Kat",
            price: "300",
            imageSrc: 'assets/image/products/Скалка kat.jpg',
        }
    ]
};

let basket = {
    itemBasket : []
};

function addIdProduct() {
    let product = document.querySelectorAll('.item');

    for (let i = 0; i < product.length; i++) {
        btnBasket[i].dataset.id = i;
    }
}

addIdProduct();

addEventListener('click', function(event){
    let target = event.target,
        button = target.classList.contains('btn_item_details'),
        idProduct = target.dataset.id;

    if (target && button) {
        basket.itemBasket.push(allProducts.items[idProduct]);
    }
})

function closeMainContent(){
    let closeSlider = document.querySelector('.content_info'),
        closeTabContent = document.querySelector('.info_tabcontent'),
        closeProductContent = document.querySelector('.content');

        closeSlider.classList.add('content_info_none');
        closeTabContent.classList.add('content_info_none');
        closeProductContent.classList.add('content_info_none');
}

function openMainContent(){
    let closeSlider = document.querySelector('.content_info'),
        closeTabContent = document.querySelector('.info_tabcontent'),
        closeProductContent = document.querySelector('.content');

        closeSlider.classList.remove('content_info_none');
        closeTabContent.classList.remove('content_info_none');
        closeProductContent.classList.remove('content_info_none');
}

function addProduct(){
    let basketMenu = document.querySelector('.basket_menu');
    for(let i = 0; i < basket.itemBasket.length; i++) {
        let elemDivMenuItem = document.createElement('div'),
            elemDivNumber = document.createElement('div'),
            elemDivImage = document.createElement('div'),
            elemImg = document.createElement('img'),
            elemDivAmount = document.createElement('div'),
            elemDivName = document.createElement('div'),
            elemDivPrice = document.createElement('div'),
            elemPNumber = document.createElement('p'),
            elemPName = document.createElement('p'),
            elemPPrice = document.createElement('p'),
            elemInputPlus = document.createElement('input'),
            elemPAmount = document.createElement('p'),
            elemInputMinus = document.createElement('input'),
            elemDivDelete = document.createElement('div'),
            elemInputDelete = document.createElement('input'),
            elemText_firstName = document.createTextNode(basket.itemBasket[i].first_name),
            elemText_secondName = document.createTextNode(basket.itemBasket[i].second_name),
            elemText_price = document.createTextNode(basket.itemBasket[i].price);

        elemDivMenuItem.classList.add('basket_menu_item');
        elemDivImage.classList.add('basket_menu_image');
        elemDivNumber.classList.add('basket_menu_number');
        elemInputPlus.classList.add('change_amount_plus');
        elemPAmount.classList.add('basket_menu_amount');
        elemInputMinus.classList.add('change_amount_minus')
        elemDivName.classList.add('basket_menu_name');
        elemDivPrice.classList.add('basket_menu_price');
        elemDivAmount.classList.add('basket_menu_change_amount')
        elemDivDelete.classList.add('basket_menu_delete');
        elemInputDelete.classList.add('delete');
        
        elemPName.appendChild(elemText_firstName);
        elemPName.appendChild(elemText_secondName);
        elemPPrice.appendChild(elemText_price);
        elemPNumber.textContent = i+1;
        elemInputPlus.type = 'button';
        elemInputPlus.value = '+';
        elemInputMinus.type = 'button';
        elemInputMinus.value = '—';
        elemInputDelete.type = 'button';
        elemInputDelete.value = '✖';
        elemPAmount.textContent = '1';
        elemImg.src = basket.itemBasket[i].imageSrc;
        elemImg.width = '250';
        elemImg.height = '150';
        
        basketMenu.appendChild(elemDivMenuItem);
        elemDivMenuItem.appendChild(elemDivNumber);
        elemDivNumber.appendChild(elemPNumber);
        elemDivMenuItem.appendChild(elemDivImage);
        elemDivImage.appendChild(elemImg);
        elemDivMenuItem.appendChild(elemDivName);
        elemDivMenuItem.appendChild(elemDivAmount);
        elemDivMenuItem.appendChild(elemDivPrice)
        elemDivPrice.appendChild(elemPPrice);
        elemDivAmount.appendChild(elemInputPlus);
        elemDivAmount.appendChild(elemPAmount);
        elemDivAmount.appendChild(elemInputMinus);
        elemDivName.appendChild(elemPName);
        elemDivMenuItem.appendChild(elemDivDelete);
        elemDivDelete.appendChild(elemInputDelete);
    }
}

let buttonIconBasket = document.querySelector('.btn_basket');

buttonIconBasket.addEventListener('click', function(event){
    let target = event.target;

    if(target && target.classList.contains('btn_user_icon') || target.classList.contains('icon basket')
    || target.classList.contains('value_basket')) {
        let basketMenu = document.querySelector('.basket_menu');

        basketMenu.style.display = 'block';
        closeMainContent();
        addProduct();
        }

        let closeBasketMenu = document.querySelector('.close_menu_basket');
        closeBasketMenu.addEventListener('click', function(event) {
            if(target && target.classList.contains('btn_user_icon') || target.classList.contains('icon basket')
            || target.classList.contains('value_basket')) {
                let basketMenu = document.querySelector('.basket_menu');
                basketMenu.style.display = 'none';
                openMainContent();
            }
        })
})