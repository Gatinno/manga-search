import {useState, useEffect} from 'react';
const OPTIONS = {
  methods: 'GET', 
  headers: {
    Accept: 'application/vnd.api+json', 
    'Content-Type': 'application/vnd.api+json'
  }
};
const useFecth = (url) => {
  const [fetchData, changeFetchData] = useState({});
  const [loading, changeLoading] = useState(false);
  useEffect(()=>{
    fetch(url, OPTIONS)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response
      }) 
      .then(data => {
        changeFetchData(data)
      })
      .catch(error => {
        console.log(error);
        changeFetchData(error);
      })
      .finally(() => {
        changeLoading(true)
      })
  },[url]);
  return {fetchData, loading};
}
export default useFecth;