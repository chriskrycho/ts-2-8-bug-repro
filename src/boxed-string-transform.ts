import Boxed from "./boxed";
import Transform from "./transform";

const isString = (v: any): v is string => typeof v === "string";

export default class BoxedStringTransform extends Transform {
  deserialize(value?: string): Boxed<string> {
    return value ? new Boxed(value) : new Boxed("");
  }
}
