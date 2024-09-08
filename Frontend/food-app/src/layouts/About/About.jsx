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
            <h3>
              We created this website to make it easier for everyone to order
              their favorite food. We will help you compare the price and
              transport time, and we will also offer you the best restaurants in
              your area.
            </h3>
          </div>
          <div className="row mt-5">
            <h5 className="mt-4">If you have any questions, contact us:</h5>
            <p className="d-flex mt-4">Email: foodapp@email.com</p>
            <p className="d-flex mt-2">Phone: 123 456 789</p>
            <p className="d-flex mt-2">
              Office location: Kraków Witolda Budryka 2
            </p>
          </div>
        </div>
        <div className="col-6">
          <img
            src={require("../../images/Gifs/CookingGif1.gif")}
            alt="Cooking Gif"
            className="cooking-gif"
          />
        </div>
      </div>
    </div>
  );
};
