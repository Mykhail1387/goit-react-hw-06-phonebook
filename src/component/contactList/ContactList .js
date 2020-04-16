import React from 'react';
import ElementListContact from './elementListContact';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import forContactList from '../transitions/forContactList.module.css';


const ContactList = ({ filteredContacts }) => {

    return (
        <>
            <TransitionGroup component="ul">
                {filteredContacts.map(list => (
                    <CSSTransition key={list.id} timeout={250} unmountOnExit classNames={forContactList}>
                        < ElementListContact list={list} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    )
}

export default ContactList;