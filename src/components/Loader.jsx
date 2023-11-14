import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-2 border-blue border-t-blue-500 border-opacity-20" />
      </div>
    </Html>
  );
};

export default Loader;
