// import { useHistory } from 'react-router-dom'

interface propsType {
  category: any;
  categoryCount: any;
}
const CategoryCard = ({ category, categoryCount }: propsType) => {
  //   const history = useHistory()

  const searchByCategory = () => {
    // history.push(
    //   `/search/?keyword=&category=${encodeURIComponent(
    //     category?.categorySearchParam
    //   )}`
    // )
  };
  return (
    <div className="discover_card_title_container">
      <h6>{category.category}</h6>
      {categoryCount && <p>{categoryCount.count} items</p>}
    </div>
  );
};

export default CategoryCard;
