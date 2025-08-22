<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Evaluación de proveedores farmacéuticos

    .bloque-texto-a.color-acento-contenido.te2.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-lg-4.p-md-4.p-4.mb-lg-0.mb-4.my-3.my-lg-0
            p.mb-lg-2.my-lg-2.mb-0.my-0 La evaluación de proveedores farmacéuticos es un componente clave en la gestión de compras de servicios de salud, ya que permite identificar a los oferentes que cumplen con los criterios mínimos de legalidad, capacidad técnica, cumplimiento normativo y eficiencia logística.
        .col-lg-4.col-md-6.col-9.mb-0
          img.img-a.img-t.imas2.d-none.d-lg-block(src='@/assets/curso/tema4/1.png', alt='')

    p.mb-5 Entre los principales parámetros de evaluación se destacan:

    .row.justify-content-center.align-items.mb-4
      .col-lg-9.mb-4
        LineaTiempoD.color-acento-botones.activo
          p.mb-0(numero="1" titulo="Cumplimiento de requisitos legales") Verificación del RUT, certificado de existencia y representación legal, y registros sanitarios otorgados por el INVIMA.
          p.mb-0(numero="2" titulo="Historial de desempeño") Análisis de contratos anteriores, cumplimiento de entregas, calidad del servicio prestado y capacidad de respuesta.
          p.mb-0(numero="3" titulo="Tiempo de entrega") Fundamental en contextos clínicos donde la disponibilidad oportuna de medicamentos es crítica.
          p.mb-0(numero="4" titulo="Condiciones de almacenamiento") Especialmente para productos que requieren cadena de frío o ambientes controlados de temperatura y humedad.
          p.mb-0(numero="5" titulo="Soporte posventa") Capacidad para brindar acompañamiento técnico, atender devoluciones o reemplazar productos defectuosos.
          p.mb-0(numero="6" titulo="Capacidad logística y operativa") Infraestructura, tecnología y personal capacitado para garantizar entregas confiables.
          p.mb-0(numero="7" titulo="Documentación técnica") Fichas técnicas, certificados de calidad, hojas de seguridad, trazabilidad y evidencia del cumplimiento normativo.
          p.mb-0(numero="8" titulo="La evaluación puede realizarse en tres momentos") Inicial (proceso de selección), periódica (seguimiento del contrato) y final (evaluación posterior a la ejecución contractual).
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/2.svg', alt='')

    .titulo4.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-md-4.mx-3.ps-lg-3 Comparación de precios del mercado

    .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5
      p.mb-0 Comparar precios en el mercado es una estrategia necesaria para tomar decisiones de compra eficientes. Sin embargo, la comparación no debe limitarse al precio unitario del producto, sino considerar también la relación costo-beneficio. Para ello, es recomendable elaborar cuadros comparativos que incluyan variables como:

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4
      .col-lg-3.col-md-6.col-10.pe-lg-0.mb-lg-0.mb-4
        .bg3.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-7
              img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema4/3.svg' alt='AvatarTop')
            p.mb-lg-0.mb-0.text-center(data-aos="fade-right") Precio total con impuestos incluidos.
      .col-lg-3.col-md-6.col-10.ps-lg-0.pe-lg-0.mb-lg-0.mb-4
        .bg1.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-7
              img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema4/4.svg' alt='AvatarTop')
            p.mb-lg-4.mb-md-4.mb-0.text-center(data-aos="fade-right") Gastos logísticos asociados.
      .col-lg-3.col-md-6.col-10.ps-lg-0.pe-lg-0.mb-lg-0.mb-4
        .bg3.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-7
              img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema4/5.svg' alt='AvatarTop')
            p.mb-lg-4.mb-0.text-center(data-aos="fade-right") Condiciones de pago.
      .col-lg-3.col-md-6.col-10.ps-lg-0.mb-lg-0.mb-4
        .bg1.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-7
              img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema4/6.svg' alt='AvatarTop')
            p.mb-lg-4.mb-0.text-center(data-aos="fade-right") Descuentos por volumen.


    .row.justify-content-center.align-items-center.mb-lg-5
      .col-lg-6.col-md-6.col-10.pe-lg-0.mb-lg-0.mb-4
        .tarjeta.ta4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-lg-0.mb-4
              img.img-a.img-t(src='@/assets/curso/tema4/7.svg', alt='Imagen decorativa.')
            .col-lg-9
              p.mb-0 Plazos y cumplimiento de entrega.
      .col-lg-6.col-md-6.col-10.ps-lg-0.mb-lg-0.mb-4
        .tarjeta.ta41.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-3.mb-lg-0.mb-4
              img.img-a.img-t(src='@/assets/curso/tema4/8.svg', alt='Imagen decorativa.')
            .col-lg-9
              p.mb-0.text-white Calidad y garantía del producto.

    p.mb-5 Este análisis permite seleccionar proveedores que ofrecen mejores condiciones económicas sin comprometer la calidad ni la seguridad del servicio farmacéutico.
    
    .titulo5.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-md-4.mx-3.ps-lg-3 Evaluación de la capacidad de suministro

    p.mb-4 La capacidad de suministro es una variable crítica, ya que garantiza la continuidad del servicio sin interrupciones ni desabastecimientos. Esta se evalúa con base en:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-5.col-7.mb-4
        img(src='@/assets/curso/tema4/9.png', alt='')
      .col-lg-9
        SlyderF(columnas="col-lg-4 col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/10.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Existencias en inventario.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/11.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Historial de distribución y cumplimiento.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/12.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Infraestructura logística (almacenamiento, transporte, cadena de frío).
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/13.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Tiempos de alistamiento y despacho.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/14.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Capacidad de respuesta ante incrementos de demanda.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-7
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/15.svg' alt='AvatarTop')
            p.mb-2.text-center(data-aos="fade-right") Cobertura territorial operativa.

    p.mb-5 Para validar esta capacidad, se pueden aplicar formatos de verificación, realizar visitas técnicas o solicitar certificaciones operativas emitidas por entes de control.

    .titulo1.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-md-4.mx-3.ps-lg-3 Criterios para evaluar la reputación del proveedor

    .cajon.color-acento-contenido.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 La reputación se construye con base en el comportamiento contractual histórico del proveedor, el cumplimiento normativo, la percepción del cliente y la calidad del servicio. Para su análisis se deben considerar:

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
      .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
        .overflow-hidden.h-100.bg7.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-7.mb-4.my-4
              img.ima1.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/16.svg' alt='AvatarTop')
          p.mb-0.text-center(data-aos="fade-right") Consultas en plataformas oficiales como SECOP o RUES.
      .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
        .overflow-hidden.h-100.bg7.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-7.mb-4.my-4
              img.ima2.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/17.svg' alt='AvatarTop')
          p.mb-3.text-center(data-aos="fade-right") Verificación de sanciones o alertas por parte del INVIMA o la Superintendencia Nacional de Salud.
      .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
        .overflow-hidden.h-100.bg7.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-7.mb-4.my-4
              img.ima3.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/18.svg' alt='AvatarTop')
          p.mb-0.text-center(data-aos="fade-right") Referencias de otras instituciones contratantes.
      .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
        .overflow-hidden.h-100.bg7.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-7.mb-4.my-4
              img.ima4.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/19.svg' alt='AvatarTop')
          p.mb-0.text-center(data-aos="fade-right") Indicadores de desempeño: devoluciones, reclamos, no conformidades.

    p.mb-5 Los aprendices del SENA deben desarrollar la capacidad para usar herramientas digitales de consulta, aplicar criterios objetivos y emitir juicios fundamentados sobre esta variable cualitativa.

    
    .titulo4.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-md-4.mx-3.ps-lg-3 Definición de escalas de valoración
    
    p.mb-5 La escala de valoración permite cuantificar de forma objetiva el nivel de cumplimiento de los criterios establecidos para la selección de proveedores. Estas escalas pueden ser:

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
      .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
        .overflow-hidden.h-100.bg511.p-4
          .bg51.p-1.mb-4
            h4.text-center.mb-0.text-white.ps-lg-4.pe-lg-4.ps-3.pe-3 Numéricas
          p.mb-2.text-center(data-aos="fade-right") De 0 a 5 puntos.
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .overflow-hidden.h-100.bg52.p-4
          .bg51.p-1.mb-4
            h4.text-center.mb-0.text-white.ps-lg-5.pe-lg-5.ps-3.pe-3 Porcentuales
          p.mb-2.text-center(data-aos="fade-right") De 0 % a 100 %.
      .col-lg-5.col-md-6.col-10.mb-lg-0.mb-4
        .overflow-hidden.h-100.bg53.p-4
          .bg51.p-1.mb-4
            h4.text-center.mb-0.text-white.ps-lg-5.pe-lg-5.ps-3.pe-3 Cualitativas
          p.mb-2.text-center(data-aos="fade-right") Bajo, medio, alto.

    p.mb-5 Cada criterio debe tener un peso relativo según su importancia estratégica. Por ejemplo:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-3
        .row.justify-content-center.align-items-end
          .col-lg-4.sob.d-none.d-lg-block(data-aos="fade-left")
            img(src="@/assets/curso/tema4/25.png", alt="alt")
          .col-lg-9(data-aos="fade-right").ps-lg-0.mb-1
            .bg6.p-4
              .row.justify-content-center
                .col-lg-9(data-aos="fade-left")
                  .bgw.p-3.mb-0
                    .tit.p-2.d-flex.mb-4.mx-lg-4.mx-2(data-aos="fade-left")
                      h4.mb-0.ps-3.pe-3 Ejemplo
                    ul.lista-ul.mx-lg-4.mx-2
                      li.d-flex.mb-1
                        i.fas.fa-pills
                        p.mb-0 #[b Calidad del producto:] 30 %
                      li.d-flex.mb-1
                        i.fas.fa-pills
                        p.mb-0 #[b Cumplimiento normativo:] 25 %
                      li.d-flex.mb-1
                        i.fas.fa-pills
                        p.mb-0 #[b Tiempo de entrega:] 25 %
                      li.d-flex.mb-1
                        i.fas.fa-pills
                        p.mb-0 #[b Precio:] 20 %
      .col-lg-4.d-none.d-lg-block
        img(data-aos="zoom-in-left")(src='@/assets/curso/tema4/24.svg' alt='')

    .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/26.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
        p.mb-0 Una vez calificados los proveedores, se calcula un puntaje total ponderado, lo cual permite su clasificación objetiva. Esta herramienta no solo orienta la decisión de compra, sino que también sirve como soporte técnico ante auditorías, procesos contractuales o reclamaciones.



</template>

<script>
export default {
  name: 'Tema4',
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
