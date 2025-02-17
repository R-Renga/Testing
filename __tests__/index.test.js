const sortingAge = require("../index")



describe("Checking whether the sorting function working properly in all cases", () => {

    const employee = [{
        name: "Renga",
        age: 27
    }, {
        name: "hari",
        age: 35
    }, {
        name: "akash",
        age: 40
    }, {
        name: "suresh",
        age: 20
    }];

    test("ascending order check", () => {
        expect(sortingAge(employee)[0].name).toBe("suresh")
    });

    test("last value", () => {
        expect(sortingAge(employee)[sortingAge(employee).length - 1].name).toBe("akash")
    });

    test("length check", () => {
        expect(sortingAge(employee).length).toBe(4)
    })

    test("undefined check", () => {
        expect(sortingAge(employee)).toBeDefined()
    });

    test("null check", () => {
        expect(sortingAge(employee)).not.toBeNull()
    })

    test("empty array should return an empty array", () => {
    expect(sortingAge([])).toEqual([]);
});

})



