const isObjectWithNameProperty = (input: unknown): input is Record<"name", string> => {
  if (typeof input !== "object" || input === null || Array.isArray(input)) return false
  if (!Object.prototype.hasOwnProperty.call(input, "name")) return false
  // @ts-expect-error 上記で name の保持判定済み
  return typeof input.name === "string"
}

const FIRST_RECORD = 0

export const getConfigName = (input: unknown): string => {
  if (Array.isArray(input)) {
    const maybeStringName = input.at(FIRST_RECORD)?.name
    if (typeof maybeStringName === "string") return maybeStringName
  }
  if (isObjectWithNameProperty(input)) return input.name
  throw new Error("Input is incorrect.")
}
