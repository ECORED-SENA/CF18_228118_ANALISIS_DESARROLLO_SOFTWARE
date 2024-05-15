<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Implementación de clases y objetos
    .row.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-auto.d-none.d-md-block
            figure
              img(src='@/assets/curso/tema2/img1.svg', style="width:60px" alt='').m-auto
          .col
            p.mb-0 Los elementos centrales de un lenguaje de programación son las clases, ya que se utilizan para realizar todas las operaciones lógicas durante el desarrollo de #[i software]. Las clases actúan como estructuras o plantillas que modelan objetos del mundo real y pueden definirse como las abstracciones de estos objetos en el código. Los objetos derivados de estas clases pueden representar entidades físicas o conceptuales, como cosas, lugares o personas. Por lo general, las clases definen propiedades, comportamientos y relaciones con otras clases.
        .row
          .col-12
            .p-4.bg-c11
              .row
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/img2.svg', style="width:60px" alt='').m-auto
                .col
                  p En Java, las convenciones de codificación estándar incluyen reglas específicas para nombrar clases, métodos y atributos. Las reglas para nombrar clases son las siguientes:
                  ol.lista-ol.lista-ol
                    li.d-flex
                      span.text-bold a. 
                      | La primera letra de cada nombre de clase debe ser mayúscula.
                    li.d-flex
                      span.text-bold b. 
                      | Se debe utilizar la nomenclatura camelCase para nombres compuestos, donde la primera letra de cada palabra interna es mayúscula; por ejemplo, "CuentaAhorros".
                    li.d-flex
                      span.text-bold a. 
                      | Los nombres de las clases deben ser sustantivos, indicativos de lo que representan.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img3.svg', style="width:360px" alt='').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c12
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Estructura de una clase en Java
    p.mb-5(data-aos="fade-right") Una clase en Java se compone por las siguientes declaraciones:
    .row.justify-content-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width:390px" alt='').m-auto
      .col-lg-6(data-aos="fade-left")
        .p-4.bg-c13
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-code(style="color:#1682FB")
              | Paquete
            li.d-flex
              i.fas.fa-code(style="color:#1682FB")
              | Comentarios
            li.d-flex
              i.fas.fa-code(style="color:#1682FB")
              | Definición de clases
            li.d-flex
              i.fas.fa-code(style="color:#1682FB")
              | Atributos
            li.d-flex
              i.fas.fa-code(style="color:#1682FB")
              | Constructores
            li.d-flex
              i.fas.fa-code(style="color:#1682FB")
              | Métodos
    .row.bg-c16
      .col-12
        .p-5
          .row.justify-content-center.mb-5
            .col-lg-10
              p.mb-0(data-aos="fade-right") #[b Ejemplo de estructura:]
          .row.justify-content-center.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-12
                  .px-4.py-3.bg-c14
                    figure
                      img(src='@/assets/curso/tema2/img7.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c15
                    pre
                      p.mb-0 public class Nombre de la Clase {}
            .col-lg-6(data-aos="fade-left")
              .p-4.bg-c3
                p.mb-0 - Donde la palabra #[b public] indica que el alcance de la clase será público.
                p.mb-0 - La palabra #[b class] indica que es una clase.
                p.mb-0 - Y las llaves #[b {}] se usan para agrupar los bloques de código.
          p.mb-5(data-aos="fade-right") Basado en lo anterior, a continuación, se relaciona un ejemplo sobre el diseño de la clase de producto con sus atributos y métodos:
          .row.justify-content-center.mb-5
            .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12
                  .px-4.py-3.bg-c17
                    p.mb-0 #[b Producto]
                .col-12
                  .px-4.py-3.bg-c18
                    p.mb-0 -código: int
                    p.mb-0 -nombre: String
                    p.mb-0 -precio: double
                .col-12
                  .px-4.py-3.bg-c19
                    p.mb-0 +obtenerPrecio()
                    p.mb-0 +calcularTotal()
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img3.png', style="width:390px" alt='').m-auto
          p.mb-5(data-aos="fade-right") En Java este diseño se representaría de la siguiente manera:
          .row.justify-content-center
            .col-lg-10(data-aos="fade-down")
              .p-4.bg-c5
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Tabla 2.] Implementación de la clase Producto en Java
                .tabla-a.color-primario
                  table
                    thead
                      tr
                        th.text-white(style="width:20%") Línea de código
                        th.text-white Programación
                        th.text-white Explicación 
                    tbody
                      tr
                        td(style="vertical-align: baseline")
                          p.mb-0 12
                          p.mb-0 13
                        td.bg-c20(style="vertical-align: baseline")
                          pre
                            p.mb-0 #[span.txt-c1 public clases] #[span.txt-c2 Producto] { // Clase
                        td(style="vertical-align: baseline")
                          p.mb-0 Donde la línea 12 del código representa la estructura de la clase que es de acceso público y su nombre es Producto.
                      tr
                        td(style="vertical-align: baseline")
                          p.mb-0 14
                          p.mb-0 15
                          p.mb-0 16
                          p.mb-0 17
                        td.bg-c20(style="vertical-align: baseline")
                          pre
                            p.mb-0    #[span.txt-c1 private] #[span.txt-c2 int] codigo; // atributos
                            p.mb-0    #[span.txt-c1 private] #[span.txt-c2 String] nombre; // atributos
                            p.mb-0    #[span.txt-c1 private] #[span.txt-c2 double] precio; // atributos
                        td(style="vertical-align: baseline")
                          p.mb-0 De la línea 14 a la 16 representa los atributos de la clase.
                      tr
                        td(style="vertical-align: baseline")
                          p.mb-0 18
                          p.mb-0 19
                          p.mb-0 20
                          p.mb-0 21
                          p.mb-0 22
                          p.mb-0 13
                          p.mb-0 24
                          p.mb-0 25
                          p.mb-0 26
                        td.bg-c20(style="vertical-align: baseline")
                          pre
                            p.mb-0    #[span.txt-c1 public void] #[span.txt-c2 obtenerPrecio()] { // método
                            p.mb-0     System.out.println(#[span.txt-c3 "El precio es"] + precio);
                            p.mb-0    }
                            p.mb-0      
                            p.mb-0    #[span.txt-c1 public void] #[span.txt-c2 calcularTotal()] { // método
                            p.mb-0    #[span.txt-c2 double total] = precio*#[span.txt-c2 5000];
                            p.mb-0    }
                            p.mb-0 
                            p.mb-0 }
                        td(style="vertical-align: baseline")
                          p.mb-0 A partir de la línea 18 se encuentran los métodos.
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img4.png', style="width:390px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        p La creación de un objeto en Java se realiza mediante la instanciación de una clase. Al instanciar una clase, se crea un objeto que hereda los atributos y métodos de dicha clase. Es posible crear múltiples instancias de una misma clase.
        p Por ejemplo, al instanciar un objeto de la clase Producto, asignamos valores a sus atributos, como #[b código], #[b nombre] y #[b precio], y podemos utilizar sus métodos, tales como #[b obtenerPrecio()] y #[b calcularTotal()]. En Java, la instanciación se lleva a cabo con la palabra reservada #[i #[b new]], seguida del constructor de la clase. La sintaxis para crear un objeto de la clase #[b Producto] sería:
        .row
          .col-12
            .p-4.bg-c21
              pre
                p.text-center.mb-0 #[span.txt-c2 Producto p =] #[span.txt-c1 new] #[span.txt-c2 Producto()];
    p.mb-5(data-aos="fade-right") Una vez instanciado, el objeto p tiene acceso a los métodos y atributos de la clase Producto. La forma correcta de invocar los métodos sería a través del objeto creado:
    .row.justify-content-center
      .col-lg-6
        .row(data-aos="fade-right")
          .col-12
            .px-4.py-3.bg-c14
              figure
                img(src='@/assets/curso/tema2/img7.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c15
              pre
                p.mb-0 p.obtenerPrecio();
                p.mb-0 p.calcularTotal();
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Atributos y métodos de la clase
    p.mb-5(data-aos="fade-right") Los atributos de una clase son definidos según esta sintaxis: #[b &lsqb;modifVisibilidad&rsqb; tipo nombre Variable &lsqb;= valor Inicial&rsqb;]:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c22.h-100
          p.text-center #[b #[i Public]]
          p Indica que los atributos son accesibles desde cualquier lugar del programa. No hay restricciones en el alcance de los miembros de datos públicos.
      .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c22.h-100
          p.text-center #[b #[i Private]]
          p Indica que los atributos solo son accesibles dentro de la clase en la que se declaran.
      .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c22.h-100
          p.text-center #[b #[i Protected]]
          p Indica que los atributos son accesibles dentro del mismo paquete o sub-clases en paquetes diferentes. Al heredar si se puede usar desde la clase derivada.
      .col-10.col-md-8.col-lg-3
        .p-4.bg-c22.h-100
          p.text-center #[b #[i Tipo]]
          p Es el tipo de la variable, pudiendo ser un tipo básico o un objeto.
    p.mb-5(data-aos="fade-right") A continuación, se relacionan los tipos de datos que existen en Java:
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c5
          .tabla-a.color-primario
            table
              thead
                tr
                  th.text-white(style="width:20%") Tipo
                  th.text-white Formato
                  th.text-white Descripción
              tbody
                tr
                  td byte
                  td 8 bit
                  td Entero de un byte
                tr
                  td short
                  td 16 bit
                  td Entero corto
                tr
                  td int
                  td 32 bit
                  td Entero
                tr
                  td long
                  td 64 bit
                  td Entero largo
                tr
                  td float
                  td 32 bit
                  td Flotante simple
                tr
                  td double
                  td 64 bit
                  td Flotante doble
                tr
                  td char
                  td 16 bit
                  td Un solo carácter
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img8.svg', style="width:390px" alt='').m-auto
    p.mb-5(data-aos="fade-right") El nombre que se asigna a una variable, conocido como nombreVariable, debe adherirse a ciertas convenciones en Java:
    .row.mb-2(data-aos="fade-down")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.mb-0 Los nombres de las variables deben comenzar con una letra minúscula. En el caso de nombres compuestos, se emplea la nomenclatura camelCase, donde la primera letra de cada palabra subsiguiente es mayúscula.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.mb-0 Los nombres de variables no pueden contener espacios, iniciar con números ni incluir caracteres especiales.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.mb-0 No se permite que una variable tenga el mismo nombre que una palabra clave reservada por el lenguaje.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.mb-0 Dentro de un mismo ámbito, cada variable debe tener un nombre único y no puede repetirse el nombre de otras variables previamente declaradas.
    .row.bg-c23
      .col-12
        .p-5
          p.mb-5(data-aos="fade-right") A continuación, se proporcionan ejemplos que siguen estas convenciones:
          .row.align-items-center.justify-content-center
            .col-lg-6(data-aos="fade-right")
              .row.mb-4
                .col-12
                  .px-4.py-3.bg-c24
                    p.mb-0 #[b Ejemplo variable datos Java]
                .col-12
                  .px-4.py-3.bg-c25
                    p.mb-0 -primerNombre
                    p.mb-0 -apellidoCliente
                    p -edad
                    p.mb-0 La explicación indica que se puede inicializar una variable con un valor utilizando el formato = #[b valorInicial];
              p.mb-4 Ejemplo variable datos Java:
              .row.mb-4
                .col-12
                  .px-4.py-3.bg-c24
                    p.mb-0 #[b Ejemplo]
                .col-12
                  .px-4.py-3.bg-c25
                    p Se permite definir más de una variable, separándolas por coma, por ejemplo:
                    .row.mb-3
                      .col-auto
                        .p-2.bg-c26
                          p.mb-0 #[span.txt-c1 public] #[span.txt-c4 int] #[span.text-white a =] #[b.txt-c2 5]#[span.text-white , b, c =] #[b.txt-c2 4]#[span.text-white ;]
                    p Ejemplos de declaración de atributos o variables:
                    .row.mb-3
                      .col-auto
                        .p-2.bg-c26
                          p.mb-0 ✓ #[span.txt-c1 public] #[span.txt-c4 int] #[span.text-white edad=5;]
                          p.mb-0 ✓ #[span.txt-c1 private] #[span.txt-c4 char] #[span.text-white genero=']#[span.txt-c3 M]#[span.text-white ';]
                          p.mb-0 ✓ #[span.txt-c1 private] #[span.txt-c4 double] #[span.text-white estatura;]
                    p Nota: todos los atributos terminan en punto y coma.
                    p Los métodos se definen la siguiente manera:
                    .row
                      .col-auto
                        .p-2.bg-c26
                          p.mb-0 #[span.text-white &lsqb;modifVisibilidad&rsqb; tipo] #[b.txt-c2 nombreMetodo] #[span.text-white (listaParámetros) {}]
            .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img6.png', style="width:390px" alt='').m-auto
    p.mb-5(data-aos="fade-right") En los atributos y métodos para las clases también existen:
    .row.mb-5
      .col-12
        .p-5.bg-c27
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img8.png', style="width:390px" alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              SlyderF(columnas="col-md-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-5.col-lg-8
                      img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
                  p.text-center #[b Modificador de visibilidad]
                  p Aplica las mismas normas que para los atributos. Indica el nivel de acceso: público, privado o protegido.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-5.col-lg-8
                      img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
                  p.text-center #[b Tipo]
                  p Corresponde al tipo de valor que el método retorna, como int, double, char, String, etc.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-5.col-lg-8
                      img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
                  p.text-center #[b Nombre del método]
                  p Debe ser un verbo en minúscula o un compuesto iniciando con mayúscula en sustantivos, ej. revisarCuenta().
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-5.col-lg-8
                      img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
                  p.text-center #[b Lista de parámetros]
                  p Incluye los parámetros entre paréntesis; son los datos que recibe el método, y puede ser vacía.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-5.col-lg-8
                      img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
                  p.text-center #[b Cuerpo del método {}]
                  p Contiene el código a ejecutar encerrado en llaves; no termina en punto y coma como los atributos.
    .row
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p A continuación, se presentan algunos ejemplos de métodos:
        .row
          .col-12
            .px-4.py-3.bg-c24
              p.mb-0 #[b Ejemplo método atributos y métodos:]
          .col-12
            .px-4.py-3.bg-c25
              .row.mb-3
                .col-auto
                  .p-4.bg-c26
                    pre
                      p.mb-0 public int obtenerEdad ()
                      p.mb-0 {
                      p.mb-0     return edad;
                      p.mb-0 }
              p.mb-0 Este es un método público que retorna un valor entero, cuyo nombre es obtenerEdad, no recibe parámetros y devuelve la edad.
      .col-lg-6(data-aos="fade-left")
        p Ejemplo listado de parámetros:
        .row
          .col-12
            .px-4.py-3.bg-c24
              p.mb-0 #[b Ejemplo método:]
          .col-12
            .px-4.py-3.bg-c25
              .row.mb-3
                .col-auto
                  .p-4.bg-c26
                    pre
                      p.mb-0 public void cambiarEdad (int laEdad)
                      p.mb-0 {
                      p.mb-0     edad = laEdad;
                      p.mb-0 }
              p.mb-0 Este es un método público que no retorna ningún valor porque tiene la palabra reservada void, su nombre es cambiarEdad y recibe un parámetro de tipo entero, en el cuerpo del método asigna a la variable edad el valor del parámetro que viene almacenado en la variable laEdad.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Constructores y destructores
    .row.align-items-end.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p p El constructor de una clase es un método diseñado específicamente para inicializar los objetos de dicha clase. Por otro lado, un destructor es un método que se invoca automáticamente cuando el objeto es destruido. Se utiliza un constructor al instanciar un objeto para inicializar sus variables con valores adecuados. Un constructor, que es un método especial de la clase, tiene las siguientes características:
        p #[b El nombre del constructor coincide con el nombre de la clase.]
        .row
          .col-12
            .p-4.bg-c28
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  | No retorna ningún valor.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  | Es posible definir múltiples constructores, siempre que tengan diferentes listas de parámetros.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  | El código dentro de un constructor generalmente incluye inicializaciones de variables y objetos para que el objeto sea creado con los valores iniciales deseados.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img9.png', style="width:340px" alt='').m-auto
    p.mb-5(data-aos="fade-right") La sintaxis para definir un constructor es la siguiente:
    .row.bg-c29
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-12
                  .px-4.py-3.bg-c14
                    figure
                      img(src='@/assets/curso/tema2/img7.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c15
                    pre
                      p.mb-0 #[span.txt-c2 &lsqb;modificadorDeVisibilidad&rsqb;]
                      p.mb-0 #[span.txt-c4 NombreDelConstructor](#[span.txt-c1 listaDeParámetros]) {
                      p.mb-0     // Código de inicialización
                      p.mb-0 }
            .col-lg-5(data-aos="fade-left")
              p Donde:
              p - #[span.txt-c5 #[b modificadorDeVisibilidad]] indica si el constructor es public, private o protected, siguiendo las mismas normas que para los atributos y métodos.
              p - #[span.txt-c6 #[b NombreDelConstructor]] debe coincidir con el nombre de la clase.
              p.mb-0 - #[span.txt-c7 #[b listaDeParámetros]] es la enumeración de parámetros que el constructor acepta, separados por comas y definidos por su tipo y nombre, por ejemplo, (int a, int b).
          p.mb-5(data-aos="fade-right") En el ejemplo de la clase #[b Producto], se crea un constructor público llamado Producto con una lista de parámetros. Este constructor asigna los valores de los parámetros a las variables de instancia de la clase. La palabra reservada #[b #[i this]] se utiliza para referirse a los miembros de la propia clase en el objeto actual.
          .row.justify-content-center.mb-5
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-12
                  .px-4.py-3.bg-c30
                    p.mb-0 #[b Un constructor]
                .col-12
                  .px-4.py-3.bg-c31
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img19.svg', style="width:70px" alt='')
                    p.mb-0 Sin parámetros se denomina constructor vacío. Si no se define explicitamente un constructor, el compilador proporciona uno por defecto, permitiendo la creación de objetos sin argumentos mediante #[b new Clase{}].
                    br
            .col-lg-5(data-aos="fade-left")
              .row
                .col-12
                  .px-4.py-3.bg-c30
                    p.mb-0 #[b Los destructores]
                .col-12
                  .px-4.py-3.bg-c31
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img20.svg', style="width:70px" alt='')
                    p.mb-0 Son métodos que liberan la memoria ocupada por un objeto. En Java, no existen los destructores como tal debido al recolectar la basura de la máquina virtual de Java, que administra la memoria de forma automática, liberándola cuando detecta objetos que ya no se utilizan.
          .row.mb-5
            .col-auto.d-none.d-md-block(data-aos="fade-right")
              figure.mt-1
                img(src='@/assets/curso/tema2/img21.svg', style="width:70px" alt='')
            .col(data-aos="fade-left")
              p.mb-0 Aunque el manejo de memoria en Java es automático gracias al recolector de basura, los usuarios pueden sugerir la ejecución del recolector de basura mediante una instrucción específica, aunque el momento exacto de la recolección de basura no es garantizado.
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Métodos accesores y modificadores
    p.mb-5(data-aos="fade-right") En la programación orientada a objetos, existen dos tipos fundamentales de modificadores de acceso para los miembros de una clase: público (public) y privado (private).
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img11.png', style="width:300px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        .row
          .col-12
            .p-4.bg-c32
              p.mb-0 #[b Público (#[i public])]
              p.mb-0 Un miembro público es accesible desde cualquier parte del código, incluso fuera de su clase de definición. Esto permite que cualquier otra clase o componente del programa interactúe con el miembro público sin restricciones. El acceso es universal, permitiendo que cualquier otro código, independientemente de su paquete o clase, utilice el miembro público.
          .col-12
            .p-4.bg-c33
              p.mb-0 #[b Privado (#[i private])]
              p.mb-0 Un miembro privado solo puede ser accedido por otros métodos dentro de la misma clase. Esto se utiliza para controlar la exposición y manipulación de los datos internos del objeto, evitando el acceso o modificación directa por parte de código externo a la clase. El acceso está estrictamente limitado a la clase donde el miembro privado es declarado. Otros componentes del programa no pueden acceder directamente a estos miembros privados.
    .row.bg-c34
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") Hay cuatro tipos de modificadores de acceso disponibles en Java:
          .row.justify-content-center.mb-4(data-aos="fade-left")
            .col-11.col-md-8.col-lg-6.mb-5
              .px-4.pb-4.bg-c35.shadow.h-100
                figure.fig-p2
                  img(src='@/assets/curso/tema2/img22.svg', style="width:120px" alt='')
                p #[b Predeterminado (#[i default])]
                p Cuando no se especifica un modificador de acceso para una clase, método o miembro de datos, se aplica el modificador de acceso predeterminado por defecto. Los miembros de datos, clases o métodos con acceso predeterminado son accesibles solo dentro del mismo paquete. 
                p.mb-0 Por ejemplo, la clase Producto y el método mostrar, al tener modificador de acceso predeterminado, no pueden ser accedidos desde otro paquete.
            .col-11.col-md-8.col-lg-6.mb-5
              .px-4.pb-4.bg-c35.shadow
                figure.fig-p2
                  img(src='@/assets/curso/tema2/img23.svg', style="width:120px" alt='')
                p #[b Privado (#[i private])]
                p Se indica con la palabra clave “private”. Los métodos o miembros de datos declarados como privados son accesibles únicamente dentro de la clase donde se declaran.
                p -Ninguna otra clase del mismo paquete puede acceder a los miembros privados.
                p.mb-0 Las clases e interfaces no pueden declararse como privadas.
            .col-11.col-md-8.col-lg-6.mb-5
              .px-4.pb-4.bg-c35.shadow.h-100
                figure.fig-p2
                  img(src='@/assets/curso/tema2/img24.svg', style="width:120px" alt='')
                p #[b Protegido (#[i protected])]
                p Se especifica con la palabra clave #[i “protected”]. Los métodos o miembros de datos declarados como #[i “protected”] son accesibles dentro del mismo paquete o en subclases situadas en paquetes diferentes.
                p.mb-0 Accesible dentro del mismo paquete y por subclases en paquetes diferentes, promoviendo así una forma de herencia protegida.
            .col-11.col-md-8.col-lg-6.mb-5
              .px-4.pb-4.bg-c35.shadow
                figure.fig-p2
                  img(src='@/assets/curso/tema2/img25.svg', style="width:120px" alt='')
                p #[b Público (#[i public])]
                p Se indica con la palabra clave #[i “public”]. Este modificador de acceso tiene el alcance más amplio de todos.
                p.mb-0 Las clases, métodos o miembros de datos declarados como públicos son accesibles desde cualquier lugar del programa, sin restricciones en el alcance. Por ejemplo, declarar el método mostrar de la clase  Producto como público permite que se acceda a este método desde cualquier parte del programa.
          .row.mb-4(data-aos="fade-down")
            .col-auto.bg-c12
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema2/img5.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Métodos accesores (#[i get], #[i set])
          p.mb-5(data-aos="fade-right") Los métodos accesores permiten obtener o modificar los atributos de un objeto y se clasifican en dos tipos: #[b #[i “get”]] y #[b #[i “set”]].
          .row.mb-5
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12
                  .p-4.bg-c36
                    p.mb-0 - Los métodos “get” permiten acceder al valor de un atributo.
                    p.mb-0 - Los métodos “set” permiten modificar el valor de un atributo.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img26.svg', style="width:290px" alt='').m-auto
          .row.mb-5
            .col-auto.d-none.d-md-block(data-aos="fade-right")
              figure.mt-1
                img(src='@/assets/curso/tema2/img21.svg', style="width:70px" alt='')
            .col(data-aos="fade-left")
              p.mb-0 El nombre de estos métodos comienza con #[b #[i “get”]] o #[b #[i “set”]], seguido del nombre del atributo con la primera letra en mayúscula. Su modificador de acceso es siempre público para facilitar el acceso o modificación de los atributos desde fuera de la clase. Por ejemplo, #[b “getNombre”] o #[b “setNombre”].
    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c24
              p.mb-0 #[b Ejemplo de sintaxis del método #[i “get”]:]
          .col-12
            .px-4.py-3.bg-c25
              .row.mb-3
                .col-auto
                  .p-4.bg-c26
                    pre
                      p.mb-0 #[span.txt-c1 public] tipoDatoAtributo #[span.txt-c2 getAtributo()] {
                      p.mb-0     return atributo;
                      p.mb-0 }
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c24
              p.mb-0 #[b Ejemplo de sintaxis del método #[i “set”]:]
          .col-12
            .px-4.py-3.bg-c25
              .row.mb-3
                .col-auto
                  .p-4.bg-c26
                    pre
                      p.mb-0 #[span.txt-c1 public] void #[span.txt-c2 setAtributo(tipoDatoAtributo variable)] {
                      p.mb-0     #[span.txt-c4 this].atributo = variable;
                      p.mb-0 }
    .row.justify-content-center
      .col-lg-10
        .row(data-aos="fade-right")
          .col-12
            .px-4.py-3.bg-c24
              p.mb-0 #[b Ejemplo implementación de métodos #[i get] y #[i set] en Java:]
          .col-12.mb-4
            .px-4.py-3.bg-c25
              .row
                .col-12
                  .px-4.py-3.bg-c14
                    figure
                      img(src='@/assets/curso/tema2/img7.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c15
                    pre
                      p.mb-0 #[span.txt-c1 public class] #[span.txt-c2 Producto] { // Clase
                      p.mb-0     private int codigo; // atributos
                      p.mb-0     private String nombre; // atributos
                      p.mb-0 
                      p.mb-0     #[span.txt-c1 public] int #[span.txt-c2 getCodigo()] { // método get del atributo codigo
                      p.mb-0         return codigo; // obtiene el valor del atributo codigo
                      p.mb-0     }
                      p.mb-0 
                      p.mb-0     #[span.txt-c1 public void] #[span.txt-c2 setCodigo(int codigo)] { // método set del atributo codigo
                      p.mb-0         #[span.txt-c4 this].codigo = codigo; // cambia el valor del atributo codigo
                      p.mb-0     }
                      p.mb-0 
                      p.mb-0     #[span.txt-c1 public] String #[span.txt-c2 getNombre()] { // método get del atributo nombre
                      p.mb-0         return nombre; // obtiene el valor del atributo nombre
                      p.mb-0     }
                      p.mb-0 
                      p.mb-0     #[span.txt-c1 public void] #[span.txt-c2 setNombre(String nombre)] { // método set del atributo nombre
                      p.mb-0         #[span.txt-c4 this].nombre = nombre; // cambia el valor del atributo nombre
                      p.mb-0     }
                      p.mb-0 }
          p En el ejemplo se presenta  la clase #[b Producto] con sus atributos código y nombre, por cada uno de estos atributos encontramos sus métodos #[b #[i get]] y #[b #[i set]] para obtener y cambiar el valor de cada uno de ellos.
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Sobrecarga de métodos (#[i overload])
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 La sobrecarga de métodos permite definir múltiples constructores o métodos con el mismo nombre dentro de una clase, bajo la condición de que estos no compartan la misma cantidad y tipo de parámetros. En esencia, la sobrecarga facilita la declaración de métodos homónimos que difieren en los parámetros que aceptan. Por lo tanto, no es posible tener dos métodos con idéntico nombre y parámetros coincidentes. En este contexto, los argumentos proporcionados al llamar al método determinan cuál de ellos se ejecuta.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img27.svg', style="width:250px" alt='').m-auto
    .row.justify-content-center
      .col-lg-10
        .row(data-aos="fade-left")
          .col-12
            .px-4.py-3.bg-c24
              p.mb-0 #[b Ejemplo implementación de sobrecarga de constructores y métodos en Java:]
          .col-12.mb-4
            .px-4.py-3.bg-c25
              .row
                .col-12
                  .px-4.py-3.bg-c14
                    figure
                      img(src='@/assets/curso/tema2/img7.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c15
                    pre
                      p.mb-0 #[span.txt-c1 public class] #[span.txt-c2 Producto] { // Clase
                      p.mb-0     #[span.txt-c1 private] #[span.txt-c2 int] codigo; // atributos
                      p.mb-0     #[span.txt-c1 private] String nombre; // atributos
                      p.mb-0     #[span.txt-c1 private] double precio; // atributos
                      p.mb-0 
                      p.mb-0     #[span.txt-c1 public] #[span.txt-c2 Producto()] {
                      p.mb-0     }
                      p.mb-0 
                      p.mb-0     #[span.txt-c1 public] Producto(#[span.txt-c2 int] codigo, String nombre, #[span.txt-c2 double] precio) {
                      p.mb-0         this.codigo = codigo;
                      p.mb-0         this.nombre = nombre;
                      p.mb-0         this.precio = precio;
                      p.mb-0     }
                      p.mb-0 
                      p.mb-0     #[span.txt-c1 public] #[span.txt-c2 void descontarProducto](#[span.txt-c2 double] precio, String nombre) {
                      p.mb-0         #[span.txt-c2 double descuento] = precio * #[span.txt-c2 0.10];
                      p.mb-0         System.out.println("El producto " + nombre + " tiene descuento");
                      p.mb-0     }
                      p.mb-0 
                      p.mb-0     #[span.txt-c1 public void] #[span.txt-c2 descontarProducto](int precio) {
                      p.mb-0         #[span.txt-c2 double descuento] = precio * 0.10;
                      p.mb-0     }
                      p.mb-0 }
          p El ejemplo presenta la sobrecarga tanto de constructores como de métodos. Se evidencia sobrecarga en los constructores de la clase Producto, donde se han creado dos constructores con el mismo nombre pero con distintos parámetros. Una situación similar ocurre con el método #[b descontarProducto], que se define dos veces, cada uno con diferentes parámetros.

</template>

<script>
export default {
  name: 'Tema2',
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
