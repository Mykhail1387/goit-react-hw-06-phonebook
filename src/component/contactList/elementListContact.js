import React from 'react';
import PropTypes from 'prop-types';
import styles from './elementListContacts.module.css';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contactAction';


const ElementListContact = ({ list, deleteContact }) => (
    <li className={styles.list}>{list.name} <span>{list.number}</span>
        <button className={styles.close} type="button" onClick={() => deleteContact(list.id)}></button>
    </li>
)

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(deleteContact(id))

})

export default connect(null, mapDispatchToProps)(ElementListContact);


ElementListContact.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    list: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
}