document.addEventListener('DOMContentLoaded', () => {

    //card options

    const cardArray = [
        {
            name: 'Bicycle',
            img: 'img/bicycle.png'
        },
        {
            name: 'Bicycle',
            img: 'img/bicycle.png'
        },
        {
            name: 'Boat',
            img: 'img/boat.png'
        },
        {
            name: 'Boat',
            img: 'img/boat.png'
        },
        {
            name: 'Car',
            img: 'img/car.png'
        },
        {
            name: 'Car',
            img: 'img/car.png'
        },
        {
            name: 'Cat',
            img: 'img/cat.png'
        },
        {
            name: 'Cat',
            img: 'img/cat.png'
        },
        {
            name: 'Dog',
            img: 'img/dog.png'
        },
        {
            name: 'Dog',
            img: 'img/dog.png'
        },
        {
            name: 'Fish',
            img: 'img/fish.png'
        },
        {
            name: 'Fish',
            img: 'img/fish.png'
        },
        {
            name: 'Frog',
            img: 'img/frog.png'
        },
        {
            name: 'Frog',
            img: 'img/frog.png'
        },
        {
            name: 'Lion',
            img: 'img/lion.png'
        },
        {
            name: 'Lion',
            img: 'img/lion.png'
        },
        {
            name: 'House',
            img: 'img/house.png'
        },
        {
            name: 'House',
            img: 'img/house.png'
        },
        {
            name: 'Bird',
            img: 'img/bird.png'
        },
        {
            name: 'Bird',
            img: 'img/bird.png'
        },
        {
            name: 'Flower',
            img: 'img/flower.png'
        },
        {
            name: 'Flower',
            img: 'img/flower.png'
        },
        {
            name: 'Tree',
            img: 'img/tree.png'
        },
        {
            name: 'Tree',
            img: 'img/tree.png'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'img/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'img/white.png');
            cards[optionTwoId].setAttribute('src', 'img/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png');
            cards[optionTwoId].setAttribute('src', 'img/blank.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }


    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});
