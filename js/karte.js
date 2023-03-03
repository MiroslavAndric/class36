const SYMBOLS = ['&#9824;', '&#9827;', '&#9829;', '&#9830;'];
const CARDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
let deck_of_cards,
human_cards,
computer_cards,
turn_to_play;

function splitCards (rounds) {
    human_cards = [];
    computer_cards = [];
    for (let i=0; i < rounds; i++) {
        deck_of_cards = []; 
        CARDS.forEach((card) => {
             deck_of_cards.push(...SYMBOLS.map((symbol) => {
                return {
                    symbol : symbol,
                    card: card
                }
            }));
            
        });
        
        let card_length = deck_of_cards.length;
        for(let i = 0; i < card_length / 2; i++) {
            let card = deck_of_cards.splice(Math.floor(Math.random() * deck_of_cards.length), 1);
            human_cards.push(...card);
            card = deck_of_cards.splice(Math.floor(Math.random() * deck_of_cards.length), 1);
            computer_cards.push(...card); 
        
         };  
    };

};
function play () { 
    let human_card = human_cards.splice(Math.floor(Math.random() * human_cards.length), 1)
    let computer_card = computer_cards.splice(Math.floor(Math.random() * computer_cards.length), 1)
    document.querySelector('.human .card_value').textContent = human_card[0].card;
    document.querySelector('.computer .card_value').textContent = computer_card[0].card;
    document.querySelectorAll('.human .card_symbol span').forEach((el) => {
        el.innerHTML = human_card[0].symbol;
       
    });
    
    document.querySelectorAll('.computer .card_symbol span').forEach((el) => {
        el.innerHTML = computer_card[0].symbol;
    });
    human_card[0].symbol === '&#9829;' || human_card[0].symbol === '&#9830;' ? 
    document.querySelector('.human').classList.add('red') : 
    document.querySelector('.human').classList.remove('red');
    computer_card[0].symbol === '&#9829;' || 
    computer_card[0].symbol === '&#9830;' ? document.querySelector('.computer').classList.add('red') : 
    document.querySelector('.computer').classList.remove('red');
    if (CARDS.indexOf(human_card[0].card) > CARDS.indexOf(computer_card[0].card)) {
        document.querySelector('.score_text span').textContent = Number(document.querySelector('.score_text span').textContent) + 1;
    } else if (CARDS.indexOf(human_card[0].card) < CARDS.indexOf(computer_card[0].card)) {
        document.querySelector('.score_text span:nth-child(2)').textContent = Number(document.querySelector('.score_text span:nth-child(2)').textContent) + 1;
         
    }
    if(Number(document.querySelector('.score_text span').textContent) > Number(document.querySelector('.score_text span:nth-child(2)').textContent)) {
        document.querySelector('.end_game h1').textContent = 'You win!';

    }else if (Number(document.querySelector('.score_text span').textContent) < Number(document.querySelector('.score_text span:nth-child(2)').textContent)) {
        document.querySelector('.end_game h1').textContent = 'You lose!';

    } else {
        document.querySelector('.end_game h1').textContent = "It's a draw!";

    }
    if (!human_cards.length) {
        clearInterval(turn_to_play);
        turn_to_play = null;
        document.querySelector('.end_game').classList.remove('hidden')

    }
   
    

};

function clearScore () {
    document.querySelector('.score_text span').textContent = '0';
    document.querySelector('.score_text span:nth-child(2)').textContent = '0';
}
function numberOfDecks () {
    let rounds = prompt ('Insert number of decks you want to play with:');
    let round_number = Number(rounds);
    if (round_number > 0) {
        return round_number;
    }
     return numberOfDecks()
}

document.addEventListener('DOMContentLoaded', () => {
    let rounds = numberOfDecks();
    splitCards(rounds);
    turn_to_play = setInterval (play, 150);
});
document.querySelector('.end_game button').addEventListener('click', () => {
    document.querySelector('.end_game').classList.add('hidden');
    clearScore();
    let rounds = numberOfDecks();
    splitCards(rounds);
    turn_to_play = setInterval (play, 150);

    
});
