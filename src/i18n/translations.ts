export const languages = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'pt';

export const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.cta': 'Começar',

    // Hero
    'hero.eyebrow': 'Lançamento',
    'hero.title': 'Construa landing pages ultrarrápidas',
    'hero.subtitle': 'Starter enxuto com Astro, Tailwind, imagens otimizadas e boas práticas de SEO.',
    'hero.cta': 'Criar agora',

    // Features
    'features.performance.title': 'Performance A+',
    'features.performance.desc': 'Astro com hydration zero e assets otimizados.',
    'features.seo.title': 'SEO-first',
    'features.seo.desc': 'HTML limpo, OG/meta e sitemap automáticos.',
    'features.dx.title': 'DX rápida',
    'features.dx.desc': 'Hot reload, Tailwind JIT e build leve.',

    // CTA
    'cta.title': 'Pronto para lançar?',
    'cta.subtitle': 'Publique em minutos com build estático, CSS purgado e assets leves.',
    'cta.button': 'Começar agora',

    // Contact Form
    'contact.title': 'Entre em contato',
    'contact.subtitle': 'Preencha o formulário abaixo e entraremos em contato em breve.',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.subject': 'Assunto',
    'contact.message': 'Mensagem',
    'contact.submit': 'Enviar mensagem',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error': 'Erro ao enviar. Tente novamente.',
    'contact.sending': 'Enviando...',
    'contact.subjects.quote': 'Orçamento',
    'contact.subjects.support': 'Suporte',
    'contact.subjects.partnership': 'Parceria',
    'contact.subjects.other': 'Outro',

    // About
    'about.title': 'Sobre nós',
    'about.subtitle': 'Conheça mais sobre nossa história e missão.',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.links': 'Links',
    'footer.contact': 'Contato',

    // 404
    '404.title': 'Página não encontrada',
    '404.description': 'A página que você procura pode ter sido movida ou não existe mais.',
    '404.back': 'Voltar ao início',

    // Meta
    'meta.title': 'Landing Rápida',
    'meta.description': 'Starter Astro + Tailwind para LPs ultrarrápidas com OG tags.',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Started',

    // Hero
    'hero.eyebrow': 'New Release',
    'hero.title': 'Build ultra-fast landing pages',
    'hero.subtitle': 'Lean starter with Astro, Tailwind, optimized images, and SEO best practices.',
    'hero.cta': 'Start now',

    // Features
    'features.performance.title': 'A+ Performance',
    'features.performance.desc': 'Astro with zero hydration and optimized assets.',
    'features.seo.title': 'SEO-first',
    'features.seo.desc': 'Clean HTML, OG/meta tags, and automatic sitemap.',
    'features.dx.title': 'Fast DX',
    'features.dx.desc': 'Hot reload, Tailwind JIT, and lightweight builds.',

    // CTA
    'cta.title': 'Ready to launch?',
    'cta.subtitle': 'Publish in minutes with static builds, purged CSS, and lightweight assets.',
    'cta.button': 'Get started now',

    // Contact Form
    'contact.title': 'Get in touch',
    'contact.subtitle': 'Fill out the form below and we\'ll get back to you soon.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.submit': 'Send message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending. Please try again.',
    'contact.sending': 'Sending...',
    'contact.subjects.quote': 'Quote',
    'contact.subjects.support': 'Support',
    'contact.subjects.partnership': 'Partnership',
    'contact.subjects.other': 'Other',

    // About
    'about.title': 'About us',
    'about.subtitle': 'Learn more about our story and mission.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.links': 'Links',
    'footer.contact': 'Contact',

    // 404
    '404.title': 'Page not found',
    '404.description': 'The page you\'re looking for may have been moved or no longer exists.',
    '404.back': 'Back to home',

    // Meta
    'meta.title': 'Fast Landing',
    'meta.description': 'Astro + Tailwind starter for ultra-fast LPs with OG tags.',
  },

  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.contact': 'Contacto',
    'nav.cta': 'Empezar',

    // Hero
    'hero.eyebrow': 'Lanzamiento',
    'hero.title': 'Crea landing pages ultrarrápidas',
    'hero.subtitle': 'Starter ligero con Astro, Tailwind, imágenes optimizadas y buenas prácticas de SEO.',
    'hero.cta': 'Crear ahora',

    // Features
    'features.performance.title': 'Rendimiento A+',
    'features.performance.desc': 'Astro con hydration cero y assets optimizados.',
    'features.seo.title': 'SEO-first',
    'features.seo.desc': 'HTML limpio, OG/meta y sitemap automáticos.',
    'features.dx.title': 'DX rápida',
    'features.dx.desc': 'Hot reload, Tailwind JIT y build ligero.',

    // CTA
    'cta.title': '¿Listo para lanzar?',
    'cta.subtitle': 'Publica en minutos con build estático, CSS purgado y assets ligeros.',
    'cta.button': 'Empezar ahora',

    // Contact Form
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Completa el formulario y nos pondremos en contacto pronto.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar mensaje',
    'contact.success': '¡Mensaje enviado con éxito!',
    'contact.error': 'Error al enviar. Intenta de nuevo.',
    'contact.sending': 'Enviando...',
    'contact.subjects.quote': 'Cotización',
    'contact.subjects.support': 'Soporte',
    'contact.subjects.partnership': 'Alianza',
    'contact.subjects.other': 'Otro',

    // About
    'about.title': 'Sobre nosotros',
    'about.subtitle': 'Conoce más sobre nuestra historia y misión.',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.links': 'Enlaces',
    'footer.contact': 'Contacto',

    // 404
    '404.title': 'Página no encontrada',
    '404.description': 'La página que buscas puede haber sido movida o ya no existe.',
    '404.back': 'Volver al inicio',

    // Meta
    'meta.title': 'Landing Rápida',
    'meta.description': 'Starter Astro + Tailwind para LPs ultrarrápidas con OG tags.',
  },
} as const;

export type TranslationKey = keyof typeof translations.pt;
