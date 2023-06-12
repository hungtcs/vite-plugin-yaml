
interface YamlDefaultObject {

}

declare module '*.yaml' {
  const value: YamlDefaultObject;
  export default value;
}

declare module '*.yml' {
  const value: YamlDefaultObject;
  export default value;
}
