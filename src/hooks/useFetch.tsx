import { useQuery, useQueryClient, useMutation } from "react-query";
import moviesServiceInstance from "@/services/api.service";

export const useMovies = () => {
  return useQuery("movies", () => moviesServiceInstance.getAllMovies());
};
