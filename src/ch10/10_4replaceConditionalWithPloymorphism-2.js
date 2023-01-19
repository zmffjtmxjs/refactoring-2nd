export function rating(voyage, history) {
    return createRating(voyage, history).value;
}

function createRating(voyage, history) {
    if (voyage.zone === "중국" && history.some(v => "중국" === v.zone))
        return new ExperiencedChinaRating(voyage, history);
    else return new Rating(voyage, history);
}


class Rating {
    constructor(voyage, history) {
        this._voyage = voyage;
        this._history = history;
    }

    get value() {
        const vpf = this.voyageProfitFactor;
        const vr = this.voyageRisk;
        const chr = this.captainHistoryRisk;
        if (vpf * 3 > (vr + chr * 2)) return "A";
        else return "B";
    }

    get voyageRisk() {
        let result = 1;
        if (this._voyage.length > 4) result += 2;
        if (this._voyage.length > 8) result += this._voyage.length - 8
        if (["중국", "동인도"].includes(this._voyage.zone)) result += 4;
        return Math.max(result, 0);
    }

    get captainHistoryRisk() {
        let result = 1;
        if (this._history.length < 5) result += 4;
        result += this._history.filter(v => v.profit < 0).length;
        if (this._voyage.zone === "중국" && this.hasChinaHistory) result -= 2;
        return Math.max(result, 0);
    }

    get hasChinaHistory() {
        return this._history.some(v => "중국" === v.zone);
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this._voyage.zone === "중국") result += 1;
        if (this._voyage.zone === "동인도") result += 1;
        if (this._voyage.zone === "중국" && this.hasChinaHistory) {
            result += 3;
            if (this._history.length > 10) result += 1;
            if (this._voyage.length > 12) result += 1;
            if (this._voyage.length > 18) result -= 1;
        }
        else {
            if (this._history.length > 8) result += 1;
            if (this._voyage.length > 14) result -= 1;
        }
        return result;
    }
}

class ExperiencedChinaRating extends Rating {

}
