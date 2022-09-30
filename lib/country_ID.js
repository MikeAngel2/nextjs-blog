const axios = require('axios').default;
const slugify = require('slugify');

export async function getCountryId() {
  const response = await axios('https://restcountries.com/v3.1/all')
  try {
    const id = response.data.map((country) => slugify(country.name.common, {
      lower: true,
    }))
    return {
      params: {
        countryCode: id,
      },
    }
  } catch (e) {
    console.log("Cioc not found.");
  }
}
