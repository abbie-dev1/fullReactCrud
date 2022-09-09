import { employees } from "./components/data";
import { getData } from "./components/employees";
import "./App.css";

export default function List() {
  const listItems = employees.map((person) => (
    <div key={person.id} className="card w100 bg-base-50 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{person.name}:</h2>
        <p>{" " + person.profession + " "} known for {person.accomplishment}</p>
      </div>
      <figure>
        <img src={getData(person)} alt={person.name} />
      </figure>
      <div className="card-actions-center text-center">
      <button className="btn btn-sm">Edit</button>
      <button className="btn btn-sm">Delete</button>
    </div>
    </div>));
  return (
    <article>
      <h1>Employees</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
