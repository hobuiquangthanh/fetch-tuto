import Search from './components/Search/Search';
import Fetch from './components/Fetch/Fetch';
import Pagination from './components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function App() {

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  })

  function handlePageChange(newPage) {
    console.log('New page:', newPage);
    setFilter({
      ...filter,
      _page: newPage,
    })
  }

  function handleFilterChange(newFilter){
    console.log('New Filter:', newFilter);
    setFilter({
      ...filter,
      _page:1,
      title_like: newFilter.searchTerm,
    })
  }

  useEffect(()=>{
    async function fetchPostList(){
      try {
        const paramsString = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await axios.get(requestUrl)
        console.log(response, 'data');
        const { data: { data, pagination } } = response;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list:', error.message);
      }
    }
    fetchPostList();
  }, [filter])
  return (
    <div className="App">
      <Search onSubmit={handleFilterChange} />
      <Fetch posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default App;
