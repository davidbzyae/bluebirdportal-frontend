import { BottomSheetMenu, ContextMenu, PopupMenu } from "..";

import { theme } from "@/styles";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

type MenuVariants = "popup" | "context" | "sheet";

type UseMenuOptions = {
  variant: MenuVariants;
};

export const useMenu = (props?: UseMenuOptions) => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const isOpen = !!anchorEl;

  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => setAnchorEl(undefined);

  const Element =
    props?.variant === "context"
      ? ContextMenu
      : props?.variant === "popup"
      ? PopupMenu
      : props?.variant === "sheet"
      ? BottomSheetMenu
      : xs
      ? BottomSheetMenu
      : ContextMenu;

  const elementProps = { isOpen, anchorEl, onOpen, onClose };

  return {
    Element,
    elementProps,
    isOpen,
    open: onOpen,
    close: onClose,
  };
};
