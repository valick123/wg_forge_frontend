const createStatisticsBlock = () => {
    let table = document.querySelector('table');
    let statisticsBlock = document.createElement('tfoot');
    for (let i = 0; i < 6; i++) {
        let statisticsBlockRow = document.createElement('tr');
        let itemValue = document.createElement('td');
        let itemName = document.createElement('td');
        itemName.setAttribute('colspan', 6)
        statisticsBlockRow.appendChild(itemName);
        statisticsBlockRow.appendChild(itemValue);
        if (i == 0) {
            statisticsBlockRow.children[0].innerText = 'Orders Count';
            statisticsBlockRow.children[0].dataset.statisticsType = 'Orders Count';
        }
        if (i == 1) {
            statisticsBlockRow.children[0].innerText = 'Orders Total';
            statisticsBlockRow.children[0].dataset.statisticsType = 'Orders Total';
        }
        if (i == 2) {
            statisticsBlockRow.children[0].innerText = 'Median Value';
            statisticsBlockRow.children[0].dataset.statisticsType = 'Median Value';
        }
        if (i == 3) {
            statisticsBlockRow.children[0].innerText = 'Average Check';
            statisticsBlockRow.children[0].dataset.statisticsType = 'Average Check';
        }
        if (i == 4) {
            statisticsBlockRow.children[0].innerText = 'Average Check (Female)';
            statisticsBlockRow.children[0].dataset.statisticsType = 'Average Check (Female)';
        }
        if (i == 5) {
            statisticsBlockRow.children[0].innerText = 'Average Check (Male)';
            statisticsBlockRow.children[0].dataset.statisticsType = 'Average Check (Male)';
        }
        statisticsBlock.appendChild(statisticsBlockRow);
    }
    table.appendChild(statisticsBlock);
}
const getStatisticsData = () => {
    let tbody = document.querySelector('tbody');
    let tbodyRows = tbody.children;
    let ordersTotal = null;
    let medianArr = [];
    let median = null
    let averageMen = null;
    let averageWomen = null;

    for (let i = 0; i < tbodyRows.length; i++) {
        let tbodyCells = tbodyRows[i].children;
        for (let j = 0; j < tbodyCells.length; j++) {
            if (j == 1) {
                if (tbodyCells[j].firstChild.innerText.substring(0, 2) == 'Mr') {
                    averageMen += +tbodyCells[3].innerText.substring(1);
                }
                if (tbodyCells[j].firstChild.innerText.substring(0, 2) == 'Ms') {
                    averageWomen += +tbodyCells[3].innerText.substring(1);
                }
            }
            if (j == 3) {
                ordersTotal += +tbodyCells[j].innerText.substring(1);
                medianArr.push(+tbodyCells[j].innerText.substring(1));
            }

        }
    }

    medianArr.sort((a, b) => a - b);
    let averageAmount = ordersTotal / 2;
    if (medianArr.length % 2 == 0) {
        median = (medianArr[medianArr.length / 2] + medianArr[(medianArr.length) / 2 + 1]) / 2;
    } else {
        median = medianArr[(medianArr.length - 1) / 2 + 1];
    }

    return {
        OrderCount: tbodyRows.length,
        OrdersTotal: +ordersTotal.toFixed(2),
        Median: +median.toFixed(2),
        AverageAmount: +averageAmount.toFixed(2),
        AverageMen: +averageMen.toFixed(2),
        AverageWomen: +averageWomen.toFixed(2)



    }
}
const setStatisticsData = (info) => {

    let tfoot = document.querySelector('tfoot');

    let statisticsRows = tfoot.children;
    for (let i = 0; i < statisticsRows.length; i++) {
        let statisticsCells = statisticsRows[i].children;
        for (let j = 0; j < statisticsCells.length; j++) {
            if (statisticsCells[j].dataset.statisticsType == 'Orders Count') {
                statisticsCells[j].nextSibling.innerText = info.OrderCount;
            }
            if (statisticsCells[j].dataset.statisticsType == 'Orders Total') {
                statisticsCells[j].nextSibling.innerText = `$${info.OrdersTotal}`;
            }
            if (statisticsCells[j].dataset.statisticsType == 'Median Value') {
                statisticsCells[j].nextSibling.innerText = `$${info.Median}`;
            }
            if (statisticsCells[j].dataset.statisticsType == 'Average Check') {
                statisticsCells[j].nextSibling.innerText = `$${info.AverageAmount}`;
            }
            if (statisticsCells[j].dataset.statisticsType == 'Average Check (Female)') {
                statisticsCells[j].nextSibling.innerText = `$${info.AverageWomen}`;
            }
            if (statisticsCells[j].dataset.statisticsType == 'Average Check (Male)') {
                statisticsCells[j].nextSibling.innerText = `$${info.AverageMen}`;
            }
        }
    }


}
const getStatistics = () => {
    createStatisticsBlock();
    setStatisticsData(getStatisticsData());
}
export default getStatistics;