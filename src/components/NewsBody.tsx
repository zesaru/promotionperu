import Image from "next/image";
import PortableText from "react-portable-text";

type TableRow = { _key: string; header?: boolean; cells: string[] };

const serializers = {
  newsImage: ({ url, alt }: { url: string; alt?: string }) => (
    <figure className="my-8">
      <Image src={url} alt={alt || ""} width={1200} height={800} sizes="(max-width: 768px) 100vw, 896px" className="h-auto max-h-[640px] w-full object-contain" />
    </figure>
  ),
  newsTable: ({ rows }: { rows: TableRow[] }) => (
    <div className="my-8 overflow-x-auto" role="region" aria-label="データ表" tabIndex={0}>
      <table className="w-full border-collapse text-left text-sm">
        <tbody>
          {rows.map((row) => <tr key={row._key}>{row.cells.map((cell, index) => row.header
            ? <th scope="col" key={index} className="border border-gray-300 bg-stone-50 p-3">{cell}</th>
            : <td key={index} className="border border-gray-300 p-3">{cell}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  ),
  sup: ({ children }: { children: React.ReactNode }) => <sup>{children}</sup>,
  sub: ({ children }: { children: React.ReactNode }) => <sub>{children}</sub>,
};

export default function NewsBody({ body }: { body: object[] }) {
  return <PortableText
    content={body}
    serializers={serializers}
    className="space-y-6 font-japanese text-base leading-8 text-gray-700 [&_a]:break-words [&_a]:text-red-700 [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-red-300 [&_blockquote]:pl-5 [&_h2]:pt-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:pt-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h4]:font-semibold [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-2"
  />;
}
