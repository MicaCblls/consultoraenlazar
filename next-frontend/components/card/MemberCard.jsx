import { urlFor } from "@/lib/sanity";
import Image from "next/image";

const MemberCard = ({ name, image, jobTitle}) => {
    return (
        <div className='box-border py-4 px-2 w-56 text-white'>
            <Image 
                src={urlFor(image).url()}
                // className="w-56 rounded-lg shadow-2xl" /// esquinas ligeramente redeondeadas
                // className="w-56 rounded-full shadow-2xl" /// circulo
                className="w-56 rounded-tr-[100px] rounded-br-[100px] rounded-bl-[100px] shadow-2xl" /// estilo anterior
                alt='Foto de perfil'
                width="800"
                height="800"
            ></Image>
            <p className="text-center font-bold">{name}</p>
            <p className="text-center">{jobTitle}</p>
        </div>
    )
}

export default MemberCard
