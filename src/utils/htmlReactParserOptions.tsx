import parse, { HTMLReactParserOptions, domToReact, Element } from "html-react-parser";

export const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      const children = domToReact(domNode.children, options); // ✅ 핵심 변경
      switch (domNode.tagName) {
        case "p":
          return <p className="mb-2 text-gray-800">{children}</p>;
        case "strong":
          return <strong className="font-bold text-black">{children}</strong>;
        case "ul":
          return <ul className="list-disc list-inside">{children}</ul>;
        case "table":
          return (
            <div className="overflow-auto my-4">
              <table className="table-auto border border-collapse border-gray-400 w-full text-sm">
                {children}
              </table>
            </div>
          );
        case "thead":
          return <thead className="bg-gray-100">{children}</thead>;
        case "tbody":
          return <tbody>{children}</tbody>;
        case "tr":
          return <tr className="border-b border-gray-300">{children}</tr>;
        case "td":
          return <td className="border px-2 py-1">{children}</td>;
        case "th":
          return <th className="border px-2 py-1 font-semibold">{children}</th>;
        default:
          return undefined;
      }
    }
  },
};
