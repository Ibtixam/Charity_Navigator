import React, { useEffect, useState } from "react";
import { Table, TableData, TableHeading } from "./styles";
import { SharedAPI } from "../../lib/shared.api";

const Entries = () => {
  const [entries, setEntires] = useState();

  useEffect(() => {
    fecthEntrires();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fecthEntrires = async () => {
    const res = await SharedAPI.getEntriesData();
    if (res) {
      setEntires(res);
    }
  };

  const changeStatus = async (data) => {
    await SharedAPI.updateCharitiesStatus(data);
    const res = await SharedAPI.getEntriesData();
    if (res) {
      setEntires(res);
    }
  };

  return (
    <Table>
      <tr>
        <TableHeading>EIN Number</TableHeading>
        <TableHeading>Full Name</TableHeading>
        <TableHeading>Title</TableHeading>
        <TableHeading>Email Address</TableHeading>
        <TableHeading>Approve Status</TableHeading>
      </tr>
      {entries &&
        entries.map((item) => {
          return (
            <tr>
              <TableData>{item.einNumber}</TableData>
              <TableData>{item.fullName}</TableData>
              <TableData>{item.title}</TableData>
              <TableData>{item.email}</TableData>
              <TableData>
                {item.isApproved ? "Yes" : "No"}
                <button
                  onClick={() =>
                    changeStatus({
                      _id: item._id,
                      isApproved: !item.isApproved,
                    })
                  }
                >
                  Change Status
                </button>
              </TableData>
            </tr>
          );
        })}
    </Table>
  );
};

export default Entries;
