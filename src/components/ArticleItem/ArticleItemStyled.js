import styled from "styled-components";

export const Item = styled.li`
  width: 500px;
  background-color: #ffffffff;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

export const Link = styled.a`
  font-size: 20px;
  color: #223429ff;

  &:hover {
    text-decoration-line: underline;
  }
`;
