const axios = require('axios').default;

function countriesList({ countries }){
  return <h1>Countries List</h1>
  {
    countries.map(countries => {
      return (
        <div key= {countries.cioc}>
          //<p>{countries.name.common}</p>
          <p>{countries.cioc}</p>
        </div>
      )
    })
    }
  }

export default countriesList

export async function getStaticProps(){
  const id = [];
  axios('https://restcountries.com/v3.1/all')
  .then(response => {
    const code = response.data;
    for(let range = 0; range <= 251; range++){
      id[range] = code[range];
    }
  })
  return {
    props: {
      countries: id,
    },
  }
}
