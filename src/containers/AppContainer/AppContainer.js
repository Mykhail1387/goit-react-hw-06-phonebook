import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactFormContainer from '../contactFormContainer/ContactFormContainer';
import ContactListContainer from '../contactListContainer/ContactListContainer';
import FilterContainer from '../filterContainer/FilterContainer';

import { CSSTransition } from 'react-transition-group'
import styles from './AppContainer.module.css';
import forTitle from '../../component/transitions/forTitle.module.css';
import AlreadyHaveContact from '../../component/alreadyHaveContact/AlreadyHaveContact';
import ForAlready from '../../component/transitions/ForWarnings.module.css';
import NothingEntered from '../../component/nothingEntered/NothingEntered';
import ForNothing from '../../component/transitions/ForWarnings.module.css'
import ForFilter from '../../component/transitions/ForFilter.module.css';


class AppContainer extends Component {

    state = {
        isOpen: false,
        isAlready: false,
        isNothing: false
    }

    componentDidMount() {
        this.setState({ isOpen: true })
    }

    takeContactWithFormForTransition = contact => {
        const { contacts } = this.props.contacts
        const searchSameName = contacts.map(cont => cont.name).includes(contact.name)
        if (searchSameName) {
            this.setState({ isAlready: true })
            setTimeout(() => {
                this.setState({ isAlready: false });
            }, 2000);
        } else if (contact.name.length === 0) {
            this.setState({ isNothing: true });
            setTimeout(() => {
                this.setState({ isNothing: false });
            }, 2000);

        }
    };

    contactsLength = () => {
        const { contacts } = this.props.contacts;
        return contacts.length >= 2;
    }

    render() {
        const { isOpen, isAlready, isNothing } = this.state;
        const boolForFilter = this.contactsLength()

        return (
            <div className={styles.wrapper}>
                <CSSTransition in={isOpen} timeout={500} unmountOnExit classNames={forTitle}>
                    <h1 className={styles.text}>Phonebook</h1>
                </CSSTransition>
                <CSSTransition in={isAlready} timeout={250} unmountOnExit classNames={ForAlready}>
                    <AlreadyHaveContact />
                </CSSTransition>
                <CSSTransition in={isNothing} timeout={250} unmountOnExit classNames={ForNothing}>
                    <NothingEntered />
                </CSSTransition>
                <ContactFormContainer onAddContactForTransition={this.takeContactWithFormForTransition} />
                <CSSTransition in={boolForFilter} timeout={250} unmountOnExit classNames={ForFilter}>
                    <FilterContainer />
                </CSSTransition>
                <ContactListContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, null)(AppContainer);