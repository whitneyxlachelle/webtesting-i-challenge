const enhancer = require('./enhancer.js');

//ARRANGE
describe("enhancement success", () => {
    //ACT
    it("item enhancement increases by 1", () => {
        //ASSERT
        expect(enhancer.succeed({
            name: "crowbar",
            durability: 20,
            enhancement: 15,
        })).toStrictEqual({
            name: "crowbar",
            durability: 20,
            enhancement: 16,
        })
    })
})

describe("enhancement failed", () => {
    //ACT
    it("item durability decreases by 5 if enhancement is less than 15", () => {
        //ASSERT
        expect(enhancer.fail({
            name: "bat",
            durability: 20,
            enhancement: 14,
        })).toStrictEqual({
            name: "bat",
            durability: 15,
            enhancement: 14,
        })
    })
    //ACT
    it("item durability decreases by 10 if enhancement is greater than 15 or more", () => {
        //ASSERT
        expect(enhancer.fail({
            name: "pipe",
            durability: 70,
            enhancement: 16,
        })).toStrictEqual({
            name: "pipe",
            durability: 60,
            enhancement: 16,
        })
    })
    //ACT
    // it("item durability decreases by 1 if enhancement is greater than 16", () => {
    //     //ASSERT
    //     expect(enhancer.fail({
    //         name: "stick",
    //         durability: 11,
    //         enhancement: 20,
    //     })).toStrictEqual({
    //         name: "stick",
    //         durability: 10,
    //         enhancement: 20,
    //     })
    // })
})

describe("repairing durability", () => {
    //ACT
    it("returns durability to 100", () => {
        //ASSERT
        expect(enhancer.repair({
            name: "bottle",
            durability: 20,
            enhancement: 15,
        })).toStrictEqual({
            name: "bottle",
            durability: 100,
            enhancement: 15,
        })
    })
})
