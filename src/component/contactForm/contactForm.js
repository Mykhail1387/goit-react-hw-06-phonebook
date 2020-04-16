import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ name, number, handleSubmit, handleChange }) => {

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <span className={styles.spanText}>Name</span>
                <label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        autoComplete="off"
                        className={styles.input}

                    />
                </label>

                <span className={styles.spanText}>Number</span>
                <label>
                    <input
                        type="text"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        autoComplete="off"
                        minLength={5}
                        className={styles.input}
                    />
                </label>
                <button className={styles.btn} type="submit">Add contact</button>
            </form>
        </>
    )
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default ContactForm;