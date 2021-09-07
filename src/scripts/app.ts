import DOMDisplay from './DOMDisplay';
import Game from './Game';
import plans from './plans';

const display = new DOMDisplay(document.querySelector('.app'));
const game = new Game(display);
const play = document.getElementById('play');
const pause = document.getElementById('pause');

display.render(plans.simplePlan);

play.addEventListener('click', () => {
    game.play();
});

pause.addEventListener('click', () => {
    game.pause();
});
