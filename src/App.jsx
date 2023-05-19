import Card from "./components/card/Card";

function App() {
  return (
    <section className="app">
      <Card
        mainImageSrc="https://placehold.co/1000x400"
        mainImageAlt="Some Image"
        mainImageoading="lazy"
        mainImageWidth="1000"
        mainImageHeight="400"
        title="Card Title"
        footerImageSrc="https://placehold.co/50x50"
        footerImageAlt="Some Image"
        footerImageLoading="lazy"
        footerImageWidth="50"
        footerImageHeight="50"
        body="Lorem ipsum dolor sit ame"
        eth="0.004"
        numberOfDaysLeft="4"
        author="John Doe"
      />
    </section>
  );
}

export default App;
