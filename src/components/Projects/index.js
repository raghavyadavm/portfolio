import React from 'react';
import styled from 'styled-components';

const ProjectsPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-columns: 1fr;
  max-width: 100%;
  max-height: 100%;
`;

const ProjectItemsWrapper = styled.div`
  width: 250px;
  padding: 16px;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  margin: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;

const projects = props => {
  return (
    <ProjectsPageWrapper>
      <ProjectItemsWrapper>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </ProjectItemsWrapper>
      <ProjectItemsWrapper>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </ProjectItemsWrapper>
    </ProjectsPageWrapper>
  );
};

export default projects;
