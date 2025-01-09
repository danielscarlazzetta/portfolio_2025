import Image from "next/image";
import { technologies } from "@/data/technologies";
import { proyectos } from "@/data/proyects";

export default function Home() {
  return (
    <div>
      <header className="bg-base-200 shadow-md">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <a className="text-xl font-bold">Daniel Scarlazzetta</a>
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
          <div className="w-64 rounded-full mx-auto">
            <Image
              src="/img/perfil.png"
              alt="Tu Foto"
              width={200}
              height={200}
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold mt-4">Daniel Scarlazzetta</h1>
        <p className="text-lg text-gray-600 mt-2">
          información personal, de lo mas general a lo mas especifíco
        </p>
      </section>

      <section className=" grid grid-cols-1 md:grid-cols-2 m-12 p-12  ">
        <div>
          <h1 className="text-3xl font-bold mt-4">Daniel Scarlazzetta</h1>
          <p className="text-lg text-gray-600 mt-2">
            información personal, de lo mas general a lo mas especifíco
          </p>
        </div>
        <div className="avatar">
          <div className="w-64 rounded-full mx-auto">
            <Image
              src="/img/perfil.png"
              alt="Tu Foto"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto my-10">
        <h2 className="text-2xl font-bold text-center mb-6">Tecnologías</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="text-center">
              <i className={`${tech.icon} text-5xl`}></i>
              <p className="mt-2">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto my-10">
        <h2 className="text-2xl font-bold text-center mb-6">Mis Proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {proyectos.map((pp) => (
            <div
              key={pp.name}
              className="card bg-base-100 image-full w-130 shadow-xl"
            >
              <figure>
                <img src="/img/perfil.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{pp.name}</h2>
                <p>{pp.desc}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Ver más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto my-10">
        <h2 className="text-2xl font-bold text-center mb-6">Contacto</h2>
        <form className="max-w-lg mx-auto">
          <div className="form-control mb-4">
            <label className="label">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Tu email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Mensaje</label>
            <textarea
              placeholder="Escribe tu mensaje"
              className="textarea textarea-bordered"
            ></textarea>
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
