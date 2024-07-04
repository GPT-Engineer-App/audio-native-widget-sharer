import React from 'react';

const ElevenlabsWidget = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div
        id="elevenlabs-audionative-widget"
        data-height="90"
        data-width="100%"
        data-frameborder="no"
        data-scrolling="no"
        data-publicuserid="854370cc792871db8c3d5d6ee35f7dbe41b01c23a77a45fcce6b0b3a48ceb045"
        data-playerurl="https://elevenlabs.io/player/index.html"
        data-projectid="hSEFTqMxPyZfBc2uw8WZ"
      >
        Loading the <a href="https://elevenlabs.io/text-to-speech" target="_blank" rel="noopener">Elevenlabs Text to Speech</a> AudioNative Player...
      </div>
      <script src="https://elevenlabs.io/player/audioNativeHelper.js" type="text/javascript"></script>
    </div>
  );
};

export default ElevenlabsWidget;