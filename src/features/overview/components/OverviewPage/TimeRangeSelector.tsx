import { MenuOptionsList, useMenu } from "@/features/menus";

import { Button } from "@mui/material";
import { FontIcon } from "@/components";
import { useAppNavigate } from "@/hooks";
import { useParams } from "react-router-dom";

const timeRangeOptions = [
  {
    title: "Period to date",
    id: "ptd",
  },
  {
    title: "Week to date",
    id: "wtd",
  },
  {
    title: "Year to date",
    id: "ytd",
  },
];

export const TimeRangeSelector = () => {
  const timeRangeMenu = useMenu();

  const { timeRangeId = "ptd" } = useParams();

  const navigate = useAppNavigate();

  const handleTimeRangeClick = (id: string) => navigate(`/${id}`);

  return (
    <>
      <timeRangeMenu.Element {...timeRangeMenu.elementProps}>
        <MenuOptionsList
          items={timeRangeOptions.map((range) => ({
            title: range.title,
            onClick: () => handleTimeRangeClick(range.id),
            icon: timeRangeId == range.id ? "fi fi-rr-check" : undefined,
          }))}
        />
      </timeRangeMenu.Element>
      <Button
        color="primary"
        variant="translucent"
        sx={{
          fontSize: 16,
        }}
        onClick={timeRangeMenu.open}
      >
        {timeRangeId}
        <FontIcon icon="fi-sr-sort-down" />
      </Button>
    </>
  );
};
