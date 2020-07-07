//synchronous action creators

export const setCountryCodeData = countryCodeData => {
  return {
    type: "SET_COUNTRY_CODE_DATA",
    countryCodeData
  }
}

//asynchronous action creators

export const getCountryCodes = () => {
  return dispatch => {
    return fetch("https://api.tugo.com/v1/travelsafe/countries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-API-Key": "cx38gacyh7yumqfvvnqe7n2g"
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      dispatch(setCountryCodeData(resp))
    })
    .catch(console.log)
  } 
}

