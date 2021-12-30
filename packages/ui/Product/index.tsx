import "./styles.css";

type Props = {
  img: string;
  link: string;
};

const Product = ({ img, link }: Props) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="products" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
