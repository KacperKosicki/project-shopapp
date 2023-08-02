import React from 'react';
import styles from '../Product/Product.module.scss';

const ProductImage = ({ name, title, selectedColor }) => {
  // Określenie adresu obrazka na podstawie nazwy produktu i wybranego koloru
  const imageUrl = `${process.env.PUBLIC_URL}/images/products/shirt-${name}--${selectedColor}.jpg`;

  return (
    <div className={styles.imageContainer}>
        <img className={styles.image} alt={title} src={imageUrl} />
      </div>
  );
};

export default ProductImage;