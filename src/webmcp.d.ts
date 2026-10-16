// WebMCP declarative attributes (https://github.com/webmachinelearning/webmcp): a form with a
// toolname is a tool for a browser agent. Astro's HTML types do not know them yet.
declare namespace astroHTML.JSX {
  interface FormHTMLAttributes {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: boolean;
  }
  interface InputHTMLAttributes {
    toolparamdescription?: string;
  }
  interface TextareaHTMLAttributes {
    toolparamdescription?: string;
  }
  interface SelectHTMLAttributes {
    toolparamdescription?: string;
  }
}
