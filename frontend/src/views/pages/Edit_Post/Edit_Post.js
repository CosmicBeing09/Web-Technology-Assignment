import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, FormGroup, Label, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ButtonDropdown,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Edit_Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            description: null,
            title : null,
            data : []
        }

        this.postData = this.postData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deletePost = this.deletePost.bind(this);
    } 
    
     handleChange(event){
     const target = event.target;
     const title = target.value;
     const name = target.name;
     this.setState({title});
   }


   async componentDidMount(){
    this.setState({isLoading:false});
    const {data} = this.props.location.state;
    this.setState({data});
    const title = data.title;
    this.setState({title});
    const description = data.content;
    this.setState({description});
}

    async postData(event) {
   
        let data = [{
            'propName' : "title",
            'value' : this.state.title
          },
          {
            'propName' : "content",
            'value' : this.state.description 
          }
        ];
     

        const { user } = this.state;
        await fetch(`http://localhost:3007/post/`+this.state.data._id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
              }
        }).then(res => res.json())
        .then(json => {
          alert("Updated Successfully");
          window.location.replace("/");
         });
    }

    async deletePost(event) {
        const { user } = this.state;
        await fetch(`http://localhost:3007/post/`+this.state.data._id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
              }
        }).then(res => res.json())
        .then(json => {
          alert("Post Deleted");
          window.location.replace("/");
         });
    }

    render() {
        if(this.state.isLoading){
            return(<div>Loading ....</div>);
        }
        else{
        return (
            <div className="animated fadeIn">
                {/* <h3>Give a title:</h3> */}
                <Row>
                    <Col xs="12">
                        <h5>Edit title: </h5>
                        <FormGroup>
                            <Input type="text" id="Title" value={this.state.data.title} placeholder="Write Your Title" onChange={this.handleChange} required/>
                        </FormGroup>
                    </Col>
                </Row>
                <h5>Edit your post here: </h5>
                <CKEditor
                    editor={ClassicEditor}
                    data={this.state.data.content}
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
            
                <div style={{margin:'10px'}}>

                    <Row>
                        <Col sm="16" md={{ size: 6, offset: 4 }}>
                            <Button color="primary" className="px-4" onClick={this.postData}>Submit</Button>
                        </Col>
                    </Row>
                </div>

                <div style={{margin:'10px'}}>

               <Row>
                 <Col sm="16" md={{ size: 6, offset: 4 }}>
                     <Button color="danger" className="px-4" onClick={this.deletePost}>Delete</Button>
                </Col>
              </Row>
</div>

                {/* <div dangerouslySetInnerHTML={ { __html: this.state.body } }></div> */}

            </div>
        );
            }
    }
}
export default Edit_Post;