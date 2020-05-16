import reducerMessage from '../src/store/reducers/message'

describe(" Reducer Message ", () => {
  it("Should return a initial state", () => {
    expect(reducerMessage(undefined, { type: "SHOW_MESSAGE" })).toEqual({
        showMessage: true
      });
  });
})