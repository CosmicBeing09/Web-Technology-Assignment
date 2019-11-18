import React, { Component } from 'react';
import DefaultLayout from '../../../containers/DefaultLayout/DefaultLayout';
import {
    Carousel,
    CarouselItem,
    Col, 
    Row,
    Card,
    CardBody,
    CarouselCaption,
    CardHeader,
    CarouselIndicators,
    CarouselControl,
    Button,
    CardFooter
  } from "reactstrap";

class Details_Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data : []
        }
       
    } 
    async componentDidMount(){
        const {data} = this.props.location.state;
        console.log(data);
        this.setState({data});
    }
    render() {
        return(
        <div className="animated fadeIn" key={Math.random()}>
            <Card>
        <CardHeader className="text-center text-md-center">  News Feed  </CardHeader>
      <CardBody> 
            <div>
                <h4>Posted by:  {this.state.data.userName}</h4>
            </div>
            <div>
            <div dangerouslySetInnerHTML={ { __html: this.state.data.content} }></div>
            </div>
            </CardBody>
            </Card> 
            </div>
            );
    }
} export default Details_Post;