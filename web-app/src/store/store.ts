import create from "zustand";
import { combine } from "zustand/middleware";

const useStore = create(
  combine({ movies: [] }, (set) => ({
    fetchMovies: async (movieUrl: RequestInfo) => {
      const response = await fetch(movieUrl);

      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }

      const data = await response.json();
      
      const transformedMovies = data.map(
        (movieData: {
          id: number;
          name: string;
          year: number;
          description: string;
        }) => {
          return {
            id: movieData.id,
            title: movieData.name,
            year: movieData.year,
            description: movieData.description,
          };
        }
      );

      set(() => ({ movies: transformedMovies }));
    },
  }))
);

export default useStore;
