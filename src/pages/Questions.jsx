import React, { useContext } from "react";
import Form from "../components/Form";
import { FormContext } from "../context/FormContext";
import FullName from "../components/FullName";
import Email from "../components/Email";
import Gender from "../components/Gender";
import Description from "../components/Description";
import ProgrammingStack from "../components/ProgrammingStack";
import Certificates from "../components/Certificates";
import FormCompleted from "../components/FormCompleted";

function Questions() {
  const { formStep, nextFormStep, prevFormStep } = useContext(FormContext);

  return (
    <div className="form-container">
      <Form currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <FullName formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 1 && (
          <Email formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 2 && (
          <Description formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 3 && (
          <Gender formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 4 && (
          <ProgrammingStack formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 5 && (
          <Certificates formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep > 5 && <FormCompleted />}
      </Form>
    </div>
  );
}

export default Questions;
