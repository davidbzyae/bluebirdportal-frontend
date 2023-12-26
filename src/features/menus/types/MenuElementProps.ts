import { ReactNode } from "react";

export type MenuElementProps = {
  isOpen: boolean;
  onOpen: any;
  onClose: any;
  children?: ReactNode;
  header?: ReactNode;
  anchorEl?: HTMLElement;
};
