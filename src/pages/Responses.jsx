import React from 'react'
import ResponseCards from '../components/ResponseCards'
import SearchResponseInput from '../components/SearchResponseInput'
import Pagination from '../components/Pagination'

function Responses() {
  return (
    <>
    <SearchResponseInput/>
    <ResponseCards/>
    <Pagination/>
    </>
  )
}

export default Responses