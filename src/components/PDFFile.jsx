import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    padding: 35,
  },
  firstSlide: {
    padding: 100,
    margin: "auto",
  },
  title: {
    display: "flex",
    fontSize: 30,
    textAlign: "center",
    justifyContent: "space-between",
  },
  slide: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    width: "300px",
    height: "500px",
    justifyContent: "center",
  },
  slideBody: {
    paddingTop: 45,
    width: "450px",
    marginHorizontal: 50,
    display: "flex",
    justifyContent: "center",
  },
  slideHeader: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: "center",
  },
  slideContent: {},
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = ({ data }) => {
  const { title, slides = [] } = data;
  const pageColors = ["#f6d186", "#f67280", "#c06c84"];
  return (
    <Document>
      <Page size={"A4"} orientation="landscape" style={styles.firstSlide}>
        <Text style={styles.title} fixed>
          {title}
        </Text>
      </Page>
      {slides.map((slide, index) => {
        return (
          <Page
            orientation="landscape"
            key={index}
            style={[
              styles.body,
              {
                ...styles.body,
                backgroundColor: pageColors[index % pageColors.length],
                opacity: 0.8,
              },
            ]}
          >
            <View style={styles.slide}>
              <View style={styles.slideBody}>
                <Text wrap style={styles.slideHeader} fixed>
                  {slide.title}
                </Text>
                <View style={styles.slideContent}>
                  {slide.content.map((item) => (
                    <Text wrap key={item} style={styles.text}>
                      {item}
                    </Text>
                  ))}
                </View>
              </View>
              <View style={styles.image}>
                <Image src={slide.url} />
              </View>
            </View>

            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
            />
          </Page>
        );
      })}
    </Document>
  );
};

export default React.memo(PDFFile);
