import React, { useMemo } from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";

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
      },{});
      const all = categories.map(i=>{
        return {...i,count: catCounts?.[i.id] || 0}
      }).sort((a, b) => b.parent !== null);
      const catObj = {};

      for (let k in all) {
        const c = all[k];
        if (c.parent == null) {
          if (catObj[c.id]) {
            catObj[c.id] = {...catObj[c.id], ...c}
          } else {
            catObj[c.id] = {...c,childs:[]}
          }
        } else {
          if (catObj[c.parent]) {
            catObj[c.parent].childs.push(c)
          } else {
            catObj[c.parent] = {childs:[c]}
          }
        };
        
      }
      return Object.values(catObj);
    }, [categories,books]
  );

  return (
    <>
      <h3 className="htext p-0 pt-3">Список жанров</h3>
      <ListGroup>
        <ListGroup.Item onClick={()=>createCategory()} className="bg-primary active cursor-pointer" ><Fa icon={faPlusCircle}/> Добавить жанр</ListGroup.Item>
        {sortedCategories.map((item) => (
          <>
            <ListGroup.Item 
              className="d-flex justify-content-between align-items-start cursor-pointer" 
              key={item.id}
              style={{
                borderTopWidth: "1px",
                marginTop: "-1px"
              }}
            >
              <div onClick={() => openCategory(item)} style={{flexGrow:1}}>{item.name || "Без названия"}</div>
              <div className="d-flex">
                <Fa 
                  icon={faPlusCircle} 
                  className="me-2 text-primary" 
                  style={{fontSize:"20px"}}
                  onClick={()=>createCategory(item.id)}
                />
                <Badge variant="primary" pill>{item.count} книг</Badge>
              </div>
            </ListGroup.Item>
            {item?.childs.length ? item.childs.map((child =>
              <ListGroup.Item className="d-flex justify-content-between align-items-start cursor-pointer ms-3" key={child.id}>
                <div onClick={() => openCategory(child)} style={{flexGrow:1}}>{child.name || "Без названия"}</div>
                <Badge variant="primary" pill>{child.count} книг</Badge>
              </ListGroup.Item>  
            )) : null}
          </>
        ))}
      </ListGroup>
    </>
  );
};

export default connect(connector, dispatcher)(Categories);
