import { useEffect, useState } from "react"

export function useLocalStorage(
  key: string,
  initialValue: any
) {
  const [value, setValue] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const jsonValue = localStorage.getItem(key)
      if (jsonValue != null) return JSON.parse(jsonValue)
    }

    if (typeof initialValue === "function") {
      return initialValue()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
