// Default imports
import axios from 'axios' // HTTP Client (Responsável pelas requisições no back-end)

// URL Base
const BASE_URL = 'http://localhost:3003/api'

// Action Creator
export function getSummary() {
    const request = axios.get(`${ BASE_URL }/billingCycles/summary`)

    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}
