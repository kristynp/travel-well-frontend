
export const getCountryAdvisories = (country, countryCodeData) => {
  const countrySlug = country.replace(/\s/g , "-").toLowerCase()
  // const countryCode = //! use state to filter countryCodeData to get code
  // return dispatch => {
  //   const accessKey = process.env.REACT_APP_TUGO_KEY
  //   return fetch(`https://api.tugo.com/v1/travelsafe/countries/${countryCode}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-Auth-API-Key": accessKey 
  //     }
  //   })
  //   .then(resp => resp.json())
  //   .then(resp => {
  //     console.log(resp)
  //     dispatch(setCountryCodeData(resp))
  //   })
  //   .catch(console.log)
  // } 
}