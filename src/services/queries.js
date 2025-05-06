import {
    useQuery,
    useQueries,
    useQueryClient,
  } from "@tanstack/react-query";
  import { getRandomQuote } from "./api";


export const useRandomQuote = () => {
    const queryClient = useQueryClient();

    return useQuery({
        queryKey: ['randomquote'],
        queryFn: getRandomQuote,
        refetchOnWindowFocus: false,
    }, queryClient);
}