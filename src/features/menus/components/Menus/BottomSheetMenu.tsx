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
          const isBackdrop = e.target.getAttribute("data-rsbs-backdrop");
          if (isBackdrop) {
            onClose();
            return e.stopPropagation();
          }

          const isCloseOnClickOption =
            e.target.getAttribute("id") == "closeOnClickOption" ||
            e.target.closest("#closeOnClickOption");

          if (isCloseOnClickOption) return onClose();
        }
      }}
      ref={sheetRef}
      open={isOpen}
      onDismiss={() => {
        setTimeout(onClose, 100);
      }}
      header={header}
    >
      {other.children}
    </BottomSheet>
  );
};
