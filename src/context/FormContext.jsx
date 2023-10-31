import { createContext, useState, useEffect } from "react";
export const FormContext = createContext("");

export const FormContextProvider = ({ children }) => {
    const [formStep, setFormStep] = useState(0);
    const [data, setData] = useState({});

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
    return (
        <FormContext.Provider
          value={{
            formStep,
            nextFormStep,
            prevFormStep,
            data,
            setFormValues
          }}
        >
          {children}
        </FormContext.Provider>
      );
}
