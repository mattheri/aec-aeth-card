import React from "react";
import Image from "../image/Image";
import CardTitle from "../card-title/CardTitle";
import CardInformation from "../card-information/CardInformation";
import CardFooter from "../card-footer/CardFooter";
import CardBody from "../card-body/CardBody";
import "./Card.css";

const Card = (props) => {
  const classNames = ["card"];
  if (props.className) classNames.push(props.className);

  return (
    <article className={classNames.join(" ")}>
      <Image
        src={props.mainImageSrc}
        alt={props.mainImageAlt}
        loading={props.mainImageLoading}
        width={props.mainImageWidth}
        height={props.mainImageHeight}
      />
      <CardTitle title={props.title} />
      <CardBody body={props.body} />
      <CardInformation
        eth={props.eth}
        numberOfDaysLeft={props.numberOfDaysLeft}
      />
      <CardFooter
        footerImageSrc={props.footerImageSrc}
        footerImageAlt={props.footerImageAlt}
        footerImageLoading={props.footerImageLoading}
        footerImageWidth={props.footerImageWidth}
        footerImageHeight={props.footerImageHeight}
        author={props.author}
      />
    </article>
  );
};

export default Card;
