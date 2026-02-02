import { useTheme } from '../context/ThemeContext'

// Use BASE_URL for GitHub Pages compatibility
const BASE = import.meta.env.BASE_URL

// Image paths from public folder (URL encoded for spaces)
const LEFT_IMAGE_LIGHT = `${BASE}Onboarding%20Image%20Left%20(Light%20Mode).png`
const LEFT_IMAGE_DARK = `${BASE}Onboarding%20Image%20Left%20(Dark%20Mode).png`
const RIGHT_IMAGE_LIGHT = `${BASE}Onboarding%20Image%20Right%20(Light%20Mode).png`
const RIGHT_IMAGE_DARK = `${BASE}Onboarding%20Image%20Right%20(Dark%20Mode).png`

// Logo for light and dark themes
const LOGO_LIGHT = `${BASE}SquareX%20Logo%20Light.svg`
const LOGO_DARK = `${BASE}SquareX%20Logo%20Dark.svg`

const BrandingPanel = () => {
  const { isDark, toggleTheme } = useTheme()

  const leftImage = isDark ? LEFT_IMAGE_DARK : LEFT_IMAGE_LIGHT
  const rightImage = isDark ? RIGHT_IMAGE_DARK : RIGHT_IMAGE_LIGHT
  const logo = isDark ? LOGO_DARK : LOGO_LIGHT

  return (
    <div 
      className="hidden lg:flex lg:w-1/2 justify-between items-center relative overflow-hidden transition-all duration-500 ease-in-out"
    >
      {/* Logo - positioned at top left - Click to toggle theme */}
      <div 
        className="absolute top-[32px] left-[48px] flex items-center gap-2 z-10 cursor-pointer transition-opacity duration-200"
        onClick={toggleTheme}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <img src={logo} alt="SquareX Logo" className="h-[30px]" />
      </div>

      {/* Left Image - Sidebar panel */}
      <img
        src={leftImage}
        alt="Left panel"
        className="absolute top-[42%] left-0 h-1/2 -translate-x-[59%] xl:-translate-x-[59%] 2xl:-translate-x-[59%] skew-x-[18.521deg] rounded-[24px] transition-all duration-500 ease-in-out"
        style={{
          boxShadow: 'var(--box-shadow-left)',
        }}
      />

      {/* Right Image - Browser window */}
      <img
        src={rightImage}
        alt="Right panel"
        className="absolute top-[12.2%] left-0 h-1/2 translate-x-[38%] xl:translate-x-[38%] 2xl:translate-x-[38%] skew-x-[18.521deg] rounded-[24px] transition-all duration-500 ease-in-out"
        style={{
          boxShadow: 'var(--box-shadow-right)',
        }}
      />
    </div>
  )
}

export default BrandingPanel
