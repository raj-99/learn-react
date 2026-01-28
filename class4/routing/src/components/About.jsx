import { useState } from "react";
import { useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Home() {
  return <h1>HomePage</h1>;
}
function About() {
  return <h1>About</h1>;
}

function Listing() {
  return <h1>Listing</h1>;
}

function PageNotFound() {
  return <h1>404: Page Not Found</h1>;
}
function User(props) {
  console.log(props);
  console.log(props.isAdmin);
  const params = useParams();
  console.log(params);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/users/${params.id}`);
      const userData = await response.json()

      console.log(userData);
      setUserData(userData);
    }
    fetchData() 
  },[]);

  return (
    <>
      <h1>User Page</h1>
      <p>{`username: ${userData?.username}`}</p>
      <p>{`Hi ${userData?.name.firstname}, you live at ${userData?.address.number}, ${userData?.address.street}, ${userData?.address.city} - ${userData?.address.zipcode}`}</p>
    </>
  );
}

function Routing() {
  return (
    <>
      <h1>Routing Example</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/listing">Listing</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/users/:id" element={<User isAdmin={true} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
