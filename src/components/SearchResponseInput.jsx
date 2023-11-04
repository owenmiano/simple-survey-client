import React from "react";
import { useForm } from "react-hook-form";

function SearchResponseInput({ handleFilterResponsesByEmail,responses }) {
  const { register } = useForm({
    defaultValues: {
      email: "all", // Default option is "All Responses"
    },
  });

  const onChange = (data) => {
      handleFilterResponsesByEmail(data.email);
      console.log(data.email)
    } 
  
  return (
    <div className="mt-4 text-center">
       <form noValidate>
       <select onChange={onChange} {...register("email")}>
          <option value="all">All Responses</option>
          {responses.map((response) => (
            <option key={response.id} value={response.email_address}>
              {response.email_address}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default SearchResponseInput;
