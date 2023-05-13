import values from 'public/images/nuestros-valores.gif'
import Image from "next/image";

const Values = () => {
    return (
        <div className='flex justify-center bg-white xsm:py-12 md:py-24'>
            <div className='flex flex-wrap w-9/12 justify-center sm:justify-between lg:justify-center'>
                <section className="flex w-full h-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-left text-ellipsis opacity-90 text-darkBlue">
                        Nuestros Valores
                    </h3>
                </section>
                <div className='pt-12'>
                    <Image 
                        src={values} 
                        alt="Nuestros valores"
                        width='1200'
                        height='1200'
                        >
                    </Image>
                </div>
                <div className='font-semibold md:hidden xsm:block'>
                    <ul>
                        <li>• Transparencia & Profesionalismo</li>
                        <li>• Innovación & Creatividad</li>
                        <li>• Responsabilidad & Calidad de trabajo</li>
                        <li>• Eficiencia & Trabajo colaborativo</li>
                        <li>• Empatía & asistencia</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Values
