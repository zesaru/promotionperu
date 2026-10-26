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
  return <PortableText content={body} serializers={serializers} />;
}
