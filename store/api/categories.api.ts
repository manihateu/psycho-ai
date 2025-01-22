import { authorizeApiSlice } from "./authorizeApiSlice";

const categoriesApi = authorizeApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateCategories: builder.mutation({
            query: (categoriesId: number[]) => ({
                url: '/categories/update-assign',
                method: 'POST',
                body: {
                    categoryIds: categoriesId
                }
            })
        })
    })
})
export const {useUpdateCategoriesMutation} = categoriesApi