import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';


class PostsNew extends Component {

    renderField(field) {

        // const { meta: { touched, error } } = field; --> destructuring.
        const className = `form-group ${field.meta.touched && field.meta.error ? "has-danger" : ""}`;  // result od destructuring: touched && error ? "has-danger" : ""

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input type="text"
                       className="form-control" {...field.input} /> {/*...field.input --> onChange={field.input.onChange} onFocus={field.input.onFocus} etc.*/}

                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ""}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);

    }

    render() {
        const {handleSubmit} = this.props;  // === const handleSubmit = this.props.handleSubmit

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" label="Title for a Post" component={this.renderField}/>
                <Field name="categories" label="Categories" component={this.renderField}/>
                <Field name="content" label="Post Content" component={this.renderField}/>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>

            </form>
        );
    }
}

function validate(values) {
    // console.log(values) --> {title: "asdf", categories: "asdf", content: "asdf"}

    const errors = {};

    //Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content please";
    }

    //If errors is empty, the form is fine to submit
    // If errors has any properties, redux form assumes form is invalid
    return errors;

}


export default reduxForm({
    validate,               //  === validate: validate,
    form: "PostsNewForm"
})(PostsNew);