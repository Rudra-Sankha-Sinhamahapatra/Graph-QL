import { gql, useQuery } from "@apollo/client";
import "./App.css";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
        email
        phone
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <div className="App">{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
