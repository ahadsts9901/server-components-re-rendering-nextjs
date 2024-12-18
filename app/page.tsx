import React from 'react'
import Tabs from './components/Tabs'

const Page = () => {
  const time = new Date().toLocaleString()
  console.log("server component render", time)
  return <Tabs server_data={time} />
}

export default Page