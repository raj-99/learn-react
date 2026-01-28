const DisplayData = ({ fruits, person }) => {
  return (
    <div>
      <h2>Fruits List: </h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h2>Person Data: </h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </div>
  );
};

export default DisplayData;
