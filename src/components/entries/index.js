import React, { useEffect } from "react";
import { Table, TableData, TableHeading } from "./styles";

const Entries = () => {
  const FetchData = async () => {
    const url = "http://localhost:4000/charity/index";
    try {
      const response = await fetch(url, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <Table>
      <tr>
        <TableHeading>EIN Number</TableHeading>
        <TableHeading>Full Name</TableHeading>
        <TableHeading>Title</TableHeading>
        <TableHeading>Email Address</TableHeading>
        <TableHeading>Approve Status</TableHeading>
      </tr>
      <tr>
        <TableData>9886123</TableData>
        <TableData>Muhammad Ibtisam</TableData>
        <TableData>React JS Developer</TableData>
        <TableData>m.ibtisam868@gmail.com</TableData>
        <TableData>Yes</TableData>
      </tr>
      <tr>
        <TableData>9886123</TableData>
        <TableData>Muhammad Ibtisam</TableData>
        <TableData>React JS Developer</TableData>
        <TableData>m.ibtisam868@gmail.com</TableData>
        <TableData>Yes</TableData>
      </tr>
      <tr>
        <TableData>9886123</TableData>
        <TableData>Muhammad Ibtisam</TableData>
        <TableData>React JS Developer</TableData>
        <TableData>m.ibtisam868@gmail.com</TableData>
        <TableData>Yes</TableData>
      </tr>
      <tr>
        <TableData>9886123</TableData>
        <TableData>Muhammad Ibtisam</TableData>
        <TableData>React JS Developer</TableData>
        <TableData>m.ibtisam868@gmail.com</TableData>
        <TableData>Yes</TableData>
      </tr>
      <tr>
        <TableData>9886123</TableData>
        <TableData>Muhammad Ibtisam</TableData>
        <TableData>React JS Developer</TableData>
        <TableData>m.ibtisam868@gmail.com</TableData>
        <TableData>Yes</TableData>
      </tr>
      <tr>
        <TableData>9886123</TableData>
        <TableData>Muhammad Ibtisam</TableData>
        <TableData>React JS Developer</TableData>
        <TableData>m.ibtisam868@gmail.com</TableData>
        <TableData>Yes</TableData>
      </tr>
    </Table>
  );
};

export default Entries;
