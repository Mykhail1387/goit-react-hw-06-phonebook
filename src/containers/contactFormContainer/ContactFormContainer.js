import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../../component/contactForm/contactForm';
import { addContact } from '../../redux/contactAction';


class ContactFormContainer extends Component {

    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addContact({ ...this.state })
        this.props.onAddContactForTransition({ ...this.state })
        this.reset()
    }

    reset = () => {
        this.setState(
            {
                name: '',
                number: ''
            })
    }

    render() {
        const { name, number } = this.state;

        return (
            <ContactForm name={name} number={number} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addContact: contact => {
        return dispatch(addContact(contact))
    }
})

export default connect(null, mapDispatchToProps)(ContactFormContainer); 