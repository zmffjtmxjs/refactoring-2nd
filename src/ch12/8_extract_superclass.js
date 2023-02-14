class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super();
        this._id = id;
        this._name = name;
        this._monthlyCost = monthlyCost;
    }

    get monthlyCost() { return this._monthlyCost; }
    get name() { return this._name;}
    get id() { return this._id; }

    get annualCost() { return this._monthlyCost * 12; }
}

class Department extends Party {
    constructor(name, staff) {
        super();
        this._name = name;
        this._staff = staff;
    }

    get staff() { return this._staff.slice(); }
    get name() { return this._name;}

    get totalMonthlyCost() {
        return this.staff
            .map(e => e.monthlyCost)
            .reduce((sum, cost) => sum + cost);
    }

    get headCount() {
        return this.staff.length;
    }

    get totalAnnualCost() {
        return this.totalMonthlyCost * 12;
    }
}

class Party {

}