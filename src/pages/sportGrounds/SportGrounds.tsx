import React from 'react'
import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import SportGroundsMap from './map/SportGroundsMap'
import SportGroundList from './sportGroundList/SportGroundList'
import classes from './sportGrounds.module.scss'
// import SearchIcon from '@mui/icons-material/Search';

const SportGrounds = () => {
  return (
    <section className={classes.sportGroundsContainer}>
      <Autocomplete
        options={[]}
        renderInput={(params) => {
          return (<div className={classes.searchWrapper}>
            <TextField
              {...params}
              id='sportGroundSearch'
              className={classes.searchInput}
              placeholder='Поиск'
              InputProps={{
                ...params.InputProps,
                type: 'search',
                startAdornment: (
                  <InputAdornment position="start">
                    A
                    {/* <SearchIcon /> */}
                  </InputAdornment>
                ),
              }}
            />
          </div>)
        }}
        noOptionsText={'Нет спортивных площадок'}
      />
      <div className={classes.mapContainer}>
        <SportGroundsMap />
        <SportGroundList />
      </div>
    </section>
  )
}

export default SportGrounds