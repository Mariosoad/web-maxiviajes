
import { MdCall } from 'react-icons/md';
import './info.css'

export default function Info() {
    return (
        <>
            <div className='container-info'>
                <div className='info-tittle-section' data-aos="fade-right" data-aos-offset="200">
                    <h2> Destinos extraordinarios a tu alcance, comienza tus vacaciones ahora </h2>
                    <p>¿Está buscando el destino de vacaciones de sus sueños pero no sabe por dónde empezar?
                        Con la ayuda de agentes de viajes expertos y experimentados, puede planificar el viaje de su vida con facilidad.
                    </p>
                    <a data-aos="fade-up" className='btn-call-agente' href="https://api.whatsapp.com/send/?phone=5114800534&amp;text&amp;type=phone_number&amp;app_absent=0" target='_blank'>
                        <p><MdCall /> Atencion personalizada</p>
                    </a>
                </div>
            </div>
        </>
    )
}
