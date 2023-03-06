import Image from "next/image";
import BackgrorundImg from "@/public/images/letra-e-completa.png";

const BePartOf = () => {
  return (
    <div className="flex justify-center items-center h-[34rem]">
      <div className="absolute items-center">
        <Image
          src={BackgrorundImg}
          width={600}
          height="auto"
          priority={true}
          alt="Background Img"
        />
      </div>
      <div className="absolute items-center">
        <h2 className="text-blue text-2xl text-center">
          SÉ PARTE DEL <strong>FUTURO</strong> DEL
          <br />
          <strong className="">CAPITAL HUMANO</strong>
        </h2>
      </div>
    </div>
  );
};

export default BePartOf;
