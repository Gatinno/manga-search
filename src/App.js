import './App.css';
import  useFecth  from './hooks/useFetch';
import RoutesService from './services/routesService';

function App() {
  const OPTIONS = {
    methods: 'GET', 
    headers: {
      Accept: 'application/vnd.api+json', 
      'Content-Type': 'application/vnd.api+json'
    }};
  const {fetchData, loading} = useFecth('https://kitsu.io/api/edge/manga', OPTIONS);
  console.log(fetchData);
  console.log(loading);
  return (
    <RoutesService />
  );
}

export default App;
