import styled from "@emotion/styled";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Base = styled.div({
  width: "500px",
});

const Container = styled.div({
  position: "relative",
});

const ArrowButton = styled.button<{ pos: "left" | "right" }>(
  {
    position: "absolute",
    top: "50%",
    zIndex: 1,
    padding: "8px 12px",
    fontSize: "48px",
    fontWeight: "bold",
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    margin: "0",
    cursor: "pointer",
  },
  (props) => ({
    left: props.pos === "left" ? 0 : "none",
    right: props.pos === "right" ? 0 : "none",
  })
);

const CarouselList = styled.ul({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  overflow: "hidden",
});

const CarouselListItem = styled.li<{ activeIndex: number }>((props) => ({
  width: "100%",
  flex: "1 0 100%",
  transition: "200ms ease",
  transform: `translateX(-${props.activeIndex * 100}%)`,
  "& > img": {
    width: "100%",
    height: "fit-content",
  },
}));

const NavButton = styled.button<{ isActive?: boolean }>((props) => ({
  width: 4,
  height: 4,
  backgroundColor: "#000",
  opacity: props.isActive ? "0.3" : "0.1",
}));

const NavItem = styled.li({
  display: "inline-block",
});

const Nav = styled.ul({
  listStyle: "none",
  padding: "0",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  ".NavItem + .NavItem": {
    marginLeft: "4px",
  },
});

const banners = [
  "https://picsum.photos/300",
  "https://picsum.photos/300",
  "https://picsum.photos/300",
  "https://picsum.photos/300",
  "https://picsum.photos/300",
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // 맨 마지막에서 Next를 눌렀을 경우 다시 처음으로 이동시키기 위함
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goTo = (idx: number) => setActiveIndex(idx);
  const handleMouseEnter = () => setIsFocused(true);
  const handleMouseLeave = () => setIsFocused(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (!isFocused) {
      // intervalId = setInterval(handleNext, 3000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isFocused]);

  return (
    <Base onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Container>
        <ArrowButton pos="left" onClick={handlePrev}>
          <RiArrowDropLeftLine />
        </ArrowButton>

        <CarouselList>
          {banners.map((banner: string, idx: number) => (
            <CarouselListItem activeIndex={activeIndex} key={idx}>
              <img src={banner} />
            </CarouselListItem>
          ))}
        </CarouselList>

        <ArrowButton pos="right" onClick={handleNext}>
          <RiArrowDropRightLine />
        </ArrowButton>
      </Container>

      <Nav>
        {Array.from({ length: banners.length }).map((_, idx) => (
          <NavItem key={idx} onClick={() => goTo(idx)} className="NavItem">
            <NavButton isActive={activeIndex === idx} />
          </NavItem>
        ))}
      </Nav>
    </Base>
  );
};

export default Carousel;
