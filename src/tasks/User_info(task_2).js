const userAppeal = (info) => {
    let appeal = null
    if (info.gender == 'Male') {
        appeal = `Mr. ${info.first_name} ${info.last_name}`;
    } else {
        appeal = `Ms. ${info.first_name} ${info.last_name}`;

    }
    return appeal;
}
const userName = (info) => {
    const tbody = document.querySelector('tbody');

    const rows = tbody.children;
    for (let h = 0; h < rows.length; h++) {

        let cells = rows[h].children;

        for (let p = 0; p < cells.length; p++) {
            if (cells[p].classList.contains('user_data')) {
                let a = document.createElement('a');
                a.setAttribute('href', '#');
                cells[p].innerText = '';
                a.innerText = userAppeal(info[h]);
                cells[p].appendChild(a);
                // cells[p].innerText = userAppeal(info[h]);

            }
        }
    }
}
const userData = (users, orders) => {
    let arr = [];


    for (let i = 0; i < orders.length; i++) {
        for (let j = 0; j < users.length; j++) {
            let str = null
            let inf = {};
            if (orders[i].user_id == users[j].id) {
                str = `from orders ${orders[i].user_id} ${orders[i].total}   from users${users[j].id} ${users[j].gender}`
                inf.user_id = orders[i].user_id;
                inf.first_name = users[j].first_name
                inf.last_name = users[j].last_name
                inf.gender = users[j].gender;

                arr.push(inf)
            }

        }

    }
    return arr;

}
const userInfo = (users, orders) => {

    userName(userData(users, orders));
}
export default userInfo;