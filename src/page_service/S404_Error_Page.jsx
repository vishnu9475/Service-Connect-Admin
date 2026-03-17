// pages/Error404.jsx
import { useNavigate } from "react-router-dom";
import ErrorAlert112 from "../componants_service/arjun/ErrorAlert112";

function S404_Error_Page() {
  const navigate = useNavigate();

  return (
    <ErrorAlert112
      code="404"
      title="Ooops..."
      description="The page you are looking for does not exist."
      text="Let's try something different. Go back to the "
      linkText="Home Page"
      onLinkClick={() => navigate("/")}
    />
  );
}

export default S404_Error_Page;