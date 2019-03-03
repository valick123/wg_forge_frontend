const cardNumber = (number) => {
    let numb = number.split('');
    for (let i = 2; i < numb.length - 4; i++) {
        numb[i] = '*';
    }
    numb = numb.join('');
    return numb;
}
const dateConvert = (dateCode) => {
    let date = new Date(dateCode * 1000);

    let hour = date.getHours();
    let dayTime = null
    if (hour > 12) {
        hour -= 12;
        dayTime = 'PM'
    } else {
        dayTime = 'AM';
    }
    let convertedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()},  ${hour}:${date.getMinutes()}:${date.getSeconds()} ${dayTime}`;
    return convertedDate;


}
const tableData = (body, orders) => {
    let rows = body.children;
    for (let currentRow = 0; currentRow < rows.length; currentRow++) {
        let cells = rows[currentRow].children;

        for (let currentCell = 0; currentCell < cells.length; currentCell++) {
            if (currentCell === 0) {
                cells[currentCell].innerText = orders[currentRow].transaction_id

            }
            if (currentCell === 1) {
                cells[currentCell].className = 'user_data'
                cells[currentCell].innerText = orders[currentRow].user_id;
            }
            if (currentCell === 2) {
                cells[currentCell].innerText = dateConvert(orders[currentRow].created_at)
            }
            if (currentCell === 3) {
                cells[currentCell].innerText = `$${orders[currentRow].total}`
            }
            if (currentCell === 4) {
                cells[currentCell].innerText = cardNumber(orders[currentRow].card_number);
            }
            if (currentCell === 5) {
                cells[currentCell].innerText = orders[currentRow].card_type
            }
            if (currentCell === 6) {
                cells[currentCell].innerText = `${orders[currentRow].order_country} (${orders[currentRow].order_ip})`
            }
        }
    }
}
const create_order_table = (orders) => {
    const tbody = document.querySelector('tbody');
    for (let i = 0; i < orders.length; i++) {
        let row = document.createElement('tr');
        row.setAttribute('id', `order_${orders[i].id}`);
        for (let h = 0; h < 7; h++) {
            let td = document.createElement('td');
            row.appendChild(td);
        }

        tbody.appendChild(row);

    }

    tableData(tbody, orders);
}

export default create_order_table;