import { Carousel } from "./components/Carousel";
import { Description } from "./components/Description";
import { Search } from "./components/Search";
import { Welcome } from "./components/Welcome";

export const HomePage = () => {
  return (
    <div>
      <Welcome />
      <Carousel />
      <Description />
      <Search />
    </div>
  );
};
