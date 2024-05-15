<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span 1
      h1 Características del lenguaje de programación orientada a objetos
    .row.bg-c4.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .p-3
          p Aunque es posible implementar Programación Orientada a Objetos (POO) en lenguajes como C y PASCAL, esta se torna compleja y confusa en programas de gran tamaño. Resulta más apropiado utilizar un lenguaje específicamente diseñado para soportar los principios de la POO para su implementación. Esto se debe a que, dependiendo de las características que ofrecen, los lenguajes de programación se pueden clasificar en dos categorías: lenguajes basados en objetos y lenguajes orientados a objetos. La programación basada en objetos es un estilo que soporta, principalmente, la encapsulación e identidad de los objetos, centrando sus características principales en:
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        .p-3
          figure
            img(src='@/assets/curso/tema1/img2.svg', style="width:300px" alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-down")
        .p-4.bg-c5
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 1.] Características de POO
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img3.svg', style="width:580px" alt='La figura  presenta un listado de las características principales de la Programación Orientada a Objetos (POO), que incluyen la encapsulación de datos, la ocultación de datos con mecanismos de acceso, la inicialización automática y la sobrecarga de operadores.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img3m.svg', style="width:200px" alt='La figura  presenta un listado de las características principales de la Programación Orientada a Objetos (POO), que incluyen la encapsulación de datos, la ocultación de datos con mecanismos de acceso, la inicialización automática y la sobrecarga de operadores.').m-auto
    p.mb-5(data-aos="fade-right") Se dice que los lenguajes de programación basados en objetos son aquellos que soportan el uso de objetos pero no incorporan todas las características de la programación orientada a objetos, como la herencia o el polimorfismo. Un ejemplo de lenguaje de programación que no es completamente orientado a objetos es Ada, que aunque utiliza objetos, no incluye la herencia ni la ligadura dinámica, y es además un lenguaje multipropósito.
    .row.justify-content-center.bg-c6.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.p-lg-0
          .row.align-items-center
            .col-lg
              p.mb-0 #[b La programación orientada a objetos (POO), por otro lado, incluye todas las características de los lenguajes basados en objetos y añade funcionalidades clave como la herencia y la ligadura dinámica (también conocida como polimorfismo), que permiten una mayor flexibilidad y reutilización del código.]
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img4.svg', style="width:200px" alt='').m-auto
    .row.bg-c7.mb-5
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              .row
                .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/tema1/img1.png', style="width:250px" alt='').m-auto
                .col-lg-9(data-aos="fade-left")
                  p Las características programación orientada a objetos son:
                  .row
                    .col-12
                      .p-3.bg-c8
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-code(style="color:#1682FB")
                            | #[b Herencia]
                          li.d-flex
                            i.fas.fa-code(style="color:#1682FB")
                            | #[b Ligadura dinámica]
                          li.d-flex
                            i.fas.fa-code(style="color:#1682FB")
                            | #[b Características basadas en objetos]
          .row.align-items-center.mb-5
            .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
              p Entre los lenguajes que incluyen soporte para la programación orientada a objetos se cuentan C++, Smalltalk, Object Pascal y Java. Existe una amplia variedad de lenguajes de programación que ofrecen funcionalidades tanto de programación basada en objetos como de orientación a objetos. En particular, Java es un lenguaje de programación orientado a objetos que fue desarrollado por Sun Microsystems y lanzado en 1995. Java compila el código fuente en un bytecode que es ejecutado por la Máquina Virtual de Java (JVM), lo que lo diferencia de lenguajes como C y C++, que son principalmente compilados a código máquina y no interpretados. Java combina características de lenguajes interpretados a través de su JVM, garantizando portabilidad y eficiencia en la ejecución de sus programas.
              p.mb-0 Sus características principales son:
            .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img7.svg', style="width:250px" alt='').m-auto
          .row.justify-content-center
            .col-lg-10
              .p-4.bg-c10(data-aos="fade-right")
                .row.mb-3
                  .col-md-auto.mt-2(style="z-index: 2")
                    figure
                      img(src='@/assets/curso/tema1/img9.svg', style="width:60px" alt='').m-auto
                  .col
                    .p-3.bg-c9
                      p.ps-0.ps-sm-4.mb-0 #[b Sencillo]
                      p.ps-0.ps-sm-4.mb-0 Es fácil de entender, elimina la complejidad de otros lenguajes.
                .row.mb-3
                  .col-md-auto.mt-2(style="z-index: 2")
                    figure
                      img(src='@/assets/curso/tema1/img10.svg', style="width:60px" alt='').m-auto
                  .col
                    .p-3.bg-c9
                      p.ps-0.ps-sm-4.mb-0 #[b Orientado a objetos]
                      p.ps-0.ps-sm-4.mb-0 Al ser un paradigma orientado a objetos la filosofía de programación orientada a objetos facilita la creación y mantenimiento de programas.
                .row.mb-3
                  .col-md-auto.mt-2(style="z-index: 2")
                    figure
                      img(src='@/assets/curso/tema1/img11.svg', style="width:60px" alt='').m-auto
                  .col
                    .p-3.bg-c9
                      p.ps-0.ps-sm-4.mb-0 #[b Independiente de la arquitectura y portable]
                      p.ps-0.ps-sm-4.mb-0 Al compilar un programa en Java, se obtiene un tipo de código binario conocido como Java Bytecode. Este código es interpretable por diferentes computadoras de igual manera. Como el código compilado de Java es interpretado, un programa compilado de Java puede ser utilizado por cualquier computadora que tenga implementado el intérprete de Java.
                .row.mb-3
                  .col-md-auto.mt-2(style="z-index: 2")
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:60px" alt='').m-auto
                  .col
                    .p-3.bg-c9
                      p.ps-0.ps-sm-4.mb-0 #[b Robusto]
                      p.ps-0.ps-sm-4.mb-0 Java simplifica la gestión de la memoria.
                .row.mb-3
                  .col-md-auto.mt-2(style="z-index: 2")
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:60px" alt='').m-auto
                  .col
                    .p-3.bg-c9
                      p.ps-0.ps-sm-4.mb-0 #[b Multitarea]
                      p.ps-0.ps-sm-4.mb-0 Java puede ejecutar diferentes hilos de código al mismo tiempo.
                .row
                  .col-md-auto.mt-2(style="z-index: 2")
                    figure
                      img(src='@/assets/curso/tema1/img14.svg', style="width:60px" alt='').m-auto
                  .col
                    .p-3.bg-c9
                      p.ps-0.ps-sm-4.mb-0 #[b Dinámico]
                      p.ps-0.ps-sm-4.mb-0 En Java no es necesario cargar completamente el programa en memoria, sino que las clases compiladas pueden ser cargadas en bajo demanda en tiempo de ejecución.
    .row.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img15.svg', style="width:60px" alt='').m-auto
          .col
            p.mb-0 Además de las características mencionadas, hay diversos entornos de desarrollo integrados (IDE, por sus siglas en inglés "#[i Integrated Development Environment]") disponibles para la programación en Java. Estos entornos proporcionan a los programadores un espacio de trabajo unificado que facilita todo el proceso de desarrollo de aplicaciones. Entre los IDE más reconocidos se encuentran:
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width:360px" alt='').m-auto
    .row.justify-content-center
      .col-lg-8
        .p-4.bg-c5(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 1.] Entornos de desarrollo Java
          .tabla-a.color-primario
            table
              thead
                tr
                  th.text-white(style="width:30%") IDE
                  th.text-white Enlace para descarga
              tbody
                tr
                  td NetBeans
                  td
                    a(href="https://netbeans.apache.org/download/index.html" target="_blank") https://netbeans.apache.org/download/index.html
                tr
                  td Eclipse
                  td 
                    a(href="http://www.eclipse.org/downloads/" target="_blank") http://www.eclipse.org/downloads/
                tr
                  td JBlue
                  td
                    a(href="https://bluej.org/versions.html" target="_blank") https://bluej.org/versions.html
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
