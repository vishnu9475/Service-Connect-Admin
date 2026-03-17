// pages/Error403.jsx
import { useNavigate } from "react-router-dom";
import ErrorAlert112 from "../componants_service/arjun/ErrorAlert112";

function S403_Access_Denied () {
  const navigate = useNavigate();

  return (
    <ErrorAlert112
      code="403"
      title="Access Denied"
      description="Sorry, you don't have access to this page"
      text="You can always "
      linkText="Go back to the Previous page"
      onLinkClick={() => navigate(-1)}
    />
  );
}

export default S403_Access_Denied ;