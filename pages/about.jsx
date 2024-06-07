const AboutPage = () => {
  return (
    <>
      <h3>About Snigdha OS</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
