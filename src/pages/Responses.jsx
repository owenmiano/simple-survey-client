import React, { useContext } from "react";
import ResponseCards from '../components/ResponseCards'
import SearchResponseInput from '../components/SearchResponseInput'
import Pagination from '../components/Pagination'
import { FormContext } from "../context/FormContext";

function Responses() {
  const {responses,downloadCertificate,handlePageChange,totalPages,currentPage,handleFilterResponsesByEmail} = useContext(FormContext);

  return (
    <>
    {responses.length > 0 ? (
          <>
            <SearchResponseInput responses={responses} handleFilterResponsesByEmail={handleFilterResponsesByEmail}/>
            <ResponseCards responses={responses} downloadCertificate={downloadCertificate}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
            </>
    ) : (
      <p>There are no responses yet.</p>
    )}
  </>
  )
}

export default Responses