import React from "react";
import Image from "../image/Image";

const CardFooter = (props) => {
  return (
    <div className="card-footer">
      <Image
        src={props.footerImageSrc}
        alt={props.footerImageAlt}
        loading={props.footerImageLoading}
        width={props.footerImageWidth}
        height={props.footerImageHeight}
      />
      <span className="card-fooer__author">{props.author}</span>
    </div>
  );
};

export default CardFooter;
