'use client'

import { Collapse, Text } from "@nextui-org/react";

export default function Dropdown() {

    return (
        <>
            <Collapse.Group className="container-dropdow" >
                <Collapse title="Planifica con anticipación">
                    <Text> Reserva tus boletos de avión con suficiente tiempo de antelación
                        para obtener las mejores tarifas y opciones de vuelo. </Text>
                </Collapse>
                <Collapse title="¿Cuáles son las políticas de equipaje de la aerolínea?">
                    <Text>Las políticas de equipaje varían según la aerolínea y el tipo de
                        boleto que hayas adquirido. Te recomendamos revisar las políticas
                        de equipaje de la aerolínea antes de tu viaje o contactarnos para
                        obtener más información sobre las restricciones y costos adicionales
                        que puedan aplicar. </Text>
                </Collapse>
                <Collapse title="Verifica tu pasaporte y/o visa">
                    <Text>Asegúrate de tener un pasaporte válido y verifica si necesitas una
                        visa para tu destino antes de viajar. Algunos países requieren que
                        los pasaportes tengan una validez mínima de seis meses. </Text>
                </Collapse>
                <Collapse title="¿Qué debo hacer si necesito hacer cambios en mi reserva?">
                    <Text>Si necesitas realizar cambios en tu reserva, te recomendamos ponerte
                        en contacto con nuestro equipo de atención al cliente lo antes posible.
                        Algunos cambios pueden estar sujetos a políticas de la aerolínea y pueden
                        implicar cargos adicionales. </Text>
                </Collapse>
                <Collapse title="Llega al aeropuerto con tiempo suficiente">
                    <Text>Es recomendable llegar al aeropuerto al menos dos horas antes de la
                        salida programada de tu vuelo para tener tiempo de realizar el check-in,
                        pasar por el control de seguridad y llegar a la puerta de embarque a tiempo. </Text>
                </Collapse>
                {/* <Collapse title="Familiarízate con las normas de seguridad">
                    <Text>Asegúrate de estar al tanto de las normas de seguridad en el aeropuerto y sigue las
                        indicaciones del personal de seguridad. Esto incluye restricciones de líquidos, objetos
                        prohibidos y procedimientos de inspección. </Text>
                </Collapse> */}
            </Collapse.Group>
        </>
    )
}


