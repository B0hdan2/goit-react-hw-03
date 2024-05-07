import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";

function ContactForm({ addUser }) {
  const nameId = useId();
  const telId = useId();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number cannot exceed 50 characters"),
  });

  const newUser = {
    name: "",
    number: "",
    id: "",
  };

  const hendelSubmit = (values, options) => {
    addUser({ ...values, id: nanoid() });
    options.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={newUser}
        onSubmit={hendelSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor={nameId}>
            <span>Name</span>
            <Field
              className={s.input}
              type='text'
              id={nameId}
              name='name'
            ></Field>
            <ErrorMessage name='name' component='span' className={s.error} />
          </label>
          <label className={s.label} htmlFor={telId}>
            <span>Number</span>
            <Field
              className={s.input}
              type='text'
              id={telId}
              name='number'
            ></Field>
            <ErrorMessage name='number' component='span' className={s.error} />
          </label>
          <button className={s.button} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

ContactForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default ContactForm;
