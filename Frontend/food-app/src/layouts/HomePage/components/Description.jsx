export const Description = () => {
  return (
    <div>
    <div className="d-none d-lg-block">
      <div className="row mt-4 g-0">
        <div className="col-6">
          <div className="left-image card-border"></div>
        </div>
        <div className="col-6 container d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-center">
              Do you want to know the best restaurants in your area?
            </h1>
            <p className="p-3 about-text">
              Our app will allow you to discover a variety of restaurants in
              your area with delicious food. In just a few clicks you will be
              able to choose a dish for yourself and we will provide you with
              the necessary contact to order it.
            </p>
          </div>
        </div>
      </div>
      <div className="row mb-4 g-0">
        <div className="col-6 container d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-center">
              Do you want food delivered quickly and at a reasonable price?
            </h1>
            <p className="p-3 lead about-text">
              We will compare the offers of the most popular food delivery
              companies and help you choose the best one. Everything in one
              place without tedious searching!
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="right-image card-border"></div>
        </div>
      </div>
    </div>


    {/* Mobile view */}
    <div className="d-lg-none">
    <div className="row g-0">
        <div className="col-12">
          <div className="left-image"></div>
        </div>
        </div>
        <div className="row mt-4 mb-4 g-0"> 
        <div className="col-12 container d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-center">
              Do you want to know the best restaurants in your area?
            </h1>
            <p className="p-3 about-text">
              Our app will allow you to discover a variety of restaurants in
              your area with delicious food. In just a few clicks you will be
              able to choose a dish for yourself and we will provide you with
              the necessary contact to order it.
            </p>
          </div>
        </div>
      </div>
      <div className="row mb-4 g-0">
        <div className="col-12">
          <div className="right-image"></div>
        </div>
        </div>
        <div className="row mt-4 g-0">
        <div className="col-12 container d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-center">
              Do you want food delivered quickly and at a reasonable price?
            </h1>
            <p className="p-3 about-text">
              We will compare the offers of the most popular food delivery
              companies and help you choose the best one. Everything in one
              place without tedious searching!
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
