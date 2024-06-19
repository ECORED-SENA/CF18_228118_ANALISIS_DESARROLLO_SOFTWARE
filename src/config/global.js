export default {
  global: {
    componenteFormativo: 'Aplicación del paradigma orientado a objetos',
    descripcionCurso:
      'Durante el transcurso de este componente formativo, se abordan contenidos relacionados con la implementación de clases, objetos, atributos, constructores, métodos, herencia y relaciones en el lenguaje de programación Java.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo:
          'Características del lenguaje de programación orientada a objetos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación de clases y objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Atributos y métodos de la clase',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Constructores y destructores',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Métodos accesores y modificadores',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sobrecarga de métodos (<i>overload</i>)',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación entre clases',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Implementación de asociaciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Implementación de composición/agregación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Implementación de herencia',
            hash: 't_3_3',
          },
        ],
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
        download: 'downloads/228118_CF18_DU.pdf',
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
      tema: 'Implementación de clases y objetos java',
      referencia:
        'Códigos de Programación - MR. (2017). <i>Curso Java - 7: Clases, Métodos y Objetos</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/Z6ispQvMy8s?feature=shared',
    },
    {
      tema: 'Sobrecarga de métodos (<i>overload</i>)',
      referencia:
        'Códigos de Programación - MR. (2017). <i>Curso Java - 8: Constructores y Sobrecarga de Métodos</i>.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=_DUSaU58GDk&ab_channel=C%C3%B3digosdeProgramaci%C3%B3n-MR',
    },
    {
      tema: 'Comunicación entre clases',
      referencia:
        'TodoCode. (2022). <i>RELACIONES entre CLASES en JAVA POO</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XKk5k9OrAUg&ab_channel=TodoCode',
    },
  ],
  glosario: [
    {
      termino: 'Agregación',
      significado:
        'tipo especial de asociación que representa una relación "parte de" donde las partes pueden existir independientemente del todo.',
    },
    {
      termino: 'Asociación',
      significado:
        'relación entre dos objetos en la que uno utiliza las capacidades o servicios del otro.',
    },
    {
      termino: '<i>Bytecode</i>',
      significado:
        'código intermedio más abstracto que el código máquina, que es ejecutado por la JVM.',
    },
    {
      termino: 'Clases',
      significado:
        'estructuras fundamentales de la POO que definen las propiedades y comportamientos de los objetos.',
    },
    {
      termino: 'Composición',
      significado:
        'forma de agregación con una relación más fuerte donde las partes no pueden existir independientemente del todo.',
    },
    {
      termino: 'Herencia',
      significado:
        'característica de la POO que permite que una clase derive de otra, heredando sus métodos y atributos.',
    },
    {
      termino: 'Java',
      significado:
        'lenguaje de programación orientado a objetos, independiente de la plataforma, que compila a <i>bytecode</i>, el cual se ejecuta en la Máquina Virtual de Java (JVM).',
    },
    {
      termino: 'JVM (Máquina Virtual de Java)',
      significado:
        'entorno de ejecución para programas Java que permite la portabilidad del código entre diferentes plataformas.',
    },
    {
      termino: 'Objetos',
      significado:
        'instancias de clases que contienen datos y comportamientos definidos por su clase.',
    },
    {
      termino: 'Polimorfismo (Ligadura Dinámica)',
      significado:
        'capacidad de una variable de tipo base para referirse a objetos de tipos derivados, permitiendo que se ejecuten diferentes métodos a través de una interfaz común.',
    },
    {
      termino: 'POO (Programación Orientada a Objetos)',
      significado:
        'paradigma de programación que utiliza objetos y sus interacciones para diseñar aplicaciones y programas informáticos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación (2022). Guía para la formulación de un esquema de metadatos para la gestión de documentos. ',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Publicacionees/GuiaDeMetadatos.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2022). Normas técnicas de la información y seguridad de la familia ISO 27000. Icontec. ',
      link:
        'https://www.icontec.org/servicio-educacion/modulares-de-educacion/',
    },
    {
      referencia:
        'Ministerio de Educación. (2022). Guía para la clasificación de la información. ',
      link:
        'https://www.mineducacion.gov.co/1759/articles-407695_galeria_14.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones - MinTIC. (2022). Entidades del sector. MinTIC. ',
      link:
        'https://www.mintic.gov.co/portal/inicio/Ministerio/Entidades-del-sector/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zulema León Escobar',
          cargo: 'Experta Temática',
          centro: 'Grupo De Apoyo Administrativo - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y Producción audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Margarita Marcela Medrano Gómez',
        //  cargo: 'Evaluador para contenidos inclusivos y accesibles',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
