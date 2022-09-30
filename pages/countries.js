const axios = require('axios').default;
const slugify = require('slugify');

function countriesList({ countryCode }){
  //console.log('countryCode', countryCode);
  return (
    <>
    <h1>Countries List</h1>

    {countryCode.map((country) => {
      return (
        <div key= {country}>
          <p>{country}</p>
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
  try {
    const id = response.data.map((country) => slugify(country.name.common,{
      lower: true
    }))
    return {
      props: {
        countryCode: id,
      },
    }
  }
  catch(e){
    console.log("Cioc not found.");
  }
  //Slugify
}
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
