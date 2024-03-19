"use client";

import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-hot-toast";

import { Button } from "@/shared/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";
import { AlertModal } from "@/shared/modals/alert-modal";
import { useDeleteProductItemSize } from "..";

export const CellAction = ({
  data,
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const deleteProductItemSize = useDeleteProductItemSize();

  const onConfirm = async () => {
    try {
      setLoading(true);
      deleteProductItemSize.mutate(data.id);
      toast.success('Product Item Size deleted.');
    } catch (error) {
      toast.error('Error.');
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  const onCopy = (id) => {
    navigator.clipboard.writeText(id);
    toast.success('Product Item Size ID copied to clipboard.');
  }

  return (
    <>
      <AlertModal 
        isOpen={open} 
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => onCopy(data.id)}
          >
            <ContentCopyIcon className="mr-2 h-4 w-4" /> Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => window.location.href = `/admin/product-item-sizes/edit/${data.id}`}
          >
            <EditIcon className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onConfirm()}
          >
            <DeleteIcon className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};