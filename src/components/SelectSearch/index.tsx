import { useState, KeyboardEvent, useEffect, useRef } from 'react'

// Icons
import { BiSearchAlt } from 'react-icons/bi'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api/geo'

// Styled
import { SelectSearchContainer } from './styles'

type SelectSearchType = {
  onClick?: () => void
  placeholder: string
  buttonVisible: boolean
  onSearchChange: any
}

function SelectSearch({
  onClick,
  placeholder,
  buttonVisible,
  onSearchChange
}: SelectSearchType) {
  const [searchTxtSelect, setSearchTxtSelect] = useState<string | null>(null)

  const handleOnChange = (searchData: any) => {
    setSearchTxtSelect(searchData)
    onSearchChange(searchData)
  }

  const loadOptions = async (inputValue: string) => {
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

  return (
    <SelectSearchContainer>
      <AsyncPaginate
        className="selectCity"
        placeholder={placeholder}
        debounceTimeout={600}
        value={searchTxtSelect}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />

      {buttonVisible && (
        <button onClick={onClick} className="containerIconSearch">
          <BiSearchAlt />
        </button>
      )}
    </SelectSearchContainer>
  )
}

export default SelectSearch
