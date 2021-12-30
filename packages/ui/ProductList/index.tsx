import "./styles.css";
import Product from "../Product";
import { products } from "../../data/data";

export const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects in GitHub</h1>
        <p className="pl-desc">
          Go to my profile on github to see my new projects and some skills I'm
          studying
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};
