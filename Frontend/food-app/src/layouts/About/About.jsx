export const About = () => {
  return (
    <div>
      <div className="row p-5 d-flex align-content-center justify-content-center">
        <div className="col-12">
          <div className="text-center">
            <h1 className="about-title">Get to know us!</h1>
          </div>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-6 container">
          <div className="row">
            <p className="about-text">
              We created this website to make it easier for everyone to order
              their favorite food. We will help you compare the price and
              transport time, and we will also offer you the best restaurants in
              your area.
            </p>
          </div>
          <div className="row mt-5">
            <h3 className="mt-4">If you have any questions, contact us:</h3>
            <p className="d-flex mt-4 about-text">Email: foodapp@email.com</p>
            <p className="d-flex mt-2 about-text">Phone: 123 456 789</p>
            <p className="d-flex mt-2 about-text">
              Office location: Kraków Witolda Budryka 2
            </p>
          </div>
        </div>
        <div className="col-6">
          <img
            src={require("../../images/Gifs/CookingGif1.gif")}
            alt="Cooking Gif"
            className="cooking-gif card-border"
          />
        </div>
      </div>
    </div>
  );
};
