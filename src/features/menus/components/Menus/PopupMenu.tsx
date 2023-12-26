import { Dialog } from "@mui/material";
import { MenuElementProps } from "@/features/menus";

export const PopupMenu = (props: MenuElementProps) => {
  const { isOpen, onOpen, onClose, header, ...other } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          p: 2,
        },
      }}
    >
      {header}
      {other.children}
    </Dialog>
  );
};
