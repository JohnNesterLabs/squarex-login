import { GoogleIcon, ArrowRightIcon } from './Icons'
import BrandingPanel from './BrandingPanel'
import { useTheme } from '../context/ThemeContext'

// Use BASE_URL for GitHub Pages compatibility
const BASE = import.meta.env.BASE_URL

// Background gradients from public folder
const BACKGROUND_GRADIENT_LIGHT = `${BASE}Background%20Gradient.svg`
const BACKGROUND_GRADIENT_DARK = `${BASE}Background%20Gradient%20Dark.svg`

// Okta icons for light and dark themes
const OKTA_ICON_LIGHT = `${BASE}Okta--Streamline-Svg-Logos%202.svg`
const OKTA_ICON_DARK = `${BASE}Okta--Streamline-Svg-Logos%202%20Dark.svg`

const Login = () => {
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Background gradients - Crossfade between light and dark */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `url("${BACKGROUND_GRADIENT_LIGHT}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isDark ? 0 : 1,
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `url("${BACKGROUND_GRADIENT_DARK}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isDark ? 1 : 0,
        }}
      />

      {/* Left Side - Branding Section */}
      <BrandingPanel />

      {/* Right Side - Login Form */}
      <div
        className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-8 transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          filter: 'var(--form-drop-shadow)',
          backdropFilter: 'var(--form-backdrop-blur)',
          borderLeft: '1px solid var(--border-color)',
        }}
      >
        <div className="w-full max-w-md">
          {/* Heading */}
          <h1 
            className="text-3xl font-medium mb-3 transition-all duration-500 ease-in-out"
            style={{ color: 'var(--text-heading)' }}
          >
            Let's get started
          </h1>
          <p 
            className="mb-10 transition-all duration-500 ease-in-out"
            style={{ color: 'var(--text-primary)' }}
          >
            Sign in with your work account and access all your tools and services securely.
          </p>

          {/* Login Buttons */}
          <div className="space-y-4">
            {/* Continue with Okta */}
            <button
              className="w-full h-10 flex items-center justify-center gap-3 px-4 rounded-lg cursor-pointer transition-all duration-500 ease-in-out hover:opacity-80"
              style={{
                backgroundColor: 'var(--bg-button)',
                borderWidth: '1.5px',
                borderStyle: 'solid',
                borderColor: 'var(--border-color)',
                boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.06)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Okta icon - Crossfade between light and dark */}
              <div className="relative w-5 h-5">
                <img 
                  src={OKTA_ICON_LIGHT} 
                  alt="Okta" 
                  className="absolute w-5 h-5 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: isDark ? 0 : 1 }}
                />
                <img 
                  src={OKTA_ICON_DARK} 
                  alt="Okta" 
                  className="absolute w-5 h-5 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: isDark ? 1 : 0 }}
                />
              </div>
              <span 
                className="text-sm font-medium transition-all duration-500 ease-in-out"
                style={{ color: 'var(--text-primary)' }}
              >
                Continue with Okta
              </span>
            </button>

            {/* Continue with Google */}
            <button
              className="w-full h-10 flex items-center justify-center gap-3 px-4 rounded-lg cursor-pointer transition-all duration-500 ease-in-out hover:opacity-80"
              style={{
                backgroundColor: 'var(--bg-button)',
                borderWidth: '1.5px',
                borderStyle: 'solid',
                borderColor: 'var(--border-color)',
                boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.06)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <GoogleIcon />
              <span 
                className="text-sm font-medium transition-all duration-500 ease-in-out"
                style={{ color: 'var(--text-primary)' }}
              >
                Continue with Google
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div 
              className="flex-1 border-t transition-all duration-500 ease-in-out"
              style={{ borderColor: 'var(--divider-color)' }}
            ></div>
            <span 
              className="px-4 text-sm transition-all duration-500 ease-in-out"
              style={{ color: '#B8B8B8' }}
            >
              OR
            </span>
            <div 
              className="flex-1 border-t transition-all duration-500 ease-in-out"
              style={{ borderColor: 'var(--divider-color)' }}
            ></div>
          </div>

          {/* Sign in with email */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 font-medium transition-all duration-500 ease-in-out hover:opacity-70"
            style={{ color: 'var(--text-primary)' }}
          >
            Sign in with email
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
