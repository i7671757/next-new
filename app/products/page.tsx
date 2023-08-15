import manufacturersData from "./data";

const ManufacturersPage = () => {
  return (
    <div>
      <h2>Product of Drink</h2>
      <ul>
        {manufacturersData.map((manufacturer) => (
          <li key={manufacturer.id}>
            {manufacturer.name} - {manufacturer.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManufacturersPage;
