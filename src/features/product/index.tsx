import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

interface IParamProduct {
  id: string;
}
const Product: React.FC = () => {
  const history = useHistory();

  const { id }: IParamProduct = useParams();

  return (
    <div className="row product-details">
      <div className="container">
        <h1>This is product details page with productId: {id} </h1>
        <button onClick={() => history.push('/')}>go to home</button>
      </div>
    </div>
  );
};

export default Product;
