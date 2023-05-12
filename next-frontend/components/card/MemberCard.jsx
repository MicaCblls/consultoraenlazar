import { urlFor } from "@/lib/sanity";
import Image from "next/image";

const MemberCard = ({ name, image, jobFirstLine, jobSecondLine}) => {
    return (
        <div className='box-border py-4 px-2 w-56 text-white'>
            <Image 
                src={urlFor(image).url()}
                className="w-56 rounded-full shadow-2xl"
                alt='Foto de perfil'
                width="800"
                height="800"
            ></Image>
            <p className="text-center font-bold pt-4">{name}</p>
            <p className="text-center">{jobFirstLine}</p>
            <p className="text-center">{jobSecondLine}</p>
        </div>
    )
}

export default MemberCard
