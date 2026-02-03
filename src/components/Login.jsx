import { GoogleIcon, ArrowRightIcon } from './Icons'
import BrandingPanel from './BrandingPanel'
import { useTheme } from '../context/ThemeContext'

const BASE = import.meta.env.BASE_URL

const BACKGROUND_GRADIENT_LIGHT = `${BASE}Background%20Gradient.svg`
const BACKGROUND_GRADIENT_DARK = `${BASE}Background%20Gradient%20Dark.svg`
const OKTA_ICON_LIGHT = `${BASE}Okta--Streamline-Svg-Logos%202.svg`
const OKTA_ICON_DARK = `${BASE}Okta--Streamline-Svg-Logos%202%20Dark.svg`

const BACKGROUNDS = [
  { url: BACKGROUND_GRADIENT_LIGHT, showInDark: false },
  { url: BACKGROUND_GRADIENT_DARK, showInDark: true },
]

const AUTH_BUTTON_CLASS =
  'w-full h-10 flex items-center justify-center gap-3 px-4 rounded-lg cursor-pointer transition-all duration-500 ease-in-out'
const AUTH_BUTTON_STYLE = {
  backgroundColor: 'var(--bg-button)',
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: 'var(--border-color)',
  boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.06)',
  backdropFilter: 'blur(10px)',
}

const OktaThemeIcon = () => {
  const { isDark } = useTheme()
  return (
    <div className="relative w-5 h-5">
      <img
        src={OKTA_ICON_LIGHT}
        alt=""
        aria-hidden
        className="absolute w-5 h-5 transition-opacity duration-500 ease-in-out"
        style={{ opacity: isDark ? 0 : 1 }}
      />
      <img
        src={OKTA_ICON_DARK}
        alt=""
        aria-hidden
        className="absolute w-5 h-5 transition-opacity duration-500 ease-in-out"
        style={{ opacity: isDark ? 1 : 0 }}
      />
    </div>
  )
}

const AUTH_BUTTONS = [
  { label: 'Continue with Okta', Icon: OktaThemeIcon },
  { label: 'Continue with Google', Icon: GoogleIcon },
]

const Login = () => {
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {BACKGROUNDS.map(({ url, showInDark }) => (
        <div
          key={url}
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{
            backgroundImage: `url("${url}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isDark === showInDark ? 1 : 0,
          }}
        />
      ))}

      <BrandingPanel />

      <div
        className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-8 transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          filter: 'var(--form-drop-shadow)',
          backdropFilter: 'var(--form-backdrop-blur)',
          borderLeft: '1px solid var(--border-color)',
        }}
      >
        <div className="w-full max-w-md">
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

          <div className="space-y-4">
            {AUTH_BUTTONS.map(({ label, Icon }) => (
              <button
                key={label}
                type="button"
                className={AUTH_BUTTON_CLASS}
                style={AUTH_BUTTON_STYLE}
              >
                <Icon />
                <span
                  className="text-sm font-medium transition-all duration-500 ease-in-out"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center my-8">
            <div
              className="flex-1 border-t transition-all duration-500 ease-in-out"
              style={{ borderColor: 'var(--divider-color)' }}
            />
            <span
              className="px-4 text-sm transition-all duration-500 ease-in-out"
              style={{ color: 'var(--divider-text)' }}
            >
              OR
            </span>
            <div
              className="flex-1 border-t transition-all duration-500 ease-in-out"
              style={{ borderColor: 'var(--divider-color)' }}
            />
          </div>

          <a
            href="#"
            className="flex items-center justify-center gap-2 font-medium transition-all duration-500 ease-in-out"
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
