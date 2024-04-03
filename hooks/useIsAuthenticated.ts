import isAuthenticated from "@/middleware"
import { useQuery } from "@tanstack/react-query"

import { authApi } from "@/lib/api/authApi"

const useIsAuthenticated = () => {
  const { isLoading, isError, isSuccess } = useQuery({
    queryKey: ["isAuthenticated"],
    queryFn: () => authApi.refreshToken,
  })
  return { isLoading, isError, isSuccess }
}

export default useIsAuthenticated
