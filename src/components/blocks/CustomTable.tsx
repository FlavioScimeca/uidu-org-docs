import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@ui/Table';
import * as React from 'react';

interface Heading {
  key: string;
  label: string;
}

interface Row {
  [key: string]: React.ReactNode;
}

interface TableProps {
  headings: Heading[];
  rows: Row[];
  className?: string;
}

const CustomTable = React.forwardRef<HTMLTableElement, TableProps>(
  ({ headings, rows, className }, ref) => (
    <div className='relative w-full overflow-auto rounded-lg mb-4 border'>
      <Table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
      >
        <TableHeader className={cn('[&_tr]:border-b')}>
          <TableRow>
            {headings.map((heading) => (
              <TableHead
                key={heading.key}
                className='h-12 px-4 text-left align-middle font-extrabold text-muted-foreground'
              >
                {heading.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className={cn('[&_tr:last-child]:border-0')}>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className={`border-b transition-colors hover:bg-muted/50 `}
            >
              {headings.map((heading, idx) => (
                <TableCell
                  key={heading.key}
                  className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${
                    idx === 0 ? 'text-orange-500' : ''
                  }`}
                >
                  {row[heading.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
);
CustomTable.displayName = 'CustomTable';

export default CustomTable;
