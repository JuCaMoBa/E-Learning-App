import useSWR from "swr";
import { getUserScore } from "../api/userprofile";

export const useScoreByUser = (id) => {
  const { data, error } = useSWR(`/maxscores/${id}`, async () => {
    const response = await getUserScore(id);
    return response.data;
  });

  return {
    usersMaxScores: { data, error },
  };
};
