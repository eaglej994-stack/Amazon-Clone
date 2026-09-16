import React from 'react'
import { CatagoryInfos } from './CatagoryFullnfos'
import CatagoryCard from './CatagoryCard'
import classes from './catagory.module.css'

function Catagory() {
  return (
    <section className={classes["catagory_container"]}>
      {
        CatagoryInfos.map((infos, index) => {
          return <CatagoryCard key={index} data={infos} />
        })
      }
    </section>
  )
}

export default Catagory