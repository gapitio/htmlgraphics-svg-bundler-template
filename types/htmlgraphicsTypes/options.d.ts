type EditorCodeType = string | undefined;

export interface OptionsInterface {
  add100Percentage: boolean;
  centerAlignContent: boolean;
  SVGBaseFix: boolean;
  css: EditorCodeType;
  html: EditorCodeType;
  onRender: EditorCodeType;
  onInit: EditorCodeType;
  customProperties: EditorCodeType;
}
