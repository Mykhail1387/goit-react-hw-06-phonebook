import React from 'react';
import styles from './alreadyHaveContact.module.css';

const AlreadyHaveContact = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Contacts already exists!</p>
        </div>
    )
}

export default AlreadyHaveContact;