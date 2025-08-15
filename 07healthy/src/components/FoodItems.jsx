function FoodItems({FoodItem}) {
  return (
    <ul className="list-group">
      {FoodItem.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default FoodItems;
