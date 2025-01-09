import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-base-200 shadow-md">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <a className="text-xl font-bold">Tu Nombre</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Sobre mí</a>
              </li>
              <li>
                <a>Proyectos</a>
              </li>
              <li>
                <a>Tecnologías</a>
              </li>
              <li>
                <a>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="container mx-auto text-center my-10">
        <div className="avatar">
          <div className="w-32 rounded-full mx-auto">
            <Image src="/tu-foto.jpg" alt="Tu Foto" width={128} height={128} />
          </div>
        </div>
        <h1 className="text-3xl font-bold mt-4">Tu Nombre</h1>
        <p className="text-lg text-gray-600 mt-2">
          Desarrollador Web | Apasionado por el código y las buenas prácticas
        </p>
      </section>

      <section className="container mx-auto my-10">
  <h2 className="text-2xl font-bold text-center mb-6">Tecnologías</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <div className="text-center">
      <i className="devicon-react-original text-5xl"></i>
      <p className="mt-2">React</p>
    </div>
    <div className="text-center">
      <i className="devicon-nextjs-original text-5xl"></i>
      <p className="mt-2">Next.js</p>
    </div>
    <div className="text-center">
      <i className="devicon-tailwindcss-plain text-5xl"></i>
      <p className="mt-2">TailwindCSS</p>
    </div>
  </div>
</section>

<section className="container mx-auto my-10">
  <h2 className="text-2xl font-bold text-center mb-6">Mis Proyectos</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h3 className="card-title">Proyecto 1</h3>
        <p>Descripción breve del proyecto.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ver más</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="container mx-auto my-10">
  <h2 className="text-2xl font-bold text-center mb-6">Contacto</h2>
  <form className="max-w-lg mx-auto">
    <div className="form-control mb-4">
      <label className="label">Nombre</label>
      <input type="text" placeholder="Tu nombre" className="input input-bordered" />
    </div>
    <div className="form-control mb-4">
      <label className="label">Email</label>
      <input type="email" placeholder="Tu email" className="input input-bordered" />
    </div>
    <div className="form-control mb-4">
      <label className="label">Mensaje</label>
      <textarea placeholder="Escribe tu mensaje" className="textarea textarea-bordered"></textarea>
    </div>
    <button className="btn btn-primary w-full">Enviar</button>
  </form>
</section>

<footer className="bg-base-200 py-4">
  <div className="container mx-auto text-center">
    <p className="mb-4">Sígueme en:</p>
    <div className="flex justify-center space-x-4">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin text-2xl"></i>
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <i className="fab fa-github text-2xl"></i>
      </a>
    </div>
  </div>
</footer>


    </div>
  );
}
