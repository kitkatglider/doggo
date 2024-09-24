type pic = {image: string, desc: string}
function Picture(props: pic){
  return(
    <img className="pic" src={props.image} alt={"A image of a" + props.desc } />
  )
}

export default Picture;