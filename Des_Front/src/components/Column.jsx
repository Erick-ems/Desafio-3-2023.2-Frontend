import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import "./scroll.css"



const Container = styled.div`
  background-color: #f4f5f7;
  border-radius: 2.5px;
  width: 300px;
  height: 475px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;


const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;

`;

const TaskList = styled.div`
  padding: 3px;
  trasition: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

export default function Column({title, tasks, id}){

  return (
    <Container className="column">
      <Title style={{
        backgroundColor: 'lightblue',
        position: 'stick',  // I assume you meant 'sticky' instead of 'stick'
      }}>
        {title}
      </Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {/* {Provide Your tasks} */}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}