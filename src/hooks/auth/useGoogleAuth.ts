
import { login_with_google } from "@/lib/api/rest/auth/login";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { useEmailAuth } from "./useEmailAuth";

export const googleClientId = process.env
  .NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

export const useGoogleAuth = () => {
  const { refetchUserProfile } = useEmailAuth();
  const router = useRouter();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse;
      const { data, error } = await login_with_google( { token: access_token});

      if (data && !error) {
        await refetchUserProfile()
        router.push("/dashboard");
      }
    },
    onError: (errorResponse) => {
      console.error("Google login failed", errorResponse);
    },

  });

  return {
    handleGoogleLogin,
  };
};
