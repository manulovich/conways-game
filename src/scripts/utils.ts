const createElement = (el: string, attrs: string[][], ...childrens: HTMLElement[]): HTMLElement => {
    const element = document.createElement(el);

    attrs.forEach(([key, value]) => {
        element.setAttribute(key, value);
    });

    childrens.forEach(children => {
        element.appendChild(children);
    });

    return element;
};

const nextStep = (matrix: number[][]): number[][] => {
    return matrix.map((row: number[], y: number) => {
        return row.map((cell: number, x: number) => {
            const coordAllegedNeighbors: number[][] = [
                [0, -1], [-1, 0],
                [1, 0], [0, 1],
                [-1, -1], [1, -1],
                [-1, 1], [1, 1]
            ];
            const neighbors = coordAllegedNeighbors
                .map(([ax, ay]) => {
                    if (matrix[y + ay]) return matrix[y + ay][x + ax] || null;
                })
                .filter(neighbor => neighbor);
            const countNeighbors = neighbors.length;
            
            if (countNeighbors === 3) return 1;
            if (cell && (countNeighbors === 2 || countNeighbors === 3)) return 1;
            if (countNeighbors < 2 || countNeighbors > 3) return 0;
        });
    });
};

export default { createElement, nextStep };
