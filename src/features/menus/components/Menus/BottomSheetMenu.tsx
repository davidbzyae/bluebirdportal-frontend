import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";

import { MenuElementProps } from "@/features/menus";
import { useRef } from "react";

export const BottomSheetMenu = (props: MenuElementProps) => {
  const sheetRef = useRef<BottomSheetRef>(null);
  const { isOpen, onOpen, onClose, header, ...other } = props;

  return (
    <BottomSheet
      onClick={(e) => {
        if (e.target instanceof Element) {
          const isCloseOnClickOption =
            e.target.getAttribute("id") == "closeOnClickOption" ||
            e.target.closest("#closeOnClickOption");

          if (isCloseOnClickOption) return onClose();
        }
      }}
      ref={sheetRef}
      open={isOpen}
      onDismiss={onClose}
      header={header}
    >
      {other.children}
    </BottomSheet>
  );
};
