let pageBasket = document.querySelector('.basket'),
    products = document.querySelector('.products'),
    btnBasket = document.querySelectorAll('.btn_item_details');

let allProducts = {
    items : [
        {
            first_name: "Холодильник",
            second_name: "Samsung",
            price: "10000"
        },
        {
            first_name: "Холодильник",
            second_name: "Samsung",
            price: "20000",
        },
        {
            first_name: "Холодильник",
            second_name: "Samsung",
            price: "30000"
        },
        {
            first_name: "Холодильник",
            second_name: "Samsung",
            price: "40000",
        },
        {
            first_name: "Холодильник",
            second_name: "Samsung",
            price: "50000",
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
        console.log("Название: " + allProducts.items[idProduct].first_name + 
                                " " + allProducts.items[idProduct].second_name);
        console.log("Цена: " + allProducts.items[idProduct].price);

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

// function amountPlus(){
//     let amountProducts = document.querySelector('.basket_menu_amount');
//     let i = 1;
//     i++;
//     amountProducts.textContent = i;
// }

// function amountMinus(){
//     let amountProducts = document.querySelector('.basket_menu_amount');
//     let i = 1;
//     i--;
//     amountProducts.textContent = i;
// }

// let btnMenuBasket = document.querySelector('input');

// btnMenuBasket.addEventListener('click', function(event) {
//     let target = event.target;
//     console.log('done');
//     if(target && target.classList.contains('change_amount_plus')) {
//         amountPlus();
//     }
//     else if(target && target.classList.contains('change_amount_minus')) {
//         amountMinus();
//     }
// })

addEventListener('click', function(event){
    let target = event.target;
    if(target && target.classList.contains('btn_user_icon') || target.classList.contains('icon basket')
    || target.classList.contains('value_basket')) {
        let basketMenu = document.querySelector('.basket_menu');
        basketMenu.style.display = 'block';
        closeMainContent();
            for(let i = 0; i < basket.itemBasket.length; i++) {
                let elemDiv = document.createElement('div'),
                    elemP = document.createElement('p'),
                    elemImput = document.createElement('input'),
                    elemText_firstName = document.createTextNode(basket.itemBasket[i].first_name),
                    elemText_secondName = document.createTextNode(basket.itemBasket[i].second_name),
                    elemText_price = document.createTextNode(basket.itemBasket[i].price);
                
                elemP.appendChild(elemText_firstName);
                elemP.appendChild(elemText_secondName);
                elemP.appendChild(elemText_price);

                basketMenu.appendChild(elemDiv);
                elemDiv.appendChild(elemP);
            }
        }
})