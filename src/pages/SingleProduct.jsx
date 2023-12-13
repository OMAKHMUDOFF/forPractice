import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SingleProduct() {
  let prodID = useParams();
  let { bestSellers, bestOffers, goodsArr } = useSelector(
    (state) => state.TotalRedux
  );
  let singleData = [...bestOffers, ...bestSellers, ...goodsArr];
  let product = singleData.filter((elem) => elem?.id === +prodID?.id)?.[0];
  console.log(product);
  return (
    <div>
      <h1>salom</h1>
    </div>
  );
}

export default SingleProduct;
