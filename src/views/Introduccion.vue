<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-a.color-secundario.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-9.com.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-4.mb-lg-0.mb-4.my-3.my-lg-0
            p.mb-4 En el contexto actual del sistema de salud colombiano, una gestión eficiente y transparente de los procesos de abastecimiento en los servicios farmacéuticos es fundamental para garantizar la calidad en la atención, la seguridad del paciente y el uso racional de los recursos. La adecuada selección de proveedores representa una decisión estratégica que impacta directamente en la disponibilidad oportuna de medicamentos y tecnologías en salud, así como en el cumplimiento de la normatividad vigente.
            p.mb-0 El fortalecimiento de las competencias técnicas, normativas y comerciales en la evaluación y selección de proveedores permite a los profesionales del área de la salud aportar a la mejora continua de los procesos de contratación y compras. La aplicación de criterios adecuados facilita decisiones informadas, que contribuyen al cumplimiento regulatorio y a una mayor eficiencia operativa.
        .col-lg-3.col-md-6.col-9.mb-0
          img(src='@/assets/curso/intro/1.png', alt='')

    .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5
      p.mb-0 Esta propuesta integra los lineamientos pedagógicos y curriculares que orientan el desarrollo de capacidades prácticas, analíticas y decisionales, en respuesta a las necesidades del entorno productivo y las exigencias del sistema de salud colombiano.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OhZVUrYWcQE?si=jtL_3-AvpieoSsbl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        figcaption Video. Fundamentos técnicos y normativos del sector farmacéutico

</template>

<script>
export default {
  name: 'Introduccion',
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
