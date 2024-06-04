import React from 'react'
import "./CourseList.css"
function CourseList() {
  return (
    <>
      <section className="list">
        <button className="list-btn-1">
          Web Development <p>13.3M+ learners</p>
        </button>
        <button className="list-btn-2">
          JavaScript <p>16.6M+ learners</p>
        </button>
        <button className="list-btn-2">
          React JS <p>7M+ learners</p>
        </button>
        <button className="list-btn-2">
          Angular <p>4M+ learners</p>
        </button>
        <button className="list-btn-2">
          Java <p>15.5M+ learners</p>
        </button>
        <button className="list-btn-3">
          Android Development <p>8M+ learners</p>
        </button>
        <button className="list-btn-3">
          iOS Development <p>4M+ learners</p>
        </button>
        <button className="list-btn-2">
          CSS <p>9M+ learners</p>
        </button>
      </section>
    </>
  );
}

export default CourseList
