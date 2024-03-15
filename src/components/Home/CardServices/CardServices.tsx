import Image from "next/image";
import video from "../../../app/Asset/services/video.png";
import peoples from "../../../app/Asset/services/peoples.png";
import map from "../../../app/Asset/services/map.png";
import SingleCard from "./SingleCard";



const CardServices = () => {
  return (
    <div className="">
    <h1 className="text-4xl md:text-5xl font-bold text-center">
      Unlock the Potential of Your{" "}
      <span className="text-red-500">Food Truck</span>
    </h1>
    <p className="my-5 text-center font-medium mx-10 md:mx-20">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
      error animi ab ut natus illo fugit vero eveniet quasi quo esse, fuga
      explicabo numquam enim suscipit deserunt ad perspiciatis earum!
    </p>

    <div className="mb-5 flex flex-shrink-0 flex-wrap justify-center gap-10 ">
      <SingleCard
        title={"Professional Film Production for Food Trucks"}
        info={
          "Capture the essence of your food truck with our discounted film production services. Our team of professionals will create high-quality videos that showcase your unique offerings and attract new customers."
        }
        image={video}
      ></SingleCard>
        <SingleCard
        title={"Get Featured and Reach a Wider Audience"}
        info={
          " Stand out from the competition by getting featured in our newsletter and social media channels. Our promotional features will help you reach a wider audience and increase your visibility in the food truck community."
        }
        image={peoples}
      ></SingleCard>
        <SingleCard
        title={"Stay Updated with Real-Time Location Updates"}
        info={
          "Never miss out on your favorite food trucks again. Our map provides real-time location updates of participating food trucks, ensuring you always know where to find them."
        }
        image={map}
      ></SingleCard>
    </div>
  </div>
  )
}

export default CardServices