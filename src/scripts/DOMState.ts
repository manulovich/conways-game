import utils from './utils';

const { nextStep } = utils;

class DOMState {
    parent: HTMLElement;

    constructor(parent: HTMLElement) {
        this.parent = parent;
    }

    getMatrixFromDomThree(dom: HTMLElement): number[][] {
        const cellsMatrix = [...dom.children[0].children];
    
        return cellsMatrix.map(row => {
            return [...row.children].map(cell => {
                if (cell.classList.contains('live')) return 1;
                return 0;
            })
        });
    };

    syncWidthDomThree(matrix: number[][]) {
        matrix.forEach((row: number[], y: number) => {
            row.forEach((cell: number, x: number) => {
                const domMatrix = this.parent.children[0];

                if (cell) {
                    domMatrix.children[y].children[x].classList.add('live');
                } else {
                    domMatrix.children[y].children[x].classList.remove('live');
                }
            });
        });
    }

    update(): void {
        const matrix = this.getMatrixFromDomThree(this.parent);
        const newMatrix = nextStep(matrix);
        this.syncWidthDomThree(newMatrix);
    }
}

export default DOMState;
