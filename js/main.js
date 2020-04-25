
(function(){
    "use strict";

    


    document.addEventListener('DOMContentLoaded', function () {


        // var mapa = document.querySelector('#mapa');
        // if(mapa){
        //     var map = L.map('mapa').setView([-12.053024, -76.976105], 18);

        //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //     }).addTo(map);

        //     L.marker([-12.053024, -76.976105]).addTo(map)
        //         .bindPopup('PWD K-loz <br> Diseñador Web Profesional.')
        //         .openPopup();
        // }   
        
        // Campos Datos de Usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');
        // Campos Pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        // Botones y Divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        // Extras
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');


        if(document.getElementById('calcular')) {

        
        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('change', mostrarDias); // blur es como lostfocus
        pase_dosdias.addEventListener('change', mostrarDias);
        pase_completo.addEventListener('change', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);

        function validarCampos() {
            if(this.value == '') {
                errorDiv.style.display='block';
                errorDiv.innerHTML ='Este Campo es Obligatorio';
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            } else {
                errorDiv.style.display ='none';
                this.style.border = '1px solid #cccccc'
            }
        }

        function validarMail() {
            if(this.value.indexOf("@") > -1) {
                errorDiv.style.display ='none';
                this.style.border = '1px solid #cccccc'
            } else {
                errorDiv.style.display='block';
                errorDiv.innerHTML ='Este Campo es de Correo Electrónico, debe tener al menos un @';
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
        }
        
        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === '') {
                alert("Debes elegir regalo");
                regalo.focus();
            }else {
                var boletosDia = parseInt(pase_dia.value, 10)|| 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                    boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
                    cantCamisas = parseInt(camisas.value, 10)|| 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;
                // Calculo del Total a Pagar
                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 30) * .93) + (cantEtiquetas * 3);
                
                var listadoProductos = [];
                
                if(boletosDia >=1) {
                    listadoProductos.push(boletosDia + ' Pases por día');
                }
                if(boletos2Dias >= 1) {
                    listadoProductos.push(boletos2Dias + ' Pases por 2 días');
                }
                if(boletoCompleto >= 1) {
                    listadoProductos.push(boletoCompleto + ' Pases Completos');
                }
                if(cantCamisas >= 1) {
                    listadoProductos.push(cantCamisas + ' Camisas');
                }
                if(cantEtiquetas >= 1) {
                    listadoProductos.push(cantEtiquetas + ' Etiquetas');
                }
                if(regalo.value === 'ETI') {
                    listadoProductos.push('Seleccionó el Regalo: Etiquetas');
                }
                if(regalo.value === 'PUL') {
                    listadoProductos.push('Seleccionó el Regalo: Pulseras');
                }
                if(regalo.value === 'LAP') {
                    listadoProductos.push('Seleccionó el Regalo: Lapiceros');
                }
                

                lista_productos.style.display = "block";
                lista_productos.innerHTML = '';
                for(var i=0; i < listadoProductos.length; i++) {
                    lista_productos.innerHTML+= listadoProductos[i] + '<br/>';
                }
                suma.innerHTML = "S/ " + totalPagar.toFixed(2);
            }
        }

        function mostrarDias(){
            var boletosDia = parseInt(pase_dia.value, 10)|| 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                boletoCompleto = parseInt(pase_completo.value, 10)|| 0;
            
            var diasElegidos = [];
            
            if(boletosDia > 0) {
                diasElegidos.push('viernes');
            }
            if(boletos2Dias > 0) {
                diasElegidos.push('viernes','sabado');
            }
            if(boletoCompleto > 0) {
                diasElegidos.push('viernes','sabado','domingo');
            }
            
            var dias = ['viernes','sabado','domingo'];

            for(var i = 0; i<dias.length; i++){
                if(diasElegidos.find(x => x===dias[i])){
                document.getElementById(dias[i]).style.display = "block";
                }else{
                document.getElementById(dias[i]).style.display = "none";
                }
            }
        }

    }
    
    }); // DOM CONTENT LOADED
})();


$(function(){

    //Lettering
    $('.nombre-sitio').lettering();

    //Menu Fijo
    var tamañoVentana = $(window).height(); // CUanto mide la ventana
    var barraAltura = $('.barra').innerHeight(); // Cuanto mide la barra de navegacion
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > tamañoVentana) {
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura + 'px'});
        }else {
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    });

    // Menu Responsive

    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    });




    //  Programa de conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    })

    // Animaciones para los numeros
    var resumenLista = jQuery('.resumen-evento');
    if(resumenLista.length > 0) {
        $('.resumen-evento').waypoint(function(){
            $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
            $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
            $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1500);
            $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);
        },{
            offset: '60%'
        });
    }
    

    //Cuenta regresiva
    $('.cuenta-regresiva').countdown('2019/09/30 08:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });





});