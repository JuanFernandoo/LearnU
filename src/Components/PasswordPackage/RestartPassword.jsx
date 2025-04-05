import { useState } from "react";
import { IoIosLock } from "react-icons/io";

const RestartPassword = () => {
    const [email, setEmail] = useState("");

    return (
        <div className="relative h-screen w-full">
            <div className="absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-[#04bcfc] to-[#04bcfc] w-full h-full"></div>
            <div className="flex items-center justify-center h-full">
                <div className="bg-slate-100 border-2 max-w-md w-full h-auto p-10 rounded-lg shadow-lg z-20">
                    <div className="flex flex-col items-center justify-center">
                        <IoIosLock className="w-10 h-10 mb-5 text-[#417384]" />
                        <h1 className="text-center font-extrabold text-[#417384] text-3xl mb-5">
                            Recuperar contraseña
                        </h1>
                        <p className="mt-2 mb-2 text-[#538190] text-center text-[12px]">
                            Ingrese el correo electronico con el quue se registro previamnte, se le enviara un codigo de verificación para recuperer sus contraseña
                        </p>
                        <div className="mt-5 text-center relative w-full">
                            <input
                                type="text"
                                placeholder="Ingrese su correo electronico"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="w-[90%] p-2 mb-4 rounded-lg  border-2 border-[#67b8d3] focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-60 h-9 font-bold text-black rounded-3xl bg-[#fcec04] self-center"
                        >
                            Recuperar Contraseña
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestartPassword;
