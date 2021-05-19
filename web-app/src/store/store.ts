import create from "zustand";
import { combine } from "zustand/middleware";

const useStore = create(
  combine({ fetchedMovies: [], filteredMovies: [] }, (set) => ({
    fetchDatabaseMovies: async (movieUrl: RequestInfo) => {
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

      set(() => ({
        fetchedMovies: transformedMovies,
        filteredMovies: transformedMovies,
      }));
    },
    setFilteredMovies: (searchTerm: string, fetchedMovies: any) => {
      const tempFetchedMoviesList = fetchedMovies;
      const formattedSearchTerm = searchTerm.replace(/\s+/g, "").toLowerCase();

      if (searchTerm !== "") {
        const filteredMoviesList = tempFetchedMoviesList.filter(
          (movie: any) => {
            return movie.title
              .replace(/\s+/g, "")
              .toLowerCase()
              .includes(formattedSearchTerm);
          }
        );

        set(() => ({
          filteredMovies: filteredMoviesList,
        }));
      } else {
        set(() => ({
          filteredMovies: tempFetchedMoviesList,
        }));
      }
    },
  }))
);

export default useStore;
