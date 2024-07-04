import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Our Application</h1>
      <p className="mb-4">Explore the features of our app, including the Elevenlabs Text to Speech widget.</p>
      <Button as={Link} to="/elevenlabs-widget" variant="outline">
        Go to Elevenlabs Widget
      </Button>
    </div>
  );
};

export default Index;
