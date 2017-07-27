import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

    renderField(field){
        return(
            <div className="form-group" >
                <label>{field.label}</label>
              <input type="text" {...field.input} className="form-control"/>
          </div>
        );
    }


    render(){
        return (
          <form>
              <Field name="title"  label="Title for a Post" component={this.renderField} />
              <Field name="categories" label="Categories" component={this.renderField} />
              <Field name="content" label="Post Content" component={this.renderField} />
          </form>
        );
    }
}

export default reduxForm({
    form: "PostsNewForm"
}) (PostsNew);