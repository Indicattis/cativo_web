
type WebServiceDTO = {
    id?: number,
    exhibition?: string,
    url: string
    theme: string
    logo: string
}


type WebDataDTO = {
    id?: number,
    exhibition?: string,
    url?: string
    theme: string
    subimages: any[],
    service_id: number,
}