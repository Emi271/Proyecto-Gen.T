import React from "react";
import './Trabajo.css'
import { Accordion } from "react-bootstrap";
import persona from '../assets/imgs/mano-arriba.png'

function Trabajo () {

    return (
<>
<div>
<img src="https://d3cdlnm7te7ky2.cloudfront.net/media/wysiwyg/home/BC-Querestrabajarconnosotros.jpg" className="w-100 d-block"></img>

<br></br><br></br>
<img src={persona}></img>
<br></br><br></br>
<h5>FORMÁ PARTE </h5>
<div className="bar"></div>
<p className="parrafo"> Envíanos tu CV con asunto
de la búsqueda laboral para tenerte en cuenta
en las próximas búsquedas laborales.</p>
<br></br><br></br>
<h5 className="subtitulo">TE ESTAMOS ESPERANDO:</h5>
<div className="bar"></div>
<p>Todo se aprende pero para empezar buscamos personas con
conocimientos y experiencia en venta de productos de lujo. Excelentes 
relaciones interpersonales, buena presencia y marcado perfil comercial. ¿Te
animás a incorporarte al mundo de la belleza?

ENVIANOS TU CV indicando, cargo al que te postulas y localidad a la que
perteneces y tu contacto para poder coordinar una entrevista. Email:
 rrhhemi@gmail.com</p>
 <br></br><br></br>
 <h5 className="subtitulo">BÚSQUEDAS ACTIVAS:</h5>

 <Accordion>
    <Accordion.Item eventKey="0">
        <Accordion.Header>
Consultora de belleza - Capital Federal.
        </Accordion.Header>
        <Accordion.Body>
<h5>LAS PRINCIPALES TAREAS DEL PUESTO SON:</h5>
<p> Representar una marca de primer nivel.
    Sumarse al equipo fortaleciendo los valores y el buen ambiente laboral.
    Atención y asesoramiento profesional.
    Análisis y elaboración de estrategias comerciales.
    Seguimiento y cumplimiento de objetivos.
</p>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header>
            Programador/a - Rafaela / Buenos Aires.
        </Accordion.Header>
        <Accordion.Body>
            <h5>LAS PRINCIPALES TAREAS DEL PUESTO SON:</h5>
            <p> Realizar modificaciones sobre código
                para realizar adaptaciones o cambios.
                <br></br>
                Realizar implementaciones de módulos completos o 
                modificaciones. <br></br>
                Analizar y evaluar la factibilidad técnica de los
                distintos requerimientos de <br></br>
                incorporación de datos para asegurar la integridad y evitar
                redundancia<br></br> de datos.<br></br>
                Integración de nuevos proyectos (TodoPago, MercadoPago, API's,
                Rappi, PedidosYa, etc)<br></br>
                Asegurar el buen clima de trabajo interno y externo, siendo cordial con los<br></br> 
                compañeros, actuando y respetando los valores de la empresa.
 </p>
 <br></br>
 <h5>IMPORTANTE: </h5>
 <br></br>
 <p>Formación académica: graduados o estudiantes próximos a 
    recibirse en <br></br> carreras de Análisis de Sistemas,<br></br>
    Computación, Ing. Informática, Sistemas, Programación.<br></br>
    Lugar de residencia: Rafaela / Buenos Aires.<br></br>
    Edad: mayor de 21 años.<br></br>
    Manejo de base de datos (mySQL)<br></br>
    Programación orientada a backend (preferentemente Phyton).<br></br>
    Django / PHP (Framework Laravel - No excluyente).<br></br>
    Iniciar remuneración pretendida.<br></br>
    Para desempeñarte en la función es importante que te interesen los<br></br>
     desafíos, seas flexible y dinámico y que cuentes con buenas habilidades <br></br>
     para relacionarte.
 </p>
 <br></br>
 <h5>BENEFICIOS: </h5>
 <br></br>
 <p> Excelentes posibilidades de desarrollo, trabajar en un contexto desafiante <br></br>
 dentro de un equipo profesional que prioriza el crecimiento de sus <br></br>
 integrantes.<br></br>
 Horario de trabajo: a convenir-<br></br>
 Lugar de trabajo: a convenir (Mayor información será brindada en la <br></br>
 entrevista personal).</p>
 
        </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
        <Accordion.Header>
            Auxiliar de control de e-commerce - Buenos Aires
        </Accordion.Header>
        <Accordion.Body>
            <h5> LAS PRINCIPALES TAREAS DEL PUESTO SON:</h5>
            <br></br>
            <p>Realizar el control  de stock<br></br>
            Relevar productos y presentar reportes.<br></br>
            Establecer un análisis de devoluciones y revisión de costos de productos.<br></br>
            Adultar la gestión de Ecommerce, entre otras. <br></br></p>
            <br></br>
            <h5>IMPORTANTE: </h5>
            <br></br>
            <p>Conocimientos avanzados en planificación estratégica y control.<br></br>
            Conocimientos en EXCEL y software: Paquete Office, Google <br></br>Drive, etc. 
            Graduados en Licenciatura en Organización Industrial o carreras afines.<br></br>
            Experiencia previa comprobable en puestos similares de 2 a 3 años.<br></br>
            Residir en Buenos Aires (EXCLUYENTE).<br></br>
            Modalidad Full Time.</p>
            <br></br>
            <h5>BENEFICIOS: </h5>
            <br></br>
            <p>Excelente clima laboral y la posibilidad de ser parte de un gran equipo de<br></br>
            trabajo.<br></br>
            Posibilidades de crecimiento y desarrollo dentro de la empresa.<br></br></p>
        </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="3">
        <Accordion.Header>
            Auxiliar de Redes y Sistemas - Buenos Aires.
        </Accordion.Header>
        <Accordion.Body>
            <h5>LAS PRINCIPALES TAREAS DEL PUESTO SON:</h5>
            <br></br>
            <p>Realizar tareas de soporte a usuarios y de gestión de redes y sistemas.<br></br>
            Reparación y mantenimiento de equipos, mantenimiento y configuración de<br></br>
            hardware(PC - impresoras - equipos Fiscales - etc.)</p>
            <br></br>
            <h5>IMPORTANTE:</h5>
            <br></br>
            <p>Formación académica: Graduados / en curso (no excluyente) en<br></br>
            Computación, Sistemas, Técnico electrónico y afines.
            Conocimiento en tendidos, reparación, configuraciones, instalaciones de <br></br>
            redes de datos.<br></br>
            Manejo de sistemas operativos Windows(conociemientos avanzados) - Linux <br></br>
            -Android - MacOS.<br></br>
            Experiencia mínima de 2 años en puestos similares.<br></br>
            Lugar de residencia: Buenos Aires / Rafaela.<br></br>
            Modalidad Full Time.</p>
            <br></br>
            <h5>BENEFICIOS: </h5>
            <br></br>
            <p>Muy buen clima laboral y gran equipo de trabajo.<br></br>
            Posibilidades de desarrollo y formación.</p>
        </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
        <Accordion.Header>
            Auxiliar de arquitectura - Buenos Aires
        </Accordion.Header>
        <Accordion.Body>
            <h5> LAS PRINCIPALES TAREAS DEL PUESTO SON: </h5>
            <br></br>
            <p>Desarrollar y establecer el seguimiento de proyectos.<br></br>
            Generar renders y planos de licitación.<br></br>
            Realizar el seguimiento de instalaciones y ejecuciones.<br></br>
            Establecer visitas y supervisión a proveedores.<br></br>
            Armar carpetas para producción y preparar archivos gráficos.</p>
            <br></br>
            <h5>IMPORTANTE: </h5>
            <br></br>
            <p>Formación acaémica: Diseño Industrial, Arquitectura, Maestro Mayor de<br></br>
            Obras.<br></br>
            Conocimientos en desarrollo mobiliario, material POP; arquitectura<br></br>
             comercial y procesos productivos; material, herrería, iluminación; entre<br></br>
             otras.<br></br>
             Residir en CABA o alrededores.<br></br>
             Disponibilidad Full Time.<br></br>
             Modalidad presencial y a distrancia según necesidades.<br></br>
             Referencias laborales comprobables en desafíos similares.
             </p>
             <br></br>
             <h5>BENEFICIOS: </h5>
             <br></br>
             <p>Excelente ambiente de trabajo y grandes beneficios de una empresa que se<br></br>
             encuentra en constante crecimiento y desarrollo.</p>
        </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="5">
        <Accordion.Header>
            Administrativo contable - Rafaela
        </Accordion.Header>
        <Accordion.Body>
            <h5>LAS PRINCIPALES TAREAS DEL PUESTO SON:</h5>
            <br></br>
            <p>Cargar comprobantes de factura al sistema.<br></br>
            Brindar soporte en otras tareas administrativas<br></br></p>
            <br></br>
            <h5>IMPORTANTE: </h5>
            <br></br>
            <p>Graduados o estudiantes próximos a recibirse en Licenciatura/ Tecnicatura<br></br>
            en Administración de empresas; Contabilidad y afines.<br></br>
            Lugar de residencia: Rafaela.<br></br></p>
        </Accordion.Body>
    </Accordion.Item>
 </Accordion>
</div>
</>
    )};

    export default Trabajo