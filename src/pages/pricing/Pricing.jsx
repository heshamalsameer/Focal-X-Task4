import Card from "../../components/pricing/PricingCard";
import styles from "./Pricing.module.css";

export const Pricing = () => {
  return (
    <div className="d-flex flex-column my-4 align-items-center">
      <h3 className="text-xl-center">Pricing</h3>
      <hr style={{ width: "3rem", border: "1px solid #0cb8b6" }} />
      <p className="text-center">
        lorem ipsum whatever whatever whatever whatever whatever whatever
        whatever{" "}
      </p>
      <div
        className={`${styles.cards} d-flex flex-row`}
        style={{ width: "90%" }}
      >
        <Card title={"Free"} price={"0"} isFree={true} />
        <Card title={"Business"} price={"19"} isBusiness={true} />
        <Card title={"Developer"} price={"29"} />
        <Card title={"Ultimate"} price={"48"} isAdvance={true} />
      </div>
    </div>
  );
};
