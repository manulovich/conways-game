import DOMState from './DOMState';
import utils from './utils';

const { createElement } = utils;

class DOMDisplay {
    parent: HTMLElement;

    constructor(parent: HTMLElement) {
        this.parent = parent;
    }

    addEvents(table: HTMLElement) {
        table.addEventListener('click', event => {
            const cell: HTMLElement = <HTMLElement>event.target;
            cell.classList.toggle('live');
        });
    }

    render(plan: number[][]) {
        const sizeCell = this.parent.clientWidth / plan[0].length;
        const table = createElement(
            'table',
            [
                ['class', 'playground']
            ],
            ...plan.map(row => {
                return createElement(
                    'tr',
                    [
                        ['class', 'row']
                    ],
                    ...row.map(cell => {
                        return createElement(
                            'td',
                            [
                                ['class', `cell ${cell ? 'live' : ''}`],
                                ['style', `width: ${sizeCell}px; height: ${sizeCell}px`]
                            ]
                        )
                    })
                )
            })
        );
        this.parent.appendChild(table);
        this.addEvents(table);
    }

    updateState(): void {
        new DOMState(this.parent).update();
    }
}

export default DOMDisplay;
