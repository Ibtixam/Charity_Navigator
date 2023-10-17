import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  margin: 50px auto;
  border: 1px solid #001936;
  border-radius: 6px;
  padding: 20px 0 0;
  color: #001936;
  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const TableData = styled.td`
  text-align: center;
  font-size: 17px;
  padding: 15px 0;
`;

export const TableHeading = styled.th`
  text-align: center;
  padding: 0 10px 10px;
`;
