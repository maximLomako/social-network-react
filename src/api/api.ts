import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": 'a1f03d59-d60d-46dd-a3cd-3d7ba0716339'
  }
});

export const usersAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  unFollowUser: (id: number) => {
    return instance.delete(`follow/${id}`)
      .then(response => response.data);
  },
  followUser: (id: number) => {
    return instance.post(`follow/${id}`)
      .then(response => response.data);
  },
  getUserProfile: (userId: string) => {
    return instance.get(`profile/${userId}`)
      .then(response => response.data);
  }

}