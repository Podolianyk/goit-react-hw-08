import { Formik, Form, Field } from "formik";
import { useId } from "react";

import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.userName,
      number: values.userNumber,
      id: Date.now(),
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ userName: "", userNumber: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={`${fieldId}-userName`}>Name</label>
        <Field
          className={css.formInput}
          type="text"
          name="userName"
          id={`${fieldId}-userName`}
        />

        <label htmlFor={`${fieldId}-userNumber`}>Number</label>
        <Field
          className={css.formInput}
          type="text"
          name="userNumber"
          id={`${fieldId}-userNumber`}
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
