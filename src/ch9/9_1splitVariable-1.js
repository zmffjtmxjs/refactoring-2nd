function distanceTravelled (scenario, time) {
    let result;
    const primaryAceeleration = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAceeleration * primaryTime * primaryTime;
    let secondaryTime = time -scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelociry = primaryAceeleration * scenario.delay;
        const secondaryAceeleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        result += primaryVelociry * secondaryTime + 0.5 * secondaryAceeleration * secondaryTime * secondaryTime;
    }
    return result;
}