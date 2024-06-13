//TO

import { axios } from "../axios"
import { newCommentType } from "../validators/comment"
import { filterType, teamType } from "../validators/teams"

interface filterTypeWithKey extends filterType {
    [key: string]: string | undefined
}

export const teamsApi = {
    getTeams: async ({ search, statusSort, dateSort, limit, length }: filterType) => {
        let queryParams = new URLSearchParams()
        const params: filterTypeWithKey = {
            search,
            statusSort,
            dateSort,
            limit,
            length,
        }
        for (const key in params) {
            if (params[key]) {
                queryParams.append(key, params[key] as string)
            }
        }
        const result = await axios.get(`api/teams?${queryParams.toString()}`)
        return result.data.teams
    },

    getTeam: async (teamId: string) => {
        const response = await axios.get(`api/teams/${teamId}`)
        return response.data.team
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

    deleteTeam: async (teamId: string) => {
        const response = await axios.delete(`api/teams/${teamId}`)
        return response.data
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
