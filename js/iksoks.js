let cells = document.querySelectorAll('table tr td');
let x_cells = [];
let y_cells = [];
cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        let cellId = cell.getAttribute('data-id');
        if (x_cells.indexOf(cellId) >= 0 || y_cells.indexOf(cellId) >= 0) {
            alert('Can not play on same field') 
            return;
        }
        cell.innerHTML = 'X';
        x_cells.push(cellId);
    });
});  