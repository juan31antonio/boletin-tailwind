export default function Flexbox(){
    return(
        <>
            <section className="flex justify-center items-center flex-col m-4">
                <p className="text-3xl">Esto es el titulo</p>
                <p className="text-xl">Esto es el subtitulo</p>
            </section>
            <section className="flex justify-center items-start">
                <div className="flex flex-col items-center w-1/2">
                    <div className="flex flex-col rounded-2xl w-80 bg-[#ffffff] shadow-xl m-4">
                        <figure className="flex justify-center items-center rounded-2xl">
                            <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" className="rounded-t-2xl"/>
                        </figure>
                        <div className="flex flex-col p-8">
                            <div className="text-2xl font-bold   text-[#374151] pb-6">Card 1</div>
                            <div className=" text-lg   text-[#374151]">Descripcion del card 1</div>
                            <div className="flex justify-end pt-6">
                                <button className="bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Boton1</button>
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
                                <button className="bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Boton2</button>
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
                                <button className="bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Boton3</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-start w-1/2">
                    <ul>
                        <li>
                            <a href="#" className="text-blue-500 hover:underline">Enlace 1</a>
                        </li>
                        <li>
                            <a href="#" className="text-red-500 hover:text-red-700">Enlace 2</a>
                        </li>
                        <li>
                            <a href="#" className="text-green-500 font-bold">Enlace 3</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
