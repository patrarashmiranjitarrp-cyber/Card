import Card from "./compnents/card.jsx"
import img1 from "./assets/img_1.jpg"
import img2 from "./assets/img_2.jpg"
import img3 from "./assets/img_3.jpg"
import img4 from "./assets/img_4.jpg"
import img5 from "./assets/img_5.jpg"
import img6 from "./assets/img_6.jpg"
const App=()=>{
  const jobCards = [
  {
    title1: "Financial ",
    title2:"App",
    date: "25 Nov 2030",
    image: img1,
    count: "3+",
    bgColor: "#355070"
  },
  {
    
    date: "18 may 2030",
    title1: "Graphic ",
    title2:" Design",
    image: img2,
    count: "2+",
    bgColor: "#6d597a"
  },
  { 
    title1: "Artifact ",
    title2:"Model",
    date:"17 nov 2030",
    image:img3,
    count: "3+",
    bgColor: "#b56576"
  },
  {
    title1: "Operating ",
    title2:"System",
    date: "20 Apr 2030",
    image: img4,
    count: "2+",
    bgColor: "#e56b6f"
  },
  {
    title1: "Business ",
    title2:"Card",
    date: "15 oct 2030",
    image: img5,
    count: "3+",
    bgColor: "#eaac8b"
  },
  {
    title1: "Centered ",
    title2:"Design",
    date: "30 Apr 2030",
    image:img6,
    count: "2+",
    bgColor: "#ef476f"
  }
];
return (
    <div className="parent">
      {jobCards.map(function(job,idx){
        return <Card title1={job.title1} title2={job.title2} date={job.date} img={job.image} count={job.count} bg={job.bgColor}/>

      })}
    </div>
    
  )
}
export default App;