/** @format */

import { Story, Meta } from "@storybook/react/types-6-0";
import { InputField, Props } from ".";
import { useInput } from "../../../hooks/useInput";
import { utilityIsValidEmail } from "../../..//utils/validate/isValidEmail";
import { utilityIsValidSdiNumber } from "../../../utils/validate/isValidSdiNumber";
import {
  INPUT_MAX_LENGHT_TAXCODE,
  utilityIsValidTaxCode,
} from "../../../utils/validate/isValidTaxCode";
import {
  INPUT_MAX_LENGHT_VATNUMBER,
  utilityIsValidVatNumber,
} from "../../../utils/validate/isValidVatNumber";
import {
  INPUT_MAX_YEAR,
  INPUT_MIN_YEAR,
  utilityIsValidYear,
} from "../../../utils/validate/isValidYear";
import { Providers } from "../../../Providers";

export default {
  title: "Example/InputField",
  component: InputField,
  argTypes: {
    type: { table: { disable: true } },
    dataCy: { table: { disable: true } },
    onChange: { table: { disable: true } },
    value: { table: { disable: true } },
  },
} as Meta;

//#region ::: DEFAULT
const Template: Story<Props> = (props) => {
  const [value, onChange] = useInput("");

  return (
    <Providers>
      <InputField {...props} value={value} onChange={onChange} />
    </Providers>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: "Generic",
};
//#endregion

//#region ::: EMAIL
const TemplateEmail: Story<Props> = (props) => {
  const [value, onChange, isValid] = useInput("", utilityIsValidEmail);

  return (
    <Providers>
      <InputField
        {...props}
        value={value}
        onChange={onChange}
        isValid={isValid}
      />
    </Providers>
  );
};

export const Email = TemplateEmail.bind({});

Email.args = {
  errorMessage: "Email non valida",
  label: "Email",
};
//#endregion

//#region ::: YEAR
const TemplateYear: Story<Props> = (props) => {
  const [value, onChange, isValid] = useInput("", utilityIsValidYear);

  return (
    <Providers>
      <InputField
        {...props}
        value={value}
        onChange={onChange}
        isValid={isValid}
        errorMessage={`L'anno inserito deve essere un numero compreso tra ${INPUT_MIN_YEAR} e ${INPUT_MAX_YEAR}`}
        maxLength={4}
      />
    </Providers>
  );
};

export const Year = TemplateYear.bind({});

Year.args = {
  label: "Year",
};
//#endregion

//#region ::: SDI NUMBER
const TemplateSdiNumber: Story<Props> = (props) => {
  const [value, onChange, isValid] = useInput(
    "",
    utilityIsValidSdiNumber,
    true
  );

  return (
    <Providers>
      <InputField
        {...props}
        value={value}
        onChange={onChange}
        isValid={isValid}
      />
    </Providers>
  );
};

export const SdiNumber = TemplateSdiNumber.bind({});

SdiNumber.args = {
  label: "Sdi Number",
  errorMessage: "Numero Sdi non valido",
};
//#endregion

//#region ::: TAX CODE
const TemplateTaxCode: Story<Props> = (props) => {
  const [value, onChange, isValid] = useInput("", utilityIsValidTaxCode);

  return (
    <Providers>
      <InputField
        {...props}
        value={value}
        onChange={onChange}
        isValid={isValid}
        maxLength={INPUT_MAX_LENGHT_TAXCODE}
      />
    </Providers>
  );
};

export const TaxCode = TemplateTaxCode.bind({});

TaxCode.args = {
  label: "Tax Code",
  errorMessage: "Codice fiscale non valido",
};
//#endregion

//#region ::: VAT NUMBER
const TemplateVatNumber: Story<Props> = (props) => {
  const [value, onChange, isValid] = useInput("", utilityIsValidVatNumber);

  return (
    <Providers>
      <InputField
        {...props}
        value={value}
        onChange={onChange}
        isValid={isValid}
        maxLength={INPUT_MAX_LENGHT_VATNUMBER}
      />
    </Providers>
  );
};

export const VatNumber = TemplateVatNumber.bind({});

VatNumber.args = {
  label: "VAT Number",
  errorMessage: "Partita IVA non valida",
};
//#endregion
