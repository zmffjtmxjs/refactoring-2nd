class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get gender() {
        return "F";
    }
}

class Male extends Person {
    get genderCode() {
        return "M"
    }
}

class Female extends Person {
    get genderCode() {
        return "F"
    }
}

function loadFromInput(data) {
    const result = [];
    data.forEach(aRecord => {
        let p;
        switch (aRecord.gender) {
            case 'M': p = new Male(aRecord.name); break;
            case 'F': p = new Female(aRecord.name); break;
            default: p = new Person(aRecord.name);
        }
        result.push(p);
    });
    return result;
}



// 클라이언트
const numberOfMails = people.filter(p => p instanceof Male).length;
