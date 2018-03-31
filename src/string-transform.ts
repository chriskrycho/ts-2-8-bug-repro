import Transform from "./transform";

export default class StringTransform extends Transform {
  deserialize(value?: any): string {
    return value && typeof value === "string" ? value : "";
  }
}
