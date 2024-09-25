import React from 'react'
import CarRentalForm from './FirstSection'
import Slider from './Slider'
import WhySparkCar from './WhySparkCar'
import WeOffer from './WeOffer'
import CarouselBasic from './TourPackages'
import Advanture from './Advanture'
import Explore from './Explore'
import LatestBlog from './LatestBlog'
import SpecialPackage from './SpecialPackage'
import Question from './Question'
import RentailServices from './RentailServices'
import Contracts from './Contracts'



function Home() {
  return (
    <div>
      <CarRentalForm />
      <Slider />
      <WhySparkCar />
      <WeOffer />
      <CarouselBasic/>
    <Advanture />
    <Explore />
    <LatestBlog />
    <SpecialPackage />
    <Question />
    <RentailServices />
    <Contracts />
    </div>
  )
}

export default Home
