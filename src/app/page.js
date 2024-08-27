import Home from "./(home)/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Caves Land || Real Estate App",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
