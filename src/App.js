import  React from 'react'
import './App.css'


class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {

    if (this.state.show) {
      return(
        <div id="hello">
          <h3>{ this.props.subtitle }</h3>
          { this.props.mytext }
          <button onClick={ this.toggleShow }>Toggle Show</button>
        </div>
      )  
    }else{
      return <h1>
              There are not elements
              <button onClick={ this.toggleShow }>
              Toggle Show
              </button>
            </h1>
    }
    
  }
}

//const App = () => <div>This is my compoment: <Helloworld /></div>

/* class App extends React.Component {
  render(){
    return <div>This is my compoment: <Helloworld /></div>
  }
} */

function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello Fazt" subtitle="loremp ispum" /> 
      <Helloworld mytext="hola mundo" subtitle="sdfsfsdf" /> 
      <Helloworld mytext="Hello!" subtitle="component three" /> 
      </div>
  );
}

export default App;
