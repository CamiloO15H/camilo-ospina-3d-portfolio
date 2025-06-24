const config = {
  // 1. Título principal del portafolio (para la pestaña del navegador y SEO)
  title: "Camilo Ospina | Desarrollador Full Stack | IA & Microservicios",

  // 2. Descripción de tu perfil (para SEO y compartir en redes)
  description: {
    long: "Explora el portafolio de Camilo Ospina, desarrollador Full Stack especializado en microservicios con Spring Boot, arquitectura limpia, integración de Inteligencia Artificial y QA Testing. Descubre proyectos como Emazon, CodeQuest y más. ¡Construyamos soluciones innovadoras juntos!",
    short:
      "Portafolio de Camilo Ospina: Desarrollador Full Stack enfocado en microservicios (Spring Boot), IA y QA Testing.",
  },

  // 3. Palabras clave para SEO
  keywords: [
    "Camilo Ospina",
    "portafolio",
    "desarrollador full stack",
    "microservicios",
    "Spring Boot",
    "Inteligencia Artificial",
    "AI",
    "QA Tester",
    "Java", // Añadimos futuras certificaciones y lenguajes clave
    "Angular", // Añadimos futuras certificaciones y lenguajes clave
    "React", // Si lo usas o planeas usarlo
    "Next.js",
    "Medellín", // Tu ubicación, relevante para búsquedas locales
    "Colombia",
    "arquitectura limpia",
    "APIs RESTful",
    "Git",
    "Docker",
    "JUnit",
    "Selenium",
    "Azure AI",
    "Emazon",
    "CodeQuest",
    "Ingeniería de Sistemas",
  ],

  // 4. Tu información básica
  author: "Camilo Ospina",
  email: "camiloospi12@gmail.com",
  // Si tienes un dominio personalizado para tu portafolio, ponlo aquí.
  // Por ahora, puedes dejar un placeholder o tu GitHub Pages/Vercel URL una vez lo despliegues.
  site: "https://camiloospina.vercel.app", // O tu futuro dominio/URL de Vercel/GitHub Pages

  // 5. Imagen para compartir en redes sociales (Open Graph Image)
  // Asegúrate de crear una imagen personalizada (ej. 1200x630px) y guardarla en public/assets/seo/og-image.png
  // Si no la creas, usa la que ya está, aunque no te represente.
  get ogImg() {
    return this.site + "/assets/seo/og-image.png"; // Mantén esta línea, usa la ruta a tu imagen
  },

  // 6. Tus enlaces de redes sociales
  social: {
    // Si no usas Twitter, Instagram o Facebook, puedes dejar los enlaces vacíos ("") o eliminarlos.
    twitter: "https://x.com/CamiloOspinaHe1?s=09", // Si tienes Twitter profesional, ponlo aquí
    linkedin: "https://www.linkedin.com/in/camilo-ospina-2000",
    instagram: "https://www.instagram.com/camiloospina_/", // Si no lo usas profesionalmente, puedes quitarlo
    facebook: "https://www.facebook.com/camilo.ospina.589/", // Si no lo usas profesionalmente, puedes quitarlo
    github: "https://github.com/CamiloO15H",
  },
};

export { config };