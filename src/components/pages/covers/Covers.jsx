import React, { useMemo } from "react";
import { ListGroup, Badge } from "react-bootstrap";

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Covers = ({ openCover, createCover, covers, books }) => {
  
  const sortedCovers = useMemo(() => {
    const covCounts = books.reduce((total,i)=>{
      if (i.cover) {
        return {...total,[i.cover]:(total?.[i.cover] + 1 || 1)}
      }
      return total;
    },{})
    return covers.map(i=>{
      return {...i,count: covCounts?.[i.id] || 0}
    }).sort((a, b) => b.id - a.id)}, [covers,books]
  );

  return (
    <>
      <h3 className="htext p-0 pt-3">Список переплётов</h3>
      <ListGroup>
        <ListGroup.Item onClick={()=>createCover()} className="bg-primary active cursor-pointer" ><Fa icon={faPlusCircle}/> Добавить переплёт</ListGroup.Item>
        {sortedCovers.map((item) => (
          <ListGroup.Item className="d-flex justify-content-between align-items-start cursor-pointer" key={item.id} onClick={() => openCover(item)}>
            {item.name || "Без названия"}
            <Badge variant="primary" pill>{item.count} книг</Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default connect(connector, dispatcher)(Covers);
