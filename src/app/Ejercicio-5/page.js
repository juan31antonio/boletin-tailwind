"use client"
import { useState } from "react";

export default function Grid(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <nav className="mx-auto p-4 md:pl-64">
                <div className="flex justify-between">    
                    <div className="flex items-center justify-start">
                        <img src="Tailwind_CSS_Logo.svg.png" className="h-8" alt="Logo" />
                    </div>
                    <div className="flex items-center w-full justify-end">
                        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded={isOpen ? "true" : "false"} onClick={() => setIsOpen(!isOpen)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <div className={`${isOpen ? "block" : "hidden"} flex justify-end w-full md:block md:w-auto`} id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                                <li>
                                    <a href="#" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </nav>
            <aside className="hidden md:block fixed left-0 top-0 h-full w-60 bg-personaliced-oscuro text-white p-4">
                <h2 className="text-lg font-bold mb-4">Menú</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded">Home</a></li>
                    <li><a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded">Settings</a></li>
                    <li><a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded">Contact</a></li>
                    <li><a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded">Exit</a></li>
                </ul>
            </aside>
            <div className="flex flex-wrap justify-center md:ml-64 mt-4 flex-col">
                <div className="flex justify-center mb-8">
                    <div className="flex flex-col rounded-2xl w-80 bg-[#ffffff] shadow-xl m-4">
                        <figure className="flex justify-center items-center rounded-2xl">
                            <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" className="rounded-t-2xl"/>
                        </figure>
                        <div className="flex flex-col p-8">
                            <div className="text-2xl font-bold   text-[#374151] pb-6">Card 1</div>
                            <div className=" text-lg   text-[#374151]">Descripcion del card 1</div>
                            <div className="flex justify-end pt-6">
                                <button className="bg-personaliced-suave text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Boton1</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-2xl w-80 bg-[#ffffff] shadow-xl m-4">
                        <figure className="flex justify-center items-center rounded-2xl">
                            <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" className="rounded-t-2xl"/>
                        </figure>
                        <div className="flex flex-col p-8">
                            <div className="text-2xl font-bold   text-[#374151] pb-6">Card 2</div>
                            <div className=" text-lg   text-[#374151]">Descripcion del card 2</div>
                            <div className="flex justify-end pt-6">
                                <button className="bg-personaliced-suave text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Boton2</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-2xl w-80 bg-[#ffffff] shadow-xl m-4">
                        <figure className="flex justify-center items-center rounded-2xl">
                            <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" className="rounded-t-2xl"/>
                        </figure>
                        <div className="flex flex-col p-8">
                            <div className="text-2xl font-bold   text-[#374151] pb-6">Card 3</div>
                            <div className=" text-lg   text-[#374151]">Descripcion del card 3</div>
                            <div className="flex justify-end pt-6">
                                <button className="bg-personaliced-suave text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Boton3</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-3 gap-4 p-4 border border-gray-300">
                        <div class="bg-gray-100 p-2 font-semibold">Nombre</div>
                        <div class="bg-gray-100 p-2 font-semibold">Edad</div>
                        <div class="bg-gray-100 p-2 font-semibold">Ciudad</div>
                        <div class="p-2">Juan Pérez</div>
                        <div class="p-2">25</div>
                        <div class="p-2">Madrid</div>
                        <div class="p-2">Ana Gómez</div>
                        <div class="p-2">30</div>
                        <div class="p-2">Barcelona</div>
                    </div>
                </div>
            </div>
        </>
    );
}
