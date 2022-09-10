import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Viewers from './Viewers';

function Home(props) {
    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    :after {
        background: url('/images/home-background.png') center center/cover
            no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;
