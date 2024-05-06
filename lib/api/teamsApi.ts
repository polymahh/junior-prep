//TO

import { axios } from "../axios"
import { newCommentType } from "../validators/comment"
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

    newTeamComment: async (teamId: string, commentDetails: newCommentType) => {
        const response = await axios.post(`api/teams/${teamId}/comment`, commentDetails)
        return await response.data
    },
    getTeamComments: async (teamId: string) => {
        const response = await axios.get(`api/teams/${teamId}/comment`)
        return await response.data
    },
    updateTeamComment: async (teamId: string, commentId: string, commentDetails: newCommentType) => {
        const response = await axios.put(`api/teams/${teamId}/comment/${commentId}`, commentDetails)
        return await response.data
    },
    deleteTeamComment: async (teamId: string, commentId: string) => {
        const response = await axios.delete(`api/teams/${teamId}/comment/${commentId}`)
        return await response.data
    },
}
