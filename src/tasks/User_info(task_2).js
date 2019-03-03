let data = [];
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

            }
        }
    }
}
const userData = (users, orders) => {
    for (let i = 0; i < orders.length; i++) {
        for (let j = 0; j < users.length; j++) {
            let inf = {};
            if (orders[i].user_id == users[j].id) {

                inf.user_id = orders[i].user_id;
                inf.first_name = users[j].first_name
                inf.last_name = users[j].last_name
                inf.gender = users[j].gender;

                data.push(inf)
            }

        }

    }


}
const userInfo = (users, orders) => {
    userData(users, orders);
    userName(data);
}
export { data }
export default userInfo;
