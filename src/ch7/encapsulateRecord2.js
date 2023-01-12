import _ from 'lodash';

class CustomerData {
    constructor(data) {
        this._data = data;
    }

    get rawData() {
        return _.cloneDeep(this._data);
    }

    usage(customerID, year, month) {
        return this._data[customerID].usages[year][month];
    }
}

let customerData = new CustomerData({
    "1920": {
        name: "마틴 파울러",
        id: "1920",
        usages: {
            "2016": {
                "1": 50,
                "2": 55,
                // 나머지 달 (month)은 생략
            },
            "2015": {
                "1": 70,
                "2": 63,
                // 나머지 달은 생략
            },
        },
    },
    "38673": {
        name: "닐 포드",
        id: "38673",
        usages: {
            "2016": {
                "1": 50,
                "2": 55,
            },
            "2015": {
                "1": 70,
                "2": 63,
            },
        },
    }
});

export function getCustomerData() {
    return customerData;
}