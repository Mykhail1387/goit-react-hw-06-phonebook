import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from '../../component/contactList/ContactList ';


const filterContacts = (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
};

class ContactListContainer extends Component {

    render() {
        const { contacts } = this.props.contacts;
        const { filter } = this.props;
        const filteredContacts = filterContacts(contacts, filter)

        return (
            <>
                <ContactList filteredContacts={filteredContacts} />
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        filter: state.filter
    }
}

export default connect(mapStateToProps, null)(ContactListContainer);