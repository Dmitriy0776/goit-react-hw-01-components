import React from 'react';
import PropTypes from 'prop-types';
import Styles from './StatsSection.module.css';

const StatsSection = ({ stats, title }) => (
  <>
    <section className={Styles.statsSection}>
      <h2 className={Styles.title}>{title}</h2>

      <ul className={Styles.statList}>
        {stats.map(item => (
          <li key={item.id} className={Styles.item}>
            <span className={Styles.label}>{item.label}</span>
            <span className={Styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </>
);

StatsSection.defaultProps = {
  title: 'Upload stats',
};

StatsSection.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default StatsSection;
