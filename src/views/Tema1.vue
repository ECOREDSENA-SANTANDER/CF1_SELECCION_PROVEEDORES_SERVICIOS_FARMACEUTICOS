<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Análisis de las características  del negocio farmacéutico

      .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
          p.mb-0 El negocio farmacéutico en Colombia constituye un pilar esencial del sistema de salud, cuya misión es garantizar el acceso oportuno, seguro y de calidad a medicamentos, dispositivos médicos y tecnologías en salud, debido al impacto directo de estos productos en la salud y el bienestar de la población, el sector está regulado por una rigurosa normatividad técnica, sanitaria y comercial.
          br
          br
          p.mb-0 En el ámbito nacional, los establecimientos farmacéuticos se clasifican según su función y nivel de complejidad. Entre ellos se encuentran droguerías, farmacias, servicios farmacéuticos ambulatorios y hospitalarios, distribuidores mayoristas y depósitos de medicamentos. Cada uno debe cumplir con los requisitos definidos por el Ministerio de Salud y Protección Social y estar habilitado conforme a lo establecido en la Resolución 1403 de 2007, complementada por normativas como la Resolución 1557 de 2023, que regulan su organización y funcionamiento.

      .bloque-texto-a.color-acento-contenido.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
        .row.m-0.align-items-center.justify-content-center
          .col-lg-9.mb-0.mb-lg-0
            .bloque-texto-a__texto.p-lg-5.p-md-4.p-4.mb-lg-0.mb-4.my-3.my-lg-0
              p.mb-0 Dentro de este contexto, una de las competencias clave para quienes participan en procesos de contratación, compras y abastecimiento en servicios farmacéuticos es el conocimiento detallado del portafolio de productos disponibles. Esta comprensión permite establecer criterios adecuados para la evaluación y selección de proveedores, optimizando los procesos de adquisición y asegurando la calidad de los productos que llegan al usuario final. El sector maneja un amplio y diverso portafolio que abarca desde medicamentos esenciales hasta suplementos nutricionales y dispositivos médicos, cada uno sujeto a regulaciones específicas, características técnicas y condiciones de manejo.
          .col-lg-3.col-md-6.col-9.mb-0
            img(src='@/assets/curso/tema1/2.png', alt='')

      .titulo6.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Medicamentos
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p.mb-4 Constituyen el eje central del servicio farmacéutico. Son productos que contienen principios activos con propiedades terapéuticas, destinados a la prevención, diagnóstico, tratamiento o alivio de enfermedades. Se clasifican en cuatro categorías principales: medicamentos de venta libre, medicamentos con fórmula médica, medicamentos controlados y medicamentos vitales no disponibles.
          p.mb-lg-0.mb-4 En Colombia, su producción, importación, comercialización y dispensación están reguladas por el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA), bajo normativas como la Resolución 1403 de 2007 y la Resolución 1557 de 2023. Los proveedores deben contar con registro sanitario vigente, cumplir con las Buenas Prácticas de Manufactura y garantizar la trazabilidad del producto en toda la cadena de suministro.
        .col-lg-5.col-md-7.col-9
          img(alt="" src="@/assets/curso/tema1/3.png")
      
      .titulo7.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Insumos para la salud
      
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/4.png')})`}"
        )
        .bloque-texto-g__texto.p-lg-5.p-4
          p.mb-0 Incluyen materiales de uso médico o quirúrgico que, aunque no poseen acción farmacológica directa, son fundamentales para la atención en salud. Dentro de esta categoría se encuentran elementos como jeringas, guantes, gasas, catéteres, soluciones intravenosas y cintas adhesivas.
          br
          br
          p.mb-0 Debido a su alta rotación y demanda constante, especialmente en instituciones hospitalarias y servicios de urgencias, es indispensable que los proveedores aseguren disponibilidad permanente, entregas oportunas y el cumplimiento de normas de calidad e higiene.

      .titulo7.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Dispositivos médicos

      p.mb-4 Comprenden instrumentos, equipos, implementos o materiales utilizados en la prevención, diagnóstico, monitoreo o tratamiento de enfermedades. Esta categoría incluye productos como tensiómetros, termómetros digitales, equipos de infusión, monitores de signos vitales, prótesis, válvulas, entre otros.
      p.mb-4 En el contexto colombiano, el INVIMA clasifica los dispositivos médicos según su nivel de riesgo:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8(alt='Tabla que clasifica los dispositivos médicos según su nivel de riesgo: Clase I (bajo riesgo), Clase IIa y IIb (riesgo moderado y moderado alto) y Clase III (alto riesgo), con ejemplos como termómetros digitales, tensiómetros, incubadoras, marcapasos y válvulas cardíacas.')
    
          .titulo-sexto.color-secundario.mb-4
            h5 Tabla 1. 
            | Niveles de riesgos

          .tabla-a.color-acento-contenido
            table
              caption Referencia Tabla - Norma APA
              thead
                tr
                  th Nivel de riesgo
                  th Ejemplos de dispositivos médicos
              tbody
                tr
                  td Clase I (bajo riesgo)
                  td
                    .row
                      .col-lg-12.left
                        p.mb-0 - Termómetros digitales
                        p.mb-0 - Guantes de examen
                        p.mb-0 - Gasas estériles
                        p.mb-0 - Cánulas nasales
                        p.mb-0 - Vendajes
                tr
                  td Clase IIA (riesgo moderado)
                  td 
                    .row
                      .col-lg-12.left
                        p.mb-0 - Tensiómetros automáticos
                        p.mb-0 - Equipos de succión
                        p.mb-0 - Sillas de ruedas
                        p.mb-0 - Equipos de terapia respiratoria domiciliaria
                        p.mb-0 - Jeringas automáticas
                tr
                  td Clase IIB (riesgo moderado alto)
                  td 
                    .row
                      .col-lg-12.left
                        p.mb-0 - Equipos de infusión intravenosa
                        p.mb-0 - Monitores de signos vitales
                        p.mb-0 - Bombas de insulina
                        p.mb-0 - Incubadoras neonatales
                        p.mb-0 - Concentradores de oxígeno
                tr
                  td Clase III (alto riesgo)
                  td 
                    .row
                      .col-lg-12.left
                        p.mb-0 - Marcapasos
                        p.mb-0 - Prótesis ortopédicas internas (caderas, rodillas)
                        p.mb-0 - Válvulas cardíacas
                        p.mb-0 - #[em Stents] coronarios
                        p.mb-0 - Dispositivos de asistencia ventricular
        .col-lg-4.d-none.d-lg-block
          img.mb-0(alt="" src="@/assets/curso/tema1/37.png")

      .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 Esta clasificación determina las condiciones para su registro, comercialización y control sanitario. Los proveedores deben contar con certificaciones técnicas, presentar fichas técnicas y estudios de funcionalidad, y cumplir con la normativa vigente que garantiza la seguridad, eficacia y calidad del producto.

      .bloque-texto-a.color-secundarios.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
        .row.m-0.align-items-center.justify-content-center
          .col-lg-9.mb-0.mb-lg-0
            .bloque-texto-a__texto.p-lg-5.p-4.mb-lg-0.mb-4.my-3.my-lg-0
              p.mb-0 Aunque no hacen parte del modelo biomédico convencional, los productos homeopáticos tienen una presencia reconocida en algunos servicios farmacéuticos. Son elaborados a partir de sustancias de origen vegetal, mineral o animal, y se fundamentan en los principios propios de la homeopatía. En Colombia, su regulación está a cargo del INVIMA, el cual exige registro sanitario, validación de los procesos de preparación y cumplimiento de condiciones específicas de conservación. La selección de proveedores en esta categoría debe contemplar su experiencia, especialización y alineación con criterios de calidad terapéutica y trazabilidad del producto.
          .col-lg-3.col-md-6.col-9.mb-0
            img(src='@/assets/curso/tema1/38.png', alt='')

      .titulo8.mb-lg-5.mb-5.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Suplementos nutricionales
      
      .row.justify-content-center.align-items-start.mb-0(data-aos="fade-right")
        .col-lg-5.col-md-8.col-10.mb-4
          img(src='@/assets/curso/tema1/7.png')
        .col-lg-7
          .row.justify-content-center.align-items
            .col-lg-2
              img.d-none.d-lg-block(src='@/assets/curso/tema1/8.svg')
            .col-lg-10
              p.mb-0 Incluyen productos como vitaminas, minerales, aminoácidos, prebióticos, probióticos y otras sustancias destinadas a complementar la alimentación. Aunque no son considerados medicamentos, tienen implicaciones directas sobre la salud, por lo que están sujetos a control sanitario. Su evaluación debe considerar la composición nutricional, respaldo científico, etiquetado adecuado y cumplimiento de normas de inocuidad alimentaria. Un proveedor confiable debe garantizar productos certificados, disponer de fichas técnicas y cumplir con los requisitos del INVIMA y otras autoridades sanitarias competentes.

      separador
      #t_1_1.titulo-segundo.mb-5
        h2 1.1 Capacidad de compra y almacenamiento
      
      p.mb-4 La capacidad de compra y almacenamiento representa una variable crítica que debe ser considerada al momento de evaluar y seleccionar proveedores en los servicios farmacéuticos. Esta capacidad influye directamente en la sostenibilidad del servicio, la disponibilidad oportuna de productos, el cumplimiento de estándares de calidad y la seguridad en el manejo de medicamentos e insumos.
      
      .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 Uno de los aspectos fundamentales a evaluar es la infraestructura física del proveedor o del servicio farmacéutico contratante. Esta debe cumplir con los requisitos normativos establecidos por el Ministerio de Salud y Protección Social y el INVIMA, los cuales incluyen:
      
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          PasosA.color-primario.pas.mb-0(tipo="n")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-7
                h4 Áreas diferenciadas para recepción
                p.mb-3 Zona exclusiva para la recepción de productos provenientes de los proveedores. Debe estar separada del área de almacenamiento y dispensación para evitar contaminación cruzada. En esta zona se debe verificar:
                ol.lista-ol--cuadro.mb-0
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Integridad de los empaques.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Concordancia entre factura y pedido.
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span c
                    | Condiciones de transporte (temperatura, humedad).
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span d
                    | Fecha de vencimiento y número de lote.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span e
                    | Los productos que no cumplen con los requisitos deben ser aislados de inmediato para cuarentena o devolución.
              .col-lg-5.cel
                figure
                  img(src='@/assets/curso/tema1/9.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-5.cel
                figure
                  img(src='@/assets/curso/tema1/10.png', alt='Texto que describa la imagen')
              .col-lg-7.text-start
                h4 Área de almacenamiento
                p.mb-3 Espacio destinado a conservar medicamentos y dispositivos médicos bajo condiciones adecuadas de temperatura, humedad, ventilación, limpieza y organización, garantizando su calidad y estabilidad. Debe incluir:
                ol.lista-ol--cuadro
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Estantería en materiales lavables y resistentes.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Zonas identificadas según el tipo de producto (refrigerado, controlado, vencido, etc.).
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span c
                    | Control diario de temperatura.
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span d
                    | Acceso restringido y supervisado.
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-7
                h4 Área de cuarentena
                p.mb-3 Espacio físicamente delimitado para ubicar productos no aprobados para su uso, pendientes de inspección o que presentan novedades (daños, dudas sobre autenticidad, etc.). Estos productos deben mantenerse:
                ol.lista-ol--cuadro
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Separados del resto del inventario.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Sin ser utilizados ni distribuidos.
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span c
                    | Con registros de ingreso y salida actualizados.
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span d
                    | En un espacio destinado a prevenir la distribución de productos no seguros.
              .col-lg-5.cel
                figure
                  img(src='@/assets/curso/tema1/11.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-5.cel
                figure
                  img(src='@/assets/curso/tema1/12.png', alt='Texto que describa la imagen')
              .col-lg-7.text-start
                h4 Área de dispensación
                p.mb-3 Zona en la que se preparan y entregan los medicamentos al usuario final. Debe garantizar:
                ol.lista-ol--cuadro
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Acceso exclusivo a personal autorizado.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Condiciones higiénicas y organizadas.
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span c
                    | Revisión de fórmulas médicas o recetas.
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span d
                    | Verificación de identidad del paciente.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span e
                    | Información clara al momento de la entrega (dosis, vía, frecuencia).
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span f
                    | Implementación de sistemas de dispensación automatizada, cuando se disponga, para mayor eficiencia y seguridad.
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-7
                h4 Área de devoluciones
                p.mb-3 Espacio destinado a recibir productos retornados por causas como vencimientos, errores de entrega, productos defectuosos o devoluciones de pacientes u otras áreas. Este espacio debe:
                ol.lista-ol--cuadro
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Estar separado del inventario general.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Registrar el motivo y condiciones de cada producto devuelto.
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span c
                    | Determinar si el producto puede ser reincorporado, destruido o devuelto al proveedor.
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span d
                    | Una gestión adecuada de esta área reduce pérdidas y garantiza la trazabilidad.
                p.mb-0 La infraestructura debe contar además con condiciones óptimas de higiene, ventilación, iluminación, control de plagas, sistemas de seguridad contra incendios y señalización clara, especialmente cuando se manipulan productos sensibles o de alto valor.
              .col-lg-5.cel
                figure
                  img(src='@/assets/curso/tema1/13.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-5.cel
                figure
                  img(src='@/assets/curso/tema1/14.png', alt='Texto que describa la imagen')
              .col-lg-7.text-start
                h4 Área de conservación
                p.mb-3 Deben asegurar la estabilidad, eficacia y seguridad de los productos durante su almacenamiento. Para ello, es necesario implementar:
                ol.lista-ol--cuadro
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Sistemas de monitoreo y registro continuo.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Procedimientos estandarizados de verificación al momento de la recepción y durante el almacenamiento.
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span c
                    | Protocolos de respuesta ante desviaciones.
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-7
                h4 Área de rotación de inventarios
                p.mb-3 Es una práctica esencial en la gestión de medicamentos e insumos. Implica el control sistemático del flujo de productos, priorizando la salida de los que tengan menor vida útil mediante métodos como PEPS (primero en entrar, primero en salir). Esta estrategia:
                ol.lista-ol--cuadro
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Minimiza vencimientos y pérdidas.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Mejora la trazabilidad.
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span c
                    | Asegura disponibilidad continua.
                p.mb-3 Por lo tanto, la selección de proveedores debe considerar su capacidad para garantizar entregas periódicas, eficientes y ajustadas a la demanda reactivos. Estos deben mantenerse entre 2 °C y 8 °C desde la producción hasta su administración. Por ello, tanto el proveedor como el establecimiento deben disponer de:
                  li.d-flex.mb-1 
                    .lista-ol--cuadro__vineta
                      span a
                    | Equipos de refrigeración calibrados.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Sistemas de respaldo energético.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span c
                    | Empaques térmicos para el transporte.
                  li.d-flex.mb-1
                    .lista-ol--cuadro__vineta
                      span d
                    | Registros de temperatura (manuales o automatizados).
              .col-lg-5.cel
                figure
                  img(src='@/assets/curso/tema1/15.png', alt='Texto que describa la imagen')

      p.mb-0 Esto garantiza la trazabilidad térmica en toda la cadena logística y protege la eficacia del producto hasta su uso final.       
      
      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2 Modelo de operación en servicios farmacéuticos

      p.mb-4 El modelo de operación de un servicio farmacéutico define cómo se organiza y ejecuta el proceso de adquisición, almacenamiento, distribución y entrega de medicamentos y productos para la salud.

      .bloque-texto-a.color-secundario.c1.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
        .row.m-0.align-items-center.justify-content-center
          .col-lg-9.mb-0.mb-lg-0
            .bloque-texto-a__texto.p-lg-4.p-md-4.p-4.mb-lg-0.mb-4.my-3.my-lg-0
              p.mb-4 Esta estructura operativa influye directamente en la selección de proveedores, ya que cada modelo impone condiciones logísticas, técnicas y regulatorias particulares, que deben ser consideradas durante la contratación. Para los aprendices del SENA, comprender estos modelos es esencial para aplicar criterios de evaluación pertinentes y proponer estrategias efectivas en la gestión farmacéutica.
              p.mb-0 Uno de los modelos más comunes es el de venta directa al público, característico de droguerías y farmacias comerciales. En este esquema, los productos se adquieren a distribuidores o mayoristas y se venden directamente al consumidor final, sin mediación institucional. Este modelo exige proveedores con alta capacidad de suministro, tiempos de entrega eficientes, precios competitivos y cumplimiento de estándares de calidad. Además, requiere vigilancia constante sobre la normatividad relacionada con la publicidad de medicamentos, la venta con o sin fórmula médica y la dispensación responsable al usuario.
          .col-lg-3.col-md-6.col-9.mb-0
            img(src='@/assets/curso/tema1/16.png', alt='')

      .bg1.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema1/17.png', alt='')
          .col-lg-7(data-aos="fade-left")
            .p-4
              p.mb-0(data-aos="fade-left") Otro modelo clave es la dispensación institucional, propio de hospitales, clínicas y Entidades Promotoras de Salud (EPS), donde los medicamentos se entregan directamente a pacientes afiliados o usuarios internos. Este modelo exige una coordinación precisa entre farmacia, compras y prescripción médica. Los proveedores deben cumplir estrictamente con la normativa sanitaria, garantizar trazabilidad del producto, ofrecer soporte técnico posventa y mantener una gestión documental adecuada (registro sanitario, fichas técnicas, certificados de calidad). Frecuentemente se exige la entrega por dosis unitaria o en empaques específicos para cada paciente.

      .cajon.color-primario.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 El modelo de distribución mayorista contempla a proveedores que actúan como intermediarios entre los laboratorios farmacéuticos y distintos tipos de establecimientos (droguerías, hospitales, EPS, IPS). Se caracteriza por manejar grandes volúmenes de compra y entrega, lo que requiere infraestructura robusta, sistemas logísticos avanzados, cadena de frío para productos sensibles y alta capacidad de negociación. El aprendiz debe identificar proveedores con experiencia en distribución nacional, cumplimiento fiscal y documentación legal vigente, aspectos que garantizan una operación eficiente y legalmente segura.

      .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/18.png')})`}"
        )
        .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
          p.mb-0 Por último, se encuentra la tercerización del servicio farmacéutico, en la que una institución pública o privada delega total o parcialmente la gestión del servicio a un operador logístico o empresa especializada. Este modelo, común en el régimen subsidiado, está regulado por normas específicas que exigen cumplimiento técnico, seguimiento a indicadores de calidad y vigilancia de la atención farmacéutica prestada por terceros. La selección de estos operadores debe considerar su experiencia, tecnología, cobertura geográfica, cumplimiento normativo, historial de resultados y capacidad de respuesta ante eventos críticos como desabastecimientos, devoluciones o eventos adversos.

      .bg3.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema1/19.svg', alt='')
          .col-lg-7(data-aos="fade-left")
            .p-4
              .bg2.p-2.mb-4
                h4.mb-0.ps-3.pe-3 Condiciones regulatorias y fiscales en los servicios farmacéuticos
              p.mb-0(data-aos="fade-left") En Colombia, los servicios farmacéuticos operan bajo un marco normativo estricto, orientado a garantizar la calidad, seguridad y eficacia de los productos suministrados. Por tanto, la evaluación de proveedores debe ir más allá de los aspectos económicos o logísticos, incorporando criterios regulatorios y fiscales que aseguren la legalidad y confiabilidad de los actores involucrados.

      .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 Uno de los principales requisitos es la verificación del cumplimiento de las Buenas Prácticas de Elaboración (BPE), aplicables a laboratorios y fabricantes. Estas prácticas, definidas por el INVIMA y alineadas con estándares internacionales, regulan la producción de medicamentos mediante el control de calidad, condiciones ambientales, capacitación del personal, validación de procesos y documentación sistemática. Aunque no aplican directamente a todos los proveedores, contar con productos fabricados bajo BPE es fundamental para garantizar la trazabilidad.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          .bg4.p-4.mb-lg-0.mb-5
            p.mb-lg-5.mb-0.my-lg-2.te1.my-md-0.my-0 También son obligatorias las Buenas Prácticas de Almacenamiento (BPA), que regulan las condiciones físicas, técnicas y organizativas del almacenamiento. El proveedor debe demostrar que posee instalaciones habilitadas, con control ambiental (temperatura, humedad, ventilación), procedimientos documentados, registros de ingresos y egresos, y planes de contingencia ante emergencias.
        .col-lg-3.d-none.d-lg-block
          img.imt1(src='@/assets/curso/tema1/20.svg', alt='')
        .col-lg-4
          .br.mb-2.d-none.d-lg-block
          p.mb-0 El control de medicamentos de uso institucional es otra exigencia clave, especialmente para productos regulados por el Estado o con alto riesgo sanitario. Estos medicamentos requieren seguimiento específico en su prescripción, distribución y administración. El proveedor debe estar autorizado para su comercialización, cumplir con normas de transporte seguro y respetar lo dispuesto en normativas como la Resolución 1478 de 2006 y las circulares técnicas del INVIMA.

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
          .titu
        .col.ps-lg-0
          .sub.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
            h4.mb-0 Responsabilidades del dispensador frente al control de medicamentos de uso institucional

      p.mb-4 El dispensador tiene funciones clave para asegurar el cumplimiento normativo, entre ellas:

      .tarjeta--container.row.mb-5
        .col-lg-4.col-md-6.col-12.tarjeta.color-acento-contenido.p-lg-5.p-4.mb-lg-0.mb-4
          .row.justify-content-center.mb-4
            .col-6
              figure
                img.im1(src='@/assets/curso/tema1/21.svg', alt='Texto que describa la imagen')          
          p.text-center.text-white.tb Verificar que el medicamento cuente con autorización vigente.

        .col-lg-4.col-md-6.col-12.tarjeta.color-acento-contenido.p-lg-5.p-4.mb-lg-0.mb-4
          .row.justify-content-center.mb-4
            .col-6
              figure
                img.im2(src='@/assets/curso/tema1/22.svg', alt='Texto que describa la imagen')          
          p.text-center.text-white.tb Confirmar que esté incluido en los listados institucionales (POS o No POS) y que exista prescripción médica válida.

        .col-lg-4.col-md-6.col-12.tarjeta.color-acento-contenido.ce1.p-lg-5.p-4.mb-lg-0
          .row.justify-content-center.mb-4
            .col-6
              figure
                img.im3(src='@/assets/curso/tema1/23.svg', alt='Texto que describa la imagen')          
          p.text-center.text-white.tb Asegurar que en el caso de medicamentos controlados o especiales, se cumplan los protocolos definidos por la institución y la legislación nacional (como la Resolución 1478 de 2006).

      .titulo.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.ps-lg-3 Buenas prácticas del dispensador en el control de medicamentos de uso institucional

      .row.justify-content-center.align-items-start.mb-5
        .col-lg-8
          AcordionA.activor(tipo="b" clase-tarjeta="tarjeta tarjeta--griss")
            .row.align-items-center(titulo="Control del ingreso al inventario")
              .col-lg-12
                p.mb-0 Al recibir medicamentos de uso institucional, el dispensador debe verificar que cuenten con el registro sanitario del INVIMA, número de lote, fecha de vencimiento y condiciones físicas adecuadas. Además, debe asegurarse de que los productos sean registrados correctamente en el sistema de inventario del establecimiento.
            .row.align-items-center(titulo="Aplicación de buenas prácticas de almacenamiento")
              .col-lg-12
                p.mb-0 Es fundamental conservar los medicamentos en condiciones óptimas, de acuerdo con las especificaciones del fabricante, incluyendo temperatura, humedad, exposición a la luz y cadena de frío, si aplica. Esta medida es especialmente crítica en medicamentos de alto costo o con requerimientos especiales de conservación.
            .row.align-items-center(titulo="Registro de la dispensación")
              .col-lg-12
                p.mb-0 Cada entrega de medicamentos a pacientes institucionales debe ser documentada con información como el nombre del paciente, número de historia clínica, dosis administrada, fecha de entrega y firma del personal responsable. Estos registros garantizan la trazabilidad del medicamento y permiten auditorías posteriores.
            .row.align-items-center(titulo="Reporte de eventos adversos o desviaciones")
              .col-lg-12
                p.mb-0 En caso de identificar un error de medicación, una reacción adversa o cualquier irregularidad en el medicamento (como deterioro del empaque o cambios en su apariencia), el dispensador debe reportarlo de inmediato al comité de farmacovigilancia institucional y seguir los protocolos establecidos.
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/tema1/24.png', alt='Texto que describa la imagen')          

      AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5(data-aos="fade-right")
        .row.justify-content-center.align-items.p-2(titulo="Custodia de medicamentos de control especial")
          .col-lg-6.mb-lg-0.mb-4
            p.mb-0 Para el manejo de opioides, psicotrópicos u otros medicamentos regulados, se debe llevar un libro de control oficial (manual o electrónico), en el que se consignen entradas y salidas firmadas, junto con inventarios físicos periódicos. El acceso a estos medicamentos debe ser restringido y supervisado.
          .col-lg-6.col-md-9.col-10
            img.mb-0(alt="" src="@/assets/curso/tema1/25.png")
        .row.justify-content-center.align-items.p-2(titulo="Gestión de devoluciones seguras")
          .col-lg-6.mb-lg-0.mb-4
            p.mb-0 Cuando los medicamentos no son utilizados, el dispensador debe aplicar los procedimientos institucionales de devolución o destrucción, garantizando que no se incurra en desperdicio ni en un uso inapropiado del producto.
          .col-lg-6.col-md-9.col-10
            img.mb-0(alt="" src="@/assets/curso/tema1/26.png")
        .row.justify-content-center.align-items.p-2(titulo="Participación en auditorías y procesos de mejora")
          .col-lg-6.mb-lg-0.mb-4
            p.mb-0 El dispensador debe colaborar activamente con auditorías internas, con los entes de control (como la Superintendencia Nacional de Salud), y participar en los procesos de mejora continua, enfocados especialmente en garantizar una dispensación segura, eficiente y oportuna.
          .col-lg-6.col-md-9.col-10
            img.mb-0(alt="" src="@/assets/curso/tema1/27.png")
        .row.justify-content-center.align-items.p-2(titulo="Trazabilidad y cumplimiento fiscal en la gestión de proveedores")
          .col-lg-6.mb-lg-0.mb-4
            p.mb-0 La trazabilidad de lotes y fechas de vencimiento es un pilar fundamental en la gestión farmacéutica. Cada producto debe estar debidamente identificado con su número de lote y fecha de expiración, además de contar con registros que permitan rastrear su recorrido desde el fabricante hasta el usuario final. Los proveedores, por su parte, deben garantizar documentación clara y actualizada, contar con sistemas que registren entradas y salidas, y tener mecanismos eficientes para el retiro de productos en caso de alertas sanitarias o devoluciones.
          .col-lg-6.col-md-9.col-10
            img.mb-0(alt="" src="@/assets/curso/tema1/28.png")
      
      .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 En lo que respecta al cumplimiento fiscal, los proveedores deben estar formalmente constituidos, registrados ante la DIAN y habilitados para la facturación electrónica, conforme a lo estipulado por la legislación tributaria vigente. Asimismo, deben cumplir con los requerimientos establecidos por los entes de inspección, vigilancia y control, como el INVIMA, encargado de la regulación sanitaria, y la Superintendencia Nacional de Salud, que supervisa la calidad y legalidad en la prestación de servicios de salud, incluyendo los servicios tercerizados de dispensación y logística.

      .titulo2.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.ps-lg-3 Verificación de condiciones de almacenamiento y conservación de productos farmacéuticos

      .bloque-texto-a.color-secundario.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
        .row.m-0.align-items-center.justify-content-center
          .col-lg-9.mb-0.mb-lg-0
            .bloque-texto-a__texto.p-4.mb-lg-0.mb-4.my-3.my-lg-0
              p.mb-4 La verificación de las condiciones de almacenamiento y conservación de productos farmacéuticos es esencial para asegurar que los medicamentos y dispositivos médicos mantengan su calidad, eficacia y seguridad durante su permanencia en bodega o durante el transporte.
              p.mb-0 Este proceso se basa en el cumplimiento de las Buenas Prácticas de Almacenamiento (BPA), definidas por el INVIMA y el Ministerio de Salud y Protección Social. Los establecimientos farmacéuticos y sus proveedores deben contar con infraestructura adecuada, que incluya áreas específicas para recepción, almacenamiento, cuarentena, productos próximos a vencer y devoluciones. Estas zonas deben cumplir con requisitos higiénicos y ambientales controlados, como temperatura, humedad, ventilación e iluminación, además de contar con sistemas de monitoreo y alarmas en caso de desviaciones.
          .col-lg-3.col-md-6.col-9.mb-0
            img(src='@/assets/curso/tema1/29.png', alt='')
  
      .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/30.png')})`}"
        )
        .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
          p.mb-0 El personal encargado debe verificar que los productos estén almacenados en estanterías organizadas, separadas por grupo terapéutico o nivel de riesgo, e identificar claramente los lotes y fechas de vencimiento. Debe aplicarse el método PEPS (primero en entrar, primero en salir) para garantizar la rotación adecuada y evitar vencimientos.
          br
          br
          p.mb-0 En el caso de productos termolábiles, como vacunas o insulinas, se debe garantizar el mantenimiento de la cadena de frío (usualmente entre 2 °C y 8 °C), utilizando equipos calibrados, respaldo eléctrico y controles permanentes.
      
      .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 Para los aprendices del SENA, dominar esta competencia implica saber evaluar si un proveedor cumple con los estándares de conservación exigidos por la normatividad. Esto incluye la aplicación de listas de verificación, auditorías documentales y visitas técnicas, que forman parte del proceso de selección y evaluación de proveedores farmacéuticos.

      .titulo1.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Relación con el sistema de aseguramiento en salud

      .bloque-texto-a.color-acento-contenido.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
        .row.m-0.align-items-center.justify-content-center
          .col-lg-9.mb-0.mb-lg-0
            .bloque-texto-a__texto.p-lg-5.p-md-4.p-4.mb-lg-0.mb-4.my-3.my-lg-0
              p.mb-0 En Colombia, el sistema de aseguramiento en salud se fundamenta en el principio de aseguramiento universal, operado a través de las Entidades Promotoras de Salud (EPS), las cuales afilian a la población y garantizan la prestación de los servicios incluidos en el Plan de Beneficios en Salud (PBS). En este marco, los servicios farmacéuticos desempeñan un papel fundamental al garantizar el acceso efectivo y oportuno a medicamentos. Su funcionamiento está directamente relacionado con los procesos administrativos, contractuales y financieros del sistema de aseguramiento.
          .col-lg-3.col-md-6.col-9.mb-0
            img(src='@/assets/curso/tema1/31.png', alt='')

      .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/32.png')})`}"
        )
        .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
          p.mb-0 La interacción con las EPS es clave para la operación del servicio farmacéutico. Estas entidades contratan con Instituciones Prestadoras de Servicios de Salud (IPS) y con operadores logísticos encargados de la entrega de medicamentos a sus afiliados, tanto en contextos ambulatorios como hospitalarios. Estas relaciones contractuales requieren el cumplimiento de condiciones técnicas, niveles de servicio, indicadores de calidad y esquemas de seguimiento que aseguren el abastecimiento oportuno y la trazabilidad de los productos.
          br
          br
          p.mb-0 Las IPS, por su parte, son los escenarios donde se desarrollan los procesos asistenciales y farmacéuticos. En ellas se reciben las fórmulas médicas, se realiza la dispensación al usuario y se reporta el consumo de medicamentos. Las IPS pueden operar su propio servicio farmacéutico o tercerizarlo con operadores especializados. En cualquier caso, la articulación entre los equipos asistenciales y farmacéuticos es esencial para garantizar una atención segura, eficiente y centrada en el paciente.

      .cajon.color-primario.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 En el régimen subsidiado y en regiones con alta demanda, es común que las EPS e IPS establezcan contratos con operadores logísticos para tercerizar parcial o totalmente los servicios farmacéuticos. Estos operadores se encargan de la compra, almacenamiento, distribución y entrega de medicamentos, cumpliendo con los requisitos normativos y contractuales exigidos por el sistema. La evaluación de estos proveedores debe tener en cuenta su capacidad de respuesta, cobertura geográfica, cumplimiento regulatorio, infraestructura tecnológica y experiencia en el manejo de grandes volúmenes.
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          .bg4.p-4.mb-lg-0.mb-5
            p.mb-lg-2.my-lg-2.my-md-0.mb-0 Asimismo, se realizan auditorías periódicas, tanto internas como externas, por parte de las EPS, IPS y entes de control como la Superintendencia Nacional de Salud. Estas auditorías verifican el cumplimiento normativo, la correcta dispensación de medicamentos, la trazabilidad, la gestión de inventarios y el desempeño de los proveedores. Los resultados pueden incidir directamente en la renovación de contratos, la imposición de sanciones o la implementación de mejoras en los procesos logísticos.
        .col-lg-3.d-none.d-lg-block
          img.imt(src='@/assets/curso/tema1/33.svg', alt='')
        .col-lg-4
          .br.mb-2.d-none.d-lg-block
          p.mb-0 Finalmente, los servicios farmacéuticos participan en los procesos de recobro ante la Administradora de los Recursos del Sistema General de Seguridad Social en Salud (ADRES), especialmente cuando se dispensan medicamentos no incluidos en el PBS. En estos casos, se requiere documentación clínica y administrativa rigurosa, evidencia de entrega, y cumplimiento de los lineamientos del Ministerio de Salud y del ADRES. La adecuada estructuración de estos procesos es clave para la sostenibilidad financiera del sistema y para garantizar el acceso efectivo a tratamientos.
      
      .titulo1.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-md-4.mx-3.ps-lg-3 Atención al usuario en los servicios farmacéuticos

      .bloque-texto-a.color-secundario.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
        .row.m-0.align-items-center.justify-content-center
          .col-lg-9.mb-0.mb-lg-0
            .bloque-texto-a__texto.p-4.mb-lg-0.mb-4.my-3.my-lg-0
              p.mb-4 La atención al usuario en los servicios farmacéuticos trasciende el acto técnico y representa un compromiso ético y profesional con la salud de la población. Se concibe como un proceso integral que implica interacción humana, comunicación efectiva, responsabilidad técnica y vigilancia sanitaria.
              p.mb-0 Desde el primer contacto, el usuario debe recibir una atención amable, clara, segura e informada sobre la dispensación y uso de medicamentos. El personal debe estar capacitado en competencias comunicativas, empatía, atención diferencial y resolución de conflictos. Es esencial contar con protocolos estandarizados que aseguren un trato digno y eficiente, sin discriminación. Los canales de atención (presenciales, telefónicos o digitales) deben ser accesibles, y deben existir mecanismos eficaces para la gestión de quejas, sugerencias y reclamos, con tiempos definidos de respuesta y trazabilidad.
          .col-lg-3.col-md-6.col-9.mb-0
            img(src='@/assets/curso/tema1/34.png', alt='')

      .bg1.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema1/35.png', alt='')
          .col-lg-7(data-aos="fade-left")
            .p-4
              p.mb-4(data-aos="fade-left") La farmacovigilancia es otro pilar esencial, orientado a detectar y reportar reacciones adversas, errores de medicación, interacciones medicamentosas o fallas de calidad. Los servicios farmacéuticos deben contar con protocolos internos de notificación y utilizar los formatos oficiales del INVIMA, promoviendo una cultura institucional de reporte. Esta vigilancia activa fortalece la seguridad del paciente y mejora continuamente el perfil de riesgo de los medicamentos.
              p.mb-0(data-aos="fade-left") La educación al usuario también es clave. Cada persona debe recibir información comprensible sobre la dosis, vía de administración, frecuencia, duración del tratamiento, efectos secundarios, interacciones y condiciones de almacenamiento. Esta orientación debe adaptarse al nivel educativo del paciente y, si es necesario, apoyarse con materiales gráficos o pictogramas. Una mala comunicación en este aspecto puede causar errores de administración o abandono del tratamiento.
      
      .cajon.color-acento-contenido.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 En caso de presentarse eventos adversos o errores de medicación, el servicio debe activar los protocolos de manejo clínico y legal, realizar la evaluación de causalidad, documentar el caso y definir junto al equipo médico si se continúa o suspende el tratamiento. La gestión oportuna de estos casos es un indicador directo de la calidad del servicio farmacéutico y su impacto en la seguridad del paciente.

      .tarjeta.color-primario.p-4.mb-0(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/36.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.blu Proceso de recepción de medicamentos y dispositivos médicos
                p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace: 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=GUI1LIrWu0s" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

  </template>

<script>
export default {
  name: 'Tema1',
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
