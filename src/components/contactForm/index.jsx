import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomLabel from "../customLabel";
import { carOptions, propostalOption } from "../../utils";
import CustomSelect from "../customSelect";

const schema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  email: yup
    .string("El email no es correcto")
    .required("El email es requerido"),
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
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="flex flex-col gap-10 my-5 lg:my-0"
    >
      <div className="flex gap-7 flex-col sm:flex-row justify-between w-full">
        <div className="input-group">
          <CustomLabel label="Nombre:" isRequired={true} name="name" />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input id="name" {...field} placeholder="Ingresa tu nombre" />
            )}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className="input-group">
          <CustomLabel label="Email:" isRequired={true} name="email" />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input id="email" {...field} placeholder="Ingresa tu email" />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
      </div>

      <div className="input-group">
        <CustomLabel label="Teléfono:" isRequired={true} name="phone" />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <input id="phone" {...field} placeholder="Ingresa tu teléfono" />
          )}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div className="input-group">
        <CustomLabel label="¿Qué tipo de auto buscas?" isRequired={true} />
        <CustomSelect options={carOptions} name="carType" />
      </div>

      <div className="input-group">
        <CustomLabel label="Presupuesto aproximado:" isRequired={true} />
        <CustomSelect options={propostalOption} name="cost" />
      </div>

      <div className="input-group">
        <CustomLabel label="Comentarios adicionales:" name="message" />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <textarea
              id="message"
              {...field}
              placeholder="Ingresa tu comentario"
            />
          )}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
