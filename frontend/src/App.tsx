import { useState } from "react";
import Lottie from "react-lottie";
//@ts-ignore
import animationData from "./lotties/404";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Description from "./Description";
import Picture from "./Picture";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <LottieComponent />,
  },
  {
    path: "description/:descriptionId",
    element: <Description />,
  }
]);

export default function App() {
  return(
      <RouterProvider router={router} />
  )
}

function HomePage() {
  return(
    <div>
      <Link to={"/animation"}>Error Page</Link>
      <SayHi />
      <Picture image={"/pug.webp"} desc={"pug"} />   
      <Picture image={"/sizu.webp"} desc={"sizu"} />   
      <Picture image={"/germansheperd.webp"} desc={"germansheperd"} />   
      <Picture image={"/goldenretriver.webp"} desc={"goldenretriver"} />   
    </div>
  )
}

function SayHi() {
  const [name, setName] = useState("coder");
  const [isFirstTime, setIsFirstTime] = useState(true);
  const hour = new Date().getHours();
  let time;

  if (hour < 12){
    time = "morning";
  }
  if (hour > 12 && hour < 18){
    time = "afternoon";
  }
  if (hour > 18 && hour < 20){
    time = "evening";
  }
  if (hour > 20){
    time = "night";
  }
  function handlerEnter(event: any): void {
    console.log(event);
    if(event.keyCode === 13){
      setIsFirstTime(false);
      setName(event.target.value);
    };
  }

  return(
    <div>
      {(isFirstTime) && <p>Enter your name</p>}
      <input className="input" type="text" onKeyDown={handlerEnter}></input>
      <p className="line">Good {time}, {name}</p>
      
    </div>
  );
}

function LottieComponent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie 
	      options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
}