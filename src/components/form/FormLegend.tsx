import {ReactNode} from 'react'

interface FormLegendProps {
  children: ReactNode;
}

const FormLegend = ({children}: FormLegendProps) => {
  return   <legend className="uppercase text-orange-500 text-[0.8125rem] tracking-[0.0581rem] font-bold mb-4">
      {children}
    </legend>
};

export default FormLegend;
