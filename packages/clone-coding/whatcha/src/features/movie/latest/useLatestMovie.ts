import { useQuery } from "react-query";
import { latestApi } from "../../../apis/movieApi";
import { MovieDetail } from "../../../types";
import { AxiosError, AxiosResponse } from "axios";

const useLatestMovie = () => {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    "latestMovie",
    latestApi
  );
};

export default useLatestMovie;
