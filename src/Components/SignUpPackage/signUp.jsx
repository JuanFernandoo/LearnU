import { useState } from "react";
import React from "react";
import { FaRegEye, FaRegEyeSlash, FaTextHeight } from "react-icons/fa";
import { BsMagic, BsWindowStack } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { IoMdHappy } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import { LiaChessKingSolid } from "react-icons/lia";
import { FaArrowTrendUp } from "react-icons/fa6";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="h-screen w-full flex">
            <div className="h-screen w-1/2  bg-[#04bcfc] justify-center items-center flex flex-col">
                <div className="max-w-xl w-full flex flex-col z-10 p-10 ">
                    <h1 className="text-center  font-extrabold text-white text-2xl mb-5">
                        ¡Crea tu cuenta gratis ahora!
                    </h1>
                    <h3 className="text-center w-[80%] self-center text-white text-[14px]">
                        Regístrate y comienza a explorar el mundo del diseño de interfaces. ¡Es como un juego en el que eres el creador de todo!
                    </h3>
                    <div className="mt-10 text-center relative">
                        <input
                            type="text"
                            placeholder="Nombre y apellidos"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="w-[90%] p-2 mb-4 rounded-sm focus:outline-none focus:ring-2 focus:border-4 "
                        />
                        <input
                            type="text"
                            placeholder="Correo electronico"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-[90%] p-2 mb-4 rounded-sm focus:outline-none focus:ring-2 focus:border-4 focus:ring-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Nombre de usuario"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            className="w-[90%] p-2 mb-4 rounded-sm focus:outline-none focus:ring-2 focus:border-4 focus:ring-gray-400"
                        />
                        <input
                            type={showPassword ? "text" : "password"} placeholder="Contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-[90%] p-2 mb-4 rounded-sm focus:outline-none focus:ring-2 focus:border-4 focus:ring-gray-400"
                        />
                        <div
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-9 translate-y-[-42px] cursor-pointer text-gray-400" >
                            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </div>
                        <input
                            type="password"
                            placeholder="Confirmar Contraseña"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className="w-[90%] p-2 mb-10 rounded-sm focus:outline-none focus:ring-2 focus:border-4 focus:ring-gray-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-60 h-9 font-bold text-black rounded-3xl bg-[#fcec04] self-center focus:ring-2 focus:border-4 focus:ring-[#fcec04]]">
                        CREAR CUENTA
                    </button>
                </div>
            </div>
            <div className="w-1/2 bg-[#f1f1f1] flex items-center justify-center p-10">
                <div className="text-center max-w-md w-full">
                    <h2 className="text-2xl font-bold text-[#333] mb-4 bg-[#fcec04]">
                        Tu espacio para aprender y crear.
                    </h2>
                    <div className="flex justify-between mt-10 space-x-4">
                        <div className="w-24 items-center justify-center flex flex-col">
                            <BsMagic className="w-12 h-9 text-[#04bcfc] mb-4" />
                            <p className="w-10/12 text-[10px]">Diseño Visual Atractivo</p>
                        </div>
                        <div className="w-24 items-center justify-center flex flex-col">
                            <TfiWorld className="w-12 h-9 text-[#04bcfc] mb-4" />
                            <p className="w-10/12 text-[10px]">Navegación Fácil y Clara</p>
                        </div>
                        <div className="w-24 items-center justify-center flex flex-col">
                            <IoMdHappy className="w-12 h-9 text-[#04bcfc] mb-4" />
                            <p className="w-10/12 text-[10px]">Interactividad Divertida</p>
                        </div>
                        <div className="w-24 items-center justify-center flex flex-col">
                            <BsWindowStack className="w-12 h-9 text-[#04bcfc] mb-4" />
                            <p className="w-10/12 text-[10px]">Prototipos y Wireframes</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-10 space-x-4">
                        <div className="w-24 items-center justify-center flex flex-col">
                            <IoColorPalette className="w-12 h-9 text-[#04bcfc] mb-4" />
                            <p className="w-10/12 text-[10px]">Psicología del color</p>
                        </div>
                        <div className="w-24 items-center justify-center flex flex-col">
                            <FaTextHeight className="w-12 h-9 text-[#04bcfc] mb-4" />
                            <p className="w-10/12 text-[10px]">Tipografía y Psicología de las Fuentes</p>
                        </div>
                        <div className="w-24 items-center justify-center flex flex-col">
                            <LiaChessKingSolid className="w-12 h-9 text-[#04bcfc] mb-4" />
                            <p className="w-10/12 text-[10px]">Jerarquía Visual a través del Diseño</p>
                        </div>
                        <div className="w-24 items-center justify-center flex flex-col">
                            <FaArrowTrendUp className="w-12 h-9 text-[#04bcfc] mb-4" />
                            <p className="w-10/12 text-[10px]">Tendencias en Diseño de Interfaces</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;
