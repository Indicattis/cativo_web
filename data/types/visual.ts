
type VisualServiceDTO = {
    id?: number,
    exhibition?: string,
    url: string
    theme: string
    logo: string
}


type VisualDataDTO = {
    id?: number,
    exhibition?: string,
    url?: string
    subimages: any[],
    service_id: number,
}