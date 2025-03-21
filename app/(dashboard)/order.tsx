import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { SelectOrder } from '@/lib/db';

export function Order({ order }: { order: SelectOrder }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell>{order.customerEmail}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {order.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{`$${order.total}`}</TableCell>
      <TableCell className="hidden md:table-cell">
        {order.createdAt.toLocaleDateString("en-US")}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Update Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
} 