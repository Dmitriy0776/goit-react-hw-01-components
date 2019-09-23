import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import Styles from './StylePricingPlan.module.css';

const PricingPlan = ({ items }) => {
  return (
    <ul className={Styles.pricingPlan}>
      {items.map(item => (
        <PricingItem key={item.price} propItem={item} />
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PricingPlan;
