import React, { useMemo } from "react";
import { ListGroup, Badge, Image } from "react-bootstrap";

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import flags from "../../../.common/country.json";

const Languages = ({ openLanguage, createLanguage, languages, books }) => {
  const sortedLanguages = useMemo(() => {
    const covCounts = books.reduce((total, i) => {
      if (i.language) {
        return { ...total, [i.language]: total?.[i.language] + 1 || 1 };
      }
      return total;
    }, {});
    return languages
      .map((i) => {
        return { ...i, count: covCounts?.[i.id] || 0 };
      })
      .sort((a, b) => b.id - a.id);
  }, [languages, books]);

  const flagsById = useMemo(() => {
    const res = {};
    for (let k in flags) {
      const f = flags[k];
      res[f.id] = f;
    }
    return res;
  }, [flags]);

  return (
    <>
      <h3 className="htext p-0 pt-3">Список языков</h3>
      <ListGroup>
        <ListGroup.Item
          onClick={() => createLanguage()}
          className="bg-primary active cursor-pointer"
        >
          <Fa icon={faPlusCircle} /> Добавить язык
        </ListGroup.Item>
        {sortedLanguages.map((item) => (
          <ListGroup.Item
            className="d-flex justify-content-between align-items-start cursor-pointer"
            key={item.id}
            onClick={() => openLanguage(item)}
          >
            <div>
              <Image
                src={flagsById[item?.icon].flag}
                style={{ width: "18px" }}
              />
              {"  "}
              {item.name}
            </div>
            <Badge variant="primary" pill>
              {item.count} книг
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default connect(connector, dispatcher)(Languages);
