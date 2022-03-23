import logo from './logo.svg';
import './App.css';
import {QueryClientProvider, QueryClient,useQuery} from 'react-query'
import Example from './pages/Example';
import axios from 'axios'
const queryclient = new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider client={queryclient}>
      <Example/>
    </QueryClientProvider>
    </>
  );
}

/*
function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}
*/
export default App;
