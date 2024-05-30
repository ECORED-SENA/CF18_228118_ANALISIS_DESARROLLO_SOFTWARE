<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comunicación entre clases
    p(data-aos="fade-right") Las clases, así como los objetos, no operan de manera aislada. La Programación Orientada a Objetos (POO) busca simular las aplicaciones del mundo real de la manera más precisa posible, lo cual implica reflejar las relaciones entre clases y objetos de forma adecuada. De este modo, la comunicación entre clases se facilita exclusivamente a través de sus interfaces públicas.
    p.mb-5(data-aos="fade-right") Existen tres tipos fundamentales de relaciones entre objetos:
    .row.justify-content-center.mb-5
      .col-md-8.col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12.mx-0
            figure
              img(src='@/assets/curso/tema3/img1.png', alt='').m-auto
          .col-12
            .p-4.bg-c37
              p.text-center #[b Asociación]
              p.mb-0 Describe cómo los objetos se relacionan y se utilizan entre sí.
      .col-md-8.col-lg.mb-4.mb-lg-0(data-aos="fade-down")
        .row
          .col-12.mx-0
            figure
              img(src='@/assets/curso/tema3/img2.png', alt='').m-auto
          .col-12
            .p-4.bg-c37
              p.text-center #[b Agregación/Composición]
              p.mb-0 Define una relación en la que un objeto está compuesto por uno o más objetos, mostrando una relación de tipo 'parte-todo'.
      .col-md-8.col-lg(data-aos="fade-left")
        .row
          .col-12.mx-0
            figure
              img(src='@/assets/curso/tema3/img3.png', alt='').m-auto
          .col-12
            .p-4.bg-c37
              p.text-center #[b Generalización/Especialización (Herencia)]
              p.mb-0 Expresa una jerarquía entre clases donde una clase derivada (subclase) hereda comportamientos y atributos de una clase base (superclase), permitiendo la reutilización y extensión de código.
    #t_3_1
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c12
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Implementación de asociaciones
    p.mb-5(data-aos="fade-right") En Java, la implementación de la asociación se lleva a cabo mediante campos de instancia. Esta relación puede ser bidireccional, donde cada clase posee una referencia hacia la otra. Tanto la agregación como la composición son variantes específicas de relaciones de asociación. A continuación, se detallan estos tipos de relaciones:
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c8(data-aos="fade-right")
          p #[b Asociación unidireccional]
          .hr1
          p Una asociación unidireccional ocurre cuando una clase está vinculada a otra, pero solo una de ellas conoce la existencia de la otra. Esto significa que un objeto de la primera clase puede acceder a los miembros de la segunda clase, pero no a la inversa.
          p Para implementar una asociación unidireccional en Java, se debe incluir una referencia en la clase que conoce a la otra. Esto se logra declarando un atributo del tipo de la clase conocida dentro de la clase que posee el conocimiento.
          p Por ejemplo, en una relación entre una clase #[b Pedido] y una clase #[b Cliente], la clase #[b Pedido] puede tener una referencia a la clase #[b Cliente] para saber a quién pertenece, pero la clase #[b Cliente] no necesita tener una referencia a la clase #[b Pedido] si la lógica del negocio no requiere que un cliente conozca sus pedidos.
          p.mb-4 Aquí está cómo se podría ver esto en el código:
          .row.justify-content-center.mb-4
            .col-lg-8
              .row
                .col-12
                  .px-4.py-3.bg-c14
                    figure
                      img(src='@/assets/curso/tema2/img7.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c15
                    pre
                      p.mb-0 public class Cliente {
                      p.mb-0     private String nombre;
                      p.mb-0     // Otros atributos y métodos del Cliente
                      p.mb-0 }
                      p.mb-0 
                      p.mb-0 public class Pedido {
                      p.mb-0     private Cliente cliente; // Referencia unidireccional
                      p.mb-0     private double total;
                      p.mb-0 
                      p.mb-0     public Pedido(Cliente cliente) {
                      p.mb-0         this.cliente = cliente;
                      p.mb-0     }
                      p.mb-0 
                      p.mb-0     // Otros atributos y métodos del Pedido
                      p.mb-0 
                      p.mb-0 }
          p En este caso, #[b Pedido] conoce a ##[b Cliente], pero #[b Cliente] no tiene conocimiento de Pedido, lo que hace que la relación sea unidireccional desde #[b Pedido] hacia #[b Cliente].
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c8(data-aos="fade-left")
          p #[b Asociación bidireccional]
          .hr1
          p En una asociación bidireccional, dos clases están vinculadas entre sí de tal manera que ambas pueden conocer la existencia y utilizar los miembros de la otra. Esto significa que un objeto de una clase mantiene una referencia a uno o varios objetos de la otra clase y viceversa; ambos tienen la capacidad de interactuar entre sí.
          p Para implementar una asociación bidireccional en Java, se deben crear instancias mutuas en ambas clases. Cada clase tendrá un atributo que referencia a la otra, y típicamente se proporcionarán métodos para establecer y modificar estas referencias de manera controlada.
          p Tomando como ejemplo una relación entre #[b Cliente] y #[b Cuenta], no solo el #[b Cliente] tendría una #[b Cuenta], sino que la #[b Cuenta] también tendría una referencia a su #[b Cliente] para formar una relación bidireccional completa.
          p.mb-4 Aquí se muestra cómo se podría representar en el código:
          .row.justify-content-center.mb-4
            .col-lg-8
              .row
                .col-12
                  .px-4.py-3.bg-c14
                    figure
                      img(src='@/assets/curso/tema2/img7.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c15
                    pre
                      p.mb-0 public class Cliente {
                      p.mb-0     private String nombre;
                      p.mb-0     private Cuenta cuenta; // Referencia bidireccional a Cuenta
                      p.mb-0 
                      p.mb-0     // Constructor, getters y setters
                      p.mb-0 
                      p.mb-0     public void vincularCuenta(Cuenta cuenta) {
                      p.mb-0         this.cuenta = cuenta;
                      p.mb-0         cuenta.vincularCliente(this); // Establece la referencia bidireccional
                      p.mb-0     }
                      p.mb-0 }
                      p.mb-0 
                      p.mb-0 public class Cuenta {
                      p.mb-0     private double saldo;
                      p.mb-0     private Cliente cliente; // Referencia bidireccional a Cliente
                      p.mb-0 
                      p.mb-0     // Constructor, getters y setters
                      p.mb-0 
                      p.mb-0     public void vincularCliente(Cliente cliente) {
                      p.mb-0         this.cliente = cliente;
                      p.mb-0         // Si es necesario, también establecer la referencia desde Cliente a Cuenta
                      p.mb-0         if (cliente.getCuenta() != this) {
                      p.mb-0             cliente.vincularCuenta(this);
                      p.mb-0         }
                      p.mb-0     }
                      p.mb-0 }
          p En este código, tanto la clase #[b Cliente] como la clase #[b Cuenta] tienen métodos que permiten vincular una a la otra. Es importante manejar estas referencias cuidadosamente para evitar bucles infinitos o inconsistencias en las relaciones. Cuando se establece la vinculación desde una instancia de #[b Cliente] a #[b Cuenta], también se llama a un método en #[b Cuenta] para establecer la vinculación inversa, asegurando así una asociación bidireccional coherente.
    #t_3_2
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c12
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Implementación de composición/agregación
    p.mb-5(data-aos="fade-right") La agregación es una relación entre clases que modela una jerarquía de tipo "todo-parte", donde las partes pueden existir independientemente del todo. En cambio, la composición es una forma específica de agregación en la que las partes están exclusivamente asociadas a un único todo y su existencia depende de ese todo.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c28(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img1.svg', style="width:90px" alt='').m-auto
            .col
              p.mb-0 En Java, la composición se implementa creando una clase que contiene objetos de otras clases como atributos privados, inicializándolos generalmente dentro del constructor de la clase contenedora para asegurar el acoplamiento de sus ciclos de vida.
    #t_3_3
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c12
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Implementación de herencia
    p(data-aos="fade-right") La herencia es el mecanismo en la programación orientada a objetos que permite que una clase, conocida como subclase, herede propiedades y comportamientos de otra clase, llamada superclase.
    p.mb-5(data-aos="fade-right") #[b Por ejemplo], a partir de la clase #[b Persona], es posible definir una subclase #[b Empleado], que hereda las características de #[b Persona]. La herencia permite la reutilización de código y la extensión de funcionalidades. En Java, la herencia se implementa mediante la palabra clave #[b #[i extends]], lo que indica que la subclase #[b Empleado] adquiere los métodos y atributos accesibles de la clase #[b Persona].
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-5.bg-c3(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 2.] Ejemplo de herencia en UML
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema3/img2.svg', style="width:680px" alt='La figura presenta un ejemplo diagrama de clases UML que incluye la clase Persona con tres atributos privados: nombre, apellido y documento, además de dos métodos públicos: getNombre y getApellido. De esta clase derivan las clases Cliente, que tiene un atributo privado categoría y un método público mostrarDatos, y Empleado, con un atributo privado sueldo y un método público mostrarEmpleados. Las relaciones de herencia se muestran mediante flechas que conectan Cliente y Empleado con la clase Persona.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema3/img2m.svg', style="width:300px" alt='La figura presenta un ejemplo diagrama de clases UML que incluye la clase Persona con tres atributos privados: nombre, apellido y documento, además de dos métodos públicos: getNombre y getApellido. De esta clase derivan las clases Cliente, que tiene un atributo privado categoría y un método público mostrarDatos, y Empleado, con un atributo privado sueldo y un método público mostrarEmpleados. Las relaciones de herencia se muestran mediante flechas que conectan Cliente y Empleado con la clase Persona.').m-auto
    .row.mb-5
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure.mt-1
          img(src='@/assets/curso/tema2/img21.svg', style="width:70px" alt='')
      .col(data-aos="fade-left")
        p La superclase #[b Persona] posee los atributos nombre, apellido y documento, que son igualmente necesarios para las clases Cliente y Empleado. La herencia permite la reutilización de código, de modo que las clases derivadas no necesitan declarar nuevamente estos atributos, ya que los heredan directamente de la clase #[b Persona].
        p.mb-0 Para implementar la relación de herencia del ejemplo que incluye a las clases #[b Persona], #[b Cliente] y #[b Empleado] en Java, se procedería de la siguiente manera:
    .row.justify-content-center
      .col-lg-10.mb-4
        .p-4.bg-c8(data-aos="fade-right")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img3.svg', style="width:70px" alt='').m-auto
            .col
              p.mb-0 Se crea la clase #[b Persona], la superclase, con sus atributos, constructores y métodos #[b “get”] y #[b “set”].
      .col-lg-10
        .p-4.bg-c28(data-aos="fade-left")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img4.svg', style="width:70px" alt='').m-auto
            .col
              p.mb-0 Se crea la clase #[b Cliente] con su propio atributo categoría y su método #[b mostrarDatos]. Para heredar los atributos de la superclase #[b Persona], se utiliza la palabra reservada #[b #[i “extends”]].

</template>

<script>
export default {
  name: 'Tema3',
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
