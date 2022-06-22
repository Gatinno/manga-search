import {useState, useEffect} from 'react';
const useFecth = (url, options) => {
  const [fetchData, changeFetchData] = useState({});
  const [loading, changeLoading] = useState(false);
  useEffect(()=>{
    fetch(url, options)
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
  },[]);
  return {fetchData, loading};
}
export default useFecth;