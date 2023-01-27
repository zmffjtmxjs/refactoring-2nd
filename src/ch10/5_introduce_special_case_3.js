const simpleJsonData = {
    name: "애크미 보스턴",
    location: "Malden MA",
    // 더 많은 현장(site) 정보
    customer: {
        name: "애크미 산업",
        billingPlan: "plan-451",
        paymentHistory: {
            weeksDelinquentInLastYear: 7
            // 중략
        },
        // 중략
    }
}

const unknownJsonData = {
    name: "물류창고 15",
    location: "Malden MA",
    // 더 많은 현장(site) 정보
    customer: "미확인 고객",
}
