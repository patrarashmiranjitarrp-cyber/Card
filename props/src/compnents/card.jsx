const Card=(props)=>{
    return(
       <div className="card" style={{backgroundColor:props.bg}} >
            <h2>{props.title1} <br /> {props.title2}</h2>
            <p>{props.date}</p>
            <div className="logo">
                <img src={props.img} alt="" />
                <div className="count">
                    <h4 >{props.count}</h4>
                </div>
            </div>
        </div>
    )
}
export default Card;