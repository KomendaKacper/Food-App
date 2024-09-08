import { Carousel } from "./components/Carousel";
import { FoodCard } from "./components/FoodCard";
import { Welcome } from "./components/Welcome";

export const HomePage = () => {
  return (
    <div>
      <Welcome />
      <Carousel />
    </div>
  );
};
