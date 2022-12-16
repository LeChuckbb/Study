import styled from "@emotion/styled";

import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingMovieSection from "../features/movie/nowPlaying";
import PopularMovieSection from "../features/movie/popular";
import TopRateMovieSection from "../features/movie/topRate";
import UpcomingMovieSection from "../features/movie/upcoming";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <Container>
          <LatestMovieSection />
          <NowPlayingMovieSection />
          <PopularMovieSection />
          <TopRateMovieSection />
          <UpcomingMovieSection />
        </Container>
      </Main>
      <Footer />
    </div>
  );
};

export default MainPage;
