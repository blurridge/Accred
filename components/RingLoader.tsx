import { ColorRing } from "react-loader-spinner";

export const RingLoader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#e94436", "#4385f3", "#fabc05", "#109d58", "#e94436"]}
    />
  );
};

export const ButtonRingLoader = () => {
  return (
    <ColorRing
      visible={true}
      height="30"
      width="40"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#e94436", "#4385f3", "#fabc05", "#109d58", "#e94436"]}
    />
  );
};