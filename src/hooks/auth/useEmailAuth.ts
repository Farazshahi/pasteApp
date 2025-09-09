// hooks/useAuth.ts - Simplified with token-based approach
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '@/store/auth'
import { login_with_email } from '@/lib/api/rest/auth/login'
import { signup_with_email } from '@/lib/api/rest/auth/signup'
import { useUserStore } from '@/store/user'
import { useEffect } from 'react'
import { profile_me } from '@/lib/api/rest/user/profile/me'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { verify_email } from '@/lib/api/rest/auth/verify'
import { reset_password } from '@/lib/api/rest/auth/reset'
import { verify_reset } from '@/lib/api/rest/auth/verify/reset'

export const useEmailAuth = () => {
    const { setToken, setMfa, logout: storeLogout, isAuthenticated, token } = useAuthStore()
    const { setUser, clearUser } = useUserStore()
    const router = useRouter();

    /// Get current user - separate from auth state
    const {
        data: user,
        isLoading: isLoadingUser,
        error: userError,
        refetch: refetchUserProfile
    } = useQuery({
        queryKey: ['user_profile'],
        queryFn: profile_me,
        enabled: isAuthenticated && !!token,
        staleTime: 2 * 60 * 1000,
        select(data) {
            return data.data
        },
    })

    /// Update user store when user data changes
    useEffect(() => {
        if (user) {
            setUser(user)
        }
    }, [user, setUser])

    /// Login mutation
    const loginMutation = useMutation({
        mutationFn: login_with_email,
        onSuccess: (result) => {
            if (result && result?.data && result?.data?.cookies) {
                if (
                    result.msg &&
                    result.msg.startsWith("User email not verified")
                ) {
                    router.push("/confirm?type=1");

                } else if (result.msg && result.msg.includes("2FA required")) {
                    setMfa({
                        is2FAVerificationStep: true,
                        type: result.twoFactor.type,
                        authId: result.id
                    })
                } else {
                    setToken(result.data.cookies.accessToken)
                    refetchUserProfile()
                    toast.success("Login successful!");
                    router.push("/dashboard");
                }
                if (result && result?.success === false) {
                    toast.info(`${result.msg}`);
                }
            }
        },
        onError: (error) => {
            toast.error(`Login failed. Please try again.`, {
                description: error.message
            });
        }

    })

    /// Signup mutation
    const signupMutation = useMutation({
        mutationFn: signup_with_email,
        onSuccess: (result) => {
            if (result && result?.data && result?.data?.cookies) {
                if (
                    process.env.NEXT_PUBLIC_VERIFY_EMAIL_STATUS === 'true'
                ) {
                    router.push("/confirm?type=0");

                } else {
                    setToken(result.data.cookies.accessToken)
                    refetchUserProfile()
                    toast.success("Signup successful!");
                    router.push("/")
                }
            }
            if (result && result?.success === false) {
                toast.info(`${result.msg}`);
            }
        },
        onError: (error) => {
            toast.error(`Signup failed. Please try again.`, {
                description: error.message
            });
        }
    })

    /// Signup mutation
    const verifyEmailMutation = useMutation({
        mutationFn: verify_email,
        onSuccess: (result) => {
            if (result && result?.data && result?.data?.cookies) {
                setToken(result.data.cookies.accessToken)
                refetchUserProfile()
            }
        },
        onError: (error) => {
            toast.error(`verification failed. Please try again.`, {
                description: error.message
            });
        }
    })


    const resetPasswordEmailMutation = useMutation({
        mutationFn: reset_password,
        onSuccess: (result) => {
            if (result.success===true) {
                toast.success(`${result.msg}`);
             }
        },
        onError: (error) => {
            toast.error(`verification failed. Please try again.`, {
                description: error.message
            });
        }
    })

    const verifyResetEmailMutation = useMutation({
        mutationFn: verify_reset,
        onSuccess: (result) => {
            if (result && result?.data && result?.data?.cookies) {
                setToken(result.data.cookies.accessToken)
                refetchUserProfile()
                toast.success("Password reset successful!");
                router.push('/dashboard')
            }
            if (result && result?.success === false) {
                toast.info(`${result.msg}`);
            }
        },
        onError: (error) => {
            toast.error(`verification failed. Please try again.`, {
                description: error.message
            });
        }
    })


    return {
        token,
        isAuthenticated,

        /// React Query loading states
        isLoadingUser,

        error: userError,

        login: loginMutation,
        signup: signupMutation,
        resetPasswordEmail: resetPasswordEmailMutation,
        verifyEmail: verifyEmailMutation,
        verifyResetEmail: verifyResetEmailMutation,
        logout: () => {
            storeLogout()
            clearUser()
        },
        refetchUserProfile
    }
}


