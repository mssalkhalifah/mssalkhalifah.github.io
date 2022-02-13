interface GridTableProps {
  row?: number
  content?: Map<string, React.ReactNode | string>
}

const GridTable = ({ content }: GridTableProps) => {
  return (
    <div>
      <table>
        <tbody>
          {Array.from(content ? content : new Map()).map(
            ([key, value], i = 0) => (
              <tr className="" key={i++}>
                <td className=" pr-8 font-bold underline decoration-2">
                  {key}
                </td>
                <td className=" py-2">{value}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default GridTable
