import React from 'react';
import PropTypes from 'prop-types';
import Styles from './StylePricingPlan.module.css';

const PricingItem = ({ propItem }) => {
  const { label, icon, capacity, price, description } = propItem;
  return (
    <div className={Styles.pricingItem}>
      <i className={Styles.icon}>{icon}</i>
      <h2 className={Styles.label}>{label}</h2>
      <p className={Styles.capacity}>{capacity} Storage</p>
      <p className={Styles.description}>{description}</p>
      <p className={Styles.price}>${price}/MO</p>
      <button type="button" className={Styles.button}>
        Get Started
      </button>
    </div>
  );
};

PricingItem.propTypes = {
  propItem: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PricingItem;
