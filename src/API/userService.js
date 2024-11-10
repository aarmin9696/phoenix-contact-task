// import axios from 'axios';

// const API_URL = 'https://example.com/api/users';

// Fetch users
export const fetchUsers = async () => {
  //   const response = await axios.get(API_URL);
  //   return response.data;
  return {
    data: {
      memberCount: 3,
      members: [
        {
          user: {
            created: "2022-03-14T12:29:27.446531Z",
            email: "hermann@supercomp.com",
            firstName: "hermann",
            lastName: "mustermann",
            userId: "e0250d1c-773e-4f6c-a64d-11587488e222",
          },
        },
        {
          user: {
            created: "2022-03-14T10:49:55.143462Z",
            email: "klaus@supercomp.com",
            firstName: "klaus",
            lastName: "mustermann",
            userId: "c9a228e9-47dd-4082-bdca-4de48d0c0916",
          },
        },
        {
          user: {
            created: "2022-03-14T10:49:55.143462Z",
            email: "fritz@supercomp.com",
            firstName: "fritz",
            lastName: "mustermann",
            userId: "c9a228e9-47dd-4082-bdca-4de48d0c0816",
          },
        },
      ],
    },
  };
};

// Update user
export const updateUser = async (userId, updatedData) => {
  return {
    success: true,
    data: {
      userId,
      ...updatedData,
    },
  };
};
