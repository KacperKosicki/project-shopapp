import React, { useState } from 'react';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const { name, title, basePrice, colors, sizes } = props;
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (sizeName) => {
    const selectedSizeObj = sizes.find((size) => size.name === sizeName);
    setSelectedSize(selectedSizeObj);
  };

  const getPrice = () => {
    return basePrice + selectedSize.additionalPrice;
  };

  const handleAddToCart = () => {
    console.log('Summary');
    console.log('---==========---');
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Color:', selectedColor);
    console.log('Size:', selectedSize);
  };

  return (
    <article className={styles.product}>
        <ProductImage name={name} title={title} selectedColor={selectedColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          colors={colors}
          selectedColor={selectedColor}
          handleColorChange={handleColorChange}
          sizes={sizes}
          selectedSize={selectedSize}
          handleSizeChange={handleSizeChange}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </article>
  );
};

export default Product;