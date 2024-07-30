import { ReactNode } from "react"

export type ShowcaseDTO = {
    id: number,
    title?: string,
    text?: string,
    tags: string[]
    url: string
    content: ReactNode
}