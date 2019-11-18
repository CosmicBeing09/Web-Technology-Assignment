import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MyUploadAdapter from './ImageUploadAdapter';
import Multiselect from 'multiselect-dropdown-react';
import { MDBSelect } from "mdbreact";
import { Button, FormGroup, Label, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ButtonDropdown,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { tsImportEqualsDeclaration } from '@babel/types';
import "./Blog_Post.css";

class Blog_Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            description: null,
            title : null,
        }

        this.postData = this.postData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 
    
     handleChange(event){
     const target = event.target;
     const title = target.value;
     const name = target.name;
     this.setState({title});
   }


    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({ user });
       
    }

    async postData(event) {
      //  const { description } = this.state;
        let data = {
            title: this.state.title,
            content : this.state.description,
            userId : this.state.user.userId,
            token : this.state.user.token,
            userName : this.state.user.userName
          };
     

        const { user } = this.state;
        await fetch(`http://localhost:3007/post`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
              }
        }).then(res => res.json())
        .then(json => {
          alert(JSON.stringify(json.message, null));
          window.location.replace("/");
         });
    }

    render() {
        return (
            <div className="animated fadeIn">
                {/* <h3>Give a title:</h3> */}
                <Row>
                    <Col xs="12">
                        <h5>Give a title: </h5>
                        <FormGroup>
                            <Input type="text" id="Title" placeholder="Write Your Title" onChange={this.handleChange} required />
                        </FormGroup>
                    </Col>
                </Row>


            

                <h5>Write your post here: </h5>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Start here...!</p>"
                    onInit={editor => {
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        const description = editor.getData();
                        this.setState({ description });
                        // console.log(this.state.description)
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
                {/* <div className="center">
                <Button color="success" onClick = {this.postData}>Post</Button>
                </div> */}
                <div style={{margin:'10px'}}>

                    <Row>
                        <Col sm="16" md={{ size: 6, offset: 4 }}>
                            <Button color="primary" className="px-4" onClick={this.postData}>Post</Button>
                        </Col>
                    </Row>
                </div>
                {/* <div dangerouslySetInnerHTML={ { __html: this.state.body } }></div> */}

            </div>
        );
    }
}
export default Blog_Post;