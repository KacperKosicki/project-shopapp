import React from 'react';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from '../Product/Product.module.scss';

const ProductForm = ({ colors, selectedColor, handleColorChange, sizes, selectedSize, handleSizeChange, handleAddToCart }) => {
  return (
    <div>
      <OptionSize sizes={sizes} selectedSize={selectedSize} handleSizeChange={handleSizeChange} />
      <OptionColor colors={colors} selectedColor={selectedColor} handleColorChange={handleColorChange} />
      <Button type="button" className={styles.button} onClick={() => handleAddToCart()}>
          <span className="fa fa-shopping-cart" />
      </Button>
    </div>
  );
};

export default ProductForm;