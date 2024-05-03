//TO

import { axios } from "../axios"
import { teamType } from "../validators/teams"

export const teamsApi = {
  getTeams: async () => {
    const response = await axios.get("api/teams")
    const result = await response.data
    return result
  },
  getTeam: async (teamId: string) => {
    const response = await axios.get(`api/teams/${teamId}`)
    const result = await response.data.team
    return result
  },

  newTeam: async (teamsDetails: teamType) => {
    const response = await axios.post("api/teams", teamsDetails)
    const result = await response.data
    return result
  },
  updateTeam: async (teamsDetails: teamType, teamId: string) => {
    const response = await axios.put(`api/teams/${teamId}`, teamsDetails)
    const result = await response.data
    return result
  },
}
