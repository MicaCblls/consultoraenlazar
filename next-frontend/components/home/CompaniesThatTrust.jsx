import React from 'react';
import Image from "next/image";
import styles from "./Companies.module.css";


export const CompaniesThatTrust = () => {
 
  return (

    <div className="w-full h-auto ">
      <h2 className="pt-10 px-4 md:px-8 text-1xl md:text-2xl font-bold text-center text-ellipsis opacity-90">
        Empresas que confían en nosotros
      </h2>
    
    <div className=" w-full h-auto   ">
      <div className= {styles.slider}>
        <div  className= " flex  w-full  text-center justify-content-center mb-10 mt-10  ">
        <div className= {styles.slide}>
  <Image
          className="  outline-offset-8  w-auto h-auto "
          src="/images/logos-empresas/logo-pay.png"
          width={200}
          height={200}
          alt="payhous"
        />
  </div>
  <div className= {styles.slide}>
  <Image
          className="  outline-offset-8   w-auto h-auto "
          src="/images/logos-empresas/empujar.png"
          width={200}
          height={200}
          alt="empujar"
        />
  </div>
  <div className= {styles.slide}>
  <Image
          className="  outline-offset-8  w-auto h-auto "
          src="/images/logos-empresas/coderhouse.png"
          width={200}
          height={200}
          alt="coderhouse"
        />
  </div>
  <div className= {styles.slide}>
  <Image
          className="  outline-offset-8  w-auto h-auto "
          src="/images/logos-empresas/workn.png"
          width={200}
          height={50}
          alt="workn"
        /> 
  </div>
  <div className=  {styles.slide}>
  <Image
          className="  outline-offset-8    w-auto h-auto "
          src="/images/logos-empresas/henry.png"
          width={200}
          height={100}
          alt="henry"
        />
  </div>
  
  <div className= {styles.slide}>
  <Image
          className="  outline-offset-8  w-auto h-auto "
          src="/images/logos-empresas/uba.png"
          width={200}
          height={200}
          alt="UBA"
        />
  </div>
  <div className= {styles.slide}>
  <Image
          className=" outline-offset-8  w-auto h-auto "
          src="/images/logos-empresas/mudafy.png"
          width={200}
          height={100}
          alt="mudafy"
        />
  </div>
  <div className= {styles.slide}>
  <Image
          className="  outline-offset-8 w-auto h-auto "
          src="/images/logos-empresas/duhire.png"
          width={200}
          height={100}
          alt="duhire"
        />
  </div>
  <div className= {styles.slide}>
  <Image
          className="  outline-offset-8  w-auto h-auto "
          src="/images/logos-empresas/linkedIn.png"
          width={200}
          height={100}
          alt="linkedin"
        />
  </div>
  <div className= {styles.slide}>
  <Image
          className="  outline-offset-8   w-auto h-auto "
          src="/images/logos-empresas/empujar.png"
          width={200}
          height={200}
          alt="empujar"
        />
  </div>
  </div>
</div>
</div>
</div>        
  );
};
