import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Palette,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedBackground } from "./components/animated-background";
import { FloatingShapes } from "./components/floating-shapes";
import { cursorTo } from "readline";
import RegistrationForm from "@/app/formulario-hubspot";

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container px-4 md:px-6 lg:px-8 flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Alejandro Colan</span>
            </Link>
          </div>

          <div className="ml-auto flex items-center space-x-2 text-black">
            <a href="/Alejandro-Colan-Rosenthal-CV.pdf" download>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4 text-black" />
              CV
            </Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container  px-4 md:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden">
          {/* Fondo animado */}
          <div className="absolute w-[100%] inset-0">
            <AnimatedBackground />
            <FloatingShapes />
          </div>

          {/* Gradiente de fondo sutil */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 w-[100%]"
            style={{ zIndex: 0 }}
          />

          <div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] relative"
            style={{ zIndex: 2 }}
          >
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hola, soy{" "}
                  <span className="text-primary text-white">Alejandro</span>
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Desarrollador Full Stack con experiencia sólida en Frontend,
                  actualmente especializado en Backend. Trabajo con Next.js,
                  Angular y tecnologías modernas para crear soluciones
                  escalables.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="https://github.com/jandro29" target="_blank">
                <Button size="lg" className="cursor-pointer">Ver Proyectos</Button>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=ascolanr@gmail.com" target="_blank">
                <Button variant="outline" size="lg" className="text-black cursor-pointer">
                  <Mail className="mr-2 h-4 w-4 text-black" />
                  Contactar
                </Button>
                </a>
              </div>
            </div>
            <div
              className="flex items-center justify-center relative"
              style={{ zIndex: 3 }}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Foto de perfil"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-primary/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="container px-4 md:px-6 lg:px-8 py-24 bg-gray-900/50"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sobre mí
            </h2>
            <p className="mt-4 text-gray-300 md:text-lg">
              Soy un desarrollador con 3 años de experiencia creando
              aplicaciones web. Me apasiona resolver problemas complejos y crear
              soluciones elegantes que impacten positivamente en la vida de las
              personas.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary text-white" />
                  <CardTitle className="text-white">Desarrollo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    Experiencia en desarrollo full-stack con tecnologías
                    modernas
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary text-white" />
                  <CardTitle className="text-white">Innovación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    Siempre explorando nuevas tecnologías y mejores prácticas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container px-4 md:px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Habilidades
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">Sass/SCSS</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">VTEX IO</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">phpMyAdmin </Badge>
                  <Badge variant="secondary">supabase</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  E-commerce & Plataformas
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">VTEX</Badge>
                  <Badge variant="secondary">VTEX IO</Badge>
                  <Badge variant="secondary">WordPress</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">VS Code</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="container px-4 md:px-6 lg:px-8 py-24 bg-gray-900/50"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Proyectos Destacados
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden bg-gray-800/50 border-gray-700">
                <div className="aspect-video bg-muted">
                  <Image
                    src="/proyecto-1.png"
                    alt="Proyecto 1"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">PointtAgencia</CardTitle>
                  <CardDescription className="text-gray-300">
                    Es una landing page que se realizó para una agencia de
                    marketing, con el objetivo de llegar a más clientes. Las
                    tecnologías utilizadas fueron GitHub, Angular, Tailwind y
                    PHP.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4 ">
                    <Badge variant="outline" className="text-xs text-white">
                      Angular Material
                    </Badge>
                    <Badge variant="outline" className="text-xs text-white">
                      Node.js
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/jandro29/pointtrepo"
                      target="_blank"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="cursor-pointer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Button>
                    </a>
                    <a
                      href="https://jandro29.github.io/pointtrepo/"
                      target="_blank"
                    >
                      <Button size="sm" className="cursor-pointer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden bg-gray-800/50 border-gray-700">
                <div className="aspect-video bg-muted">
                  <Image
                    src="/proyecto-2.png"
                    alt="Proyecto 2"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">CheckAuto</CardTitle>
                  <CardDescription className="text-gray-300">
                    De igual manera, es una landing page con la finalidad de
                    vender y comprar carros. A través del formulario, puedes
                    contactarte con el vendedor. Los lenguajes utilizados
                    también son Angular, Tailwind, GitHub y PHP.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="text-xs text-white">
                      Angular Material
                    </Badge>
                    <Badge variant="outline" className="text-xs text-white">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="text-xs text-white">
                      Tailwind
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/jandro29/checkauto"
                      target="_blank"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="cursor-pointer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Button>
                    </a>
                    <a
                      href="https://jandro29.github.io/checkauto/#/"
                      target="_blank"
                    >
                      <Button size="sm" className="cursor-pointer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden bg-gray-800/50 border-gray-700">
                <div className="aspect-video bg-muted">
                  <Image
                    src="/proyecto-3.png"
                    alt="Proyecto 3"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white"> AndeanRepublic</CardTitle>
                  <CardDescription className="text-gray-300">
                    Página e-commerce desarrollada con WordPress, Flatsome y
                    WooCommerce, orientada a clientes del extranjero. Ofrece
                    productos peruanos como chompas, gorros, guantes, ponchos,
                    cafés y experiencias de turismo andino, conectando
                    directamente a productores locales con compradores
                    internacionales.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="text-xs text-white">
                      WordPress
                    </Badge>
                    <Badge variant="outline" className="text-xs text-white">
                      Flatsome
                    </Badge>
                    <Badge variant="outline" className="text-xs text-white">
                      PHP
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://andeanrepublic.com/" target="_blank">
                      <Button size="sm" className="cursor-pointer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Sitio Web
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="container px-4 md:px-6 lg:px-8 py-24"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experiencia
            </h2>
            <div className="mt-8 space-y-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">
                        Desarrollador Frontend
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        Primera Empresa
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-white">
                      2020 - 2022
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    Como programador junior en prácticas, participé en el
                    desarrollo de páginas web frontend, realizando la
                    implementación de interfaces utilizando Tailwind CSS y
                    Angular Material. También me encargué de la corrección de
                    errores en el código, ajustes de diseño y modificaciones
                    funcionales según los requerimientos del proyecto. Además,
                    apoyé en el despliegue y carga de las páginas en entornos de
                    hosting.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">
                        Técnico en CCTV y Soporte en Videovigilancia
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        Empresa Anterior
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-white">
                      2022 - 2023
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    Durante mi periodo como técnico, me encargué de la
                    instalación de cámaras de seguridad en diversas tiendas de
                    Tai Loy, así como de la configuración de DVRs y la conexión
                    de los sistemas de videovigilancia a la red interna. Esto
                    permitía el monitoreo en tiempo real desde las computadoras
                    de la tienda. Además, brindé capacitación a los encargados
                    sobre el uso del sistema y realicé descargas de grabaciones
                    en caso de requerimientos específicos o incidentes pasados.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">
                        Desarrollador Web Full Stack
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        Empresa Actual
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-white">
                      2023 - Presente
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    Actualmente me desempeño desarrollando páginas web tanto en
                    frontend como en backend, brindando mantenimiento continuo y
                    solucionando errores en los sistemas. He trabajado en la
                    creación de sitios e-commerce utilizando plataformas como
                    WordPress y VTEX. Además, he desarrollado landing pages con
                    formularios funcionales integrados para campañas
                    específicas. En el ámbito de comercio electrónico, también
                    he gestionado la carga masiva de productos y la optimización
                    de contenido para una mejor experiencia del usuario.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="container px-4 md:px-6 lg:px-8 py-24 bg-gray-900/50"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contacto
            </h2>
            <p className="mt-4 text-center text-gray-300">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            <div className="mt-8 grid  md:grid-cols-2 w-[100%]">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary text-white" />
                  <span>ascolanr@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    className="cursor-pointer flex"
                    href="https://wa.link/aezlws"
                  >
                    <Phone className="h-5 w-5 text-primary text-white" />
                    <span className="ml-2 border-b-1">+51 933 534 091</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary text-white" />
                  <span>Lima, Perú</span>
                </div>
              </div>
              <Card className="bg-gray-800/50 border-gray-700 lg:w-[33rem]">
                <CardHeader>
                  <CardTitle className="text-white">
                    Envíame un mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                 <RegistrationForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6 ml-2" />
            <p className="text-center text-sm leading-loose text-gray-300 md:text-left">
              © 2025 Alejandro. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center space-x-4 mr-4">
            <Link href="https://github.com/jandro29" className="text-gray-300 hover:text-foreground cursor-pointer hover:text-white">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&to=ascolanr@gmail.com" className="text-gray-300 hover:text-foreground cursor-pointer hover:text-white">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
