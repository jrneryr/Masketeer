import { useState, useEffect, ChangeEvent } from "react";
import { IInputMaskWrapper } from "./types";
import { unmask } from "./utils/unmask";
import { applyMask } from "./utils/mask";

export const MasketeerWrapper = ({
  mask,
  value,
  onChange,
  ...rest
}: IInputMaskWrapper) => {
  const [state, setState] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>, input: string) => {
    if (input.length > mask.length) return
    setState(input)
    onChange &&
      onChange({
        ...e,
        target: {
          ...e.target,
          value: unmask(input)
        }
      })
  }

  useEffect(() => {
    if (value) setState(applyMask(String(value), mask))
  }, [value])

  return (
    <input
      {...rest}
      value={state}
      onChange={(e) => handleChange(e, e.target.value)}
    />
  )
}

export default MasketeerWrapper;
