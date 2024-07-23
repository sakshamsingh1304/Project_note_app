import React from "react";

import styles from "./note.module.scss";
import { formatDate } from "../../../utils/formatDate";
import { useState } from 'react';


function Note(props) {
    const {text, date, color} = props;
    const [noteText, setNoteText] = useState("");
    const [expand, setExpand] = useState(false);
  return (
    <article className={styles.container} style={{backgroundColor: color}}>
      <div className={styles.content}>
      {/* <div className={`${styles.content}`}> */}
      {
        !text.length? (
        <textarea 
          value={noteText}
          className={styles.textarea}
          onChange={(e) => setNoteText(e.target.value)}
        />
        ) : (
        <>
        <p className={expand? styles.expanded: ""}>{text}</p>
      {text.length>154 ?(
        <button onClick={()=> setExpand((prev) => !prev)}>
          read {expand ? "less" : "more"}
        </button>
      ) : null}
        </>
      )}
      </div>
      <footer className={styles.footer}>{formatDate(date)}</footer>
    </article>
    
  );
}

export default Note;
