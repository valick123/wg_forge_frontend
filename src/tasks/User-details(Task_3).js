'use srtict';
import { data } from './User_info(task_2).js'
// const showInformation = (event) => {

//     let target = event.target;
//     if (target.classList.contains('show_details')) {
//         event.preventDefault();
//         target.nextSibling.classList.toggle('show');
//     }

// }
const birthdayDateConver = (dateCode) => {
    let date = new Date(dateCode * 1000);
    let birtday = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    return birtday;
}
const detailsBlock = (info) => {
    const tbody = document.querySelector('tbody');
    const rows = tbody.children;
    for (let r = 0; r < rows.length; r++) {
        let cells = rows[r].children;
        for (let c = 0; c < cells.length; c++) {
            if (cells[c].classList.contains('user_data')) {
                let showDetails = document.createElement('a');
                showDetails.setAttribute('href', '#');
                showDetails.className = 'show_details';
                showDetails.innerText = 'More';
                cells[c].appendChild(showDetails);

                let detailes = document.createElement('div');
                detailes.className = 'user-detailes';

                let birthDay = document.createElement('p');
                birthDay.innerText = `Birthday: ${birthdayDateConver(info[r].company_info.birthday)}`;
                detailes.appendChild(birthDay);

                let ava = document.createElement('p');
                let ico = document.createElement('img');
                ico.style.width = '100px';
                ico.setAttribute('src', info[r].company_info.avatar)
                ava.appendChild(ico);
                detailes.appendChild(ava);

                let company = document.createElement('p');
                company.innerText = 'Company: ';
                if (info[r].company_info.url !== 'No information' && info[r].company_info.title !== 'No information') {
                    let companyLink = document.createElement('a');
                    companyLink.setAttribute('href', info[r].company_info.url);
                    companyLink.setAttribute('target', '_blank');
                    companyLink.innerText = `${info[r].company_info.title}`;
                    company.appendChild(companyLink);
                    detailes.appendChild(company);
                }

                let indust = document.createElement("p");
                if (info[r].company_info.industry !== 'No information' && info[r].company_info.sector !== 'No information')
                    indust.innerText = `Industry: ${info[r].company_info.industry}/${info[r].company_info.sector}`;
                detailes.appendChild(indust);

                cells[c].appendChild(detailes);
            }
        }
    }

}
const userInfo = (users, companies) => {
    let companyInfo = []
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < companies.length; j++) {
            let inf = {}
            if (users[i].company_id === companies[j].id) {
                inf.first_name = users[i].first_name
                inf.birthday = users[i].birthday;
                inf.avatar = users[i].avatar;
                inf.url = companies[j].url;
                inf.title = companies[j].title;
                inf.industry = companies[j].industry;
                inf.sector = companies[j].sector;
                companyInfo.push(inf);
            }
            if (users[i].company_id === null) {
                inf.first_name = users[i].first_name
                inf.birthday = users[i].birthday;
                inf.avatar = users[i].avatar;
                inf.url = 'No information';
                inf.title = 'No information';
                inf.industry = 'No information';
                inf.sector = 'No information';
                companyInfo.push(inf);
                break;
            }
        }
    }
    for (let d = 0; d < data.length; d++) {
        for (let c = 0; c < companyInfo.length; c++) {
            if (data[d].first_name === companyInfo[c].first_name) {
                // delete companyInfo[c].first_name;
                data[d].company_info = companyInfo[c];

            }
        }
    }

    return data;
}
const userDetails = (users, companies) => {

    detailsBlock(userInfo(users, companies));
    // let table = document.querySelector('table');
    // table.addEventListener('click', showInformation());
}
export default userDetails;