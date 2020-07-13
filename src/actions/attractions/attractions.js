//synchronous action creators

export const setDestinationAttractions = attractions => {
  return {
    type: "SET_DESTINATION_ATTRACTIONS",
    attractions
  }
}

//asynchronous action creators

// function apiGet(method, query) {
//   const apiKey = "5ae2e3f221c38a28845f05b65504955d74e2e57a84e468e0acae67ee";
//   return new Promise(function(resolve, reject) {
//     var otmAPI =
//       "https://api.opentripmap.com/0.1/en/places/" +
//       method +
//       "?apikey=" +
//       apiKey;
//     if (query !== undefined) {
//       otmAPI += "&" + query;
//     }
//     fetch(otmAPI)
//       .then(response => response.json())
//       .then(data => resolve(data))
//       .catch(function(err) {
//         console.log("Fetch Error :-S", err);
//       });
//   });
// }

export const getDestinationAttractions = (country) => {
  return dispatch => {
    const accessKey = process.env.REACT_APP_OPEN_TRIP_MAP_API_KEY
    console.log(country)
    return fetch(`https://`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      //dispatch(setDestinationAttractions(resp))
    })
    .catch(console.log)
  } 
}