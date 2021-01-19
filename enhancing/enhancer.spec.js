const enhancer = require('./enhancer.js');
// test away!
describe("item functions", () => {
    it("repairs durability", () => {
        expect(enhancer.repair({
           name: "adela",
           durability: 25,
           enhancement: 14 
        })).toEqual({
            name: "adela",
            durability: 100,
            enhancement: 14
        })
        expect(enhancer.repair({
            name: "adela",
            durability:100,
            enhancement: 14 
         })).toEqual({
             name: "adela",
             durability: 100,
             enhancement: 14
         })
         expect(enhancer.repair({
            name: "adela",
            durability: -25,
            enhancement: 14 
         })).toEqual({
             name: "adela",
             durability: 100,
             enhancement: 14
         })
         expect(enhancer.repair({
            name: "adela",
            durability: 0,
            enhancement: 14 
         })).toEqual({
             name: "adela",
             durability: 100,
             enhancement: 14
         })
         expect(enhancer.repair({
            name: "adela",
            durability: 2 + 5,
            enhancement: 14 
         })).toEqual({
             name: "adela",
             durability: 100,
             enhancement: 14
         })
         expect(enhancer.repair({
            name: "adela",
            durability: -2 - 5,
            enhancement: 14 
         })).toEqual({
             name: "adela",
             durability: 100,
             enhancement: 14
         })

    })

    it("succeeds", () => {
        expect(enhancer.success({
            name: "succes test",
            durability: -2 - 5,
            enhancement: 14 
        })).toEqual({
            name: "succes test",
            durability: -2 - 5,
            enhancement: 15
        })
        expect(enhancer.success({
            name: "succes test",
            durability: 2,
            enhancement: 20 
        })).toEqual({
            name: "succes test",
            durability: 2,
            enhancement: 20
        })
        expect(enhancer.success({
            name: "succes test",
            durability: -2 - 5,
            enhancement: 0
        })).toEqual({
            name: "succes test",
            durability: -2 - 5,
            enhancement: 1
        })
        expect(() =>enhancer.success({
            name: "succes test",
            durability: -2,
            enhancement: -14 
        })).toThrow()
        
    })

    it("fails", () => {
        // expect(enhancer.fail({
        //     name: "fail test",
        //     durability: 15,
        //     enhancement: 15
        // })).toEqual({
        //     name: "fail test",
        //     durability: 5,
        //     enhancement: 15
        // })
        // expect(enhancer.fail({
        //     name: "fail test",
        //     durability: 15,
        //     enhancement: 16
        // })).toEqual({
        //     name: "fail test",
        //     durability: 5,
        //     enhancement: 16
        // })
        // expect(enhancer.fail({
        //     name: "fail test",
        //     durability: 15,
        //     enhancement: 17
        // })).toEqual({
        //     name: "fail test",
        //     durability: 15,
        //     enhancement: 16
        // })
        // expect(enhancer.fail({
        //     name: "fail test",
        //     durability: 18,
        //     enhancement: 18
        // })).toEqual({
        //     name: "fail test",
        //     durability: 18,
        //     enhancement: 17
        // })
        expect(enhancer.fail({
            name: "fail test",
            durability: 15,
            enhancement: 13
        })).toEqual({
            name: "fail test",
            durability: 10,
            enhancement: 13
        })
        expect(enhancer.fail({
            name: "fail test",
            durability: 15,
            enhancement: 0
        })).toEqual({
            name: "fail test",
            durability: 10,
            enhancement: 0
        })
        expect(() => enhancer.fail({
            name: "fail test",
            durability: 15,
            enhancement: -4
        })).toThrow()
    })
})