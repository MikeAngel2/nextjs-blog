const axios = require('axios').default;
const slugify = require('slugify');
import Countries from '../components/country_ID.js'

function countriesList({ countryCode }){
  //console.log('countryCode', countryCode);
  // const countryid = countryCode.map((country) => slugify(country.cioc,{
  //   lower: true
  // }))
  return (
    <>
    <h1>Countries List</h1>

    {countryCode.map((country) => {
      return (
        <div key= {country.cioc}>
          <Countries
            props={country}
          />
        </div>
      )
    })}
    </>
  )
}

export default countriesList

export async function getStaticProps(){
  //var id = [];
  const response = await axios('https://restcountries.com/v3.1/all')
  // try {
  //   const id = response.data.map((country) => slugify(country.name.common,{
  //     lower: true
  //   }))
  //   return {
  //     props: {
  //       countryCode: id,
  //     },
  //   }
  // }
  // .then(response => {
  //     console.log(response.data.name)
  // });
  return {
    props: {
      countryCode: response.data,
    }
  }
  // catch(e){
  //   console.log("Cioc not found.");
  }
  //Slugify

//
// export async function getStaticPaths(){
//   const response = await axios('https://restcountries.com/v3.1/all')
//   try {
//     const id = response.data.map((country) => slugify(country.name.common,{
//       lower: true
//     }))
//     return {
//       props: {
//         countryCode: id,
//       },
//     }
//   }
//   catch(e){
//     console.log("Cioc not found.");
//   }
// }
