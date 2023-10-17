import axios from "axios";

const getEntriesData = async () => {
  const apiLink = "http://localhost:4000/charity/index";

  var config = {
    method: "get",
    url: apiLink,
  };
  return await axios(config)
    .then(async (response) => {
      return await response.data;
    })
    .catch(async () => {
      return console.log("Error while get entries");
    });
};

const addCharitiesEntry = async (payload) => {
  const apiLink = "http://localhost:4000/charity/addCharity";
  var config = {
    method: "POST",
    url: apiLink,
    data: payload,
  };
  return await axios(config)
    .then(async (response) => {
      return await response.data;
    })
    .catch(async () => {
      return console.log("Error while add entries");
    });
};

const updateCharitiesStatus = async (payload) => {
  const apiLink = "http://localhost:4000/charity/changeApproval";
  var config = {
    method: "PUT",
    url: apiLink,
    data: payload,
  };
  return await axios(config)
    .then(async (response) => {
      return await response.data;
    })
    .catch(async () => {
      return console.log("Error while add entries");
    });
};

export const SharedAPI = {
  getEntriesData,
  addCharitiesEntry,
  updateCharitiesStatus,
};
