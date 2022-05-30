import { useParams } from "react-router-dom";

export function QuoteComponent(props){
  const { id } = useParams();
  return (
    <div className="quote">
      {/* <h1>Id:{id}</h1> */}
      <h1>{props.quote}</h1>
      <h1>{props.author}</h1>
    </div>
  )
}

export default QuoteComponent;