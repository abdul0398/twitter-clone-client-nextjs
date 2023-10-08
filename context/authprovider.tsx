'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';

export function Providers({children}) {
  return (
    <GoogleOAuthProvider clientId="66678178563-stchr3c8isdp5dpcdbtpous97o0f4srp.apps.googleusercontent.com">
          {children}
    </GoogleOAuthProvider>
  )
}