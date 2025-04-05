import { useState } from "react";
import React from "react";
import { FaRegEye, FaRegEyeSlash, FaUser } from "react-icons/fa";
import loginVector from '../../Assets/loginVector.png'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-screen w-full flex">
            <div className="w-1/2 flex flex-col items-center justify-center p-10">
                <div className="w-full h-auto p-10">
                    <img src={loginVector} alt="login" />
                </div>
            </div>

            <div className="h-screen w-1/2 flex justify-center items-center p-5 bg-gradient-to-r from-[#04bcfc] to-[#00b8d4]">
                <div className="bg-white border-2 max-w-md w-full h-auto p-12 rounded-3xl shadow-2xl">
                    <div className="flex flex-col items-center justify-center">
                        <FaUser className="w-16 h-16 mb-5 text-[#04bcfc]" />
                        <h1 className="text-center font-bold text-[#04bcfc] text-4xl mb-5">
                            Iniciar sesión
                        </h1>
                        <div className="mt-5 w-full">
                            <input
                                type="text"
                                placeholder="Correo electrónico o Nombre de usuario"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="w-full p-4 mb-4 rounded-lg border-2 border-[#04bcfc] focus:outline-none focus:ring-2 focus:ring-[#04bcfc] transition-all"
                            />
                        </div>

                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Contraseña"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="w-full p-4 mb-4 rounded-lg border-2 border-[#04bcfc] focus:outline-none focus:ring-2 focus:ring-[#04bcfc] transition-all"
                            />
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                            >
                                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>

                        <p className="mt-3 mb-5 text-[#6b7280] hover:text-[#04bcfc] hover:cursor-pointer text-sm">
                            ¿Olvidaste tu contraseña?
                        </p>

                        <button
                            type="submit"
                            className="w-full py-3 font-bold text-white rounded-lg bg-[#04bcfc] hover:bg-[#00a0c7] transition-all"
                        >
                            INICIAR SESIÓN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
