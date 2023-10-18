import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getMusic } from "../../store/music/musicAction";
import { changePage } from "../../store/music/musicSlice";

export default function PaginationRounded() {
  const { currentPage, totalPages } = useSelector((state) => state.musics);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(changePage({ page: value }));
    dispatch(getMusic());
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        sx={{
          backgroundColor: "#33373B5E",
          padding: "5px",
          borderRadius: "20px",
        }}
        onChange={handleChange}
      />
    </Stack>
  );
}
