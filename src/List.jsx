function List({ people }) {
  return (
    <>
      {people.map((i) => { // foor loop 
        return (
          <article className="person" key={i.id}>
            <img src={i.image} />
            <div>
              {" "}
              <h4>{i.name}</h4>
              <p>{i.age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
export default List;
