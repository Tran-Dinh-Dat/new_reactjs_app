import React from "react";
import PropTypes from 'prop-types';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            language: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.name);
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Languages</label>
                        <select className="form-control" name="language" value={this.state.language} onChange={this.handleChange} >
                            <option value="">Please chose language you know</option>
                            <option value="en">English</option>
                            <option value="vi">Vietnamese</option>
                            <option value="cn">Chinese</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

Form.propTypes = {
    name: PropTypes.number
};


export default Form
