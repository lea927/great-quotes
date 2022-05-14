function Quote(props) {
  return(
    <div className="Quote">
    <h1>{props.text}</h1>
    <h2>{props.author}</h2>
    <ViewFullscreen visible={false}/>
    </div>
  );
}

function ViewFullscreen(props){
  if (!props.visible) {
    return null;
  }
  return(
    <div className="ViewFullscreen">
      <button>View Fullscreen</button>
    </div>
  );
}

export default Quote;
