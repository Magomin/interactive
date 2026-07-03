import { useAtomValue, useAtom } from "jotai";
import { isProjectModalVisibleAtom, chosenProjectDataAtom } from "../store";

export default function ProjectModal() {
  const projectData = useAtomValue(chosenProjectDataAtom);
  const [isVisible, setIsVisible] = useAtom(isProjectModalVisibleAtom);

  if (!isVisible) return null;

  // Respect Vite base path, same as how configs are fetched ("./...").
  const videoSrc = projectData.video
    ? `${import.meta.env.BASE_URL}${projectData.video.replace(/^\.\//, "")}`
    : null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>{projectData.title}</h1>
        {videoSrc && (
          <video
            className="modal-video"
            src={videoSrc}
            controls
            autoPlay
            muted
            loop
          />
        )}
        {projectData.description && <p>{projectData.description}</p>}
        <div className="modal-btn-container">
          {projectData.link && (
            <button
              className={"modal-btn"}
              onClick={() => {
                window.open(projectData.link, "_blank");
              }}
            >
              View project
            </button>
          )}
          <button
            className={"modal-btn"}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
