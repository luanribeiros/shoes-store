import { showMessage, hideMessage } from '../src/store/actions'

describe("Actions tests", () => {
  it("Should return a method action { type: 'SHOW_MESSAGE' }", () => {
    expect(showMessage()).toEqual({
      type: "SHOW_MESSAGE"
    })
  })

  it("Should return a method action { type: 'HIDE_MESSAGE' }", () => {
    expect(hideMessage()).toEqual({
      type: "HIDE_MESSAGE"
    })
  })
})