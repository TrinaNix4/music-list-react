import React from 'react'
import SongForm from './SongForm';

class List extends React.Component{
  constructor(props){
  super(props);

  //init state; a songs state that has title and artist
  this.state={
    songs:[
      {title:'Bullet Train to Iowa', artist:'Puscifer'},
      {title:'The Remedy', artist:'Puscifer'},
      {title:'Man Overboard', artist:'Puscifer'},
      {title:'Queen B', artist:'Puscifer'},
    ],
    showForm:false,
  };
}

addSong =(song) => {
  //skipping the db call for this assignment
  //update state
  let updateSongs = [song, ...this.state.songs]
  this.setState({
    songs:updateSongs //songs is an array of objects with a title and artist
  })
}

deleteSong = (songName)=>{
  //delete from DB (skipped for this project)
  //remove from state
  let filteredSongs = this.state.songs.filter(song => song.title !== songName)
this.setState({
  songs:filteredSongs
})
}
renderSongs=()=>{
  //use this.state to map over songs
  return this.state.songs.map(song=>{
    return(
      <div>
        <h1>{song.title}</h1>
        <p>{song.artist}</p>
        <button onClick={()=>this.deleteSong(song.name)}>delete</button>
      </div>
    );
  });
};

toggleForm=()=>{
  this.setState({
    showForm: !this.state.showForm
  })
}

render(){
  return(
    <div>
    {/* grab the value of showForm state, if it's true, render songForm
    if false, don't render it (show it/don't show it) */}
      <button onClick={this.toggleForm}>{this.state.showForm ? 'hide' : 'show'}</button>
    {this.state.showForm && <SongForm addSong={this.addSong} />}
    {/* call the renderSongs function */}
    {this.renderSongs()}
    </div>
  );

}}

export default List;