const axios = require('axios').default;
import { getCountryId } from "../../lib/country_ID.js";

export async function getStaticPaths() {
  const prePath = await getCountryId()
  //Check log to bypass unresolved promise
  //paths.then(data => console.log('data', data))
  //console.log("paths", paths)
  const paths = prePath.map(post => {
    return {
      params: {
        countryCode: post,
      }
    }
  })
  return {
    paths,
    fallback: false,
  };
}

// export default function Post(){
//   return(
//     <h1>This is a country, such wow</h1>
//   )
// }
