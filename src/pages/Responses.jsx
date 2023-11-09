import React, { useContext } from "react";
import ResponseCards from '../components/ResponseCards'
import SearchResponseInput from '../components/SearchResponseInput'
import Pagination from '../components/Pagination'
import { FormContext } from "../context/FormContext";

function Responses() {
  const {hasData,responses,downloadCertificate,handlePageChange,totalPages,currentPage,handleFilterResponsesByEmail} = useContext(FormContext);

  return (
    <>
    {responses.length > 0 ? (
          <>
            <SearchResponseInput responses={responses} handleFilterResponsesByEmail={handleFilterResponsesByEmail}/>
            <ResponseCards responses={responses} downloadCertificate={downloadCertificate}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} hasData={hasData}/>
            </>
    ) : (
      <p>There are no responses yet.</p>
    )}
  </>
  )
}

export default Responses