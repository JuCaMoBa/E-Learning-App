import { useContext } from "react";
import useSWR from "swr";
import { getUserProfile, updateUserProfile } from "../api/userprofile";
import UserContext from "../store/context";
import { types } from "../types/types";

export const useProfile = () => {
  const { dispatch } = useContext(UserContext);
  const path = "users/profile";

  const { data, error, mutate } = useSWR(path, async () => {
    const response = await getUserProfile();
    dispatch({
      type: types.profile,
      payload: {
        user: response.data,
      },
    });
    return response.data;
  });

  async function updateProfile(payload) {
    const response = await updateUserProfile(payload);
    mutate(response.data, true);
  }
  return {
    data,
    error,
    actions: {
      update: updateProfile,
    },
  };
};
