class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode || "X";
    }

    get name() {
        return this._name;
    }

    get gender() {
        return "X";
    }

    get genderCode() {
        return this._genderCode;
    }

    get isMale() {
        return "M" === this._genderCode;
    }
}

class Female extends Person {
    get genderCode() {
        return "F"
    }
}

function createPerson(aRecord) {
    switch (aRecord.gender) {
        case 'M':
            return new Person(aRecord.name, "M");
        case 'F':
            return new Female(aRecord.name);
        default:
            return new Person(aRecord.name);
    }
}

function loadFromInput(data) {
    return data.map(aRecord => createPerson(aRecord));
}



// 클라이언트
const numberOfMails = people.filter(p => p.isMale(p)).length;
