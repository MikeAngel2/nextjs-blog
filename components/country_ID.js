const axios = require('axios').default;
const slugify = require('slugify');

export async function getCountryId() {
  const response = await axios('https://restcountries.com/v3.1/all')
  try {
    const id = response.data.map((country) => slugify(country.name.common, {
      lower: true,
    }))
    //console.log("id", id)
    return {
      params: {
        countryCode: id,
      },
    }
  } catch (e) {
    console.log("Cioc not found.");
  }
}

export default function Countries({ props }){
  //console.log('countryCode', countryCode);
  // const countryid = countryCode.map((country) => slugify(country.cioc,{
  //   lower: true
  // }))
    return (
      <div>
        <p>{props.name.common}</p>
        <p>{props.cioc}</p>
      </div>
    )
}
