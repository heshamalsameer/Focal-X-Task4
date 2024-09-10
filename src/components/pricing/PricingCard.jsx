import { useState } from "react";

const Card = ({
  title,
  price,
  isFree = false,
  isBusiness = false,
  isAdvance = false,
}) => {
  const [hover, setIsHover] = useState(false);
  const bg = hover
    ? { background: "#0cb8b6", color: "white" }
    : { background: "#e3efed", color: "black" };
  const disableForFree = isFree ? { textDecoration: "line-through" } : {};
  const disableForBusiness =
    isBusiness || isFree ? { textDecoration: "line-through" } : {};
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="d-flex flex-column card align-items-center w-50 position-relative"
      style={{
        width: "22px",
        marginLeft: "1rem",
        marginRight: "1rem",
        overflow: "hidden",
      }}
    >
      <p className="w-100 text-center py-3" style={{ ...bg }}>
        {title}
      </p>
      <div className="d-flex flex-row justify-content-center my-1 align-items-center">
        <span style={{ marginBottom: "2em" }}>$</span>
        <p className="fw-bold" style={{ fontSize: "2rem" }}>
          {price}
        </p>
        <span style={{ color: "gray" }}>/month</span>
      </div>
      <p>feature one</p>
      <p>feature two</p>
      <p>feature three</p>
      <p style={disableForFree}>feature four</p>
      <p style={disableForBusiness}>feature five</p>
      <div
        className="w-100  py-2"
        style={{
          background: "#e3efed",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="py-1 px-2 mx-auto"
          style={{
            background: "#0cb8b6",
            borderRadius: "3px",
            color: "white",
            border: "none",
            width: "50%",
            height: "40px",
          }}
        >
          Buy Now
        </button>
      </div>
      {isAdvance && (
        <div
          className="position-absolute"
          style={{
            right: "-33px",
            top: "9px",
            transform: "rotate(45deg)",
            paddingTop: "7px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingBottom: "0.5rem",
            background: "#0cb8b6",
            color: "white",
          }}
        >
          Advance
        </div>
      )}
    </div>
  );
};
export default Card;
