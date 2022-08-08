import React from 'react'
import SportGroundsMap from './map/SportGroundsMap'
import SportGroundList from './sportGroundList/SportGroundList'
import classes from './sportGrounds.module.scss'

const SportGrounds = () => {
  return (
    <section className={classes.sportGroundsContainer}>
    <SportGroundsMap />
    <SportGroundList />
    </section>
  )
}

export default SportGrounds