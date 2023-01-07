import {expect} from 'chai';
import {Province, sampleProvinceData} from "../src/ch4/index.js";

describe('province', function () {
    let asia;
    beforeEach(function () {
        asia = new Province(sampleProvinceData());
    });

    it('shortfall', function () {
        expect(asia.shortfall).equal(5); // 검증
    });

    it('profit', function () {
        expect(asia.profit).equal(230);
    });

    it('change production', function () {
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    });
});