import { getStatisticsData } from './statistics(Task_5).js';
import { setStatisticsData } from './statistics(Task_5).js';
const createSearchBlock = () => {
    let thead = document.querySelector('thead');
    let searchBlock = document.createElement('tr');
    let header = document.createElement('th');
    header.innerText = 'Search: ';
    header.setAttribute('colspan', 2)
    let searchFieldCell = document.createElement('td');
    searchFieldCell.setAttribute('colspan', 5)
    let searchField = document.createElement('input');
    searchField.setAttribute('id', 'search');
    searchField.setAttribute('type', 'text');
    searchFieldCell.appendChild(searchField);
    searchBlock.appendChild(header);
    searchBlock.appendChild(searchFieldCell);
    thead.insertBefore(searchBlock, thead.firstChild);
}
const tableSearch = () => {
    let phrase = document.querySelector('#search').value;
    let tbody = document.querySelector('tbody');
    let regPhrase = new RegExp(phrase);
    let flag = false;
    let rows = tbody.children;
    let newTbody = [];
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].children;
        flag = false
        for (let j = 0; j < cells.length; j++) {
            flag = regPhrase.test(cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            newTbody.push(rows[i]);
        }
    }
    tbody.innerHTML = '';
    for (let r = 0; r < newTbody.length; r++) {
        tbody.appendChild(newTbody[r]);
    }



}
const searchBlock = () => {
    createSearchBlock();
    let tbody = document.querySelector('tbody');
    let oldTbody = [].slice.call(tbody.children);
    let searchField = document.querySelector('#search');
    let noResultsBlock = document.createElement('tr');
    noResultsBlock.innerHTML = '<td>Nothing found</td>'
    searchField.addEventListener('keyup', function () {
        tableSearch()

        if (searchField.value == '') {
            for (let i = 0; i < oldTbody.length; i++) {
                tbody.appendChild(oldTbody[i]);
            }
        }

        if (!tbody.children.length) {
            tbody.appendChild(noResultsBlock);
        }
        setStatisticsData(getStatisticsData())
    })

}
export default searchBlock;