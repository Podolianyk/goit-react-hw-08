import { Field, Formik, Form } from "formik";
// import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
// import toast from "react-hot-toast";

// const UserSchema = Yup.object().shape({
//   userName: Yup.string()
//     .min(3, "Too Short!")
//     .max(50, "Maximum 30 characters!")
//     .required("Required!"),
//   userNumber: Yup.string().min(3, "Too Short!").required("Required!"),
// });

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    // .unwrap()
    // .then((data) => toast.success(`Successful Log In!`))
    // .catch((error) => toast.error(`${error}`));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      //   validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.formGroup}>
          <label className={css.label}>
            Email
            <Field className={css.formInput} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.formInput} type="password" name="password" />
          </label>
        </div>
        <div className={css.btnContainer}>
          <button className={css.btn} type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
}
