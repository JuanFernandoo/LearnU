import { useState } from "react";
import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Signup = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="h-screen w-full bg-gradient-to-r from-blue-500 to to-blue-50 flex">
            <div className="flex-1 flex items-center justify-start">
                <div className="max-w-xl w-full  flex flex-col z-10 translate-x-10 p-10">
                    <h1 className="text-center  font-extrabold text-white text-2xl">
                        ¡Crea tu cuenta gratis ahora!
                    </h1>
                    <div className="mt-10 text-center relative">
                        <input
                            type="text"
                            placeholder="Nombre y apellidos"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="w-[90%] p-2 mb-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Correo electronico"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-[90%] p-2 mb-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Nombre de usuario"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            className="w-[90%] p-2 mb-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <input
                            type={showPassword ? "text" : "password"} placeholder="Contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-[90%] p-2 mb-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <div
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-9 translate-y-[-40px] cursor-pointer text-gray-400" >
                            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </div>
                        <input
                            type="password"
                            placeholder="Confirmar Contraseña"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className="w-[90%] p-2 mb-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-72 text-black rounded-lg bg-yellow-400 self-center">
                        Registrarse
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Signup;
