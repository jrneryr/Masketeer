/**
 * The mask must always be entered using the 'X' character to indicate the numbers that will be replaced.
 */

export interface IInputMaskWrapper extends HTMLInputElement {
    mask: string
  }