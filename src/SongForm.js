import React from 'react'

class SongForm extends React.Component{
    constructor(props){
      super(props)
      this.state={
        title: 'title',
        artist: 'price',
      }
    }

    handleChange = (e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    handleSubmit=(e)=>{
      //don't want to get rid of all pre-populated fields in the form
      e.preventDefault()
      this.props.addSong(this.state)
    }
    render(){
      return(
        <div>
          <h1>SongForm</h1>
          <form onSubmit={this.handleSubmit}>
          <p>title</p>
          <input name='title' value={this.state.title} onChange={this.handleChange}/>
          <p>artist</p>
          <input name='artist' value={this.state.artist} onChange={this.handleChange}/>
          <button>add</button>
          </form>
        </div>
      )
    }
}
export default SongForm;