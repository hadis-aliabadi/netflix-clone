import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='UpComing' fetchURL={requests.upComing} />
        <Row rowID='2' title='Popular' fetchURL={requests.popular} />
        <Row rowID='3' title='Trending' fetchURL={requests.trending} />
        <Row rowID='4' title='Top Rated' fetchURL={requests.topRate} />
        <Row rowID='5' title='Horror' fetchURL={requests.horror} />
    </>
  )
}

export default Home