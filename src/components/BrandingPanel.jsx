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

  return (
    <div 
      className="hidden md:flex md:w-1/2 justify-between items-center relative z-10 overflow-hidden transition-all duration-500 ease-in-out"
    >
      {/* Logo - positioned at top left - Click to toggle theme */}
      {/* Crossfade between light and dark logos */}
      <div 
        className="absolute top-[32px] left-[48px] flex items-center gap-2 z-10 cursor-pointer"
        onClick={toggleTheme}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <div className="relative h-[30px] w-[120px]">
          <img 
            src={LOGO_LIGHT} 
            alt="SquareX Logo" 
            className="absolute h-[30px] transition-opacity duration-500 ease-in-out"
            style={{ opacity: isDark ? 0 : 1 }}
          />
          <img 
            src={LOGO_DARK} 
            alt="SquareX Logo" 
            className="absolute h-[30px] transition-opacity duration-500 ease-in-out"
            style={{ opacity: isDark ? 1 : 0 }}
          />
        </div>
      </div>

      {/* Left Image - Sidebar panel - Crossfade between light and dark */}
      {/* Responsive: md(768px) -> lg(1024px) -> xl(1280px) -> 2xl(1536px) -> 3xl(1920px) -> 4xl(2560px) -> 5xl(3840px) */}
      <img
        src={LEFT_IMAGE_LIGHT}
        alt="Left panel light"
        className="absolute top-[42%] left-0 w-auto h-[250px] md:h-[250px] lg:h-[350px] xl:h-[420px] 2xl:h-1/2 3xl:h-[55%] 4xl:h-[60%] 5xl:h-[65%] -translate-x-[59%] md:-translate-x-[59%] lg:-translate-x-[59%] xl:-translate-x-[59%] 2xl:-translate-x-[59%] 3xl:-translate-x-[59%] 4xl:-translate-x-[59%] 5xl:-translate-x-[59%] skew-x-[18.521deg] rounded-[24px] transition-all duration-500 ease-in-out"
        style={{
          boxShadow: 'var(--box-shadow-left)',
          opacity: isDark ? 0 : 1,
        }}
      />
      <img
        src={LEFT_IMAGE_DARK}
        alt="Left panel dark"
        className="absolute top-[42%] left-0 w-auto h-[250px] md:h-[250px] lg:h-[350px] xl:h-[420px] 2xl:h-1/2 3xl:h-[55%] 4xl:h-[60%] 5xl:h-[65%] -translate-x-[59%] md:-translate-x-[59%] lg:-translate-x-[59%] xl:-translate-x-[59%] 2xl:-translate-x-[59%] 3xl:-translate-x-[59%] 4xl:-translate-x-[59%] 5xl:-translate-x-[59%] skew-x-[18.521deg] rounded-[24px] transition-all duration-500 ease-in-out"
        style={{
          boxShadow: 'var(--box-shadow-left)',
          opacity: isDark ? 1 : 0,
        }}
      />

      {/* Right Image - Browser window - Crossfade between light and dark */}
      {/* Responsive: md(768px) -> lg(1024px) -> xl(1280px) -> 2xl(1536px) -> 3xl(1920px) -> 4xl(2560px) -> 5xl(3840px) */}
      <img
        src={RIGHT_IMAGE_LIGHT}
        alt="Right panel light"
        className="absolute top-[12.2%] left-0 w-auto h-[250px] md:h-[250px] lg:h-[350px] xl:h-[420px] 2xl:h-1/2 3xl:h-[55%] 4xl:h-[60%] 5xl:h-[65%] translate-x-[38%] md:translate-x-[38%] lg:translate-x-[38%] xl:translate-x-[38%] 2xl:translate-x-[38%] 3xl:translate-x-[38%] 4xl:translate-x-[38%] 5xl:translate-x-[38%] skew-x-[18.521deg] rounded-[24px] transition-all duration-500 ease-in-out"
        style={{
          boxShadow: 'var(--box-shadow-right)',
          opacity: isDark ? 0 : 1,
        }}
      />
      <img
        src={RIGHT_IMAGE_DARK}
        alt="Right panel dark"
        className="absolute top-[12.2%] left-0 w-auto h-[250px] md:h-[250px] lg:h-[350px] xl:h-[420px] 2xl:h-1/2 3xl:h-[55%] 4xl:h-[60%] 5xl:h-[65%] translate-x-[38%] md:translate-x-[38%] lg:translate-x-[38%] xl:translate-x-[38%] 2xl:translate-x-[38%] 3xl:translate-x-[38%] 4xl:translate-x-[38%] 5xl:translate-x-[38%] skew-x-[18.521deg] rounded-[24px] transition-all duration-500 ease-in-out"
        style={{
          boxShadow: 'var(--box-shadow-right)',
          opacity: isDark ? 1 : 0,
        }}
      />
    </div>
  )
}

export default BrandingPanel
