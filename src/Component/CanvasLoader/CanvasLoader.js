import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        minHeight: "50px", // Prevents flickering
      }}
    >
      <span className="canvas-loader">
        <p
          style={{
            fontSize: "14px",
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress < 100
            ? `Loading ${progress.toFixed(2)}%`
            : "Loading Complete 🎉"}
        </p>
      </span>
    </Html>
  );
};

export default CanvasLoader;
