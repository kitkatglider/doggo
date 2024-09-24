import { useParams } from "react-router-dom"
import Picture from "./Picture"

export default function Description(props: any) {
    const {descriptionId} = useParams()
    console.log(props)
    return(
        <Detail />
    )
  }

function Detail(_descriptionId: any) {
  const response = fetch
  return( 
  <div className="container">
  <Picture image={"/goldenretriver.webp"} desc={"goldenretriver"} />
  <h2 className="breed-name">Golden Retriever</h2>
  <div className="details">
    <p><span>Age Limit:</span> 10-12 years</p>
    <p><span>Characteristics:</span> Friendly, intelligent, and devoted</p>
    <p><span>Food:</span> High-quality dry food and occasional wet food</p>
  </div>
</div>
  )  
}
