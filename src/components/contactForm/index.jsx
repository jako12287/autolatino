import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  email: yup.string("El email no es correcto").required("El email es requerido"),
  phone: yup.string().required("El telefono es requerido"),
  message: yup.string().required("Escribe una mensaje"),
});

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <input id="name" {...field} />}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
