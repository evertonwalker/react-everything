import { ChangeEvent, useState } from "react";

export default function FileDurationSize() {
  const [fileSize, setFileSize] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Tamanho do arquivo em bytes
      setFileSize(file.size);

      // Duração do vídeo em segundos
      const video = document.createElement("video");
      video.preload = "metadata";

      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);
        setDuration(video.duration);
      };

      video.src = URL.createObjectURL(file);
    }
  };

  return (
    <div className=" flex justify-center w-screen h-screen flex-col items-center">
      <h2>Select your file</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} className="mb-10" />
      {fileSize !== null && <p>File length: {fileSize} bytes</p>}
      {duration !== null && <p>File duration : {duration} in seconds.</p>}
    </div>
  );
}
