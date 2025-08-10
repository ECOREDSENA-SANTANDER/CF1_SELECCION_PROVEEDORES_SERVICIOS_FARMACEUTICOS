export default {
  global: {
    Name: 'Fundamentos técnicos y normativos del sector farmacéutico',
    Description:
      'Para desempeñarse con eficacia en el ámbito de los servicios farmacéuticos, es fundamental contar con criterios claros para la evaluación y selección de proveedores, dado el impacto que estas decisiones tienen sobre la calidad, seguridad y disponibilidad de los productos entregados al usuario final. En este contexto, se abordan aspectos clave que permiten fortalecer las capacidades para analizar marcos normativos, condiciones comerciales y estándares de calidad, proporcionando herramientas teóricas y prácticas que respaldan una toma de decisiones estratégica en un entorno exigente y en constante evolución.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Análisis de las características del negocio farmacéutico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Capacidad de compra y almacenamiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelo de operación en servicios farmacéuticos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Descripción de las características de los productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación de productos farmacéuticos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Clasificación de proveedores farmacéuticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación de proveedores farmacéuticos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Descripción de las características de los productos farmacéuticos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Dispensación y distribución de medicamentos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oI5R6D2EPnU',
    },
    {
      tema: 'Análisis de las características del negocio farmacéutico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Proceso de recepción de medicamentos y dispositivos médicos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GUI1LIrWu0s',
    },
  ],
  glosario: [
    {
      termino: 'ADRES',
      significado:
        'entidad pública colombiana adscrita al Ministerio de Salud y Protección Social, encargada de administrar y garantizar el flujo adecuado de los recursos del sistema de salud en Colombia.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'conjunto de acciones destinadas a conservar medicamentos en condiciones adecuadas hasta su entrega o uso.',
    },
    {
      termino: 'Buenas Prácticas de Almacenamiento (BPA)',
      significado:
        'normas que garantizan que los medicamentos se guarden en condiciones adecuadas de temperatura, humedad y orden para que no pierdan su efectividad.',
    },
    {
      termino: 'Certificación INVIMA',
      significado:
        'documento oficial que garantiza que un medicamento cumple con los requisitos sanitarios para su comercialización en Colombia.',
    },
    {
      termino: 'Dispensación',
      significado:
        'entrega de medicamentos al paciente con la información necesaria para su uso seguro.',
    },
    {
      termino: 'EPS (Entidad Promotora de Salud)',
      significado:
        'empresa encargada de afiliar a los usuarios al sistema de salud y garantizar la prestación de los servicios incluidos en el plan de beneficios.',
    },
    {
      termino: 'Evaluación de proveedores',
      significado:
        'proceso para verificar si un proveedor cumple con requisitos legales, técnicos y comerciales antes de contratarlo.',
    },
    {
      termino: 'Farmacovigilancia',
      significado:
        'actividad que permite detectar y reportar efectos no deseados causados por medicamentos.',
    },
    {
      termino: 'Habilitación sanitaria',
      significado:
        'requisito que deben cumplir los establecimientos para operar legalmente en la venta o distribución de medicamentos.',
    },
    {
      termino: 'IPS (Institución Prestadora de Servicios de Salud)',
      significado:
        'entidad que presta servicios médicos y farmacéuticos directamente a los usuarios del sistema de salud.',
    },
    {
      termino: 'Medicamento genérico',
      significado:
        'producto que contiene el mismo principio activo que uno de marca, pero se comercializa sin nombre comercial y a menor costo.',
    },
    {
      termino: 'Normatividad sanitaria',
      significado:
        'conjunto de leyes y resoluciones que regulan la producción, distribución y uso de productos farmacéuticos.',
    },
    {
      termino: 'Operador logístico',
      significado:
        'empresa contratada para comprar, almacenar, distribuir o entregar medicamentos por parte de una EPS o IPS.',
    },
    {
      termino: 'Proveedor farmacéutico',
      significado:
        'empresa o persona que suministra medicamentos, insumos o dispositivos médicos a una droguería, IPS, EPS u operador logístico.',
    },
    {
      termino: 'Registro sanitario',
      significado:
        'permiso otorgado por el INVIMA que autoriza la venta legal de un medicamento o producto para la salud en Colombia.',
    },
  ],
  referencias: [
    {
      referencia:
        'ADRES – Administradora de los Recursos del Sistema General de Seguridad Social en Salud. (s.f.). Sistema de garantías de pago y recobros.',
      link: 'https://www.adres.gov.co',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales – DIAN. (s.f.). Facturación electrónica en Colombia.',
      link: 'https://www.dian.gov.co',
    },
    {
      referencia:
        'Dirección General de Contratación Pública. (s.f.). SECOP – Sistema Electrónico para la Contratación Pública.',
      link: 'https://www.colombiacompra.gov.co/secop',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos – INVIMA. (2021). Guía modelo de inspección, vigilancia y control basada en riesgos – Versión 2.',
      link:
        'https://www.invima.gov.co/sites/default/files/informacion-de-planeacion/2023-10/guia-modelo-ivc-soa-version-2-jun-9-2021.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos – INVIMA. (s.f.). Guía de análisis de riesgo para la clasificación de no conformidades en inspecciones de buenas prácticas de manufactura de medicamentos de síntesis química.',
      link:
        'https://www.invima.gov.co/sites/default/files/medicamentos-y-productos-biologicos/tecnico-medicamentos/listas-y-guias/BPX/Gu%C3%ADa%20BPM%20Medicamentos.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2006). Resolución 1478 de 2006.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=20670',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). Resolución 1403 de 2007. Recuperado de',
      link:
        'https://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). Resolución 1557 de 2023: Por la cual se dictan disposiciones relacionadas con el procedimiento de habilitación de servicios de salud y se actualiza el procedimiento para el registro especial de prestación de servicios de salud.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No%201557%20de%202023.pdf',
    },
    {
      referencia:
        'Monczka, R. M., Handfield, R. B., Giunipero, L. C., & Patterson, J. L. (2015). Purchasing and supply chain management (6th ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2004). Comités de farmacoterapia Guía práctica.',
      link:
        'https://iris.who.int/bitstream/handle/10665/69224/WHO_EDM_PAR_2004.1_spa.pdf',
    },
    {
      referencia: 'Superintendencia Nacional de Salud. (s.f.). ¿Quiénes somos?',
      link:
        'https://www.supersalud.gov.co/es-co/Paginas/Oficina%20de%20Comunicaciones/campa%C3%B1as/que-es-la-supersalud/index.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
