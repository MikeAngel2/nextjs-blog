const axios = require('axios').default;
import { getCountryId } from "../../lib/country_ID.js";

export async function getStaticPaths() {
  const paths = await getCountryId()
  //Check log to bypass unresolved promise
  //paths.then(data => console.log('data', data))
  return {
    paths,
    fallback: false,
  };
}
