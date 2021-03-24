import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App=()=>{

//     window.navigator.geolocation.getCurrentPosition(
//         position=>console.log(position),
//         err=>console.log(err)
//     );
//     return <div></div>;
// };

class App extends React.Component{                                  //class component
    // constructor(props){
    //     super(props);                                               //refrence to parent constructor func...like a ceremony
        
    //     this.state={lat:null,errorMessage:''};                     //this is th only time we do direct assignmne tof state i.e. i n the constructor
        
        
    // }
    state={lat:null,errorMessage:''};       //state intialisation without constructor

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>{ this.setState({lat:position.coords.latitude})
            console.log(position.coords.latitude)},err=>this.setState({errorMessage: err.message})
            
        );
    }


    renderContent(){
        if(this.state.errorMessage && !this.state.lat){             //conditional rendering
            return<div>Error:{this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return <Fragment><SeasonDisplay lat={this.state.lat}/></Fragment>;
        }
        return <Spinner message="Please accept the location request"/>;
    }

    

                                                                    //react asks to define render method and return jsx
    render(){
        return <div className="border red"> {this.renderContent()}</div>;
     }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);