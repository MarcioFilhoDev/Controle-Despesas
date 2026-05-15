import { authService } from "../services/auth-services";

const useSignOut = () => {
  const signOutUser = async () => {
    await authService.signOut();
  };

  return {
    signOutUser,
  };
};

export default useSignOut;
