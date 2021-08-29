import * as single_instance from "./single-instance"
// @ponicode
describe("single_instance.handleSingleInstance", () => {
    test("0", () => {
        let callFunction: any = () => {
            single_instance.handleSingleInstance({ mainWindow: undefined, broadcastURL: () => undefined })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            single_instance.handleSingleInstance({ mainWindow: null, broadcastURL: () => undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
