import './Filters.scss';
import React, { useContext, useState } from 'react';
import { AppContext as Context } from './../../context/context';
import { useEffect } from 'react/cjs/react.development';
const Filters = () => {
  const [store] = useContext(Context);
  const [filters, setFilters] = useState([]);
  const [showFilter, setshowFiltere] = useState(false);
  const showFil = () => {
    if (showFilter) {
      setshowFiltere(false);
      return;
    }
    setshowFiltere(true);
  }

  const setFilter = () => {
    const filters = [];
    store.products.forEach(element => {
      if (!filters.includes(element.type)) {
        filters.push(element.type)
      }
    });
    setFilters(filters);
  }

  // eslint-disable-next-line
  useEffect(() => {
    setFilter()
  },[setFilter])
  

  const remove = (props) => {  
    filters.forEach(element => {
      var elems = document.getElementsByClassName(element);
      for (var i = 0;i < elems.length;i += 1){
        elems[i].style.display = 'none';
      }
    })

    var elems = document.getElementsByClassName(props);
    for (var i = 0; i < elems.length;i += 1){
      elems[i].style.display = 'block';
    }

  }

  const reset = () => {
    filters.forEach(element => {
      var elems = document.getElementsByClassName(element);
      for (var i = 0; i < elems.length; i += 1){
        elems[i].style.display = 'block';
      }
    })
  }
  return (
    
    <div className="filters-container"> 
    <div className="filter" >
      <button onClick={showFil}>Filters</button>
    
    {showFilter && <div className="filter">
        <button onClick={reset}>Reset Filters</button>
      {filters.map((filter,index) => {
        return <button key={index} onClick={() => remove(filter)} >{filter}</button> 
      })}  </div>}</div>
      
    </div>
  );
};

export default Filters;
