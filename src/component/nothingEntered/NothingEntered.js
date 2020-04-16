import React from 'react';
import styles from './nothingEntered.module.css';

const NothingEntered = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Fields must be filled!</p>
        </div>
    )
}

export default NothingEntered;