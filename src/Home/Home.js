import Header from "./Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="intro">
        Donovan Odom is a Ruby on Rails-loving, Design-adept, Full Stack
        Software developer settled in Seattle, WA
        <div style={{ display: "inline" }}> &#127783;</div>
      </div>
      <div className="self"></div>
    </div>
  );
};
export default Home;
