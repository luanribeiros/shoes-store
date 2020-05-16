const INITIAL_STATE = [{
  url: "https://images-na.ssl-images-amazon.com/images/I/61Ez19M9BZL._AC_UY580_.jpg",
  name: "A Name Product",
  description: "Example for um description",
  price: "R$ 29.90"
}]

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "ADD_CARD": return [
      ...state,
      action.card
    ]
    default: return state;
  }
}