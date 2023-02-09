import React from 'react';
import { Simple } from "@joseafs-seedz/template-libs/components/simple"
import { FormSimple } from "@joseafs-seedz/template-libs/components/form/scheduling"
import { FormikScheduling } from "@joseafs-seedz/template-libs/components/formik/scheduling"
import { ButtonText } from "@joseafs-seedz/template-libs/components/buttons/text"

export default () => (
  <div>
    <Simple />
    <FormSimple />
    <FormikScheduling />
  </div>
);

document.addEventListener('load', () => {
  console.log('Carregou: ', document.getElementById('my-test'));
});
