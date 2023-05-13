import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import styles from "./Benefits.module.css";
import defaultImage from "@/public/images/benefits-defaultImage.png";

const BenefitCard = ({ benefit, handleOpenForm }) => {
  return (
    <>
      <div className={styles.card}>
        {benefit.mainImage ? (
          <div className={styles.cardImg}>
            <Image
              alt={benefit.title + " image"}
              src={urlFor(benefit.mainImage).url()}
              width={90}
              height={90}
              className="rounded-[50%] flex self-center translate-y-2 translate-x-2 shadow-2xl bg-white p-1"
            />
          </div>
        ) : (
          <div className={styles.cardImg}>
            <Image
              alt={benefit.title + " image"}
              src={defaultImage}
              width={150}
              height={150}
              className="rounded-[50%] flex self-center translate-y-2 translate-x-2 shadow-2xl bg-white p-1"
            />
          </div>
        )}
        <div className={styles.cardInfo}>
          <p className={styles.textBody}>{benefit.description}</p>
        </div>
        <button
          className="bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center"
          value="benefits"
          title={benefit.title}
          onClick={handleOpenForm}
        >
          Consultar
        </button>
      </div>
    </>
  );
};

export default BenefitCard;
