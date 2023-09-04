const firstLine = [
    {
        image: 'img/img6.png',
        title: 'Apple',
        description: 'Apple is one of the most famous smart watches providing company.'
    },
    {
        image: 'img/img7.png',
        title: 'Xiaomi',
        description: 'Xiaomi smart watches are produced by MI company.'
    },
    {
        image: 'img/img8.png',
        title: 'FitBit',
        description: 'FitBit smart watches are best for there health and fitness features.'
    },
]

const fisrtLineBox = document.getElementById("setting-201");

function postInfo() {

    firstLine.map((postInfoData) => {

        const newBox = document.createElement("div");
        newBox.classList.add("col-lg-4");
        newBox.classList.add("col-md-6");
        newBox.classList.add("col-12");
        newBox.classList.add("p-4");
        newBox.innerHTML = `

        <div class="setting-202">
            
            <img src="${postInfoData.image}">

            <div class="d-flex flex-column gap-3">
                <span class="setting-203">${postInfoData.title}</span>
                <p class="setting-204">${postInfoData.description}</p>
            </div>

        </div>
        `

        fisrtLineBox.appendChild(newBox);
    });
}

postInfo();


const secondLineBox = document.getElementById('setting-303');

axios.get('https://fakestoreapi.com/products').then(response => {

    const cards = response.data;

    cards.forEach(data => {
        const card = createCard(data);
        secondLineBox.appendChild(card);
    });

}).catch(error => {
    console.error('AXIOSIS SHECDOMA', error);
});

const bs29 = [];

const toggleCartButtons = document.querySelectorAll(".toggle-cart-button");
const cartItems = document.getElementById("cart-items");
const cartQuantity = document.getElementById("cart-quantity");
const cartTotal = document.getElementById("cart-total");
let cart = [];

function createCard(data) {

    const card = document.createElement('div');
    card.classList.add("product")
    card.classList.add('setting-312');
    card.classList.add('col-md-4')
    card.classList.add('col-12');
    card.classList.add('p-4');

    const inside = document.createElement('div');
    inside.classList.add("setting-304")

    const hoverable = document.createElement('div');
    hoverable.classList.add('setting-306');

    let i = 0;
    const cartButton = document.createElement('button');
    cartButton.classList.add('setting-313');
    cartButton.classList.add("toggle-cart-button");
    cartButton.setAttribute("id", data.id);
    cartButton.setAttribute("data-name", data.title);
    cartButton.setAttribute("data-price", data.price);
    cartButton.setAttribute("data-image", data.image);
    cartButton.addEventListener("click", () => {
        const productName = cartButton.getAttribute("data-name");
        const productImage = cartButton.getAttribute("data-image");
        const price = parseFloat(cartButton.getAttribute("data-price"));

        const existingCartItemIndex = cart.findIndex(item => item.name === productName);

        if (existingCartItemIndex !== -1) {
            cart.splice(existingCartItemIndex, 1);
        } else {
            cart.push({ name: productName, price: price, image: productImage });
        }

        updateCartUI();
    });

    function updateCartUI() {
        cartItems.innerHTML = "";
        let quantity = 0;
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.src = item.image;
            img.classList.add("spezimaginge");
            const productName = document.createElement("span");
            productName.textContent = item.name;

            li.appendChild(img);
            li.appendChild(productName);

            cartItems.appendChild(li);

            quantity++;
            total += item.price;
        });

        cartQuantity.textContent = quantity;
        cartTotal.textContent = total.toFixed(2);
    }

    cartButton.addEventListener(
        "click",
        function () {
            if (i == 0) {
                bs29.push("1");
                i++;
                document.getElementById("setting-006").innerHTML = bs29.length;
            } else {
                bs29.pop();
                i--;
                document.getElementById("setting-006").innerHTML = bs29.length;
            }
        },
        false,
    );

    const cartImg = document.createElement('img');
    cartImg.src = 'img/img13.png';
    cartImg.classList.add("setting-310");

    const heartImg = document.createElement('img');
    heartImg.src = 'img/img14.png';
    heartImg.classList.add("setting-311");

    const title = document.createElement('h4');
    title.textContent = data.title;

    const myimg = document.createElement('img');
    myimg.src = 'img/img12.png';
    myimg.classList.add("setting-307");

    const priceBox = document.createElement('div');
    priceBox.classList.add("setting-309");

    const price = document.createElement('p');
    price.classList.add('setting-305');

    const priceover = document.createElement("p");
    priceover.textContent = "$300 ";
    priceover.classList.add("setting-308");
    price.textContent = " $" + data.price;

    const img = document.createElement('img');
    img.src = data.image;

    card.appendChild(inside);
    card.appendChild(hoverable);
    hoverable.appendChild(cartButton);
    cartButton.appendChild(cartImg);
    hoverable.appendChild(heartImg);
    inside.appendChild(img);
    inside.appendChild(title);
    inside.appendChild(myimg);
    inside.appendChild(priceBox);
    priceBox.appendChild(priceover);
    priceBox.appendChild(price);

    return card;
}

createCard;


const thirdLine = [
    {
        image: 'img/img9.png',
        title: 'Hamza Faizi',
        description: 'Don’t waste time, just order! This is the best website to puschase smart watches.',
        imageTwo: 'img/img12.png',
        image2: 'img/img10.png',
        title2: 'Hafiz Huzaifa',
        description2: 'I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.',
        imageTwo2: 'img/img12.png'
    }
];

const thirdLineBox = document.getElementById("setting-401");

for (let i = 0; i < 5; i++) {

    function postInfoTwo() {

        thirdLine.map((postInfoData) => {

            const slide = document.createElement("swiper-slide");
            slide.innerHTML = `
        <div class="container pb-5">
            <div class="row">
                <div class="col-lg-6 col-12 p-4">
                <div class="setting-202">
            
                    <img src="${postInfoData.image}">

                    <div class="d-flex flex-column gap-3">
                        <span class="setting-203">${postInfoData.title}</span>
                        <p class="setting-204 mb-0">${postInfoData.description}</p>
                        <img src="${postInfoData.imageTwo}" width="40%;">
                    </div>

                </div>
                   
            </div>

            <div class="col-lg-6 col-12 p-4">
                <div class="setting-202">
            
                    <img src="${postInfoData.image2}">

                    <div class="d-flex flex-column gap-3">
                        <span class="setting-203">${postInfoData.title2}</span>
                        <p class="setting-204 mb-0">${postInfoData.description2}</p>
                        <img src="${postInfoData.imageTwo2}" width="40%;">
                    </div>

                </div>
                   
            </div>
                </div>
            </div>
        </div>`

            thirdLineBox.appendChild(slide);
        });
    }

    postInfoTwo();
}