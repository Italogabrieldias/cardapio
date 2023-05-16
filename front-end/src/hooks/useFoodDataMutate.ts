import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8090';

const postDate = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food')
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postDate,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])

        }

    })
    return mutate;

}