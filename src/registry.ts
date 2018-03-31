import Transform from "./transform";
import BoxedStringTransform from "./boxed-transform";
import StringTransform from "./string-transform";

// import Boxed from "./boxed";
// ^---- uncomment this line to make the type resolve

type Deserialized<T extends Transform> = ReturnType<T["deserialize"]>;

export default interface Registry {
  boxed: Deserialized<BoxedStringTransform>;
  // ^---- without the commented-out import, this is `default<string>`; with it,
  //       it properly resolves to `Boxed<string>`.

  string: Deserialized<StringTransform>;
  // works b/c `string` is globally in scope
};
