import { SERVER_URL } from "@/data/config";
import axios from "axios";





export async function getAssessments() {
    try {
        const response = await axios.post(`${SERVER_URL}/assessment-select`);
        return response.data
    } catch (error: any) {
        if (error.response) {
            console.error("Erro ao buscar dados - Status:", error.response.status);
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