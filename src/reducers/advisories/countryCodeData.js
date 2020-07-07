export default (state = null, action) => {
  switch (action.type) {
    case "SET_COUNTRY_CODE_DATA": 
      return action.countryCodeData
    default:
      return state
  }
}