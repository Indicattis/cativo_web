"use server"

import axios from "axios"

export async function fetchAssessments(data: FormData) {
    try {
        const response = await axios.post("http://localhost:3001/assessments")

        return response.data
    } catch (error: any) {
        if (error.response) {
            console.error("Erro ao buscar avaliações:", error.response.status);
            console.error("Mensagem de erro:", error.response.data);
            throw new Error(error.response.data.error);
        } else if (error.request) {
            console.error("Não foi recebida resposta do servidor.");
            throw new Error("Não foi possível conectar ao servidor.");
        } else {
            console.error("Erro ao fazer a requisição:", error.message);
            throw new Error("Erro durante a requisição.");
        }
    }
}