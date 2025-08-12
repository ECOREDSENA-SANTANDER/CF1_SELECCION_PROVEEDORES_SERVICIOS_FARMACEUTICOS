<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Clasificación de proveedores farmacéuticos

    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
        p.mb-0 La clasificación de proveedores farmacéuticos es una herramienta esencial para organizar y segmentar a los actores del mercado según su función, especialización, capacidad operativa y nivel de cumplimiento. Esta segmentación permite aplicar criterios diferenciados de evaluación, optimizar la toma de decisiones y fortalecer los procesos de contratación, control y auditoría en los servicios farmacéuticos.
        br
        br
        p.mb-0 Asimismo, es una herramienta clave para optimizar los procesos de contratación y selección de proveedores, haciéndolos más eficientes, seguros y alineados con la normativa vigente. Esta clasificación permite segmentar los productos según sus características, nivel de riesgo sanitario, uso terapéutico y requerimientos técnicos, lo cual facilita la aplicación de criterios diferenciados en la evaluación de cada proveedor.

    .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5
      p.mb-0 En primer lugar, permite establecer los requisitos normativos específicos que debe cumplir cada tipo de producto. Por ejemplo, los medicamentos controlados o biotecnológicos exigen mayores estándares de trazabilidad, certificaciones adicionales y protocolos más estrictos que los medicamentos de venta libre. Esto justifica la exigencia de documentación rigurosa a los proveedores, como el registro sanitario del INVIMA, certificaciones de Buenas Prácticas de Manufactura (BPM), Buenas Prácticas de Almacenamiento (BPA) o acreditaciones internacionales (como la norma ISO).

    .bg3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema3/2.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            p.mb-4(data-aos="fade-left") En segundo lugar, facilita la construcción de escalas de evaluación diferenciadas, en las que se puede ponderar con mayor precisión el cumplimiento de cada proveedor según la categoría del producto ofrecido. Esto evita la aplicación de criterios genéricos que podrían favorecer a proveedores menos calificados o sin especialización técnica.
            p.mb-0(data-aos="fade-left") Además, garantiza la idoneidad del proveedor, al permitir verificar su experiencia y capacidad técnica en relación con las categorías específicas de productos que ofrece. Por ejemplo, un proveedor con trayectoria en medicamentos genéricos no necesariamente cumple con los requisitos para suministrar medicamentos biotecnológicos o dispositivos médicos de clase III.

    .bloque-texto-a.color-acento-contenido.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-9.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-lg-4.p-md-4.p-4.mb-lg-0.mb-4.my-3.my-lg-0
            p.mb-4 Asimismo, ayuda a minimizar los riesgos asociados con los procesos de compra y dispensación. Una clasificación adecuada de productos permite evitar adquisiciones incorrectas, desabastecimientos, fallas en la cadena de frío o el incumplimiento de requerimientos legales, situaciones que pueden comprometer la salud pública o derivar en sanciones administrativas.
            p.mb-0 Finalmente, una correcta clasificación fortalece la trazabilidad y facilita las auditorías de los procesos de contratación, almacenamiento y distribución. Esto permite justificar de forma objetiva la selección de un proveedor sobre otro y facilita el control interno, la evaluación institucional o la vigilancia externa por parte de entidades como la Superintendencia Nacional de Salud o la Contraloría General de la República.
        .col-lg-3.col-md-6.col-9.mb-0
          img(src='@/assets/curso/tema3/3.png', alt='')

    .titulo1.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4 Criterios de clasificación de proveedores farmacéuticos

    .tarjeta.tarjeta--grisa.p-4.mb-5
      LineaTiempoC.color-acento-botones
        .row.justify-content-center.align-items-bettwen
          .col-lg-11
            .row.justify-content-center.align-items
              .col-lg-7.mb-lg-0.mb-4
                h4.mb-4 Según el tipo de producto que suministran
                ul.lista-ul
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Proveedores de medicamentos genéricos o de marca.
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Proveedores de medicamentos biotecnológicos.
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Proveedores de dispositivos médicos e insumos hospitalarios.
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Proveedores de productos homeopáticos o fitoterapéuticos.
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Proveedores de suplementos nutricionales.
              .col-lg-5.col-md-9.col-9
                img(src='@/assets/curso/tema3/4.png', alt='Imagen decorativa')
        .row.justify-content-center.align-items-bettwen
          .col-lg-11
            .row.justify-content-center.align-items
              .col-lg-7.mb-lg-0.mb-4
                h4.mb-4 Según el nivel de operación
                ul.lista-ul
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Distribuidores mayoristas: adquieren productos directamente de laboratorios o importadores y los comercializan a gran escala a droguerías, IPS o EPS.
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Operadores logísticos tercerizados: se encargan de la compra, almacenamiento, distribución y dispensación de medicamentos en nombre de una EPS o IPS.
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Fabricantes: laboratorios nacionales o internacionales con capacidad de producción directa.
              .col-lg-5.col-md-9.col-9
                img(src='@/assets/curso/tema3/4.png', alt='Imagen decorativa')
        .row.justify-content-center.align-items-bettwen
          .col-lg-11
            .row.justify-content-center.align-items-bettwen
              .col-lg-7.mb-lg-0.mb-4
                h4.mb-4 Según la relación contractual
                ul.lista-ul
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Proveedores seleccionados mediante licitación pública o convenios marco.
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Proveedores contratados por contratación directa o bajo figura de urgencia.
                  li.d-flex.mb-1
                    i.fas.fa-pills
                    p.mb-0 Proveedores únicos (por exclusividad del producto) o múltiples (para garantizar competencia y continuidad del servicio).
              .col-lg-5.col-md-9.col-9
                img(src='@/assets/curso/tema3/4.png', alt='Imagen decorativa')

    .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5
      p.mb-0 Esta clasificación permite la elaboración de matrices de evaluación y escalas de cumplimiento diferenciadas, fundamentales para asegurar la continuidad en el suministro y la calidad en la gestión del servicio farmacéutico.

    .titulo1.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4 Requisitos de habilitación de proveedores farmacéuticos

    .bloque-texto-a.color-acento-contenido.te2.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-lg-4.p-md-4.p-4.mb-lg-0.mb-4.my-3.my-lg-0
            p.mb-lg-3.my-lg-2.mb-0.my-0 Los proveedores de productos farmacéuticos en Colombia deben cumplir con un conjunto de requisitos legales, técnicos y administrativos para operar conforme al marco normativo del sistema de salud. Estos requisitos buscan garantizar que los medicamentos, insumos y dispositivos lleguen al usuario final de manera segura, legal y trazable.
        .col-lg-4.col-md-6.col-9.mb-0
          img.img-a.img-t.imas1.d-none.d-lg-block(src='@/assets/curso/tema3/7.png', alt='')

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-3.pe-0
        .titu
      .col.ps-0
        .sub.p-2.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Principales requisitos de habilitación
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mb-lg-0.mb-0 Registro como persona jurídica ante la Cámara de Comercio, con objeto social relacionado con actividades farmacéuticas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mb-lg-4.mb-md-4.mb-0 Registro ante la DIAN, con responsabilidad fiscal actualizada y autorización para emitir facturación electrónica.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mb-lg-4 Certificado de existencia y representación legal, vigente y expedido por la Cámara de Comercio.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botoness.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mb-lg-4.mb-md-5.mb-0 Registro sanitario otorgado por el INVIMA, válido y vigente para todos los productos ofrecidos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-7.mb-4
        img(src='@/assets/curso/tema3/8.png', alt='')
      .col-lg-9
        SlyderF(columnas="col-lg-4 col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/9.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Licencia sanitaria de funcionamiento para establecimientos que almacenan, comercializan o distribuyen productos farmacéuticos.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/10.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Certificación en Buenas Prácticas de Manufactura (BPM) o Buenas Prácticas de Almacenamiento (BPA), según el rol desempeñado.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/11.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Permiso de importación para productos no fabricados en Colombia.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/12.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Documentación técnica de los productos: fichas técnicas, hojas de seguridad, certificados de calidad, condiciones de almacenamiento, entre otros.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/13.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Experiencia contractual comprobada, especialmente en procesos de contratación pública o licitaciones.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/14.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Cumplimiento normativo en farmacovigilancia y manejo de devoluciones, incluyendo protocolos para el retiro de productos y reporte de eventos adversos.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/15.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Certificaciones de calidad (por ejemplo, ISO 9001) o implementación de sistemas internos de gestión documental y trazabilidad.

    .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-0
      p.mb-0 Todos estos requisitos deben ser exigidos, verificados y archivados por los servicios farmacéuticos contratantes. En el contexto del proceso formativo del SENA, el aprendiz debe ser capaz de identificar y evaluar estos criterios como parte fundamental del proceso de selección técnica de proveedores confiables y responsables.

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
