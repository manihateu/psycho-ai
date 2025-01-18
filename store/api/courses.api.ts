import { TCourse } from "../../screens/HomeScreen/model/course.model";
import { authorizeApiSlice } from "./authorizeApiSlice";

const coursesAPi = authorizeApiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getCourses: builder.query({
        query: () => ({ url: '/courses' }),
      }),
      getCourseById: builder.query<TCourse, any>({
        query: (id: number) => ({ url: `/courses/${id}` })
      }),
      getRecomendations: builder.query({
        query: (limit: number) => ({ url: `/recomendation?limit=${limit}` })
      }),
      likeCourse: builder.mutation({
        query: (courseId: number) => ({ 
          url: `/courses/like/${courseId}`,
          method: "POST"
        })
      }),
      dislikeCourse: builder.mutation({
        query: (courseId: number) => ({ 
          url: `/courses/dislike/${courseId}`,
          method: 'POST',
        }),
        
      })
    })
})

export const {useGetCoursesQuery, useGetCourseByIdQuery, useGetRecomendationsQuery, useDislikeCourseMutation, useLikeCourseMutation} = coursesAPi