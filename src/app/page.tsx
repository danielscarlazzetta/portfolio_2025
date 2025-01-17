import Image from "next/image";
import { technologies } from "@/data/technologies";
import { proyectos } from "@/data/proyects";

import { FaGit, FaLinkedinIn } from "react-icons/fa6";
import Contact from "@/component/contact";

export default function Home() {
  return (
    <div>
      <header className="bg-base-200 shadow-md">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Sobre mi</a>
                </li>
                <li>
                  <a>Proyectos</a>
                </li>
                <li>
                  <a>Tecnologias</a>
                </li>
                <li>
                  <a>Contacto</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Daniel Scarlazzetta</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Sobre mi</a>
              </li>
              <li>
                <a>Proyectos</a>
              </li>
              <li>
                <a>Tecnologias</a>
              </li>
              <li>
                <a>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 m-12 p-12">
        <div className="self-center">
          <h1 className="text-3xl font-bold mt-4">Daniel Scarlazzetta</h1>
          <p className="text-lg text-gray-600 mt-2">
            Ingeniero informatico, con alta capacidad de resolucion de problemas
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

        <h2 className="text-3xl font-bold mt-4">Sobre mí</h2>
        <p className="text-lg text-gray-600 mt-2">
          Ingeniero informatico, autodidacta, estudie en centro de formacion
          tecnica santo tomás, e complementado mis estudios en bootcam de alura
          latam, cursos de udemy y videos en youtube.
        </p>
        <p className="text-lg text-gray-600 mt-2">
          Dentro de mi juventud e trabajado en diversos rubros durante mi vida,
          ya sea como vendendor, cajero, ingeniero fullstac, hasta dechofer
        </p>
      </section>

      <section className="container mx-auto my-10">
        <h2 className="text-2xl font-bold text-center mb-6">Tecnologías</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech) => {
            const IconComponent = tech.icon; // Obtén el componente de ícono
            return (
              <div key={tech.name} className="text-center">
                <IconComponent className="text-5xl mx-auto" />{" "}
                {/* Renderiza el ícono */}
                <p className="mt-2">{tech.name}</p>
              </div>
            );
          })}
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
        <form action="" className="max-w-lg mx-auto">
          <label className="input input-bordered flex items-center gap-2 mb-4">
            Name
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-4">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-4">
            Mensaje
            <input
              type="text"
              className="grow"
              placeholder="Escribe acá tu mensaje"
            />
          </label>
          <button className="btn btn-circle bg-purple-800 hover:bg-purple-500 w-full">
            Enviar
          </button>
        </form>
      </section>

      <section className="container mx-auto my-10">
        <Contact />
      </section>

      <footer className="bg-base-200 py-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">Sígueme en:</p>

          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGit className="text-2xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
