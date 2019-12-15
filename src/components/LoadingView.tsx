import React from 'react';
import LoadingScreen from 'react-loading-screen';
import ImgPreloader from 'react-img-preloader';
import { Loader } from '../types/loader';
import styled from 'styled-components';

type Props = {
  images: string[];
};

const LoadingView = (props: Props) => {
  const { images } = props;
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  return (
    <ImgPreloader
      imgs={images}
      onComplete={() => {
        setIsLoading(false);
      }}
    >
      {({ loaded, total }: Loader) => (
        <Loading>
          <LoadingScreen
            loading={isLoading}
            bgColor="#f1f1f1"
            textColor="#676767"
            text={`${loaded} / ${total}`}
          ></LoadingScreen>
        </Loading>
      )}
    </ImgPreloader>
  );
};

const Loading = styled.div`
  font-size: 150px;
`;

export default LoadingView;
