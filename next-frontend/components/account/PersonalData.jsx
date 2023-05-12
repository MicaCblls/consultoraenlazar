import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { FaSave } from "react-icons/fa";
import data from "@/public/countries.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PersonalData({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    occupation: "",
    country: "",
    company: "",
    email: "",
  });
  async function getProfile() {
    try {
      // setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          `firstName, lastName, phone, occupation, country, company, email`
        )
        .eq("email", user.email);

      if (error /* && status !== 406 */) {
        throw error;
      }

      if (data.length) {
        setInput({
          firstName: data[0].firstName,
          lastName: data[0].lastName,
          phone: data[0].phone,
          occupation: data[0].occupation,
          country: data[0].country,
          company: data[0].company,
          email: data[0].email,
        });
      }
    } catch (error) {
      return toast.error("Error al cargar los datos de usuario");
    }
  }
  useEffect(() => {
    if (session) {
      getProfile();
    }
  }, [session]);

  function handleOnChange(event) {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function updateProfile(e) {
    e.preventDefault();

    try {
      // setLoading(true);

      const updates = {
        id: user.id,
        firstName: input.firstName,
        lastName: input.lastName,
        phone: input.phone,
        occupation: input.occupation,
        country: input.country,
        company: input.company,
        updated_at: new Date().toISOString(),
      };

      const { data, error, status } = await supabase
        .from("profiles")
        .update(updates)
        .eq("id", user.id);

      if (error) throw error;

      if (status === 204) return toast.info("Datos actualizados");
    } catch (error) {
      return toast.error("Error al actualizar los datos");
    } finally {
      // setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ width: "00px" }}
      />
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex w-3/4 justify-center items-center">
          <form className="w-full xl:w-3/4" onSubmit={updateProfile}>
            <div className="md:flex gap-4 xl:w-full">
              <div className="pb-2 w-full">
                <label className="font-semibold" htmlFor="firstName">
                  Nombre:{" "}
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={input.firstName}
                  onChange={handleOnChange}
                  className="flex w-full h-10 md:h-[3.3rem] py-1 px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl text-sm md:text-lg bg-transparent"
                />
              </div>
              <div className="pb-2 w-full">
                <label className="font-semibold" htmlFor="lastName">
                  Apellido:{" "}
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={input.lastName}
                  onChange={handleOnChange}
                  className="flex w-full h-10 md:h-[3.3rem] py-1 px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl text-sm md:text-lg bg-transparent"
                />
              </div>
            </div>
            <div className="md:flex gap-4 ">
              <div className="pb-2 w-full">
                <label className="font-semibold" htmlFor="phone">
                  Teléfono:{" "}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={input.phone}
                  onChange={handleOnChange}
                  className="flex w-full h-10 md:h-[3.3rem] py-1 px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl text-sm md:text-lg bg-transparent"
                />
              </div>
              <div className="pb-2 w-full">
                <label className="font-semibold" htmlFor="occupation">
                  Ocupación:{" "}
                </label>
                <input
                  id="occupation"
                  name="occupation"
                  type="text"
                  value={input.occupation}
                  onChange={handleOnChange}
                  className="flex w-full h-10 md:h-[3.3rem] py-1 px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl text-sm md:text-lg bg-transparent"
                />
              </div>
            </div>
            <div className="pb-2">
              <label className="font-semibold" htmlFor="company">
                Empresa:{" "}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={input.company}
                onChange={handleOnChange}
                className="flex w-full h-10 md:h-[3.3rem] py-1 px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl text-sm md:text-lg bg-transparent"
              />
            </div>
            <div className="pb-2">
              <label htmlFor="country" className="font-semibold">
                País:
              </label>
              <select
                name="country"
                id="country"
                className="flex w-full h-10 md:h-[3.3rem] py-1 px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl text-sm md:text-lg bg-transparent"
                onChange={handleOnChange}
                defaultValue={
                  input.country !== "" ? input.country : "Argentina"
                }
              >
                {data.countries?.map((country) => (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center p-5">
              <button
                // className='button primary block'
                /*            disabled={disabled} */
                type="submit"
                // disabled={loading}
                className={
                  /* disabled
                  ?  "bg-grey rounded-3xl py-3 px-10 font-semibold uppercase self-center md:self-end"
                  :*/ "bg-yellow rounded-full py-2 px-6 md:px-10 font-semibold uppercase self-center md:self-end"
                }
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
