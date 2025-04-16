import { unmaskRegex } from "./constants"

export function unmask(string: string): string {
    return string.replace(unmaskRegex, '')
}