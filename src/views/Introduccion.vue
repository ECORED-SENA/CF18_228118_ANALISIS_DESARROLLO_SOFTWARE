<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img1.png', style="width:280px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        p #[b La Programación Orientada a Objetos (POO)] se caracteriza por aplicar principios de abstracción, encapsulación, herencia y polimorfismo. En POO, los datos (atributos) y los métodos (comportamientos) se encapsulan dentro de objetos relacionados entre sí, permitiendo la ocultación de detalles de implementación. Esta ocultación es fundamental, ya que, similar a cómo se puede manejar una moto sin conocer el funcionamiento interno de sus sistemas, en la ingeniería de software permite la comunicación entre objetos a través de interfaces definidas sin revelar cómo están implementados otros objetos.
        p.mb-0 Este componente formativo ofrece una inmersión en los principios y aplicaciones de la Programación Orientada a Objetos, guiando a los estudiantes a través de los siguientes aspectos clave:
    .row.bg-c1
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              .p-4.bg-c2
                .row.mb-4
                  .col-md-auto(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/intro/img2.svg', style="width:70px" alt='').m-auto
                  .col(data-aos="fade-left")
                    .row
                      .col-12.mb-4.mt-4.mt-md-0.mt-lg-2
                        .p-3.bg-c3
                          p.mb-0 #[b Introducción a las características fundamentales de la Programación Orientada a Objetos (POO).]
                      .col-12.mb-4
                        .p-3.bg-c3
                          p #[b Profundización en la implementación de clases y objetos, abarcando:]
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-code(style="color:#1682FB")
                              | Atributos y métodos de las clases.
                            li.d-flex
                              i.fas.fa-code(style="color:#1682FB")
                              | Constructores y destructores para la gestión de objetos.
                            li.d-flex
                              i.fas.fa-code(style="color:#1682FB")
                              | Métodos accesores y modificadores, esenciales para la manipulación de datos.
                            li.d-flex
                              i.fas.fa-code(style="color:#1682FB")
                              | Sobrecarga de métodos (overload), facilitando la flexibilidad y reutilización de código.
                      .col-12
                        .p-3.bg-c3
                          p #[b Exploración de la comunicación entre clases mediante:]
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-code(style="color:#1682FB")
                              | Implementación de asociaciones, para relacionar objetos de manera lógica.
                            li.d-flex
                              i.fas.fa-code(style="color:#1682FB")
                              | Implementación de composición/agregación, definiendo relaciones de pertenencia.
                            li.d-flex
                              i.fas.fa-code(style="color:#1682FB")
                              | Implementación de herencia, permitiendo la extensión y reutilización de funcionalidades.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
