import React, { useMemo } from "react";
import { ListGroup, Badge } from "react-bootstrap";

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Categories = ({ openCategory, createCategory, categories, books }) => {
  
  const sortedCategories = useMemo(() => {
    const catCounts = books.reduce((total,i)=>{
      if (i.category) {
        return {...total,[i.category]:(total?.[i.category] + 1 || 1)}
      }
      return total;
    },{})
    return categories.map(i=>{
      return {...i,count: catCounts?.[i.id] || 0}
    }).sort((a, b) => b.id - a.id)}, [categories,books]
  );

  return (
    <>
      <h3 className="htext p-0 pt-3">Список жанров</h3>
      <ListGroup>
        <ListGroup.Item onClick={()=>createCategory()} className="bg-primary active cursor-pointer" ><Fa icon={faPlusCircle}/> Добавить жанр</ListGroup.Item>
        {sortedCategories.map((item) => (
          <ListGroup.Item className="d-flex justify-content-between align-items-start cursor-pointer" key={item.id} onClick={() => openCategory(item)}>
            {item.name}
            <Badge variant="primary" pill>{item.count} книг</Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default connect(connector, dispatcher)(Categories);
