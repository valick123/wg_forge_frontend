
const sortData = (cellIndex, infotype) => {
    let tbody = document.querySelector('tbody');
    let rows = [].slice.call(tbody.rows);
    let compare = null;
    switch (infotype) {
        case 'Order Amount':
            compare = (rowA, rowB) => {
                return rowA.cells[cellIndex].innerText.substring(1) - rowB.cells[cellIndex].innerText.substring(1);
            };
            break;
        case 'Order Date':

            // compare = (rowA, rowB) => {
            //     let timeAndDate = rowA.cells[cellIndex].innerText.split(',');
            //     let date = timeAndDate[0];
            //     date = date.split('/')
            //     let time = timeAndDate[1];
            //     time = time.split('')
            //     let dayTime = time[time.length - 2] + time[time.length - 1];
            //     time.pop()
            //     time.pop()
            //     time = time.join('');
            //     time = time.split(':');
            //     for (let d = 0; d < date.length; d++) {
            //         date[d] = +date[d];
            //     }
            //     for (let t = 0; t < time.length; t++) {
            //         time[t] = +time[t];

            //     }
            //     time.push(dayTime)
            //     if (time[time.length - 1] == 'PM') {
            //         time[0] += 12;
            //     }
            //     time.splice(-1, 1)
            //     console.log(date, '   ', time);

            // }
            compare = (rowA, rowB) => {
                if (rowA.cells[cellIndex].innerText.toLowerCase() > rowB.cells[cellIndex].innerText.toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            }
            break;
        case 'Transaction ID':
            compare = (rowA, rowB) => {
                if (rowA.cells[cellIndex].innerText.toLowerCase() > rowB.cells[cellIndex].innerText.toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            }
            break;
        case 'Card Number':
            compare = undefined;
            break;
        case 'Card Type':
            compare = (rowA, rowB) => {
                if (rowA.cells[cellIndex].innerText.toLowerCase() > rowB.cells[cellIndex].innerText.toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            }
            break;
        case 'User Info':

            compare = (rowA, rowB) => {
                if (rowA.cells[cellIndex].children[0].innerText.substring(4).toLowerCase() > rowB.cells[cellIndex].children[0].innerText.substring(4).toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            }
            break;
        case 'Location':
            compare = (rowA, rowB) => {
                let a = rowA.cells[cellIndex].innerText.substring(4);
                a = a.split('');
                a.splice(-1, 1)
                a = a.join('');
                let b = rowB.cells[cellIndex].innerText.substring(4);
                b = b.split('');
                b.splice(-1, 1)
                b = b.join('');

                if (rowA.cells[cellIndex].innerText.toLowerCase() > rowB.cells[cellIndex].innerText.toLowerCase()) {
                    if (a > b) { return 1; }

                } else {
                    return -1;
                }
            }
            break;
    }


    rows.sort(compare);
    tbody.innerHTML = '';
    for (let i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }

}
const sortTable = () => {
    let table = document.querySelector('table');
    let mark = document.createElement('span');
    mark.innerHTML = "&#8595";
    table.addEventListener('click', function (e) {
        let target = e.target;
        if (target.tagName !== 'TH') {
            return;
        }

        if (target.lastChild == mark) {
            target.removeChild(mark);
        } else {
            target.appendChild(mark);
        }




        sortData(target.cellIndex, target.dataset.infoType);
    })
}
export default sortTable;