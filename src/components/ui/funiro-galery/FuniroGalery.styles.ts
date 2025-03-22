import styled from "@emotion/styled";

export const Container = styled.div({
  textAlign: "center",
  padding: "40px 20px",
});

export const Title = styled.h2({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "5px",
});

export const Hashtag = styled.h3({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "30px",
});

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gridAutoRows: "200px",
  gap: "10px",
  maxWidth: "1000px",
  margin: "0 auto",
});

export const ImageWrapper = styled.div<{ rowSpan?: number }>(({ rowSpan }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: "10px",
  gridRow: `span ${rowSpan || 1}`,
}));

export const Image = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
