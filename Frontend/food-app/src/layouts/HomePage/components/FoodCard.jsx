export const FoodCard = (props) => {
  const imagePath = require(`../../../images/FoodImages/${props.name}.jpeg`);

  return (
    <div className="container mx-auto mt-4">
      <div className="row">
        <div className="col">
          <div
            className="card main-color card-border"
            style={{ width: "18rem" }}
          >
            <img className="card-img-top" 
            src={imagePath} 
            alt={props.name} 
            style={{height: "200px"}}/>

            <div className="card-body align-content-center text-center">
              <h4 className="card-title p-3">{props.name}</h4>
              <button className="btn btn-light border-1">Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
