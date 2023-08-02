import { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const Product = (props) => {
  const { name, title, basePrice, colors, sizes } = props;
  const [selectedColor, setSelectedColor] = useState(colors[0]); // Domyślny wybór koloru - pierwszy na liście
  const [selectedSize, setSelectedSize] = useState(sizes[0]); // Domyślny wybór rozmiaru - pierwszy na liście

  // Funkcja do zmiany wybranego koloru
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Funkcja do zmiany wybranego rozmiaru
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Funkcja do obliczania ceny na podstawie wybranego rozmiaru
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

  // Określenie adresu obrazka na podstawie nazwy produktu i wybranego koloru
  const imageUrl = `${process.env.PUBLIC_URL}/images/products/shirt-${name}--${selectedColor}.jpg`;

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img className={styles.image} alt={title} src={imageUrl} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <div>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <li key={size.name}>
                  <button type="button" className={clsx(styles.sizeButton, size === selectedSize && styles.active)} onClick={() => handleSizeChange(size)}>
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(styles.colorButton, styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], color === selectedColor && styles.active)}
                    onClick={() => handleColorChange(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button type="button" className={styles.button} onClick={() => handleAddToCart()}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Product;