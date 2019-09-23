import React from 'react';
import PropTypes from 'prop-types';
import Styles from './StyleTransHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={Styles.transactionHistory}>
      <thead className={Styles.thead}>
        <tr className={Styles.tr}>
          <th className={Styles.th}>Type</th>
          <th className={Styles.th}>Amount</th>
          <th className={Styles.th}>Currency</th>
        </tr>
      </thead>
      <tbody className={Styles.tbody}>
        {items.map(item => (
          <tr className={Styles.tr} key={item.id}>
            <td className={Styles.td}>{item.type}</td>
            <td className={Styles.td}>{item.amount}</td>
            <td className={Styles.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
