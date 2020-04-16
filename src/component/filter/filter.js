import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ value, onchangeFilter }) => {

    return (
        <div className={styles.wrap}>
            <span className={styles.text}>Find contacts by name: </span>
            <input
                type="text"
                value={value}
                onChange={onchangeFilter}
                className={styles.input}
            />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onchangeFilter: PropTypes.func.isRequired
}

export default Filter;