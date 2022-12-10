import usePagination, { UsePaginationProps } from "./usePagination";
import styled from "@emotion/styled/macro";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { AiOutlineEllipsis } from "react-icons/ai";

const Navigation = styled.nav({});
const Button = styled.button<{ selected?: boolean }>((props) => ({
  color: props.selected ? "#fff" : "#000",
  border: 0,
  margin: 0,
  padding: "8px 12px",
  fontSize: "16px",
  fontWeight: "normal",
  backgroundColor: props.selected ? "#36dafa" : "#fff",
  cursor: "pointer",
  borderRadius: "100%",
  width: "48px",
  height: "48px",
  "&:hover": {
    backgroundColor: "#ccc",
    color: "#fff",
  },
  "&:active": {
    opacity: "0.8",
  },
}));
const Item = styled.li({});
const ItemList = styled.ul({
  margin: 0,
  padding: 0,
  display: "flex",
  listStyle: " none",
  ".Item + .Item": {
    marginLeft: "8px",
  },
});

const Pagination: React.FC<UsePaginationProps> = ({
  count,
  page,
  onPageChange,
}) => {
  const getLabel = (item: number | string) => {
    if (typeof item === "number") return item;
    else if (item.indexOf("ellipsis") > -1) return <AiOutlineEllipsis />;
    else if (item.indexOf("prev") > -1) return <GrFormPrevious />;
    else if (item.indexOf("next") > -1) return <GrFormNext />;
  };

  // items : pagination 버튼 항목들
  const { items } = usePagination({
    count,
    page,
    onPageChange,
  });

  return (
    <Navigation>
      <ItemList>
        {items.map(({ key, disabled, selected, onClick, item }) => (
          <Item key={key} className="Item">
            <Button disabled={disabled} selected={selected} onClick={onClick}>
              {getLabel(item)}
            </Button>
          </Item>
        ))}
      </ItemList>
    </Navigation>
  );
};

export default Pagination;
