import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Logo from "@/assets/images/icons/logo.png";
import CustomLabel from "../../components/customLabel";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  user: yup
    .string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

const AdminLogin = () => {
  const navigation = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  // useEffect(() => {
  //     if (token) {
  //       navigation("/wellcome");
  //     }
  //   }, [token]);

  const onSubmit = async (data) => {
    console.log("TCL: onSubmit -> data", data);
    navigation("/admin/banners")
    // try {
    //   const user = await loginUser(data?.user, data?.password);
    //   login(user.user, user.token);
    //   notify("success", user.message.es);
    //   if (user?.token) {
    //     navigation("/wellcome");
    //   } else {
    //     navigation("/");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   notify("error", "Credenciales inválidas");
    // }
  };
  return (
    <section className="h-screen flex justify-center items-center px-20">
      <div className="rounded-2xl flex flex-col md:flex-row w-full lg:max-w-4xl md:h-100 bg-black shadow-md shadow-black">
        <div className=" w-full flex justify-center items-center bg-black rounded-t-2xl md:w-1/2 md:rounded-l-xl">
          <img
            src={Logo}
            alt="Logo autolatino"
            className="object-center object-cover"
          />
        </div>

        <div className="w-full flex items-center bg-white rounded-b-2xl md:rounded-b-none md:rounded-br-2xl p-8 md:w-1/2  md:px-8 md:rounded-r-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5 md:roundedl-r-2xl"
          >
            <h4 className="text-2xl font-bold">Bienvenido Alex</h4>
            <div>
              <CustomLabel isRequired label="Usuario" name="user" />
              <Controller
                name="user"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    id="user"
                    type="text"
                    placeholder="Usuario"
                    alt="Campo para ingresar email"
                    {...field}
                  />
                )}
              />
              {errors.user && <p>{errors.user.message}</p>}
            </div>
            <div>
              <CustomLabel isRequired label="Contraseña" name="password" />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    alt="Campo para ingresar contraseña"
                    {...field}
                  />
                )}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="flex justify-between px-10 py-5">
              <button className="btn-submit">Ingresar</button>
              <button
                className="btn-submit"
                onClick={(e) => {
                  e.preventDefault();
                  navigation("/");
                }}
              >
                ir a web
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
