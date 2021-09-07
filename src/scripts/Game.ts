import DOMDisplay from './DOMDisplay';

class Game {
    display: DOMDisplay;
    isPlay: boolean;

    constructor(display: DOMDisplay) {
        this.display = display;
        this.isPlay = true;
    }

    play(): void {
        this.isPlay = true;
        const interval: number = setInterval(() => {
            if (!this.isPlay) clearInterval(interval);
            this.display.updateState();
        }, 500);
    }

    pause(): void {
        this.isPlay = false;
    }
}

export default Game;
