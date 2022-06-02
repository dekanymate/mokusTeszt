import { megfordit, megforditFor } from "../script.js"


describe("Megfordítás teszt", () => {

    it("mokus --> sumok", () => {
        const tesztSzoveg = "mokus";
        const forditott = megfordit(tesztSzoveg)
        expect(forditott).toBe("sukom");
    })

    it("Andras --> sardnA", () => {
        const tesztSzoveg = "Andras";
        const forditott = megfordit(tesztSzoveg)
        expect(forditott).toBe("sardnA");
    })

    it("Máté szövegből étáM szöveget várunk", () => {
        expect(megfordit("Máté")).toBe("étáM");
    })
    //HIBÁS
    // it("Máté szövegből étáM szöveget várunk", () => {
    //     expect(megfordit("Máté")).toBe("étfffM");
    // })

    it("Dávid szövegből diváD szöveget várunk", () => {
        expect(megfordit("Dávid")).toBe("diváD");
    })


});

describe("Megfordítás teszt for-al", () => {

    it("mokus --> sumok", () => {
        const tesztSzoveg = "mokus";
        const forditott = megforditFor(tesztSzoveg)
        expect(forditott).toBe("sukom");
    })

    it("Andras --> sardnA", () => {
        const tesztSzoveg = "Andras";
        const forditott = megforditFor(tesztSzoveg)
        expect(forditott).toBe("sardnA");
    })


});