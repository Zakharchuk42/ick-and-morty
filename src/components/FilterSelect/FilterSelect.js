import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'


const FilterSelect = ({tabs, filter, state, filterChoose}) => {

  const changeFilter = (event) => state(event.target.value)

  return (
    <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-simple-select-helper-label">{tabs}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filterChoose}
          label={tabs}
          onChange={changeFilter}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            filter.map(filterEl => {
              return(
                <MenuItem
                  key={filterEl}
                  value={filterEl}
                >{filterEl}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>

    </div>
  )
}

export default FilterSelect