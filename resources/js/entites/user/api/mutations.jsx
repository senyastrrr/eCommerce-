import { deleteRequest, post, put } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { _queryKey, _root } from "./config";

export function useCreateUser() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => post(_root, data),
        onSettled: async (_, error) => {
            if (error)
                console.log("error");
            else
                await queryClient.invalidateQueries({ queryKey: [_queryKey] })
        }
    })
}

export function useUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => put(`${_root}/${data.id}`, data),
        onSettled: async (_, error, variables) => {
            if (error)
                console.log(error);
            else {
                await queryClient.invalidateQueries({ queryKey: [_queryKey] });
            }
        }
    })
}

export function useDeleteUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => deleteRequest(`${_root}/${id}`),
        onSettled: async (_, error) => {
            if (error)
                console.log(error);
            else
                await queryClient.invalidateQueries({ queryKey: [_queryKey] })
        }
    })
}

