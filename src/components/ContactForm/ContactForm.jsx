import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
// import * as Yup from "yup";
import clsx from "clsx";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const id = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ id: "", name: "", number: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={clsx(css.form)}>
        <label className={clsx(css.label)} htmlFor={`${id}-name`}>
          Name
        </label>
        <Field className={clsx(css.field)} id={`${id}-name`} name="name" />
        <ErrorMessage
          className={clsx(css.error)}
          name="name"
          component="span"
        />
        <label className={clsx(css.number)} htmlFor={`${id}-number`}>
          Number
        </label>
        <Field className={clsx(css.number)} id={`${id}-number`} name="number" />
        <button className={clsx(css.button)} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
