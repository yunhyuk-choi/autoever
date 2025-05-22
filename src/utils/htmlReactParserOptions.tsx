import parse, { HTMLReactParserOptions } from "html-react-parser";

const convertString = (target: unknown): string => {
  return target as string;
};

export const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      console.log(domNode.tagName);
      const children = convertString(domNode.children);
      switch (domNode.tagName) {
        case "p":
          return <p className="mb-2 text-gray-800">{parse(children)}</p>;
        case "strong":
          return <strong className="font-bold text-black">{parse(children)}</strong>;
        case "ul":
          return <ul className="list-disc list-inside">{parse(children)}</ul>;
        default:
          return undefined;
      }
    }
  },
};
