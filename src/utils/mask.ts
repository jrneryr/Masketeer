import { maskRegex } from './constants'

export function applyMask(string: string, mask: string) {
    string = string.replace(maskRegex, '')
  
    let result = ''
    let strIndex = 0
  
    for (let i = 0; i < mask.length && string.length; i++) {
      if (mask[i] === 'X') {
        if (string[strIndex]) result += string[strIndex]
        else break
        strIndex++
      } else result += mask[i]
    }
  
    return result
  }