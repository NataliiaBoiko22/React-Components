import { useAppSelector } from "../../../redux/hooks";
import { Api } from "../../../Api/Api";
import Card from "../Card/Card";

import "./cards.css";

const Cards = () => {
  const { value } = useAppSelector((state) => state.searchReducer);
  const {
    data: result,
    error,
    isLoading,
  } = Api.useFetchProductsQuery(value, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div> Some error!</div>;
  }
  return (
    <>
      <div className="cards-wrapper">
        {result && result.products.length > 0 ? (
          result.products.map((res) => {
            return <Card key={res.id} item={res} />;
          })
        ) : (
          <div>Sorry, there is no cards with this title</div>
        )}
      </div>
    </>
  );
};

export default Cards;
