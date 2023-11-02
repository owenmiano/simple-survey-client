import React, { useContext } from "react";
import ResponseCards from '../components/ResponseCards'
import SearchResponseInput from '../components/SearchResponseInput'
import Pagination from '../components/Pagination'
import { FormContext } from "../context/FormContext";

function Responses() {
  const {responses,downloadCertificate} = useContext(FormContext);

  return (
    <>
    {responses.length > 0 ? (
          <>
            <SearchResponseInput />
            <ResponseCards responses={responses} downloadCertificate={downloadCertificate}/>
            <Pagination />
            </>
    ) : (
      <p>There are no responses yet.</p>
    )}
  </>
  )
}

export default Responses