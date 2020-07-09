//synchronous action creators

export const setDestinationAdvisories = advisories => {
  return {
    type: "SET_DESTINATION_ADVISORIES",
    advisories
  }
}

//asynchronous action creators

export const getDestinationAdvisories = (country, countryCodeData) => {
  return dispatch => {
    const accessKey = process.env.REACT_APP_TUGO_KEY
    const countryCode = countryCodeData.find(countryObj => country.toLowerCase() === countryObj.name.toLowerCase()).code
    console.log(countryCode)
    return fetch(`https://api.tugo.com/v1/travelsafe/countries/${countryCode}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-API-Key": `${accessKey}` 
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      dispatch(setDestinationAdvisories(resp))
    })
    .catch(console.log)
  } 
}
