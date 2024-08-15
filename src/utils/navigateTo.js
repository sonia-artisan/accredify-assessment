import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (link) => {
    navigate(link);
  }

  return navigateTo;
};
