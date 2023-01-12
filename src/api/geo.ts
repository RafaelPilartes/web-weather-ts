export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '575dc9098bmsha7ba91f024012c2p11b462jsneab81246abce',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
}
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

export const loadOptions = async (inputValue: string) => {
  const response = await fetch(
    `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
    geoApiOptions
  )
  const response_1 = await response.json()

  return {
    options: response_1.data.map((city: any) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`
      }
    })
  }
}
