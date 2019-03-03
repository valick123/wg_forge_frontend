
import orders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';

import create_order_table from './tasks/create_table(Task_1).js';
import userInfo from './tasks/User_info(task_2).js';
import userDetails from './tasks/User-details(Task_3).js'

export default (function () {
    create_order_table(orders);
    userInfo(users, orders);
    userDetails(users, companies);

}());
