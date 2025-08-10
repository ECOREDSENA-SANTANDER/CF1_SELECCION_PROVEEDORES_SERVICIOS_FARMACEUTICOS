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
          .col-lg-9.com.mb-0.mb-lg-0
            .bloque-texto-a__texto.p-lg-5.p-md-4.p-4.mb-lg-0.mb-4.my-3.my-lg-0
              p.mb-0 Dentro de este contexto, una de las competencias clave para quienes participan en procesos de contratación, compras y abastecimiento en servicios farmacéuticos es el conocimiento detallado del portafolio de productos disponibles. Esta comprensión permite establecer criterios adecuados para la evaluación y selección de proveedores, optimizando los procesos de adquisición y asegurando la calidad de los productos que llegan al usuario final. El sector maneja un amplio y diverso portafolio que abarca desde medicamentos esenciales hasta suplementos nutricionales y dispositivos médicos, cada uno sujeto a regulaciones específicas, características técnicas y condiciones de manejo.
          .col-lg-3.col-md-6.col-9.mb-0
            img(src='@/assets/curso/tema1/2.png', alt='')

      .tarjetaf.overflow-hidden.p-4.mb-5
        SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
          .row.justify-content-center.align-items-center.p-0.p-lg-4
            .col-lg-7
              h4.mb-4 Medicamentos
              p.mb-4 Constituyen el eje central del servicio farmacéutico. Son productos que contienen principios activos con propiedades terapéuticas, destinados a la prevención, diagnóstico, tratamiento o alivio de enfermedades. Se clasifican en cuatro categorías principales: medicamentos de venta libre, medicamentos con fórmula médica, medicamentos controlados y medicamentos vitales no disponibles.
              p.mb-lg-0.mb-4 En Colombia, su producción, importación, comercialización y dispensación están reguladas por el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA), bajo normativas como la Resolución 1403 de 2007 y la Resolución 1557 de 2023. Los proveedores deben contar con registro sanitario vigente, cumplir con las Buenas Prácticas de Manufactura y garantizar la trazabilidad del producto en toda la cadena de suministro.
            .col-lg-5.col-md-7
              img.mb-0(alt="" src="@/assets/curso/tema1/3.svg")
          .row.justify-content-center.align-items-center.p-0.p-lg-4
            .col-lg-7
              h4.mb-4 Insumos para la salud
              p.mb-4 Incluyen materiales de uso médico o quirúrgico que, aunque no poseen acción farmacológica directa, son fundamentales para la atención en salud. Dentro de esta categoría se encuentran elementos como jeringas, guantes, gasas, catéteres, soluciones intravenosas y cintas adhesivas.
              p.mb-lg-0.mb-4 Debido a su alta rotación y demanda constante, especialmente en instituciones hospitalarias y servicios de urgencias, es indispensable que los proveedores aseguren disponibilidad permanente, entregas oportunas y el cumplimiento de normas de calidad e higiene.
            .col-lg-5.col-md-7
              img.mb-0(alt="" src="@/assets/curso/tema1/4.svg")

      .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}"
        )
        .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
          .ti.p-2.d-flex.mb-4(data-aos="fade-left")
            h4.mb-0.ps-3.pe-3 Dispositivos médicos
          p.mb-0 Comprenden instrumentos, equipos, implementos o materiales utilizados en la prevención, diagnóstico, monitoreo o tratamiento de enfermedades. Esta categoría incluye productos como tensiómetros, termómetros digitales, equipos de infusión, monitores de signos vitales, prótesis, válvulas, entre otros.

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
                  td Clase IIa (riesgo moderado)
                  td 
                    .row
                      .col-lg-12.left
                        p.mb-0 - Tensiómetros automáticos
                        p.mb-0 - Equipos de succión
                        p.mb-0 - Sillas de ruedas
                        p.mb-0 - Equipos de terapia respiratoria domiciliaria
                        p.mb-0 - Jeringas automáticas
                tr
                  td Clase IIb (riesgo moderado alto)
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
                        p.mb-0 - Válvulas cardiacas
                        p.mb-0 - #[em Stents] coronarios
                        p.mb-0 - Dispositivos de asistencia ventricular

      .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 Esta clasificación determina las condiciones para su registro, comercialización y control sanitario. Los proveedores deben contar con certificaciones técnicas, presentar fichas técnicas y estudios de funcionalidad, y cumplir con la normativa vigente que garantiza la seguridad, eficacia y calidad del producto.

      AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-right")
        .row.justify-content-center.align-items-center.p-2(titulo="Productos homeopáticos")
          .col-lg-6
            p.mb-0 Aunque no hacen parte del modelo biomédico convencional, los productos homeopáticos tienen una presencia reconocida en algunos servicios farmacéuticos. Son elaborados a partir de sustancias de origen vegetal, mineral o animal, y se fundamentan en los principios propios de la homeopatía. En Colombia, su regulación está a cargo del INVIMA, el cual exige registro sanitario, validación de los procesos de preparación y cumplimiento de condiciones específicas de conservación. La selección de proveedores en esta categoría debe contemplar su experiencia, especialización y alineación con criterios de calidad terapéutica y trazabilidad del producto.
          .col-lg-6
            img.mb-0(alt="" src="@/assets/curso/tema1/7.png")
        .row.justify-content-center.align-items-center.p-2(titulo="Suplementos nutricionales")
          .col-lg-6
            p.mb-0 Incluyen productos como vitaminas, minerales, aminoácidos, prebióticos, probióticos y otras sustancias destinadas a complementar la alimentación. Aunque no son considerados medicamentos, tienen implicaciones directas sobre la salud, por lo que están sujetos a control sanitario. Su evaluación debe considerar la composición nutricional, respaldo científico, etiquetado adecuado y cumplimiento de normas de inocuidad alimentaria. Un proveedor confiable debe garantizar productos certificados, disponer de fichas técnicas y cumplir con los requisitos del INVIMA y otras autoridades sanitarias competentes.
          .col-lg-6
            img.mb-0(alt="" src="@/assets/curso/tema1/8.png")

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

            
      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2 Modelo de operación en servicios farmacéuticos

      p.mb-4 El modelo de operación de un servicio farmacéutico define cómo se organiza y ejecuta el proceso de adquisición, almacenamiento, distribución y entrega de medicamentos y productos para la salud.

      .bloque-texto-a.color-secundario.c1.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
        .row.m-0.align-items-center.justify-content-center
          .col-lg-9.com.mb-0.mb-lg-0
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
            p.mb-5.my-lg-2.te1.my-md-0.my-0 También son obligatorias las Buenas Prácticas de Almacenamiento (BPA), que regulan las condiciones físicas, técnicas y organizativas del almacenamiento. El proveedor debe demostrar que posee instalaciones habilitadas, con control ambiental (temperatura, humedad, ventilación), procedimientos documentados, registros de ingresos y egresos, y planes de contingencia ante emergencias.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/tema1/20.svg', alt='')
        .col-lg-4
          .br.mb-2.d-none.d-lg-block
          p.mb-0 El control de medicamentos de uso institucional es otra exigencia clave, especialmente para productos regulados por el Estado o con alto riesgo sanitario. Estos medicamentos requieren seguimiento específico en su prescripción, distribución y administración. El proveedor debe estar autorizado para su comercialización, cumplir con normas de transporte seguro y respetar lo dispuesto en normativas como la Resolución 1478 de 2006 y las circulares técnicas del INVIMA.

      .tit.p-2.d-flex.mb-5(data-aos="fade-left")
        h4.mb-0.ps-3.pe-3 Responsabilidades del dispensador frente al control de medicamentos de uso institucional

      p.mb-4 El dispensador tiene funciones clave para asegurar el cumplimiento normativo, entre ellas:





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
