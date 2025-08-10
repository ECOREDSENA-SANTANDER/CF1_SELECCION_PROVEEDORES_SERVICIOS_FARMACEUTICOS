<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La evaluación y selección de proveedores farmacéuticos requiere la aplicación de criterios técnicos, normativos y comerciales que garanticen la calidad, eficiencia y legalidad en la contratación dentro del sector salud. El análisis abarca las características del negocio farmacéutico, los tipos de productos, las condiciones de almacenamiento, la normatividad sanitaria vigente, los modelos operativos de servicio, la trazabilidad, la atención al usuario y la farmacovigilancia. También se utilizan herramientas para clasificar proveedores, establecer escalas de valoración, verificar requisitos de habilitación y comparar precios del mercado, promoviendo decisiones estratégicas fundamentadas que contribuyen al adecuado abastecimiento y uso seguro de los medicamentos.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.png", alt="Diagrama que representa los fundamentos técnicos y normativos del sector farmacéutico, estructurado en cuatro bloques: análisis del negocio farmacéutico, descripción de productos, clasificación de proveedores y evaluación de proveedores.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
