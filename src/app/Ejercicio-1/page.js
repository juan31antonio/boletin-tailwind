export default function Card(){
  return(
    <div className="bg-green-100 m-4 p-3 rounded-lg max-w-sm">
      <p className="text-2xl font-bold">Este es el titulo</p><br/>
      <p className="break-words whitespace-pre-line text-gray-500">Esto es la descripcion de la card</p><br/>
      <button className="bg-blue-600 text-white rounded-lg hover:bg-red-700 p-2">Boton</button>
    </div>
  );
}