import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import styles from "./ServicesCard.module.css";

const ServicesCard = ({
  servicesForIndividuals,
  servicesForOrganizations,
  handleOpenForm,
}) => {
  const shadow = {
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
  };
  return (
    <>
      <h2
        className="pt-32 pb-14 px-10 font-semibold md:text-xl text-ellipsis"
        id="individuals"
      >
        Para individuos o grupos:
      </h2>
      <div className={styles.containerTotal}>
        {servicesForIndividuals &&
          servicesForIndividuals.map((service) => (
            <div key={service._id} className={styles.containerCard}>
              <div className={styles.containerImage}>
                <Image
                  className={styles.imagePropias}
                  alt={service.title + " image"}
                  src={urlFor(service.mainImage).url()}
                  width={130}
                  height={200}
                />
              </div>
              <div className={styles.containerInfo}>
                <div>
                  <h2 className={styles.containerTitles}>{service.title}</h2>
                  <p className={styles.containerParagraph}>
                    {service.description}
                  </p>
                </div>

                <div className={styles.containerButton}>
                  <button
                    className="rounded-full bg-yellow p-1 px-6 font-semibold text-base md:text-lg"
                    onClick={handleOpenForm}
                  >
                    QUIERO CONTRATAR
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <h2 className="pt-32 pb-14 px-10 font-semibold md:text-xl text-ellipsis " id="organization">
        Para organizaciones:
      </h2>
      <div className={styles.containerTotal}>
        {servicesForOrganizations &&
          servicesForOrganizations.map((service) => (
            <div key={service._id} className={styles.containerCard}>
              <div className={styles.containerImage}>
                <Image
                  className={styles.imagePropias}
                  alt={service.title + " image"}
                  src={urlFor(service.mainImage).url()}
                  width={130}
                  height={200}
                />
              </div>
              <div className={styles.containerInfo}>
                <div>
                  <h2 className={styles.containerTitles}>{service.title}</h2>
                  <p className={styles.containerParagraph}>
                    {service.description}
                  </p>
                </div>

                <div className={styles.containerButton}>
                  <button
                    className="rounded-full  bg-yellow p-1 px-6 font-semibold"
                    onClick={handleOpenForm}
                  >
                    QUIERO CONTRATAR
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ServicesCard;
