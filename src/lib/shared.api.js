import axios from "axios";

const apiLinkUrl = process.env.BACK_END_API_URL || 'https://f85e-2400-adc5-42b-1700-90e0-b3b1-484e-addd.ngrok-free.app';

const getEntriesData = async () => {
  const apiLink = `${apiLinkUrl}/charity/index`;

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
  const apiLink = `${apiLinkUrl}/charity/addCharity`;
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
  const apiLink = `${apiLinkUrl}/charity/changeApproval`;
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
