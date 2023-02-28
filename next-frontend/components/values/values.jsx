import values from 'public/images/nuestros-valores.gif'
import Image from "next/image";

const Values = () => {
    console.log(values);
    return (
        <div className='flex justify-center bg-white py-16'>
            <div className='flex flex-wrap w-9/12 justify-center sm:justify-between'>
                <section className="flex w-full h-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-left text-ellipsis opacity-90 text-darkBlue">
                        Nuestros Valores
                    </h3>
                </section>
                <div>
                    <Image src={values}></Image>
                </div>
            </div>
        </div>
    )
}

export default Values
