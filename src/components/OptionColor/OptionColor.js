import React from 'react';
import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionColor = ({ colors, selectedColor, handleColorChange }) => {
  return (
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
  );
};

export default OptionColor;