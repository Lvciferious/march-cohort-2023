function spiralOrder(matrix){
    let spiral = [];
    let firstP = 0;
    let matP1 = matrix[0].length-1;
    let secondP = 0;
    let matP2 = matrix.length-1;
    let dir = 'right';

    while (firstP <= secondP && matP1 <= matP2) {
        if (dir === 'right') {
            for (let i = firstP; i <= matP1.length; i += 1) {
            spiral.push(matrix[firstP][i]);
        }
        firstP += 1;
        dir = 'secondP';
    }

    return spiral;
}
