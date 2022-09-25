const items = [{
        title: "Морковный торт",
        description: "Морковь, орехи и нежный сыр — главные составляющие этого торта. Обычно на него обращают внимание истинные гурманы, способные разглядеть в простом овоще огромный потенциал!",
        price: 45,
        img: "./img/1.jpeg",
        rating: 4.4,
    },
    {
        title: "Нежный «Наполеон»",
        description: "Лакомство это представляет собой воздушный торт из многих листов тонкого и хрустящего теста, прослоенных кремом - белковым, масляным, заварным, из взбитых сливок, с добавлением какао, сгущенного молока, йогурта, варенья…",
        price: 40,
        img: "./img/2.jpeg",
        rating: 3.1,
    },
    {
        title: "Арахисовый торт «Коровка»",
        description: "Необычное изделие с забавным названием при одном взгляде на него вызывает аппетит. Арахисом здесь не только украшают торт, но и добавляют его в коржи. А в качестве крема используется вареная сгущенка со сливками. Что может быть вкуснее?",
        price: 50,
        img: "./img/3.jpeg",
        rating: 5.0,
    },
    {
        title: "Торт «Прага»",
        description: "Классическая «Прага» с глубоким вкусом поразит в самое сердце любителей шоколада! Влажный торт с оригинальным кремом политый сверху помадкой, украшен какао-порошком.",
        price: 55,
        img: "./img/4.jpeg",
        rating: 4.7,
    },
    {
        title: "Торт «Муравейник»",
        description: "Небанальный проверенный торт. Тонкие коржи, измельченные в крошку и смешанные с безумно вкусным кремом на основе сгущенного молока. Посыпан торт миндальными лепестками и горьким шоколадом!",
        price: 43,
        img: "./img/5.jpeg",
        rating: 4.9,
    },
    {
        title: "Торт «Медовик»",
        description: "Каждому прекрасно известный торт «Медовик» - это удовольствие, от которого не могут отказаться даже люди, равнодушные к сладкому. Вкус этого торта настолько приятный и вкусный, что сразу же вспоминаются приятные мгновения чаепития вместе со своими друзьями или близкими.",
        price: 38,
        img: "./img/6.jpeg",
        rating: 3.2,
    },
    {
        title: "Блинный торт",
        description: "Блинные торты готовят из испеченных тонких блинчиков: чем больше слоев, тем сытнее готовое блюдо. Начинкой может быть что угодно – от сочных, пропитанных соусом мясных или рыбных фаршей до сладкого домашнего конфитюра.",
        price: 35,
        img: "./img/7.jpeg",
        rating: 2.9,
    },
    {
        title: "Итальянский торт «Джандуйя»",
        description: "«Джандуйя» — это название популярной итальянской марки орехового шоколада. Именно он используется для приготовления ганаша. Несложный в приготовлении, но такой вкусный торт наверняка порадует своим вкусом всех любителей шоколада!",
        price: 60,
        img: "./img/8.jpeg",
        rating: 3.4,
    },
    {
        title: "Торт «Мираж»",
        description: "Домашний торт под авторским названием «Мираж» состоит из воздушного бисквита, пропитанного вишневым сиропом, и крема из сгущенки со сливочным сыром. В качестве украшения используется ореховая крошка, мята и, по желанию, мармеладные конфеты или настоящие ягоды.",
        price: 55,
        img: "./img/9.jpeg",
        rating: 4.8,
    },
    {
        title: "Торт «Ленинградский»",
        description: "Несколько десятков лет назад в магазинах продавались лишь «Ленинградский» торт и «Птичье молоко», не было тогда еще «Панчо» и «Красного бархата». С тем пор многие полюбили песочное изделие за особый вкус и нарядный вид. Если прямо сейчас вас захватила ностальгия, попробуйте этот бессмертный десерт",
        price: 48,
        img: "./img/10.jpeg",
        rating: 3.2,
    },
    {
        title: "Торт «Захер»",
        description: "Насыщенный и в меру влажный шоколадный бисквит, прослойка абрикосового джема и вкуснейший слой шоколада сверху. Для этого торта используется самый лучший черный шоколад, а вкус угощения Вас не разочарует.",
        price: 52,
        img: "./img/11.jpeg",
        rating: 3.7,
    },
    {
        title: "Чизкейк с маскарпоне и брусничным соусом",
        description: "Невероятно нежное оригинальное изделие на основе творога и маскарпоне, а соус из брусники лишь подчеркивает его воздушность! (Ягоды используются любые: смородина, вишня или клубника.",
        price: 58,
        img: "./img/12.jpeg",
        rating: 4.1,
    },
];


let currentState = [...items];

const itemsContainer = document.querySelector("#shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");

function prepareShopItem(shopItem) {
    const { title, description, img, price, rating } = shopItem;
    const item = itemTemplate.content.cloneNode(true);
    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `${price} BYN за кг`;
    item.querySelector(".total").textContent = `Итого: ${price} BYN`;

    const ratingContainer = item.querySelector(".rating");
    for (let i = 0; i < rating; i++) {
        const star = document.createElement("i");
        star.classList.add("fa", "fa-star");
        ratingContainer.append(star);
    }
    return item;
}

window.addEventListener('click', function(event) {
    let counter;
    let total;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;

        const card = event.target.closest('.shop-item');
        const currentPrice = card.querySelector('.price');
        total = card.querySelector('.total');

        const totalPrice = parseInt(counter.innerText) * parseInt(currentPrice.innerText);
        total.textContent = `Итого: ${totalPrice} BYN`;
    }

    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;

            const card = event.target.closest('.shop-item');
            const currentPrice = card.querySelector('.price');
            total = card.querySelector('.total');

            const totalPrice = parseInt(counter.innerText) * parseInt(currentPrice.innerText);
            total.textContent = `Итого: ${totalPrice} BYN`;
        }
    }
});

function renderItems(arr) {
    nothingFound.textContent = "";
    itemsContainer.innerHTML = "";
    arr.forEach((item) => {
        itemsContainer.append(prepareShopItem(item));
    });
    if (!arr.length) {
        nothingFound.textContent = "Поиск не дал результатов!";
    }
}

function sortByAlphabet(a, b) {

    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();

    currentState = items.filter((el) =>
        el.title.toLowerCase().includes(searchString)
    );
    currentState.sort((a, b) => sortByAlphabet(a, b));
    renderItems(currentState);
    sortControl.selectedIndex = 0;
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);

const sortControl = document.querySelector("#sort");

sortControl.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "expensive":
            {
                currentState.sort((a, b) => b.price - a.price);
                break;
            }
        case "cheap":
            {
                currentState.sort((a, b) => a.price - b.price);
                break;
            }
        case "rating":
            {
                currentState.sort((a, b) => b.rating - a.rating);
                break;
            }
        case "alphabet":
            {
                currentState.sort((a, b) => sortByAlphabet(a, b));
                break;
            }
    }
    renderItems(currentState);
});