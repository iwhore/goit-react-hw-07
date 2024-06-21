import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import clsx from "clsx";
import css from "./ContactForm.module.css"

export default function ContactForm() {
  const textId = useId();
  const telId = useId();
  const dispatch = useDispatch();

  const handleSubmite = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const initialValues = { name: "", number: "" };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/, {
      message: "Invalid phone number",
      excludeEmptyString: false,
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmite}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <label className={css.label} htmlFor={textId}>
          Name
        </label>
        <Field className={css.input} name="name" type="text" id={textId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={clsx(css.label, css.margin)} htmlFor={telId}>
          Number
        </label>
        <Field className={css.input} name="number" type="tel" id={telId} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}



 