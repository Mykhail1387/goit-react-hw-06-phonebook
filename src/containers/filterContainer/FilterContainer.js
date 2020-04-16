import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterContact } from '../../redux/contactAction';
import Filter from '../../component/filter/filter';


class FilterContainer extends Component {
    state = {
        value: ''
    }

    onchangeFilter = (e) => {
        this.setState({ value: e.target.value })
        this.props.filterContact(e.target.value)
    }

    render() {
        const { value } = this.state;
        return (
            <Filter value={value} onchangeFilter={this.onchangeFilter} />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    filterContact: filter => dispatch(filterContact(filter))
})

export default connect(null, mapDispatchToProps)(FilterContainer);

