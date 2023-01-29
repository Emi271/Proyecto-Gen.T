import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../assets/db/data';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/CardHeader';

const ProductDetalle = () => {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    const products = [data];
    const selectedProduct = products.find(product => product.id === id);
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <CardHeader>{product.marca}</CardHeader>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetalle;
